"use client";

import { Header } from "./Header";

interface AppProps {
  children: React.ReactNode;
  moreClass: string;
}

const SorteosContainer = ({ children, moreClass }: AppProps) => {
  return (
    <div className={`w-full min-h-screen flex flex-col ${moreClass}`}>
      <Header />
      {children}
    </div>
  );
};

export default SorteosContainer;
