import React, { useEffect, useState } from "react";
import ListAdminArtist from "../../commons/ListAdminArtist";
import AddButton from "../../commons/AddButton";
import axios from "axios";
import { useSelector } from "react-redux";

export default function AdminViewArtist() {
  const [data, setData] = useState([]);
  const booleano = useSelector((state) => state.adminProduct);

  // Renderizado inicial de pagina.
  useEffect(() => {
    axios.get("http://localhost:3001/api/artist").then((res) => {
      const sortedData = res.data.sort((a, b) => a.id - b.id);
      setData(sortedData);
    });
  }, []);

  // Renderizado inicial de pagina.
  useEffect(() => {
    axios.get("http://localhost:3001/api/artist").then((res) => {
      const sortedData = res.data.sort((a, b) => a.id - b.id);
      setData(sortedData);
    });
  }, [booleano]);


  return (
    <>
      <div className="container">
        <div className="newProductContainer">
          <AddButton />
        </div>
        <div className="productsContainer">
          {data &&
            data.map((item, i) => {
              return (
                <div className="singularProduct" key={i}>
                  <ListAdminArtist item={item} />
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}
