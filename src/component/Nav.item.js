import react,{useRef, useState} from "react"
import { Link } from "react-router-dom";
import useOnClickOutside from "../utils/useOnClickOutside";
import style from "./Nav.module.css"
const Navitem = ({name, to, options}) =>{
const [isOpen,setIsOpen]= useState(false);
const toggleIsOpen = ()=>{
    setIsOpen(!isOpen);
}
const ref = useRef();
useOnClickOutside(ref,function(){
    setIsOpen(false);
});

return(
<div className={style.linkContainer} ref={ref}>
    {options===undefined  ? <Link className={style.link} to={to} >{name }</Link>:(
       <div onClick={toggleIsOpen} className={style.link+" "+(isOpen && style.open)}>{name}  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
       <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"></path>
     </svg></div>)} 
       {isOpen && <div className={style.dropDown} >
           {options.map(el=>{ 
               return <Link to={el.to}>{el.name}</Link>
           })}
           </div>} 
</div>
)
}
export default Navitem;