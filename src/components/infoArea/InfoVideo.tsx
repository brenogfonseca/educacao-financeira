import Image from "next/image";
import React from "react";

export default function InfoVideo() {
  return (
    <div className="flex border-b-2 border-indigo-700 pb-4">
      <div className="me-4">
        <div className="w-[300px] h-[170px] border-grey border-2 overflow-hidden rounded-md">
          <Image
            src="/images/imagem_video.png"
            width={1024}
            height={1024}
            alt="imagem video"
          />
        </div>
      </div>
      <div>
        <div className="flex">
          <div>
            <h4 className="text-indigo-700">ASSISTA O VÍDEO</h4>
            <h5 className="text-sm">
              Assista ao nosso vídeo e entenda mais sobre como ter uma boa
              gestão financeira
            </h5>
          </div>
          <div>
            <div className="w-[80px] h-[80px]">
              <Image
                src="/images/icone_video.png"
                width={80}
                height={80}
                alt="imagem video"
              />
            </div>
          </div>
        </div>
        <p className="text-justify mt-6">
          A educação financeira é fundamental para garantir uma vida tranquila
          na terceira idade. Aprender a gerenciar melhor suas finanças permite
          tomar decisões mais seguras e evitar problemas com dívidas. Organizar
          seu orçamento, planejar para o futuro e entender sobre investimentos
          podem trazer mais autonomia e qualidade de vida.
        </p>
      </div>
    </div>
  );
}
