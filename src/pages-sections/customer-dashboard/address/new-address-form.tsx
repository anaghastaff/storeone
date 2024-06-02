'use client'
import {useFormState} from 'react-dom'
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Formik } from "formik";
import * as yup from "yup"; // CUSTOM DATA MODEL
import { SubmitButton } from 'medusa/modules/common/components/submit-button';
import { Checkbox, FormControlLabel } from '@mui/material';
import { FlexBox } from 'components/flex-box';
import { Span } from 'components/Typography';
import BoxLink from 'pages-sections/sessions/box-link';
import { updateCustomerShippingAddress, addCustomerShippingAddress } from 'medusa/modules/account/actions';
import { useState , useEffect} from 'react';
import CountrySelect from 'medusa/modules/common/components/country-select';
import type { Address, Region } from '@medusajs/medusa';
import ErrorMessage from 'medusa/modules/common/components/error-message';
import { useSnackbar, VariantType } from 'notistack';
import { useRouter } from 'next/navigation';
// =============================================================
const NewShippingAddressForm = ({
  address,
  region
}:{
  address:Address,
  region:Region
}) => {
  const [formState, formAction] = useFormState(addCustomerShippingAddress, {success: false, error:null} )
  const [checked, setChecked] = useState(false)
  const router = useRouter()
  const {enqueueSnackbar} = useSnackbar()

  
    if (formState.success === true) {
      enqueueSnackbar("Address Added Successfully", { variant: "success" });
      router.push("/address");
    } 
    if(formState.success === false && formState.error) {
      enqueueSnackbar("Error adding Address", { variant: "error" });
    }

  
  const handleChange=(e)=>{
    setChecked(e.target.checked)
  }

   
  return  <form action={formAction}>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12} sm={6}>
              <TextField fullWidth name="first_name" label="First Name" required />
            </Grid>
            <Grid item md={6} xs={12} sm={6}>
              <TextField fullWidth name="last_name" label="Last Name" required />
            </Grid>
            <Grid item md={6} xs={12} sm={6}>
              <TextField fullWidth  label="Company"
                name="company"
                autoComplete="organization"
                required
                 />
            </Grid>
            <Grid item md={6} xs={12} sm={6}>
              <TextField fullWidth
                label="Address"
                name="address_1"
                required
                autoComplete="address-line1"
                 />
            </Grid>
            <Grid item md={6} xs={12} sm={6}>
              <TextField fullWidth  label="Apartment, suite, etc."
                name="address_2"
                autoComplete="address-line2"/>
            </Grid>

            <Grid item md={6} xs={12} sm={6}>
              <TextField fullWidth label="Postal code"
                  name="postal_code"
                  required
                  autoComplete="postal-code"/>
            </Grid>
            <Grid item md={6} xs={12} sm={6}>
              <TextField fullWidth
               label="City"
               name="city"
               required
               autoComplete="locality"
              />
            </Grid>
            <Grid item md={6} xs={12} sm={6}>
              <TextField fullWidth
               label="Province / State"
               name="province"
               autoComplete="address-level1"
              />
            </Grid>
            <Grid item md={6} xs={12} sm={6}>
            <CountrySelect
                region={region}
                name="country_code"
                required
                autoComplete="country"
              />
            </Grid>
            <Grid item md={6} xs={12} sm={6}>
              <TextField fullWidth
               label="Phone" name="phone" autoComplete="phone" required
              />
            </Grid>

            
          </Grid>
          <Grid item md={6} xs={12} sm={6}>
          <FormControlLabel 
        name="agreement"
        className="agreement"
        onChange={handleChange}
        control={
          <Checkbox
            size="small"
            color="secondary"
            checked={checked}
          />
         
        }
        label={
          <FlexBox
            flexWrap="wrap"
            alignItems="center"
            justifyContent="flex-start"
            gap={1}
          >
            <Span
              display={{
                sm: "inline-block",
                xs: "none",
              }}
            >
              I am human
            </Span>
           
          </FlexBox>
        }
      />
       </Grid>
       <Grid item md={6} xs={12} sm={6}>
      <SubmitButton variant="contained" size="small" color="error" disabled={!checked}>
        Add Address
      </SubmitButton>
      </Grid>
      <ErrorMessage error={formState.error as string} data-testid="error-message-login" />
        </form>
        };
   


export default NewShippingAddressForm;