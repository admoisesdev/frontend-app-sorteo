'use client';

import { Header } from '../Header';


const SorteosContainer = ({
	children,
	moreClass,
}: {
	children: React.ReactNode;
	moreClass: string;
}) => {
	return (
    <div className={`w-full min-h-screen flex flex-col ${moreClass}`}>
      <Header />
      {children}
    </div>
  );
};

export default SorteosContainer;
