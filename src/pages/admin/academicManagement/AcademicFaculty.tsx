import { useGetAllAcademicFacultyQuery } from "../../../redux/features/admin/academicManagement.api";

const AcademicFaculty = () => {

  const {data, isFetching} = useGetAllAcademicFacultyQuery(undefined);

  console.log(data);

  return (
     <div>
         <h1>This is AcademicFaculty component</h1>
     </div>
  )
};

export default AcademicFaculty;