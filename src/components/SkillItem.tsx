import { ReactNode } from "react";

function SkillItem({ name, element }: { name: string; element: ReactNode; }) {
  return (
    <li className="skillItem flex justify-center items-center me-4  my-4 bg-grey text-black px-4 py-1 text-xl rounded-md hover:bg-[#1e82b5] hover:cursor-default hover:scale-110 ">
      {element}<span>{name}</span>
    </li>
  );
}

export default SkillItem;
