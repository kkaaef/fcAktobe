import React from 'react'
import Boxtext from '../newsComponent/Boxtext'
import style from "../newsComponent/Content.module.css"
export default function News() {
    return (
<div className={style.content}>
<div className={style.largeContainer}>     
<Boxtext 
category="interviews"
name = "Morgan: My mum wouldn't support me if I played for anyone else!" 
image = "https://www.mancity.com/meta/media/zappebuh/esmemorgan_newcontract_003.jpg?width=291&height=164&mode=crop"
size = "large"/>
</div>

</div>
    )
}

