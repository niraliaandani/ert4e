import React from "react";

import { Img, Text, Button } from "components";
import Footer from "components/Footer";

const GalleryPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-oswald items-center justify-start mx-[auto] pb-[2px] w-[100%]">
        <header className="bg-bluegray_900 flex flex-col items-center justify-center md:px-[20px] w-[100%]">
          <div className="flex flex-col gap-[20px] items-center justify-center mb-[30px] mx-[auto] w-[61%]">
            <div className="bg-deep_orange_A700 h-[10px] md:ml-[0] ml-[772px] mr-[337px] w-[6%]"></div>
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
        <div className="bg-gray_901 flex items-center justify-start p-[107px] sm:px-[20px] md:px-[40px] w-[100%]">
          <div className="flex flex-col items-start justify-start max-w-[1170px] mb-[14px] mx-[auto] w-[100%]">
            <Text
              className="text-left text-white_A700 uppercase w-[auto]"
              as="h2"
              variant="h2"
            >
              Gallery with our Cuts
            </Text>
            <Text
              className="md:ml-[0] ml-[252px] text-bluegray_900 text-left uppercase w-[auto]"
              variant="body3"
            >
              gallery
            </Text>
            <div className="flex sm:flex-col flex-row gap-[15px] items-center justify-start mt-[56px] md:w-[100%] w-[34%]">
              <Button
                className="cursor-pointer font-medium min-w-[40px] text-[14px] text-center text-white_A700 uppercase w-[auto]"
                size="sm"
                variant="FillDeeporangeA700"
              >
                ALL
              </Button>
              <Button
                className="cursor-pointer font-medium min-w-[69px] text-[14px] text-center text-white_A700 uppercase w-[auto]"
                size="sm"
                variant="OutlineDeeporangeA700_1"
              >
                HAIRCUT
              </Button>
              <Button
                className="cursor-pointer font-medium min-w-[146px] text-[14px] text-center text-white_A700 uppercase w-[auto]"
                size="sm"
                variant="OutlineDeeporangeA700_1"
              >
                BEARD AND MUSTACHE
              </Button>
              <Button
                className="cursor-pointer font-medium min-w-[91px] text-[14px] text-center text-white_A700 uppercase w-[auto]"
                size="sm"
                variant="OutlineDeeporangeA700_1"
              >
                HAIR DYEING
              </Button>
            </div>
            <div className="md:gap-[20px] gap-[30px] grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] mt-[55px] w-[100%]">
              <div className="flex flex-1 items-center justify-start w-[100%]">
                <Img
                  src="images/img_barbershoppuzj4mt.png"
                  className="h-[450px] md:h-[auto] object-cover w-[100%]"
                  alt="barbershopPUZJ4MT"
                />
              </div>
              <div className="flex flex-1 items-center justify-start w-[100%]">
                <Img
                  src="images/img_inthebarbershop3ublhzt.png"
                  className="h-[450px] md:h-[auto] object-cover w-[100%]"
                  alt="inthebarbershop3UBLHZT"
                />
              </div>
              <div className="flex flex-1 items-center justify-start w-[100%]">
                <Img
                  src="images/img_barbershavingclientplm8s7y.png"
                  className="h-[450px] md:h-[auto] object-cover w-[100%]"
                  alt="barbershavingclientPLM8S7Y"
                />
              </div>
              <div className="flex flex-1 items-center justify-start w-[100%]">
                <Img
                  src="images/img_newhairstylerbrnd4e.png"
                  className="h-[450px] md:h-[auto] object-cover w-[100%]"
                  alt="newhairstyleRBRND4E"
                />
              </div>
              <div className="flex flex-1 items-center justify-start w-[100%]">
                <Img
                  src="images/img_fashionbarber.png"
                  className="h-[450px] md:h-[auto] object-cover w-[100%]"
                  alt="fashionbarber"
                />
              </div>
              <div className="flex flex-1 items-center justify-start w-[100%]">
                <Img
                  src="images/img_professionalha.png"
                  className="h-[450px] md:h-[auto] object-cover w-[100%]"
                  alt="professionalha"
                />
              </div>
            </div>
            <div className="flex flex-row items-center justify-center md:ml-[0] ml-[402px] mt-[70px] md:w-[100%] w-[32%]">
              <Button
                className="cursor-pointer font-medium min-w-[70px] text-[14px] text-center text-white_A700 uppercase w-[auto]"
                size="md"
                variant="FillDeeporangeA700"
              >
                back
              </Button>
              <Button
                className="cursor-pointer font-medium h-[50px] ml-[30px] text-[14px] text-center text-white_A700 uppercase w-[50px]"
                size="md"
                variant="OutlineDeeporangeA700_1"
              >
                1
              </Button>
              <Button
                className="cursor-pointer font-medium h-[50px] ml-[10px] text-[14px] text-center text-white_A700 uppercase w-[50px]"
                size="md"
                variant="FillDeeporangeA700"
              >
                2
              </Button>
              <Button
                className="cursor-pointer font-medium h-[50px] ml-[10px] text-[14px] text-center text-white_A700 uppercase w-[50px]"
                size="md"
                variant="OutlineDeeporangeA700_1"
              >
                3
              </Button>
              <Button
                className="cursor-pointer font-medium min-w-[67px] ml-[30px] text-[14px] text-center text-white_A700 uppercase w-[auto]"
                size="md"
                variant="FillDeeporangeA700"
              >
                next
              </Button>
            </div>
          </div>
        </div>
        <Footer className="bg-gray_901 flex items-center justify-center md:px-[20px] w-[100%]" />
      </div>
    </>
  );
};

export default GalleryPage;
