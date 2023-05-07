import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import FontStyles from "./assets/fonts/fonts";
import { BrowserRouter } from "react-router-dom";
import { UserContextProvider } from "./context/UserContext";
import Theme from "./theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <UserContextProvider>
    <Theme>
      <BrowserRouter>
        <FontStyles />
        <App />
      </BrowserRouter>
    </Theme>
  </UserContextProvider>
);
