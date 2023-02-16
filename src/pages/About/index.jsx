import React from "react";

import { Img, Text, Button, List } from "components";
import Footer from "components/Footer";

const AboutPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-oswald items-center justify-start mx-[auto] w-[100%]">
        <header className="bg-bluegray_900 flex flex-col items-center justify-center md:px-[20px] w-[100%]">
          <div className="flex flex-col gap-[20px] items-center justify-center mb-[30px] mx-[auto] w-[61%]">
            <div className="bg-deep_orange_A700 h-[10px] md:ml-[0] ml-[600px] mr-[522px] w-[5%]"></div>
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
        <div className="flex flex-col md:px-[20px] relative w-[100%]">
          <div className="bg-gray_901 flex flex-col gap-[108px] md:gap-[40px] items-center justify-start mx-[auto] p-[19px] w-[100%]">
            <div className="flex items-center justify-start md:w-[100%] w-[63%]">
              <div className="flex flex-col items-center justify-start w-[100%]">
                <div className="flex md:flex-col flex-row gap-[30px] items-start justify-between w-[100%]">
                  <div className="md:h-[155px] h-[194px] mb-[6px] relative md:w-[100%] w-[49%]">
                    <Text
                      className="absolute inset-x-[0] mx-[auto] text-bluegray_900 text-left top-[0] uppercase w-[max-content]"
                      variant="body3"
                    >
                      about us
                    </Text>
                    <Text
                      className="absolute bottom-[0] inset-x-[0] leading-[52.00px] mx-[auto] text-left text-white_A700 uppercase"
                      as="h2"
                      variant="h2"
                    >
                      professional barbershop
                      <br />
                      for men only
                    </Text>
                  </div>
                  <div className="flex md:flex-1 flex-col gap-[7px] items-start justify-start md:mt-[0] mt-[91px] md:w-[100%] w-[49%]">
                    <div className="flex flex-row items-center justify-between md:w-[100%] w-[82%]">
                      <Text
                        className="text-left text-white_A700 uppercase w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        since 2015
                      </Text>
                      <Text
                        className="text-left text-white_A700 uppercase w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        1000+ clients
                      </Text>
                    </div>
                    <div className="flex sm:flex-col flex-row font-roboto gap-[30px] items-center justify-between w-[100%]">
                      <Text
                        className="font-normal leading-[30.00px] not-italic text-gray_400 text-left w-[auto]"
                        variant="body1"
                      >
                        Dui cursus neque et at ipsum. Cursus urna fringilla nisl
                        enim duis cras odio.
                      </Text>
                      <Text
                        className="font-normal leading-[30.00px] not-italic text-gray_400 text-left w-[auto]"
                        variant="body1"
                      >
                        Metus varius vitae habitant lorem. Porta scelerisque
                        facilisi.
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-start mt-[106px] w-[100%]">
                  <Img
                    src="images/img_blackandwhite_500x1170.png"
                    className="h-[500px] md:h-[auto] object-cover w-[100%]"
                    alt="blackandwhite"
                  />
                </div>
                <div className="flex sm:flex-col flex-row font-roboto gap-[30px] items-center justify-between mt-[36px] w-[100%]">
                  <Text
                    className="font-medium leading-[32.00px] text-gray_400 text-left"
                    as="h6"
                    variant="h6"
                  >
                    Et tellus rhoncus urna a. Tempus felis, sociis lorem aliquet
                    nibh pellentesque. Vitae nunc, dolor, blandit eget eleifend
                    etiam id.
                    <br />
                    Amet arcu lobortis sed pulvinar cursus pretium sit pretium.
                  </Text>
                  <Text
                    className="font-medium leading-[32.00px] text-gray_400 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Mollis rhoncus sem nisl dictumst mauris. At faucibus arcu,
                    scelerisque ultricies accumsan arcu, molestie. Sed ac elit
                    varius enim venenatis ac, id. Ullamcorper non interdum
                    posuere sit nibh id metus.
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-start mb-[193px] md:w-[100%] w-[63%]">
              <div className="flex flex-col items-start justify-start w-[100%]">
                <Text
                  className="text-left text-white_A700 uppercase w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  Meet the masters
                </Text>
                <List
                  className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center mt-[46px] w-[100%]"
                  orientation="horizontal"
                >
                  <div className="flex flex-1 items-center justify-start w-[100%]">
                    <Img
                      src="images/img_portraitofmal.png"
                      className="h-[450px] md:h-[auto] object-cover w-[100%]"
                      alt="portraitofmal"
                    />
                  </div>
                  <div className="flex flex-1 items-center justify-start w-[100%]">
                    <Img
                      src="images/img_portraitofam.png"
                      className="h-[450px] md:h-[auto] object-cover w-[100%]"
                      alt="portraitofam"
                    />
                  </div>
                  <div className="flex flex-1 items-center justify-start w-[100%]">
                    <Img
                      src="images/img_barberwithraz.png"
                      className="h-[450px] md:h-[auto] object-cover w-[100%]"
                      alt="barberwithraz"
                    />
                  </div>
                </List>
                <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start mt-[35px] md:w-[100%] w-[83%]">
                  <Text
                    className="text-left text-white_A700 uppercase w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Ralph Edwards
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[212px] text-left text-white_A700 uppercase w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Marvin McKinney
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[191px] text-left text-white_A700 uppercase w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Albert Flores
                  </Text>
                </div>
                <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start mt-[7px] md:w-[100%] w-[75%]">
                  <Text
                    className="text-deep_orange_A700 text-left uppercase w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Top barber
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[291px] text-deep_orange_A700 text-left uppercase w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Hair Stylist
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[285px] text-deep_orange_A700 text-left uppercase w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    barber
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-evenly mt-[-106.16px] mx-[auto] w-[100%] z-[1]">
            <div className="flex md:flex-1 items-center justify-start md:mt-[0] mt-[106px] md:w-[100%] w-[25%]">
              <Img
                src="images/img_anonymousbarbe_430x480.png"
                className="h-[430px] md:h-[auto] object-cover w-[100%]"
                alt="anonymousbarbe"
              />
            </div>
            <div className="md:h-[430px] h-[536px] relative md:w-[100%] w-[50%]">
              <Text
                className="absolute inset-x-[0] mx-[auto] text-bluegray_900 text-center top-[0] uppercase w-[max-content]"
                variant="body3"
              >
                our best works
              </Text>
              <Text
                className="absolute inset-x-[0] mx-[auto] text-center text-white_A700 top-[0] uppercase w-[max-content]"
                as="h2"
                variant="h2"
              >
                our works
              </Text>
              <div className="absolute bottom-[0] flex items-center justify-start right-[0] w-[50%]">
                <Img
                  src="images/img_thebarberdres_430x480.png"
                  className="h-[430px] md:h-[auto] object-cover w-[100%]"
                  alt="thebarberdres"
                />
              </div>
              <div className="absolute bottom-[0] flex items-center justify-start left-[0] w-[50%]">
                <Img
                  src="images/img_younghandsome.png"
                  className="h-[430px] md:h-[auto] object-cover w-[100%]"
                  alt="younghandsome"
                />
              </div>
            </div>
            <div className="flex md:flex-1 items-center justify-start md:mt-[0] mt-[106px] md:w-[100%] w-[25%]">
              <Img
                src="images/img_barberandcust.png"
                className="h-[430px] md:h-[auto] object-cover w-[100%]"
                alt="barberandcust"
              />
            </div>
          </div>
        </div>
        <div className="bg-gray_901 flex flex-col gap-[110px] md:gap-[40px] items-center justify-start p-[107px] sm:px-[20px] md:px-[40px] w-[100%]">
          <div className="flex items-center justify-start max-w-[1170px] mx-[auto] w-[100%]">
            <div className="flex flex-col gap-[48px] items-center justify-start w-[100%]">
              <div className="flex sm:flex-col flex-row md:gap-[40px] items-start justify-between w-[100%]">
                <Text
                  className="text-center text-white_A700 uppercase w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  what we provide
                </Text>
                <Button
                  className="cursor-pointer font-medium mb-[6px] min-w-[123px] sm:mt-[0] mt-[3px] text-[14px] text-center text-white_A700 uppercase w-[auto]"
                  size="md"
                  variant="FillDeeporangeA700"
                >
                  view services
                </Button>
              </div>
              <List
                className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-[100%]"
                orientation="horizontal"
              >
                <div className="flex flex-1 flex-col gap-[30px] items-center justify-start w-[100%]">
                  <div className="bg-bluegray_900 border-[2px] border-deep_orange_A700 border-solid flex items-center justify-end p-[28px] sm:px-[20px] w-[100%]">
                    <div className="flex flex-col gap-[8px] justify-start md:w-[100%] w-[99%]">
                      <div className="flex flex-row gap-[15px] items-start justify-start md:w-[100%] w-[50%]">
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
                  <div className="bg-bluegray_900 flex items-center justify-end p-[28px] sm:px-[20px] w-[100%]">
                    <div className="flex flex-col gap-[8px] justify-start md:w-[100%] w-[99%]">
                      <div className="flex flex-row gap-[15px] items-start justify-start md:w-[100%] w-[53%]">
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
                      <div className="flex flex-col font-roboto gap-[14px] items-start justify-start md:ml-[0] ml-[55px] md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal leading-[30.00px] not-italic text-gray_400 text-left w-[100%]"
                          variant="body1"
                        >
                          Dapibus ac mattis semper hendrerit eu dolor aliquam.
                          Vitae sem orci non diam. Venenatis augue arcu mauris
                          id eros.
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
                </div>
                <div className="flex flex-1 flex-col gap-[30px] items-center justify-start w-[100%]">
                  <div className="bg-bluegray_900 flex items-center justify-end p-[28px] sm:px-[20px] w-[100%]">
                    <div className="flex flex-col gap-[8px] justify-start md:w-[100%] w-[99%]">
                      <div className="flex flex-row gap-[15px] items-start justify-start md:w-[100%] w-[61%]">
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
                          MOUSTACHE
                        </Text>
                      </div>
                      <div className="flex flex-col font-roboto gap-[14px] items-start justify-start md:ml-[0] ml-[55px] md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal leading-[30.00px] not-italic text-gray_400 text-left w-[100%]"
                          variant="body1"
                        >
                          Viverra duis ut orci mi id. Eget ultricies facilisi
                          elementum nec vel a gravida facilisis in. Tellus felis
                          sapien adipiscing.
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
                  <div className="bg-bluegray_900 flex items-center justify-end p-[28px] sm:px-[20px] w-[100%]">
                    <div className="flex flex-col gap-[8px] justify-start md:w-[100%] w-[99%]">
                      <div className="flex flex-row gap-[15px] items-start justify-start md:w-[100%] w-[60%]">
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
                          Interdum tincidunt condimentum vestibulum feugiat
                          arcu, in. Maecenas sit sem erat tellus pellentesque
                          aliquet.
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
                </div>
                <div className="flex flex-1 flex-col gap-[30px] items-center justify-start w-[100%]">
                  <div className="bg-bluegray_900 flex items-center justify-end p-[28px] sm:px-[20px] w-[100%]">
                    <div className="flex flex-col gap-[8px] justify-start md:w-[100%] w-[99%]">
                      <div className="flex flex-row gap-[15px] items-start justify-start md:w-[100%] w-[41%]">
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
                          SHAVE
                        </Text>
                      </div>
                      <div className="flex flex-col font-roboto gap-[14px] items-start justify-start md:ml-[0] ml-[55px] md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal leading-[30.00px] not-italic text-gray_400 text-left w-[100%]"
                          variant="body1"
                        >
                          Lorem velit parturient consectetur cursus tincidunt
                          tristique pretium volutpat urna. Vitae scelerisque
                          quam eget.
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
                  <div className="bg-bluegray_900 flex items-center justify-end p-[28px] sm:px-[20px] w-[100%]">
                    <div className="flex flex-col gap-[8px] justify-start md:w-[100%] w-[99%]">
                      <div className="flex flex-row gap-[15px] items-start justify-start md:w-[100%] w-[64%]">
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
                      <div className="flex flex-col font-roboto gap-[14px] items-start justify-start md:ml-[0] ml-[55px] md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal leading-[30.00px] not-italic text-gray_400 text-left w-[100%]"
                          variant="body1"
                        >
                          Congue pulvinar morbi pharetra tincidunt vel
                          tincidunt. Amet, morbi neque tellus vivamus venenatis
                          diam nisl.
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
                </div>
              </List>
            </div>
          </div>
          <div className="flex items-center justify-start max-w-[1170px] mx-[auto] w-[100%]">
            <div className="flex flex-col items-start justify-start w-[100%]">
              <div className="flex sm:flex-col flex-row sm:gap-[20px] items-center justify-start w-[100%]">
                <Text
                  className="sm:flex-1 leading-[52.00px] text-left text-white_A700 uppercase sm:w-[100%] w-[35%]"
                  as="h2"
                  variant="h2"
                >
                  what our clients say about us
                </Text>
                <Img
                  src="images/img_arrowleft.svg"
                  className="h-[20px] sm:ml-[0] ml-[637px] w-[auto]"
                  alt="arrowleft"
                />
                <Img
                  src="images/img_arrowright.svg"
                  className="h-[20px] sm:ml-[0] ml-[30px] w-[auto]"
                  alt="arrowright"
                />
              </div>
              <div className="flex md:flex-col flex-row font-roboto md:gap-[20px] items-start justify-start mt-[43px] md:w-[100%] w-[97%]">
                <Img
                  src="images/img_iconquote.svg"
                  className="h-[55px] md:mt-[0] mt-[4px] w-[auto]"
                  alt="iconquote"
                />
                <Text
                  className="font-normal leading-[30.00px] md:ml-[0] ml-[30px] not-italic text-gray_400 text-left sm:w-[100%] w-[39%]"
                  variant="body1"
                >
                  Nullam nec cursus morbi quam. Malesuada volutpat nunc neque
                  mauris est, risus sit sed cursus. Nibh praesent felis, vitae
                  tristique aliquam tellus etiam amet. Dignissim vitae sagittis
                  magna tempor.
                </Text>
                <Img
                  src="images/img_iconquote.svg"
                  className="h-[55px] md:ml-[0] ml-[70px] md:mt-[0] mt-[4px] w-[auto]"
                  alt="iconquote One"
                />
                <Text
                  className="font-normal leading-[30.00px] md:ml-[0] ml-[30px] not-italic text-gray_400 text-left sm:w-[100%] w-[39%]"
                  variant="body1"
                >
                  Egestas tincidunt arcu pellentesque tortor vulputate. Diam
                  nulla sollicitudin diam, rhoncus cursus faucibus mus ornare.
                  Ut tincidunt ut eu amet sit ut magna. Tincidunt dignissim
                  pharetra, sit ut dictum volutpat pharetra aenean blandit.{" "}
                </Text>
              </div>
              <div className="flex flex-row font-oswald sm:gap-[40px] items-center justify-between md:ml-[0] ml-[100px] mt-[10px] md:w-[100%] w-[64%]">
                <Text
                  className="text-deep_orange_A700 text-left uppercase w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Floyd Miles
                </Text>
                <Text
                  className="text-deep_orange_A700 text-left uppercase w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Esther Howard
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[494px] md:px-[20px] relative w-[100%]">
          <Img
            src="images/img_img_494x1920.png"
            className="h-[494px] m-[auto] object-cover w-[100%]"
            alt="img"
          />
          <div className="absolute flex flex-col h-[max-content] inset-y-[0] items-start justify-start my-[auto] right-[20%] w-[30%]">
            <Text
              className="font-oswald text-left text-white_A700 uppercase w-[auto]"
              as="h2"
              variant="h2"
            >
              READY to transform?
            </Text>
            <Text
              className="font-medium font-roboto leading-[32.00px] mt-[12px] text-left text-white_A700 w-[100%]"
              as="h6"
              variant="h6"
            >
              Tincidunt ante faucibus in dui quam aliquam integer nunc neque.
              Augue in nullam urna nulla. Hac nisi habitant elementum cras duis
              placerat egestas nisl. Vestibulum molestie tellus facilisi id. Sed
              id.
            </Text>
            <Button
              className="cursor-pointer font-medium font-oswald min-w-[100px] mt-[48px] text-[14px] text-center text-white_A700 uppercase w-[auto]"
              size="md"
              variant="FillDeeporangeA700"
            >
              book now
            </Button>
          </div>
        </div>
        <Footer className="bg-gray_901 flex items-center justify-center md:px-[20px] w-[100%]" />
      </div>
    </>
  );
};

export default AboutPage;
