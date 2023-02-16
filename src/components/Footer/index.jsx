import React from "react";

import { Img, Text } from "components";

const Footer = (props) => {
  function handleNavigate() {
    window.location.href = "https://www.facebook.com/login/";
  }
  function handleNavigate1() {
    window.location.href = "https://twitter.com/login/";
  }

  return (
    <>
      <footer className={props.className}>
        <div className="flex items-center justify-center mb-[116px] mt-[110px] mx-[auto] w-[61%]">
          <div className="flex flex-col gap-[11px] items-center justify-center w-[100%]">
            <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start mr-[147px] md:w-[100%] w-[88%]">
              <div className="flex flex-row gap-[7px] items-center justify-start md:mt-[0] my-[5px] md:w-[100%] w-[20%]">
                <Img
                  src="images/img_vector.svg"
                  className="h-[34px] w-[auto]"
                  alt="Vector One"
                />
                <Text
                  className="font-oswald text-right text-white_A700 uppercase w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  barbercrop
                </Text>
              </div>
              <Img
                src="images/img_call.svg"
                className="h-[40px] md:ml-[0] ml-[102px] md:mt-[0] mt-[9px] w-[40px]"
                alt="call One"
              />
              <Text
                className="font-oswald md:ml-[0] ml-[10px] md:mt-[0] mt-[10px] text-left text-white_A700 uppercase w-[auto]"
                as="h3"
                variant="h3"
              >
                +1 234 567 890
              </Text>
              <Text
                className="font-oswald mb-[10px] md:ml-[0] ml-[180px] text-left text-white_A700 uppercase w-[auto]"
                as="h3"
                variant="h3"
              >
                SUBSCRIBE OUR NEWSLETTER
              </Text>
            </div>
            <div className="flex flex-col gap-[16px] items-center justify-start md:ml-[0] ml-[300px] md:w-[100%] w-[75%]">
              <div className="flex sm:flex-col flex-row sm:gap-[40px] items-end justify-between w-[100%]">
                <Text
                  className="font-normal font-roboto leading-[30.00px] sm:mt-[0] mt-[6px] not-italic text-gray_400 text-left w-[auto]"
                  variant="body1"
                >
                  3891 Ranchview Dr. Richardson, California 62639
                </Text>
                <Text
                  className="font-medium font-roboto leading-[32.00px] mb-[2px] text-gray_400 text-left w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Luctus interdum volutpat urna neque varius congue.{" "}
                </Text>
              </div>
              <div className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between w-[100%]">
                <ul className="flex md:flex-1 flex-col items-start justify-start md:w-[100%] w-[30%] common-column-list">
                  <li className="w-[auto]">
                    <a
                      className="cursor-pointer font-normal font-roboto not-italic text-[16px] text-gray_400 text-left underline"
                      href="javascript:"
                    >
                      barbercrop@example.com
                    </a>
                  </li>
                  <li className="mt-[37px] w-[35%]">
                    <div className="cursor-pointer flex flex-row gap-[15px] items-center justify-start">
                      <Img
                        src="images/img_facebook.svg"
                        className="common-pointer h-[22px] w-[auto]"
                        onClick={handleNavigate}
                        alt="facebook"
                      />
                      <Img
                        src="images/img_twitter_22x26.svg"
                        className="common-pointer h-[22px] w-[auto]"
                        onClick={handleNavigate1}
                        alt="twitter One"
                      />
                      <Img
                        src="images/img_camera.svg"
                        className="h-[22px] w-[22px]"
                        alt="camera"
                      />
                    </div>
                  </li>
                  <li className="mt-[36px] w-[auto]">
                    <a
                      className="cursor-pointer font-medium font-roboto text-[14px] text-gray_400 text-left uppercase"
                      href="javascript:"
                    >
                      barbercrop ©. All rights reserved.
                    </a>
                  </li>
                </ul>
                <div
                  className="bg-cover bg-no-repeat flex md:flex-1 h-[50px] items-start justify-start md:mt-[0] mt-[15px] p-[16px] md:w-[100%] w-[auto]"
                  style={{ backgroundImage: "url('images/img_group14.svg')" }}
                >
                  <Text
                    className="font-normal font-roboto lowercase not-italic text-left text-white_A700 w-[auto]"
                    variant="body2"
                  >
                    <span className="text-white_A700 text-[14px] uppercase">
                      y
                    </span>
                    <span className="text-white_A700 text-[14px]">
                      our email address
                    </span>
                  </Text>
                </div>
                <div className="bg-deep_orange_A700 flex items-start justify-start mb-[66px] md:mt-[0] mt-[15px] px-[20px] py-[14px] w-[auto]">
                  <Text
                    className="font-medium font-oswald text-left text-white_A700 uppercase w-[auto]"
                    variant="body2"
                  >
                    subscribe
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
