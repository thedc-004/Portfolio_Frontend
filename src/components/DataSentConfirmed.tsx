import { MdCelebration } from "react-icons/md";

function DataSentConfirmed() {
  return (
    <p className="px-3 py-2 bg-green-500 w-max mb-3 rounded-md">
      <MdCelebration className="text-xl" />
      <span className="text-xl">You have contacted me.</span>
      <p className="text-md">I'll get back to you ASAP.</p>
    </p>
  );
}

export default DataSentConfirmed;
