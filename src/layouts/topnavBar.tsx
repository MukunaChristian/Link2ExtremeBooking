import { Link } from "@remix-run/react"; 

interface TopBarProps {
  title: string;
}

function TopBar({ title }: TopBarProps) {
  return (
    <div className="top-bar">
      <div className="title">{title}</div>
      <div className="flex-icon">
      <div className="user-name">
      <h3>Super Admin</h3>
      <h3>BobVanFake@gmail.com</h3>
      </div>
      <div className="icon-user">
        <img src="app/assets/user-2-svgrepo-com.png" alt="" />
      </div>
      
      </div>
    </div>
  );
}

export default TopBar;
