"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Header = () => {
  const pathname = usePathname();
  return (
    <header className="my-10 flex justify-between gap-5">
      <Link href="/">
        <Image
          src={"/icons/logo.jpg"}
          alt="logo"
          width={60}
          height={60}
          className="rounded-full"
        />
      </Link>
      <ul className="flex flex-row items-center gap-8">
        <li>
          <Link
            href="/store"
            className={cn(
              "text-base cursor-pointer capitalize",
              pathname === "/store"
                ? "text-slate-600 dark:text-slate-100"
                : "text-slate-700 dark:text-slate-200"
            )}
          >
            Store
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
