import { Button, Col, Flex } from "antd";
import PHForm from "../../../components/form/PHForm";
import PHSelect from "../../../components/form/PHSelect";
import PHInput from "../../../components/form/PHInput";
import PHDatePicker from "../../../components/form/PHDatePicker";

const SemesterRegistration = () => {




  

  return (
    <Flex justify="center" align="center">
    <Col span={6}>
      <PHForm onSubmit={onSubmit}>
        <PHSelect
          label="Academic Semester"
          name="academicSemester"
          options={academicSemesterOptions}
        />

        <PHSelect
          name="status"
          label="Status"
          options={semesterStatusOptions}
        />
        <PHDatePicker name="startDate" label="Start Date" />
        <PHDatePicker name="endDate" label="End Date" />
        <PHInput type="text" name="minCredit" label="Min Credit" />
        <PHInput type="text" name="maxCredit" label="Max Credit" />

        <Button htmlType="submit">Submit</Button>
      </PHForm>
    </Col>
  </Flex>
  )
};

export default SemesterRegistration;