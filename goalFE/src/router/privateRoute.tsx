import { GlobalContext } from "@/global/globalProvider";
import { FC, useContext } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute: FC<any> = ({ children }) => {
  const { user }: any = useContext(GlobalContext);
  const isAuthenticated = JSON.parse(localStorage.getItem("auth")!);

  return (
    <div>
      {!isAuthenticated ? (
        <div>
          <Navigate to="/" />
        </div>
      ) : (
        <div>{children}</div>
      )}
    </div>
  );
};

const PublicRoute: FC<any> = ({ children }) => {
  const { user }: any = useContext(GlobalContext);

  const isAuthenticated = JSON.parse(localStorage.getItem("auth")!);

  return (
    <div>
      {isAuthenticated ? <Navigate to="/dashboard" /> : <div>{children}</div>}
    </div>
  );
};

export { PrivateRoute, PublicRoute };

// import { GlobalContext } from "@/global/globalProvider";
// import { FC, useContext } from "react";
// import { Navigate } from "react-router-dom";

// const PrivateRoute: FC<any> = ({ children }) => {
//   const { user }: any = useContext(GlobalContext);

//   const data = JSON.parse(localStorage.getItem("auth")!);

//  ;
// };

// export default PrivateRoute;
