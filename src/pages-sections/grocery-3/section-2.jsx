import Link from "next/link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button"; // GLOBAL CUSTOM COMPONENTS

import LazyImage from "components/LazyImage";
import { H3, Paragraph } from "components/Typography"; // CUSTOM DATA MODEL

// STYLED COMPONENT
import { StyledCard } from "./styles"; // ============================================================

// ============================================================
const Section2 = ({
  offers
}) => {
  return <Grid container spacing={3}>
      {offers.map((item, ind) => <Grid key={ind} item md={6} sm={12} xs={12}>
          <Link href="/sales-1">
            <StyledCard>
              <Box width="60%">
                <Paragraph fontWeight={600}>{item.title}</Paragraph>

                <H3 fontSize={25} lineHeight={1.35}>
                  {item.discountOffer}
                </H3>

                <Button sx={{
              mt: 2
            }} color="primary" variant="outlined">
                  {item.buttonText}
                </Button>
              </Box>

              <Box width="40%">
                <LazyImage width={900} height={528} alt={item.title} src={item.imgUrl} />
              </Box>
            </StyledCard>
          </Link>
        </Grid>)}
    </Grid>;
};

export default Section2;