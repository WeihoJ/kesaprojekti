import React from "react";
import Video from "../assets/video/background-video.mp4";
import "../components/BSVideo.css"

const BSVideo = () => {
    return (
        <div class="video-background">
            <div class="video-wrap">
                <div id="video" >
                    <video id="bgvid" autoPlay loop muted playsinline class="videoWidth">
                        <source src={Video} type="video/mp4"></source>
                    </video>
                </div>
            </div>
        </div>
    );
};

export default BSVideo;
