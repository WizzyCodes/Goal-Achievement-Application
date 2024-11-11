import Detailed from "./screen/Detailed";
import Display from "./screen/Display";

const Goals = () => {
  return (
    <div className="grid grid-cols-7 gap-2">
      <div className="col-span-4 bg-slate-50 ">
        <Display />
      </div>
      <div className="col-span-3 bg-slate-50">
        <Detailed />
      </div>
    </div>
  );
};

export default Goals;
