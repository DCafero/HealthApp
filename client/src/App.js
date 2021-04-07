import "./App.css";
import MainBody from "./Components/MainBody";
import SignIn from "./Components/Sign-in/Sign-in";

let signedIn = true;

function App() {
  return signedIn ? <MainBody></MainBody> : <SignIn></SignIn>;
}

export default App;
