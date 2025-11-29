'use client';

import { useState } from "react";
import axios from "axios";
import ProductTable from "./ProductTable";
import ProductForm from "./ProductForm";
import ProductFilter from "./ProductFilter";

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  stockQuantity: number;
  inStock: boolean;
}

interface Filters {
  category: string;
  minPrice: string;
  maxPrice: string;
}

const SettingsClient: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filters, setFilters] = useState<Filters>({
    category: "",
    minPrice: "",
    maxPrice: "",
  });

  const fetchProducts = async () => {
    const res = await axios.get<Product[]>("/api/products", {
      params: {
        category: filters.category || undefined,
        minPrice: filters.minPrice || undefined,
        maxPrice: filters.maxPrice || undefined,
      },
    });
    setProducts(res.data);
  };

  return (
    <div className="p-10 space-y-6">
      <h1 className="text-3xl font-bold">Product Management</h1>

      <ProductFilter
        filters={filters}
        setFilters={setFilters}
        onFilter={fetchProducts}
      />

      <ProductForm onSuccess={fetchProducts} />

      <button
        onClick={fetchProducts}
        className="bg-indigo-600 text-white px-6 py-2 rounded"
      >
        Load Products
      </button>

      <ProductTable products={products} onRefresh={fetchProducts} />
    </div>
  );
};

export default SettingsClient;
