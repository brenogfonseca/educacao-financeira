import Image from "next/image";
import React from "react";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <header className="bg-header-gradient relative">
      <div className="max-w-7xl ms-auto me-auto">
        <NavBar />
        <div className="text-white w-[500px] py-6">
          <h1 className="text-2xl font-bold">Educação Financeira</h1>
          <h1 className="text-2xl font-bold">para idosos</h1>
          <h2 className="mt-4">
            A educação financeira e tecnológica para os idosos é essencial para
            promover autonomia e qualidade de vida.
          </h2>
          <button className="border-2 border-white rounded-lg px-6 py-2 mt-4">
            Saiba Mais
          </button>
        </div>
        <div className="absolute -top-1/4 left-1/2 -translate-x-1/2 opacity-30">
          <Image
            src="/images/sigla_ueg_vertical.png"
            alt="sigla ueg vertical"
            width={500}
            height={647}
          />
        </div>
      </div>
    </header>
  );
}
