import AppRoutes from "./routes/AppRoutes";
import { BrowserRouter } from "react-router";
import "./App.css"
import Index from "./routes/Index";
function App() {
    return (
      <BrowserRouter>
            <Index/>
        </BrowserRouter>  
    )
}


export default App