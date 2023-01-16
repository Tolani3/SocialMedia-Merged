import axios from "axios";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import { useEffect, useState } from "react";
/* Importing the Posts array from the dummyData.js file. */
// import {Posts} from "../../dummyData"

export default function Feed() {
  const [posts, setPosts] = useState([]);
  //const [text, SetText] = useState("");

  // useEffect(()=>{
  //   console.log("Feed working Yes")
  // },[])

  useEffect(() => {
    // const fetchPosts = async () => {
    //  const res = await axios.get("posts/timeline/635351b8dadb67a384bde2d7")
    const res = axios.get("posts/timeline/635351b8dadb67a384bde2d7");
    console.log(res);
    //   setPosts(res.data);
    // };
    // fetchPosts();
  }, []);

  return (
    <div className="feed">
      {/* <input type="text" onChange = {e=>SetText(e.target.value)}/> */}
      <div className="feedWrapper">
        {/* Mapping through the Posts array and returning a Post component for each post. */}
        <Share />
        {posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
}
