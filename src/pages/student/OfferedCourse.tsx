import { Button, Col, Row } from "antd";
import {
  useEnrollCourseMutation,
  useGetAllOfferedCoursesQuery,
} from "../../redux/features/student/studentCourseManagement.api";
import { TResponse } from "../../types";
import { toast } from "sonner";

type TCourse = {
  [index: string]: any;
};

const OfferedCourse = () => {
  const { data: offeredCourseData } = useGetAllOfferedCoursesQuery(undefined);
  const [enrollCourse] = useEnrollCourseMutation();

  // create new object to show in UI
  const singleObject = offeredCourseData?.data?.reduce((acc: TCourse, item) => {
    const key = item.course.title;
    acc[key] = acc[key] || { courseTitle: key, sections: [] };
    acc[key].sections.push({
      section: item.section,
      _id: item._id,
      days: item.days,
      startTime: item.startTime,
      endTime: item.endTime,
    });
    return acc;
  }, {});

  const modifiedData = Object.values(singleObject ? singleObject : {});

  // handle Enroll Course
  const handleEnroll = async (courseId: string) => {
    const toastId = toast.loading("Loading...");

    const enrollData = {
      offeredCourse: courseId,
    };

    try {
      const res = (await enrollCourse(enrollData)) as TResponse<any>;
      if (res.error) {
        toast.error(res.error.data.message, { id: toastId });
      } else {
        toast.success("Course Enrolled Successfully", { id: toastId });
      }
    } catch (err) {
      toast.error("Something went wrong", { id: toastId });
    }
  };

  return (
    <Row gutter={[0, 20]}>
      {modifiedData.map((item, index) => {
        return (
          <Col span={24} style={{ border: "solid #d4d4d4 2px" }} key={index}>
            <div style={{ padding: "10px" }}>
              <h2>{item.courseTitle}</h2>
            </div>
            <div>
              {item.sections.map((section, index) => {
                return (
                  <Row
                    key={index}
                    justify="space-between"
                    align="middle"
                    style={{ borderTop: "solid #d4d4d4 2px", padding: "10px" }}
                  >
                    <Col span={5}>Section: {section.section} </Col>
                    <Col span={5}>
                      days:{" "}
                      {section.days.map((day, index) => (
                        <span key={index}> {day} </span>
                      ))}
                    </Col>
                    <Col span={5}>Start Time: {section.startTime} </Col>
                    <Col span={5}>End Time: {section.endTime} </Col>
                    <Button onClick={() => handleEnroll(section._id)}>
                      Enroll
                    </Button>
                  </Row>
                );
              })}
            </div>
          </Col>
        );
      })}
    </Row>
  );
};

export default OfferedCourse;
