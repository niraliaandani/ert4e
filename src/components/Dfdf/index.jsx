import React from "react";

import { Img, Text } from "components";

const Dfdf = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-[15px] items-start justify-start md:w-[100%] w-[52%]">
          <Img
            src="images/img_cut_40x40.svg"
            className="h-[40px] w-[40px]"
            alt="cut One"
          />
          <Text
            className="font-oswald text-left text-white_A700 uppercase w-[auto] fdef"
            as="h3"
            variant="h3"
          >
            MOUSTACHE
          </Text>
        </div>
        <div className="flex flex-col gap-[14px] items-start justify-start md:ml-[0] ml-[55px] md:w-[100%] w-[auto]">
          <Text
            className="font-normal font-roboto leading-[30.00px] not-italic text-gray_400 text-left w-[100%]"
            variant="body1"
          >
            Viverra duis ut orci mi id. Eget ultricies facilisi elementum nec
            vel a gravida facilisis in. Tellus felis sapien adipiscing.
          </Text>
          <Text
            className="font-medium font-roboto text-deep_orange_A700 text-left uppercase w-[auto]"
            variant="body1"
          >
            from $30
          </Text>
        </div>
      </div>
    </>
  );
};

Dfdf.defaultProps = {};

export default Dfdf;
