// import "./Admin1.css";
import Layout from "./layouts/Layout";
import AllRoutes from "./routes/AllRoutes";
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider } from "./customer/AuthContext";



function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
      <div className="App">
        
          <AllRoutes />
        
      </div>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
