import Image from "next/image"; // CUSTOM COMPONENTS

import { H5 } from "components/Typography";
import { FlexRowCenter } from "components/flex-box";

const LogoWithTitle = () => {
  return <FlexRowCenter flexDirection="column" gap={1.5} mb={4}>
      <Image src={require("../../../public/assets/images/bazaar-black-sm.svg")} alt="bazaar" />
      <H5 fontWeight={700}>Welcome To Bazaar</H5>
    </FlexRowCenter>;
};

export default LogoWithTitle;