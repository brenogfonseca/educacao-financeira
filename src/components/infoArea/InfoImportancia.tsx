import Image from "next/image";
import React from "react";

export default function InfoImportancia() {
  return (
    <div className="mt-2">
      <h2 className="text-2xl font-bold text-gray-400">
        Importância da Educação Financeira
      </h2>
      <div className="flex mt-2">
        <div className="me-4">
          <div className="w-[300px] h-[170px]">
            <Image
              src="/images/video_importancia.jpg"
              width={300}
              height={170}
              alt="exemplo video"
            />
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold">Prevenção e Proteção</h2>
          <p className="text-justify">
            O poder da educação financeira para a população jovem, adulta e
            principalmente idosa.
          </p>
        </div>
      </div>
    </div>
  );
}
