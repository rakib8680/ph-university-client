import { Button, Row } from "antd";
import PHForm from "../components/form/PHForm";
import PHInput from "../components/form/PHInput";
import { FieldValues } from "react-hook-form";
import { useChangePasswordMutation } from "../redux/features/admin/userManagement.api";
import { toast } from "sonner";
import { TResponse } from "../types";
import { useAppDispatch } from "../redux/hooks";
import { logout } from "../redux/features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const ChangePassword = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [changePassword] = useChangePasswordMutation();

  const handleSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Loading...");

    const payload = {
      ...data,
    };

    try {
      const res = (await changePassword(payload)) as TResponse<any>;
      if (res?.data?.success) {
        toast.success("Password Changed Successfully", { id: toastId });
        dispatch(logout());
        navigate("/login");
      }
    } catch (err) {
      toast.error("Something went wrong", { id: toastId });
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-[100vh] gap-40">
      <h1 className="text-center text-3xl text-slate-600 -mt-40">
        Change Your Current Password !
      </h1>
      <Row justify="center" align="middle" style={{ height: "" }}>
        <PHForm onSubmit={handleSubmit}>
          <PHInput type="text" name="oldPassword" label="Old Password" />
          <PHInput type="text" name="newPassword" label="New Password" />
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Row>
    </div>
  );
};

export default ChangePassword;
