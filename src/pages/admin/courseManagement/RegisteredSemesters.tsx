import { Button, Table, TableColumnsType, TableProps } from "antd";
import { useGetAllRegisteredSemesterQuery } from "../../../redux/features/admin/courseManagement.api";
import { TSemester } from "../../../types";

type TTableData = Pick<
  TSemester,
  "academicSemester" | "status" | "startDate" | "endDate"
>;

const RegisteredSemesters = () => {
  const { data: registeredSemesterData, isFetching } =
    useGetAllRegisteredSemesterQuery(undefined);

  const tableData = registeredSemesterData?.data?.map(
    ({ _id, academicSemester, startDate, status, endDate }) => ({
      key: _id,
      name: `${academicSemester?.name} ${academicSemester?.year}`,
      status,
      startDate,
      endDate,
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
      dataIndex: "status",
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
      render: () => {
        return (
          <div>
            <Button>Update</Button>
          </div>
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
      // onChange={onChange}
    />
  );
};

export default RegisteredSemesters;
