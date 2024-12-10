import Image from "next/image";
import React from "react";

export default function HeaderBackgroundImage() {
  return (
    <div className="absolute -top-1/4 left-1/2 -translate-x-1/2 opacity-30">
      <Image
        src="/images/sigla_ueg_vertical.png"
        alt="sigla ueg vertical"
        width={500}
        height={647}
      />
    </div>
  );
}
