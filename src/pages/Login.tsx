import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";

const Login = () => {

  const dispatch = useAppDispatch();

  // login form
  const { register, handleSubmit } = useForm({
    defaultValues: {
      id: "A-0001",
      password: "admin123",
    },
  });

  // login mutation
  const [login, {error, isSuccess }] = useLoginMutation();
  // console.log(data, error, isSuccess);


  // handle submit 
  const onSubmit = async (data: { id: string; password: string }) => {
    const userInfo = {
      id: data.id,
      password: data.password,
    };

   const res =  await login(userInfo).unwrap();
   dispatch(setUser({user:{}, token: res.data.accessToken}))
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="id">ID: </label>
        <input type="text" id="id" {...register("id")} />
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input type="text" id="password" {...register("password")} />
      </div>
      <Button htmlType="submit">Login</Button>
    </form>
  );
};

export default Login;
