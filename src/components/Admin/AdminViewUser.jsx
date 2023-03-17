import React, { useEffect, useState } from "react";
import ListAdminUser from "../../commons/ListAdminUser";
import ModalAddUser from "../../commons/ModalAddUser";
import axios from "axios";
import { useSelector } from "react-redux";

export default function AdminViewUser() {
  const [data, setData] = useState([]);
  const booleano = useSelector((state) => state.adminProduct);

  // Renderizado inicial de pagina.
  useEffect(() => {
    axios.get("http://localhost:3001/api/user").then((res) => {
      const sortedData = res.data.sort((a, b) => a.id - b.id);
      setData(sortedData);
    });
  }, []);

  // Renderizado inicial de pagina.
  useEffect(() => {
    axios.get("http://localhost:3001/api/user").then((res) => {
      const sortedData = res.data.sort((a, b) => a.id - b.id);
      setData(sortedData);
    });
  }, [booleano]);

  return (
    <>
      <div className="container">
        <div className="newProductContainer">
          <ModalAddUser />
        </div>
        <div className="productsContainer">
          {data &&
            data.map((item, i) => {
              return (
                <div className="singularProduct" key={i}>
                  <ListAdminUser item={item} />
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}
