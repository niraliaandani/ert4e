import React from "react";

import { Img, Text, Button } from "components";
import Footer from "components/Footer";

const Page = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-oswald items-center justify-start mx-[auto] w-[100%]">
        <header className="bg-bluegray_900 flex md:flex-col flex-row md:gap-[20px] items-center justify-center md:px-[20px] w-[100%]">
          <div className="flex md:flex-1 md:flex-col flex-row gap-[7px] items-center justify-center md:ml-[0] ml-[375px] mr-[1347px] md:mt-[0] mt-[34px] md:w-[100%] w-[11%]">
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
          <ul className="flex sm:flex-1 md:flex-col flex-row gap-[28px] sm:hidden items-start justify-start md:ml-[0] ml-[906px] mr-[545px] sm:w-[100%] w-[auto] common-row-list">
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
            className="cursor-pointer font-medium min-w-[100px] md:ml-[0] ml-[1445px] mr-[375px] text-[14px] text-center text-white_A700 uppercase w-[auto]"
            size="md"
            variant="FillDeeporangeA700"
          >
            book now
          </Button>
        </header>
        <div className="bg-gray_901 flex items-center justify-end p-[80px] sm:px-[20px] md:px-[40px] w-[100%]">
          <div className="flex md:flex-col flex-row md:gap-[40px] gap-[79px] items-start justify-center max-w-[1178px] mt-[106px] mx-[auto] w-[100%]">
            <div className="flex md:flex-1 flex-col items-start justify-start md:w-[100%] w-[40%]">
              <Text
                className="font-oswald text-left text-white_A700 uppercase w-[auto]"
                as="h2"
                variant="h2"
              >
                Page not found
              </Text>
              <Text
                className="font-medium font-roboto leading-[32.00px] mt-[12px] text-gray_400 text-left w-[100%]"
                as="h6"
                variant="h6"
              >
                Nullam feugiat integer mi enim arcu, interdum faucibus sed. A
                tempor orci, nec sit lobortis amet purus.
              </Text>
              <Button
                className="cursor-pointer font-medium font-oswald min-w-[136px] mt-[48px] text-[14px] text-center text-white_A700 uppercase w-[auto]"
                size="md"
                variant="FillDeeporangeA700"
              >
                go to Main page
              </Button>
            </div>
            <Img
              src="images/img_img_440x345.png"
              className="md:flex-1 h-[204px] sm:h-[auto] md:mt-[0] mt-[3px] object-cover md:w-[100%] w-[54%]"
              alt="img"
            />
          </div>
        </div>
        <Footer className="bg-gray_901 flex items-center justify-center md:px-[20px] w-[100%]" />
      </div>
    </>
  );
};

export default Page;
