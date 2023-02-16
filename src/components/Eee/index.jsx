import React from "react";

import { Img, Text } from "components";

const Eee = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex items-center justify-start w-[100%]">
          <Img
            src="images/img_handsomebarber.png"
            className="h-[330px] sm:h-[auto] object-cover w-[100%]"
            alt="handsomebarber"
          />
        </div>
        <Text
          className="font-oswald leading-[36.00px] mt-[34px] text-left text-white_A700 uppercase w-[100%]"
          as="h4"
          variant="h4"
        >
          popular COSMETICS FOR HAIR STYLING
        </Text>
        <Text
          className="capitalize font-medium font-roboto mt-[16px] text-deep_orange_A700 text-left w-[auto]"
          variant="body1"
        >
          02 August, 2021
        </Text>
      </div>
    </>
  );
};

Eee.defaultProps = {};

export default Eee;
