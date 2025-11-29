'use client';

import { useState } from "react";
import axios from "axios";

interface ProductFormProps {
  onSuccess: () => void;
}

interface FormState {
  name: string;
  category: string;
  price: string;
  stockQuantity: string;
}

const ProductForm: React.FC<ProductFormProps> = ({ onSuccess }) => {
  const [form, setForm] = useState<FormState>({
    name: "",
    category: "",
    price: "",
    stockQuantity: "",
  });

  const submit = async () => {
    if (!form.name || !form.category || !form.price) {
      alert("Name, category and price are required!");
      return;
    }

    await axios.post("/api/products", {
      name: form.name,
      category: form.category,
      price: Number(form.price),
      stockQuantity: Number(form.stockQuantity),
    });

    setForm({
      name: "",
      category: "",
      price: "",
      stockQuantity: "",
    });

    onSuccess();
  };

  return (
    <div className="grid grid-cols-4 gap-4 border p-4 rounded">
      <input
        placeholder="Name"
        className="border p-2"
        value={form.name}
        onChange={e => setForm({ ...form, name: e.target.value })}
      />
      <input
        placeholder="Category"
        className="border p-2"
        value={form.category}
        onChange={e => setForm({ ...form, category: e.target.value })}
      />
      <input
        type="number"
        placeholder="Price"
        className="border p-2"
        value={form.price}
        onChange={e => setForm({ ...form, price: e.target.value })}
      />
      <input
        type="number"
        placeholder="Stock"
        className="border p-2"
        value={form.stockQuantity}
        onChange={e => setForm({ ...form, stockQuantity: e.target.value })}
      />
      <button
        onClick={submit}
        className="col-span-4 bg-green-600 text-white py-2 rounded"
      >
        Create Product
      </button>
    </div>
  );
};

export default ProductForm;
