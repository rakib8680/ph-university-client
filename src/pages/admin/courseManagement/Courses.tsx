import { Button, Modal, Table, TableColumnsType } from "antd";
import { useGetAllCoursesQuery } from "../../../redux/features/admin/courseManagement.api";
import { TCourse } from "../../../types";
import { useState } from "react";
import PHForm from "../../../components/form/PHForm";
import PHSelect from "../../../components/form/PHSelect";
import { FieldValues } from "react-hook-form";

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
      render: (item) => {
        return <AddFacultyModal data={item} />;
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

const AddFacultyModal = ({data}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const {} = use

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (values:FieldValues) => {
    console.log(values);
  }

  return (
    <>
      <Button type="default" onClick={showModal}>
        Assign Faculty
      </Button>
      <Modal title="Basic Modal"  open={isModalOpen} onOk={handleOk}>
        <PHForm onSubmit={handleSubmit}>
          <PHSelect/>
        </PHForm>
      </Modal>
    </>
  );
};

export default Courses;
