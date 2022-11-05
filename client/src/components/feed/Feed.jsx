import Post from "../post/Post";
import Share from "../share/Share"
import "./feed.css"
/* Importing the Posts array from the dummyData.js file. */
// import {Posts} from "../../dummyData"

export default function Feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share/>
        <Post/>
      </div>
    </div>
  )
}
