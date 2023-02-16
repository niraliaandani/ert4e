import React from "react";

import { Img, Text, Button, List } from "components";
import Wsadwasd from "components/Wsadwasd";
import Dfsdf from "components/Dfsdf";
import Dfdf from "components/Dfdf";
import Ghgh from "components/Ghgh";
import Ree from "components/Ree";
import Ghghfg from "components/Ghghfg";
import Errw from "components/Errw";
import Test from "components/Test";
import Eee from "components/Eee";
import Footer from "components/Footer";
import { handleSectionNavigation } from "utils";

const HomePagePage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-oswald items-center justify-start mx-[auto] w-[100%]">
        <header className="bg-bluegray_900 flex flex-col items-center justify-center md:px-[20px] w-[100%]">
          <div className="flex flex-col gap-[20px] items-center justify-center mb-[30px] mx-[auto] w-[61%]">
            <div className="bg-deep_orange_A700 h-[10px] md:ml-[0] ml-[531px] mr-[598px] w-[4%]"></div>
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
                      className="common-pointer cursor-pointer font-medium text-[18px] text-right text-white_A700 uppercase"
                      onClick={() => {
                        handleSectionNavigation("block1");
                      }}
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
        <div className="flex items-center justify-start w-[100%]">
          <div className="h-[890px] md:px-[20px] relative w-[100%]">
            <div className="font-roboto h-[890px] m-[auto] w-[100%]">
              <Img
                src="images/img_blackandwhite.png"
                className="h-[890px] m-[auto] object-cover w-[100%]"
                alt="blackandwhite"
              />
              <div className="absolute bg-gradient  bottom-[0] flex inset-x-[0] items-start justify-start mx-[auto] w-[100%]">
                <div className="flex flex-col justify-start md:w-[100%] w-[94%]">
                  <div className="flex flex-row md:gap-[40px] items-center justify-between ml-[auto] md:w-[100%] w-[94%]">
                    <Img
                      src="images/img_arrowleft.svg"
                      className="h-[20px] w-[auto]"
                      alt="arrowleft"
                    />
                    <Img
                      src="images/img_arrowright.svg"
                      className="h-[20px] w-[auto]"
                      alt="arrowright"
                    />
                  </div>
                  <div className="flex flex-col gap-[18px] items-start justify-start md:ml-[0] ml-[375px] mt-[35px] md:w-[100%] w-[16%]">
                    <Text
                      className="font-medium leading-[32.00px] text-gray_400 text-left w-[100%]"
                      as="h6"
                      variant="h6"
                    >
                      3891 Ranchview Dr. Richardson, California 62639
                    </Text>
                    <div className="flex flex-row font-oswald gap-[10px] items-start justify-start md:ml-[0] ml-[4px] md:w-[100%] w-[80%]">
                      <Img
                        src="images/img_call.svg"
                        className="h-[40px] w-[40px]"
                        alt="call"
                      />
                      <Text
                        className="text-left text-white_A700 uppercase w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        +1 234 567 890
                      </Text>
                    </div>
                  </div>
                  <div className="bg-deep_orange_A700 h-[10px] mr-[1500px] mt-[270px] w-[17%]"></div>
                </div>
              </div>
            </div>
            <Text
              className="absolute font-oswald leading-[85.00px] left-[20%] text-left text-white_A700 top-[32%] uppercase sm:w-[100%] w-[30%]"
              as="h1"
              variant="h1"
            >
              we will keep you an impeccable look
            </Text>
          </div>
        </div>
        <div className="bg-gray_901 flex flex-col gap-[30px] items-center justify-start p-[110px] sm:px-[20px] md:px-[40px] w-[100%]">
          <div className="flex items-center justify-start md:w-[100%] w-[84%]">
            <div className="flex md:flex-col flex-row gap-[30px] items-start justify-between w-[100%]">
              <div className="md:h-[149px] h-[209px] relative md:w-[100%] w-[58%]">
                <Text
                  className="absolute bottom-[0] left-[0] text-bluegray_900 text-left uppercase w-[auto]"
                  variant="body3"
                >
                  Barbercrop
                </Text>
                <Text
                  className="absolute leading-[52.00px] right-[0] text-left text-white_A700 top-[0] uppercase"
                  as="h2"
                  variant="h2"
                >
                  professional barbershop
                  <br />
                  for men only
                </Text>
              </div>
              <Wsadwasd className="flex md:flex-1 flex-col items-start justify-start md:mt-[0] mt-[4px] md:w-[100%] w-[auto]" />
            </div>
          </div>
          <div className="flex items-center justify-start max-w-[1170px] mb-[6px] mx-[auto] pt-[68px] w-[100%]">
            <div
              className="flex flex-col items-start justify-start w-[100%]"
              id="block1"
            >
              <Dfsdf className="font-oswald h-[80px] relative sm:w-[100%] w-[47%]" />
              <Text
                className="font-medium font-roboto leading-[32.00px] text-gray_400 text-left sm:w-[100%] w-[49%]"
                as="h6"
                variant="h6"
              >
                Risus odio lobortis ullamcorper felis vitae bibendum mi.
                Penatibus fusce consequat donec vitae porttitor elementum.
              </Text>
              <div className="font-oswald md:gap-[20px] gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] mt-[49px] w-[100%]">
                <div className="flex flex-1 items-center justify-start w-[100%]">
                  <div className="flex flex-col gap-[8px] justify-start w-[100%]">
                    <div className="flex flex-row gap-[15px] items-start justify-start md:w-[100%] w-[42%]">
                      <Img
                        src="images/img_cut.svg"
                        className="h-[40px] w-[40px]"
                        alt="cut"
                      />
                      <Text
                        className="text-left text-white_A700 uppercase w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        HAIRCUT
                      </Text>
                    </div>
                    <div className="flex flex-col font-roboto gap-[14px] items-start justify-start md:ml-[0] ml-[55px] md:w-[100%] w-[auto]">
                      <Text
                        className="font-normal leading-[30.00px] not-italic text-gray_400 text-left w-[100%]"
                        variant="body1"
                      >
                        A dui aliquam ultrices eros lorem nibh vivamus. Quis
                        aliquam duis pharetra faucibus ultrices volutpat
                        quisque.
                      </Text>
                      <Text
                        className="font-medium text-deep_orange_A700 text-left uppercase w-[auto]"
                        variant="body1"
                      >
                        from $30
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 items-center justify-start w-[100%]">
                  <Dfdf className="flex flex-col justify-start w-[100%]" />
                </div>
                <div className="flex flex-1 items-center justify-start w-[100%]">
                  <Ghgh className="flex flex-col justify-start w-[100%]" />
                </div>
                <div className="flex flex-1 items-center justify-start w-[100%]">
                  <Ree className="flex flex-col justify-start w-[100%]" />
                </div>
                <div className="flex flex-1 items-center justify-start w-[100%]">
                  <div className="flex flex-col gap-[8px] justify-start w-[100%]">
                    <div className="flex flex-row gap-[15px] items-start justify-start md:w-[100%] w-[50%]">
                      <Img
                        src="images/img_iconbreadtrim.svg"
                        className="h-[40px] w-[40px]"
                        alt="iconbreadtrim"
                      />
                      <Text
                        className="text-left text-white_A700 uppercase w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        BREADTRIM
                      </Text>
                    </div>
                    <div className="flex flex-col font-roboto gap-[14px] items-start justify-start md:ml-[0] ml-[55px] md:w-[100%] w-[auto]">
                      <Text
                        className="font-normal leading-[30.00px] not-italic text-gray_400 text-left w-[100%]"
                        variant="body1"
                      >
                        Interdum tincidunt condimentum vestibulum feugiat arcu,
                        in. Maecenas sit sem erat tellus pellentesque aliquet.
                      </Text>
                      <Text
                        className="font-medium text-deep_orange_A700 text-left uppercase w-[auto]"
                        variant="body1"
                      >
                        from $30
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 items-center justify-start w-[100%]">
                  <Ghghfg className="flex flex-col justify-start w-[100%]" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[546px] md:px-[20px] relative w-[100%]">
          <Img
            src="images/img_img.png"
            className="h-[546px] m-[auto] object-cover w-[100%]"
            alt="img"
          />
          <Errw className="absolute flex flex-col h-[max-content] inset-[0] items-center justify-center m-[auto] sm:w-[100%] w-[auto]" />
        </div>
        <div className="bg-gray_901 flex md:flex-col flex-row gap-[30px] items-end justify-start p-[107px] sm:px-[20px] md:px-[40px] w-[100%]">
          <div className="md:h-[479px] h-[577px] mb-[8px] md:ml-[0] ml-[12px] relative md:w-[100%] w-[37%]">
            <Text
              className="absolute left-[0] text-bluegray_900 text-left top-[6%] uppercase w-[auto]"
              variant="body3"
            >
              recent posts
            </Text>
            <Text
              className="absolute right-[33%] text-left text-white_A700 top-[0] uppercase w-[auto]"
              as="h2"
              variant="h2"
            >
              our Blog
            </Text>
            <Test className="absolute bottom-[0] flex flex-col items-start justify-start right-[0] sm:w-[100%] w-[auto]" />
          </div>
          <List
            className="md:flex-1 sm:flex-col flex-row gap-[30px] grid md:grid-cols-1 grid-cols-2 mb-[8px] md:mt-[0] mt-[106px] md:w-[100%] w-[46%]"
            orientation="horizontal"
          >
            <Eee className="flex flex-col items-start justify-start w-[100%]" />
            <div className="flex flex-col items-start justify-start w-[100%]">
              <div className="flex items-center justify-start w-[100%]">
                <Img
                  src="images/img_thebarberdres.png"
                  className="h-[330px] md:h-[auto] object-cover w-[100%]"
                  alt="thebarberdres"
                />
              </div>
              <Text
                className="font-oswald leading-[36.00px] mt-[34px] text-left text-white_A700 uppercase w-[100%]"
                as="h4"
                variant="h4"
              >
                Features of beard and mustache care
              </Text>
              <Text
                className="capitalize font-medium font-roboto mt-[16px] text-deep_orange_A700 text-left w-[auto]"
                variant="body1"
              >
                12 July, 2021
              </Text>
            </div>
          </List>
        </div>
        <Footer className="bg-gray_901 flex items-center justify-center md:px-[20px] w-[100%]" />
      </div>
    </>
  );
};

export default HomePagePage;
