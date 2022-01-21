import react from "react"
import { Link } from "react-router-dom";
import style from "./Header.module.css"
const Header = () =>{

return(
    <div className={style.header}>
<Link to="/">< img  src= "https://upload.wikimedia.org/wikipedia/ru/thumb/c/c4/FC_Aktobe_Logo.svg/1200px-FC_Aktobe_Logo.svg.png" /></Link>
</div>
)




}
export default Header;