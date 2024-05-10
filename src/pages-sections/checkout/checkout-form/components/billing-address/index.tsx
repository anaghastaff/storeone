import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import FormControlLabel from "@mui/material/FormControlLabel";
import { H6 } from "components/Typography"; // DUMMY CUSTOM DATA

import countryList from "data/countryList"; // ==============================================================

// ==============================================================
const BillingAddressForm = ({
  errors,
  handleBlur,
  handleChange,
  setFieldValue,
  touched,
  values,
  sameAsSBilling,
}) => {
  return (
    <Card
      sx={{
        mb: 4,
        p: 3,
      }}
    >
      <H6 mb={2}>Billing Address</H6>

      {!sameAsSBilling && (
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
              name="billing_firstName"
              onChange={handleChange}
              value={values.billing_firstName}
              error={!!touched.billing_firstName && !!errors.billing_firstName}
              helperText={touched.billing_firstName && errors.billing_firstName}
            />
          </Grid>
          <Grid item sm={6} xs={12}>
            <TextField
              fullWidth
              sx={{
                mb: 2,
              }}
              label="Last Name"
              required
              onBlur={handleBlur}
              name="billing_lastName"
              onChange={handleChange}
              value={values.billing_lastName}
              error={!!touched.billing_lastName && !!errors.billing_lastName}
              helperText={touched.billing_lastName && errors.billing_lastName}
            />
          </Grid>
          <Grid item sm={6} xs={12}>
            <TextField
              fullWidth
              sx={{
                mb: 2,
              }}
              label="Address 1"
              required
              onBlur={handleBlur}
              onChange={handleChange}
              name="billing_address1"
              value={values.billing_address1}
              error={!!touched.billing_address1 && !!errors.billing_address1}
              helperText={touched.billing_address1 && errors.billing_address1}
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
              name="billing_address2"
              onChange={handleChange}
              value={values.billing_address2}
              error={!!touched.billing_address2 && !!errors.billing_address2}
              helperText={touched.billing_address2 && errors.billing_address2}
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
              name="billing_contact"
              onChange={handleChange}
              value={values.billing_contact}
              error={!!touched.billing_contact && !!errors.billing_contact}
              helperText={touched.billing_contact && errors.billing_contact}
            />
          </Grid>
          <Grid item sm={6} xs={12}>
            <TextField
              fullWidth
              type="number"
              sx={{
                mb: 2,
              }}
              label="Zip Code"
              required
              name="billing_zip"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.billing_zip}
              error={!!touched.billing_zip && !!errors.billing_zip}
              helperText={touched.billing_zip && errors.billing_zip}
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
              name="billing_city"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.billing_city}
              error={!!touched.billing_city && !!errors.billing_city}
              helperText={touched.billing_city && errors.billing_city}
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
              name="billing_company"
              onChange={handleChange}
              value={values.billing_company}
              error={!!touched.billing_company && !!errors.billing_company}
              helperText={touched.billing_company && errors.billing_company}
            />
          </Grid>
          <Grid item sm={6} xs={12}>
            <Autocomplete
              fullWidth
              sx={{
                mb: 2,
              }}
              options={countryList}
              value={values.billing_country}
              getOptionLabel={(option) => option.label}
              onChange={(_, value) => setFieldValue("billing_country", value)}
              renderInput={(params) => (
                <TextField
                  label="Country"
                  placeholder="Select Country"
                  required
                  error={!!touched.billing_country && !!errors.billing_country}
                  helperText={touched.billing_country && errors.billing_country}
                  {...params}
                  inputProps={{
                    ...params.inputProps,
                    autoComplete: "new-password",
                  }}
                />
              )}
            />
          </Grid>
        </Grid>
      )}
    </Card>
  );
};

export default BillingAddressForm;
