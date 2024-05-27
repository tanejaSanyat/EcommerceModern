import { FaPlus } from "react-icons/fa";

type ProductProps = {
  name: string;
  photo: string;
  productId: string;
  price: number;
  stock: number;
  handler: () => void;
};

const ProductCard = ({
  productId,
  price,
  name,
  photo,
  stock,
  handler,
}: ProductProps) => {
  return (
    <div className="productCard">
      <div className="overlay">
        <button onClick={() => handler()}>
          <FaPlus />
        </button>
      </div>
      <img src={photo} alt="" />
      <p>{name}</p>
      <span>₹{price}</span>
    </div>
  );
};

export default ProductCard;
