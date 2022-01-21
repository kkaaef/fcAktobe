import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Header from "./component/Header.js";
import Nav from "./component/Nav";
import Content from './component/Content';
import { BrowserRouter } from 'react-router-dom';
import Footter from './component/Footter';
function App() {
return(

<div  className='main'>
<BrowserRouter>
<Header/>
<Nav/>
<Content/>
<Footter/>
</BrowserRouter>

</div>

)
}
export default App;
