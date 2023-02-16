import React from "react";

import { Text, Button } from "components";

const Errw = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex sm:flex-col flex-row gap-[30px] items-center justify-between w-[100%]">
          <Text
            className="font-oswald leading-[52.00px] text-left text-white_A700 uppercase"
            as="h2"
            variant="h2"
          >
            team of professionals
            <br />
            is waiting for you
          </Text>
          <Text
            className="font-oswald leading-[52.00px] text-left text-white_A700 uppercase"
            as="h2"
            variant="h2"
          >
            Special Opening
            <br />
            Hours
          </Text>
        </div>
        <div className="flex md:flex-col flex-row gap-[30px] items-start justify-between md:w-[100%] w-[98%]">
          <div className="flex flex-col gap-[48px] items-start justify-start md:w-[100%] w-[51%]">
            <Text
              className="font-medium font-roboto leading-[32.00px] text-left text-white_A700 w-[100%]"
              as="h6"
              variant="h6"
            >
              Risus odio lobortis ullamcorper felis vitae bibendum mi. Penatibus
              fusce consequat donec vitae porttitor elementum volutpat gravida.
              Tellus hac tristique nisi, id amet cras tempor, amet.
            </Text>
            <Button
              className="cursor-pointer font-medium font-oswald min-w-[100px] text-[14px] text-center text-white_A700 uppercase w-[auto]"
              size="md"
              variant="FillDeeporangeA700"
            >
              book now
            </Button>
          </div>
          <div className="flex flex-col items-start justify-start md:mt-[0] mt-[7px] md:w-[100%] w-[48%]">
            <div className="flex sm:flex-col flex-row sm:gap-[40px] items-center justify-between w-[100%]">
              <Text
                className="font-normal font-roboto not-italic text-left text-white_A700 w-[auto]"
                as="h6"
                variant="h6"
              >
                <span className="text-white_A700 text-[18px] font-oswald uppercase font-medium">
                  Monday:
                </span>
                <span className="text-white_A700 text-[18px]"> </span>
                <span className="text-white_A700 text-[18px]"> </span>
                <span className="text-white_A700 text-[18px] lowercase">
                  9:00 am – 7:30 pm
                </span>
              </Text>
              <Text
                className="font-normal font-roboto not-italic text-left text-white_A700 w-[auto]"
                as="h6"
                variant="h6"
              >
                <span className="text-white_A700 text-[18px] font-oswald uppercase font-medium">
                  Thursday:
                </span>
                <span className="text-white_A700 text-[18px]"> </span>
                <span className="text-white_A700 text-[18px]"> </span>
                <span className="text-white_A700 text-[18px] lowercase">
                  9:00 am – 7:30 pm
                </span>
              </Text>
            </div>
            <div className="flex sm:flex-col flex-row sm:gap-[40px] gap-[75px] items-center justify-start mt-[23px] md:w-[100%] w-[96%]">
              <Text
                className="font-normal font-roboto not-italic text-left text-white_A700 w-[auto]"
                as="h6"
                variant="h6"
              >
                <span className="text-white_A700 text-[18px] font-oswald uppercase font-medium">
                  Tuesday:
                </span>
                <span className="text-white_A700 text-[18px]"> </span>
                <span className="text-white_A700 text-[18px]"> </span>
                <span className="text-white_A700 text-[18px] lowercase">
                  9:00 am – 7:30 pm
                </span>
              </Text>
              <Text
                className="font-normal font-roboto not-italic text-left text-white_A700 w-[auto]"
                as="h6"
                variant="h6"
              >
                <span className="text-white_A700 text-[18px] font-oswald uppercase font-medium">
                  Friday:
                </span>
                <span className="text-white_A700 text-[18px] uppercase"> </span>
                <span className="text-white_A700 text-[18px] lowercase">
                  9:00 am – 7:30 pm
                </span>
              </Text>
            </div>
            <div className="flex sm:flex-col flex-row gap-[52px] items-start justify-start mt-[21px] md:w-[100%] w-[82%]">
              <Text
                className="font-normal font-roboto not-italic text-left text-white_A700 w-[auto]"
                as="h6"
                variant="h6"
              >
                <span className="text-white_A700 text-[18px] font-oswald uppercase font-medium">
                  Wednesday:
                </span>
                <span className="text-white_A700 text-[18px]"> </span>
                <span className="text-white_A700 text-[18px]"> </span>
                <span className="text-white_A700 text-[18px] lowercase">
                  9:00 am – 7:30 pm
                </span>
              </Text>
              <Text
                className="font-normal font-roboto not-italic text-left text-white_A700 w-[auto]"
                as="h6"
                variant="h6"
              >
                <span className="text-white_A700 text-[18px] font-oswald uppercase font-medium">
                  Sat/sun:
                </span>
                <span className="text-white_A700 text-[18px]"> </span>
                <span className="text-white_A700 text-[18px]"> </span>
                <span className="text-white_A700 text-[18px] uppercase">
                  CLOSED
                </span>
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Errw.defaultProps = {};

export default Errw;
