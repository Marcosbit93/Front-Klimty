
import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { setCheckout } from "../../state/checkout";
import { useDispatch, useSelector } from "react-redux";


export default function AddressForm() {
  const dispatch = useDispatch();
  const checkout = useSelector(state => state.checkout)


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    dispatch(setCheckout({name, value}))

  };


  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>

      <form >
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="firstName"
              name="name"
              label="First name"
              fullwidth
              autoComplete="given-name"
              variant="standard"
              value={checkout.name}
              onChange={(e) => handleInputChange(e)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Last name"
              fullwidth
              autoComplete="family-name"
              variant="standard"
              value={checkout.lastName}
              onChange={(e) => handleInputChange(e)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="address1"
              name="address1"
              label="Address line 1"
              fullwidth
              autoComplete="shipping address-line1"
              variant="standard"
              value={checkout.address1}
              onChange={(e) => handleInputChange(e)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="address2"
              name="address2"
              label="Address line 2"
              fullwidth
              autoComplete="shipping address-line2"
              variant="standard"
              value={checkout.address2}
              onChange={(e) => handleInputChange(e)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="city"
              name="city"
              label="City"
              fullwidth
              autoComplete="shipping address-level2"
              variant="standard"
              value={checkout.city}
              onChange={(e) => handleInputChange(e)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="state"
              name="region"
              label="State/Province/Region"
              fullwidth
              variant="standard"
              value={checkout.region}
              onChange={(e) => handleInputChange(e)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="zip"
              name="zip"
              label="Zip / Postal code"
              fullwidth
              autoComplete="shipping postal-code"
              variant="standard"
              value={checkout.zip}
              onChange={(e) => handleInputChange(e)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="country"
              name="country"
              label="Country"
              fullwidth
              autoComplete="shipping country"
              variant="standard"
              value={checkout.country}
              onChange={(e) => handleInputChange(e)}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox color="secondary" name="saveAddress" value="yes" />
              }
              label="Use this address for payment details"
            />
          </Grid>
        </Grid>
      </form>

    </React.Fragment>
  );
}
