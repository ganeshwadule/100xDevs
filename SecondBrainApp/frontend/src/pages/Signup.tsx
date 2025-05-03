import BrainIcon from "../icons/BrainIcon";
import Button from "../components/Button";
import Input from "../components/Input";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";

const Signup = () => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const userSignup = async () => {
    try {
      const username = usernameRef.current?.value;
      const password = passwordRef.current?.value;
  
      const response = await axios.post(`${BACKEND_URL}/api/v1/user/signup`, {
        username,
        password,
      });
  
      if (response.status === 201) {
        alert("You are signed up");
        navigate("/signin");
        return;
      }
      alert(response.data.message)
      console.log("did we reach here");
    } catch (error:any) {
      alert(error.response.data.message)
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center ">
      <div className="bg-white text-black border-gray-200 border rounded w-[30%] p-8 space-y-6 flex flex-col gap-7">
        <div className="logo pt-2  flex items-center gap-3 justify-center">
          {<BrainIcon />}
          <span className="text-2xl text-gray-900 font-bold">Second Brain</span>
        </div>
        <div className="flex flex-col gap-4">
          <Input reference={usernameRef} type={"text"} placeholder="Username" />
          <Input reference={passwordRef} type={"password"} placeholder="Password" />
          <div className="flex justify-center">
            <Button
              onClick={() => userSignup()}
              variant={"primary"}
              size={"sm"}
              text={"Sign Up"}
            ></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
