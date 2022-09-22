import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { Container } from "../components";
import { CoffeeCard } from "../components/CoffeeCard";
import { Head } from "../components/Head";
import { Heading } from "../components/Heading";

const MainPage = () => {
  return (
    <>
      <Head>
        <title>Coffee Delivery</title>
      </Head>

      <section className="bg-background-blur py-24 mb-8 min-h-[544px] flex items-center bg-contain bg-no-repeat">
        <Container className="flex gap-4">
          <div className="max-w-[588px]">
            <Heading className="text-5xl mb-4">
              Encontre o café perfeito para qualquer hora do dia
            </Heading>

            <p className="text-black-600 text-xl">
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>

            <div className="mt-16 flex flex-wrap md:grid-cols-2 gap-y-5 gap-x-10">
              <div className="flex items-center gap-3 text-black-400 text-sm">
                <span className="p-2 rounded-full bg-yellow-900 inline-block">
                  <ShoppingCart
                    size={16}
                    className="text-white-700"
                    weight="fill"
                  />
                </span>
                Compra simples e segura
              </div>
              <div className="flex items-center gap-3 text-black-400 text-sm">
                <span className="p-2 rounded-full bg-black-900 inline-block">
                  <Package size={16} className="text-white-700" weight="fill" />
                </span>
                Embalagem mantém o café intacto
              </div>
              <div className="flex items-center gap-3 text-black-400 text-sm">
                <span className="p-2 rounded-full bg-yellow-500 inline-block">
                  <Timer size={16} className="text-white-700" weight="fill" />
                </span>
                Entrega rápida e rastreada
              </div>
              <div className="flex items-center gap-3 text-black-400 text-sm">
                <span className="p-2 rounded-full bg-purple-500 inline-block">
                  <Coffee size={16} className="text-white-700" weight="fill" />
                </span>
                Compra simples e segura
              </div>
            </div>
          </div>

          <img src="/coffee-mug.webp" className="flex-1" />
        </Container>
      </section>

      <Container className="pb-8">
        <Heading className="mb-4">Nossos cafés</Heading>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 gap-y-10 flex-wrap">
          {[...new Array(20)].map((_, key) => (
            <CoffeeCard key={key} />
          ))}
        </div>
      </Container>
    </>
  );
};

export default MainPage;
