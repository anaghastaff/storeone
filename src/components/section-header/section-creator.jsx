import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import SectionHeader from "./section-header"; // ==============================================================

// ==============================================================
const SectionCreator = props => {
  const {
    icon,
    title,
    children,
    seeMoreLink,
    ...others
  } = props;
  return <Box mb={7.5} {...others}>
      <Container sx={{
      pb: "1rem"
    }}>
        {title ? <SectionHeader title={title} seeMoreLink={seeMoreLink} icon={icon} /> : null}

        {children}
      </Container>
    </Box>;
};

export default SectionCreator;