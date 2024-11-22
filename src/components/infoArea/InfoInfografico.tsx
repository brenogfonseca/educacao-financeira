import Image from "next/image";
import React from "react";

export default function InfoInfografico() {
  return (
    <div>
      <div className="flex">
        <Image
          src="/images/icone_infografico.png"
          width={60}
          height={60}
          alt="icone infografico"
        />
        <h3 className="font-bold text-2xl text-gray-400 align-middle">
          Infográfico sobre Organização Financeira
        </h3>
      </div>
      <div className="flex">
        <div className="w-1/2 pe-4">
          <p className="text-justify">
            A criação de um infográfico sobre organização financeira voltado
            para o público idoso é fundamental para promover uma compreensão
            clara e acessível sobre a gestão do dinheiro, algo essencial para
            garantir segurança e tranquilidade nessa fase da vida. Muitos idosos
            têm dificuldades com questões financeiras devido à complexidade dos
            termos, à evolução tecnológica ou mesmo à falta de familiaridade com
            a organização de gastos e rendimentos. Um infográfico claro e
            visualmente intuitivo pode simplificar conceitos como controle de
            despesas, planejamento de orçamento, poupança e investimentos,
            tornando o processo de gestão financeira mais acessível e menos
            intimidador. A combinação de elementos visuais, cores suaves e
            explicações diretas ajuda a manter o interesse e facilita a absorção
            da informação.
          </p>
        </div>
        <div className="w-1/2">
          <div>
            <Image
              src="/images/infografico.png"
              width={300}
              height={1200}
              alt="infografico"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
