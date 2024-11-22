import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#F3F3F4]">
      <div className="max-w-screen-xl ms-auto me-auto">
        <div>
          <h4 className="font-bold text-3xl text-center mt-2">
            3 passos para um controle financeiro
          </h4>
        </div>
        <div className="flex justify-around gap-20 mt-8">
          <div>
            <div></div>
            <h3 className="border-b-2 border-[#5F41D9] w-fit">
              Acompanhe seus gastos de perto
            </h3>
            <p>
              Você já sentiu na pele o peso de quando perdemos o controle das
              nossas contas. A melhor forma de não passar por isso de novo é
              começar a acompanhar seus gastos de perto. Para fazer isso, vale
              usar planilha, aplicativo ou até um caderninho, se você preferir.
              Teste todas essas ferramentas e descubra na prática qual funciona
              melhor para você.
            </p>
          </div>
          <div>
            <h3 className="border-b-2 border-[#5F41D9] w-fit">
              Planeje suas compras
            </h3>
            <p>
              Quando a gente quita as nossas dívidas, volta a ter acesso ao
              cartão de crédito. Essa ferramenta pode ser bastante útil, mas
              também pode nos enrolar novamente. Sempre que der para esperar
              para comprar, prefira guardar o dinheiro para pagar à vista no
              futuro, em vez de parcelar agora. E se parcelar, procure sempre
              pagar o valor integral da fatura.
            </p>
          </div>
          <div>
            <h3 className="border-b-2 border-[#5F41D9] w-fit">
              Comece a ganhar dinheiro
            </h3>
            <p>
              Em vez de ficar sonhando com o dia em que vai sobrar dinheiro para
              guardar, que tal começar agora mesmo com o valor que é possível
              para você hoje? Guardar pouco é sempre melhor do que guardar nada.
              Criar o hábito de poupar um dinheirinho todo mês é a melhor
              prática financeira que existe. Quem consegue virar essa chave,
              transforma a própria vida para sempre.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
