import "./App.css";
import { Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Homepage from "./pages/Homepage";
import Header from "./component/Header";

function App() {
  return (
    <div className="App">
      <Route path="/" component={Header} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/signup" component={RegisterPage} />
      <Route exact path="/" component={Homepage} />
    </div>
  );
}

export default App;
