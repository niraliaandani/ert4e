import React from "react";

import { Img, Text, Button, List, Input } from "components";
import { CloseSVG } from "../../assets/images";
import Footer from "components/Footer";

const InnerBlogPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

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
        <div className="bg-gray_901 flex items-center justify-start p-[120px] sm:px-[20px] md:px-[40px] w-[100%]">
          <div className="flex md:flex-col flex-row gap-[55px] items-start justify-center max-w-[1170px] mx-[auto] w-[100%]">
            <div className="flex md:flex-1 flex-col items-start justify-start md:w-[100%] w-[66%]">
              <div className="flex items-center justify-start w-[100%]">
                <div className="flex flex-col items-start justify-start w-[100%]">
                  <div className="flex items-center justify-start w-[100%]">
                    <Img
                      src="images/img_anonymousbarbe_630x770.png"
                      className="h-[630px] md:h-[auto] object-cover w-[100%]"
                      alt="anonymousbarbe"
                    />
                  </div>
                  <Text
                    className="font-oswald leading-[52.00px] mt-[34px] text-left text-white_A700 uppercase w-[100%]"
                    as="h2"
                    variant="h2"
                  >
                    5 advantages why you should visit barbershop
                  </Text>
                  <div className="flex sm:flex-col flex-row font-roboto sm:gap-[20px] items-start justify-start mt-[14px] md:w-[100%] w-[64%]">
                    <Text
                      className="font-medium lowercase text-deep_orange_A700 text-left w-[auto]"
                      variant="body1"
                    >
                      <span className="text-deep_orange_A700 text-[16px] font-roboto uppercase">
                        P
                      </span>
                      <span className="text-deep_orange_A700 text-[16px] font-roboto">
                        osted 09{" "}
                      </span>
                      <span className="text-deep_orange_A700 text-[16px] font-roboto">
                        o
                      </span>
                      <span className="text-deep_orange_A700 text-[16px] font-roboto">
                        ctober
                      </span>
                      <span className="text-deep_orange_A700 text-[16px] font-roboto">
                        {" "}
                      </span>
                      <span className="text-deep_orange_A700 text-[16px] font-roboto">
                        2021 in{" "}
                      </span>
                      <span className="text-deep_orange_A700 text-[16px] font-roboto uppercase">
                        h
                      </span>
                      <span className="text-deep_orange_A700 text-[16px] font-roboto">
                        aircut by admin
                      </span>
                    </Text>
                    <Text
                      className="font-medium lowercase sm:ml-[0] ml-[20px] text-deep_orange_A700 text-left w-[auto]"
                      variant="body1"
                    >
                      1 Comment
                    </Text>
                    <Text
                      className="font-medium lowercase sm:ml-[0] ml-[23px] text-deep_orange_A700 text-left w-[auto]"
                      variant="body1"
                    >
                      {" "}
                      0 Likes
                    </Text>
                  </div>
                  <Text
                    className="font-medium font-roboto leading-[32.00px] mt-[14px] text-gray_400 text-left w-[100%]"
                    as="h6"
                    variant="h6"
                  >
                    Nullam feugiat integer mi enim arcu, interdum faucibus sed.
                    A tempor orci, nec sit lobortis amet purus. Curabitur
                    egestas dignissim iaculis ante mattis. Ornare diam mattis
                    morbi suspendisse. Arcu, viverra non in ac hendrerit vitae
                    ullamcorper purus. Aliquam dignissim molestie lacinia sed et
                    quam faucibus nec quisque. Viverra in id nulla netus aliquet
                    lectus viverra est. Nunc odio accumsan eget in. Ultrices
                    turpis risus id sit.
                  </Text>
                  <div className="flex sm:flex-col flex-row font-oswald gap-[30px] items-start justify-start mt-[29px] w-[100%]">
                    <Img
                      src="images/img_group18.svg"
                      className="h-[55px] sm:mt-[0] mt-[9px] w-[auto]"
                      alt="GroupEighteen"
                    />
                    <Text
                      className="sm:flex-1 leading-[36.00px] text-left text-white_A700 uppercase sm:w-[100%] w-[88%]"
                      as="h4"
                      variant="h4"
                    >
                      Id varius porttitor in vulputate. Dui, lorem non
                      ullamcorper id in ac tristique pretium. Facilisis enim,
                      tincidunt egestas nisl leo orci vel. Aliquet lectus
                      aliquam faucibus.
                    </Text>
                  </div>
                  <Text
                    className="font-medium font-roboto leading-[32.00px] mt-[29px] text-gray_400 text-left w-[100%]"
                    as="h6"
                    variant="h6"
                  >
                    Quam ultrices bibendum accumsan morbi risus iaculis tellus
                    tellus molestie. Auctor eu auctor aliquam porttitor
                    scelerisque massa volutpat elit, urna. Eget quis porta
                    euismod diam justo, tempor vehicula. Egestas turpis vel non
                    diam nunc amet, a risus diam. Ultrices ac blandit sem nec
                    nulla nisi habitasse. Aliquet pellentesque potenti massa
                    eget pellentesque. Feugiat turpis in a sed. Nisl tincidunt
                    cras tempus ipsum, sollicitudin vitae facilisis quis
                    volutpat.
                  </Text>
                  <div className="flex md:flex-col flex-row font-roboto md:gap-[20px] items-start justify-start mt-[39px] md:w-[100%] w-[90%]">
                    <Img
                      src="images/img_star.svg"
                      className="h-[20px] w-[20px]"
                      alt="star"
                    />
                    <Text
                      className="font-medium md:ml-[0] ml-[12px] text-gray_400 text-left w-[auto]"
                      variant="body1"
                    >
                      Dui cursus neque et at ipsum.
                    </Text>
                    <Text
                      className="font-normal md:ml-[0] ml-[155px] not-italic text-gray_400 text-left w-[auto]"
                      variant="body1"
                    >
                      <span className="text-white_A700 text-[16px] font-roboto font-medium">
                        1.
                      </span>
                      <span className="text-gray_400 text-[16px] font-roboto font-medium">
                        {" "}
                        Amet non vulputate tempor est neque.
                      </span>
                    </Text>
                  </div>
                  <div className="flex md:flex-col flex-row font-roboto md:gap-[20px] items-start justify-start mt-[17px] md:w-[100%] w-[87%]">
                    <Img
                      src="images/img_star.svg"
                      className="h-[20px] w-[20px]"
                      alt="star One"
                    />
                    <Text
                      className="font-medium md:ml-[0] ml-[12px] text-gray_400 text-left w-[auto]"
                      variant="body1"
                    >
                      Molestie arcu nisi magna interdum lacus.
                    </Text>
                    <Text
                      className="font-normal md:ml-[0] ml-[73px] not-italic text-gray_400 text-left w-[auto]"
                      variant="body1"
                    >
                      <span className="text-white_A700 text-[16px] font-roboto font-medium">
                        2.
                      </span>
                      <span className="text-gray_400 text-[16px] font-roboto font-medium">
                        {" "}
                        Et pharetra rhoncus at facilisi in et.
                      </span>
                    </Text>
                  </div>
                  <div className="flex md:flex-col flex-row font-roboto md:gap-[20px] items-start justify-start mt-[17px] md:w-[100%] w-[97%]">
                    <Img
                      src="images/img_star.svg"
                      className="h-[20px] w-[20px]"
                      alt="star Two"
                    />
                    <Text
                      className="font-medium md:ml-[0] ml-[12px] text-gray_400 text-left w-[auto]"
                      variant="body1"
                    >
                      Ut feugiat integer ut nisi tristique pulvinar.
                    </Text>
                    <Text
                      className="font-normal md:ml-[0] ml-[68px] not-italic text-gray_400 text-left w-[auto]"
                      variant="body1"
                    >
                      <span className="text-white_A700 text-[16px] font-roboto font-medium">
                        3.
                      </span>
                      <span className="text-gray_400 text-[16px] font-roboto font-medium">
                        {" "}
                        Viverra nec lorem velit et in diam risus sed at.
                      </span>
                    </Text>
                  </div>
                  <div className="flex md:flex-col flex-row font-roboto md:gap-[20px] items-start justify-start mt-[17px] md:w-[100%] w-[84%]">
                    <Img
                      src="images/img_star.svg"
                      className="h-[20px] w-[20px]"
                      alt="star Three"
                    />
                    <Text
                      className="font-medium md:ml-[0] ml-[12px] text-gray_400 text-left w-[auto]"
                      variant="body1"
                    >
                      Faucibus vivamus non, molestie velit.
                    </Text>
                    <Text
                      className="font-normal md:ml-[0] ml-[101px] not-italic text-gray_400 text-left w-[auto]"
                      variant="body1"
                    >
                      <span className="text-white_A700 text-[16px] font-roboto font-medium">
                        4.{" "}
                      </span>
                      <span className="text-gray_400 text-[16px] font-roboto font-medium">
                        Velit nullam ornare tincidunt sit.
                      </span>
                    </Text>
                  </div>
                  <div className="flex md:flex-col flex-row font-roboto md:gap-[20px] items-start justify-start mt-[18px] md:w-[100%] w-[91%]">
                    <Img
                      src="images/img_star.svg"
                      className="h-[20px] w-[20px]"
                      alt="star Four"
                    />
                    <Text
                      className="font-medium md:ml-[0] ml-[12px] text-gray_400 text-left w-[auto]"
                      variant="body1"
                    >
                      Tincidunt natoque est dictum pellentesque.
                    </Text>
                    <Text
                      className="font-normal md:ml-[0] ml-[58px] not-italic text-gray_400 text-left w-[auto]"
                      variant="body1"
                    >
                      <span className="text-white_A700 text-[16px] font-roboto font-medium">
                        5.
                      </span>
                      <span className="text-gray_400 text-[16px] font-roboto font-medium">
                        {" "}
                        Eleifend non felis aliquet nunc rhoncus.
                      </span>
                    </Text>
                  </div>
                  <div className="flex flex-row font-oswald gap-[15px] items-center justify-start mt-[44px] md:w-[100%] w-[22%]">
                    <Button
                      className="cursor-pointer font-medium min-w-[79px] text-[14px] text-center text-white_A700 uppercase w-[auto]"
                      size="sm"
                      variant="FillDeeporangeA700"
                    >
                      hairstyle
                    </Button>
                    <Button
                      className="cursor-pointer font-medium min-w-[69px] text-[14px] text-center text-white_A700 uppercase w-[auto]"
                      size="sm"
                      variant="FillDeeporangeA700"
                    >
                      haircut
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-start mt-[110px] md:w-[100%] w-[91%]">
                <div className="flex md:flex-col flex-row gap-[30px] items-start justify-between w-[100%]">
                  <div className="flex md:flex-1 flex-col gap-[47px] items-center justify-start mb-[63px] md:w-[100%] w-[15%]">
                    <Text
                      className="text-left text-white_A700 uppercase w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      1 comment
                    </Text>
                    <div className="flex h-[100px] items-center justify-start w-[100px]">
                      <Img
                        src="images/img_blackandwhite_100x100.png"
                        className="h-[100px] md:h-[auto] rounded-[50%] w-[100px]"
                        alt="blackandwhite"
                      />
                    </div>
                  </div>
                  <div className="flex md:flex-1 flex-col items-start justify-start md:mt-[0] mt-[81px] md:w-[100%] w-[82%]">
                    <Text
                      className="font-medium font-oswald text-left text-white_A700 uppercase w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Jane Cooper
                    </Text>
                    <div className="flex flex-row items-start justify-start mt-[13px] md:w-[100%] w-[45%]">
                      <Text
                        className="font-medium font-roboto lowercase mt-[2px] text-deep_orange_A700 text-left w-[auto]"
                        variant="body2"
                      >
                        <span className="text-deep_orange_A700 text-[14px]">
                          29{" "}
                        </span>
                        <span className="text-deep_orange_A700 text-[14px] uppercase">
                          F
                        </span>
                        <span className="text-deep_orange_A700 text-[14px]">
                          EBRUARY, 2020 3:23 PM
                        </span>
                      </Text>
                      <Img
                        src="images/img_edit.svg"
                        className="h-[16px] ml-[30px] mt-[2px] w-[16px]"
                        alt="edit"
                      />
                      <Text
                        className="font-medium font-oswald ml-[8px] text-left text-white_A700 uppercase w-[auto]"
                        variant="body2"
                      >
                        REPLY
                      </Text>
                    </div>
                    <Text
                      className="font-normal font-roboto leading-[30.00px] mt-[10px] not-italic text-gray_400 text-left w-[100%]"
                      variant="body1"
                    >
                      Leo mattis a et mattis volutpat consectetur in. Eget
                      blandit metus convallis turpis. Consectetur tincidunt
                      interdum erat ac, vitae metus sed maecenas non. Et tempor
                      lorem erat sit tempor velit magnis luctus. Et commodo sed.
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-start mt-[100px] w-[100%]">
                <div className="flex flex-col items-start justify-start w-[100%]">
                  <Text
                    className="font-oswald text-left text-white_A700 uppercase w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Post a comment
                  </Text>
                  <Text
                    className="font-medium font-roboto leading-[32.00px] mt-[7px] text-gray_400 text-left w-[100%]"
                    as="h6"
                    variant="h6"
                  >
                    Nibh porta convallis ut sagittis, nibh lacus et. Diam
                    consequat facilisis enim quis quis odio. Nascetur massa id
                    maecenas enim.
                  </Text>
                  <div
                    className="bg-cover bg-no-repeat flex font-roboto h-[180px] items-start justify-start mt-[35px] p-[16px] w-[100%]"
                    style={{
                      backgroundImage: "url('images/img_writecomment.svg')",
                    }}
                  >
                    <Text
                      className="font-medium lowercase mb-[130px] text-left text-white_A700 w-[auto]"
                      variant="body2"
                    >
                      write comment
                    </Text>
                  </div>
                  <div className="flex md:flex-col flex-row font-roboto gap-[30px] items-center justify-between mt-[30px] w-[100%]">
                    <List
                      className="md:flex-1 sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 grid-cols-2 md:w-[100%] w-[66%]"
                      orientation="horizontal"
                    >
                      <div
                        className="bg-cover bg-no-repeat flex h-[50px] items-start justify-start sm:ml-[0] p-[16px] w-[100%]"
                        style={{
                          backgroundImage: "url('images/img_writecomment.svg')",
                        }}
                      >
                        <Text
                          className="font-medium lowercase text-left text-white_A700 w-[auto]"
                          variant="body2"
                        >
                          your full name
                        </Text>
                      </div>
                      <div
                        className="bg-cover bg-no-repeat flex h-[50px] items-start justify-start sm:ml-[0] p-[16px] w-[100%]"
                        style={{
                          backgroundImage: "url('images/img_writecomment.svg')",
                        }}
                      >
                        <Text
                          className="font-medium lowercase text-left text-white_A700 w-[auto]"
                          variant="body2"
                        >
                          your e-mail
                        </Text>
                      </div>
                    </List>
                    <div
                      className="bg-cover bg-no-repeat flex md:flex-1 h-[50px] items-start justify-start p-[16px] md:w-[100%] w-[auto]"
                      style={{
                        backgroundImage: "url('images/img_writecomment.svg')",
                      }}
                    >
                      <Text
                        className="capitalize font-medium text-left text-white_A700 w-[auto]"
                        variant="body2"
                      >
                        website
                      </Text>
                    </div>
                  </div>
                  <Button
                    className="cursor-pointer font-medium font-oswald min-w-[140px] mt-[45px] text-[14px] text-center text-white_A700 uppercase w-[auto]"
                    size="md"
                    variant="OutlineDeeporangeA700"
                  >
                    Submit Comment
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col items-start justify-start md:w-[100%] w-[30%]">
              <Input
                value={inputvalue}
                onChange={(e) => setInputvalue(e?.target?.value)}
                className="font-medium p-[0] text-[14px] text-left placeholder:text-white_A700 text-white_A700 uppercase w-[100%]"
                wrapClassName="flex w-[100%]"
                name="searchform"
                placeholder="search"
                suffix={
                  <div className="ml-[35px] mr-[18px] w-[17px] bg-white_A700">
                    {inputvalue?.length > 0 ? (
                      <CloseSVG
                        className="cursor-pointer my-[auto]"
                        onClick={() => setInputvalue("")}
                        color="#ffffff"
                      />
                    ) : (
                      <Img
                        src="images/img_search.svg"
                        className="cursor-pointer my-[auto]"
                        alt="search"
                      />
                    )}
                  </div>
                }
              ></Input>
              <div className="flex flex-col gap-[27px] items-start justify-start mt-[62px] w-[100%]">
                <Text
                  className="text-left text-white_A700 uppercase w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  recent posts
                </Text>
                <List
                  className="flex-col gap-[30px] grid items-center w-[100%]"
                  orientation="vertical"
                >
                  <div className="flex flex-1 items-center justify-start w-[100%]">
                    <div className="flex flex-row gap-[15px] items-start justify-between w-[100%]">
                      <div className="flex h-[100px] items-center justify-start w-[100px]">
                        <Img
                          src="images/img_anonymousbarbe_100x100.png"
                          className="h-[100px] md:h-[auto] object-cover w-[100px]"
                          alt="anonymousbarbe One"
                        />
                      </div>
                      <div className="flex flex-col gap-[11px] items-start justify-start w-[auto]">
                        <Text
                          className="font-medium font-oswald leading-[28.00px] text-left text-white_A700 uppercase w-[100%]"
                          as="h6"
                          variant="h6"
                        >
                          5 advantages why you should visit barbershop
                        </Text>
                        <Text
                          className="capitalize font-medium font-roboto text-deep_orange_A700 text-left w-[auto]"
                          variant="body2"
                        >
                          13 October, 2021
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 items-center justify-start w-[100%]">
                    <div className="flex flex-row gap-[15px] items-start justify-between w-[100%]">
                      <div className="flex h-[100px] items-center justify-start w-[100px]">
                        <Img
                          src="images/img_handsomebarber_100x100.png"
                          className="h-[100px] md:h-[auto] object-cover w-[100px]"
                          alt="handsomebarber"
                        />
                      </div>
                      <div className="flex flex-col gap-[11px] items-start justify-start w-[auto]">
                        <Text
                          className="font-medium font-oswald leading-[28.00px] text-left text-white_A700 uppercase w-[100%]"
                          as="h6"
                          variant="h6"
                        >
                          popular COSMETICS FOR HAIR STYLING
                        </Text>
                        <Text
                          className="capitalize font-medium font-roboto text-deep_orange_A700 text-left w-[auto]"
                          variant="body2"
                        >
                          12 October, 2021
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 items-center justify-start w-[100%]">
                    <div className="flex flex-row gap-[15px] items-start justify-between w-[100%]">
                      <div className="flex h-[100px] items-center justify-start w-[100px]">
                        <Img
                          src="images/img_thebarberdres_100x100.png"
                          className="h-[100px] md:h-[auto] object-cover w-[100px]"
                          alt="thebarberdres"
                        />
                      </div>
                      <div className="flex flex-col gap-[11px] items-start justify-start w-[auto]">
                        <Text
                          className="font-medium font-oswald leading-[28.00px] text-left text-white_A700 uppercase w-[100%]"
                          as="h6"
                          variant="h6"
                        >
                          Features of beard and mustache care
                        </Text>
                        <Text
                          className="capitalize font-medium font-roboto text-deep_orange_A700 text-left w-[auto]"
                          variant="body2"
                        >
                          09 October, 2021
                        </Text>
                      </div>
                    </div>
                  </div>
                </List>
              </div>
              <div className="flex flex-col items-start justify-start mt-[70px] md:w-[100%] w-[auto]">
                <Text
                  className="text-left text-white_A700 uppercase w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  categories
                </Text>
                <Text
                  className="font-medium mt-[22px] text-left text-white_A700 uppercase w-[auto]"
                  variant="body2"
                >
                  haircut
                </Text>
                <Text
                  className="font-medium mt-[15px] text-left text-white_A700 uppercase w-[auto]"
                  variant="body2"
                >
                  beard care
                </Text>
                <Text
                  className="font-medium mt-[15px] text-left text-white_A700 uppercase w-[auto]"
                  variant="body2"
                >
                  cosmetics
                </Text>
              </div>
              <div className="flex items-center justify-start mt-[70px] md:w-[100%] w-[93%]">
                <div className="flex flex-col items-start justify-start w-[100%]">
                  <Text
                    className="text-left text-white_A700 uppercase w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    tags
                  </Text>
                  <div className="flex flex-row gap-[15px] items-center justify-between mt-[27px] w-[100%]">
                    <Button
                      className="cursor-pointer font-medium min-w-[79px] text-[14px] text-center text-white_A700 uppercase w-[auto]"
                      size="sm"
                      variant="FillDeeporangeA700"
                    >
                      hairstyle
                    </Button>
                    <Button
                      className="cursor-pointer font-medium min-w-[56px] text-[14px] text-center text-white_A700 uppercase w-[auto]"
                      size="sm"
                      variant="FillDeeporangeA700"
                    >
                      shave
                    </Button>
                    <Button
                      className="cursor-pointer font-medium min-w-[57px] text-[14px] text-center text-white_A700 uppercase w-[auto]"
                      size="sm"
                      variant="FillDeeporangeA700"
                    >
                      beard
                    </Button>
                    <Button
                      className="cursor-pointer font-medium min-w-[83px] text-[14px] text-center text-white_A700 uppercase w-[auto]"
                      size="sm"
                      variant="FillDeeporangeA700"
                    >
                      cosmetics
                    </Button>
                  </div>
                  <div className="flex flex-row gap-[15px] items-center justify-start mt-[15px] md:w-[100%] w-[75%]">
                    <Button
                      className="cursor-pointer font-medium min-w-[60px] text-[14px] text-center text-white_A700 uppercase w-[auto]"
                      size="sm"
                      variant="FillDeeporangeA700"
                    >
                      dyeing
                    </Button>
                    <Button
                      className="cursor-pointer font-medium min-w-[80px] text-[14px] text-center text-white_A700 uppercase w-[auto]"
                      size="sm"
                      variant="FillDeeporangeA700"
                    >
                      mustache
                    </Button>
                    <Button
                      className="cursor-pointer font-medium min-w-[69px] text-[14px] text-center text-white_A700 uppercase w-[auto]"
                      size="sm"
                      variant="FillDeeporangeA700"
                    >
                      haircut
                    </Button>
                  </div>
                </div>
              </div>
              <div className="h-[440px] md:h-[510px] mt-[70px] relative w-[100%]">
                <Img
                  src="images/img_img_440x345.png"
                  className="h-[440px] m-[auto] object-cover w-[100%]"
                  alt="img"
                />
                <div className="absolute flex flex-col inset-x-[0] items-start justify-start mx-[auto] top-[16%] w-[80%]">
                  <Text
                    className="font-oswald leading-[32.00px] text-left text-white_A700 uppercase sm:w-[100%] w-[78%]"
                    as="h5"
                    variant="h5"
                  >
                    bring a friend and get a 10% discount card
                  </Text>
                  <Text
                    className="font-medium font-roboto leading-[32.00px] mt-[10px] text-gray_400 text-left w-[100%]"
                    as="h6"
                    variant="h6"
                  >
                    Nullam feugiat integer mi enim arcu, interdum faucibus.
                  </Text>
                  <Button
                    className="cursor-pointer font-medium font-oswald min-w-[110px] mt-[28px] text-[14px] text-center text-white_A700 uppercase w-[auto]"
                    size="md"
                    variant="FillDeeporangeA700"
                  >
                    learn more
                  </Button>
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

export default InnerBlogPage;
