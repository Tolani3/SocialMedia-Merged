import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
// import Feed from "../../components/feed/Feed";
// import Rightbar from "../../components/rightbar/Rightbar";
import "./home.css";

export default function Home() {
  return (
    /* A fragment. It is a way to group a list of children without adding extra nodes to the DOM. */
    <>
      <Topbar />
      <Sidebar />
    </>
  );
}
