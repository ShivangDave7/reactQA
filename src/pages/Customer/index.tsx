import React from "react";

import { Text, Button, Img, CheckBox, Heading } from "../../components";
import Header from "../../components/Header";
import { ReactTable } from "../../components/ReactTable";
import Sidebar2 from "../../components/Sidebar2";
import { createColumnHelper } from "@tanstack/react-table";

const table4Data = [{}, {}];

type Table4RowType = {
  header?: any;
  address?: any;
  phone?: any;
  orderno?: any;
  status?: any;
  action?: any;
};

export default function CustomerPage() {
  const table4Columns = React.useMemo(() => {
    const table4ColumnHelper = createColumnHelper<Table4RowType>();
    return [
      table4ColumnHelper.accessor("header", {
        cell: (info) => <div className="h-11" />,
        header: (info) => (
          <Text as="p" className="!font-normal">
            Customer
          </Text>
        ),
        meta: { width: "74px" },
      }),
      table4ColumnHelper.accessor("address", {
        cell: (info) => <div className="h-11" />,
        header: (info) => (
          <Text as="p" className="!font-normal ml-[163px]">
            Address
          </Text>
        ),
        meta: { width: "63px" },
      }),
      table4ColumnHelper.accessor("phone", {
        cell: (info) => <div className="h-11" />,
        header: (info) => (
          <Text as="p" className="!font-normal ml-[134px]">
            Phone
          </Text>
        ),
        meta: { width: "48px" },
      }),
      table4ColumnHelper.accessor("orderno", {
        cell: (info) => <div className="h-11" />,
        header: (info) => (
          <Text as="p" className="!font-normal ml-[129px]">
            Order No.
          </Text>
        ),
        meta: { width: "74px" },
      }),
      table4ColumnHelper.accessor("status", {
        cell: (info) => <div className="h-11" />,
        header: (info) => (
          <Text as="p" className="!font-normal ml-32">
            Status
          </Text>
        ),
        meta: { width: "49px" },
      }),
      table4ColumnHelper.accessor("action", {
        cell: (info) => <div className="h-11" />,
        header: (info) => (
          <Text as="p" className="!font-normal ml-[86px]">
            Action
          </Text>
        ),
        meta: { width: "49px" },
      }),
    ];
  }, []);

  return (
    <div className="bg-gray-50 flex flex-row w-full">
      <div className="bg-white-A700 flex flex-row items-start justify-start w-full">
        <Sidebar2 className="!sticky !w-[243px] bg-white-A700 h-screen overflow-auto top-[0]" />
        <div className="bg-indigo-50 h-[750px] w-px" />
        <div className="flex flex-col gap-[25px] items-center justify-start w-[84%]">
          <Header className="bg-white-A700 flex w-full" />
          <div className="flex flex-row justify-start px-6 w-full">
            <div className="flex flex-col gap-8 items-start justify-start w-full">
              <Text
                size="3xl"
                as="p"
                className="!font-poppins !text-blue_gray-900"
              >
                Customer
              </Text>
              <div className="bg-white-A700 flex flex-row justify-start p-8 rounded shadow-xs w-full">
                <div className="flex flex-col gap-8 items-center justify-start w-full">
                  <div className="flex flex-row items-center justify-between py-0.5 w-full">
                    <Heading as="h6" className="!text-blue_gray-900">
                      Customer List
                    </Heading>
                    <div className="flex flex-row gap-6">
                      <Img
                        src="images/img_search_blue_gray_900.svg"
                        alt="search"
                        className="h-6 w-6"
                      />
                      <Img
                        src="images/img_plus_blue_gray_900.svg"
                        alt="plus"
                        className="h-6 w-6"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full">
                    <ReactTable
                      bodyProps={{ className: "" }}
                      headerProps={{ className: "" }}
                      rowDataProps={{ className: "" }}
                      className="w-[1087px]"
                      columns={table4Columns}
                      data={table4Data}
                    />
                  </div>
                  <div className="flex flex-row items-center justify-between w-full">
                    <div className="flex flex-row gap-2">
                      <Button
                        color="indigo_50"
                        size="4xl"
                        variant="outline"
                        leftIcon={
                          <Img
                            src="images/.png"
                            alt="ic_carat_left"
                            className="h-6 w-6"
                          >
                            <div />
                          </Img>
                        }
                        className="min-w-[32px]"
                      />
                      <Button
                        color="blue_gray_900"
                        size="3xl"
                        variant="outline"
                        className="font-medium min-w-[32px]"
                      >
                        1
                      </Button>
                      <Button
                        color="indigo_50"
                        size="3xl"
                        variant="outline"
                        className="font-medium min-w-[32px]"
                      >
                        2
                      </Button>
                      <Button
                        color="indigo_50"
                        size="3xl"
                        variant="outline"
                        className="font-medium min-w-[32px]"
                      >
                        ...
                      </Button>
                      <Button
                        color="indigo_50"
                        size="3xl"
                        variant="outline"
                        className="font-medium min-w-[32px]"
                      >
                        9
                      </Button>
                      <Button
                        color="indigo_50"
                        size="4xl"
                        variant="outline"
                        className="w-8"
                      >
                        <Img src="images/img_arrow_right_blue_gray_400_32x32.svg" />
                      </Button>
                    </div>
                    <Text size="lg" as="p" className="!font-medium text-right">
                      9 of 200 data
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
