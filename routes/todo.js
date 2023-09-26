const router = require("express").Router();
const Todo = require("../models/Todo");


// routes
router.post("/add/todo", (req, res) => {
    const { todo } = req.body;
    const newTodo = new Todo({ todo });

    // save the todo
    newTodo
        .save()
        .then(() => {
            console.log("Successfully added todo!");
            res.redirect("/");
        })
        .catch((err) => console.log(err));
});

router.delete("/delete/todo/:_id", (req, res) => {
    const { _id } = req.params;
    Todo.deleteOne({ _id })
        .then(() => {
            console.log("Deleted Todo Successfully!");
            // send a JSON response indicating success
            res.json({ success: true });
        })
        .catch((err) => {
            console.log(err);
            // send a JSON response indicating failure
            res.json({ success: false });
        });
});

router.patch("/edit/todo/:_id", (req, res) => {
  const { _id } = req.params;
  const { todo } = req.body;
  Todo.findByIdAndUpdate(_id, { todo }, { new: true })
      .then((updatedTodo) => {
          console.log("Successfully updated todo!");
          res.json({ success: true, todo: updatedTodo });
      })
      .catch((err) => {
          console.log(err);
          res.json({ success: false });
      });
});



module.exports = router;