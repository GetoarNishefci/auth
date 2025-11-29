interface Filters {
  category: string;
  minPrice: string;
  maxPrice: string;
}

interface ProductFilterProps {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
  onFilter: () => void;
}

const ProductFilter: React.FC<ProductFilterProps> = ({ filters, setFilters, onFilter }) => {
  return (
    <div className="flex gap-4 border p-4 rounded">
      <input
        placeholder="Category"
        className="border p-2 rounded"
        value={filters.category}
        onChange={e => setFilters({ ...filters, category: e.target.value })}
      />

      <input
        type="number"
        placeholder="Min Price"
        className="border p-2 rounded"
        value={filters.minPrice}
        onChange={e => setFilters({ ...filters, minPrice: e.target.value })}
      />

      <input
        type="number"
        placeholder="Max Price"
        className="border p-2 rounded"
        value={filters.maxPrice}
        onChange={e => setFilters({ ...filters, maxPrice: e.target.value })}
      />

      <button
        onClick={onFilter}
        className="bg-black text-white px-6 rounded"
      >
        Filter
      </button>
    </div>
  );
};

export default ProductFilter;
