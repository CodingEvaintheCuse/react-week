import React, { useState, useEffect } from "react";
import Table from "./Table";

function Inventory() {
  const [data, setData] = useState([1, 2, 3, 4]);

  useEffect(() => {
    fetch("http://localhost:3001/inventory")
      .then(response => response.json())
      .then(json => setData(json));
  }, []);

  return (
    <div className="inventory-page">
      <h4>INVENTORY</h4>
      <Table data={data} />
    </div>
  );
}
export default Inventory;
