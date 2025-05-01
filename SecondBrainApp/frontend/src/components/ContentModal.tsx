import CloseIcon from "../icons/CloseIcon";
import Button from "./Button";
import Input from "./Input";

const ContentModal = ({ isModalOpen, setIsModalOpen }) => {
  return (
    <>
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
          {/* Background Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-40" />

          {/* Modal Content */}
          <div className="relative bg-white text-black p-6 rounded-lg shadow-lg w-[90%] max-w-md space-y-4 z-50">

            <div className="flex justify-end " onClick={()=>setIsModalOpen(false)}>{<CloseIcon />}</div>

            <Input type="text" placeholder="Title" />
            <Input type="text" placeholder="Link" />
            <Input type="text" placeholder="Type" />

            <div className="flex justify-center">
              <Button
                variant="secondary"
                size="sm"
                text="Submit"
                onClick={() => setIsModalOpen(false)}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ContentModal;
