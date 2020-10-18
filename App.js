import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';


function App() {
return (
<>
<Router>
<Navbar />

<switch>
    <Route path = '/' exact />
</switch>
</Router>

<div className = 'content'>
<p className = 'content-1'>Genesys Provides Opportunities For Young Nigerian Techies
    And Opportunities To Grow And Innovate.
</p>

<p className = 'content-2'>
We understand that opportunities are scarce in these parts. <br/>
We are either creating or exposing our people to these opportunities.
</p>

<div className='image-1'>
<img src = "/images/image-1.jpg" alt="" className = 'image-1'/>
        </div>

<div className='image-2'>
<img src = "/images/image-2.jpg" alt="" className = 'image-2'/>
<span className = 'learnable'>Learnable</span>
<p className = 'learnable-content'>Every year, young Nigerians are launching new careers<br/>
 in the technology industry. <br/>
Find out how Genesys is helping them do it.
</p>
<p className = 'learn-more'>Learn more</p>
</div>

<div className = 'content-3'>
<p className = 'agora'>Agora</p>
<p className = 'agora-content'>We are reimagining the workplace and how people work. Find out how our 
co-working spaces can help you enjoy the work that you do. </p>
<p className = 'learn-more-2'>Learn more</p>
<img src = "/images/image-3.jpg" alt="" className = 'image-3'/>
</div>
<div className = 'content-4'>
<img src = "/images/image-4.jpg" alt="" className = 'image-4'/>
<p className='start-zone'>StartZone</p>
<p className='start-zone-content'>The business environment is harsh for early-stage businesses.<br/>
 We can help you rise above it all.
</p>
<p className = 'learn-more-3'>Here’s How</p>
</div>
<div className = 'content-5'>
<img src = "/images/image-5.jpg" alt="" className = 'image-5'/>
<p className = 'content-descript'>The best team in the world</p>
<p className = 'more-descript'>We work with the most amazing people our industry has to offer. <br/>
They are really passionate about making a difference
</p>
<p className = 'learn-more-4'>See team</p>
</div>
</div>
</>


);
}
export default App;