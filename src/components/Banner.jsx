import { SignInButton, SignUpButton, SignedIn, SignedOut } from "@clerk/clerk-react";
import ShareSVG from "../assets/sharing blue.svg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="flex justify-center items-center max-w-7xl mx-auto pt-5 max-sm:flex-col max-sm:px-5 max-sm:gap-y-5">
      <div>
        <img src={ShareSVG} alt="Sharing" className="w-full h-96 max-sm:h-60" />
      </div>
      <div className="flex flex-col gap-y-5">
        <h1 className="text-5xl font-bold max-lg:text-4xl max-sm:text-3xl">
          The Only Tool You Need To Send Your Files Securely
        </h1>
        <p className="text=xl font-bold text-gray-600">
          Send your files and photos <span className="uppercase text-blue-500">securely</span> with SecureShare <span className="uppercase text-blue-500">anytime</span> and <span className="uppercase text-blue-500">anywhere</span> in the
          world.{" "}
        </p>
        <div className="flex max-sm:flex-col max-sm:gap-y-2">
        </div>
      </div>
    </div>
  );
};

export default Banner;
