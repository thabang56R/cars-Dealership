import React, { useEffect, useState } from "react";
import { getDealers } from "../../services/api";
import { Link } from "react-router-dom";

export default function Dealers() {
  const [dealers, setDealers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getDealers();
      setDealers(data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h2>Dealers</h2>
      <ul>
        {dealers.map((dealer) => (
          <li key={dealer.id}>
            {dealer.name} - {dealer.city}, {dealer.state}
            <Link to={`/dealer/${dealer.id}/reviews`}>View Reviews</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
