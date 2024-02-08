import {
  Button,
  Dropdown,
  MenuProps,
  Table,
  TableColumnsType,
  Tag,
} from "antd";
import { useGetAllRegisteredSemesterQuery } from "../../../redux/features/admin/courseManagement.api";
import { TSemester } from "../../../types";
import moment from "moment";
import { useState } from "react";

type TTableData = Pick<
  TSemester,
  "academicSemester" | "status" | "startDate" | "endDate"
>;

const items = [
  {
    label: "Upcoming",
    key: "UPCOMING",
  },
  {
    label: "Ongoing",
    key: "ONGOING",
  },
  {
    label: "Ended",
    key: "ENDED",
  },
];

const RegisteredSemesters = () => {
  const [semesterId, setSemesterId] = useState("");
  const { data: registeredSemesterData, isFetching } =
    useGetAllRegisteredSemesterQuery(undefined);

  const handleStatusUpdate = (data) => {
    console.log("click", data);
  };

  const menuProps = {
    items,
    onClick: handleStatusUpdate,
  };

  const tableData = registeredSemesterData?.data?.map(
    ({ _id, academicSemester, startDate, status, endDate }) => ({
      key: _id,
      name: `${academicSemester?.name} ${academicSemester?.year}`,
      status,
      startDate: moment(new Date(startDate)).format("MMMM Do YYYY"),
      endDate: moment(new Date(endDate)).format("MMMM Do YYYY"),
    })
  );

  const columns: TableColumnsType<TTableData> = [
    {
      title: "Name",
      key: "name",
      dataIndex: "name",
    },
    {
      title: "Status",
      key: "status",
      render(item) {
        let color;
        if (item?.status === "ONGOING") {
          color = "green";
        } else if (item?.status === "UPCOMING") {
          color = "blue";
        } else if (item?.status === "ENDED") {
          color = "default";
        }

        return <Tag color={color}>{item?.status}</Tag>;
      },
    },
    {
      title: "Start Date",
      key: "startDate",
      dataIndex: "startDate",
    },
    {
      title: "End Date",
      key: "endDate",
      dataIndex: "endDate",
    },
    {
      title: "Action",
      key: "x",
      render: (item) => {
        return (
          <Dropdown menu={menuProps} trigger={["click"]}>
            <Button onClick={() => setSemesterId(item?.key)}>Update</Button>
          </Dropdown>
        );
      },
    },
  ];

  // const onChange: TableProps<TTableData>["onChange"] = (
  //   _pagination,
  //   filters,
  //   _sorter,
  //   extra
  // ) => {
  //   if (extra.action === "filter") {
  //     const queryParams: TQueryParam[] = [];

  //     setParams(queryParams);
  //   }
  // };

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <Table
      columns={columns}
      loading={isFetching}
      dataSource={tableData}
      pagination={false}
      // onChange={onChange}
    />
  );
};

export default RegisteredSemesters;
