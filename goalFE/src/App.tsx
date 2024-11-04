import { RouterProvider } from "react-router-dom";
import { mainRouter } from "./router/mainRouter";
import { GlobalProvider } from "./global/globalProvider";

const App = () => {
  return (
    <GlobalProvider>
      <RouterProvider router={mainRouter} />
    </GlobalProvider>
  );
};

export default App;
