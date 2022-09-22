import { Container } from "../Container";

import { MapPin, ShoppingCart } from "phosphor-react";
import logoSvg from "../../assets/logo.svg";

export function Header() {
  return (
    <header className="py-8">
      <Container className="flex items-center justify-between">
        <img src={logoSvg} alt="Logo" />

        <div className="flex items-center gap-3">
          <button className="p-2 flex items-center gap-1 text-sm text-purple-900 rounded-md bg-purple-50 hover:bg-purple-200 transition-colors">
            <MapPin size={22} weight="fill" className="text-purple-500" />
            <span>Porto Alegre, RS</span>
          </button>

          <button className="p-2 flex items-center gap-1 text-sm text-yellow-900 rounded-md bg-yellow-50 hover:bg-yellow-200 transition-colors">
            <ShoppingCart size={22} weight="fill" />
          </button>
        </div>
      </Container>
    </header>
  );
}
