import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { styled, keyframes, Theme } from "@mui/material/styles";
import Menu from "@mui/icons-material/Menu";
import { Link as Scroll } from "react-scroll";
import debounce from "lodash/debounce";
import clsx from "clsx"; // CUSTOM COMPONENT

import Image from "components/BazaarImage";
import { SideNav } from "components/side-nav";
import { FlexBox } from "components/flex-box";
import type { CartWithCheckoutStep } from "medusa/types/global";
const headerHeight = 72;
const slideFromTop = keyframes`
from { top: -${headerHeight}px; }
to { top: 0; }`; // STYLED COMPONENT

const HeaderWrapper = styled("div")(({ theme }: { theme: Theme }) => ({
  borderBottom: `1px solid ${theme.palette.grey[200]}`,
  "& .link": {
    cursor: "pointer",
    transition: "color 250ms ease-in-out",
    fontWeight: 500,
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
  "& .fixedHeader": {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 99,
    background: "white",
    height: headerHeight,
    boxShadow: theme.shadows[2],
    animation: `${slideFromTop} 250ms ease-in-out`,
    "& .link": {
      color: "inherit",
    },
  },
  [theme.breakpoints.down("sm")]: {
    "& .right-links": {
      display: "none",
    },
    "& .purchase-link": {
      display: "none",
    },
  },
}));

const Header = ({ cart }: { cart: CartWithCheckoutStep }) => {
  const [open, setOpen] = useState(false);
  const [isFixed, setFixed] = useState(false);
  const downSM = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));

  const toggleSidenav = () => setOpen((open) => !open);

  const scrollListener = debounce(() => {
    if (window.scrollY >= headerHeight) setFixed(true);
    else setFixed(false);
  }, 50);
  useEffect(() => {
    if (!window) return null;
    window.addEventListener("scroll", scrollListener);
    return () => window.removeEventListener("scroll", scrollListener);
  }, [scrollListener]);
  return (
    <Fragment>
      <HeaderWrapper>
        <div
          className={clsx({
            fixedHeader: isFixed,
          })}
        >
          <Container>
            <FlexBox height={headerHeight} alignItems="center">
              <Scroll to="top" duration={400} smooth={true} isDynamic>
                <Box
                  sx={{
                    cursor: "pointer",
                  }}
                >
                  {" "}
                  <Image
                    width="96px"
                    height="44px"
                    src="/assets/images/logo2.svg"
                    alt="logo now"
                  />
                </Box>
              </Scroll>

              <Box mx="auto" />

              <FlexBox className="right-links" alignItems="center">
                <Scroll
                  to="features"
                  duration={400}
                  offset={-headerHeight - 16}
                  smooth={true}
                >
                  <Typography
                    className="link"
                    color="grey.600"
                    p="0.25rem 1.25rem"
                  >
                    Features
                  </Typography>
                </Scroll>

                <Scroll
                  to="demos"
                  duration={400}
                  offset={-headerHeight - 16}
                  smooth={true}
                >
                  <Typography
                    className="link"
                    color="grey.600"
                    p="0.25rem 1.25rem"
                  >
                    Demos
                  </Typography>
                </Scroll>

                <a href="https://bazaar-doc.netlify.app/" target="__blank">
                  <Typography
                    className="link"
                    color="grey.600"
                    p="0.25rem 1.25rem"
                  >
                    Documentation
                  </Typography>
                </a>
              </FlexBox>

              {!downSM && (
                <a target="__blank" href="https://tinyurl.com/get-bazaar">
                  <Button variant="outlined">Purchase Now</Button>
                </a>
              )}

              {/* mobile menu */}
              {downSM && (
                <SideNav
                  open={open}
                  width={260}
                  position="right"
                  toggleSidenav={toggleSidenav}
                  handle={
                    <IconButton>
                      <Menu />
                    </IconButton>
                  }
                >
                  <Box
                    p={2}
                    sx={{
                      "& .link": {
                        cursor: "pointer",
                        transition: "color 250ms ease-in-out",
                        "&:hover": {
                          color: "primary.main",
                        },
                      },
                    }}
                  >
                    <Scroll
                      to="features"
                      duration={400}
                      offset={-headerHeight - 16}
                      smooth={true}
                    >
                      <Typography
                        className="link"
                        py={1}
                        onClick={toggleSidenav}
                      >
                        Features
                      </Typography>
                    </Scroll>

                    <Scroll
                      to="demos"
                      duration={400}
                      offset={-headerHeight - 16}
                      smooth={true}
                    >
                      <Typography
                        className="link"
                        py={1}
                        onClick={toggleSidenav}
                      >
                        Demos
                      </Typography>
                    </Scroll>

                    <Scroll
                      smooth={true}
                      duration={400}
                      to="technologies"
                      offset={-headerHeight - 16}
                    >
                      <Typography
                        className="link"
                        py={1}
                        mb={2}
                        onClick={toggleSidenav}
                      >
                        Technologies
                      </Typography>
                    </Scroll>

                    <Button
                      href="https://material-ui.com/store/items/bazaar-pro-react-ecommerce-template/"
                      LinkComponent={Link}
                      variant="outlined"
                      color="primary"
                      target="_blank"
                    >
                      Purchase Now
                    </Button>
                  </Box>
                </SideNav>
              )}
            </FlexBox>
          </Container>
        </div>
      </HeaderWrapper>

      {isFixed && <Box height={headerHeight} />}
    </Fragment>
  );
};

export default Header;
