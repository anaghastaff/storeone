import Box from "@mui/material/Box";
import format from "date-fns/format"; // MUI ICON COMPONENTS

import AccessTime from "@mui/icons-material/AccessTime";
import CommentOutlined from "@mui/icons-material/CommentOutlined"; // GLOBAL CUSTOM COMPONENTS

import LazyImage from "components/LazyImage";
import { FlexBox } from "components/flex-box";
import { NavLink2 } from "components/nav-link";
import { H3, Paragraph } from "components/Typography"; // CUSTOM DATA MODEL

// ===========================================================
const ICON_STYLE = {
  fontSize: "1rem",
  color: "grey.600"
};

const BlogCard = ({
  blog
}) => {
  return <Box overflow="hidden">
      <LazyImage width={588} height={272} alt="blog-image" src={blog.thumbnail} sx={{
      transition: "transform 0.3s",
      "&:hover": {
        transform: "scale(1.1)",
        cursor: "pointer"
      }
    }} />

      <Box py={3}>
        <H3 lineHeight={1.3} color="secondary.900">
          {blog.title}
        </H3>

        <FlexBox alignItems="center" mt="5px" gap={3}>
          <FlexBox alignItems="center" gap={0.5}>
            <AccessTime sx={ICON_STYLE} />
            <Paragraph>
              {format(new Date(blog.createdAt), "dd MMMM, yyyy")}
            </Paragraph>
          </FlexBox>

          <FlexBox alignItems="center" gap={0.5}>
            <CommentOutlined sx={ICON_STYLE} />
            <Paragraph>{blog.comments} comments</Paragraph>
          </FlexBox>
        </FlexBox>

        <Paragraph mt="1.2rem" mb="0.7rem">
          {blog.description}
        </Paragraph>

        <NavLink2 title="CONTINUE READING" url="#" />
      </Box>
    </Box>;
};

export default BlogCard;