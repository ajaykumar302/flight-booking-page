import React from 'react'
import img0 from '../../assets/img0.png'
import './Home.css'
import icon1 from "../../assets/takeoff-the-plane.png"
import icon2 from "../../assets/airplane-landing.png"
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const submit = ()=>{
    navigate('/result')
  }
  return (
    <div className='Home'>
      <div className='Home_img'>
        <img src={img0} alt='img1' className='img1' />
      </div>
      <div className='Home_form'>
        <div className='form_header'>
          <div className='header_txt'>
            <div className='txt'>Search Flight</div>
            <p>Get the latest on our COVID 19 responses </p>
          </div>
          <div className='header_icon'>
          <i class="bi bi-airplane bii"></i>
            <span>Round flight</span>
          </div>
        </div>
        <div >
         <form className='Form_body'>
          <div className='box'>
            <img src={icon1} alt='icon' className='icon'/>
            <div className='input_div'>
             <label>Depature city</label>
             <input type='text' placeholder='DHL' className='inpt' required/>
            </div>
          </div>
          <i class="bi bi-arrow-left-right arr"></i>
          <div className='box'>
            <img src={icon2} alt='icon' className='icon'/>
            <div className='input_div'>
             <label>Arrival city</label>
             <input type='text' placeholder='DHL' className='inpt' required/>
            </div>
          </div>
          <div className='box'>
          <i class="bi bi-calendar3 cal" ></i>
            <div className='input_div'>
             <label>Depature - Arrival</label>
             <input type='date' placeholder='DHL' className='inpt' required/>
            </div>
          </div>
          <div className='box'>
          <i class="bi bi-person-circle cal"></i>
            <div className='input_div'>
             <label>Passengers</label>
             <input type='number' placeholder='00' className='inpt' required/>
            </div>
          </div>
          <button className='bttn' onClick={submit}><i class="bi bi-search"></i><br/>Serach</button>
         </form>
        </div>
        <div className='form_footer'>
        <i class="bi bi-clock ic"></i>
        <p className='time'>Flight duration <b>2h,30m</b> </p>
        <div className='txtt'>Looking for travel ideas?</div>
        <p className='map'><i class="bi bi-globe-americas ame"></i>Explore Map</p>
        </div>
      </div>
    </div>
  )
}

export default Home