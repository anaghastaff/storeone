import { NavLink } from "components/nav-link";
import { Span } from "components/Typography";
// STYLED COMPONENTS
import { Circle, StyledList } from "./styles"; // RENDER THE NESTED CHILD

export const renderChild = childList => {
  return childList.map(item => <NavLink href={item.href} key={item.title} color="grey.700">
      <StyledList>
        <Circle className="listCircle" />
        <Span py={0.75}>{item.title}</Span>
      </StyledList>
    </NavLink>);
};