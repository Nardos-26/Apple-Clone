// Question on React API
// 1. Apple has a YouTube channel with various videos available. Please display 9 random
// YouTube videos on your React based Apple website replica by fetching these videos from
// the YouTube data API that is publicly available. Please display your YouTube video
// component right below the component that has the last two images, i.e., right below the
// Arcade and Apple Card section. You will need to get an API key to access YouTube data
// API.

import React, { useEffect, useState } from 'react'
import './YoutubeVideos.css'

function YoutubeVideos() {
    const [YoutubeVideos, setVideos] = useState([]);
    // const [SortOption] = useState("data")
    useEffect (()=>{
        fetch(
          `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=8&order=date&key=AIzaSyCKswuw-YlqVCSrJVFt_A2-w73KEucKOKQ`
        )
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            setVideos(data.items);
          });
        
    },[]);
console.log(YoutubeVideos);

 return (
      <div className="allVideosWrapper">
        <div className="container">
          <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-12">
              <div className="title-wraper bold video-title-wrapper">
                Latest Videos <br />
              </div>
            </div>
       {YoutubeVideos?.map((singleVideo,i)=>{
        let vidId = singleVideo.id.videoId;
        let vidLink =`https://www.youtube.com/watch?v=${vidId}`;
        let videoWrapper = (
          <div key={i} className="col-sm-12 col-md-6 col-lg-4">
            <div className="videoThumbnail">
              <a href={vidLink} target="_blank" rel="noreferrer">
                <img
                  src={singleVideo.snippet.thumbnails.high.url}
                  alt="thumbnails"
                />
              </a>
            </div>
            <div className="videoInWrapper">
              <div className="videoTitle">
                <a href={vidLink} target="_blank" rel="noreferrer">
                  {singleVideo.snippet.title}
                </a>
                <div className="videoDesc">
                  {singleVideo.snippet.description}
                </div>
                <div className="Publishing date">{singleVideo.snippet.publishedAt}</div>
              </div>
            </div>
          </div>
        );
          return videoWrapper;
       })}     

            
          </div>
        </div>
      </div>
    );
  }


       
export default YoutubeVideos;