import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { Heading } from "./Heading";

export function CoffeeCard() {
  return (
    <div className="bg-white-700 p-6 flex flex-col items-center rounded-tl-md rounded-br-md rounded-bl-[36px] rounded-tr-[36px]">
      <img
        src="/coffee.webp"
        alt="Coffee mug"
        className="-mt-12 mb-3 w-[120px] h-[120px]"
      />
      <span className="block mx-auto rounded-full bg-yellow-50 px-2 py-1 text-yellow-900 text-[10px] uppercase mb-3">
        TRADICIONAL
      </span>

      <Heading type="h4" className="text-xl text-center font-bold mb-2">
        Expresso Tradicional
      </Heading>

      <p className="text-black-200 text-sm text-center mb-8">
        O tradicional café feito com água quente e grãos moídos
      </p>

      <div className="w-full flex gap-2 justify-between">
        <span className="text-sm text-black-400 flex items-center gap-1">
          R$ <strong className="font-cursive text-2xl">9,90</strong>
        </span>

        <div className="flex items-center gap-2">
          <div className="bg-white-400 rounded-md p-2 h-9 flex items-center gap-1">
            <button>
              <Minus size={14} className="text-purple-500" />
            </button>
            <span className="text-black-900">1</span>
            <button>
              <Plus size={14} className="text-purple-500" />
            </button>
          </div>

          <button className="bg-purple-900 hover:bg-purple-800 transition-colors rounded-md p-2 h-9 flex items-center gap-1">
            <ShoppingCart size={22} className="text-white-700" weight="fill" />
          </button>
        </div>
      </div>
    </div>
  );
}
