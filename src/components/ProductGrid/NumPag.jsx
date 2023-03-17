import { Pagination } from '@mui/material'

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../../state/page";

export const NumPag = () => {
  const data = useSelector((state) => state.data);

  const [countPag, setCountPag] = useState(1);
  const dispatch = useDispatch();

  const handleChangePage = (event, value) => {
    dispatch(setPage(value));
  };

  useEffect(() => {
    setCountPag(Math.ceil(data?.length / 10));
  }, [data]);
  return (
    <Pagination
      count={countPag}
      onChange={handleChangePage}
      showFirstButton
      showLastButton
    ></Pagination>
  );
};
