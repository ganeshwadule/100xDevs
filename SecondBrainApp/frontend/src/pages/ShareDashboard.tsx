import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import Sidebar from "../components/Sidebar";

import { BACKEND_URL } from "../config";
import axios from "axios";

export interface Content {
  _id: string | null | undefined;
  title: string;
  type: "youtube" | "twitter";
  link: "string";
  tags?: [string];
}

const ShareDashboard = () => {
  const [sharedData, setSharedData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");

  const { shareLink } = useParams();

  // const { content, loading, error } = useFetch(
  //   `${BACKEND_URL}/api/v1/brain/${shareLink}`
  // );

  const getSharedData = async () => {
    try {
      setLoading(true);

      const response = await axios.get(
        `${BACKEND_URL}/api/v1/brain/${shareLink}`
      );

      const username = response.data.username;

      setUsername(username);
      console.log(username);
      const content = response.data.content;

      setSharedData(content);
      setLoading(false)
      console.log(content);
    } catch (error: any) {
      setError(error);
      console.log("some error occurred");
    }
    finally{
        setLoading(false);
    }
  };

  useEffect(() => {
    getSharedData();
  }, []);
  return (
    <div className="flex w-full min-h-screen overflow-x-hidden">
      {<Sidebar />}
      <div className="w-full p-4 bg-slate-50">
        <div className="username text-2xl">{`${username}'s Brain`}</div>
        <div
          className="cards flex gap-3 text-gray-600 
              font-semibold m-4 flex-wrap "
        >
          {loading && <div>Loading..</div>}

          {error && <div>Some error occurred..</div>}

          {sharedData.map((card: Content) => (
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

export default ShareDashboard;
