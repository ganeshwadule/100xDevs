import { useState } from "react";
import PlusIcon from "../icons/PlusIcon";
import ShareIcon from "../icons/ShareIcon";
import Button from "../components/Button";
import Card from "../components/Card";
import Sidebar from "../components/Sidebar";
import ContentModal from "../components/ContentModal";

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex w-full h-full">
      {
        <ContentModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      }
      {<Sidebar />}
      <div className="w-full p-4 bg-slate-50">
        <div className="buttons flex justify-end">
          <Button
            variant={"primary"}
            size={"sm"}
            text={"Share Brain"}
            startIcon={<ShareIcon />}
          />
          <Button
            variant={"secondary"}
            size={"sm"}
            text={"Add Content"}
            startIcon={<PlusIcon />}
            onClick={() => setIsModalOpen(true)}
          />
        </div>
        <div
          className="cards flex gap-3 text-gray-600 
              font-semibold m-4 flex-wrap "
        >
          <Card
            type={"youtube"}
            title={"Shub Song"}
            link={
              "https://www.youtube.com/embed/d2ofxg8pHfQ?si=-N6BlY-uSrZsZs8-"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
