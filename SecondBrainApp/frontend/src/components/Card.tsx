import ShareIcon from "../icons/ShareIcon";
import TweeterIcon from "../icons/TweeterIcon";
import TrashIcon from "../icons/TrashIcon";
import YoutubeIcon from "../icons/YoutubeIcon";

interface CardProps {
  type: "youtube" | "twitter";
  title: string;
  link: string;
}
const IconTypes = {
    "twitter" : <TweeterIcon/>,
    "youtube" : <YoutubeIcon/>
}

const Card = ({ type, title, link }: CardProps) => {
  return (
    <div>
      <div className="p-4 border-gray-200 max-w-72 bg-white rounded-md border">
        <div className="flex justify-between">
          <div className="flex justify-center  items-center gap-1.5 text-gray-600 ">
            {IconTypes[type]}
           <span className="text-gray-800">{title}</span> 
          </div>
          <div className="flex justify-center items-center gap-1.5 text-gray-600 ">
            {<ShareIcon />}
            {<TrashIcon />}
          </div>
        </div>
        <div className="content">
          {type === "youtube" && (
            <iframe
              className=" w-full py-4"
              src={link}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          )}

          {type === "twitter" && (
            <>
              <blockquote className="twitter-tweet">
                <a href={link}></a>
              </blockquote>{" "}
              <script
                async
                src="https://platform.twitter.com/widgets.js"
              ></script>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
