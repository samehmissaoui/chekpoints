import Product from "./Product";

const Image = () => {
  return <img src={Product.image} alt={Product.name} />;
};

export default Image;