import "./sidebar2.css";

export default function Sidebar2() {
  return (
    <div class="sidebar">
        <div class="sidebar-top">
            <i class="logo fab fa-sketch"></i>
            <span class="brand">The App</span>
        </div>
        <div class="sidebar-center">
            <ul class="list">
                <li class="list-item">
                    <i class="list-item-icon fas fa-home"></i>
                    <span class="list-item-text">Dashboard</span>
                </li>
                <li class="list-item">
                    <i class="list-item-icon fas fa-search"></i>
                    <span class="list-item-text">Search</span>
                </li>
                <li class="list-item active">
                    <i class="list-item-icon fas fa-stream"></i>
                    <span class="list-item-text">Insights</span>
                </li>
                <li class="list-item">
                    <i class="list-item-icon fas fa-book"></i>
                    <span class="list-item-text">Docs</span>
                </li>
                <li class="list-item">
                    <i class="list-item-icon fas fa-users"></i>
                    <span class="list-item-text">Community</span>
                </li>
                <li class="list-item">
                    <i class="list-item-icon fas fa-toolbox"></i>
                    <span class="list-item-text">Tools</span>
                </li>
                <li class="list-item">
                    <i class="list-item-icon fas fa-shopping-basket"></i>
                    <span class="list-item-text">Market</span>
                </li>
                <li class="list-item">
                    <i class="list-item-icon far fa-question-circle"></i>
                    <span class="list-item-text">Resources</span>
                </li>
            </ul>
        </div>
        <div class="sidebar-bottom">
            <div class="color-box dark"></div>
            <div class="color-box night"></div>
            <div class="color-box light"></div>
        </div>
    </div>
    
  );
}
