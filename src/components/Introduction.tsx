import { FaInstagramSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

function Introduction() {


  return (
    <div className="hero">
      <p className="flex items-center mb-3 w-full">
        <GoDotFill className="text-green-700 me-3" />
        <span className="text-lg">Online</span>
      </p>
      <div className="flex flex-col mb-15 justify-center">
        <div className="flex justify-center items-center flex-col">
          <div className="display-pic mb-8">
            <img src="./assets/display_pic.png" alt="" />
          </div>
          <div>
            <div>
              <h1 className="font-bold text-4xl mb-3"> Dipanshu Choksi </h1>
              <h1 className="font-bold text-4xl mb-3 flex fullstack__div">Fullstack Developer</h1>
            </div>
            <div className="app__links mb-5">
              <ul className="flex justify-start gap-8 items-center">
                <a href="https://www.instagram.com/thedc004/">
                  <li className="  py-1 rounded-md text-3xl hover:scale-125">
                    <FaInstagramSquare />
                  </li>
                </a>
                <a href="https://github.com/thedc-004">
                  <li className=" py-1 rounded-md text-3xl hover:scale-125">
                    <FaGithubSquare />
                  </li>
                </a>
                <a href="https://www.linkedin.com/in/dipanshu-choksi-9b3978264/">
                  <li className=" py-1 rounded-md text-3xl hover:scale-125">
                    <FaLinkedin />
                  </li>
                </a>
              </ul>
            </div>
          </div>
        </div>
        <p className="text-xl text-justify mb-3 ">
          Hey, I am Dipanshu. I'm a CSE <b><u>2nd year student</u></b>. I'm a dedicated <b><u>MERN stack web developer</u></b> passionate about crafting seamless solutions. Thriving in collaborative environments, I excel in <b><u>MongoDB</u></b>, <b><u>ExpressJS</u></b>, <b><u>ReactJS</u></b>, and <b><u>NodeJS</u></b> to create dynamic web applications. My focus is on delivering high-quality work that exceeds expectations, whether working independently or as part of a team.
        </p>
        <p className="text-xl text-justify ">This is my <a href="https://docs.google.com/document/d/1zN9_KystE69PZVtaut9j1NMp6xdKVQkINmzLFmzaWFA/edit" target="_blank" className="resume__class bg-grey"><b>Resume</b></a></p>
      </div>

    </div>
  );
}

export default Introduction;
