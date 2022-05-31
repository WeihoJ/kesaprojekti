import React from "react";
import Video from "../assets/video/background-video.mp4";

const BSVideo = () => {
    return (
        <div class="video-background">
            <div class="video-wrap">
                <div id="video">
                    <video id="bgvid" autoplay loop muted playsinline>
                        <source src={Video} type="video/mp4"></source>
                    </video>
                </div>
            </div>
        </div>
    );
};

export default BSVideo;
