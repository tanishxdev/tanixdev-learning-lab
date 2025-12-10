import { useState, useMemo } from "react";

function Example3_Filter() {
  const [search, setSearch] = useState("");
  const products = ["Laptop", "Phone", "Tablet", "Monitor", "Keyboard"];

  const filteredProducts = useMemo(() => {
    return products.filter(item =>
      item.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div>
      <h3>Search Products</h3>

      <input 
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul>
        {filteredProducts.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Example3_Filter;
