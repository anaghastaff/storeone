import Link from "next/link";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button"; // GLOBAL CUSTOM COMPONENTS

import LazyImage from "components/LazyImage";
import { H1, Paragraph } from "components/Typography"; // STYLED COMPONENT

import { DiscountWrapper } from "./styles";

const DiscountSection = () => {
  return <DiscountWrapper>
      <Grid container>
        <Grid className="content" item sm={7} xs={12}>
          <Paragraph>Till 10 Dec, 2021</Paragraph>
          <H1>25% Special Off Today</H1>
          <H1>Only for Vegetables</H1>
          <Button href="/sales-1" color="primary" variant="contained" LinkComponent={Link} sx={{
          mt: 5,
          fontSize: 12
        }}>
            Shop Now
          </Button>
        </Grid>

        <Grid item sm={5}>
          <LazyImage width={900} height={528} alt="discount" src="/assets/images/Groceries Shop/vagitable.png" />
        </Grid>
      </Grid>
    </DiscountWrapper>;
};

export default DiscountSection;