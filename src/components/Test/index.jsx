import React from "react";

import { Img, Text } from "components";

const Test = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex items-center justify-start w-[100%]">
          <Img
            src="images/img_anonymousbarbe.png"
            className="h-[330px] sm:h-[auto] object-cover w-[100%]"
            alt="anonymousbarbe"
          />
        </div>
        <Text
          className="font-oswald leading-[36.00px] mt-[34px] text-left text-white_A700 uppercase"
          as="h4"
          variant="h4"
        >
          5 advantages why you should
          <br />
          visit barbershop
        </Text>
        <Text
          className="capitalize font-medium font-roboto mt-[16px] text-deep_orange_A700 text-left w-[auto]"
          variant="body1"
        >
          04 August, 2021
        </Text>
      </div>
    </>
  );
};

Test.defaultProps = {};

export default Test;
