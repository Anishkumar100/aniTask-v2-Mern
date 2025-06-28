import "./TaskDisplay.css"
import { FaEdit, FaTrash } from "react-icons/fa"

export const TaskDisplay = ({ url, result, updatedTask, setUpdatedTask, setResult}) => {

  const handleEdit = (id) => {
    const selectedItem = result.find((res) => res._id === id)
    localStorage.setItem('updatedTask', JSON.stringify(selectedItem))
    setUpdatedTask(selectedItem)

  }

  const handleDelete = async (id) => {
    try {

      const selectedItem = result.find((res) => res._id === id)
      const response = await fetch(`${url}/${selectedItem._id}`,
        {
          method: 'DELETE',
          headers:
          {
            'content-type': 'application/json'
          }
        }
      )

      if(response.ok)
      {
        const responseJson=response.json()
        setResult((prev)=>prev.filter((task)=>
        {
          return task._id !== selectedItem._id
        }))
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
    <section className="task-display-wrapper">
      {result.length === 0 ? (
        <p className="task-empty">No Tasks available 💤</p>
      ) : (
        <ul className="task-list">
          {result?.map((res) => (
            <li key={res._id} className="task-card">
              <div className="task-content">
                <h3 className="task-title">{res.title}</h3>
                <p className="task-desc">{res.description}</p>
              </div>
              <div className="task-actions">
                <button onClick={() => handleEdit(res._id)} className="edit-btn"><FaEdit /></button>
                <button onClick={() => handleDelete(res._id)} className="delete-btn"><FaTrash /></button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
