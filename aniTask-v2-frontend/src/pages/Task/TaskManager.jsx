import "./TaskManager.css"
import { TaskDisplay } from './TaskDisplay'
import { useFetch } from "../../hooks/useFetch"
import { useState, useMemo, useEffect } from "react"

export const TaskManager = () => {

  const [url, setUrl] = useState('http://localhost:8000/todo')
  const fetchOps = useMemo(() => ({
    method: "GET", 
    headers: { "content-type": "application/json" }
  }), []);


  const { setResult, result, setError, error, loading, setLoading } = useFetch({ url, fetchOps })

  const [updatedTask, setUpdatedTask] = useState(() => {
    try {
      const item = localStorage.getItem("updateTask");
      return item ? JSON.parse(item) : null;
    } catch (err) {
      localStorage.removeItem("updateTask");
      return null;
    }
  })

  useEffect(() => {
    console.log("Fetched Tasks:", result);
    if (updatedTask) {
      setTitle(updatedTask.title || "")
      setDescription(updatedTask.description || "")
    }
  }, [result, updatedTask]);





  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const handleSubmit = async (e) => {
    try {
      e.preventDefault()

      if (!updatedTask?._id) {
        const response = await fetch(url, {
          method: "POST",
          headers:
          {
            "content-type": "application/json"
          },
          body: JSON.stringify({ title, description })
        })

        if (response.ok) {
          const jsonResponse = await response.json()
          setResult((prev) => [...prev, jsonResponse])
          setTitle("")
          setDescription("")
        }
        else {
          setError(`No POST Responses obtained!`)
        }

        console.log(result)
      }
      else {
        const response = await fetch(`${url}/${updatedTask._id}`,
          {
            method: "PUT",
            headers:
            {
              'content-type': 'application/json'
            },
            body: JSON.stringify({ title, description })

          }
        )

        if (response.ok) {
          const jsonResponse = await response.json()
          setResult((prev) => prev.map((task) => {
            return task._id === jsonResponse._id ? jsonResponse : task
          }))
          localStorage.setItem("updateTask", "")
          setUpdatedTask(null)
          setTitle("")
          setDescription("")
        }
        else {
          setError(`No POST Responses obtained!`)
        }
      }

    }
    catch (error) {
      console.log(error.message)
    }

  }


  const handleAllDelete=async ()=>
  {
    try 
    {
      const response = await fetch(url,{
        method:'DELETE',
        headers:
        {
          'content-type':'application/json'
        }
      })

      if(response.ok)
      {
        const responseJson= await response.json()
        setResult([])
        setTitle("")
        setDescription("")
      }
      else
      {
        throw new Error
      }
    }
    catch (error) 
    {
     console.log(error.message) 
    }
  }



  return (
    <>
      <main>
        <div className="task-form-wrapper">
          <form className="task-manager" onSubmit={handleSubmit}>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" className="task-input" />
            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" className="task-input" />
            <button type="submit" className="task-button" >{!updatedTask?`Add Task`:`Update Task`}</button>
            <button type="button" className="delete-btn-global" onClick={()=>handleAllDelete()} >Delete All Tasks</button>

          </form>
        </div>


        <TaskDisplay url={url} setResult={setResult} result={result} updatedTask={updatedTask} setUpdatedTask={setUpdatedTask} />
      </main>

    </>
  )
}
