import React, { useEffect, useState } from "react";
import ListAdminArtist from "../../commons/ListAdminArtist";
import axios from "axios";
import { useSelector } from "react-redux";
import ModalAddArtist from "../../commons/ModalAddArtist";

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
          <ModalAddArtist />
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
