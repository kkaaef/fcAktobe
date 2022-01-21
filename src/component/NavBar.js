import react,{useRef, useState} from "react"
import { Link } from "react-router-dom";
import useOnClickOutside from "../utils/useOnClickOutside";
import style from "./Nav.module.css"
const NavBar = ({name,options}) =>{
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
    <div onClick={toggleIsOpen} className={style.link}>
    <svg viewBox="0 0 100 80" width="40" height="40">
  <rect width="100" height="20"></rect>
  <rect y="30" width="100" height="20"></rect>
  <rect y="60" width="100" height="20"></rect>
</svg></div> 
       {isOpen &&  <div className={style.navWin} >
           <div className={style.closeSvg}>
           <Link to="/">< img onClick={toggleIsOpen}  src= "https://upload.wikimedia.org/wikipedia/ru/thumb/c/c4/FC_Aktobe_Logo.svg/1200px-FC_Aktobe_Logo.svg.png" />
           </Link>
           <svg onClick={toggleIsOpen} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 512 512"  xmlSpace="preserve">
<g>
	<g>
		<path d="M437.019,74.981C388.668,26.628,324.379,0,256,0S123.332,26.628,74.981,74.981C26.629,123.333,0,187.62,0,256
			c0,68.38,26.628,132.668,74.981,181.019C123.333,485.371,187.621,512,256,512s132.668-26.628,181.019-74.981
			C485.371,388.667,512,324.38,512,256S485.372,123.332,437.019,74.981z M256,480.653C132.125,480.653,31.347,379.874,31.347,256
			S132.125,31.347,256,31.347S480.653,132.126,480.653,256S379.875,480.653,256,480.653z"/>
	</g>
</g>
<g>
	<g>
		<path d="M411.16,167.337l-66.497-66.496L256,189.503l-88.663-88.663l-66.497,66.496L189.503,256l-88.663,88.663l66.497,66.497
			L256,322.497l88.663,88.663l66.497-66.497L322.497,256L411.16,167.337z M366.828,344.663l-22.167,22.165L256,278.165
			l-88.663,88.663l-22.166-22.165L233.834,256l-88.663-88.663l22.166-22.165L256,233.835l88.663-88.663l22.166,22.165L278.166,256
			L366.828,344.663z"/>
	</g>
</g>
</svg>
           </div>
           {options.map(el=>{ 
               return <Link onClick={toggleIsOpen} to={el.to}>{el.name}</Link>
           })}
           </div>} 
</div>
)
}
export default NavBar;