import { FC } from "react";
import Box from "@component/Box";
import Typography, { H3 } from "@component/Typography";
import { FadeInUp } from "./styles";

const ProductDetail: FC = () => {
  return (
    <FadeInUp>
      <Box>
        <H3 mb="1rem">TestResult:</H3>
        <Typography>รายละเอียดสินค้า</Typography>
      </Box>
    </FadeInUp>
  );
};

export default ProductDetail;