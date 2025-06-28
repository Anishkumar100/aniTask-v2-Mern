const express = require('express'); // Import Express framework

const mongoose = require('mongoose'); // Import Mongoose (though unused in this example)

const app = express(); // Create an Express app

// Middleware to parse JSON data from incoming requests
app.use(express.json());

// Temporary in-memory array to store tasks (acts like a mock database)
const taskList = [];

/**
 * POST /todo
 * Purpose: Add a new task to the taskList
 */
app.post("/todo", (req, res) => {
    const { title, description } = req.body;

    const newTask = {
        id: taskList.length, // Assign id based on length (not safe for real apps)
        title,
        description
    };

    taskList.push(newTask); // Add new task to the list
    res.status(201).json(taskList); // Respond with the full updated list
});

/**
 * GET /todo
 * Purpose: Retrieve all tasks
 */
app.get('/todo', (req, res) => {
    res.status(200).json(taskList);
});

/**
 * PUT /todo/:id
 * Purpose: Update a task by its ID
 */
app.put('/todo/:id', (req, res) => {
    const { title, description } = req.body;
    const id = parseInt(req.params.id);

    // Find the task object
    const selectedTask = taskList.find(task => task.id === id);

    // If task doesn't exist
    if (!selectedTask) {
        return res.status(404).json({ message: `No Task Found` });
    }

    // Update the task (we need the index to replace it in the array)
    const taskIndex = taskList.findIndex(task => task.id === id);

    const updatedTask = {
        id,
        title,
        description
    };

    taskList[taskIndex] = updatedTask;

    res.status(200).json(taskList);
});

/**
 * DELETE /todo/:id
 * Purpose: Delete a task by its ID
 */
app.delete('/todo/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const taskIndex = taskList.findIndex(task => task.id === id);

    // If task not found
    if (taskIndex === -1) {
        return res.status(404).json({ message: `Error: No task found` });
    }

    taskList.splice(taskIndex, 1); // Remove task from list
    res.status(200).json(taskList); // Respond with updated list
});

// Start server
const port = 3000;
app.listen(port, () => {
    console.log(`The Server is running on port ${port}`);
});



/*

This method is not followed use mongDB. I did this for understanding
 */