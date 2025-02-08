import Header from "@/components/header";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="flex min-h-screen flex-1 flex-col bg-slate-300 dark:bg-slate-800 px-5 xs:px-10 md:px-16">
      <div className="mx-auto max-w-7xl text-black">
        <Header />
        <div className="mt-20 pb-20">{children}</div>
      </div>
    </main>
  );
};

export default layout;
