import React, { useState } from 'react'
import './Nav.css'
import logo from '../../assets/logo.png'
import { Modal, ModalBody, ModalHeader } from 'reactstrap'
import Signin from '../Signin/Sigin'
import Signup from '../Signup/Signup'
import { NavLink } from 'react-router-dom'
// import axios from 'axios'
// import { NavLink } from 'react-router-dom'

const Nav = () => {
  const [model, setModel] = useState(false)
  const [model2, setModel2] = useState(false)
  // const [info, setInfo] = useState([]);
  // useEffect(() => {
  //   const getData = async () => {
  //     const data = await axios.get("http://localhost:8080/api/users/details");
  //     setInfo(data.data);
  //   }
  //   getData()
  // }, [])
  // const handleLogout = () => {
	// 	localStorage.removeItem("token");
	// 	window.location.reload();
	// };
  return (
    <>
    <div className='Nav'>
            <div className='Nav_con1'>
              <img src={logo} alt='logo' className='logo' />
              <div className='logo_txt'>Ngefly</div>
            </div>
            <div >
              <ul type='none' className='Nav_con1'>
               <li>All flights</li>
                <li>Schedule</li>
                <li>Passengers</li>
                <li>Your orders</li>
              </ul>
            </div>
            <div className='Nav_con1'>
           
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
             
              <Modal
                size='1g'
                isOpen={model}
                toggle={() => setModel(!model)}
              >
                <ModalHeader
                  toggle={() => setModel(!model)}
                >
                  <ModalBody toggle={() => setModel(!model)}>
                    <Signin />
                  </ModalBody>

                </ModalHeader>
              </Modal>
              <button className='Nav_btn1' onClick={() => setModel(true)}>Sign in</button>
              <Modal
                size='1g'
                isOpen={model2}
                toggle={() => setModel2(!model2)}
              >
                <ModalHeader
                  toggle={() => setModel2(!model2)}
                >
                  <Signup />
                </ModalHeader>
              </Modal>
              <button className='Nav_btn2 btn btn-primary' onClick={() => setModel2(true)}>Sing up</button>
            </div>
          </div>
      {/* {
        !info ?
          
          : 
          <div className='Nav1'>
            <div className='Nav_con1'>
              <img src={logo} alt='logo' className='logo' />
              <div className='logo_txt'>Ngefly</div>
            </div>
            <div >
              <ul type='none' className='Nav_con1'>
                <li>All flights</li>
                <li>Schedule</li>
                <li>Passengers</li>
                <li>Your orders</li>
              </ul>
            </div>
            <div>
              <NavLink to='/admin'>Admin</NavLink>
              {info.map((e,id)=>(
                <div key={id}><i class="bi bi-person-circle cal"></i>{e.firstName}</div>
              ))}
              <button className='Nav_btn2' onClick={handleLogout}>
					Logout
				</button>
            </div>
          </div>
      } */}
    </>

  )
}

export default Nav