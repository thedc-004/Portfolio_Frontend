import { RiReactjsFill } from "react-icons/ri";
import { RiNodejsLine } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { AiOutlineJavaScript } from "react-icons/ai";
import { SiTypescript } from "react-icons/si";
import { ReactNode } from "react";
import SkillItem from "./SkillItem";

function Skills() {
  interface skillObj {
    name: string;
    element: ReactNode;
  }

  const skillsArr: skillObj[] = [
    {
      name: "ReactJS",
      element: <RiReactjsFill className="me-4" />,
    },
    {
      name: "NodeJS",
      element: <RiNodejsLine className="me-4" />,
    },
    {
      name: "ExpressJS",
      element: <SiMongodb className="me-4" />,
    },
    {
      name: "MongoDB",
      element: <SiExpress className="me-4" />,
    },
    {
      name: "PostgreSQL",
      element: <BiLogoPostgresql className="me-4" />,
    },
    {
      name: "HTML",
      element: <FaHtml5 className="me-4" />,
    },
    {
      name: "CSS",
      element: <FaCss3Alt className="me-4" />,
    },
    {
      name: "JavaScript",
      element: <AiOutlineJavaScript className="me-4" />,
    },
    {
      name: "TypeScript",
      element: <SiTypescript className="me-4" />,
    },
  ];

  return (
    <div className="flex flex-col">
      <h1 className="text-3xl font-bold mb-6">Skills</h1>
      <p className="text-xl text-justify">
        A comprehensive list of technical proficiencies and core competencies in
        web development and programming languages.
      </p>
      <div>
        <ul className="flex flex-wrap mb-3">
          {skillsArr.map(({ name, element }, index) => {
            return <SkillItem name={name} element={element} key={index} />;
          })}
        </ul>
        <p className="text-lg mb-15 text-justify">
          PS: Experienced in{" "}
          <b>
            <u>Java</u>
          </b>{" "}
          and{" "}
          <b>
            <u>C programming</u>
          </b>
          , alongside deep understanding in{" "}
          <b>
            <u>Operating Systems</u>
          </b>{" "}
          concepts, and{" "}
          <b>
            <u>Data Structures & Algorithms</u>
          </b>{" "}
          .
        </p>
      </div>
    </div>
  );
}

export default Skills;
