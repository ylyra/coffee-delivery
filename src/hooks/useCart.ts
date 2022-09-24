import { useContext } from "react";
import { CartDisclosure } from "../contexts/CartDisclosure";

export function useCart() {
  const cart = useContext(CartDisclosure);
  return cart;
}
