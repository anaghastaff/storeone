import { LineItem, Region } from "@medusajs/medusa";
import { Paragraph, Span } from "components/Typography";

import LineItemOptions from "medusa/modules/common/components/line-item-options";
import LineItemPrice from "medusa/modules/common/components/line-item-price";
import LineItemUnitPrice from "medusa/modules/common/components/line-item-unit-price";
import Thumbnail from "medusa/modules/products/components/thumbnail";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Stack";
import { Typography } from "@mui/material";

type ItemProps = {
  item: Omit<LineItem, "beforeInsert">;
  region: Region;
};

const Item = ({ item, region }: ItemProps) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      width="100%"
      data-testid="product-row"
      sx={{
        "&:hover": {
          bgcolor: "grey.300",
        },
      }}
    >
      <Stack sx={{ p: 2, pl: 0 }}>
        <Stack direction="row">
          <Thumbnail thumbnail={item.thumbnail} size="square" />
        </Stack>
      </Stack>

      <Stack
        sx={{ flexDirection: { xs: "coulmn", sm: "row", flexGrow: 1 } }}
        justifyContent="space-between"
      >
        <Stack>
          <Typography color="grey.900" data-testid="product-name">
            {item.title}
          </Typography>
          <LineItemOptions
            variant={item.variant}
            data-testid="product-variant"
          />
        </Stack>

        <Stack
          paddingRight={0}
          height="100%"
          justifyContent="center"
          sx={{ alignItems: { xs: "flex-start", sm: "flex-end" } }}
        >
          <Stack direction="row" columnGap={1}>
            <Span color="grey.700" data-testid="product-quantity">
              {item.quantity}
            </Span>
            x
            <Span>
              <LineItemUnitPrice item={item} region={region} style="tight" />
            </Span>
          </Stack>
          <LineItemPrice item={item} region={region} style="tight" />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Item;
