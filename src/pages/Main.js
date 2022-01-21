import react from "react"
import style from "../component/Content.module.css"
import Boxtext from "../component/Boxtext"
const main = () =>{
return(
<div className={style.content}>
<div className={style.largeContainer}>     
<Boxtext 
category="interviews"
name = "EDERSON: CLEAN SHEET RECORD A COLLECTIVE EFFORT" 
image = "https://www.mancity.com/meta/media/ltychvpc/ederson-clean.jpg?width=599&height=338&mode=crop"
size = "large"/>
</div>
<div className={style.middleContainer}>
<Boxtext
name = "Key Stamford Bridge win can inspire City ahead of Chelsea visit, says Dickov"
category="news"
image ="https://www.mancity.com/meta/media/jlgeqaxb/chelsea-city-goal-1-jesus.jpg?width=720"
size ="middle"
/>
<Boxtext
name = "Training gallery: City enjoy the winter sun"
category="news"
image ="https://www.mancity.com/meta/media/ecgbshsi/tf702378-1.jpg?width=352&height=198&mode=crop"
size ="middle"
/>
</div>

<div className={style.smallContainer}>
<Boxtext name = "City’s Super Saturday: A feast of football!"
category="news"
image ="https://www.mancity.com/meta/media/ybglh4tn/gettyimages-1362205301-1.jpg?width=146&height=82&mode=crop"
size ="small"
/>
<Boxtext name = "City v Bristol: Taylor on team news"
category="news"
image ="https://www.mancity.com/meta/media/tccporr3/gareth-taylor-bham-vid.jpg?width=169&height=95&mode=crop"
size ="small"
/>
<Boxtext name = "City’s Super Saturday: A feast of football!"
category="news"
image ="https://www.mancity.com/meta/media/1w5f3uan/carolos-tevez-celebrates-manchester-united-2010.jpg?width=169&height=95&mode=crop"
size ="small"
/>
<Boxtext name = "Morgan: My mum wouldn't support me if I played for anyone else!"
category="news"
image ="https://www.mancity.com/meta/media/uu1opk0i/bha-v-man-city-fa-youth-cup.jpg?width=169&height=95&mode=crop"
size ="small"
/>
</div>

</div>
)
}
export default main;