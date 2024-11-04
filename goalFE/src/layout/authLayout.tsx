import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="h-screen w-full justify-center items-center flex flex-col">
      <div className="h-[calc(100vh-200px)] flex justify-center items-center">
        <Outlet />
      </div>

      <div className="flex-1 " />
      <div className="mb-5">Built with ❤️❤️</div>
    </div>
  );
};

export default AuthLayout;
