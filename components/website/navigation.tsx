import { ModeToggle } from "@/components/website/mode-toggle";
import { UserButton } from "@clerk/nextjs";
import { User } from "@clerk/nextjs/server";
import Link from "next/link";
import Image from "next/image";

type Props = {
  user?: null | User;
};

const Navigation = ({ user }: Props) => {
  return (
    <div className="fixed  top-0 right-0 left-0 p-4 flex items-center justify-between z-10">
      <aside className="flex items-center gap-2">
        <Image src={"/Buildify.png"} alt="logo main" width={80} height={80} />
      </aside>
      <nav className="hidden md:block absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%]">
        <ul className="flex font-bold items-center justify-center gap-8">
          <Link className="font-bold" href={"#"}>
            Pricing
          </Link>
          <Link className="font-bold" href={"#"}>
            About
          </Link>
          <Link className="font-bold" href={"#"}>
            Documentation
          </Link>
          <Link className="font-bold" href={"#"}>
            Features
          </Link>
        </ul>
      </nav>
      <aside className="flex gap-2 items-center">
        <Link
          href={"/agency"}
          //className="bg-[#A64D79] text-black p-2 px-4 rounded-md hover:bg-[#A64D79]/80"
          className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Login
        </Link>
        <UserButton afterSignOutUrl="/" />
        <ModeToggle />
      </aside>
    </div>
  );
};

export default Navigation;
