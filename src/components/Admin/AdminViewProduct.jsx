import React, { useEffect, useState } from "react";
import ListAdminProduct from "../../commons/ListAdminProduct";

import axios from "axios";
import { Search } from "../../commons/Search";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "../../state/adminProduct";
import ModalAddProduct from "../../commons/ModalAddProduct";
// import { useNavigate } from "react-router";

export default function AdminViewProduct() {
  const [data, setData] = useState([]);
  const [addModal, setAddModal] = useState(false);
  const booleano = useSelector((state) => state.adminProduct);
  // const [searchData, setSearchData] = useState([]);
  // const [search, setSearch] = useState("");
  // const navigate = useNavigate();

  // Renderizado inicial de pagina.
  useEffect(() => {
    axios.get("http://localhost:3001/api/product").then((res) => {
      const sortedData = res.data.sort((a, b) => a.id - b.id);
      setData(sortedData);
    });
  }, []);

  // Renderizado inicial de pagina.
  useEffect(() => {
    axios.get("http://localhost:3001/api/product").then((res) => {
      const sortedData = res.data.sort((a, b) => a.id - b.id);
      setData(sortedData);
    });
  }, [booleano]);

  // useEffect(() => {
  //   const productId = localStorage.getItem("productId");
  //   if (productId) {
  //     axios
  //       .get(`http://localhost:3001/api/product/${productId}`)
  //       .then((res) => {
  //         setData(...data, res.data);
  //       })
  //       .then(localStorage.removeItem("productId"));
  //   }
  // }, [data]);

  // function handleClick(e) {
  //   e.preventDefault();

  //   axios
  //     .get(`http://localhost:3001/api/search/product?input=${search}`)
  //     .then((res) => {
  //       setSearchData(res.data);
  //     })
  //     .then(() =>  setData([]))
  //     .then(() => navigate("/admin/product"));
  // }

  const openAddModal = () => {
    setAddModal(!addModal);
  };

  return (
    <>
      <div className="container">
        <div className="newProductContainer">
          {/* <Search
            setData={setData}
            setSearch={setSearch}
            handleClick={handleClick}
          /> */}
        </div>
        <div>
          <ModalAddProduct />
        </div>
        <div className="productsContainer">
          {data &&
            data.map((item, i) => {
              return (
                <div className="singularProduct" key={i}>
                  <ListAdminProduct item={item} />
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}
