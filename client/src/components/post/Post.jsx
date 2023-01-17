import { MoreVert } from "@mui/icons-material";
import "./post.css";
// import { Users } from "../../dummyData";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";



export default function /* A function that takes in a parameter called `post` and returns a `div`
element. */
Post({ post }) {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;


  useEffect(()=>{
    const fetchUser = async () => {
      const res = await axios.get(`/users?userId=${post.userId}`);
      //console.log(res)
      setUser(res.data);
    };
    fetchUser();
  },[post.userId]);

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
            <Link to={`/profile/${user.username}`}>
            <img
              className="postProfileImg"
              //src={Users.filter((u) => u.id === post.userId)[0].profilePicture}
              src={user.profilePicture || PF+"person/noAvater.jpg"}
              alt=""
            />
            </Link>
            <span className="postUsername">
              {user.username}
            </span>
            <span className="postDate">{format(post.createdAt)}</span>
          </div>
          <div className="postTopRight"></div>
          <MoreVert />
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc} </span>
          {/* Add "stars" for rating review */}
          <img className="postImg" src={PF+post.img} alt="" />
        </div>
        <div className="postBottom"></div>
        <div className="postBottomLeft">
          <img
            className="likeIcon"
            src={`${PF}like.png`}
            onClick={likeHandler}
            alt=""
          />
          <img
            className="likeIcon"
            src={`${PF}heart.png`}
            onClick={likeHandler}
            alt=""
          />
          <span className="postLikeCounter">{like} people liked it</span>
        </div>
        <div className="postBottomRight">
          <span className="postCommentText">{post.comment} comments</span>
        </div>
      </div>
    </div>
  );
}
