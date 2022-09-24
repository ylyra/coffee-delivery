import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";

interface ICartItemProps {
  id: string;
  price: number;
  quantity: number;
}

export interface ICartProps {
  itens: ICartItemProps[];
  totals: {
    itens: number;
    price: number;
  };
}

export interface CartDisclosureProps {
  cart: ICartProps | null;
  handleClearCart: () => void;
  handleAddItemToCart: (item: ICartItemProps) => void;
  handleRemoveQuantityFromCart: (id: string, quantity: number) => void;
  handleRemoveFromCart: (id: string) => void;
}

interface ICartProvider {
  children: ReactNode;
}

export const CartDisclosure = createContext({} as CartDisclosureProps);

export function CartProvider({ children }: ICartProvider) {
  const [cart, setCart] = useState<ICartProps | null>(null);

  const handleClearCart = useCallback(() => {
    setCart(null);
  }, []);

  const handleAddItemToCart = useCallback((item: ICartItemProps) => {
    setCart((prev) => {
      if (!prev)
        return {
          itens: [item],
          totals: {
            itens: item.quantity,
            price: item.quantity * item.price,
          },
        };

      const newCart = { ...prev };
      const inCart = newCart.itens.findIndex(
        (cartItem) => cartItem.id === item.id
      );
      if (inCart !== -1) {
        console.log(newCart.itens[inCart].quantity + item.quantity);
        newCart.itens[inCart].quantity =
          newCart.itens[inCart].quantity + item.quantity;
        newCart.totals.itens = newCart.totals.itens + item.quantity;
        newCart.totals.price =
          newCart.totals.price + item.price * item.quantity;

        return newCart;
      }

      newCart.totals.itens = newCart.totals.itens + item.quantity;
      newCart.totals.price = newCart.totals.price + item.price * item.quantity;

      return newCart;
    });
  }, []);

  const handleRemoveQuantityFromCart = useCallback(
    (id: string, quantity: number) => {
      setCart((prev) => {
        if (!prev) return prev;

        const newCart = { ...prev };
        const inCart = newCart.itens.findIndex(
          (cartItem) => cartItem.id === id
        );
        if (inCart !== -1) {
          const itemInCart = newCart.itens[inCart];
          if (quantity > itemInCart.quantity) {
            handleRemoveFromCart(itemInCart.id);
          } else {
            newCart.itens[inCart].quantity =
              newCart.itens[inCart].quantity - quantity;
            newCart.totals.itens = newCart.totals.itens - itemInCart.quantity;
            newCart.totals.price =
              newCart.totals.price - itemInCart.price * quantity;
          }

          return newCart;
        }

        return newCart;
      });
    },
    []
  );

  const handleRemoveFromCart = useCallback((id: string) => {
    setCart((prev) => {
      if (!prev) return prev;

      const newCart = { ...prev };
      const inCart = newCart.itens.findIndex((cartItem) => cartItem.id === id);
      if (inCart !== -1) {
        const itemToBeRemoved = newCart.itens[inCart];
        newCart.totals.itens = newCart.totals.itens - itemToBeRemoved.quantity;
        newCart.totals.price =
          newCart.totals.price -
          itemToBeRemoved.price * itemToBeRemoved.quantity;
        newCart.itens = newCart.itens.filter((item) => item.id !== id);
      }

      return newCart;
    });
  }, []);

  useEffect(() => {
    if (cart) {
      localStorage.setItem("@coffee-delivery:cart", JSON.stringify(cart));
    } else {
      const localStorageCart = localStorage.getItem("@coffee-delivery:cart");
      if (localStorageCart) {
        const cartParsed = JSON.parse(localStorageCart) as ICartProps;
        cartParsed.itens = cartParsed.itens.map((item) => ({
          ...item,
          price: Number(item.price),
          quantity: Number(item.quantity),
        }));
        cartParsed.totals = {
          ...cartParsed.totals,
          price: Number(cartParsed.totals.price),
          itens: Number(cartParsed.totals.itens),
        };
        setCart(cartParsed);
      }
    }
  }, [cart]);

  return (
    <CartDisclosure.Provider
      value={{
        cart,
        handleClearCart,
        handleAddItemToCart,
        handleRemoveQuantityFromCart,
        handleRemoveFromCart,
      }}
    >
      {children}
    </CartDisclosure.Provider>
  );
}
