import { useState } from "react";
import PlusIcon from "../icons/PlusIcon";
import ShareIcon from "../icons/ShareIcon";
import Button from "../components/Button";
import Card from "../components/Card";
import Sidebar from "../components/Sidebar";
import ContentModal from "../components/ContentModal";
import useFetch from "../hooks/useFetch";
import { BACKEND_URL } from "../config";
import axios from "axios";

export interface Content {
  _id: string | null | undefined;
  title: string;
  type: "youtube" | "twitter";
  link: "string";
  tags?: [string];
}

const Dashboard =  () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { content, loading, error , refetch} = useFetch(
    `${BACKEND_URL}/api/v1/content/`
  );

   
  console.log(content)
  const shareBrain = async () => {
    // request to make share true
    // will get the link from response    //
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/brain/share`,
        {
          share: true,
        },
        {
          withCredentials: true,
        }
      );

      const shareLink = response.data.link;
      console.log(shareLink)
      await navigator.clipboard.writeText(shareLink);
      alert("Link Copied to clipboard!");

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex w-full min-h-screen overflow-x-hidden">
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
            onClick={() => shareBrain()} 
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
          {loading && <div>Loading..</div>}

          {error && <div>Some error occurred..</div>}

          {content.map((card: Content) => (
            <Card
              id={card._id as string}
              type={card.type}
              title={card.title}
              link={card.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
