import "./App.css";
import { FaHeart } from "react-icons/fa";
import Form from "./components/Form";
import Skills from "./components/Skills";
import Books from "./components/Books";
import Introduction from "./components/Introduction";

function App() {
  return (
    <div className="app flex bg-black text-white xl:px-25vw py-10 px-10">
      <div className="app__hero w-full">
        <Introduction />
        <Skills />
        <Books />
        <Form />
        <p className="text-xl mt-16">
          Thank you for scrolling <FaHeart className="inline text-[#1e82b5]" />
        </p>
      </div>
    </div>
  );
}

export default App;
