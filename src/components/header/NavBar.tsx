import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function NavBar() {
  return (
    <nav className="flex justify-end">
      <Link href="/">
        <Image
          src="/images/logo_ueg_ccet.png"
          alt="logo ueg"
          width={225}
          height={59}
        />
      </Link>
      <ul className="flex text-white">
        <li className="p-2 content-center">
          <Link href="/about">Artigos</Link>
        </li>
        <li className="p-2 content-center">
          <Link href="/blog/hello-world">Ferramentas</Link>
        </li>
      </ul>
    </nav>
  );
}
