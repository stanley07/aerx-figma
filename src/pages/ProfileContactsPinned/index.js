import React from "react";

import {
  Row,
  Column,
  Img,
  Text,
  Stack,
  Button,
  Line,
  List,
  Input,
  Grid,
} from "components";
import { CloseSVG } from "../../assets/images/index.js";

const ProfileContactsPinnedPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Row className="bg-black_900 flex flex-row md:flex-wrap sm:flex-wrap font-poppins items-center mx-[auto] sm:pr-[15px] md:pr-[16px] pr-[24px] w-[100%]">
        <aside className="md:hidden sm:hidden w-[18%]">
          <div className="">
            <Column className="bg-gray_901 flex flex-col items-center justify-start pt-[4px] w-[100%]">
              <Img
                src="images/img_signal.svg"
                className="md:h-[12px] h-[16px] sm:h-[9px] max-w-[16px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%] md:w-[11px] sm:w-[8px]"
                alt="signal"
              />
              <Column className="flex flex-col items-center justify-start max-w-[113px] ml-[auto] mr-[auto] mt-[10px] sm:mt-[5px] md:mt-[6px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
                <Text
                  className="font-medium text-white_A700 tracking-ls028 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Pinned contacts
                </Text>
                <Text
                  className="font-normal sm:mt-[4px] md:mt-[5px] mt-[8px] not-italic text-white_A700_75 tracking-ls024 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Select up to 4 users
                </Text>
              </Column>
              <Column className="bg-gray_900_a2 flex flex-col justify-start max-w-[226px] ml-[auto] mr-[auto] mt-[12px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] p-[12px] sm:p-[6px] md:p-[8px] sm:pl-[15px] sm:pr-[15px] rounded-radius10 w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[33%]">
                  <Img
                    src="images/img_search.svg"
                    className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                    alt="search"
                  />
                  <Text
                    className="flex-grow font-normal sm:ml-[4px] md:ml-[5px] ml-[8px] not-italic text-white_A700_75"
                    as="h5"
                    variant="h5"
                  >
                    Search
                  </Text>
                </Row>
              </Column>
              <Stack className="h-[565px] md:mt-[11px] mt-[16px] sm:mt-[8px] relative w-[100%]">
                <Column className="absolute flex flex-col inset-x-[5%] items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[91%]">
                  <Column className="flex flex-col items-center justify-start w-[100%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                      <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[22%]">
                        <Img
                          src="images/img_squircle_3.png"
                          className="sm:h-[26px] md:h-[34px] h-[48px] rounded-radius50 w-[100%]"
                          alt="Squircle"
                        />
                        <Text
                          className="font-medium sm:mt-[4px] md:mt-[5px] mt-[8px] text-white_A700 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Anna
                        </Text>
                      </Column>
                      <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[22%]">
                        <Img
                          src="images/img_squircle_2.png"
                          className="sm:h-[26px] md:h-[34px] h-[48px] rounded-radius50 w-[100%]"
                          alt="Squircle One"
                        />
                        <Text
                          className="font-medium mt-[10px] sm:mt-[5px] md:mt-[6px] text-white_A700 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Marry
                        </Text>
                      </Column>
                      <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[22%]">
                        <Img
                          src="images/img_squircle_1.png"
                          className="sm:h-[26px] md:h-[34px] h-[48px] rounded-radius50 w-[100%]"
                          alt="Squircle Two"
                        />
                        <Text
                          className="font-medium sm:mt-[4px] md:mt-[5px] mt-[8px] text-white_A700 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Lian
                        </Text>
                      </Column>
                      <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[22%]">
                        <Img
                          src="images/img_squircle_48X48.png"
                          className="sm:h-[26px] md:h-[34px] h-[48px] rounded-radius50 w-[100%]"
                          alt="Squircle Three"
                        />
                        <Text
                          className="font-medium sm:mt-[4px] md:mt-[5px] mt-[8px] text-white_A700 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Steven
                        </Text>
                      </Column>
                    </Row>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between mt-[11px] sm:mt-[5px] md:mt-[7px] w-[100%]">
                      <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[22%]">
                        <Img
                          src="images/img_squircle_48X48.png"
                          className="sm:h-[26px] md:h-[34px] h-[48px] rounded-radius50 w-[100%]"
                          alt="Squircle Four"
                        />
                        <Text
                          className="font-medium sm:mt-[4px] md:mt-[5px] mt-[8px] text-white_A700 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Steven
                        </Text>
                      </Column>
                      <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[22%]">
                        <Img
                          src="images/img_squircle_1.png"
                          className="sm:h-[26px] md:h-[34px] h-[48px] rounded-radius50 w-[100%]"
                          alt="Squircle Five"
                        />
                        <Text
                          className="font-medium sm:mt-[4px] md:mt-[5px] mt-[8px] text-white_A700 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Lian
                        </Text>
                      </Column>
                      <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[22%]">
                        <Img
                          src="images/img_squircle_2.png"
                          className="sm:h-[26px] md:h-[34px] h-[48px] rounded-radius50 w-[100%]"
                          alt="Squircle Six"
                        />
                        <Text
                          className="font-medium mt-[10px] sm:mt-[5px] md:mt-[6px] text-white_A700 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Marry
                        </Text>
                      </Column>
                      <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[22%]">
                        <Img
                          src="images/img_squircle_3.png"
                          className="sm:h-[26px] md:h-[34px] h-[48px] rounded-radius50 w-[100%]"
                          alt="Squircle Seven"
                        />
                        <Text
                          className="font-medium sm:mt-[4px] md:mt-[5px] mt-[8px] text-white_A700 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Anna
                        </Text>
                      </Column>
                    </Row>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between mt-[11px] sm:mt-[5px] md:mt-[7px] w-[100%]">
                      <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[22%]">
                        <Img
                          src="images/img_squircle_1.png"
                          className="sm:h-[26px] md:h-[34px] h-[48px] rounded-radius50 w-[100%]"
                          alt="Squircle Eight"
                        />
                        <Text
                          className="font-medium sm:mt-[4px] md:mt-[5px] mt-[8px] text-white_A700 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Lian
                        </Text>
                      </Column>
                      <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[22%]">
                        <Img
                          src="images/img_squircle_48X48.png"
                          className="sm:h-[26px] md:h-[34px] h-[48px] rounded-radius50 w-[100%]"
                          alt="Squircle Nine"
                        />
                        <Text
                          className="font-medium sm:mt-[4px] md:mt-[5px] mt-[8px] text-white_A700 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Steven
                        </Text>
                      </Column>
                      <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[22%]">
                        <Img
                          src="images/img_squircle_3.png"
                          className="sm:h-[26px] md:h-[34px] h-[48px] rounded-radius50 w-[100%]"
                          alt="Squircle Ten"
                        />
                        <Text
                          className="font-medium sm:mt-[4px] md:mt-[5px] mt-[8px] text-white_A700 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Anna
                        </Text>
                      </Column>
                      <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[22%]">
                        <Img
                          src="images/img_squircle_2.png"
                          className="sm:h-[26px] md:h-[34px] h-[48px] rounded-radius50 w-[100%]"
                          alt="Squircle Eleven"
                        />
                        <Text
                          className="font-medium mt-[10px] sm:mt-[5px] md:mt-[6px] text-white_A700 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Marry
                        </Text>
                      </Column>
                    </Row>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between mt-[11px] sm:mt-[5px] md:mt-[7px] w-[100%]">
                      <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[22%]">
                        <Img
                          src="images/img_squircle_2.png"
                          className="sm:h-[26px] md:h-[34px] h-[48px] rounded-radius50 w-[100%]"
                          alt="Squircle Twelve"
                        />
                        <Text
                          className="font-medium mt-[10px] sm:mt-[5px] md:mt-[6px] text-white_A700 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Marry
                        </Text>
                      </Column>
                      <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[22%]">
                        <Img
                          src="images/img_squircle_3.png"
                          className="sm:h-[26px] md:h-[34px] h-[48px] rounded-radius50 w-[100%]"
                          alt="Squircle Thirteen"
                        />
                        <Text
                          className="font-medium sm:mt-[4px] md:mt-[5px] mt-[8px] text-white_A700 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Anna
                        </Text>
                      </Column>
                      <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[22%]">
                        <Img
                          src="images/img_squircle_48X48.png"
                          className="sm:h-[26px] md:h-[34px] h-[48px] rounded-radius50 w-[100%]"
                          alt="Squircle Fourteen"
                        />
                        <Text
                          className="font-medium sm:mt-[4px] md:mt-[5px] mt-[8px] text-white_A700 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Steven
                        </Text>
                      </Column>
                      <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[22%]">
                        <Img
                          src="images/img_squircle_1.png"
                          className="sm:h-[26px] md:h-[34px] h-[48px] rounded-radius50 w-[100%]"
                          alt="Squircle Fifteen"
                        />
                        <Text
                          className="font-medium sm:mt-[4px] md:mt-[5px] mt-[8px] text-white_A700 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Lian
                        </Text>
                      </Column>
                    </Row>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between mt-[11px] sm:mt-[5px] md:mt-[7px] w-[100%]">
                      <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[22%]">
                        <Img
                          src="images/img_squircle_48X48.png"
                          className="sm:h-[26px] md:h-[34px] h-[48px] rounded-radius50 w-[100%]"
                          alt="Squircle Sixteen"
                        />
                        <Text
                          className="font-medium sm:mt-[4px] md:mt-[5px] mt-[8px] text-white_A700 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Steven
                        </Text>
                      </Column>
                      <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[22%]">
                        <Img
                          src="images/img_squircle_1.png"
                          className="sm:h-[26px] md:h-[34px] h-[48px] rounded-radius50 w-[100%]"
                          alt="Squircle Seventeen"
                        />
                        <Text
                          className="font-medium sm:mt-[4px] md:mt-[5px] mt-[8px] text-white_A700 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Lian
                        </Text>
                      </Column>
                      <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[22%]">
                        <Img
                          src="images/img_squircle_2.png"
                          className="sm:h-[26px] md:h-[34px] h-[48px] rounded-radius50 w-[100%]"
                          alt="Squircle Eighteen"
                        />
                        <Text
                          className="font-medium mt-[10px] sm:mt-[5px] md:mt-[6px] text-white_A700 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Marry
                        </Text>
                      </Column>
                      <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[22%]">
                        <Img
                          src="images/img_squircle_3.png"
                          className="sm:h-[26px] md:h-[34px] h-[48px] rounded-radius50 w-[100%]"
                          alt="Squircle Nineteen"
                        />
                        <Text
                          className="font-medium sm:mt-[4px] md:mt-[5px] mt-[8px] text-white_A700 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Anna
                        </Text>
                      </Column>
                    </Row>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between mt-[11px] sm:mt-[5px] md:mt-[7px] w-[100%]">
                      <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[22%]">
                        <Img
                          src="images/img_squircle_1.png"
                          className="sm:h-[26px] md:h-[34px] h-[48px] rounded-radius50 w-[100%]"
                          alt="Squircle Twenty"
                        />
                        <Text
                          className="font-medium sm:mt-[4px] md:mt-[5px] mt-[8px] text-white_A700 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Lian
                        </Text>
                      </Column>
                      <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[22%]">
                        <Img
                          src="images/img_squircle_48X48.png"
                          className="sm:h-[26px] md:h-[34px] h-[48px] rounded-radius50 w-[100%]"
                          alt="Squircle TwentyOne"
                        />
                        <Text
                          className="font-medium sm:mt-[4px] md:mt-[5px] mt-[8px] text-white_A700 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Steven
                        </Text>
                      </Column>
                      <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[22%]">
                        <Img
                          src="images/img_squircle_3.png"
                          className="sm:h-[26px] md:h-[34px] h-[48px] rounded-radius50 w-[100%]"
                          alt="Squircle TwentyTwo"
                        />
                        <Text
                          className="font-medium sm:mt-[4px] md:mt-[5px] mt-[8px] text-white_A700 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Anna
                        </Text>
                      </Column>
                      <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[22%]">
                        <Img
                          src="images/img_squircle_2.png"
                          className="sm:h-[26px] md:h-[34px] h-[48px] rounded-radius50 w-[100%]"
                          alt="Squircle TwentyThree"
                        />
                        <Text
                          className="font-medium mt-[10px] sm:mt-[5px] md:mt-[6px] text-white_A700 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Marry
                        </Text>
                      </Column>
                    </Row>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between mt-[11px] sm:mt-[5px] md:mt-[7px] w-[100%]">
                      <Column className="flex flex-col items-center mb-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[22%]">
                        <Img
                          src="images/img_squircle_48X48.png"
                          className="sm:h-[26px] md:h-[34px] h-[48px] rounded-radius50 w-[100%]"
                          alt="Squircle TwentyFour"
                        />
                        <Text
                          className="font-medium sm:mt-[2px] md:mt-[3px] mt-[5px] text-white_A700 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Steven
                        </Text>
                      </Column>
                      <Column className="flex flex-col items-center mb-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[22%]">
                        <Img
                          src="images/img_squircle_1.png"
                          className="sm:h-[26px] md:h-[34px] h-[48px] rounded-radius50 w-[100%]"
                          alt="Squircle TwentyFive"
                        />
                        <Text
                          className="font-medium sm:mt-[2px] md:mt-[3px] mt-[5px] text-white_A700 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Lian
                        </Text>
                      </Column>
                      <Column className="flex flex-col items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[22%]">
                        <Img
                          src="images/img_squircle_2.png"
                          className="sm:h-[26px] md:h-[34px] h-[48px] rounded-radius50 w-[100%]"
                          alt="Squircle TwentySix"
                        />
                        <Text
                          className="font-medium sm:mt-[2px] md:mt-[3px] mt-[5px] text-white_A700 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Marry
                        </Text>
                      </Column>
                      <Column className="flex flex-col items-center mb-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[22%]">
                        <Img
                          src="images/img_squircle_3.png"
                          className="sm:h-[26px] md:h-[34px] h-[48px] rounded-radius50 w-[100%]"
                          alt="Squircle TwentySeven"
                        />
                        <Text
                          className="font-medium sm:mt-[2px] md:mt-[3px] mt-[5px] text-white_A700 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Anna
                        </Text>
                      </Column>
                    </Row>
                  </Column>
                </Column>
                <Column className="absolute bg-gray_901 flex flex-col items-center justify-start p-[12px] sm:p-[6px] md:p-[8px] w-[100%]">
                  <Button
                    className="cursor-pointer font-semibold min-w-[100%] text-[14px] text-center text-white_A700_75 tracking-ls028 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
                    size="lg"
                    variant="FillWhiteA7000c"
                  >
                    Select
                  </Button>
                </Column>
                <div className="absolute bg-gradient  bottom-[11%] sm:h-[26px] md:h-[34px] h-[48px] w-[100%]"></div>
                <Line className="absolute bg-indigo_A200 h-[109px] sm:h-[59px] md:h-[76px] right-[2%] rounded-radius1 top-[0] w-[2px]" />
              </Stack>
            </Column>
          </div>
        </aside>
        <Img
          src="images/img_rewind.svg"
          className="md:h-[12px] h-[16px] sm:h-[9px] max-w-[16px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%] md:w-[11px] sm:w-[8px]"
          alt="rewind"
        />
        <Column className="bg-white_A700_11 flex flex-col items-center max-w-[266px] ml-[auto] mr-[auto] sm:my-[12px] md:my-[16px] my-[24px] p-[12px] sm:p-[6px] md:p-[8px] sm:pl-[15px] sm:pr-[15px] rounded-radius15 w-[100%]">
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:px-[0] w-[100%]">
            <Img
              src="images/img_eye.svg"
              className="sm:h-[18px] md:h-[23px] h-[32px] max-w-[100%] sm:w-[17px] md:w-[22px] w-[32px]"
              alt="eye"
            />
            <Text
              className="capitalize font-medium sm:ml-[3px] md:ml-[4px] ml-[6px] sm:mt-[4px] md:mt-[6px] mt-[9px] text-white_A700 tracking-ls028 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
              as="h4"
              variant="h4"
            >
              Valuengr
            </Text>
            <Img
              src="images/img_overflowmenu.svg"
              className="sm:h-[18px] md:h-[23px] h-[32px] max-w-[100%] ml-[109px] sm:ml-[58px] md:ml-[75px] sm:w-[17px] md:w-[22px] w-[32px]"
              alt="overflowmenu"
            />
          </Row>
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between mt-[12px] sm:mt-[6px] md:mt-[8px] sm:px-[0] w-[100%]">
            <Img
              src="images/img_arrowleft.svg"
              className="sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
              alt="arrowleft"
            />
            <Img
              src="images/img_ellipse705.png"
              className="sm:h-[18px] md:h-[23px] h-[32px] rounded-radius50 sm:w-[17px] md:w-[22px] w-[32px]"
              alt="Ellipse705"
            />
            <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[43%]">
              <Text
                className="font-medium text-white_A700 tracking-ls028 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                as="h4"
                variant="h4"
              >
                Anna Bilyk
              </Text>
              <Text
                className="font-normal mt-[1px] not-italic text-white_A700_7f tracking-ls024 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                as="h5"
                variant="h5"
              >
                last seen recently
              </Text>
            </Column>
            <Img
              src="images/img_call.svg"
              className="sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
              alt="call"
            />
            <Img
              src="images/img_file.svg"
              className="sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
              alt="file"
            />
          </Row>
          <Column className="flex flex-col items-center justify-start mt-[12px] sm:mt-[6px] md:mt-[8px] sm:px-[0] w-[100%]">
            <Column className="flex flex-col items-end justify-start w-[100%]">
              <Column className="bg-white_A700_0c flex flex-col items-center justify-start sm:mx-[0] pb-[12px] sm:pb-[6px] md:pb-[8px] px-[12px] sm:px-[6px] md:px-[8px] rounded-bl-[15px] rounded-br-[2px] rounded-tl-[15px] rounded-tr-[15px] sm:w-[100%] w-[92%]">
                <Text
                  className="font-normal leading-[130.00%] md:mb-[12px] mb-[18px] sm:mb-[9px] not-italic text-white_A700 w-[100%]"
                  as="h5"
                  variant="h5"
                >
                  Lorem ipsum dolor sit amet consectetur.
                  <br />
                  Quisque nisl proin morbi tellus sed pretium turpis.
                  Condimentum arcu sed dui rhoncus id in vitae ac.
                </Text>
              </Column>
              <Column className="flex flex-col justify-start sm:mt-[4px] md:mt-[5px] mt-[8px] w-[100%]">
                <List
                  className="sm:gap-[4px] md:gap-[5px] gap-[8px] grid min-h-[auto] w-[100%]"
                  orientation="vertical"
                >
                  <Column className="bg-deep_purple_200 flex flex-col items-end justify-start md:mr-[13px] mr-[20px] sm:mx-[0] my-[0] pl-[10px] sm:pl-[5px] md:pl-[6px] py-[10px] sm:py-[5px] md:py-[6px] rounded-bl-[2px] rounded-br-[15px] rounded-tl-[15px] rounded-tr-[15px] sm:w-[100%] w-[92%]">
                    <Column className="flex flex-col justify-start mb-[2px] sm:px-[0] w-[100%]">
                      <Text
                        className="font-normal leading-[130.00%] not-italic text-white_A700 w-[100%]"
                        as="h5"
                        variant="h5"
                      >
                        Lorem ipsum dolor sit amet, consectet adipiscing elit ut
                      </Text>
                      <Text
                        className="font-normal mt-[4px] not-italic text-white_A700_7f w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        22:51
                      </Text>
                    </Column>
                  </Column>
                  <Column className="bg-white_A700_0c flex flex-col items-center justify-start md:ml-[13px] ml-[20px] sm:mx-[0] my-[0] p-[10px] sm:p-[5px] md:p-[6px] rounded-bl-[15px] rounded-br-[2px] rounded-tl-[15px] rounded-tr-[15px] sm:w-[100%] w-[92%]">
                    <Column className="flex flex-col justify-start mb-[2px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
                      <Text
                        className="font-normal leading-[130.00%] not-italic text-white_A700 w-[100%]"
                        as="h5"
                        variant="h5"
                      >
                        Lorem ipsum dolor sit amet, consectet adipiscing elit ut
                        ali
                      </Text>
                      <Text
                        className="font-normal mt-[4px] not-italic text-white_A700_7f w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        22:51
                      </Text>
                    </Column>
                  </Column>
                </List>
                <Column className="bg-deep_purple_200 flex flex-col items-center justify-start sm:mt-[4px] md:mt-[5px] mt-[8px] sm:mx-[0] p-[10px] sm:p-[5px] md:p-[6px] rounded-bl-[2px] rounded-br-[15px] rounded-tl-[15px] rounded-tr-[15px] sm:w-[100%] w-[92%]">
                  <Column className="flex flex-col justify-start mb-[2px] sm:px-[0] w-[100%]">
                    <Text
                      className="font-normal leading-[130.00%] not-italic text-white_A700 w-[100%]"
                      as="h5"
                      variant="h5"
                    >
                      Lorem ipsum dolor sit amet consectetur.
                      <br />
                      Quisque nisl proin morbi tellus sed pretium turpis.
                      Condimentum arcu sed dui rhoncus id in vitae ac.
                    </Text>
                    <Text
                      className="font-normal mt-[4px] not-italic text-white_A700_7f w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      22:51
                    </Text>
                  </Column>
                </Column>
                <Column className="bg-white_A700_0c flex flex-col justify-start md:ml-[13px] ml-[20px] sm:mt-[4px] md:mt-[5px] mt-[8px] sm:mx-[0] pl-[12px] sm:pl-[6px] md:pl-[8px] py-[12px] sm:py-[6px] md:py-[8px] rounded-bl-[15px] rounded-br-[2px] rounded-tl-[15px] rounded-tr-[15px] sm:w-[100%] w-[92%]">
                  <Column
                    className="bg-cover bg-no-repeat flex flex-col justify-start sm:mx-[0] sm:p-[3px] md:p-[4px] p-[6px] rounded-radius5 sm:w-[100%] w-[95%]"
                    style={{
                      backgroundImage: "url('images/img_group14991.png')",
                    }}
                  >
                    <Button
                      className="cursor-pointer font-normal sm:mb-[41px] md:mb-[53px] mb-[78px] min-w-[24%] not-italic text-[12px] text-center text-white_A700 tracking-ls024 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
                      variant="Outline"
                    >
                      35:11
                    </Button>
                  </Column>
                  <Column className="flex flex-col justify-start mb-[1px] mt-[10px] sm:mt-[5px] md:mt-[6px] sm:px-[0] w-[100%]">
                    <Text
                      className="font-normal leading-[130.00%] not-italic text-white_A700 w-[100%]"
                      as="h5"
                      variant="h5"
                    >
                      Lorem ipsum dolor sit amet, consectet adipiscing elit ut
                      ali
                    </Text>
                    <Text
                      className="font-normal mt-[4px] not-italic text-white_A700_7f w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      22:51
                    </Text>
                  </Column>
                </Column>
              </Column>
            </Column>
          </Column>
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between mt-[12px] sm:mt-[6px] md:mt-[8px] sm:px-[0] w-[100%]">
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[60%]">
              <Img
                src="images/img_trash.svg"
                className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                alt="trash"
              />
              <Text
                className="flex-grow font-normal sm:ml-[3px] md:ml-[4px] ml-[6px] mt-[3px] not-italic text-white_A700_75 tracking-ls028 md:tracking-ls1 sm:tracking-ls1"
                as="h4"
                variant="h4"
              >
                Type something...
              </Text>
            </Row>
            <Button
              className="flex sm:h-[20px] md:h-[25px] h-[36px] items-center justify-center rounded-radius50 sm:w-[19px] md:w-[24px] w-[36px]"
              size="smIcn"
              variant="icbOutline"
            >
              <Img
                src="images/img_airplane.svg"
                className="h-[20px] sm:h-[11px] md:h-[14px] flex items-center justify-center"
                alt="airplane"
              />
            </Button>
          </Row>
        </Column>
        <Column className="bg-white_A700_11 flex flex-col items-center max-w-[562px] sm:ml-[12px] md:ml-[16px] ml-[auto] mr-[auto] sm:my-[12px] md:my-[16px] my-[24px] sm:pl-[15px] sm:pr-[15px] pt-[12px] sm:pt-[6px] md:pt-[8px] px-[12px] sm:px-[6px] md:px-[8px] rounded-radius15 w-[100%]">
          <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
              <Img
                src="images/img_reply.svg"
                className="sm:h-[18px] md:h-[23px] h-[32px] max-w-[100%] sm:w-[17px] md:w-[22px] w-[32px]"
                alt="reply"
              />
              <Text
                className="capitalize font-medium sm:mt-[4px] md:mt-[6px] mt-[9px] text-white_A700 tracking-ls028 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                as="h4"
                variant="h4"
              >
                My flow
              </Text>
              <Input
                value={inputvalue}
                onChange={(e) => setInputvalue(e?.target?.value)}
                className="font-normal not-italic p-[0] text-[14px] placeholder:text-white_A700_75 text-white_A700_75 w-[100%]"
                wrapClassName="flex sm:mx-[0] sm:w-[100%] w-[43%]"
                name="Group14927"
                placeholder="Search"
                prefix={
                  <Img
                    src="images/img_search.svg"
                    className="cursor-pointer ml-[1px] mr-[6px] sm:mr-[3px] md:mr-[4px] my-[auto]"
                    alt="search"
                  />
                }
                suffix={
                  inputvalue?.length > 0 ? (
                    <CloseSVG
                      color="#75ffffff"
                      className="cursor-pointer ml-[10px] mr-[22px] sm:mr-[11px] sm:ml-[5px] md:mr-[15px] md:ml-[6px] my-[auto]"
                      onClick={() => setInputvalue("")}
                    />
                  ) : (
                    ""
                  )
                }
              ></Input>
              <Button
                className="flex items-center justify-center min-w-[16%] text-center w-[max-content]"
                leftIcon={
                  <Img
                    src="images/img_location_20X20.svg"
                    className="mr-[6px] sm:mr-[3px] md:mr-[4px] text-center"
                    alt="location"
                  />
                }
                size="md"
                variant="FillWhiteA7000c"
              >
                <div className="bg-transparent cursor-pointer font-medium text-[14px] text-white_A700">
                  31134
                </div>
              </Button>
              <Button
                className="flex sm:h-[18px] md:h-[23px] h-[32px] items-center justify-center sm:w-[17px] md:w-[22px] w-[32px]"
                shape="icbRoundedBorder8"
                size="smIcn"
                variant="icbFillWhiteA7000c"
              >
                <Img
                  src="images/img_settings.svg"
                  className="h-[20px] sm:h-[11px] md:h-[14px] flex items-center justify-center"
                  alt="settings"
                />
              </Button>
              <Button
                className="flex sm:h-[18px] md:h-[23px] h-[32px] items-center justify-center sm:w-[17px] md:w-[22px] w-[32px]"
                shape="icbRoundedBorder8"
                size="lgIcn"
                variant="icbFillIndigoA200"
              >
                <Img
                  src="images/img_plus.svg"
                  className="h-[8px] sm:h-[5px] md:h-[6px] flex items-center justify-center"
                  alt="plus"
                />
              </Button>
              <Img
                src="images/img_overflowmenu.svg"
                className="sm:h-[18px] md:h-[23px] h-[32px] max-w-[100%] sm:w-[17px] md:w-[22px] w-[32px]"
                alt="overflowmenu One"
              />
            </Row>
            <Column className="flex flex-col items-center justify-start mt-[12px] sm:mt-[6px] md:mt-[8px] rounded-bl-[15px] rounded-br-[15px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
              <Column className="flex flex-col items-center justify-end rounded-bl-[15px] rounded-br-[15px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                  <Column
                    className="bg-cover bg-no-repeat flex flex-col items-center sm:mx-[0] p-[12px] sm:p-[6px] md:p-[8px] rounded-radius10 sm:w-[100%] w-[32%]"
                    style={{
                      backgroundImage: "url('images/img_group15197.png')",
                    }}
                  >
                    <Column className="flex flex-col justify-start sm:px-[0] w-[100%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[71%]">
                        <Img
                          src="images/img_ellipse676.png"
                          className="sm:h-[18px] md:h-[23px] h-[32px] rounded-radius50 sm:w-[17px] md:w-[22px] w-[32px]"
                          alt="Ellipse675"
                        />
                        <Text
                          className="flex-grow font-semibold sm:ml-[3px] md:ml-[4px] ml-[6px] text-white_A700 tracking-ls024 md:tracking-ls1 sm:tracking-ls1"
                          as="h5"
                          variant="h5"
                        >
                          Scriptonite
                        </Text>
                      </Row>
                      <Stack
                        className="bg-cover bg-no-repeat h-[147px] md:mt-[11px] mt-[17px] sm:mt-[9px] sm:p-[15px] md:p-[43px] p-[63px] relative rounded-radius5 md:w-[101px] w-[147px] sm:w-[78px]"
                        style={{
                          backgroundImage: "url('images/img_group14932.png')",
                        }}
                      >
                        <Img
                          src="images/img_play.svg"
                          className="absolute h-[20px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                          alt="play"
                        />
                      </Stack>
                      <Column className="flex flex-col items-center justify-start md:ml-[28px] ml-[42px] mt-[10px] sm:mt-[5px] md:mt-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[43%]">
                        <Text
                          className="font-semibold text-white_A700 tracking-ls024 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Mr 718
                        </Text>
                        <Text
                          className="font-normal mt-[2px] not-italic text-white_A700 tracking-ls024 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Scriptonite
                        </Text>
                      </Column>
                      <Column className="flex flex-col items-center justify-start mt-[14px] sm:mt-[7px] md:mt-[9px] w-[100%]">
                        <Column className="flex flex-col items-center justify-start w-[100%]">
                          <Img
                            src="images/img_group13963.svg"
                            className="max-w-[100%] w-[100%]"
                            alt="Group13963"
                          />
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[4px] md:mt-[5px] mt-[8px] w-[100%]">
                            <Text
                              className="font-normal not-italic text-white_A700_87 tracking-ls024 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              0:46
                            </Text>
                            <Text
                              className="font-normal not-italic text-white_A700_87 tracking-ls024 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              -3:12
                            </Text>
                          </Row>
                        </Column>
                      </Column>
                      <Img
                        src="images/img_group14934.svg"
                        className="max-w-[100%] mt-[12px] sm:mt-[6px] md:mt-[8px] w-[100%]"
                        alt="Group14929"
                      />
                    </Column>
                  </Column>
                  <Column
                    className="bg-cover bg-no-repeat flex flex-col items-center sm:mx-[0] p-[12px] sm:p-[6px] md:p-[8px] rounded-radius10 sm:w-[100%] w-[66%]"
                    style={{
                      backgroundImage:
                        "url('images/img_group15194_316X329.png')",
                    }}
                  >
                    <Column className="flex flex-col justify-start sm:px-[0] w-[100%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[37%]">
                        <Img
                          src="images/img_ellipse676_32X32.png"
                          className="sm:h-[18px] md:h-[23px] h-[32px] rounded-radius50 sm:w-[17px] md:w-[22px] w-[32px]"
                          alt="Ellipse676"
                        />
                        <Text
                          className="flex-grow font-semibold sm:ml-[3px] md:ml-[4px] ml-[6px] text-white_A700 tracking-ls024 md:tracking-ls1 sm:tracking-ls1"
                          as="h5"
                          variant="h5"
                        >
                          Pavel Dantsev
                        </Text>
                      </Row>
                      <Text
                        className="md:mt-[107px] mt-[156px] sm:mt-[83px] text-white_A700 w-[auto]"
                        as="h2"
                        variant="h2"
                      >
                        Hello for the team at City of Orange
                      </Text>
                      <Text
                        className="font-normal leading-[130.00%] sm:mt-[3px] md:mt-[4px] mt-[6px] not-italic text-white_A700 w-[100%]"
                        as="h4"
                        variant="h4"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ullamcorper eu felis morbi fringilla.
                      </Text>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:mt-[11px] mt-[16px] sm:mt-[8px] w-[100%]">
                        <Img
                          src="images/img_refresh.svg"
                          className="sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                          alt="refresh"
                        />
                        <Img
                          src="images/img_arrowright_white_A700.svg"
                          className="sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] md:ml-[12px] ml-[18px] sm:ml-[9px] sm:w-[10px] md:w-[13px] w-[20px]"
                          alt="arrowright"
                        />
                        <Img
                          src="images/img_bookmark.svg"
                          className="sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] md:ml-[12px] ml-[18px] sm:ml-[9px] sm:w-[10px] md:w-[13px] w-[20px]"
                          alt="bookmark"
                        />
                        <Button
                          className="flex items-center justify-center md:ml-[72px] min-w-[27%] ml-[106px] sm:ml-[56px] text-center w-[max-content]"
                          leftIcon={
                            <Img
                              src="images/img_nft.svg"
                              className="mr-[6px] sm:mr-[3px] md:mr-[4px] text-center"
                              alt="NFT"
                            />
                          }
                          shape="CircleBorder16"
                          size="md"
                          variant="Outline_1"
                        >
                          <div className="bg-transparent cursor-pointer font-semibold text-[12px] text-white_A700 tracking-ls024 md:tracking-ls1 sm:tracking-ls1">
                            0x47ec
                          </div>
                        </Button>
                        <Button
                          className="flex sm:h-[18px] md:h-[23px] h-[32px] items-center justify-center sm:ml-[4px] md:ml-[5px] ml-[8px] sm:w-[17px] md:w-[22px] w-[32px]"
                          shape="icbCircleBorder18"
                          size="smIcn"
                          variant="icbOutline_1"
                        >
                          <Img
                            src="images/img_airplane.svg"
                            className="h-[20px] sm:h-[11px] md:h-[14px] flex items-center justify-center"
                            alt="airplane One"
                          />
                        </Button>
                      </Row>
                    </Column>
                  </Column>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between mt-[12px] sm:mt-[6px] md:mt-[8px] w-[100%]">
                  <Column
                    className="bg-cover bg-no-repeat flex flex-col items-center sm:mx-[0] p-[12px] sm:p-[6px] md:p-[8px] rounded-radius10 sm:w-[100%] w-[66%]"
                    style={{
                      backgroundImage: "url('images/img_group14937.png')",
                    }}
                  >
                    <Column className="flex flex-col justify-start sm:px-[0] w-[100%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[37%]">
                        <Img
                          src="images/img_ellipse676_32X32.png"
                          className="sm:h-[18px] md:h-[23px] h-[32px] rounded-radius50 sm:w-[17px] md:w-[22px] w-[32px]"
                          alt="Ellipse676 One"
                        />
                        <Text
                          className="flex-grow font-semibold sm:ml-[3px] md:ml-[4px] ml-[6px] text-white_A700 tracking-ls024 md:tracking-ls1 sm:tracking-ls1"
                          as="h5"
                          variant="h5"
                        >
                          Pavel Dantsev
                        </Text>
                      </Row>
                      <Text
                        className="md:mt-[107px] mt-[156px] sm:mt-[83px] text-white_A700 w-[auto]"
                        as="h2"
                        variant="h2"
                      >
                        Hello for the team at City of Orange
                      </Text>
                      <Text
                        className="font-normal sm:mt-[3px] md:mt-[4px] mt-[6px] not-italic text-white_A700 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ullamcorper eu felis morbi fringilla.
                      </Text>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[28px] md:mt-[37px] mt-[54px] w-[100%]">
                        <Img
                          src="images/img_refresh.svg"
                          className="sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                          alt="refresh One"
                        />
                        <Img
                          src="images/img_arrowright_white_A700.svg"
                          className="sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] md:ml-[12px] ml-[18px] sm:ml-[9px] sm:w-[10px] md:w-[13px] w-[20px]"
                          alt="arrowright One"
                        />
                        <Img
                          src="images/img_bookmark.svg"
                          className="sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] md:ml-[12px] ml-[18px] sm:ml-[9px] sm:w-[10px] md:w-[13px] w-[20px]"
                          alt="bookmark One"
                        />
                        <Button
                          className="flex items-center justify-center md:ml-[72px] min-w-[27%] ml-[106px] sm:ml-[56px] text-center w-[max-content]"
                          leftIcon={
                            <Img
                              src="images/img_nft.svg"
                              className="mr-[6px] sm:mr-[3px] md:mr-[4px] text-center"
                              alt="NFT"
                            />
                          }
                          shape="CircleBorder16"
                          size="md"
                          variant="Outline_1"
                        >
                          <div className="bg-transparent cursor-pointer font-semibold text-[12px] text-white_A700 tracking-ls024 md:tracking-ls1 sm:tracking-ls1">
                            0x47ec
                          </div>
                        </Button>
                        <Button
                          className="flex sm:h-[18px] md:h-[23px] h-[32px] items-center justify-center sm:ml-[4px] md:ml-[5px] ml-[8px] sm:w-[17px] md:w-[22px] w-[32px]"
                          shape="icbCircleBorder18"
                          size="smIcn"
                          variant="icbOutline_1"
                        >
                          <Img
                            src="images/img_airplane.svg"
                            className="h-[20px] sm:h-[11px] md:h-[14px] flex items-center justify-center"
                            alt="airplane Two"
                          />
                        </Button>
                      </Row>
                    </Column>
                  </Column>
                  <Column
                    className="bg-cover bg-no-repeat flex flex-col items-center sm:mx-[0] p-[12px] sm:p-[6px] md:p-[8px] rounded-radius10 sm:w-[100%] w-[32%]"
                    style={{
                      backgroundImage: "url('images/img_group15202.png')",
                    }}
                  >
                    <Column className="flex flex-col justify-start sm:px-[0] w-[100%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[69%]">
                        <Img
                          src="images/img_ellipse676_1.png"
                          className="sm:h-[18px] md:h-[23px] h-[32px] rounded-radius50 sm:w-[17px] md:w-[22px] w-[32px]"
                          alt="Ellipse676 Two"
                        />
                        <Text
                          className="flex-grow font-semibold sm:ml-[3px] md:ml-[4px] ml-[6px] text-white_A700 tracking-ls024 md:tracking-ls1 sm:tracking-ls1"
                          as="h5"
                          variant="h5"
                        >
                          Anna Bilyk
                        </Text>
                      </Row>
                      <Column className="flex flex-col items-center justify-start md:ml-[33px] ml-[49px] sm:mt-[49px] md:mt-[63px] mt-[92px] sm:mx-[0] sm:px-[0] rounded-radius245 sm:w-[100%] w-[34%]">
                        <Img
                          src="images/img_fire.svg"
                          className="sm:h-[18px] md:h-[23px] h-[32px] rounded-radius50 sm:w-[17px] md:w-[22px] w-[32px]"
                          alt="fire"
                        />
                        <Text
                          className="font-semibold sm:mt-[3px] md:mt-[4px] mt-[6px] text-white_A700 tracking-ls028 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Tempo
                        </Text>
                        <Text
                          className="font-normal mt-[4px] not-italic text-white_A700 tracking-ls024 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          3:12
                        </Text>
                      </Column>
                      <Img
                        src="images/img_group14938.svg"
                        className="max-w-[100%] sm:mt-[49px] md:mt-[63px] mt-[92px] w-[100%]"
                        alt="Group14938"
                      />
                    </Column>
                  </Column>
                </Row>
              </Column>
            </Column>
          </Column>
        </Column>
        <Column className="bg-white_A700_11 flex flex-col items-center max-w-[266px] sm:ml-[12px] md:ml-[16px] ml-[auto] mr-[auto] sm:my-[12px] md:my-[16px] my-[24px] sm:pl-[15px] sm:pr-[15px] pt-[12px] sm:pt-[6px] md:pt-[8px] px-[12px] sm:px-[6px] md:px-[8px] rounded-radius15 w-[100%]">
          <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
            <Column className="flex flex-col items-center justify-start w-[100%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center w-[100%]">
                <Img
                  src="images/img_location_32X32.svg"
                  className="sm:h-[18px] md:h-[23px] h-[32px] max-w-[100%] sm:w-[17px] md:w-[22px] w-[32px]"
                  alt="location One"
                />
                <Text
                  className="capitalize font-medium sm:ml-[3px] md:ml-[4px] ml-[6px] text-white_A700 tracking-ls028 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Collections
                </Text>
                <Img
                  src="images/img_overflowmenu.svg"
                  className="sm:h-[18px] md:h-[23px] h-[32px] max-w-[100%] sm:ml-[51px] md:ml-[66px] ml-[96px] sm:w-[17px] md:w-[22px] w-[32px]"
                  alt="overflowmenu Two"
                />
              </Row>
              <Row className="bg-white_A700_0c flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between mt-[12px] sm:mt-[6px] md:mt-[8px] sm:p-[4px] md:p-[5px] p-[8px] rounded-radius16 w-[100%]">
                <Text
                  className="flex-grow font-normal sm:ml-[4px] md:ml-[5px] ml-[8px] not-italic text-white_A700"
                  as="h5"
                  variant="h5"
                >
                  My Collections
                </Text>
                <Img
                  src="images/img_arrowright.svg"
                  className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] sm:mr-[4px] md:mr-[5px] mr-[8px] md:w-[11px] w-[16px] sm:w-[8px]"
                  alt="arrowright Two"
                />
              </Row>
            </Column>
            <Column className="flex flex-col items-center justify-start mt-[12px] sm:mt-[6px] md:mt-[8px] rounded-bl-[15px] rounded-br-[15px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
              <Column className="flex flex-col items-center justify-end rounded-bl-[15px] rounded-br-[15px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                <Grid className="gap-[12px] sm:gap-[6px] md:gap-[8px] grid sm:grid-cols-1 grid-cols-2 min-h-[auto] w-[100%]">
                  <Column
                    className="bg-cover bg-no-repeat flex flex-col items-center justify-end sm:p-[3px] md:p-[4px] p-[6px] rounded-radius10 w-[100%]"
                    style={{
                      backgroundImage: "url('images/img_group15253.png')",
                    }}
                  >
                    <Button className="cursor-pointer font-medium min-w-[77%] sm:mt-[52px] md:mt-[67px] mt-[98px] text-[12px] text-center text-white_A700 w-[max-content]">
                      12,03 AEX
                    </Button>
                  </Column>
                  <Column
                    className="bg-cover bg-no-repeat flex flex-col items-center justify-end sm:p-[3px] md:p-[4px] p-[6px] rounded-radius10 w-[100%]"
                    style={{
                      backgroundImage: "url('images/img_group14974.png')",
                    }}
                  >
                    <Button className="cursor-pointer font-medium min-w-[77%] sm:mt-[52px] md:mt-[67px] mt-[98px] text-[12px] text-center text-white_A700 w-[max-content]">
                      12,03 AEX
                    </Button>
                  </Column>
                  <Column
                    className="bg-cover bg-no-repeat flex flex-col items-center justify-end sm:p-[3px] md:p-[4px] p-[6px] rounded-radius10 w-[100%]"
                    style={{
                      backgroundImage: "url('images/img_group14976.png')",
                    }}
                  >
                    <Button className="cursor-pointer font-medium min-w-[77%] sm:mt-[52px] md:mt-[67px] mt-[98px] text-[12px] text-center text-white_A700 w-[max-content]">
                      12,03 AEX
                    </Button>
                  </Column>
                  <Column
                    className="bg-cover bg-no-repeat flex flex-col items-center justify-end sm:p-[3px] md:p-[4px] p-[6px] rounded-radius10 w-[100%]"
                    style={{
                      backgroundImage: "url('images/img_group14977.png')",
                    }}
                  >
                    <Button className="cursor-pointer font-medium min-w-[77%] sm:mt-[52px] md:mt-[67px] mt-[98px] text-[12px] text-center text-white_A700 w-[max-content]">
                      12,03 AEX
                    </Button>
                  </Column>
                  <Column
                    className="bg-cover bg-no-repeat flex flex-col items-center justify-end sm:p-[3px] md:p-[4px] p-[6px] rounded-radius10 w-[100%]"
                    style={{
                      backgroundImage: "url('images/img_group15253.png')",
                    }}
                  >
                    <Button className="cursor-pointer font-medium min-w-[77%] sm:mt-[52px] md:mt-[67px] mt-[98px] text-[12px] text-center text-white_A700 w-[max-content]">
                      12,03 AEX
                    </Button>
                  </Column>
                  <Column
                    className="bg-cover bg-no-repeat flex flex-col items-center justify-end sm:p-[3px] md:p-[4px] p-[6px] rounded-radius10 w-[100%]"
                    style={{
                      backgroundImage: "url('images/img_group14974.png')",
                    }}
                  >
                    <Button className="cursor-pointer font-medium min-w-[77%] sm:mt-[52px] md:mt-[67px] mt-[98px] text-[12px] text-center text-white_A700 w-[max-content]">
                      12,03 AEX
                    </Button>
                  </Column>
                </Grid>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between mt-[12px] sm:mt-[6px] md:mt-[8px] w-[100%]">
                  <Column
                    className="bg-cover bg-no-repeat flex flex-col items-center sm:mx-[0] sm:p-[3px] md:p-[4px] p-[6px] rounded-radius10 sm:w-[100%] w-[48%]"
                    style={{
                      backgroundImage: "url('images/img_group14976.png')",
                    }}
                  >
                    <Column className="bg-white_A700_26 flex flex-col items-center justify-start sm:mt-[52px] md:mt-[67px] mt-[98px] sm:mx-[0] sm:p-[3px] md:p-[4px] p-[6px] rounded-radius12 sm:w-[100%] w-[77%]">
                      <Text
                        className="font-medium mb-[3px] text-white_A700 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        12,03 AEX
                      </Text>
                    </Column>
                  </Column>
                  <Column
                    className="bg-cover bg-no-repeat flex flex-col items-center sm:mx-[0] sm:p-[3px] md:p-[4px] p-[6px] rounded-radius10 sm:w-[100%] w-[48%]"
                    style={{
                      backgroundImage: "url('images/img_group14977.png')",
                    }}
                  >
                    <Column className="bg-white_A700_26 flex flex-col items-center justify-start sm:mt-[52px] md:mt-[67px] mt-[98px] sm:mx-[0] sm:p-[3px] md:p-[4px] p-[6px] rounded-radius12 sm:w-[100%] w-[77%]">
                      <Text
                        className="font-medium mb-[3px] text-white_A700 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        12,03 AEX
                      </Text>
                    </Column>
                  </Column>
                </Row>
              </Column>
            </Column>
          </Column>
        </Column>
      </Row>
    </>
  );
};

export default ProfileContactsPinnedPage;
