import Image from "next/image";

export default function Header() {
  return (
    <header className="m-2 py-4 bg-white text-zinc-500 tracking-tighter text-sm columns-3">
      <div className="mx-auto flex items-center justify-between">
        <a href="">
          <Image src="./images/logo.svg" width={150} height={150} alt="" />
        </a>
      </div>
      <ul className="flex items-center justify-between ">
        <li className="hover:text-zinc-300">
          <a href="">Home</a>
        </li>
        <li className="hover:text-zinc-300">
          <a href="">About</a>
        </li>
        <li className="hover:text-zinc-300">
          <a href="">Contact</a>
        </li>
        <li className="hover:text-zinc-300">
          <a href="">Blog</a>
        </li>
        <li className="hover:text-zinc-300">
          <a href="">Careers</a>
        </li>
      </ul>
      <div className="flex justify-end">
        <button className="text-white bg-gradient-to-r from-green-400 to-blue-400 hover:bg-gradient-to-l rounded-lg px-5 py-1">
          Request Invite
        </button>
      </div>
    </header>
  );
}
