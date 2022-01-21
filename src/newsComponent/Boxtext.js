import react from "react"
import style from "./Boxtext.module.css"

const Boxtext = ({name, category, image, size}) =>{

return(
    
    <div className={style[size]} >
    <img src={image}></img>
    <div className={style.textContainer}>
    <div className={style.name}>{name}</div>
    <div className={style.category}>{category}</div>
    </div>
    </div>

)




}
export default Boxtext;

/// dodelat vse boxi  ternary statement dlya texta