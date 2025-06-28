const express = require('express'); // Import express framework
const app = express(); // Create an instance of express

// Install: npm install cors
const cors = require('cors');
app.use(cors());

const mongoose = require('mongoose'); // Import mongoose for MongoDB operations

// Middleware to parse JSON from incoming requests
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/aniTask-v2')
  .then(() => {
    console.log(`MongoDB database connected`);
  })
  .catch((error) => {
    console.log(`MongoDB database not connected`);
  });


// Define a schema for todo tasks
const todoSchema = mongoose.Schema({
  title: {
    required: true,
    type: String
  },
  description: {
    required: true,
    type: String
  }
});

// Create a model (collection) based on the schema
const todoModel = mongoose.model('todo', todoSchema);


// Route to create a new task
app.post("/todo", async (req, res) => {
  try {
    const { title, description } = req.body;

    // Save the new task using the model
    if (!title || !description) {
      return res.status(400).json({ message: `U CANT FOOL ME WITH EMPTY TASKS` });
    }

    const newTask = await todoModel.create({ title, description });

    res.status(201).json(newTask); // Respond with the created task
  }
  catch (error) {
    res.status(500).json({ error: error.message }); // Internal Server Error
  }
});


// Route to get all tasks
app.get("/todo", async (req, res) => {
  try {
    const totalTasks = await todoModel.find(); // Retrieve all documents

    res.status(200).json(totalTasks); // Respond with all tasks
  }
  catch (error) {
    res.status(500).json({ message: `Couldn't get the tasks` });
  }
});


// Route to update a task by ID
app.put("/todo/:id", async (req, res) => {
  try {
    const { title, description } = req.body; // Extract updated data
    const id = req.params.id;

    // Find by ID and update the document
    const updatedTask = await todoModel.findByIdAndUpdate(
      id,
      { title, description },
      { new: true } // Return the updated document
    );

    if (!updatedTask) {
      res.status(404).json({ message: `The requested task is not found` }); // Not Found
    } else {
      res.status(200).json(updatedTask); // OK
    }
  }
  catch (error) {
    res.status(500).json({ message: `Couldn't perform task updation` }); // Internal Server Error
  }
});


// Route to delete a task by ID
app.delete("/todo/:id", async (req, res) => {
  try {
    const id = req.params.id;

    // Delete the task
    const deletedTask = await todoModel.findByIdAndDelete(id);

    if (!deletedTask) {
      return res.status(404).json({ message: `The Task u wanted to delete doesn't exist` });
    }

    res.status(202).json({ message: `Task Deleted Successfully`, deletedTask }); // Accepted + return deleted data
  }
  catch (error) {
    res.status(500).json({ message: `Couldn't perform task deletion` });
  }
});

app.delete("/todo", async (req, res) => {
  try {
    await todoModel.deleteMany() // for all task deletion
    res.status(200).json({ message: `All tasks deleted` })
  }
  catch (error) {
    res.status(500).json({ message: `Couldn't perform task deletion` });
  }
})
/* Start the server on port 8000 since on port 3000 the React fronted
   will be running in a different server */

const port = 8000;
app.listen(port, () => {
  console.log(`Backend Server connected to port ${port}`);
});


/* I PUT COMMENTS FOR UNDERSTANDING. BUT WELL DONE DA BOI!!!!!!!!!!! */