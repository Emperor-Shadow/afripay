import { Link } from "react-router-dom";
import glossy from "./glossy.png";
export default function Welcome() {
  return (
    <div className="h-screen w-full flex flex-col">
        <div className="h-3/4 w-full flex justify-end items-center flex-col">
                <img src={glossy} alt="" className=" h-44" />

                <div className="text-txtblue text-center">
                    <h1 className="text-3xl mt-14"> 
                        Hi! <span className="font-bold">John</span>
                    </h1>
                    <p className="text-3xl mt-5 font-semibold">
                        Welcome to Afripay
                    </p>
                </div>
        </div>

        <div className="h-1/2 w-full flex items-end justify-center p-5">
                <button className="focus:outline-none text-white rounded-[50px] inline-block bg-blue w-full py-4 text-lg">
                    <Link to="/getstarted">Let's get started</Link>
                </button>
                
        </div>
    </div>
  )
}

