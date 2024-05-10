import Link from "next/link";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import styled from "@mui/material/styles/styled"; // GLOBAL CUSTOM COMPONENTS

import BazaarCard from "components/BazaarCard";
import { H3, H5, Tiny } from "components/Typography"; // CUSTOM DATA MODEL

// STYLED COMPONENT
const StyledBazaarCard = styled(BazaarCard)(({
  theme
}) => ({
  gap: "1rem",
  height: "100%",
  display: "flex",
  padding: "1.5rem",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    padding: "20px",
    textAlign: "center",
    flexDirection: "column"
  }
})); // ===========================================================

// ===========================================================
const Section3 = ({
  categories = []
}) => {
  return <div>
      <H3 fontSize={25} mb={3}>
        Shop By Category
      </H3>

      <Grid container spacing={3}>
        {categories.map(item => <Grid item lg={4} xs={6} key={item.id}>
            <Link href={`/products/search/${item.slug}`}>
              <StyledBazaarCard hoverEffect>
                <Image width={46} height={46} alt={item.name} src={item.image} />

                <div>
                  <Tiny color="primary.main">{item.description}</Tiny>
                  <H5>{item.name}</H5>
                </div>
              </StyledBazaarCard>
            </Link>
          </Grid>)}
      </Grid>
    </div>;
};

export default Section3;