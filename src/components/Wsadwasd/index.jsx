import React from "react";

import { Text, Button } from "components";

const Wsadwasd = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="font-medium font-roboto leading-[32.00px] text-gray_400 text-left"
          as="h6"
          variant="h6"
        >
          Et tellus rhoncus urna a. Tempus felis, sociis lorem aliquet nibh
          pellentesque. Vitae nunc, dolor, blandit eget eleifend etiam id.
          <br />
          Amet arcu lobortis sed pulvinar cursus pretium sit pretium.
        </Text>
        <div className="flex flex-row items-center justify-between mt-[29px] md:w-[100%] w-[82%]">
          <Text
            className="font-oswald text-left text-white_A700 uppercase w-[auto]"
            as="h3"
            variant="h3"
          >
            since 2015
          </Text>
          <Text
            className="font-oswald text-left text-white_A700 uppercase w-[auto]"
            as="h3"
            variant="h3"
          >
            1000+ clients
          </Text>
        </div>
        <div className="flex sm:flex-col flex-row gap-[30px] items-center justify-between mt-[7px] w-[100%]">
          <Text
            className="font-normal font-roboto leading-[30.00px] not-italic text-gray_400 text-left w-[auto]"
            variant="body1"
          >
            Dui cursus neque et at ipsum. Cursus urna fringilla nisl enim duis
            cras odio.
          </Text>
          <Text
            className="font-normal font-roboto leading-[30.00px] not-italic text-gray_400 text-left w-[auto]"
            variant="body1"
          >
            Metus varius vitae habitant lorem. Porta scelerisque facilisi.
          </Text>
        </div>
        <Button
          className="cursor-pointer font-medium font-oswald min-w-[110px] mt-[48px] text-[14px] text-center text-white_A700 uppercase w-[auto]"
          size="md"
          variant="OutlineDeeporangeA700"
        >
          learn more
        </Button>
      </div>
    </>
  );
};

Wsadwasd.defaultProps = {};

export default Wsadwasd;
