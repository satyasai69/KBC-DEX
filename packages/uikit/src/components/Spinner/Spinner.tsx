import React from "react";
import { Image, Box } from "@pancakeswap/uikit";
import { SpinnerProps } from "./types";

const Spinner: React.FC<React.PropsWithChildren<SpinnerProps>> = ({ size = 128 }) => {
  return (
    <Box width={size} height={size * 1.197} position="relative">
      <Image
        width={size}
        height={size * 1.197}
       src=  "https://i.giphy.com/aYKTYtCYb2ECSKfyal.webp"// "https://assets.pancakeswap.finance/web/pancake-3d-spinner-v2.gif" 
        // alt="pancake-3d-spinner" 
      />
    </Box>
  );
};

export default Spinner;


/**
 * 
 * <Image
        width={size}
        height={size * 1.197}
       // src=""// "https://assets.pancakeswap.finance/web/pancake-3d-spinner-v2.gif" 
        // alt="pancake-3d-spinner"
      />   loading image
 */
