import { useRoutes } from "react-router-dom";
import routes from "./routes";
import GeolocationProvider from "./components/GeolocationProvider";
import Header from "./components/Header";

const App = () => {
  const elements = useRoutes(routes);

  return (
    <GeolocationProvider>
      <Header />
      {elements}
    </GeolocationProvider>
  );
};

export default App;
