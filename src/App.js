// import './App.css';
import { AppContextProvider } from "./context/AppContext";
import Dashboard from "./pages/Dashboard";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="App">
      <AppContextProvider>
        <Dashboard />
        <ToastContainer/>
      </AppContextProvider>
    </div>
  );
}

export default App;
