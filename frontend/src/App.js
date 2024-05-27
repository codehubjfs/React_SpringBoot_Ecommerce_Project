// import "./Admin1.css";
import Layout from "./layouts/Layout";
import AllRoutes from "./routes/AllRoutes";
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        
          <AllRoutes />
        
      </div>
    </BrowserRouter>
  );
}

export default App;
