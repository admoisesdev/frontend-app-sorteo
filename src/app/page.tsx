import { HeaderShared } from "./_components/shared/header";
import { Presentantion } from "./_components/home";
import dynamic from "next/dynamic";

function Home () {
  return (
    <div className="w-full min-h-screen bg-hero-home bg-cover bg-[50%_50%]">
      <div className="w-full min-h-screen backdrop-blur-sm bg-opacity-40 bg-black">
        <HeaderShared />
        <Presentantion />
      </div>
    </div>
  );
}

export default dynamic(async () => Home, { ssr: false });
