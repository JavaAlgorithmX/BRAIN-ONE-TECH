import { FaStar, FaStarHalfStroke, FaRegStar } from "react-icons/fa6";

export default function Rating() {
  return (
    <>
      {[...Array(5)].map((star) => {
       return <FaStar />;
      })}
    </>
  );
}
