import { zodResolver } from "@hookform/resolvers/zod";
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Minus,
  Money,
  Plus,
  ShoppingCart,
  Trash,
} from "phosphor-react";
import { useCallback } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

import { Container } from "../components";
import { Button } from "../components/Button";
import { Divider } from "../components/Divider";
import { Input } from "../components/Form/Input";
import { ToggleGroup } from "../components/Form/ToggleGroup";
import { Head } from "../components/Head";
import { Heading } from "../components/Heading";

const schema = z.object({
  cep: z.string(),
  street: z.string(),
  number: z.number({
    invalid_type_error: "Digite um número",
    required_error: "Digite um número",
  }),
  complement: z.string().optional(),
  neighborhood: z.string(),
  city: z.string(),
  state: z.string().max(2, "Limite de 2"),
  paymentMethod: z.string(),
});

const MainPage = () => {
  const { control, formState, handleSubmit, register } = useForm<
    z.infer<typeof schema>
  >({
    resolver: zodResolver(schema),
    defaultValues: {
      cep: "",
      street: "",
      complement: "",
      neighborhood: "",
      city: "",
      state: "",
    },
  });

  const onCheckoutSubmit: SubmitHandler<z.infer<typeof schema>> = useCallback(
    (data) => {
      console.log(data);
    },
    []
  );

  return (
    <form onSubmit={handleSubmit(onCheckoutSubmit)}>
      <Head>
        <title>Coffee Delivery - Checkout</title>
      </Head>
      <Container className="pb-8 flex gap-8 flex-wrap">
        <section className="flex-1 flex flex-col gap-3">
          <Heading className="text-lg" type="h3">
            Complete seu pedido
          </Heading>

          <div className="p-10 bg-white-700 rounded-md flex flex-col gap-8">
            <h4 className="flex gap-2 items-center">
              <MapPinLine size={22} className="text-yellow-500 flex-shrink-0" />
              <span className="flex flex-col gap-[2px] text-black-600">
                Endereço de Entrega
                <small className="text-sm">Informe o endereço </small>
              </span>
            </h4>

            <div className="flex flex-col gap-4">
              <Input
                placeholder="CEP"
                error={formState.errors.cep}
                required
                {...register("cep")}
              />
              <Input
                placeholder="Rua"
                error={formState.errors.street}
                required
                {...register("street")}
              />

              <div className="grid gap-4 grid-flow-col">
                <Input
                  placeholder="Número"
                  error={formState.errors.number}
                  className="col-span-1"
                  min={1}
                  required
                  {...register("number", {
                    valueAsNumber: true,
                  })}
                />
                <Input
                  placeholder="Complemento"
                  className="col-span-2"
                  error={formState.errors.complement}
                  {...register("complement")}
                />
              </div>

              <div className="flex gap-4">
                <Input
                  placeholder="Bairro"
                  required
                  className="flex-1"
                  error={formState.errors.neighborhood}
                  {...register("neighborhood")}
                />
                <Input
                  placeholder="Cidade"
                  required
                  error={formState.errors.city}
                  {...register("city")}
                />
                <Input
                  placeholder="UF"
                  required
                  className="max-w-[80px]"
                  error={formState.errors.state}
                  {...register("state")}
                />
              </div>
            </div>
          </div>

          <div className="p-10 bg-white-700 rounded-md flex flex-col gap-8">
            <h4 className="flex gap-2 items-center">
              <CurrencyDollar
                size={22}
                className="text-purple-500 flex-shrink-0"
              />
              <span className="flex flex-col gap-[2px] text-black-600">
                Pagamento
                <small className="text-sm">
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </small>
              </span>
            </h4>

            <ToggleGroup
              className="flex flex-wrap gap-3"
              control={control}
              type="single"
              name="paymentMethod"
              options={[
                {
                  value: "credit_card",
                  label: "Cartão de Crédito",
                  icon: CreditCard,
                },
                { value: "debit_card", label: "Cartão de Débito", icon: Bank },
                { value: "cash", label: "Dinheiro", icon: Money },
              ]}
              error={formState.errors.paymentMethod}
            />
          </div>
        </section>

        <section className="max-w-[448px] w-full flex flex-col gap-3">
          <Heading className="text-lg" type="h3">
            Cafés selecionados
          </Heading>
          <div className="p-10 bg-white-700 rounded-md flex flex-col gap-6 rounded-tl-md rounded-br-md rounded-bl-[44px] rounded-tr-[44px]">
            <div className="flex justify-between items-center">
              <div className="flex gap-5 items-center">
                <img
                  src="/coffee.webp"
                  alt=""
                  className="max-w-[64px] object-contain"
                  loading="lazy"
                />

                <div className="flex flex-col gap-2">
                  <h4 className="text-base text-black-600">
                    Expresso Tradicional
                  </h4>
                  <div className="flex items-center gap-2">
                    <div className="bg-white-400 rounded-md p-2 h-9 flex items-center gap-1">
                      <button
                        type="button"
                        className="text-purple-500 hover:text-purple-900"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="text-black-900">1</span>
                      <button
                        type="button"
                        className="text-purple-500 hover:text-purple-900"
                      >
                        <Plus size={14} />
                      </button>
                    </div>

                    <button
                      type="button"
                      className="bg-white-400 hover:bg-white-300 transition-colors rounded-md p-2 h-9 flex items-center gap-1 text-xs text-black-600"
                    >
                      <Trash size={16} className="text-purple-900" />
                      REMOVER
                    </button>
                  </div>
                </div>
              </div>

              <strong className="block font-cursive font-black-400">
                R$ 9,90
              </strong>
            </div>

            <Divider />

            <div className="flex justify-between items-center">
              <div className="flex gap-5 items-center">
                <img
                  src="/coffee.webp"
                  alt=""
                  className="max-w-[64px] object-contain"
                  loading="lazy"
                />

                <div className="flex flex-col gap-2">
                  <h4 className="text-base text-black-600">
                    Expresso Tradicional
                  </h4>
                  <div className="flex items-center gap-2">
                    <div className="bg-white-400 rounded-md p-2 h-9 flex items-center gap-1">
                      <button
                        type="button"
                        className="text-purple-500 hover:text-purple-900"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="text-black-900">1</span>
                      <button
                        type="button"
                        className="text-purple-500 hover:text-purple-900"
                      >
                        <Plus size={14} />
                      </button>
                    </div>

                    <button
                      type="button"
                      className="bg-white-400 hover:bg-white-300 transition-colors rounded-md p-2 h-9 flex items-center gap-1 text-xs text-black-600"
                    >
                      <Trash size={16} className="text-purple-900" />
                      REMOVER
                    </button>
                  </div>
                </div>
              </div>

              <strong className="block font-cursive font-black-400">
                R$ 9,90
              </strong>
            </div>

            <Divider />

            <div className="flex flex-col gap-3">
              <div className="flex gap-2 justify-between itens-center">
                <small className="block text-sm font-black-400">
                  Total de itens
                </small>

                <span className="block text-base font-black-400">R$ 29,70</span>
              </div>
              <div className="flex gap-2 justify-between itens-center">
                <small className="block text-sm font-black-400">Entrega</small>

                <span className="block text-base font-black-400">R$ 29,70</span>
              </div>
              <div className="flex gap-2 justify-between itens-center text-xl font-black-600 font-bold">
                <small className="text-xl">Total</small>

                <span>R$ 29,70</span>
              </div>
            </div>

            <Button color="yellow">CONFIRMAR PEDIDO</Button>
          </div>
        </section>
      </Container>
    </form>
  );
};

export default MainPage;
