import React from "react";

import { Text } from "components";

const Dfsdf = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="absolute font-oswald h-[100%] inset-y-[0] my-[auto] right-[0] text-bluegray_900 text-left uppercase w-[auto]"
          variant="body3"
        >
          services
        </Text>
        <Text
          className="absolute font-oswald h-[max-content] inset-y-[0] left-[0] my-[auto] text-left text-white_A700 uppercase w-[auto]"
          as="h2"
          variant="h2"
        >
          what we provide
        </Text>
      </div>
    </>
  );
};

Dfsdf.defaultProps = {};

export default Dfsdf;
