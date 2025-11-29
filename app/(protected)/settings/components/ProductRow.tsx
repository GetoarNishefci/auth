import axios from "axios";

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  stockQuantity: number;
  inStock: boolean;
}

interface ProductRowProps {
  product: Product;
  onRefresh: () => void;
}

const ProductRow: React.FC<ProductRowProps> = ({ product, onRefresh }) => {
  const remove = async () => {
    if (!confirm("Delete this product?")) return;
    await axios.delete(`/api/products/${product.id}`);
    onRefresh();
  };

  const update = async () => {
    const newPrice = prompt("New price:", product.price.toString());
    if (!newPrice) return;
    await axios.put(`/api/products/${product.id}`, { price: Number(newPrice) });
    onRefresh();
  };

  return (
    <tr>
      <td className="border p-2">{product.name}</td>
      <td className="border p-2">{product.category}</td>
      <td className="border p-2">${product.price}</td>
      <td className="border p-2">{product.stockQuantity}</td>
      <td className="border p-2">
        {product.inStock ? (
          <span className="text-green-600 font-bold">In Stock</span>
        ) : (
          <span className="text-red-600 font-bold">Out of Stock</span>
        )}
      </td>
      <td className="border p-2 flex gap-2">
        <button
          onClick={update}
          className="bg-blue-600 text-white px-3 py-1 rounded"
        >
          Edit
        </button>
        <button
          onClick={remove}
          className="bg-red-600 text-white px-3 py-1 rounded"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ProductRow;
