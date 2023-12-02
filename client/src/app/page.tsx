import Link from "next/link";
import MafiaLogo from "../../public/Mafia.png";
import Image from "next/image";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full mt-20">
      <Image src={MafiaLogo} alt="Mafia Icon" className="w-4/5 mb-10 ml-10" />
      <input
        type="text"
        placeholder="Username"
        className="w-9/12 h-14 my-5 rounded p-2 text-center font-medium italic text-black border-2 border-[#848282]"
      />
      <Link
        href="/host"
        className="bg-[#C1BCFF] text-black w-9/12 h-12 font-bold rounded flex justify-center items-center my-7 border-2 border-[#8F86FC]"
      >
        <p className="text-[#8F86FC]">Host Game</p>
      </Link>
      <Link
        href="/join"
        className="bg-[#C5FFE0] text-black w-9/12 h-12 font-bold rounded flex justify-center items-center border-2 border-[#53ED9A]"
      >
        <p className="text-[#53ED9A]">Join Game</p>
      </Link>
    </div>
  );
};

export default Home;
