import { useGetAllSemestersQuery } from "../../../redux/features/admin/academicManagement.api";

const AcademicSemester = () => {
  const { data } = useGetAllSemestersQuery(undefined);
  console.log(data?.data);

  return (
    <div>
      {data?.data?.map((semester) => (
        <div key={semester._id}>
          <h1>{semester.name}</h1>
          <h2>{semester.year}</h2>
          <h3>{semester.code}</h3>
          <h3>{semester.startMonth}</h3>
        </div>
      ))}
    </div>
  );
};

export default AcademicSemester;
