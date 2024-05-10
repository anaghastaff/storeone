import { Fragment } from "react";
import LinkItem from "./link-item";
export const renderChild = (childList, type = "parent") => {
  if (type === "parent") {
    return childList.map(item => <Fragment key={item.title}>
        <LinkItem href={item.href} title={item.title} ml={4} />
        {item.child && renderChild(item.child, "child")}
      </Fragment>);
  }

  return childList.map((item, ind) => <LinkItem key={ind} href={item.href} title={item.title} ml={6} />);
};