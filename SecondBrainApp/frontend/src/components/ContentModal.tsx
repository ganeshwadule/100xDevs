import { useRef } from "react";
import CloseIcon from "../icons/CloseIcon";
import Button from "./Button";
import Input from "./Input";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useContentStore } from "../store";
import useFetch from "../hooks/useFetch";

const ContentModal = ({ isModalOpen, setIsModalOpen }) => {

  const titleRef = useRef<HTMLInputElement>(null);
  const typeRef = useRef<HTMLInputElement>(null);
  const linkRef = useRef<HTMLInputElement>(null);

  // const addContent = useContentStore((state)=>(state.addContent));

  const {refetch} = useFetch(`${BACKEND_URL}/api/v1/content/`)


  const addNewContent = async () => {
    try {
      const title = titleRef.current?.value;
      const type = typeRef.current?.value;
      const link = linkRef.current?.value;

      const response = await axios.post(
        `${BACKEND_URL}/api/v1/content/`,
        { title, type, link },
        { withCredentials: true }
      );
      // updating content here
      // addContent(response.data)
      await refetch();
      setIsModalOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
          {/* Background Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-40" />

          {/* Modal Content */}
          <div className="relative bg-white text-black p-6 rounded-lg shadow-lg w-[90%] max-w-md space-y-4 z-50">
            <div
              className="flex justify-end "
              onClick={() => setIsModalOpen(false)}
            >
              {<CloseIcon />}
            </div>

            <Input reference={titleRef} type="text" placeholder="Title" />
            <Input reference={linkRef} type="text" placeholder="Link" />
            <Input reference={typeRef} type="text" placeholder="Type" />

            <div className="flex justify-center">
              <Button
                variant="secondary"
                size="sm"
                text="Submit"
                onClick={() => addNewContent()}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ContentModal;
