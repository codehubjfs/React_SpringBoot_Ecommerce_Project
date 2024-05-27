import logo from "./logo.svg";
import "./App.css";


import AllRoutes from "./routes/AllRoutes";
import { BrowserRouter } from "react-router-dom";
import Layout from "./Layouts/Layout";

function App() {
  return (
    <BrowserRouter>   
      <div className="App">
        <Layout>
          <AllRoutes />
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
