import { Button, Col, Flex } from "antd";
import PHForm from "../../../components/form/PHForm";
import PHSelect from "../../../components/form/PHSelect";
import PHInput from "../../../components/form/PHInput";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useGetAllAcademicDepartmentQuery, useGetAllAcademicFacultyQuery } from "../../../redux/features/admin/academicManagement.api";

const OfferCourse = () => {
  const {data:academicFaculties} = useGetAllAcademicFacultyQuery(undefined);
  const {data:academicDepartment} = useGetAllAcademicDepartmentQuery(undefined);


  const academicFacultyOptions = academicFaculties?.data?.map((item) => ({
    value: item._id,
    label: item.name,
  }));
  const academicDepartmentOptions = academicDepartment?.data?.map((item) => ({
    value: item._id,
    label: item.name,
  }));


  const onSubmit: SubmitHandler<FieldValues> = (values)=>{
    console.log(values)
  }

  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <PHForm onSubmit={onSubmit}>
          <PHSelect
            label="Academic Faculty"
            name="academicFaculty"
            options={academicFacultyOptions}
          />

          <PHSelect
            name="academicDepartment"
            label="Academic Department"
            options={academicDepartmentOptions}
          />
          <PHInput type="text" name="minCredit" label="Min Credit" />

          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default OfferCourse;
