import React, { useEffect, useState } from 'react'
import Header from './Header'
import {IoMdThumbsUp} from 'react-icons/io'
import pfp from './image/avatar.avif'
import {BiLike} from 'react-icons/bi'
import {BiDislike} from 'react-icons/bi'
import {PiShareFatLight} from 'react-icons/pi'
import {LiaDownloadSolid} from 'react-icons/lia'
import {BsThreeDots} from 'react-icons/bs'
import allVideos from './useful-data-main/videos.json'
import { Link } from 'react-router-dom'

function Videoinfo(props){
  const video= props.video;
  const [likes, setLikes] = useState(
    JSON.parse(localStorage.getItem(`like_${video.id}`)) ? 
    JSON.parse(localStorage.getItem(`like_${video.id}`)) : []
  );

  const [likesCount, setCount] = useState(
    JSON.parse(localStorage.getItem(`like_${video.id}`)) ? 
    JSON.parse(localStorage.getItem(`like_${video.id}`)).length : 0
  )

  const handleLike = () => {
    let newLikes = likes;
    console.log(newLikes)
    console.log(localStorage)
    if(newLikes.includes(localStorage.getItem('email'))){
      newLikes.pop(localStorage.getItem('email'));
    }else{
      newLikes.push(localStorage.getItem('email'));
    }
    
    localStorage.setItem(`like_${video.id}`, JSON.stringify(newLikes))
    setLikes(newLikes);
    setCount(newLikes.length)
  }

  useEffect(() => {
    console.log("useeffect called")
    setLikes(
      JSON.parse(localStorage.getItem(`like_${video.id}`)) ? 
      JSON.parse(localStorage.getItem(`like_${video.id}`)) : []
    );

    setCount(
      JSON.parse(localStorage.getItem(`like_${video.id}`)) ? 
      JSON.parse(localStorage.getItem(`like_${video.id}`)).length : 0
    )

  }, [props.video])

  const copyToClipboard = (text) => {
    console.log('text', text)
    var textField = document.createElement('textarea')
    textField.innerText = text
    document.body.appendChild(textField)
    textField.select()
    document.execCommand('copy')
    textField.remove()

    alert("Copied to clipboard : " + text)
  }
  return(
    <>
      <div class="main-vid-tittle">
        <b>{video.title}</b>
      </div>
      <div class="main-vid-info">
        <div class="main-vid-channel-info">
          <div id="pfp">
            <img class="pfp" src={pfp} height={'55px'} width={'55px'}></img>
          </div>
          <div class="channel-name">
            <p id="name"><b>{video.channelName}</b></p>
            <p class="name">69M subscribers</p>
          </div>
          <button class="subscribe"><b>Subscribe</b></button>
        </div>
        <div class="download-section">
          <div class="likes-dislikes">
            <button onClick={()=> handleLike()} class="like">
              {likes.includes(localStorage.getItem('email')) ?
                <IoMdThumbsUp/>
              :
                <BiLike/>
              }
              {likes.length}
            </button>
            <button className="dislike"><BiDislike/></button>
          </div>
          <button onClick={()=> copyToClipboard(window.location.href)} title="Copy Link" class="share">
            <PiShareFatLight/>
            <span class="share2">
              <b>Share</b>
            </span>
          </button>
          <button class="download">
            <LiaDownloadSolid/>Download
          </button>
          <button class="more"><BsThreeDots/></button>
        </div>
      </div>
    </>
  )
}
function SuggestedVideos(props){
  let video = props.video;
  return (
    <>
      <div className='suggested-video'>
        <div className='suggestion-image'>
        <Link to={`/video?id=${video.id}`} onClick={() => {
            props.setVideoId(video.id)
            props.setVideo(video)
            }}>
            <img className='suggestion-image' src={video.thumbnail.url} title={video.title}/>
          </Link>
        </div>
        <div className='suggestion-content'>
          <div className='video-info'>
            <p class="track-title margin-0 video-info-title"><b>{video.title}</b></p>
            <p class="margin-0 smaller-fontsize">{video.channelName}</p>
            <p class="margin-0 smaller-fontsize">375k views • {video.channelName} ago</p>
          </div>
        </div>
      </div>
    </>
  );
}

function Video() {
  const [currVideoId, setCurrentVideoId] = useState("");
  const [currVideo, setCurrVideo] = useState({});

  let videos = allVideos;

  useEffect(() => {
    let address = new URL(window.location);
    let queryParameters = address.searchParams;
    let currentVideoId = queryParameters.get("id");
    for(let i = 0; i < videos.length; i++){
      if(videos[i].id == currentVideoId){
        setCurrVideo(videos[i]);
        break;
      }
    }
    setCurrentVideoId(currentVideoId);
  }, [])
  return (
    <div>

        <Header/>
        <div class="main-content">

          <div class="main-vid-side">

            <div class="main-vid">
            <iframe class="iframe-vid" src={`https://www.youtube.com/embed/${currVideoId}?si=TKEByZDP-O57JERg?rel=0&mute=1&autoplay=1`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <Videoinfo video={currVideo}/> 
            <div class="discription">
              <p><b>98,889 views  5 Nov 2023  #valorantpro #valorant #vct</b><br/>
                AD Take your game to the next level by downloading Valorant Tracker for Free
                </p></div>
          </div>

          <div className='suggestions'>
            <p> Suggested Videos</p>
            {videos.map((video) => {
            return (<SuggestedVideos video={video}
              setVideoId={setCurrentVideoId} 
              setVideo = {setCurrVideo}/>);
            })}
          </div>
        </div>

    </div>
  )
}

export default Video;