import { CurrencyDollar, MapPin, Timer } from "phosphor-react";

import deliveryMenSvg from "../assets/delivery.svg";
import { Container } from "../components";
import { Head } from "../components/Head";
import { Heading } from "../components/Heading";

const MainPage = () => {
  return (
    <>
      <Head>
        <title>Coffee Delivery Succes - Checkout</title>
      </Head>
      <Container className="pb-8 mt-20">
        <Heading className="text-yellow-900 mb-1">
          Uhu! Pedido confirmado
        </Heading>
        <p className="text-xl text-black-600 mb-7">
          Agora é só aguardar que logo o café chegará até você
        </p>

        <section className="flex flex-col-reverse sm:flex-row gap-20">
          <div className="flex-1 w-full border border-purple-900 p-10 max-w-[526px] rounded-tl-md rounded-br-md rounded-bl-[36px] rounded-tr-[36px] flex flex-col gap-8 justify-center">
            <div className="flex items-center gap-3 text-black-400 text-sm">
              <span className="p-2 rounded-full bg-purple-500 inline-block">
                <MapPin size={16} className="text-white-700" weight="fill" />
              </span>
              <p className="flex flex-col text-black-400">
                <span>
                  Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                </span>
                <span>Farrapos - Porto Alegre, RS</span>
              </p>
            </div>

            <div className="flex items-center gap-3 text-black-400 text-sm">
              <span className="p-2 rounded-full bg-yellow-500 inline-block">
                <Timer size={16} className="text-white-700" weight="fill" />
              </span>
              <p className="flex flex-col text-black-400">
                Previsão de entrega
                <span className="font-bold">20 min - 30 min</span>
              </p>
            </div>

            <div className="flex items-center gap-3 text-black-400 text-sm">
              <span className="p-2 rounded-full bg-yellow-900 inline-block">
                <CurrencyDollar
                  size={16}
                  className="text-white-700"
                  weight="fill"
                />
              </span>
              <p className="flex flex-col text-black-400">
                Pagamento na entrega
                <span className="font-bold">Cartão de Crédito</span>
              </p>
            </div>
          </div>

          <img
            src={deliveryMenSvg}
            alt="Um homem pilotando rapidamente uma scooter sem capacete com uma caixa de entrega atrás dele e plantas próximo"
          />
        </section>
      </Container>
    </>
  );
};

export default MainPage;
