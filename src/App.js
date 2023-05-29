import { BrowserRouter } from "react-router-dom";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar />
    </BrowserRouter>
  );
};

export default App;
