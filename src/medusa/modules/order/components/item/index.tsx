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
   <Stack direction="row">
      {/* Thumbnail */}
      

      <Box sx={{ p: 2, pl: 0 }}>
        <Thumbnail thumbnail={item.thumbnail} size="square" />
      </Box>

      
        {/* Item Title and Variant */}
        <Stack sx={{flexDirection:{xs:'column', sm:'row', width:'100%', }}} >
        <Stack justifyContent="flex-start" alignItems="flex-start" flexGrow={1} width="100%" sx={{py:2, pr:0 }}>
          <Typography color="grey.900" data-testid="product-name" align="right">
            {item.title}
          </Typography>
          <LineItemOptions
            variant={item.variant}
            data-testid="product-variant"
          />
        </Stack>

        <Stack height="100%" width="fit-content" direction="row" columnGap={1} sx={{ py:2, pr:0 }}  >
          {/* Item quantity & Unit Price */}
          <Stack direction="row" columnGap={1} justifyContent="flex-end" >
            <Span
              color="common.black"
              fontWeight="medium"
              data-testid="product-quantity"
            >
              {item.quantity}
            </Span>
            <Span>x</Span>
          </Stack>
          <Stack >
            <Stack columnGap={1}>
              <LineItemUnitPrice item={item} region={region} style="tight" />
            </Stack>

            {/* Item Total Price */}
            <Box sx={{ columnGap: 1 }}>
              <LineItemPrice item={item} region={region} style="tight" />
            </Box>
          </Stack>
        </Stack>
        </Stack>
      </Stack>
    
  );
};

export default Item;
