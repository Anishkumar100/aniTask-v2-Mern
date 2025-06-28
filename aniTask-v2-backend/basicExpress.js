/*
In this js file we are exploring the basic file structure of an express server. The ToDo app's express server will be run in server.js since we kept it as main in package.json 
*/

// creating the web server in the node environment using express framework


const express =require('express')

//instance of express
const app= express()

//defining a route
app.get('/',(req,res)=>
{
     res.send('Hello This is the response i am sending for ur request')

})


//start the server

const port=3000

app.listen(port,()=>{

    console.log(`The Server is running on port ${port}`)

})