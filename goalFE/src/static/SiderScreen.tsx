import { GlobalContext } from "@/global/globalProvider";
import React, { useContext } from "react";

const SiderScreen = () => {
  const { setUser }: any = useContext(GlobalContext);
  return (
    <div>
      <button
        className="p-4 mt-10 bg-black text-white w-full"
        onClick={() => {
          setUser({});
          localStorage.removeItem("auth");
          location.reload();
        }}
      >
        LogOut
      </button>
    </div>
  );
};

export default SiderScreen;
