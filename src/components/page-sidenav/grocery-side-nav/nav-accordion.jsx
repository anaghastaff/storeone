import { Fragment, useState } from "react";
import Collapse from "@mui/material/Collapse"; // GLOBAL CUSTOM COMPONENTS

import { Span } from "components/Typography";
import { FlexBox } from "components/flex-box";
import { AccordionHeader } from "components/accordion"; // LOCAL CUSTOM COMPONENT

import { renderChild } from "./render-child"; // ==============================================================

// ==============================================================
const NavAccordion = ({
  title,
  Icon,
  child
}) => {
  const [open, setOpen] = useState(true);
  return <Fragment>
      <AccordionHeader open={open} onClick={() => setOpen(state => !state)} sx={{
      px: 0,
      cursor: "pointer"
    }}>
        <FlexBox gap={1.5} alignItems="center">
          <Icon fontSize="small" />
          <Span fontWeight={600}>{title}</Span>
        </FlexBox>
      </AccordionHeader>

      {
      /* RENDER NESTED ITEMS */
    }
      {child ? <Collapse in={open}>{renderChild(child)}</Collapse> : null}
    </Fragment>;
};

export default NavAccordion;