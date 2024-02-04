import { Button, Col, Flex } from "antd";
import PHForm from "../../../components/form/PHForm";
import PHInput from "../../../components/form/PHInput";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useAddAcademicFacultyMutation } from "../../../redux/features/admin/academicManagement.api";
import { zodResolver } from "@hookform/resolvers/zod";
import { academicFacultySchema } from "../../../schemas/academicManagement.schema";
import { toast } from "sonner";

const CreateAcademicFaculty = () => {
  const [CreateAcademicFaculty] = useAddAcademicFacultyMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Creating...");
    const academicFacultyName = {
      name: `Faculty of ${data.name}`,
    };

    try {
      const res = await CreateAcademicFaculty(academicFacultyName).unwrap();
      console.log(res);
      if (res.error) {
        toast.error(res.error.data.message, { id: toastId, duration: 3000 });
      } else {
        toast.success("Academic Faculty created", { id: toastId, duration: 3000 });
      }
    } catch (error: any) {
      toast.error(error.data.message, { id: toastId, duration: 3000 });
      console.log(error);
    }
  };

  return (
    <Flex align="center" justify="center">
      <Col span={6}>
        <PHForm
          onSubmit={onSubmit}
          resolver={zodResolver(academicFacultySchema)}
        >
          <PHInput type="text" label="Academic Faculty Name" name="name" />
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default CreateAcademicFaculty;
