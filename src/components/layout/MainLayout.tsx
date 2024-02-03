import { FC } from "react";
import { Button, Layout } from "antd";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useAppDispatch } from "../../redux/hooks";
import { logout } from "../../redux/features/auth/authSlice";

const { Header, Content } = Layout;

// const items: MenuProps["items"] = [
//   {
//     key: "Dashboard",
//     label: <NavLink to='/admin/dashboard'>Dashboard</NavLink>,
//   },
//   {
//     key: "User Management",
//     label: "User Management",
//     children: [
//       {
//         key: "Create Student",
//         label: <NavLink to='/admin/create-student'>Create Student</NavLink>,
//       },
//       {
//         key: "Create Admin",
//         label: <NavLink to='/admin/create-admin'>Create Admin</NavLink>,
//       },
//       {
//         key: "Create Faculty",
//         label: <NavLink to='/admin/create-faculty'>Create Faculty</NavLink>,
//       },
//     ],
//   },
//   {
//     key: "3",
//     label: "Roles",
//   },
//   {
//     key: "4",
//     label: "Permissions",
//   },
//   {
//     key: "5",
//     label: "Settings",
//   },
// ];

const MainLayout: FC = () => {
  const dispatch = useAppDispatch();

  const handleLogOut = () => {
    dispatch(logout());
  };

  return (
    <Layout style={{ height: "100%" }}>
      <Sidebar />
      <Layout>
        <Header>
          <Button onClick={handleLogOut}>LogOut</Button>
        </Header>
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
