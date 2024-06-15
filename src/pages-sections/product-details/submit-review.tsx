"use client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import TextField from "@mui/material/TextField";
import * as yup from "yup";
import { useFormik, FormikErrors } from "formik";
import { FlexBox } from "components/flex-box";
import { H2, H5 } from "components/Typography";
import { useEffect, useState } from "react";
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing";
import { useSnackbar } from "notistack";
import { SubmitButton } from "medusa/modules/common/components/submit-button";
import Dialog from "@mui/material/Dialog";
import { DialogActions, DialogTitle, DialogContent, IconButton } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Divider from "medusa/modules/common/components/divider";
import RateReviewIcon from '@mui/icons-material/RateReview';
import useHeader from "components/header/use-header";
import { Wrapper } from "pages-sections/sessions/styles";
import {ReviewFormWrapper} from './styles';
import CloseIcon from '@mui/icons-material/Close';

export interface Review {
  product_id: string;
  title: string;
  user_name: string;
  rating: number;
  content: string;
  id: string;
  created_at: string;
  updated_at: string;
}

export interface ApiResponse {
  status: string;
  data: Review[];
  message: string;
}

const initialValues = {
  title: "",
  user_name: "",
  rating: 1,
  content: "",
};

const validationSchema = yup.object().shape({
  title: yup.string().required("Title is required"),
  user_name: yup.string().required("User name is required"),
  rating: yup.number().min(1).max(5).required("Rating is required"),
  content: yup.string().required("Content is required"),
});

const SubmitProductReview = ({
  productId,
  color="primary",
  children,
  variant="outlined",
  size="medium",
}: {
  productId: string; 
  children:React.ReactNode;
  variant?:"outlined" | "contained" | "text";
  color?:"primary" | "secondary" | "info" | "error" | "warning" | "success";
  size?:"small" | "medium" | "large";
}) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [loading, setLoading] = useState(false);
  const [pending, setPending] = useState(false);
  const [success, setSuccess] = useState(null);
  const { enqueueSnackbar } = useSnackbar();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      console.log("values entered by user", values);
      try {
        setPending(true);
        const response = await fetch(`/api/reviews/${productId}`, {
          method: "POST",
          body: JSON.stringify(values),
        });

        resetForm();
        setPending(true);
        if (!response.ok) {
          console.log("Failed to submit review", response.statusText);
          enqueueSnackbar("Failed to submit review", { variant: "error" });
        }
        if (response.ok) {
          enqueueSnackbar("your review has been submitted", {
            variant: "success",
          });
          setPending(false);
          handleClose();
        }
      } catch (error) {
        console.error("Error submitting review", error);
      }
    },
  });

  return (
    <>
     
      <FlexBox sx={{ my: 1 }}>     
        <Button
          onClick={handleClickOpen}
          variant={variant}
          size={size}
          sx={{ px: 2, width: "fit-content" }}
          color={color}
          endIcon={<RateReviewIcon sx={{fontSize:14}}/>}
        >
         {children}
        </Button>
      </FlexBox>
     <ReviewFormWrapper>
      <Dialog scroll="body" open={open} onClose={handleClose} fullScreen={fullScreen} sx={{mt:10}}>
     
        <Backdrop
          sx={{ color: "InfoText", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={pending}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
        <Box sx={{p:1}}>
        <IconButton disableRipple edge="end" sx={{borderRadius:'50%', bgcolor:'grey.300'}}
          onClick={handleClose}
        >
          <CloseIcon color="info" fontSize="small"/>
        </IconButton>
        </Box>
       
        <FlexBox
          sx={{
            maxWidth: 500,
            width: {sm:500},
            minWidth: 300,
            m: "auto",
           
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
         
          <form onSubmit={formik.handleSubmit}>
            <DialogContent>
              <Box mb={2.5}>
                <FlexBox mb={1.5} gap={0.5}>
                  <H5 color="grey.700">Your Rating</H5>
                  <H5 color="error.main">*</H5>
                </FlexBox>

                <Rating
                  color="warn"
                  size="medium"
                  value={formik.values.rating}
                  onChange={(_, value) => formik.setFieldValue("rating", value)}
                />
              </Box>

              <Box mb={3}>
                <FlexBox mb={1.5} gap={0.5}>
                  <H5 color="grey.700">Name</H5>
                  <H5 color="error.main">*</H5>
                </FlexBox>

                <TextField
                  fullWidth
                  name="user_name"
                  variant="outlined"
                  onBlur={formik.handleBlur}
                  value={formik.values.user_name}
                  onChange={formik.handleChange}
                  placeholder="Your Name..."
                  error={
                    !!formik.touched.user_name && !!formik.errors.user_name
                  }
                  helperText={
                    formik.touched.user_name && formik.errors.user_name
                  }
                />
              </Box>

              <Box mb={3}>
                <FlexBox mb={1.5} gap={0.5}>
                  <H5 color="grey.700">Subject</H5>
                  <H5 color="error.main">*</H5>
                </FlexBox>

                <TextField
                  fullWidth
                  name="title"
                  variant="outlined"
                  onBlur={formik.handleBlur}
                  value={formik.values.title}
                  onChange={formik.handleChange}
                  placeholder="Subject..."
                  error={!!formik.touched.title && !!formik.errors.title}
                  helperText={formik.touched.title && formik.errors.title}
                />
              </Box>

              <Box mb={3}>
                <FlexBox mb={1.5} gap={0.5}>
                  <H5 color="grey.700">Your Review</H5>
                  <H5 color="error.main">*</H5>
                </FlexBox>

                <TextField
                  rows={8}
                  multiline
                  fullWidth
                  name="content"
                  variant="outlined"
                  onBlur={formik.handleBlur}
                  value={formik.values.content}
                  onChange={formik.handleChange}
                  placeholder="Write a review here..."
                  error={!!formik.touched.content && !!formik.errors.content}
                  helperText={formik.touched.content && formik.errors.content}
                />
              </Box>
            </DialogContent>
            <DialogActions sx={{p:2}}>
              <SubmitButton
                variant="contained"
                color="primary"
                size="small"
                disabled={!(formik.dirty && formik.isValid) || pending}
              >
                Submit
              </SubmitButton>
              <Button onClick={handleClose} variant="outlined" size="small">
                Cancel
              </Button>
            </DialogActions>
          </form>
        </FlexBox>
        
      </Dialog>
      </ReviewFormWrapper>
    </>
  );
};

export default SubmitProductReview;
