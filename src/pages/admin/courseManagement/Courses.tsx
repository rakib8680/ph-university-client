import { Button, Table, TableColumnsType } from "antd";
import { useGetAllCoursesQuery } from "../../../redux/features/admin/courseManagement.api";
import { TCourse } from "../../../types";

type TTableData = Pick<TCourse, "title" | "code">;

const Courses = () => {
  const { data: courses, isFetching } = useGetAllCoursesQuery(undefined);

  const tableData = courses?.data?.map(({ _id, title, code, prefix }) => ({
    key: _id,
    title,
    code: `${prefix}${code}`,
  }));

  const columns: TableColumnsType<TTableData> = [
    {
      title: "Title",
      key: "title",
      dataIndex: "title",
    },
    {
      title: "Code",
      key: "code",
      dataIndex: "code",
    },
    {
      title: "Action",
      key: "x",
      render: () => {
        return <Button>Assign Faculty</Button>;
      },
    },
  ];

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

export default Courses;
