import Link from "next/link";
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';

const Join = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full mt-20">
      <img
        src="https://cdn4.iconfinder.com/data/icons/mafia-and-gangster/500/mafia-gangster-brutal_2-512.png"
        alt="Mafia Icon"
        className="w-9/12 aspect-square"
      />
      <input
        type="text"
        placeholder="Room Code"
        className="w-9/12 h-10 my-3.5 rounded p-2 text-center font-medium italic text-black border-2 border-[#848282]"
      />
      <Link
        href="/join"
        className="bg-[#53ED9A] text-white w-9/12 h-10 font-bold rounded flex justify-center items-center  my-7 border-2 border-black"
      >
        Join Game
      </Link>

      <Link
        href="/"
        className="bg-[#DF4C4C] text-white w-9/12 h-10 font-bold rounded flex justify-center items-center border-2 border-black">
        <ArrowBackRoundedIcon />
        Back
      </Link>
    </div>
  );
};

export default Join;
