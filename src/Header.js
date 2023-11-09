import React,{ useEffect, useState } from 'react'
import {BiSolidMicrophone,BiLogOut} from 'react-icons/bi'
import {CgProfile} from 'react-icons/cg'
import {GoSearch} from 'react-icons/go'
import ytlogo from './image/yt logo.png'
import {AiOutlineMenu} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import avtar from './image/avatar.avif'
function Header() {
  const [isUserLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        if(localStorage.getItem('isUserLoggedIn') == 'true'){
            setIsLoggedIn(true);
        }
    }, [])

    const handleLogout = () => {
        localStorage.setItem('isUserLoggedIn', false);
        localStorage.removeItem('email');

        setIsLoggedIn(false);
    }
  return (
    <div>
        <div id="bigsc">
        <div id="lfsc">
            
            <button class="b1"><AiOutlineMenu /></button>
           
            <div id="b2">
              <Link to="/">
                <img className="sc" src={ytlogo}/>
              </Link>
                
            </div>
        </div>
        <div id="misc">
            <input type="text" id="m1" placeholder="Search"/>
            <div id="search">
              <button id="mag"><GoSearch/></button>
              </div>
            
            <div id="m2">
            <button id="mic"><BiSolidMicrophone/></button>
            </div>
        </div>
                {
                    isUserLoggedIn ? (
                        <div class="header-items header-profile">
                            <BiLogOut class="logout" title='Logout' onClick={() => handleLogout()}/>
                            <img src={avtar} height={'40px'} width={'40px'}></img>
                            <p class="user-email">{localStorage.getItem('email')}</p>
                        </div>
                    ) : (
                      <Link to={'/signin'}>
                        <button class="risc">
                          <CgProfile/><span class="signup"><b>Sign up</b></span> 
                        </button>
                      </Link>
                    )
                }
          
          
        </div>
    </div>
  )
}

export default Header