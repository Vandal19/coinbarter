
// function to manage min and max quantities to add or reduce number of products on product description dialog
export const productDetailQuantity = (min, max) => (val) => val <= min ? min : val >= max ? max : val;
