import React from "react";

import {
  Row,
  Img,
  Column,
  Text,
  Button,
  Input,
  List,
  Stack,
  Grid,
} from "components";
import { CloseSVG } from "../../assets/images/index.js";

const HidePage = () => {
  const [inputvalue, setInputvalue] = React.useState("");
  const [inputvalue1, setInputvalue1] = React.useState("");

  return (
    <>
      <Row className="bg-black_900 flex flex-row md:flex-wrap sm:flex-wrap font-poppins items-center mx-[auto] p-[4px] w-[100%]">
        <Img
          src="images/img_forward.svg"
          className="md:h-[12px] h-[16px] sm:h-[9px] max-w-[16px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%] md:w-[11px] sm:w-[8px]"
          alt="forward"
        />
        <Column className="bg-white_A700_0c flex flex-col items-center max-w-[542px] ml-[auto] mr-[auto] sm:my-[10px] md:my-[13px] my-[20px] sm:pl-[15px] sm:pr-[15px] rounded-radius15 w-[100%]">
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly w-[100%]">
            <Column className="bg-white_A700_07 flex flex-col items-center sm:mx-[0] pt-[12px] sm:pt-[6px] md:pt-[8px] rounded-radius15 sm:w-[100%] w-[40%]">
              <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[89%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between rounded-radius8 w-[100%]">
                  <Text
                    className="font-medium text-white_A700 tracking-ls028 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Chats
                  </Text>
                  <Row className="bg-black_901 flex flex-row md:flex-wrap sm:flex-wrap items-end sm:mx-[0] p-[4px] rounded-radius8 sm:w-[100%] w-[72%]">
                    <Button
                      className="cursor-pointer font-medium min-w-[50%] text-[12px] text-center text-white_A700 w-[max-content]"
                      shape="RoundedBorder5"
                      variant="FillDeeppurple200"
                    >
                      All
                    </Button>
                    <Text
                      className="font-normal ml-[10px] sm:ml-[5px] md:ml-[6px] sm:my-[2px] md:my-[3px] my-[5px] not-italic text-white_A700_75 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Groups
                    </Text>
                  </Row>
                </Row>
                <Input
                  value={inputvalue}
                  onChange={(e) => setInputvalue(e?.target?.value)}
                  className="font-normal not-italic p-[0] text-[14px] placeholder:text-white_A700_75 text-white_A700_75 w-[100%]"
                  wrapClassName="flex md:mt-[8px] mt-[12px] sm:mt-[6px] w-[100%]"
                  name="Group15222"
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
                  variant="srcFillBlack901"
                ></Input>
              </Column>
              <Column className="flex flex-col items-center justify-start mt-[12px] sm:mt-[6px] md:mt-[8px] rounded-bl-[15px] rounded-br-[15px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                <Column className="flex flex-col justify-end rounded-bl-[15px] rounded-br-[15px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[12px] md:ml-[8px] mr-[auto] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[30%]">
                    <Img
                      src="images/img_location.svg"
                      className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                      alt="location"
                    />
                    <Text
                      className="flex-grow font-medium sm:ml-[3px] md:ml-[4px] ml-[6px] text-white_A700_26 tracking-ls024 md:tracking-ls1 sm:tracking-ls1"
                      as="h5"
                      variant="h5"
                    >
                      Pinned
                    </Text>
                  </Row>
                  <Column className="flex flex-col justify-end sm:mt-[4px] md:mt-[5px] mt-[8px] w-[100%]">
                    <List
                      className="gap-[0] grid min-h-[auto] w-[100%]"
                      orientation="vertical"
                    >
                      <Row className="bg-white_A700_0c flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly my-[0] p-[11px] sm:p-[5px] md:p-[7px] w-[100%]">
                        <Img
                          src="images/img_ellipse706.png"
                          className="sm:h-[18px] md:h-[23px] h-[32px] my-[1px] rounded-radius50 sm:w-[17px] md:w-[22px] w-[32px]"
                          alt="Ellipse706"
                        />
                        <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[78%]">
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                            <Text
                              className="font-medium text-white_A700 tracking-ls028 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              as="h4"
                              variant="h4"
                            >
                              Peter Smith
                            </Text>
                            <Text
                              className="font-normal not-italic text-white_A700_75 tracking-ls024 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              21:10
                            </Text>
                          </Row>
                          <Text
                            className="font-normal mt-[4px] not-italic text-white_A700_4c tracking-ls024 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Lorem ipsum dolor sit...
                          </Text>
                        </Column>
                      </Row>
                      <Row className="bg-gray_900 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly my-[0] p-[11px] sm:p-[5px] md:p-[7px] w-[100%]">
                        <Img
                          src="images/img_ellipse706.png"
                          className="sm:h-[18px] md:h-[23px] h-[32px] my-[1px] rounded-radius50 sm:w-[17px] md:w-[22px] w-[32px]"
                          alt="Ellipse706 One"
                        />
                        <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[78%]">
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                            <Text
                              className="font-medium text-white_A700 tracking-ls028 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              as="h4"
                              variant="h4"
                            >
                              Peter Smith
                            </Text>
                            <Text
                              className="font-normal not-italic text-white_A700_75 tracking-ls024 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              21:10
                            </Text>
                          </Row>
                          <Text
                            className="font-normal mt-[4px] not-italic text-white_A700_4c tracking-ls024 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Lorem ipsum dolor sit...
                          </Text>
                        </Column>
                      </Row>
                      <Row className="bg-gray_900 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly my-[0] p-[11px] sm:p-[5px] md:p-[7px] w-[100%]">
                        <Img
                          src="images/img_ellipse706.png"
                          className="sm:h-[18px] md:h-[23px] h-[32px] my-[1px] rounded-radius50 sm:w-[17px] md:w-[22px] w-[32px]"
                          alt="Ellipse706 Two"
                        />
                        <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[78%]">
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                            <Text
                              className="font-medium text-white_A700 tracking-ls028 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              as="h4"
                              variant="h4"
                            >
                              Peter Smith
                            </Text>
                            <Text
                              className="font-normal not-italic text-white_A700_75 tracking-ls024 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              21:10
                            </Text>
                          </Row>
                          <Text
                            className="font-normal mt-[4px] not-italic text-white_A700_4c tracking-ls024 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Lorem ipsum dolor sit...
                          </Text>
                        </Column>
                      </Row>
                      <Row className="bg-gray_900 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly my-[0] p-[11px] sm:p-[5px] md:p-[7px] w-[100%]">
                        <Img
                          src="images/img_ellipse706.png"
                          className="sm:h-[18px] md:h-[23px] h-[32px] my-[1px] rounded-radius50 sm:w-[17px] md:w-[22px] w-[32px]"
                          alt="Ellipse706 Three"
                        />
                        <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[78%]">
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                            <Text
                              className="font-medium text-white_A700 tracking-ls028 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              as="h4"
                              variant="h4"
                            >
                              Peter Smith
                            </Text>
                            <Text
                              className="font-normal not-italic text-white_A700_75 tracking-ls024 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              21:10
                            </Text>
                          </Row>
                          <Text
                            className="font-normal mt-[4px] not-italic text-white_A700_4c tracking-ls024 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Lorem ipsum dolor sit...
                          </Text>
                        </Column>
                      </Row>
                    </List>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[12px] md:ml-[8px] mr-[auto] mt-[12px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[35%]">
                      <Img
                        src="images/img_location_16X16.svg"
                        className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                        alt="location One"
                      />
                      <Text
                        className="flex-grow font-medium sm:ml-[4px] md:ml-[5px] ml-[8px] text-white_A700_26 tracking-ls024 md:tracking-ls1 sm:tracking-ls1"
                        as="h5"
                        variant="h5"
                      >
                        All chats
                      </Text>
                    </Row>
                    <List
                      className="gap-[0] grid min-h-[auto] sm:mt-[4px] md:mt-[5px] mt-[8px] w-[100%]"
                      orientation="vertical"
                    >
                      <Row className="bg-gray_900 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly p-[11px] sm:p-[5px] md:p-[7px] w-[100%]">
                        <Img
                          src="images/img_ellipse706.png"
                          className="sm:h-[18px] md:h-[23px] h-[32px] my-[1px] rounded-radius50 sm:w-[17px] md:w-[22px] w-[32px]"
                          alt="Ellipse706 Four"
                        />
                        <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[78%]">
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                            <Text
                              className="font-medium text-white_A700 tracking-ls028 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              as="h4"
                              variant="h4"
                            >
                              Peter Smith
                            </Text>
                            <Text
                              className="font-normal not-italic text-white_A700_75 tracking-ls024 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              21:10
                            </Text>
                          </Row>
                          <Text
                            className="font-normal mt-[4px] not-italic text-white_A700_4c tracking-ls024 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Lorem ipsum dolor sit...
                          </Text>
                        </Column>
                      </Row>
                      <Row className="bg-gray_900 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly p-[11px] sm:p-[5px] md:p-[7px] w-[100%]">
                        <Img
                          src="images/img_ellipse706.png"
                          className="sm:h-[18px] md:h-[23px] h-[32px] my-[1px] rounded-radius50 sm:w-[17px] md:w-[22px] w-[32px]"
                          alt="Ellipse706 Five"
                        />
                        <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[78%]">
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                            <Text
                              className="font-medium text-white_A700 tracking-ls028 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              as="h4"
                              variant="h4"
                            >
                              Peter Smith
                            </Text>
                            <Text
                              className="font-normal not-italic text-white_A700_75 tracking-ls024 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              21:10
                            </Text>
                          </Row>
                          <Text
                            className="font-normal mt-[4px] not-italic text-white_A700_4c tracking-ls024 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Lorem ipsum dolor sit...
                          </Text>
                        </Column>
                      </Row>
                      <Row className="bg-gray_900 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly p-[11px] sm:p-[5px] md:p-[7px] w-[100%]">
                        <Img
                          src="images/img_ellipse706.png"
                          className="sm:h-[18px] md:h-[23px] h-[32px] my-[1px] rounded-radius50 sm:w-[17px] md:w-[22px] w-[32px]"
                          alt="Ellipse706 Six"
                        />
                        <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[78%]">
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                            <Text
                              className="font-medium text-white_A700 tracking-ls028 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              as="h4"
                              variant="h4"
                            >
                              Peter Smith
                            </Text>
                            <Text
                              className="font-normal not-italic text-white_A700_75 tracking-ls024 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              21:10
                            </Text>
                          </Row>
                          <Text
                            className="font-normal mt-[4px] not-italic text-white_A700_4c tracking-ls024 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Lorem ipsum dolor sit...
                          </Text>
                        </Column>
                      </Row>
                      <Row className="bg-gray_900 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly p-[11px] sm:p-[5px] md:p-[7px] w-[100%]">
                        <Img
                          src="images/img_ellipse706.png"
                          className="sm:h-[18px] md:h-[23px] h-[32px] my-[1px] rounded-radius50 sm:w-[17px] md:w-[22px] w-[32px]"
                          alt="Ellipse706 Seven"
                        />
                        <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[78%]">
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                            <Text
                              className="font-medium text-white_A700 tracking-ls028 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              as="h4"
                              variant="h4"
                            >
                              Peter Smith
                            </Text>
                            <Text
                              className="font-normal not-italic text-white_A700_75 tracking-ls024 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              21:10
                            </Text>
                          </Row>
                          <Text
                            className="font-normal mt-[4px] not-italic text-white_A700_4c tracking-ls024 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Lorem ipsum dolor sit...
                          </Text>
                        </Column>
                      </Row>
                      <Row className="bg-gray_900 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between p-[12px] sm:p-[6px] md:p-[8px] w-[100%]">
                        <Img
                          src="images/img_ellipse706.png"
                          className="sm:h-[18px] md:h-[23px] h-[32px] rounded-radius50 sm:w-[17px] md:w-[22px] w-[32px]"
                          alt="Ellipse706 Eight"
                        />
                        <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[79%]">
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                            <Text
                              className="font-medium text-white_A700 tracking-ls028 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              as="h4"
                              variant="h4"
                            >
                              Peter Smith
                            </Text>
                            <Text
                              className="font-normal not-italic text-white_A700_75 tracking-ls024 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              21:10
                            </Text>
                          </Row>
                          <Text
                            className="font-normal mt-[4px] not-italic text-white_A700_4c tracking-ls024 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Lorem ipsum dolor sit...
                          </Text>
                        </Column>
                      </Row>
                      <Row className="bg-gray_900 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between p-[12px] sm:p-[6px] md:p-[8px] w-[100%]">
                        <Img
                          src="images/img_ellipse706.png"
                          className="sm:h-[18px] md:h-[23px] h-[32px] rounded-radius50 sm:w-[17px] md:w-[22px] w-[32px]"
                          alt="Ellipse706 Nine"
                        />
                        <Column className="flex flex-col items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[79%]">
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                            <Text
                              className="font-medium text-white_A700 tracking-ls028 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              as="h4"
                              variant="h4"
                            >
                              Peter Smith
                            </Text>
                            <Text
                              className="font-normal not-italic text-white_A700_75 tracking-ls024 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              21:10
                            </Text>
                          </Row>
                          <Text
                            className="font-normal mt-[4px] not-italic text-white_A700_4c tracking-ls024 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Lorem ipsum dolor sit...
                          </Text>
                        </Column>
                      </Row>
                    </List>
                  </Column>
                </Column>
              </Column>
            </Column>
            <Column className="flex flex-col items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[61%]">
              <Column className="flex flex-col items-center justify-start w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[93%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[34%]">
                    <Img
                      src="images/img_eye.svg"
                      className="flex-shrink-0 sm:h-[18px] md:h-[23px] h-[32px] max-w-[100%] sm:w-[17px] md:w-[22px] w-[32px]"
                      alt="eye"
                    />
                    <Text
                      className="capitalize flex-grow font-medium sm:ml-[3px] md:ml-[4px] ml-[6px] text-white_A700 tracking-ls028 md:tracking-ls1 sm:tracking-ls1"
                      as="h4"
                      variant="h4"
                    >
                      Valuengr
                    </Text>
                  </Row>
                  <Img
                    src="images/img_user.svg"
                    className="sm:h-[18px] md:h-[23px] h-[32px] max-w-[100%] ml-[135px] sm:ml-[71px] md:ml-[92px] sm:w-[17px] md:w-[22px] w-[32px]"
                    alt="user"
                  />
                  <Img
                    src="images/img_overflowmenu.svg"
                    className="sm:h-[18px] md:h-[23px] h-[32px] max-w-[100%] sm:ml-[3px] md:ml-[4px] ml-[6px] sm:w-[17px] md:w-[22px] w-[32px]"
                    alt="overflowmenu"
                  />
                </Row>
                <Column className="bg-black_902 flex flex-col items-center justify-start sm:mt-[3px] md:mt-[4px] mt-[6px] sm:p-[3px] md:p-[4px] p-[6px] w-[100%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[97%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[47%]">
                      <Img
                        src="images/img_ellipse705.png"
                        className="sm:h-[18px] md:h-[23px] h-[32px] rounded-radius50 sm:w-[17px] md:w-[22px] w-[32px]"
                        alt="Ellipse705"
                      />
                      <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[72%]">
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
                    </Row>
                    <Img
                      src="images/img_call.svg"
                      className="sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] ml-[112px] sm:ml-[59px] md:ml-[77px] sm:w-[10px] md:w-[13px] w-[20px]"
                      alt="call"
                    />
                    <Img
                      src="images/img_file.svg"
                      className="sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] ml-[12px] sm:ml-[6px] md:ml-[8px] sm:w-[10px] md:w-[13px] w-[20px]"
                      alt="file"
                    />
                  </Row>
                </Column>
              </Column>
              <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[93%]">
                <Column className="flex flex-col items-center justify-start w-[100%]">
                  <Column className="flex flex-col items-end justify-start w-[100%]">
                    <Input
                      className="font-normal not-italic p-[0] text-[12px] placeholder:text-white_A700_7f text-white_A700_7f w-[100%]"
                      wrapClassName="sm:mx-[0] sm:w-[100%] w-[89%]"
                      name="time Ten"
                      placeholder="22:51"
                      shape="CustomBorderTL15"
                      size="sm"
                      variant="FillWhiteA7000c"
                    ></Input>
                    <Column className="flex flex-col justify-start sm:mt-[4px] md:mt-[5px] mt-[8px] w-[100%]">
                      <Column className="bg-deep_purple_200 flex flex-col items-end justify-start sm:mx-[0] pl-[10px] sm:pl-[5px] md:pl-[6px] py-[10px] sm:py-[5px] md:py-[6px] rounded-bl-[2px] rounded-br-[15px] rounded-tl-[15px] rounded-tr-[15px] sm:w-[100%] w-[73%]">
                        <Column className="flex flex-col justify-start mb-[2px] sm:px-[0] w-[100%]">
                          <Text
                            className="font-normal leading-[130.00%] not-italic text-white_A700 w-[100%]"
                            as="h5"
                            variant="h5"
                          >
                            Lorem ipsum dolor sit amet, consectet adipiscing
                            elit ut
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
                      <Column className="bg-white_A700_0c flex flex-col items-center justify-start md:ml-[24px] ml-[36px] sm:mt-[4px] md:mt-[5px] mt-[8px] sm:mx-[0] p-[10px] sm:p-[5px] md:p-[6px] rounded-bl-[15px] rounded-br-[2px] rounded-tl-[15px] rounded-tr-[15px] sm:w-[100%] w-[89%]">
                        <Column className="flex flex-col justify-start mb-[2px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
                          <Text
                            className="font-normal leading-[130.00%] not-italic text-white_A700 w-[100%]"
                            as="h5"
                            variant="h5"
                          >
                            Lorem ipsum dolor sit amet, consectet adipiscing
                            elit ut ali
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
                      <Column className="bg-deep_purple_200 flex flex-col items-center justify-start sm:mt-[4px] md:mt-[5px] mt-[8px] sm:mx-[0] p-[10px] sm:p-[5px] md:p-[6px] rounded-bl-[2px] rounded-br-[15px] rounded-tl-[15px] rounded-tr-[15px] sm:w-[100%] w-[88%]">
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
                      <Column className="bg-white_A700_0c flex flex-col items-center justify-start md:ml-[24px] ml-[36px] sm:mt-[4px] md:mt-[5px] mt-[8px] sm:mx-[0] p-[12px] sm:p-[6px] md:p-[8px] rounded-bl-[15px] rounded-br-[2px] rounded-tl-[15px] rounded-tr-[15px] sm:w-[100%] w-[89%]">
                        <Column
                          className="bg-cover bg-no-repeat flex flex-col justify-start sm:p-[3px] md:p-[4px] p-[6px] rounded-radius5 w-[100%]"
                          style={{
                            backgroundImage: "url('images/img_group15244.png')",
                          }}
                        >
                          <Button
                            className="cursor-pointer font-normal sm:mb-[41px] md:mb-[53px] mb-[78px] min-w-[19%] ml-[1px] not-italic text-[12px] text-center text-white_A700 tracking-ls024 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
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
                            Lorem ipsum dolor sit amet, consectet adipiscing
                            elit ut ali
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
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between mt-[12px] sm:mt-[6px] md:mt-[8px] w-[100%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[48%]">
                    <Img
                      src="images/img_trash.svg"
                      className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                      alt="trash"
                    />
                    <Text
                      className="flex-grow font-normal sm:ml-[4px] md:ml-[5px] ml-[8px] mt-[3px] not-italic text-white_A700_75 tracking-ls028 md:tracking-ls1 sm:tracking-ls1"
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
            </Column>
          </Row>
        </Column>
        <Column className="bg-white_A700_11 flex flex-col items-center max-w-[541px] sm:ml-[13px] md:ml-[17px] ml-[auto] mr-[auto] sm:my-[10px] md:my-[13px] my-[20px] sm:pl-[15px] sm:pr-[15px] pt-[12px] sm:pt-[6px] md:pt-[8px] px-[12px] sm:px-[6px] md:px-[8px] rounded-radius15 w-[100%]">
          <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[18%]">
                <Img
                  src="images/img_reply.svg"
                  className="flex-shrink-0 sm:h-[18px] md:h-[23px] h-[32px] max-w-[100%] sm:w-[17px] md:w-[22px] w-[32px]"
                  alt="reply"
                />
                <Text
                  className="capitalize flex-grow font-medium sm:ml-[3px] md:ml-[4px] ml-[6px] text-white_A700 tracking-ls028 md:tracking-ls1 sm:tracking-ls1"
                  as="h4"
                  variant="h4"
                >
                  My flow
                </Text>
              </Row>
              <Input
                value={inputvalue1}
                onChange={(e) => setInputvalue1(e?.target?.value)}
                className="font-normal not-italic p-[0] text-[14px] placeholder:text-white_A700_75 text-white_A700_75 w-[100%]"
                wrapClassName="flex sm:mx-[0] sm:w-[100%] w-[41%]"
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
                  inputvalue1?.length > 0 ? (
                    <CloseSVG
                      color="#75ffffff"
                      className="cursor-pointer ml-[10px] mr-[22px] sm:mr-[11px] sm:ml-[5px] md:mr-[15px] md:ml-[6px] my-[auto]"
                      onClick={() => setInputvalue1("")}
                    />
                  ) : (
                    ""
                  )
                }
              ></Input>
              <Button
                className="flex items-center justify-center min-w-[17%] text-center w-[max-content]"
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
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[74%]">
                        <Img
                          src="images/img_ellipse676.png"
                          className="sm:h-[18px] md:h-[23px] h-[32px] rounded-radius50 sm:w-[17px] md:w-[22px] w-[32px]"
                          alt="Ellipse676"
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
                        className="bg-cover bg-no-repeat h-[138px] ml-[1px] mt-[12px] sm:mt-[6px] md:mt-[8px] sm:p-[15px] md:p-[40px] p-[59px] relative rounded-radius5 w-[138px] sm:w-[73px] md:w-[94px]"
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
                      <Column className="flex flex-col items-center justify-start md:ml-[26px] ml-[39px] mt-[10px] sm:mt-[5px] md:mt-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[45%]">
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
                        alt="Group14934"
                      />
                    </Column>
                  </Column>
                  <Column
                    className="bg-cover bg-no-repeat flex flex-col items-center sm:mx-[0] p-[12px] sm:p-[6px] md:p-[8px] rounded-radius10 sm:w-[100%] w-[66%]"
                    style={{
                      backgroundImage: "url('images/img_group15194.png')",
                    }}
                  >
                    <Column className="flex flex-col justify-start sm:px-[0] w-[100%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[39%]">
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
                        className="leading-[120.00%] mt-[120px] sm:mt-[63px] md:mt-[82px] text-white_A700 w-[100%]"
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
                          className="flex items-center justify-center md:ml-[63px] min-w-[29%] ml-[92px] sm:ml-[49px] text-center w-[max-content]"
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
                      backgroundImage: "url('images/img_group15247.png')",
                    }}
                  >
                    <Column className="flex flex-col justify-start sm:px-[0] w-[100%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[39%]">
                        <Img
                          src="images/img_ellipse676_32X32.png"
                          className="sm:h-[18px] md:h-[23px] h-[32px] rounded-radius50 sm:w-[17px] md:w-[22px] w-[32px]"
                          alt="Ellipse676 Two"
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
                        className="leading-[120.00%] mt-[120px] sm:mt-[63px] md:mt-[82px] text-white_A700 w-[100%]"
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
                          className="flex items-center justify-center md:ml-[63px] min-w-[29%] ml-[92px] sm:ml-[49px] text-center w-[max-content]"
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
                      backgroundImage: "url('images/img_group15250.png')",
                    }}
                  >
                    <Column className="flex flex-col justify-start sm:px-[0] w-[100%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[72%]">
                        <Img
                          src="images/img_ellipse676_1.png"
                          className="sm:h-[18px] md:h-[23px] h-[32px] rounded-radius50 sm:w-[17px] md:w-[22px] w-[32px]"
                          alt="Ellipse676 Three"
                        />
                        <Text
                          className="flex-grow font-semibold sm:ml-[3px] md:ml-[4px] ml-[6px] text-white_A700 tracking-ls024 md:tracking-ls1 sm:tracking-ls1"
                          as="h5"
                          variant="h5"
                        >
                          Anna Bilyk
                        </Text>
                      </Row>
                      <Column className="flex flex-col items-center justify-start md:ml-[31px] ml-[46px] sm:mt-[45px] md:mt-[58px] mt-[85px] sm:mx-[0] sm:px-[0] rounded-radius245 sm:w-[100%] w-[35%]">
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
                        src="images/img_group15249.svg"
                        className="max-w-[100%] sm:mt-[45px] md:mt-[58px] mt-[85px] w-[100%]"
                        alt="Group15249"
                      />
                    </Column>
                  </Column>
                </Row>
              </Column>
            </Column>
          </Column>
        </Column>
        <Column className="bg-white_A700_11 flex flex-col items-center max-w-[259px] sm:ml-[12px] md:ml-[16px] ml-[auto] mr-[auto] sm:my-[10px] md:my-[13px] my-[20px] sm:pl-[15px] sm:pr-[15px] pt-[12px] sm:pt-[6px] md:pt-[8px] px-[12px] sm:px-[6px] md:px-[8px] rounded-radius15 w-[100%]">
          <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
            <Column className="flex flex-col items-center justify-start w-[100%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center w-[100%]">
                <Img
                  src="images/img_location_32X32.svg"
                  className="sm:h-[18px] md:h-[23px] h-[32px] max-w-[100%] sm:w-[17px] md:w-[22px] w-[32px]"
                  alt="location Three"
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
                  className="sm:h-[18px] md:h-[23px] h-[32px] max-w-[100%] sm:ml-[47px] md:ml-[61px] ml-[89px] sm:w-[17px] md:w-[22px] w-[32px]"
                  alt="overflowmenu Two"
                />
              </Row>
              <Row className="bg-white_A700_0c flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between mt-[12px] sm:mt-[6px] md:mt-[8px] sm:p-[4px] md:p-[5px] p-[8px] rounded-radius8 w-[100%]">
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
            <Column className="flex flex-col items-center justify-start mt-[12px] sm:mt-[6px] md:mt-[8px] sm:px-[0] rounded-bl-[15px] rounded-br-[15px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
              <Column className="flex flex-col items-center justify-end rounded-bl-[15px] rounded-br-[15px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                <Grid className="gap-[12px] sm:gap-[6px] md:gap-[8px] grid sm:grid-cols-1 grid-cols-2 min-h-[auto] w-[100%]">
                  <Column
                    className="bg-cover bg-no-repeat flex flex-col items-center justify-end sm:p-[4px] md:p-[5px] p-[8px] rounded-radius10 w-[100%]"
                    style={{
                      backgroundImage: "url('images/img_group15253.png')",
                    }}
                  >
                    <Button className="cursor-pointer font-medium min-w-[84%] mt-[106px] sm:mt-[56px] md:mt-[72px] text-[12px] text-center text-white_A700 w-[max-content]">
                      12,03 AEX
                    </Button>
                  </Column>
                  <Column
                    className="bg-cover bg-no-repeat flex flex-col items-center justify-end sm:p-[4px] md:p-[5px] p-[8px] rounded-radius10 w-[100%]"
                    style={{
                      backgroundImage: "url('images/img_group15254.png')",
                    }}
                  >
                    <Button className="cursor-pointer font-medium min-w-[84%] mt-[106px] sm:mt-[56px] md:mt-[72px] text-[12px] text-center text-white_A700 w-[max-content]">
                      12,03 AEX
                    </Button>
                  </Column>
                  <Column
                    className="bg-cover bg-no-repeat flex flex-col items-center justify-end sm:p-[4px] md:p-[5px] p-[8px] rounded-radius10 w-[100%]"
                    style={{
                      backgroundImage: "url('images/img_group15255.png')",
                    }}
                  >
                    <Button className="cursor-pointer font-medium min-w-[84%] mt-[106px] sm:mt-[56px] md:mt-[72px] text-[12px] text-center text-white_A700 w-[max-content]">
                      12,03 AEX
                    </Button>
                  </Column>
                  <Column
                    className="bg-cover bg-no-repeat flex flex-col items-center justify-end sm:p-[4px] md:p-[5px] p-[8px] rounded-radius10 w-[100%]"
                    style={{
                      backgroundImage: "url('images/img_group15256.png')",
                    }}
                  >
                    <Button className="cursor-pointer font-medium min-w-[84%] mt-[106px] sm:mt-[56px] md:mt-[72px] text-[12px] text-center text-white_A700 w-[max-content]">
                      12,03 AEX
                    </Button>
                  </Column>
                  <Column
                    className="bg-cover bg-no-repeat flex flex-col items-center justify-end sm:p-[4px] md:p-[5px] p-[8px] rounded-radius10 w-[100%]"
                    style={{
                      backgroundImage: "url('images/img_group15254.png')",
                    }}
                  >
                    <Button className="cursor-pointer font-medium min-w-[84%] mt-[106px] sm:mt-[56px] md:mt-[72px] text-[12px] text-center text-white_A700 w-[max-content]">
                      12,03 AEX
                    </Button>
                  </Column>
                  <Column
                    className="bg-cover bg-no-repeat flex flex-col items-center justify-end sm:p-[4px] md:p-[5px] p-[8px] rounded-radius10 w-[100%]"
                    style={{
                      backgroundImage: "url('images/img_group15253.png')",
                    }}
                  >
                    <Button className="cursor-pointer font-medium min-w-[84%] mt-[106px] sm:mt-[56px] md:mt-[72px] text-[12px] text-center text-white_A700 w-[max-content]">
                      12,03 AEX
                    </Button>
                  </Column>
                  <Column
                    className="bg-cover bg-no-repeat flex flex-col items-center justify-end sm:p-[4px] md:p-[5px] p-[8px] rounded-radius10 w-[100%]"
                    style={{
                      backgroundImage: "url('images/img_group15259.png')",
                    }}
                  >
                    <Button className="cursor-pointer font-medium min-w-[84%] mt-[106px] sm:mt-[56px] md:mt-[72px] text-[12px] text-center text-white_A700 w-[max-content]">
                      12,03 AEX
                    </Button>
                  </Column>
                  <Column
                    className="bg-cover bg-no-repeat flex flex-col items-center justify-end sm:p-[4px] md:p-[5px] p-[8px] rounded-radius10 w-[100%]"
                    style={{
                      backgroundImage: "url('images/img_group15260.png')",
                    }}
                  >
                    <Button className="cursor-pointer font-medium min-w-[84%] mt-[106px] sm:mt-[56px] md:mt-[72px] text-[12px] text-center text-white_A700 w-[max-content]">
                      12,03 AEX
                    </Button>
                  </Column>
                </Grid>
              </Column>
            </Column>
          </Column>
        </Column>
      </Row>
    </>
  );
};

export default HidePage;
