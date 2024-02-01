import React from "react";

import { Text, Button, Heading, Img, Input, CheckBox } from "../../components";
import Header from "../../components/Header";
import { ReactTable } from "../../components/ReactTable";
import Sidebar4 from "../../components/Sidebar4";
import { createColumnHelper } from "@tanstack/react-table";

const table5Data = [
  { product: "Polo Shirt", rowprice: "$120.0", total: "$120.0" },
  { product: "Polo Shirt", rowprice: "$120.0", total: "$120.0" },
  { product: "Polo Shirt", rowprice: "$120.0", total: "$120.0" },
  { product: "Polo Shirt", rowprice: "$120.0", total: "$120.0" },
  { product: "Polo Shirt", rowprice: "$120.0", total: "$120.0" },
  { product: "Polo Shirt", rowprice: "$120.0", total: "$120.0" },
];

type Table5RowType = {
  rowvectorone?: any;
  product: string;
  rowprice: string;
  total: string;
};

export default function CartProductListPage() {
  const table5Columns = React.useMemo(() => {
    const table5ColumnHelper = createColumnHelper<Table5RowType>();
    return [
      table5ColumnHelper.accessor("rowvectorone", {
        cell: (info) => (
          <div className="flex flex-row justify-start">
            <CheckBox name="vectortwo" label="" className="mb-8 mt-[37px]" />
          </div>
        ),
        header: (info) => (
          <div className="flex flex-row justify-center p-[3px]">
            <CheckBox
              name="vectorone"
              label=""
              className="ml-[18px] mr-[42px]"
            />
          </div>
        ),
        meta: { width: "84px" },
      }),
      table5ColumnHelper.accessor("product", {
        cell: (info) => (
          <div className="flex flex-row gap-6 items-center justify-center">
            <Img
              src="images/img_rectangle_118x110.png"
              alt="rectangle"
              className="mt-1 object-cover w-[32%]"
            />
            <div className="flex flex-col gap-3.5 items-start justify-end mr-6 w-1/2">
              <Heading as="h6" className="!text-blue_gray-900">
                {info?.getValue()}
              </Heading>
              <Text size="lg" as="p" className="">
                Color: Grey, S
              </Text>
            </div>
          </div>
        ),
        header: (info) => (
          <Text as="p" className="!font-normal pl-[35px]">
            Product
          </Text>
        ),
        meta: { width: "275px" },
      }),
      table5ColumnHelper.accessor("rowprice", {
        cell: (info) => (
          <div className="flex flex-row gap-11 items-center justify-center">
            <Heading size="md" as="p" className="">
              {info?.getValue()}
            </Heading>
            <div className="flex flex-row items-center justify-center mb-[3px] mt-[7px] w-[56%]">
              <Button
                color="indigo_50"
                size="4xl"
                variant="outline"
                className="w-8"
              >
                <Img src="images/img_minus.svg" />
              </Button>
              <Text
                size="lg"
                as="p"
                className="!font-medium !text-blue_gray-900 ml-5 text-center"
              >
                1
              </Text>
              <Button
                color="indigo_50"
                size="4xl"
                variant="outline"
                className="ml-[21px] w-8"
              >
                <Img src="images/img_page_disabled.svg" />
              </Button>
            </div>
          </div>
        ),
        header: (info) => (
          <div className="flex flex-row gap-[73px] justify-start px-0.5">
            <Text as="p" className="!font-normal">
              Price
            </Text>
            <Text as="p" className="!font-normal">
              Quantity
            </Text>
          </div>
        ),
        meta: { width: "247px" },
      }),
      table5ColumnHelper.accessor("total", {
        cell: (info) => (
          <Heading size="md" as="p" className="">
            {info?.getValue()}
          </Heading>
        ),
        header: (info) => (
          <Text as="p" className="!font-normal pl-1">
            Total
          </Text>
        ),
        meta: { width: "91px" },
      }),
    ];
  }, []);

  return (
    <div className="bg-gray-100 flex flex-row items-start w-full">
      <Sidebar4 className="!sticky !w-[243px] bg-white-A700 h-screen overflow-auto top-[0]" />
      <div className="bg-indigo-50 h-[1071px] w-px" />
      <div className="flex flex-col gap-8 items-center justify-start w-[84%]">
        <Header className="bg-white-A700 flex w-full" />
        <div className="flex flex-row justify-start px-6 w-full">
          <div className="flex flex-col gap-8 items-center justify-start w-full">
            <div className="flex flex-row gap-[974px] items-end w-full">
              <Text
                size="3xl"
                as="p"
                className="!font-poppins !text-blue_gray-900"
              >
                Cart
              </Text>
              <Text as="p" className="!font-normal mb-[5px] text-right">
                Ecommerce/ Cart
              </Text>
            </div>
            <div className="flex flex-row gap-5 items-start w-full">
              <div className="bg-white-A700 flex flex-col gap-[37px] items-start justify-end p-6 rounded shadow-xs w-[67%]">
                <Heading as="h6" className="!text-blue_gray-900 mt-[3px]">
                  Product List
                </Heading>
                <ReactTable
                  size="xs"
                  bodyProps={{ className: "" }}
                  headerProps={{ className: "" }}
                  rowDataProps={{ className: "" }}
                  className="ml-2 w-[697px]"
                  columns={table5Columns}
                  data={table5Data}
                />
              </div>
              <div className="flex flex-col gap-5 items-center justify-start w-[33%]">
                <div className="bg-white-A700 flex flex-col gap-6 items-center justify-start p-8 rounded shadow-xs w-full">
                  <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                    <Text
                      size="lg"
                      as="p"
                      className="!font-medium !text-blue_gray-800"
                    >
                      Promotion
                    </Text>
                    <Input
                      name="frame18341"
                      placeholder="Enter code"
                      className="border border-indigo-50 border-solid w-full"
                    />
                  </div>
                  <div className="flex flex-row gap-3 items-center justify-start w-full">
                    <Img
                      src="images/img_tag.svg"
                      alt="tag"
                      className="h-5 w-5"
                    />
                    <Text
                      size="lg"
                      as="p"
                      className="!font-medium !text-indigo-400"
                    >
                      Click to find Promotion
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col items-center justify-start p-8 rounded shadow-xs w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col gap-5 items-center justify-start w-full">
                      <div className="flex flex-row justify-between w-full">
                        <Text as="p" className="!font-normal text-center">
                          Price
                        </Text>
                        <Text as="p" className="!text-blue_gray-800 text-right">
                          $120.0
                        </Text>
                      </div>
                      <div className="flex flex-row justify-between w-full">
                        <Text as="p" className="!font-normal text-center">
                          Shipping fee
                        </Text>
                        <Text
                          as="p"
                          className="!text-blue_gray-800 h-5 text-right"
                        >
                          $0
                        </Text>
                      </div>
                    </div>
                    <div className="bg-indigo-50 h-px mt-8 w-full" />
                    <div className="flex flex-row gap-[206px] items-center mt-[31px] py-0.5 w-full">
                      <Text as="p" className="!font-normal text-center">
                        Total
                      </Text>
                      <Heading as="h6" className="text-right">
                        $120.0
                      </Heading>
                    </div>
                    <div className="flex flex-col gap-4 items-center justify-start mt-8 w-full">
                      <Button
                        color="deep_orange_300"
                        className="font-bold rounded-[24px] w-full"
                      >
                        Purchase now
                      </Button>
                      <Button className="font-semibold rounded-[24px] w-full">
                        Scan QR code
                      </Button>
                    </div>
                    <Text
                      size="lg"
                      as="p"
                      className="!leading-[22px] mt-8 text-center"
                    >
                      Please make sure that all your <br />
                      information precisely
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
