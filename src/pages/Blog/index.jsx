import React from "react";

import { Img, Text, Button } from "components";
import Footer from "components/Footer";

const BlogPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-oswald items-center justify-start mx-[auto] w-[100%]">
        <header className="bg-bluegray_900 flex flex-col items-center justify-center md:px-[20px] w-[100%]">
          <div className="flex flex-col gap-[20px] items-center justify-center mb-[30px] mx-[auto] w-[61%]">
            <div className="bg-deep_orange_A700 h-[10px] md:ml-[0] ml-[861px] mr-[271px] w-[4%]"></div>
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
          <div className="flex flex-col items-start justify-start max-w-[1170px] mb-[12px] mx-[auto] w-[100%]">
            <Text
              className="text-left text-white_A700 uppercase w-[auto]"
              as="h2"
              variant="h2"
            >
              our Blog
            </Text>
            <Text
              className="md:ml-[0] ml-[90px] text-bluegray_900 text-left uppercase w-[auto]"
              variant="body3"
            >
              recent posts
            </Text>
            <div className="md:gap-[20px] gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] mt-[56px] w-[100%]">
              <div className="flex flex-1 flex-col gap-[36px] items-start justify-start w-[100%]">
                <div className="flex items-center justify-start w-[100%]">
                  <div className="flex items-center justify-start w-[100%]">
                    <Img
                      src="images/img_anonymousbarbe_330x370.png"
                      className="h-[330px] md:h-[auto] object-cover w-[100%]"
                      alt="anonymousbarbe"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-[10px] items-start justify-start w-[auto]">
                  <div className="flex items-center justify-start w-[100%]">
                    <Text
                      className="leading-[36.00px] text-left text-white_A700 uppercase"
                      as="h4"
                      variant="h4"
                    >
                      5 advantages why you should
                      <br />
                      visit barbershop
                    </Text>
                  </div>
                  <div className="flex font-roboto items-center justify-start md:w-[100%] w-[56%]">
                    <div className="flex flex-row gap-[20px] items-start justify-start w-[auto]">
                      <div className="flex items-center justify-start w-[auto]">
                        <Text
                          className="capitalize font-medium text-deep_orange_A700 text-left w-[auto]"
                          variant="body1"
                        >
                          04 August, 2021
                        </Text>
                      </div>
                      <div className="flex items-center justify-start w-[auto]">
                        <Text
                          className="capitalize font-normal not-italic text-deep_orange_A700 text-left w-[auto]"
                          variant="body1"
                        >
                          <span className="text-deep_orange_A700 text-[16px] font-roboto font-medium">
                            by{" "}
                          </span>
                          <span className="text-deep_orange_A700 text-[16px] font-roboto lowercase font-medium">
                            a
                          </span>
                          <span className="text-deep_orange_A700 text-[16px] font-roboto font-medium">
                            dmin
                          </span>
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex font-roboto items-center justify-start w-[100%]">
                    <Text
                      className="font-normal leading-[30.00px] not-italic text-gray_400 text-left w-[100%]"
                      variant="body1"
                    >
                      Eget ut sodales arcu aliquet diam nec laoreet fames. Urna,
                      eu pharetra consequat, euismod iaculis tristique maecenas.
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-[36px] items-start justify-start w-[100%]">
                <div className="flex items-center justify-start w-[100%]">
                  <div className="flex items-center justify-start w-[100%]">
                    <Img
                      src="images/img_handsomebarber.png"
                      className="h-[330px] md:h-[auto] object-cover w-[100%]"
                      alt="anonymousbarbe One"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-[10px] items-start justify-start w-[auto]">
                  <div className="flex items-center justify-start w-[100%]">
                    <Text
                      className="leading-[36.00px] text-left text-white_A700 uppercase w-[100%]"
                      as="h4"
                      variant="h4"
                    >
                      popular COSMETICS FOR HAIR STYLING
                    </Text>
                  </div>
                  <div className="flex font-roboto items-center justify-start md:w-[100%] w-[56%]">
                    <div className="flex flex-row gap-[20px] items-start justify-start w-[auto]">
                      <div className="flex items-center justify-start w-[auto]">
                        <Text
                          className="capitalize font-medium text-deep_orange_A700 text-left w-[auto]"
                          variant="body1"
                        >
                          02 August, 2021
                        </Text>
                      </div>
                      <div className="flex items-center justify-start w-[auto]">
                        <Text
                          className="capitalize font-normal not-italic text-deep_orange_A700 text-left w-[auto]"
                          variant="body1"
                        >
                          <span className="text-deep_orange_A700 text-[16px] font-roboto font-medium">
                            by{" "}
                          </span>
                          <span className="text-deep_orange_A700 text-[16px] font-roboto lowercase font-medium">
                            a
                          </span>
                          <span className="text-deep_orange_A700 text-[16px] font-roboto font-medium">
                            dmin
                          </span>
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex font-roboto items-center justify-start w-[100%]">
                    <Text
                      className="font-normal leading-[30.00px] not-italic text-gray_400 text-left w-[100%]"
                      variant="body1"
                    >
                      Eget ut sodales arcu aliquet diam nec laoreet fames. Urna,
                      eu pharetra consequat, euismod iaculis tristique maecenas.
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-[36px] items-start justify-start w-[100%]">
                <div className="flex items-center justify-start w-[100%]">
                  <div className="flex items-center justify-start w-[100%]">
                    <Img
                      src="images/img_thebarberdres.png"
                      className="h-[330px] md:h-[auto] object-cover w-[100%]"
                      alt="anonymousbarbe Two"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-[10px] items-start justify-start w-[auto]">
                  <div className="flex items-center justify-start w-[100%]">
                    <Text
                      className="leading-[36.00px] text-left text-white_A700 uppercase w-[100%]"
                      as="h4"
                      variant="h4"
                    >
                      Features of beard and mustache care
                    </Text>
                  </div>
                  <div className="flex font-roboto items-center justify-start md:w-[100%] w-[50%]">
                    <div className="flex flex-row gap-[20px] items-start justify-start w-[auto]">
                      <div className="flex items-center justify-start w-[auto]">
                        <Text
                          className="capitalize font-medium text-deep_orange_A700 text-left w-[auto]"
                          variant="body1"
                        >
                          12 July, 2021
                        </Text>
                      </div>
                      <div className="flex items-center justify-start w-[auto]">
                        <Text
                          className="capitalize font-normal not-italic text-deep_orange_A700 text-left w-[auto]"
                          variant="body1"
                        >
                          <span className="text-deep_orange_A700 text-[16px] font-roboto font-medium">
                            by{" "}
                          </span>
                          <span className="text-deep_orange_A700 text-[16px] font-roboto lowercase font-medium">
                            a
                          </span>
                          <span className="text-deep_orange_A700 text-[16px] font-roboto font-medium">
                            dmin
                          </span>
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex font-roboto items-center justify-start w-[100%]">
                    <Text
                      className="font-normal leading-[30.00px] not-italic text-gray_400 text-left w-[100%]"
                      variant="body1"
                    >
                      Eget ut sodales arcu aliquet diam nec laoreet fames. Urna,
                      eu pharetra consequat, euismod iaculis tristique maecenas.
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-[36px] items-start justify-start w-[100%]">
                <div className="flex items-center justify-start w-[100%]">
                  <div className="flex items-center justify-start w-[100%]">
                    <Img
                      src="images/img_anonymousbarbe_1.png"
                      className="h-[330px] md:h-[auto] object-cover w-[100%]"
                      alt="anonymousbarbe Three"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-[10px] items-start justify-start w-[auto]">
                  <div className="flex items-center justify-start w-[100%]">
                    <Text
                      className="leading-[36.00px] text-left text-white_A700 uppercase w-[100%]"
                      as="h4"
                      variant="h4"
                    >
                      Why Barber Shop is the peaceful place
                    </Text>
                  </div>
                  <div className="flex font-roboto items-center justify-start md:w-[100%] w-[50%]">
                    <div className="flex flex-row gap-[20px] items-start justify-start w-[auto]">
                      <div className="flex items-center justify-start w-[auto]">
                        <Text
                          className="capitalize font-medium text-deep_orange_A700 text-left w-[auto]"
                          variant="body1"
                        >
                          07 july, 2021
                        </Text>
                      </div>
                      <div className="flex items-center justify-start w-[auto]">
                        <Text
                          className="capitalize font-normal not-italic text-deep_orange_A700 text-left w-[auto]"
                          variant="body1"
                        >
                          <span className="text-deep_orange_A700 text-[16px] font-roboto font-medium">
                            by{" "}
                          </span>
                          <span className="text-deep_orange_A700 text-[16px] font-roboto lowercase font-medium">
                            a
                          </span>
                          <span className="text-deep_orange_A700 text-[16px] font-roboto font-medium">
                            dmin
                          </span>
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex font-roboto items-center justify-start w-[100%]">
                    <Text
                      className="font-normal leading-[30.00px] not-italic text-gray_400 text-left w-[100%]"
                      variant="body1"
                    >
                      Nisi adipiscing ut cras ac imperdiet amet. Tempor
                      phasellus quam feugiat enim fringilla eu. Tellus tincidunt
                      sollicitudin penatibus pharetra dui.{" "}
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-[36px] items-start justify-start w-[100%]">
                <div className="flex items-center justify-start w-[100%]">
                  <div className="flex items-center justify-start w-[100%]">
                    <Img
                      src="images/img_anonymousbarbe_2.png"
                      className="h-[330px] md:h-[auto] object-cover w-[100%]"
                      alt="anonymousbarbe Four"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-[10px] items-start justify-start w-[auto]">
                  <div className="flex items-center justify-start w-[100%]">
                    <Text
                      className="leading-[36.00px] text-left text-white_A700 uppercase w-[100%]"
                      as="h4"
                      variant="h4"
                    >
                      Time to meet our awesome staff members
                    </Text>
                  </div>
                  <div className="flex font-roboto items-center justify-start md:w-[100%] w-[52%]">
                    <div className="flex flex-row gap-[20px] items-start justify-start w-[auto]">
                      <div className="flex items-center justify-start w-[auto]">
                        <Text
                          className="capitalize font-medium text-deep_orange_A700 text-left w-[auto]"
                          variant="body1"
                        >
                          22 June, 2021
                        </Text>
                      </div>
                      <div className="flex items-center justify-start w-[auto]">
                        <Text
                          className="capitalize font-normal not-italic text-deep_orange_A700 text-left w-[auto]"
                          variant="body1"
                        >
                          <span className="text-deep_orange_A700 text-[16px] font-roboto font-medium">
                            by{" "}
                          </span>
                          <span className="text-deep_orange_A700 text-[16px] font-roboto lowercase font-medium">
                            a
                          </span>
                          <span className="text-deep_orange_A700 text-[16px] font-roboto font-medium">
                            dmin
                          </span>
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex font-roboto items-center justify-start w-[100%]">
                    <Text
                      className="font-normal leading-[30.00px] not-italic text-gray_400 text-left w-[100%]"
                      variant="body1"
                    >
                      Eget ut sodales arcu aliquet diam nec laoreet fames. Urna,
                      eu pharetra consequat, euismod iaculis tristique maecenas.
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-[36px] items-start justify-start w-[100%]">
                <div className="flex items-center justify-start w-[100%]">
                  <div className="flex items-center justify-start w-[100%]">
                    <Img
                      src="images/img_anonymousbarbe_3.png"
                      className="h-[330px] md:h-[auto] object-cover w-[100%]"
                      alt="anonymousbarbe Five"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-[10px] items-start justify-start w-[auto]">
                  <div className="flex items-center justify-start w-[100%]">
                    <Text
                      className="leading-[36.00px] text-left text-white_A700 uppercase w-[100%]"
                      as="h4"
                      variant="h4"
                    >
                      What are the secrets of the haircut?
                    </Text>
                  </div>
                  <div className="flex font-roboto items-center justify-start md:w-[100%] w-[52%]">
                    <div className="flex flex-row gap-[20px] items-start justify-start w-[auto]">
                      <div className="flex items-center justify-start w-[auto]">
                        <Text
                          className="capitalize font-medium text-deep_orange_A700 text-left w-[auto]"
                          variant="body1"
                        >
                          19 June, 2021
                        </Text>
                      </div>
                      <div className="flex items-center justify-start w-[auto]">
                        <Text
                          className="capitalize font-normal not-italic text-deep_orange_A700 text-left w-[auto]"
                          variant="body1"
                        >
                          <span className="text-deep_orange_A700 text-[16px] font-roboto font-medium">
                            by{" "}
                          </span>
                          <span className="text-deep_orange_A700 text-[16px] font-roboto lowercase font-medium">
                            a
                          </span>
                          <span className="text-deep_orange_A700 text-[16px] font-roboto font-medium">
                            dmin
                          </span>
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex font-roboto items-center justify-start w-[100%]">
                    <Text
                      className="font-normal leading-[30.00px] not-italic text-gray_400 text-left w-[100%]"
                      variant="body1"
                    >
                      Molestie nulla quam ut ullamcorper mi nibh feugiat vitae,
                      tortor. Metus vestibulum, vel vivamus quis. Proin
                      fringilla fringilla leo congue sit in.
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-[36px] items-start justify-start w-[100%]">
                <div className="flex items-center justify-start w-[100%]">
                  <div className="flex items-center justify-start w-[100%]">
                    <Img
                      src="images/img_anonymousbarbe_4.png"
                      className="h-[330px] md:h-[auto] object-cover w-[100%]"
                      alt="anonymousbarbe Six"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-[10px] items-start justify-start w-[auto]">
                  <div className="flex items-center justify-start w-[100%]">
                    <Text
                      className="leading-[36.00px] text-left text-white_A700 uppercase w-[100%]"
                      as="h4"
                      variant="h4"
                    >
                      How good a shave with Barber Shop?
                    </Text>
                  </div>
                  <div className="flex font-roboto items-center justify-start md:w-[100%] w-[52%]">
                    <div className="flex flex-row gap-[20px] items-start justify-start w-[auto]">
                      <div className="flex items-center justify-start w-[auto]">
                        <Text
                          className="capitalize font-medium text-deep_orange_A700 text-left w-[auto]"
                          variant="body1"
                        >
                          03 June, 2021
                        </Text>
                      </div>
                      <div className="flex items-center justify-start w-[auto]">
                        <Text
                          className="capitalize font-normal not-italic text-deep_orange_A700 text-left w-[auto]"
                          variant="body1"
                        >
                          <span className="text-deep_orange_A700 text-[16px] font-roboto font-medium">
                            by{" "}
                          </span>
                          <span className="text-deep_orange_A700 text-[16px] font-roboto lowercase font-medium">
                            a
                          </span>
                          <span className="text-deep_orange_A700 text-[16px] font-roboto font-medium">
                            dmin
                          </span>
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex font-roboto items-center justify-start w-[100%]">
                    <Text
                      className="font-normal leading-[30.00px] not-italic text-gray_400 text-left w-[100%]"
                      variant="body1"
                    >
                      Quis tincidunt leo tristique rhoncus semper non in eget.
                      Elementum leo feugiat convallis congue fusce nec quam
                      ultricies. Eu velit faucibus sit morbi risus.
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-[36px] items-start justify-start w-[100%]">
                <div className="flex items-center justify-start w-[100%]">
                  <div className="flex items-center justify-start w-[100%]">
                    <Img
                      src="images/img_anonymousbarbe_5.png"
                      className="h-[330px] md:h-[auto] object-cover w-[100%]"
                      alt="anonymousbarbe Seven"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-[10px] items-start justify-start w-[auto]">
                  <div className="flex items-center justify-start w-[100%]">
                    <Text
                      className="leading-[36.00px] text-left text-white_A700 uppercase w-[100%]"
                      as="h4"
                      variant="h4"
                    >
                      popular COSMETICS FOR HAIR STYLING
                    </Text>
                  </div>
                  <div className="flex font-roboto items-center justify-start md:w-[100%] w-[52%]">
                    <div className="flex flex-row gap-[20px] items-start justify-start w-[auto]">
                      <div className="flex items-center justify-start w-[auto]">
                        <Text
                          className="capitalize font-medium text-deep_orange_A700 text-left w-[auto]"
                          variant="body1"
                        >
                          02 June, 2021
                        </Text>
                      </div>
                      <div className="flex items-center justify-start w-[auto]">
                        <Text
                          className="capitalize font-normal not-italic text-deep_orange_A700 text-left w-[auto]"
                          variant="body1"
                        >
                          <span className="text-deep_orange_A700 text-[16px] font-roboto font-medium">
                            by{" "}
                          </span>
                          <span className="text-deep_orange_A700 text-[16px] font-roboto lowercase font-medium">
                            a
                          </span>
                          <span className="text-deep_orange_A700 text-[16px] font-roboto font-medium">
                            dmin
                          </span>
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex font-roboto items-center justify-start w-[100%]">
                    <Text
                      className="font-normal leading-[30.00px] not-italic text-gray_400 text-left w-[100%]"
                      variant="body1"
                    >
                      Eget ut sodales arcu aliquet diam nec laoreet fames. Urna,
                      eu pharetra consequat, euismod iaculis tristique maecenas.
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-[36px] items-start justify-start w-[100%]">
                <div className="flex items-center justify-start w-[100%]">
                  <div className="flex items-center justify-start w-[100%]">
                    <Img
                      src="images/img_anonymousbarbe_6.png"
                      className="h-[330px] md:h-[auto] object-cover w-[100%]"
                      alt="anonymousbarbe Eight"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-[10px] items-start justify-start w-[auto]">
                  <div className="flex items-center justify-start w-[100%]">
                    <Text
                      className="leading-[36.00px] text-left text-white_A700 uppercase w-[100%]"
                      as="h4"
                      variant="h4"
                    >
                      Why Barber Shop is the peaceful place
                    </Text>
                  </div>
                  <div className="flex font-roboto items-center justify-start md:w-[100%] w-[49%]">
                    <div className="flex flex-row gap-[20px] items-start justify-start w-[auto]">
                      <div className="flex items-center justify-start w-[auto]">
                        <Text
                          className="capitalize font-medium text-deep_orange_A700 text-left w-[auto]"
                          variant="body1"
                        >
                          16 May 2021
                        </Text>
                      </div>
                      <div className="flex items-center justify-start w-[auto]">
                        <Text
                          className="capitalize font-normal not-italic text-deep_orange_A700 text-left w-[auto]"
                          variant="body1"
                        >
                          <span className="text-deep_orange_A700 text-[16px] font-roboto font-medium">
                            by{" "}
                          </span>
                          <span className="text-deep_orange_A700 text-[16px] font-roboto lowercase font-medium">
                            a
                          </span>
                          <span className="text-deep_orange_A700 text-[16px] font-roboto font-medium">
                            dmin
                          </span>
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex font-roboto items-center justify-start w-[100%]">
                    <Text
                      className="font-normal leading-[30.00px] not-italic text-gray_400 text-left w-[100%]"
                      variant="body1"
                    >
                      Molestie nulla quam ut ullamcorper mi nibh feugiat vitae,
                      tortor. Metus vestibulum, vel vivamus quis. Proin
                      fringilla fringilla leo congue sit in.
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center md:ml-[0] ml-[402px] mt-[64px] md:w-[100%] w-[32%]">
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

export default BlogPage;
