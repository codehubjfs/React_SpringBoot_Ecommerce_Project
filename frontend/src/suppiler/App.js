import './App.css';
import PickupAddress from './Components/PickupAddress';
import AllRoutes from "./routes/AllRoutes";
import { BrowserRouter } from "react-router-dom";

// import BankDetails from './BankDetails';
// import SellerDetailsPage from './SellerDetailsPage';

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