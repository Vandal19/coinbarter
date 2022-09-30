import { useUIContext } from "../context/ui";

const useCart = (product) => {
  const { cart, setCart } = useUIContext();

  const addToCart = () => {
    cart.findIndex((item) => item.id === product.id) >= 0
      ? setCart(cart.filter((item) => item.id !== product.id))
      : setCart((item) => [...item, product]);
  };

  const addToCartText =
    cart.findIndex((item) => item.id === product.id) >= 0
      ? "Remove from Cart"
      : "Add to Cart";

  return { addToCart, addToCartText };
};

export default useCart;
