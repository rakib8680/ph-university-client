import { Button, Modal, Table, TableColumnsType } from "antd";
import {
  useAssignFacultiesMutation,
  useGetAllCoursesQuery,
} from "../../../redux/features/admin/courseManagement.api";
import { TCourse, TResponse } from "../../../types";
import { useState } from "react";
import PHForm from "../../../components/form/PHForm";
import PHSelect from "../../../components/form/PHSelect";
import { FieldValues } from "react-hook-form";
import { useGetAllFacultiesQuery } from "../../../redux/features/admin/userManagement.api";
import { toast } from "sonner";

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

const AddFacultyModal = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: faculties } = useGetAllFacultiesQuery(undefined);
  const [assignFaculty] = useAssignFacultiesMutation();

  const facultyOptions = faculties?.data?.map((faculty) => ({
    label: `${faculty.fullName} - ${faculty.designation}`,
    value: faculty._id,
  }));

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // assign faculty to course
  const handleSubmit = async (values: FieldValues) => {
    const toastId = toast.loading("Loading...");
    const assignFacultyData = {
      courseId: data?.key,
      facultyIds: {
        faculties: values.faculties,
      },
    };

    try {
      const res = (await assignFaculty(assignFacultyData)) as TResponse<any>;
      if (res.error) {
        toast.error(res.error.data.message, { id: toastId });
      } else {
        toast.success("Faculty Assigned", { id: toastId });
      }
    } catch (err) {
      toast.error("Something went wrong", { id: toastId });
    }
  };

  return (
    <>
      <Button type="default" onClick={showModal}>
        Assign Faculty
      </Button>
      <Modal
        footer={null}
        title="Basic Modal"
        open={isModalOpen}
        onCancel={handleCancel}
      >
        <PHForm onSubmit={handleSubmit}>
          <PHSelect
            options={facultyOptions}
            label="Faculties"
            name="faculties"
            mode="multiple"
          />
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Modal>
    </>
  );
};

export default Courses;
