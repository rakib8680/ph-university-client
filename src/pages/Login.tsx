import { Button } from "antd";
import { FieldValues, useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { TUser, setUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PHForm from "../components/form/PHForm";
import PHInput from "../components/form/PHInput";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  // login form
  const { register } = useForm({
    defaultValues: {
      id: "A-0001",
      password: "admin123",
    },
  });

  // login mutation
  const [login] = useLoginMutation();

  // handle submit
  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Loading...");

    try {
      const userInfo = {
        id: data.id,
        password: data.password,
      };

      const res = await login(userInfo).unwrap();
      const user = verifyToken(res.data.accessToken) as TUser;
      dispatch(setUser({ user, token: res.data.accessToken }));

      toast.success("Login Success", { id: toastId, duration: 2000 });
      navigate(`/${user.role}/dashboard`);
    } catch (error) {
      toast.error("Login Failed", { id: toastId, duration: 2000 });
    }
  };

  return (
    <PHForm onSubmit={onSubmit}>
      <div>
        <label htmlFor="id">ID: </label>
        <input type="text" id="id" {...register("id")} />
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <PHInput type="text" name="password" />
      </div>
      <Button htmlType="submit">Login</Button>
    </PHForm>
  );
};

export default Login;
