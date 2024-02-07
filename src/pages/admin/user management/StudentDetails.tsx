import { useParams } from "react-router-dom";
import { useGetSingleStudentQuery } from "../../../redux/features/admin/userManagement.api";
import { TStudent } from "../../../types";
import { Card } from "antd";

const StudentDetails = () => {
  const { studentId } = useParams();
  const { data } = useGetSingleStudentQuery(studentId);

  const studentData: TStudent = data?.data;
  console.log(studentData);

  const {
    fullName,
    email,
    gender,
    contactNo,
    academicDepartment,
    academicFaculty,
    admissionSemester,
    bloogGroup,
    dateOfBirth,
    presentAddress,
    emergencyContactNo,
    guardian,
    localGuardian,
    permanentAddress,
    isDeleted,
    id,
    profileImg,
    user,
  } = studentData || {};

  return (
    <>
      <Card title={`Information of ${fullName}`} bordered={false}>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    </>
  );
};

export default StudentDetails;
