import { useGetAllEnrolledCoursesQuery } from "../../redux/features/student/studentCourseManagement.api";

const MySchedule = () => {

    const {data:enrolledCourses} = useGetAllEnrolledCoursesQuery(undefined);
    
    console.log(enrolledCourses);


  return (
     <div>
         <h1>This is MySchedule component</h1>
     </div>
  )
};

export default MySchedule;