import React from "react";
import Video from "../assets/video/background-video.mp4";

const BSVideo = () => {
    return (
        <div class="video-background">
            <video id="bgvid" autoPlay loop muted playsinline>
                <source src={Video} type="video/mp4"></source>
            </video>
        </div>
    );
};

export default BSVideo;
