import React, { useState, useEffect } from 'react'
import axios from 'axios';
// import { useParams } from 'react-router-dom'
import './Details.css'
import img3 from '../../assets/img3.png'
import icon1 from "../../assets/takeoff-the-plane.png"


const Details = () => {
    // const { id } = useParams();
    // const [item, setItem] = useState(null);
    // const [data, setdata] = useState([]);
    // useEffect(() => {
    //     const getData = async () => {
    //         const data = await axios.get("http://localhost:8000/api/data");
    //         setdata(data.data);
    //     }
    //     getData()
    // }, [id])
    // useEffect(() => {
    //     const item =
    //         (data.find((item) => item.id === parseInt(id)))

    //     // window.scroll(0, 0)
    //     if (item) {
    //         setItem(item)
    //     }
    // }, [data, id])
    // console.log(item);
    const [Flights,setFlights] = useState([]);
    
    useEffect(()=>{
      const getData = async () => {
        const data = await axios.get("http://localhost:8000/api/data");
        setFlights(data.data);
      }
      getData()
    },[])
    return (
        <div className='Details'>
            <div className='details_img'>
                <img src={img3} alt='img3' className='img3' />
            </div>
            <div className='card_info'>
              <div className='card_left'>
                <div className='card1'>
                    <div className='card1_head'>
                    <i class="bi bi-airplane air"></i>
                    <span>Flight from JDXB,DUbai-UAE to RUH</span>
                    </div>
                    <div >
                    {
        Flights.slice(0,1).map((e,id)=>(
        <div className='card1_body' key={id}>
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
              <p>Terminal 4,New York</p>
              <p>Wed,16 jul 2021</p>
              <button className='pay_btn del'>flight details</button>
            </div>
           
          </div>
        </div>
        ))

       }
                    </div>
                </div>
                <div className='card2'>
                    <h2>Extra convenience for your trip</h2>
                    <div className='box'>
                    <i class="bi bi-tag-fill tag"></i>
                    <p>Booking hotel and flight together save you up 30%</p>
                    </div>
                    <div className='box'>
                    <i class="bi bi-currency-dollar tag"></i>
                    <p>Add airport transfer for special price for you!</p>
                    </div>
                    <div className='box'>
                    <i class="bi bi-currency-dollar tag"></i>
                    <p> add Add airport transfer for special price for you! </p>
                    </div>
                    <button className='show_btn'>Show more extra convenience for your  trip</button>
                </div>
                <div className='card3'></div>
              </div>
              <div className='card_right'>
                <div className='right_card1'></div>
                <div className='right_card2'></div>
              </div>
            </div>
        </div>
    )
}

export default Details
