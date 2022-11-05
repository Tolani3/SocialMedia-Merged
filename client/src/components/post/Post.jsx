import React from 'react'
import { MoreVert } from "@mui/icons-material";
import "./post.css";

export default function Post() {
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src="/assets/person/1.jpeg" alt="" className="postProfileImg" />
                    <span className="postUsername">Tolani Animasahun</span>
                    <span className="postDate">5 mins ago</span>
                </div>
                <div className="postTopRight">
                    <MoreVert/>
                </div>  
            </div>
            <div className="postCenter">
                <span className="postText">Hey! Its my first post :) </span>
                <img src="assets/post/10.jpg" alt="" className="postImg" />
            </div>    
            <div className="postBottom"></div>
                <div className="postBottomLeft">
                    <img className="likeIcon" src="assets/like.png" alt="" />
                    <img className="likeIcon" src="assets/heart.png" alt="" />
                    <span className="postLikeCounter">10 people liked it</span>
                </div>
                <div className="postBottomRight">
                </div>
        </div>
    </div>
  );
}
