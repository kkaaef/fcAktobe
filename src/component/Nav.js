import react from "react"
import style from "./Nav.module.css"
import { Link } from "react-router-dom"
import Navitem from "./Nav.item"
import Navbar from "./NavBar"
const fixturesList = [
    {name:"Fixtures",to:"/Fixtures"},
    {name:"Results",to:"/Results"},
    {name:"Tables",to:"/Tables"}]
const ticketsList = [
    {name:"Membership", to:"/Membership"},
    {name:"Tours", to:"/Tours"},
    {name:"Tickets", to:"/Tickets"}]

const moreList =[
    {name:"Players",to:"/Players"},
    {name:"Statistic",to:"/Statistic"},
    {name:"Media", to:"/Social"}
]
const navbar =[
{name:"News" ,to:"/news" },
{ name :"Video" ,to:"/video"},
{name:"Fixtures" ,to:"/video"},
{ name:"Tickets",to:"/video" },
{ name:"Shop" ,to:"/video"},
{ name:"More" ,to:"/video"}]

    const Nav = () =>{
return(
<div className={style.nav}>

<div className={style.navDesktop}>
<Navitem name="News" to="/news" />
<Navitem name ="Video" to="/video"/>
<Navitem name="Fixtures" options={fixturesList} />
<Navitem name ="Tickets" options={ticketsList}/>
<Navitem name ="Shop" to="/Shop"/>
<Navitem name ="More" options={moreList}/>
</div>
<div className={style.navMobile}>
<div className={style.header}>
<Link to="/">< img   src= "https://upload.wikimedia.org/wikipedia/ru/thumb/c/c4/FC_Aktobe_Logo.svg/1200px-FC_Aktobe_Logo.svg.png" /></Link>
</div>
<Navbar options={navbar} >

</Navbar>
</div>

</div>
)




}
export default Nav;