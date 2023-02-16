import React from "react";

import { Img, Text, Button } from "components";
import Footer from "components/Footer";

const ServicesPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-oswald items-center justify-start mx-[auto] w-[100%]">
        <header className="bg-bluegray_900 flex flex-col items-center justify-center md:px-[20px] w-[100%]">
          <div className="flex flex-col gap-[20px] items-center justify-center mb-[30px] mx-[auto] w-[61%]">
            <div className="bg-deep_orange_A700 h-[10px] md:ml-[0] ml-[676px] mr-[426px] w-[6%]"></div>
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
        <div className="bg-gray_901 flex items-start justify-start p-[30px] sm:px-[20px] w-[100%]">
          <div className="flex flex-col gap-[110px] md:gap-[40px] items-end justify-start mb-[89px] md:ml-[0] ml-[249px] md:px-[20px] md:w-[100%] w-[69%]">
            <div className="flex md:flex-col flex-row gap-[30px] items-start justify-between w-[100%]">
              <div className="font-oswald md:h-[114px] h-[183px] relative md:w-[100%] w-[53%]">
                <Text
                  className="absolute left-[0] text-bluegray_900 text-left top-[0] uppercase w-[auto]"
                  variant="body3"
                >
                  services
                </Text>
                <Text
                  className="absolute bottom-[0] leading-[52.00px] right-[0] text-left text-white_A700 uppercase sm:w-[100%] w-[86%]"
                  as="h2"
                  variant="h2"
                >
                  WE PROVIDE HIGHEST QUALITY SERVICE
                </Text>
              </div>
              <Text
                className="font-medium font-roboto leading-[32.00px] md:mt-[0] mt-[79px] text-gray_400 text-left w-[auto]"
                as="h6"
                variant="h6"
              >
                Eget ut sodales arcu aliquet diam nec laoreet fames. Urna, eu
                pharetra consequat, euismod iaculis tristique maecenas. Et enim
                iaculis suscipit nunc ultricies nunc fames. Phasellus massa,
                sed.{" "}
              </Text>
            </div>
            <div className="flex items-center justify-start md:w-[100%] w-[93%]">
              <div className="md:gap-[20px] gap-[30px] grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-[100%]">
                <div className="flex flex-1 items-center justify-start w-[100%]">
                  <div className="flex flex-col gap-[8px] justify-start w-[100%]">
                    <div className="flex flex-row gap-[15px] items-start justify-start md:w-[100%] w-[27%]">
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
                    <div className="flex flex-col items-start justify-start md:ml-[0] ml-[55px] md:w-[100%] w-[91%]">
                      <Text
                        className="font-normal font-roboto leading-[30.00px] not-italic text-gray_400 text-left w-[100%]"
                        variant="body1"
                      >
                        <span className="text-gray_400 text-[16px]">
                          A dui aliquam ultrices eros lorem nibh vivamus. Quis
                          aliquam duis pharetra faucibus ultrices volutpat
                          quisque
                        </span>
                        <span className="text-gray_400 text-[16px]">
                          . Convallis nec lectus mi nec eget odio ac tempor.
                          Nunc egestas sed.
                        </span>
                      </Text>
                      <div className="flex flex-row font-oswald gap-[30px] items-center justify-start mt-[22px] md:w-[100%] w-[56%]">
                        <Text
                          className="font-medium text-left text-white_A700 uppercase w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          <span className="text-white_A700 text-[18px] font-oswald">
                            TOP BARBER —{" "}
                          </span>
                          <span className="text-deep_orange_A700 text-[18px] font-oswald">
                            $50
                          </span>
                        </Text>
                        <Text
                          className="font-medium text-left text-white_A700 uppercase w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          <span className="text-white_A700 text-[18px] font-oswald">
                            BARBER —{" "}
                          </span>
                          <span className="text-deep_orange_A700 text-[18px] font-oswald">
                            $40
                          </span>
                        </Text>
                      </div>
                      <Button
                        className="cursor-pointer font-medium font-oswald min-w-[100px] mt-[47px] text-[14px] text-center text-white_A700 uppercase w-[auto]"
                        size="md"
                        variant="FillDeeporangeA700"
                      >
                        book now
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 items-center justify-start w-[100%]">
                  <div className="flex flex-col gap-[8px] justify-start w-[100%]">
                    <div className="flex flex-row gap-[15px] items-start justify-start md:w-[100%] w-[31%]">
                      <Img
                        src="images/img_cut_40x40.svg"
                        className="h-[40px] w-[40px]"
                        alt="cut One"
                      />
                      <Text
                        className="text-left text-white_A700 uppercase w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        mustache
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start md:ml-[0] ml-[55px] md:w-[100%] w-[91%]">
                      <Text
                        className="font-normal font-roboto leading-[30.00px] not-italic text-gray_400 text-left w-[100%]"
                        variant="body1"
                      >
                        Viverra duis ut orci mi id. Eget ultricies facilisi
                        elementum nec vel a gravida facilisis in. Tellus felis
                        sapien adipiscing. Vel amet ullamcorper tellus sed vel
                        mattis volutpat, id ac.
                      </Text>
                      <div className="flex flex-row font-oswald gap-[30px] items-center justify-start mt-[22px] md:w-[100%] w-[56%]">
                        <Text
                          className="font-medium text-left text-white_A700 uppercase w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          <span className="text-white_A700 text-[18px] font-oswald">
                            TOP BARBER —{" "}
                          </span>
                          <span className="text-deep_orange_A700 text-[18px] font-oswald">
                            $40
                          </span>
                        </Text>
                        <Text
                          className="font-medium text-left text-white_A700 uppercase w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          <span className="text-white_A700 text-[18px] font-oswald">
                            BARBER —{" "}
                          </span>
                          <span className="text-deep_orange_A700 text-[18px] font-oswald">
                            $30
                          </span>
                        </Text>
                      </div>
                      <Button
                        className="cursor-pointer font-medium font-oswald min-w-[100px] mt-[47px] text-[14px] text-center text-white_A700 uppercase w-[auto]"
                        size="md"
                        variant="FillDeeporangeA700"
                      >
                        book now
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 items-center justify-start w-[100%]">
                  <div className="flex flex-col gap-[8px] justify-start w-[100%]">
                    <div className="flex flex-row gap-[15px] items-start justify-start md:w-[100%] w-[23%]">
                      <Img
                        src="images/img_twitter.svg"
                        className="h-[40px] w-[40px]"
                        alt="twitter"
                      />
                      <Text
                        className="text-left text-white_A700 uppercase w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        shave
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start md:ml-[0] ml-[55px] md:w-[100%] w-[91%]">
                      <Text
                        className="font-normal font-roboto leading-[30.00px] not-italic text-gray_400 text-left w-[100%]"
                        variant="body1"
                      >
                        Lorem velit parturient consectetur cursus tincidunt
                        tristique pretium volutpat urna. Vitae scelerisque quam
                        eget. Imperdiet molestie magnis aenean ut orci
                        suspendisse amet, faucibus.
                      </Text>
                      <div className="flex flex-row font-oswald gap-[30px] items-center justify-start mt-[22px] md:w-[100%] w-[55%]">
                        <Text
                          className="font-medium text-left text-white_A700 uppercase w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          <span className="text-white_A700 text-[18px] font-oswald">
                            TOP BARBER —{" "}
                          </span>
                          <span className="text-deep_orange_A700 text-[18px] font-oswald">
                            $15
                          </span>
                        </Text>
                        <Text
                          className="font-medium text-left text-white_A700 uppercase w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          <span className="text-white_A700 text-[18px] font-oswald">
                            BARBER —{" "}
                          </span>
                          <span className="text-deep_orange_A700 text-[18px] font-oswald">
                            $10
                          </span>
                        </Text>
                      </div>
                      <Button
                        className="cursor-pointer font-medium font-oswald min-w-[100px] mt-[47px] text-[14px] text-center text-white_A700 uppercase w-[auto]"
                        size="md"
                        variant="FillDeeporangeA700"
                      >
                        book now
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 items-center justify-start w-[100%]">
                  <div className="flex flex-col gap-[8px] justify-start w-[100%]">
                    <div className="flex flex-row gap-[15px] items-start justify-start md:w-[100%] w-[29%]">
                      <Img
                        src="images/img_call_40x40.svg"
                        className="h-[40px] w-[40px]"
                        alt="call"
                      />
                      <Text
                        className="text-left text-white_A700 uppercase w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        stacking
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start md:ml-[0] ml-[55px] md:w-[100%] w-[91%]">
                      <Text
                        className="font-normal font-roboto leading-[30.00px] not-italic text-gray_400 text-left w-[100%]"
                        variant="body1"
                      >
                        Dapibus ac mattis semper hendrerit eu dolor aliquam.
                        Vitae sem orci non diam. Venenatis augue arcu mauris id
                        eros. Phasellus mauris at habitant tempus tristique
                        hendrerit.
                      </Text>
                      <div className="flex flex-row font-oswald gap-[30px] items-center justify-start mt-[22px] md:w-[100%] w-[55%]">
                        <Text
                          className="font-medium text-left text-white_A700 uppercase w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          <span className="text-white_A700 text-[18px] font-oswald">
                            TOP BARBER —{" "}
                          </span>
                          <span className="text-deep_orange_A700 text-[18px] font-oswald">
                            $20
                          </span>
                        </Text>
                        <Text
                          className="font-medium text-left text-white_A700 uppercase w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          <span className="text-white_A700 text-[18px] font-oswald">
                            BARBER —{" "}
                          </span>
                          <span className="text-deep_orange_A700 text-[18px] font-oswald">
                            $10
                          </span>
                        </Text>
                      </div>
                      <Button
                        className="cursor-pointer font-medium font-oswald min-w-[100px] mt-[47px] text-[14px] text-center text-white_A700 uppercase w-[auto]"
                        size="md"
                        variant="FillDeeporangeA700"
                      >
                        book now
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 items-center justify-start w-[100%]">
                  <div className="flex flex-col gap-[8px] justify-start w-[100%]">
                    <div className="flex flex-row gap-[15px] items-start justify-start md:w-[100%] w-[33%]">
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
                    <div className="flex flex-col items-start justify-start md:ml-[0] ml-[55px] md:w-[100%] w-[91%]">
                      <Text
                        className="font-normal font-roboto leading-[30.00px] not-italic text-gray_400 text-left w-[100%]"
                        variant="body1"
                      >
                        Interdum tincidunt condimentum vestibulum feugiat arcu,
                        in. Maecenas sit sem erat tellus pellentesque aliquet.
                        Tellus morbi bibendum enim non a interdum sollicitudin
                        pellentesque suspendisse.
                      </Text>
                      <div className="flex flex-row font-oswald gap-[30px] items-center justify-start mt-[22px] md:w-[100%] w-[55%]">
                        <Text
                          className="font-medium text-left text-white_A700 uppercase w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          <span className="text-white_A700 text-[18px] font-oswald">
                            TOP BARBER —{" "}
                          </span>
                          <span className="text-deep_orange_A700 text-[18px] font-oswald">
                            $25
                          </span>
                        </Text>
                        <Text
                          className="font-medium text-left text-white_A700 uppercase w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          <span className="text-white_A700 text-[18px] font-oswald">
                            BARBER —{" "}
                          </span>
                          <span className="text-deep_orange_A700 text-[18px] font-oswald">
                            $15
                          </span>
                        </Text>
                      </div>
                      <Button
                        className="cursor-pointer font-medium font-oswald min-w-[100px] mt-[47px] text-[14px] text-center text-white_A700 uppercase w-[auto]"
                        size="md"
                        variant="FillDeeporangeA700"
                      >
                        book now
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 items-center justify-start w-[100%]">
                  <div className="flex flex-col gap-[8px] justify-start w-[100%]">
                    <div className="flex flex-row gap-[15px] items-start justify-start md:w-[100%] w-[35%]">
                      <Img
                        src="images/img_car.svg"
                        className="h-[40px] w-[40px]"
                        alt="car"
                      />
                      <Text
                        className="text-left text-white_A700 uppercase w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        hair dyeing
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start md:ml-[0] ml-[55px] md:w-[100%] w-[91%]">
                      <Text
                        className="font-normal font-roboto leading-[30.00px] not-italic text-gray_400 text-left w-[100%]"
                        variant="body1"
                      >
                        Congue pulvinar morbi pharetra tincidunt vel tincidunt.
                        Amet, morbi neque tellus vivamus venenatis diam
                        nisl.Odio orci accumsan, egestas senectus. Sit neque
                        gravida donec.
                      </Text>
                      <div className="flex flex-row font-oswald gap-[30px] items-center justify-start mt-[22px] md:w-[100%] w-[56%]">
                        <Text
                          className="font-medium text-left text-white_A700 uppercase w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          <span className="text-white_A700 text-[18px] font-oswald">
                            TOP BARBER —{" "}
                          </span>
                          <span className="text-deep_orange_A700 text-[18px] font-oswald">
                            $60
                          </span>
                        </Text>
                        <Text
                          className="font-medium text-left text-white_A700 uppercase w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          <span className="text-white_A700 text-[18px] font-oswald">
                            BARBER —{" "}
                          </span>
                          <span className="text-deep_orange_A700 text-[18px] font-oswald">
                            $40
                          </span>
                        </Text>
                      </div>
                      <Button
                        className="cursor-pointer font-medium font-oswald min-w-[100px] mt-[47px] text-[14px] text-center text-white_A700 uppercase w-[auto]"
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
          </div>
        </div>
        <Footer className="bg-gray_901 flex items-center justify-center md:px-[20px] w-[100%]" />
      </div>
    </>
  );
};

export default ServicesPage;
