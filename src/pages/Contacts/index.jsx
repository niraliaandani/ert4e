import React from "react";

import { Img, Text, Button } from "components";
import Footer from "components/Footer";

const ContactsPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-oswald items-center justify-start mx-[auto] w-[100%]">
        <header className="bg-bluegray_900 flex flex-col items-center justify-center md:px-[20px] w-[100%]">
          <div className="flex flex-col gap-[20px] items-center justify-center mb-[30px] mx-[auto] w-[61%]">
            <div className="bg-deep_orange_A700 h-[10px] md:ml-[0] ml-[927px] mr-[170px] w-[7%]"></div>
            <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between w-[100%]">
              <div className="flex md:flex-1 flex-row gap-[7px] items-center justify-start md:w-[100%] w-[17%]">
                <Img
                  src="images/img_vector.svg"
                  className="h-[34px] w-[auto]"
                  alt="Vector"
                />
                <Text
                  className="text-right text-white_A700 uppercase w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  barbercrop
                </Text>
              </div>
              <div className="flex md:flex-1 flex-row sm:gap-[40px] items-center justify-between md:w-[100%] w-[55%]">
                <ul className="flex sm:flex-col flex-row gap-[28px] sm:hidden items-start justify-start w-[auto] common-row-list">
                  <li className="sm:w-[100%] sm:my-[10px] w-[auto]">
                    <a
                      className="cursor-pointer font-medium text-[18px] text-right text-white_A700 uppercase"
                      href="javascript:"
                    >
                      home
                    </a>
                  </li>
                  <li className="sm:w-[100%] sm:my-[10px] w-[auto]">
                    <a
                      className="cursor-pointer font-medium text-[18px] text-right text-white_A700 uppercase"
                      href="javascript:"
                    >
                      about
                    </a>
                  </li>
                  <li className="sm:w-[100%] sm:my-[10px] w-[auto]">
                    <a
                      className="cursor-pointer font-medium text-[18px] text-right text-white_A700 uppercase"
                      href="javascript:"
                    >
                      services
                    </a>
                  </li>
                  <li className="sm:w-[100%] sm:my-[10px] w-[auto]">
                    <a
                      className="cursor-pointer font-medium text-[18px] text-right text-white_A700 uppercase"
                      href="javascript:"
                    >
                      gallery
                    </a>
                  </li>
                  <li className="sm:w-[100%] sm:my-[10px] w-[auto]">
                    <a
                      className="cursor-pointer font-medium text-[18px] text-right text-white_A700 uppercase"
                      href="javascript:"
                    >
                      Blog
                    </a>
                  </li>
                  <li className="sm:w-[100%] sm:my-[10px] w-[auto]">
                    <a
                      className="cursor-pointer font-medium text-[18px] text-right text-white_A700 uppercase"
                      href="javascript:"
                    >
                      contacts
                    </a>
                  </li>
                </ul>
                <Button
                  className="cursor-pointer font-medium min-w-[100px] text-[14px] text-center text-white_A700 uppercase w-[auto]"
                  size="md"
                  variant="FillDeeporangeA700"
                >
                  book now
                </Button>
              </div>
            </div>
          </div>
        </header>
        <div className="bg-gray_901 flex items-center justify-start p-[99px] sm:px-[20px] md:px-[40px] w-[100%]">
          <div className="flex flex-col md:gap-[40px] gap-[79px] items-start justify-start max-w-[1170px] mb-[20px] mx-[auto] w-[100%]">
            <div className="h-[81px] relative sm:w-[100%] w-[44%]">
              <Text
                className="absolute h-[100%] inset-y-[0] my-[auto] right-[0] text-bluegray_900 text-left uppercase w-[auto]"
                variant="body3"
              >
                CONTACTS
              </Text>
              <Text
                className="absolute left-[0] text-left text-white_A700 top-[9%] uppercase w-[auto]"
                as="h2"
                variant="h2"
              >
                LET’S TALK OR BOOK NOW
              </Text>
            </div>
            <div className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between w-[100%]">
              <div className="flex md:flex-1 items-center justify-start md:w-[100%] w-[23%]">
                <div className="flex flex-col items-start justify-start w-[100%]">
                  <Text
                    className="font-oswald text-left text-white_A700 uppercase w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    EMAIL
                  </Text>
                  <Text
                    className="font-medium font-roboto lowercase mt-[13px] text-gray_400 text-left w-[auto]"
                    variant="body1"
                  >
                    barbercrop@example.com
                  </Text>
                  <Text
                    className="font-oswald mt-[31px] text-left text-white_A700 uppercase w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    address
                  </Text>
                  <Text
                    className="font-medium font-roboto leading-[30.00px] lowercase mt-[7px] text-gray_400 text-left w-[100%]"
                    variant="body1"
                  >
                    3891 Ranchview Dr. Richardson, California 62639
                  </Text>
                  <Text
                    className="font-oswald mt-[26px] text-left text-white_A700 uppercase w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    phone
                  </Text>
                  <div className="flex flex-row font-roboto gap-[20px] items-center justify-start mt-[12px] md:w-[100%] w-[91%]">
                    <Text
                      className="font-medium lowercase text-gray_400 text-left w-[auto]"
                      variant="body1"
                    >
                      +1 234 567 890
                    </Text>
                    <Text
                      className="font-medium lowercase text-gray_400 text-left w-[auto]"
                      variant="body1"
                    >
                      +1 234 567 890
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-1 items-center justify-start md:mt-[0] mt-[4px] md:w-[100%] w-[66%]">
                <div className="flex flex-col items-start justify-start w-[100%]">
                  <div className="flex flex-row sm:gap-[40px] items-center justify-between md:w-[100%] w-[71%]">
                    <Text
                      className="font-medium text-left text-white_A700 uppercase w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      NAME AND SURENAME *
                    </Text>
                    <Text
                      className="font-medium text-left text-white_A700 uppercase w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      CHOOSE A SERVICE *
                    </Text>
                  </div>
                  <div className="flex md:flex-col flex-row font-roboto gap-[31px] items-center justify-between mt-[17px] w-[100%]">
                    <div
                      className="bg-cover bg-no-repeat flex md:flex-1 h-[50px] items-start justify-start p-[16px] md:w-[100%] w-[auto]"
                      style={{
                        backgroundImage: "url('images/img_writecomment.svg')",
                      }}
                    >
                      <Text
                        className="font-medium lowercase text-left text-white_A700 w-[auto]"
                        variant="body2"
                      >
                        YOUR name here
                      </Text>
                    </div>
                    <div
                      className="bg-cover bg-no-repeat flex md:flex-1 h-[50px] items-start justify-start p-[16px] md:w-[100%] w-[auto]"
                      style={{
                        backgroundImage: "url('images/img_writecomment.svg')",
                      }}
                    >
                      <Text
                        className="font-medium text-left text-white_A700 w-[auto]"
                        variant="body2"
                      >
                        Haircut
                      </Text>
                    </div>
                  </div>
                  <div className="flex sm:flex-col flex-row font-oswald sm:gap-[40px] items-center justify-between mt-[49px] md:w-[100%] w-[81%]">
                    <Text
                      className="font-medium text-left text-white_A700 uppercase w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      YOUR PHONE NUMBER *
                    </Text>
                    <Text
                      className="font-medium text-left text-white_A700 uppercase w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      CHOOSE AN APPOINTMENT DATE
                    </Text>
                  </div>
                  <div className="flex md:flex-col flex-row font-roboto gap-[30px] items-center justify-between mt-[17px] w-[100%]">
                    <div
                      className="bg-cover bg-no-repeat flex md:flex-1 h-[50px] items-start justify-end p-[15px] md:w-[100%] w-[auto]"
                      style={{
                        backgroundImage: "url('images/img_writecomment.svg')",
                      }}
                    >
                      <Text
                        className="font-medium lowercase md:ml-[0] ml-[2px] mt-[2px] text-left text-white_A700 w-[auto]"
                        variant="body2"
                      >
                        YOUR phone here
                      </Text>
                    </div>
                    <div
                      className="bg-cover bg-no-repeat flex md:flex-1 h-[50px] items-start justify-end p-[15px] md:w-[100%] w-[auto]"
                      style={{
                        backgroundImage: "url('images/img_writecomment.svg')",
                      }}
                    >
                      <Text
                        className="font-medium md:ml-[0] ml-[2px] mt-[2px] text-left text-white_A700 w-[auto]"
                        variant="body2"
                      >
                        dd/mm/yyyy
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="font-medium mt-[49px] text-left text-white_A700 uppercase w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    MESSAGE
                  </Text>
                  <div
                    className="bg-cover bg-no-repeat flex font-roboto h-[180px] items-start justify-start mt-[17px] p-[17px] w-[100%]"
                    style={{
                      backgroundImage: "url('images/img_writecomment.svg')",
                    }}
                  >
                    <Text
                      className="font-medium lowercase mb-[127px] text-left text-white_A700 w-[auto]"
                      variant="body2"
                    >
                      YOUR message here
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer font-medium min-w-[100px] mt-[55px] text-[14px] text-center text-white_A700 uppercase w-[auto]"
                    size="md"
                    variant="FillDeeporangeA700"
                  >
                    book now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Img
          src="images/img_map.png"
          className="h-[700px] sm:h-[auto] object-cover w-[100%]"
          alt="map"
        />
        <Footer className="bg-gray_901 flex items-center justify-center md:px-[20px] w-[100%]" />
      </div>
    </>
  );
};

export default ContactsPage;
