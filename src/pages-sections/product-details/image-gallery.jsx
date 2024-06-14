"use client";
import { Fragment, useState } from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import LazyImage from "components/LazyImage";
import { FlexBox, FlexRowCenter } from "components/flex-box"; // CUSTOM UTILS LIBRARY FUNCTION
import  CircularProgress  from "@mui/material/CircularProgress";

const ImageGalleryArea = ({product}) => {

    const { id, title, images, handle, thumbnail, options, variants } = product || {};

    const [selectedImage, setSelectedImage] = useState(0);

    const handleImageClick = (ind) => () => setSelectedImage(ind);

    return <Fragment>

<FlexBox justifyContent="center" mb={6} sx={{width:300, height:300, mx:'auto', bgcolor: "grey.300", display:'block', position:'relative', overflow:'hidden' }}>
           {images ? 
           <LazyImage
              alt={title ? title : "loading..."}
             fill={true}
             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              loading="lazy"
              src={
                images && images[selectedImage]?.url
              }
              sx={{
                objectFit: "cover", position:'absolute', 
              }}
            />
            :
             <Box sx={{ mx: "auto" }}>
                    <CircularProgress color="primary" />
                  </Box>
            }
          </FlexBox>

          <FlexBox overflow="auto" >
            {images?.map((url, ind) => (
              <FlexRowCenter
                key={ind}
                width={64}
                height={64}
                minWidth={64}
                bgcolor="white"
                border="1px solid"
                borderRadius="10px"
                ml={ind === 0 ? "auto" : 0}
                style={{
                  cursor: "pointer",
                }}
                onClick={handleImageClick(ind)}
                mr={ind === images.length - 1 ? "auto" : "10px"}
                borderColor={
                  selectedImage === ind ? "primary.main" : "grey.400"
                }
              >
                <Avatar
                  alt={id}
                  src={images[ind].url}
                  variant="square"
                  sx={{
                    height: 40,
                  }}
                />
              </FlexRowCenter>
            ))}
          </FlexBox>

    </Fragment>

}

export default ImageGalleryArea

