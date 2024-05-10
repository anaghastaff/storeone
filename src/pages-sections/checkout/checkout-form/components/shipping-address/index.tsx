import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete"; // GLOBAL CUSTOM COMPONENT

import { H6 } from "components/Typography"; // DUMMY CUSTOM DATA

import countryList from "data/countryList"; // ==============================================================
import { Checkbox, FormControlLabel } from "@mui/material";

// ==============================================================
const ShippingForm = ({
  values,
  errors,
  touched,
  handleBlur,
  handleChange,
  setFieldValue,
  toggleSameAsBilling,
  sameAsSBilling
}) => {
  return (
    <Card
      sx={{
        mb: 4,
        p: 3,
      }}
    >
      <H6 mb={2}>Shipping & Billing Address</H6>

      <Grid container spacing={3}>
        <Grid item sm={6} xs={12} spacing={6}>
          <TextField
            required
            fullWidth
            type="email"
            sx={{
              mb: 2,
            }}
            onBlur={handleBlur}
            name="email"
            label="Email ID"
            onChange={handleChange}
            value={values.email}
            error={!!touched.email && !!errors.email}
            helperText={touched.email && errors.email}
          />
        </Grid>
      </Grid>
      <Grid container columnSpacing={3}>
        <Grid item sm={6} xs={12}>
          <TextField
            fullWidth
            sx={{
              mb: 2,
            }}
            label="First Name"
            required
            onBlur={handleBlur}
            name="shipping_firstName"
            onChange={handleChange}
            value={values.shipping_firstName}
            error={!!touched.shipping_firstName && !!errors.shipping_firstName}
            helperText={touched.shipping_firstName && errors.shipping_firstName}
          />
        </Grid>
        <Grid item sm={6} xs={12}>
          <TextField
            fullWidth
            sx={{
              mb: 2,
            }}
            label="Last Name "
            required
            onBlur={handleBlur}
            name="shipping_lastName"
            onChange={handleChange}
            value={values.shipping_lastName}
            error={!!touched.shipping_lastName && !!errors.shipping_lastName}
            helperText={touched.shipping_lastName && errors.shipping_lastName}
          />
        </Grid>

        <Grid item sm={6} xs={12}>
          <TextField
            sx={{
              mb: 2,
            }}
            fullWidth
            label="Address 1"
            required
            onBlur={handleBlur}
            onChange={handleChange}
            name="shipping_address1"
            value={values.shipping_address1}
            error={!!touched.shipping_address1 && !!errors.shipping_address1}
            helperText={touched.shipping_address1 && errors.shipping_address1}
          />
        </Grid>
        <Grid item sm={6} xs={12}>
          <TextField
            fullWidth
            sx={{
              mb: 2,
            }}
            label="Address 2"
            onBlur={handleBlur}
            onChange={handleChange}
            name="shipping_address2"
            value={values.shipping_address2}
            error={!!touched.shipping_address2 && !!errors.shipping_address2}
            helperText={touched.shipping_address2 && errors.shipping_address2}
          />
        </Grid>

        <Grid item sm={6} xs={12}>
          <TextField
            fullWidth
            sx={{
              mb: 2,
            }}
            onBlur={handleBlur}
            label="Phone Number"
            required
            onChange={handleChange}
            name="shipping_contact"
            value={values.shipping_contact}
            error={!!touched.shipping_contact && !!errors.shipping_contact}
            helperText={touched.shipping_contact && errors.shipping_contact}
          />
        </Grid>
        <Grid item sm={6} xs={12}>
          <TextField
            fullWidth
            sx={{
              mb: 2,
            }}
            label="Zip Code"
            required
            name="shipping_zip"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.shipping_zip}
            error={!!touched.shipping_zip && !!errors.shipping_zip}
            helperText={touched.shipping_zip && errors.shipping_zip}
          />
        </Grid>
        <Grid item sm={6} xs={12}>
          <TextField
            fullWidth
            sx={{
              mb: 2,
            }}
            label="City"
            required
            name="shipping_city"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.shipping_city}
            error={!!touched.shipping_city && !!errors.shipping_city}
            helperText={touched.shipping_city && errors.shipping_city}
          />
        </Grid>
        <Grid item sm={6} xs={12}>
          <TextField
            fullWidth
            sx={{
              mb: 2,
            }}
            label="Company"
            onBlur={handleBlur}
            onChange={handleChange}
            name="shipping_company"
            value={values.shipping_company}
            error={!!touched.shipping_company && !!errors.shipping_company}
            helperText={touched.shipping_company && errors.shipping_company}
          />
        </Grid>

        <Grid item sm={6} xs={12}>
          <Autocomplete
            fullWidth
            sx={{
              mb: 2,
            }}
            options={countryList}
            value={values.shipping_country}
            getOptionLabel={(option) => option.label}
            onChange={(_, value) => setFieldValue("shipping_country", value)}
            renderInput={(params) => (
              <TextField
                label="Country"
                required
                variant="outlined"
                placeholder="Select Country"
                error={!!touched.shipping_country && !!errors.shipping_country}
                helperText={touched.shipping_country && errors.shipping_country}
                {...params}
                inputProps={{
                  ...params.inputProps,
                  autoComplete: "new-password",
                }}
              />
            )}
          />
        </Grid>
        <Grid item sm={6} xs={12}>
        <FormControlLabel
        label="Same as shipping address"
        control={
          <Checkbox
            size="small"
            color="secondary"
            checked={sameAsSBilling}
            onChange={toggleSameAsBilling}
            inputProps={{'aria-label': 'controlled'}}
          />
        }
        sx={{
          zIndex: 1,
          position: "relative",
          mb: sameAsSBilling ? "" : "1rem",
        }}
      />
        </Grid>
      </Grid>
    </Card>
  );
};

export default ShippingForm;
