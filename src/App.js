import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
// import TextForms from "./Components/TextForms";

function App() {
  return (
    <>
      <Navbar title="Textutils" about="About TextUtils" />
      <About />
      {/* <TextForms heading="Enter Your Text Below ⤵" /> */}
    </>
  );
}

export default App;
