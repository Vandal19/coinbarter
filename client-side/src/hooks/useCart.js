import { useUIContext } from "../context/ui";

const useCart = (product) => {
  const { cart, setCart } = useUIContext();

  const addToCartText =
    cart.findIndex((item) => item.id === product.id) >= 0
      ? "Remove from Cart"
      : "Add to Cart";

  return { addToCartText };
};

export default useCart;
