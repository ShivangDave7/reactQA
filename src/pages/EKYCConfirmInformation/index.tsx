import React from "react";

import { CloseSVG } from "../../assets/images";
import { Button, CheckBox, Input, Text, Heading } from "../../components";
import Header from "../../components/Header";
import Sidebar3 from "../../components/Sidebar3";

export default function EKYCConfirmInformationPage() {
  const [searchBarValue27, setSearchBarValue27] = React.useState("");

  return (
    <div className="bg-gray-100_05 flex flex-row items-start w-full">
      <Sidebar3 className="!sticky !w-[243px] bg-white-A700 h-screen overflow-auto top-[0]" />
      <div className="bg-indigo-50 h-[950px] w-px" />
      <div className="flex flex-col gap-8 items-center justify-start w-[84%]">
        <Header className="bg-white-A700 flex w-full" />
        <div className="flex flex-row justify-start px-6 w-full">
          <div className="flex flex-col gap-8 items-center justify-start w-full">
            <div className="flex flex-row items-end justify-between w-full">
              <Text
                size="3xl"
                as="p"
                className="!font-poppins !text-blue_gray-900"
              >
                eKYC
              </Text>
              <Text as="p" className="!font-normal mb-[5px] text-right">
                Setting/ eKYC
              </Text>
            </div>
            <div className="bg-white-A700 flex flex-col gap-12 items-center justify-start p-12 rounded shadow-xs w-full">
              <div className="flex flex-col gap-3 items-center justify-start w-[67%]">
                <Heading
                  size="2xl"
                  as="h4"
                  className="!text-blue_gray-900 text-center"
                >
                  Confirm Information
                </Heading>
                <Text size="lg" as="p" className="text-center">
                  Make sure that all your information are precise
                </Text>
              </div>
              <div className="flex flex-col gap-9 items-center justify-start w-[67%]">
                <div className="flex flex-col gap-6 items-center justify-start w-full">
                  <div className="flex flex-row justify-evenly w-full">
                    <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                      <Text
                        size="lg"
                        as="p"
                        className="!font-medium !text-blue_gray-800"
                      >
                        Full name *
                      </Text>
                      <Input
                        name="frame18249"
                        placeholder="Mustermann Galer"
                        value={searchBarValue27}
                        onChange={(e: string) => setSearchBarValue27(e)}
                        suffix={
                          searchBarValue27?.length > 0 ? (
                            <CloseSVG onClick={() => setSearchBarValue27("")} />
                          ) : null
                        }
                        className="bg-white-A700 border border-indigo-50 border-solid font-semibold h-14 pl-5 pr-[35px] rounded text-base text-blue_gray-800 w-full"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row justify-evenly w-full">
                    <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                      <Text
                        size="lg"
                        as="p"
                        className="!font-medium !text-blue_gray-800"
                      >
                        ID number *
                      </Text>
                      <Input
                        name="frame18249one"
                        placeholder="12345678"
                        className="!text-blue_gray-800 border border-indigo-50 border-solid font-semibold w-full"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row gap-5 w-full">
                    <div className="flex flex-col gap-2.5 items-start justify-start w-[49%]">
                      <Text
                        size="lg"
                        as="p"
                        className="!font-medium !text-blue_gray-800"
                      >
                        Gender *
                      </Text>
                      <Input
                        name="gender_One"
                        placeholder="Female"
                        className="!text-blue_gray-800 border border-indigo-50 border-solid font-semibold w-full"
                      />
                    </div>
                    <div className="flex flex-col gap-[9px] items-start justify-start pt-[3px] w-[49%]">
                      <Text
                        size="lg"
                        as="p"
                        className="!font-medium !text-blue_gray-800"
                      >
                        Nationality *
                      </Text>
                      <Input
                        name="frame18249two"
                        placeholder="Deitsch"
                        className="!text-blue_gray-800 border border-indigo-50 border-solid font-semibold w-full"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row gap-5 w-full">
                    <div className="flex flex-col gap-2.5 items-start justify-start w-[49%]">
                      <Text
                        size="lg"
                        as="p"
                        className="!font-medium !text-blue_gray-800"
                      >
                        Date of birth *
                      </Text>
                      <Input
                        name="frame18249three"
                        placeholder="12.08.1983"
                        className="!text-blue_gray-800 border border-indigo-50 border-solid font-semibold w-full"
                      />
                    </div>
                    <div className="flex flex-col gap-2.5 items-start justify-start w-[49%]">
                      <Text
                        size="lg"
                        as="p"
                        className="!font-medium !text-blue_gray-800"
                      >
                        Place of birth *
                      </Text>
                      <Input
                        name="frame18249four"
                        placeholder="Berlin"
                        className="!text-blue_gray-800 border border-indigo-50 border-solid font-semibold w-full"
                      />
                    </div>
                  </div>
                </div>
                <CheckBox
                  size="sm"
                  name="remember"
                  label="By clicking button ‘Confirm’, I take all responsibility of the information above"
                  className="text-blue_gray-400 text-left"
                />
              </div>
              <Button
                color="deep_orange_300"
                className="font-bold min-w-[270px] rounded-[24px]"
              >
                Confirm
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
