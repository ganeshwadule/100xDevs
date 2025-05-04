import BrainIcon from "../icons/BrainIcon";
import TweeterIcon from "../icons/TweeterIcon";
import YoutubeIcon from "../icons/YoutubeIcon";

const IconTypes = [{ Twitter: <TweeterIcon /> }, { Youtube: <YoutubeIcon /> }];

const Sidebar = () => {
  return (
    <div className="left border-gray-200 border w-72 pl-4 h-auto">
      <div className="logo pt-2 flex items-center gap-3">
        {<BrainIcon />}
        <span className="text-2xl text-gray-900 font-bold">Second Brain</span>
      </div>
      <div className="p-8">
        {IconTypes.map((icon, index) => {
          const [key, value] = Object.entries(icon)[0];
          return (
            <div
              key={index}
              className="flex 
              items-center gap-1 
              text-gray-600 
              font-semibold 
              py-2 px-2
              hover:bg-slate-200 rounded
              "
            >
              {value}
              {key}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
