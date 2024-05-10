import IconButton from "@mui/material/IconButton";
import { FlexBox } from "components/flex-box"; // DATA

import { SOCIAL_ICON_LINKS } from "./data";

const SocialLinks = () => {
  return <FlexBox className="flex" mx={-0.625}>
      {SOCIAL_ICON_LINKS.map(({
      Icon,
      url
    }, ind) => <a href={url} target="_blank" rel="noreferrer noopenner" key={ind}>
          <IconButton sx={{
        margin: 0.5,
        fontSize: 12,
        padding: "10px",
        backgroundColor: "rgba(0,0,0,0.2)"
      }}>
            <Icon fontSize="inherit" sx={{
          color: "white"
        }} />
          </IconButton>
        </a>)}
    </FlexBox>;
};

export default SocialLinks;