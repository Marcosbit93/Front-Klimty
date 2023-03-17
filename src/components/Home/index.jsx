import React from "react";

import { ProductGrid } from "../ProductGrid";
import { Grid } from "@mui/material";

// import ProductCard from "../ProductCard";
// import { useSelector } from "react-redux";
// import DetailsCard from "../../commons/DetailsCard";

export const Home = () => {
  // const photoCardDetail = useSelector((state) => state.detail);


  

  return (
    <Grid container sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      {/* {photoCardDetail.name && (
        // <Grid item xs={2}>
        //   <ProductCard  />
        // </Grid>
      )} */}
      <Grid item xs={12} sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <ProductGrid />
      </Grid>
    </Grid>
  );
};
