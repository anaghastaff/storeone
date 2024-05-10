import Box from "@mui/material/Box"; // GLOBAL CUSTOM COMPONENT

import { FlexBox } from "../flex-box"; // CUSTOM ICON COMPONENTS

import PlayStore from "icons/PlayStore";
import AppleStore from "icons/AppleStore";
const DATA = [{
  url: "/",
  icon: PlayStore,
  title: "Google Play",
  subtitle: "Get it on"
}, {
  url: "/",
  icon: AppleStore,
  title: "App Store",
  subtitle: "Download on the"
}];

const AppStore = () => {
  return <FlexBox flexWrap="wrap" m={-1}>
      {DATA.map(item => <a href="/" key={item.title} target="_blank" rel="noreferrer noopener">
          <Box m={1} gap={1} p="10px 16px" color="white" display="flex" bgcolor="#161d2b" borderRadius="5px" alignItems="center">
            <item.icon />

            <div>
              <Box fontSize="8px" fontWeight="600" lineHeight="1">
                {item.subtitle}
              </Box>

              <Box fontSize="14px" fontWeight="700">
                {item.title}
              </Box>
            </div>
          </Box>
        </a>)}
    </FlexBox>;
};

export default AppStore;