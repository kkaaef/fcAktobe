import react from "react"
import style from "./Content.module.css"
import Boxtext from "./Boxtext"
import Main from "../pages/Main"
import { Route, Routes } from "react-router-dom"
import News from "../pages/News"
const Content = () =>{

return(

    <div className={style.content}>
    <Routes>
    <Route path="/" element={<Main/>}/>
    <Route path="/news" element={<News/>}/>

     
</Routes>
</div>
)
}
export default Content;