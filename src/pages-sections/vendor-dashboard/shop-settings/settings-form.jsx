import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import { Formik } from "formik";
import * as Yup from "yup";
const VALIDATION_SCHEMA = Yup.object().shape({
  shopName: Yup.string().required("Shop Name is required!"),
  shopPhone: Yup.string().required("Shop Phone is required!"),
  category: Yup.string().required("Category is required!"),
  description: Yup.string().required("Description is required!"),
  shopAddress: Yup.string().required("Shop Address is required!"),
  order: Yup.number().required("Orders is required!")
});

const SettingsForm = () => {
  const INITIAL_VALUES = {
    order: 10,
    category: "fashion",
    shopName: "The Icon Style",
    shopPhone: "+123 4567 8910",
    shopAddress: "4990 Hide A Way Road Santa Clara, CA 95050.",
    description: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`
  };

  const handleFormSubmit = values => {};

  return <Formik onSubmit={handleFormSubmit} initialValues={INITIAL_VALUES} validationSchema={VALIDATION_SCHEMA}>
      {({
      values,
      errors,
      touched,
      handleChange,
      handleBlur,
      handleSubmit
    }) => <form onSubmit={handleSubmit}>
          <Stack spacing={3} mb={3}>
            <TextField color="info" size="medium" name="shopName" label="Shop Name *" onBlur={handleBlur} value={values.shopName} onChange={handleChange} error={Boolean(errors.shopName && touched.shopName)} helperText={touched.shopName && errors.shopName} />

            <TextField color="info" size="medium" name="shopPhone" label="Shop Phone" onBlur={handleBlur} onChange={handleChange} value={values.shopPhone} error={Boolean(errors.shopPhone && touched.shopPhone)} helperText={touched.shopPhone && errors.shopPhone} />

            <TextField select fullWidth color="info" size="medium" name="category" onBlur={handleBlur} placeholder="Category" label="Select Category" onChange={handleChange} value={values.category} error={Boolean(errors.category && touched.category)} helperText={touched.category && errors.category}>
              <MenuItem value="electronics">Electronics</MenuItem>
              <MenuItem value="fashion">Fashion</MenuItem>
            </TextField>

            <TextField rows={6} multiline fullWidth color="info" size="medium" name="description" onBlur={handleBlur} onChange={handleChange} value={values.description} label="Description (optional)" error={Boolean(errors.description && touched.description)} helperText={touched.description && errors.description} />

            <TextField color="info" size="medium" name="shopAddress" label="Shop Address" onBlur={handleBlur} onChange={handleChange} value={values.shopAddress} error={Boolean(errors.shopAddress && touched.shopAddress)} helperText={touched.shopAddress && errors.shopAddress} />

            <TextField name="order" color="info" size="medium" type="number" onBlur={handleBlur} value={values.order} label="Minimum Order *" onChange={handleChange} error={Boolean(errors.order && touched.order)} helperText={touched.order && errors.order} />
          </Stack>

          <Button type="submit" color="info" variant="contained">
            Save Changes
          </Button>
        </form>}
    </Formik>;
};

export default SettingsForm;