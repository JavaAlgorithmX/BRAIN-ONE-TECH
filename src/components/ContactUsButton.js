import { IoIosArrowDroprightCircle } from "react-icons/io";

export default function ContactUsButton({setShowContactUs}){
    return(
       
          <div className=" ">
            <button
              onClick={setShowContactUs}
              className="mx-auto lg:mt-3 border-2 border-red-500 flex h-16 w-60
                items-center rounded-full px-2 text-white "
              style={{
                letterSpacing: "0.2em",
              }}
            >
              <IoIosArrowDroprightCircle className="text-5xl mr-4 text-white" />{" "}
              GET IN TOUCH
            </button>
          </div>
    );
}