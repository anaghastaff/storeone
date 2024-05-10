import Link from "next/link";
// MUI ICON COMPONENTS
import ArrowLeft from "@mui/icons-material/ArrowLeft";
import ArrowRight from "@mui/icons-material/ArrowRight"; // LOCAL CUSTOM COMPONENTS

import { H2 } from "../Typography";
import { FlexBetween, FlexBox } from "../flex-box"; // GLOBAL CUSTOM HOOK

import useSettings from "hooks/useSettings"; // ===================================================

// ===================================================
const SectionHeader = props => {
  const {
    title,
    seeMoreLink,
    icon
  } = props;
  const {
    settings
  } = useSettings();
  return <FlexBetween mb={3}>
      <FlexBox alignItems="center" gap={1}>
        {icon ? <FlexBox alignItems="center">{icon}</FlexBox> : null}

        <H2 fontWeight="bold" lineHeight="1">
          {title}
        </H2>
      </FlexBox>

      {seeMoreLink ? <Link href={seeMoreLink}>
          <FlexBox alignItems="center" color="grey.600">
            View all
            {settings.direction === "ltr" ? <ArrowRight fontSize="small" color="inherit" /> : <ArrowLeft fontSize="small" color="inherit" />}
          </FlexBox>
        </Link> : null}
    </FlexBetween>;
};

export default SectionHeader;