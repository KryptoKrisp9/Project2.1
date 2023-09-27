// const router = require("express").Router();
// const Toddo = require("../models/Todo.js");

// //  newTodo
//       .save()
//       .then(() => {
//         console.log("Successfully added todo!");
//         res.redirect("/");
//       })
//       .catch((err) => console.log(err));
//   })

//   router.delete("/delete/todo/:_id", (req, res) => {
//     const { _id } = req.params;
//     Todo.deleteOne({ _id })
//         .then(() => {
//             console.log("Deleted Todo Successfully!");
           
//             res.json({ success: true });
//         })
//         .catch((err) => {
//             console.log(err);
//             // send a JSON response indicating failure
//             res.json({ success: false });
//         });
// });

// router.put("/edit/todo/:_id", async (req, res) => {
//     const { _id } = req.params;
//     const { todo } = req.body;
    
//     try {
//         const updatedTodo = await Todo.findByIdAndUpdate(_id, { todo }, { new: true });
//         console.log("Successfully updated todo!");
//         res.json({ success: true, todo: updatedTodo });
//     } catch (err) {
//         console.log(err);
//         res.json({ success: false });
//     }
// });

// function editTodo(todoId) {
//     const newTodo = prompt('Enter the new text for the task:');
//     if (newTodo) {
//         fetch('/edit/todo/' + todoId, {
//             method: 'PUT', // Make sure to use PUT here
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ todo: newTodo }),
//         })
//         .then(response => response.json())
//         .then(data => {
//             if (data.success) {
//                 console.log('Task updated successfully!');
//                 location.reload();
//             } else {
//                 console.log('Failed to update task.');
//             }
//         });
//     }
// }
// function editTodo(todoId) {
//     const newTodo = prompt('Enter the new text for the task:');
//     if (newTodo) {
//         fetch('/edit/todo/' + todoId, {
//             method: 'PUT', // Make sure to use PUT here
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ todo: newTodo }),
//         })
//         .then(response => response.json())
//         .then(data => {
//             if (data.success) {
//                 console.log('Task updated successfully!');
//                 location.reload();
//             } else {
//                 console.log('Failed to update task.');
//             }
//         });
//     }
// }

  
  
  
//   module.exports = router;
//  routes

//   router.post("/add/todo", (req, res) => {
//     const { todo } = req.body;
//     const newTodo = new Todo({ todo });

//     // save the todo
  

const router = require("express").Router();
const Todo = require("../ToDo");
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
  })
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


router.put("/edit/todo/:_id", async (req, res) => {
    const { _id } = req.params;
    const { todo } = req.body;
    

    try {
        const updatedTodo = await Todo.findByIdAndUpdate(_id, { todo }, { new: true });
        console.log("Successfully updated todo!");
        res.json({ success: true, todo: updatedTodo });
    } catch (err) {
        console.log(err);
        res.json({ success: false });
    }
});

function editTodo(todoId) {
    const newTodo = prompt('Enter the new text for the task:');
    if (newTodo) {
        fetch('/edit/todo/' + todoId, {
            method: 'PUT', // Make sure to use PUT here
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ todo: newTodo }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                console.log('Task updated successfully!');
                location.reload();
            } else {
                console.log('Failed to update task.');
            }
        });
    }
}
function editTodo(todoId) {
    const newTodo = prompt('Enter the new text for the task:');
    if (newTodo) {
        fetch('/edit/todo/' + todoId, {
            method: 'PUT', // Make sure to use PUT here
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ todo: newTodo }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                console.log('Task updated successfully!');
                location.reload();
            } else {
                console.log('Failed to update task.');
            }
    })
    }
}



  module.exports = router;