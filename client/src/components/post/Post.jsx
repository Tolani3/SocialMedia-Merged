import { MoreVert } from "@mui/icons-material";
import "./post.css";
import { Users } from "../../dummyData";
import { useState } from "react";

export default function /* A function that takes in a parameter called `post` and returns a `div`
element. */
Post({ post }) {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);

  /**
   * If the state of isLiked is true, then subtract 1 from the like state, otherwise add 1 to the like
   * state.
   */
  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };
  /* Filtering the `Users` array to get the user with the id of 1. */
  //const user = Users.filter(u=>u.id===1)

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={Users.filter((u) => u.id === post.userId)[0].profilePicture}
              alt=""
            />
            <span className="postUsername">
              {Users.filter((u) => u.id === post.userId)[0].username}
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight"></div>
          <MoreVert />
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc} </span>
          {/* Add "stars" for rating review */}
          <img className="postImg" src={post.photo} alt="" />
        </div>
        <div className="postBottom"></div>
        <div className="postBottomLeft">
          <img
            className="likeIcon"
            src="assets/like.png"
            onClick={likeHandler}
            alt=""
          />
          <img
            className="likeIcon"
            src="assets/heart.png"
            onClick={likeHandler}
            alt=""
          />
          <span className="postLikeCounter"> people liked it</span>
        </div>
        <div className="postBottomRight">
          <span className="postCommentText">{post.comment} comments</span>
        </div>
      </div>
    </div>
  );
}
