import ProductRow from "../components/ProductRow";

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  stockQuantity: number;
  inStock: boolean;
}

interface ProductTableProps {
  products: Product[];
  onRefresh: () => void;
}

const ProductTable: React.FC<ProductTableProps> = ({ products, onRefresh }) => {
  return (
    <table className="w-full border mt-6">
      <thead className="bg-gray-100">
        <tr>
          <th className="border p-2">Name</th>
          <th className="border p-2">Category</th>
          <th className="border p-2">Price</th>
          <th className="border p-2">Stock</th>
          <th className="border p-2">Status</th>
          <th className="border p-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map(p => (
          <ProductRow key={p.id} product={p} onRefresh={onRefresh} />
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
