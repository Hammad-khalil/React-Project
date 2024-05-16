import "./App.css";
import Navbar from "./Components/Navbar";
import TextForms from "./Components/TextForms";

function App() {
  return (
    <>
      <Navbar title="Textutils" about="About TextUtils" />
      <TextForms heading="Enter Your Text Below ⤵" />
    </>
  );
}

export default App;
