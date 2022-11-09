import Topbar from "../../components/topbar/Topbar";
import Feed from "../../components/feed/Feed";

import Sidebar from "../../components/sidebar/Sidebar";
// import Sidebar2 from "../../components/sidebar2/Sidebar2";

// import Rightbar from "../../components/rightbar/Rightbar";

import "./home.css"

export default function Home() {
  return (
    /* A fragment. It is a way to group a list of children without adding extra nodes to the DOM. */
    <>
      <Topbar />
      <div className="homeContainer">
        <Sidebar/>
        {/* <Sidebar2/> */}
        <Feed />
        {/* <Rightbar /> */}
      </div>
    </>
  );
}
