import { RouterProvider } from "react-router-dom";
import { mainRouter } from "./router/mainRouter";
import { GlobalProvider } from "./global/GlobalProvider";

const App = () => {
  return (
    <GlobalProvider>
      <RouterProvider router={mainRouter} />
    </GlobalProvider>
  );
};

export default App;
