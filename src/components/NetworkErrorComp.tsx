import { PiSmileySadDuotone } from "react-icons/pi";
function NetworkErrorComp() {
  return (
    <p className="px-3 py-2 bg-red-500 w-max mb-3 rounded-md">
      <PiSmileySadDuotone className="text-xl" />
      <span className="text-xl">There was an network error.</span>
      <p className="text-md">Please Try Again.</p>
    </p>
  );
}

export default NetworkErrorComp;
