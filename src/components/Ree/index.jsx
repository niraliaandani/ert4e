import React from "react";

import { Img, Text } from "components";

const Ree = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-[15px] items-start justify-start md:w-[100%] w-[45%]">
          <Img
            src="images/img_call_40x40.svg"
            className="h-[40px] w-[40px]"
            alt="call One"
          />
          <Text
            className="font-oswald text-left text-white_A700 uppercase w-[auto]"
            as="h3"
            variant="h3"
          >
            stacking
          </Text>
        </div>
        <div className="flex flex-col gap-[14px] items-start justify-start md:ml-[0] ml-[55px] md:w-[100%] w-[auto]">
          <Text
            className="font-normal font-roboto leading-[30.00px] not-italic text-gray_400 text-left w-[100%]"
            variant="body1"
          >
            Dapibus ac mattis semper hendrerit eu dolor aliquam. Vitae sem orci
            non diam. Venenatis augue arcu mauris id eros.
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

Ree.defaultProps = {};

export default Ree;
