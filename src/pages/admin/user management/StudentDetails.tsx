import { useParams } from "react-router-dom";
import { useGetSingleStudentQuery } from "../../../redux/features/admin/userManagement.api";
import { TStudent } from "../../../types";
import { Card, Divider } from "antd";

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
    <div className="container mx-auto">
      <Card className="">
        <h1 className="text-xl font-semibold text-slate-500 ">
          Information of{" "}
          <span className="font-black text-blue-400">{fullName}</span>
        </h1>
        <Divider />
        <div>
          
        </div>
      </Card>
    </div>
  );
};

export default StudentDetails;
