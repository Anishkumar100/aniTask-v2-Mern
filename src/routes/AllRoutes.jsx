import {Routes,Route} from "react-router-dom"
import {Home,TaskManager,AboutDeveloper} from "../pages/indexPages"

export const AllRoutes = () => {
  return (
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path="/task-manager" element={<TaskManager/>}/>
    <Route path="/about" element={<AboutDeveloper/>}/>
   </Routes>
  )
}
