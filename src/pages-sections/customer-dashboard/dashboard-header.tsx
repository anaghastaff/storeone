'use client'
import Link from "next/link";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { styled, Theme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery"; // MUI ICON COMPONENTS

import { Menu, type SvgIconComponent } from "@mui/icons-material"; // GLOBAL CUSTOM COMPONENTS

import { H2 } from "components/Typography";
import { SideNav } from "components/side-nav";
import FlexBox from "components/flex-box/flex-box";
import { Navigation } from "components/layouts/customer-dashboard"; // STYLED COMPONENT
import type { Customer, Order } from "@medusajs/medusa";

const StyledBox = styled("div")(({
  theme
}:{
  theme:Theme
}) => ({
  display: "flex",
  marginTop: theme.spacing(-2),
  marginBottom: theme.spacing(3),
  "& .headerHold": {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "space-between"
  },
  [theme.breakpoints.up("md")]: {
    "& .sidenav": {
      display: "none"
    }
  },
  [theme.breakpoints.down("md")]: {
    flexDirection: "column"
  }
})); // ==============================================================

// ==============================================================
const DashboardHeader = ({
  title,
  buttonText,
  href,
  Icon,
  customer,
  orders,
  disabled=false,
}:{
  title:string,
  buttonText?:string,
  href?:string,
  Icon: SvgIconComponent,
  customer?:Omit<Customer, 'password-hash'> | null,
  orders?: Order[] | null,
  disabled?:boolean
}) => {
  const isTablet = useMediaQuery((theme:Theme) => theme.breakpoints.down(1025));
  const HEADER_LINK = <Button disabled={disabled} href={href} color="primary" LinkComponent={Link} sx={{
    bgcolor: "primary.light",
    px: 4
  }}>
      {buttonText}
    </Button>;
  return <StyledBox>
      <FlexBox mt={2} className="headerHold">
        <FlexBox alignItems="center" gap={1.5}>
          {Icon && <Icon color="primary" />}

          <H2 my={0} lineHeight={1} ellipsis>
           {title}
          </H2>
        </FlexBox>

        <div className="sidenav">
          <SideNav position="left" handle={<Menu fontSize="small" />}>
            <Navigation orders={orders} customer={customer}/>
          </SideNav>
        </div>

        {!isTablet && buttonText ? HEADER_LINK : null}
      </FlexBox>

      {isTablet && buttonText ? <Box mt={2}>{HEADER_LINK}</Box> : null}
    </StyledBox>;
};

export default DashboardHeader;