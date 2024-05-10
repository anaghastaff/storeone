import Link from "next/link";
import Box from "@mui/material/Box";
import styled from "@mui/material/styles/styled"; // GLOBAL CUSTOM COMPONENTS

import LazyImage from "components/LazyImage";
import { H3, Paragraph, Small } from "components/Typography"; // STYLED COMPONENT

const Wrapper = styled(Box)(({
  theme
}) => ({
  gap: 10,
  display: "flex",
  borderRadius: 2,
  alignItems: "center",
  boxShadow: theme.shadows[4],
  transition: "all 250ms ease-in-out",
  "& .content": {
    paddingLeft: "2rem"
  },
  "&:hover": {
    boxShadow: theme.shadows[2]
  },
  [theme.breakpoints.down("sm")]: {
    "& .content": {
      padding: "1.5rem"
    }
  }
})); // =====================================================

// =====================================================
const Card3 = ({
  body,
  title,
  color,
  imgUrl,
  bgColor = "white"
}) => {
  return <Link href="/sales-1">
      <Wrapper bgcolor={bgColor} color={color} pr={0} height="100%">
        <Box width="60%" className="content">
          <H3 lineHeight={1.3}>{title}</H3>
          <Paragraph color={color ? color : "grey.600"} mt={1} mb={2}>
            {body}
          </Paragraph>

          <Small fontWeight="700" borderBottom={2}>
            SHOP NOW
          </Small>
        </Box>

        <Box width="40%" display="flex">
          <LazyImage width={260} src={imgUrl} height={249} alt="apple-watch-1" />
        </Box>
      </Wrapper>
    </Link>;
};

export default Card3;