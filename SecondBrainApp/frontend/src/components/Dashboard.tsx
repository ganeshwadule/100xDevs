import { useState } from "react";
import PlusIcon from "../icons/PlusIcon";
import ShareIcon from "../icons/ShareIcon";
import Button from "./Button";
import Card from "./Card";
import Sidebar from "./Sidebar";
import ContentModal from "./ContentModal";

const Dashboard = () => {

    const [isModalOpen,setIsModalOpen] = useState(false);



  return (
    <div className="flex w-full h-full">
        {<ContentModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>}
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
            onClick={()=>setIsModalOpen(true)}
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
          <Card
            type={"twitter"}
            title={"Random Post"}
            link={
              "https://twitter.com/DearS_o_n/status/1917631636243636618?ref_src=twsrc%5Etfw"
            }
          />
          <Card
            type={"twitter"}
            title={"Random Post"}
            link={
              "https://twitter.com/DearS_o_n/status/1917631636243636618?ref_src=twsrc%5Etfw"
            }
          />

<Card
            type={"twitter"}
            title={"Random Post"}
            link={
              "https://twitter.com/DearS_o_n/status/1917631636243636618?ref_src=twsrc%5Etfw"
            }
          />

<Card
            type={"twitter"}
            title={"Random Post"}
            link={
              "https://twitter.com/DearS_o_n/status/1917631636243636618?ref_src=twsrc%5Etfw"
            }
          />

<Card
            type={"twitter"}
            title={"Random Post"}
            link={
              "https://twitter.com/DearS_o_n/status/1917631636243636618?ref_src=twsrc%5Etfw"
            }
          />
        
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
