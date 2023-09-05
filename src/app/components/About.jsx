import Image from "next/image";

export default function About() {
  return (
    <section className="p-20 m-10">
      <div className="p-2 m-4 leading-3">
        <h2 className="text-3xl mb-4 text-zinc-900">Why choose Easybank?</h2>
        <p className="text-sm text-zinc-400 leading-5">
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
      </div>
      <div className="p-6 columns-4 w-full">
        <div className="mr-2">
          <Image
            src="/./images/icon-online.svg"
            width={60}
            height={60}
            className="mt-1 mb-6 hover:opacity-50"
          />
          <h3 className="text-lg mb-4 text-zinc-800">Online Banking</h3>
          <p className="text-justify text-xs text-zinc-400">
            Our modern web and mobile applications allow you to keep track of
            your finances wherever you are in the world.
          </p>
        </div>
        <div className="mr-2">
          <Image
            src="/./images/icon-budgeting.svg"
            width={60}
            height={60}
            className="mt-6 mb-6 hover:opacity-50"
          />
          <h3 className="text-lg mb-4 text-zinc-800">Simple Budgeting</h3>
          <p className="text-justify text-xs text-zinc-400">
            See exactly where your money goes each month. Receive notifications
            when you're close to hitting your limits.
          </p>
        </div>
        <div className="mr-2">
          <Image
            src="/./images/icon-onboarding.svg"
            width={60}
            height={60}
            className="mt-6 mb-6 hover:opacity-50"
          />
          <h3 className="text-lg mb-4 text-zinc-800">Fast Onboarding</h3>
          <p className="text-justify text-xs text-zinc-400">
            We don't do branches. Open your account in minutes online and start
            taking control of your finances right away.
          </p>
        </div>
        <div className="mr-2">
          <Image
            src="/./images/icon-api.svg"
            width={60}
            height={60}
            className="mt-6 mb-6 hover:opacity-50"
          />
          <h3 className="text-lg mb-4 text-zinc-800">Open API</h3>
          <p className="text-justify text-xs text-zinc-400">
            Manage your savings, investments, pension, and much more from one
            account. Tracking your money has never been easier.
          </p>
        </div>
      </div>
    </section>
  );
}
