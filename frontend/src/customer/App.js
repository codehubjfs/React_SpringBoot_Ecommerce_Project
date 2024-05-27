// import "./App.css";
import { AuthProvider } from "./AuthContext";
import { AllRoutes } from "./routes/AllRoutes";
// import "./Style.css";

function App() {
  return (
    <AuthProvider >
       <div>
      <AllRoutes />
    </div>
    </AuthProvider>
   
  );
}

export default App;
