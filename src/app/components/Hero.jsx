import Image from "next/image";
export default function Hero() {
  return (
    <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 lg:place-items-center bg-slate-50">
      <div className="w-2/4 px-5 py-20 text-center mx-auto lg:text-left ">
        <h1 className="text-slate-700 text-4xl mb-2">
          Next generation digital banking
        </h1>
        <p className="text-sm text-zinc-400 leading-5">
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <button className="text-white bg-gradient-to-r from-green-400 to-blue-400 hover:bg-gradient-to-l rounded-lg px-5 py-1 mt-10">
          Request Invite
        </button>
      </div>
      <div className="relative">
        <Image
          src="./images/bg-intro-desktop.svg"
          width={500}
          height={500}
          className="min-w-100"
        />
        <Image
          src="/./images/image-mockups.png"
          width={500}
          height={500}
          className="absolute -top-32 lg:-right-20"
        />
      </div>
    </div>
  );
}
