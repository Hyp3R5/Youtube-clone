import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import './App.css'
import Header from './Header'
import {AiOutlineRight} from 'react-icons/ai'
import ghost from './image/ghost.jpg'
import {GoHomeFill} from 'react-icons/go'
import {FiPlayCircle} from 'react-icons/fi'
import {BsCollectionPlay} from 'react-icons/bs'
import {RxAvatar} from 'react-icons/rx'
import {AiOutlinePlaySquare} from 'react-icons/ai'
import {AiOutlineClockCircle} from 'react-icons/ai'
import {BiSolidLike} from 'react-icons/bi'
import avatar from './image/avatar.avif'
function Videogrid(){
  return(
    <div className="a">
      <div>
        <img className='tbn' src={ghost} />
        </div>
        <div className="tittle">
          <div>
            <img src={avatar} height={'60px'} width={'60px'}></img>
          </div>
          <div>
            <h3 id="vid-name">
            CALL OF DUTY MODERN WARFARE 3 Gameplay Walkthrough
            </h3>
            <p class="pg">COD</p>
            <p class="pg">375K viwes • 11 months ago</p>
          </div>
        </div>
    </div>
  )
}
function Home() {
  let videos=[1,2,3,4,5,6,7,8,9]
  return (
    <div className="App">
        <Header />
    <div id="dsc">
      <div id="homesc">
      <button class="side-btn"><GoHomeFill />
        <span class="side-btn-lable">
          <b>Home</b>
        </span>
      </button>
      <button class="side-btn"><FiPlayCircle />
        <span class="side-btn-lable">
          <b>Shorts</b>
        </span>
      </button>
      <button class="side-btn"><BsCollectionPlay />
        <span class="side-btn-lable">
          <b>Subscription</b>
        </span>
      </button>
      <hr />
      <button class="side-btn">
        <span class="you">
          <b>You</b>
        </span>
        <AiOutlineRight />
      </button>
      <button class="side-btn"><RxAvatar />
        <span class="side-btn-lable">
          <b>Your channel</b>
        </span>
      </button>
      <button class="side-btn"><AiOutlinePlaySquare />
        <span class="side-btn-lable">
          <b>Your videos</b>
        </span>
      </button>
      <button class="side-btn"><AiOutlineClockCircle />
        <span class="side-btn-lable">
          <b>Watch Later</b>
        </span>
      </button>
      <button class="side-btn"><BiSolidLike />
        <span class="side-btn-lable">
          <b>Liked videos</b>
        </span>
      </button>
      <hr/>
      </div>
      <div id="secsc">
        <div id="upper-tags">
          <button class="upper-tags">All</button>
          <button class="upper-tags">Gaming</button>
          <button class="upper-tags">Call of duty Warzone</button>
          <button class="upper-tags">Live</button>
          <button class="upper-tags">Chess Openings</button>
          <button class="upper-tags">Mixes</button>
          <button class="upper-tags">Music</button>
          <button class="upper-tags">JDMs</button>
          <button class="upper-tags">Cars</button> 
          <button class="upper-tags">Apex Legends</button>
          <button class="upper-tags">Explorin</button>
          <button class="upper-tags">More...</button>
        </div>
        
         {videos.map((video)=>{
          return <Videogrid />
         })}
      </div>
    </div>
    </div>
  )
}

export default Home;
