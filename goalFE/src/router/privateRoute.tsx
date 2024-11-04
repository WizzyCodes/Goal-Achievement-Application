import { GlobalContext } from "@/global/globalProvider";
import { FC, useContext } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute: FC<any> = ({ children }) => {
  const { user }: any = useContext(GlobalContext);

  const data = JSON.parse(localStorage.getItem("auth")!);

  return <div>{data ? <div>{children}</div> : <Navigate to="/" />}</div>;
};

export default PrivateRoute;
