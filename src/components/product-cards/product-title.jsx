import Link from "next/link";
import { H3 } from "components/Typography"; // ==============================================================

// ==============================================================
const ProductTitle = ({
  title,
  slug
}) => <Link href={`/products/${slug}`}>
    <H3 mb={1} ellipsis title={title} fontSize={14} fontWeight={600} className="title" color="text.secondary">
      {title}
    </H3>
  </Link>;

export default ProductTitle;