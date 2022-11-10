//import { StepContext } from "@mui/material";
import { useEffect, useState } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import axios from "axios";
import "./feed.css";
/* Importing the Posts array from the dummyData.js file. */
// import {Posts} from "../../dummyData"
//import { useState, useEffect } from "react";

export default function Feed() {
  const[posts,setPosts] = useState([]);

  useEffect(()=>{
    const fetchPosts = async () =>{
      const res = await axios.get("posts/timeline/635351b8dadb67a384bde2d7");
      //setPosts(res.data)
      console.log(res);
    };
    fetchPosts();
  },[]);

  
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share/>
      {posts.map((p) => (
            <Post key ={p.id} post={p}/>
          ))}
      </div>
    </div>
  )
}
