import React from 'react'
import {BiSolidMicrophone} from 'react-icons/bi'
import {CgProfile} from 'react-icons/cg'
import {GoSearch} from 'react-icons/go'
import ytlogo from './image/yt logo.png'
import {AiOutlineMenu} from 'react-icons/ai'
function Header() {
  return (
    <div>
        <div id="bigsc">
        <div id="lfsc">
            <div id="b1">
            <button class="bt"><AiOutlineMenu /></button>
            </div>
            <div id="b2">
                <img className="sc" src={ytlogo}/>
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
        <button id="risc">
          <CgProfile/> 
          <span class="signup">
            <b>Sign up</b>
          </span>
        </button>
        </div>
    </div>
  )
}

export default Header
