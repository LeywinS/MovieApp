import Link from "next/link";
import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";

function Header() {
  return (
    <div className="flex flex-row justify-between items-center p-3 max-w-6xl mx-auto">
      <div className="flex flex-row gap-4">
        <MenuItem title="home" address="/" Icon={AiFillHome} />
        <MenuItem title="about" address="/about" Icon={BsFillInfoCircleFill} />
      </div>
      <div>
        <Link href={"/"} className="text-2xl font-bold ">
          MovieApp
        </Link>
      </div>
    </div>
  );
}

export default Header;
