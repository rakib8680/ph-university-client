import { useParams } from "react-router-dom";
import { useGetSingleStudentQuery } from "../../../redux/features/admin/userManagement.api";

const StudentDetails = () => {
  const { studentId } = useParams();
  const { data: studentData } = useGetSingleStudentQuery(studentId );

  console.log(studentData);

  return (
    <div>
      <h1>This is StudentDetails of {studentId}</h1>
    </div>
  );
};

export default StudentDetails;
