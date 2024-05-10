import Link from "next/link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating"; // GLOBAL CUSTOM COMPONENTS

import { FlexBox } from "components/flex-box";
import { NavLink } from "components/nav-link";
import BazaarImage from "components/BazaarImage";
import { H3, Paragraph } from "components/Typography"; // CUSTOM UTILS LIBRARY FUNCTIONS

import { currency } from "lib"; // CUSTOM DATA MODEL

// ===========================================
const ListBlock = ({
  title,
  products
}) => {
  return <Grid item lg={3} sm={6} xs={12}>
      <H3 mb={3}>{title}</H3>

      {products.map(product => <FlexBox mb={2} gap={2} key={product.id} sx={{
      alignItems: "center",
      "& a": {
        flexShrink: 0
      },
      ":last-of-type": {
        mb: 0
      },
      "& img": {
        transition: "0.3s"
      },
      ":hover": {
        img: {
          transform: "scale(1.1)"
        }
      }
    }}>
          <Link href={`/products/${product.slug}`}>
            <Box maxWidth={100} bgcolor="grey.300">
              <BazaarImage width="100%" alt="product" src={product.thumbnail} />
            </Box>
          </Link>

          <div>
            <NavLink href="/">
              <Paragraph fontSize={16}>{product.title}</Paragraph>
            </NavLink>

            <Paragraph fontWeight={700}>{currency(product.price)}</Paragraph>
            <Rating readOnly value={4} sx={{
          fontSize: 14
        }} />
          </div>
        </FlexBox>)}
    </Grid>;
};

export default ListBlock;