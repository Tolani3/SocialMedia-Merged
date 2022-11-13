//import { StepContext } from "@mui/material";
import { useEffect, useState } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import axios from "axios";
import "./feed.css";
/* Importing the Posts array from the dummyData.js file. */
// import {Posts} from "../../dummyData"
//import { useState, useEffect } from "react";

export default function Feed({ username }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
         //setPosts(res.data)
        ? await axios.get("posts/profile/" + username)
        : await axios.get("posts/timeline/");
      //console.log(res);
      setPosts(res.data);
    };
    fetchPosts();
  }, [username])
  // useEffect(() =>{
  //   console.log("Feed rendered")
  // },[]);

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((p) => (
            <Post key ={p._id} post={p}/>
          ))}
      </div>
    </div>
  );
}
