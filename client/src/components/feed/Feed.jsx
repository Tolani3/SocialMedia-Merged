import Post from "../post/Post";
import Share from "../share/Share"
import "./feed.css"
/* Importing the Posts array from the dummyData.js file. */
import {Posts} from "../../dummyData"

export default function Feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share/>
        {Posts.map((p) => (/* Mapping through the Posts array and returning a Post component for each post. */
            <Post key ={p.id} post={p}/>
          ))}
      </div>
    </div>
  )
}
