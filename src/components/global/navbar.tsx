import Image from "next/image";

type Props = {};

const Navbar = async (props: Props) => {
  return (
    <header className="fixed left-0 right-0 top-0 z-[100] flex items-center justify-between border-b-[1px] border-neutral-900 bg-black/40 px-4 py-4 backdrop-blur-lg">
      <aside className="flex items-center gap-[2px]">
        <Image
          src="/stayz-logoo.svg"
          width={150}
          height={150}
          alt="logo"
          className="shadow-sm"
        />
      </aside>
    </header>
  );
};

export default Navbar;
