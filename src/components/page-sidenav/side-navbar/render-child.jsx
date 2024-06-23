import { Span } from "components/Typography";
import { Circle, StyledList } from "./styles";
import Link from '@mui/material/Link'
export const RenderChild = ({childList, handleSelect}) => {
  return childList.map((item) => (    
    <StyledList
      key={item.title}
      onClick={() => handleSelect(item.title)}
      sx={{
        color: "grey.700",
        cursor: "pointer",
      }}
    >
      
      <Circle className="listCircle" />
      <Link color="inherit" underline="hover" href={item.href}>
      <Span py={0.75} flex="1 1 0">
        {item.title}
      </Span>
      </Link>
    </StyledList>
    
  ));
};
