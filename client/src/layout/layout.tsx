import { Outlet } from "react-router-dom";
import Sider from "../static/Sider";

const layout = () => {
  return (
    <div className="h-[95vh] m-4 border rounded-md overflow-hidden">
      <div className="fixed w-[300px] h-[95vh] border-r rounded-bl-md ">
        <Sider />
      </div>

      <div className="flex w-full justify-end h-full">
        <div className="w-[calc(100vw-340px)] h-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default layout;
