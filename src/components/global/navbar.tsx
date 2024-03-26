import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const Navbar = async (props: Props) => {
  return (
    <header className="fixed left-0 right-0 top-0 z-[100] flex items-center justify-between border-b-[1px] border-neutral-900 bg-black/40 px-4 py-4 backdrop-blur-lg">
      <aside className="">
        <Image
          src="/stayz-slate.svg"
          width={150}
          height={150}
          alt="logo"
          className="shadow-sm"
        />
      </aside>
      <nav className="absolute left-[50%] top-[50%] hidden translate-x-[-50%] translate-y-[-50%] transform text-slate-200 md:block">
        <ul className="flex list-none items-center gap-4">
          <li className="">
            <Link href="#">Products</Link>
          </li>
          <li>
            <Link href="#">Pricing</Link>
          </li>
          <li>
            <Link href="#">Clients</Link>
          </li>
          <li>
            <Link href="#">Resources</Link>
          </li>
          <li>
            <Link href="#">Doc</Link>
          </li>
          <li>
            <Link href="#">Enterprise</Link>
          </li>
        </ul>
      </nav>
      <aside className="flex items-center gap-4">
        <Link href="/dashboard" className="">
          <button className="animate-shimmer inline-flex h-10 items-center justify-center rounded-full border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            {true ? "Dashboard" : "Get Started"}
          </button>
        </Link>
        {/* {user ? <UserButton afterSignOutUrl="/" /> : null} */}
        <MenuIcon className="md:hidden" />
      </aside>
    </header>
  );
};

export default Navbar;
