import React, { useState,useEffect } from 'react'
import axios from 'axios';
// import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import icon1 from "../../assets/takeoff-the-plane.png"
import img from '../../assets/img2.png'
import './Flights.css'

const Flights = () => {
  const [Flights,setFlights] = useState([]);
  const navigate = useNavigate();
  useEffect(()=>{
    const getData = async () => {
      const data = await axios.get("http://localhost:8000/api/data");
      setFlights(data.data);
    }
    getData()
  },[])
  console.log(Flights);
  const submitHandle = ()=>{
    navigate('/details')
  }
  return (
    <div className='flights'>
      <div className='flights_img'>
      <img src={img} alt='img2' className='img2'/>
      </div>
      <div className='con'>
       {
        Flights.map((e,id)=>(
        <div className='card' key={id}>
        <div className='logos'>
        <img src={e.logo} alt='card_logo' className='card_logo'/>
        <h4>{e.title}</h4>
        </div>
          <div className='Details'>
           <div className='day'>
            <p>friday</p>
            <p>duration:{e.Duration}</p>
            <p>saturday</p>
           </div>
           <div className='day_time'>
             <h3>{e.depature}</h3>
             <i class="bi bi-dot dot"></i>
             <i class="bi bi-dot dot"></i>
             <i class="bi bi-dot dot"></i>
             <i class="bi bi-dot dot"></i>
             <img src={icon1} alt='icon' className='icons'/>
             <i class="bi bi-dot dot"></i>
             <i class="bi bi-dot dot"></i>
             <i class="bi bi-dot dot"></i>
             <i class="bi bi-dot dot"></i>
             <h3>{e.Arrivel}</h3>
           </div>
           <div className='city'>
            <p>{e.from}</p>
            <p>Direct</p>
            <p>{e.to}</p>
           </div>
           <div className='button'>
            <button className='btn1'>Flight details</button>
            <button className='btn1'>Fare info</button>
            <button className='btn1'>Refund</button>
           </div>
          </div>

          <div className='pay'>
            <div className='pay_del'>
              <p>start from</p>
              <h3>{e.price}/pax</h3>
              <button className='pay_btn' onClick={submitHandle}>View Deals</button>
            </div>
            <div className='scan'>
              <button>Send me</button>
              <img src={e.code} alt='QRcode' className='code'/>
            </div>
          </div>
        </div>
        ))

       }
       </div>
    </div>
  )
}

export default Flights