import { FC } from "react";

import { Layout, Menu, MenuProps } from "antd";
import { NavLink, Outlet } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;

const items: MenuProps["items"] = [
  {
    key: "Dashboard",
    label: <NavLink to='/admin/dashboard'>Dashboard</NavLink>,
  },
  {
    key: "User Management",
    label: "User Management",
    children: [
      {
        key: "Create Student",
        label: <NavLink to='/admin/create-student'>Create Student</NavLink>,
      },
      {
        key: "Create Admin",
        label: <NavLink to='/admin/create-admin'>Create Admin</NavLink>,
      },
      {
        key: "Create Faculty",
        label: <NavLink to='/admin/create-faculty'>Create Faculty</NavLink>,
      },
    ],
  },
  {
    key: "3",
    label: "Roles",
  },
  {
    key: "4",
    label: "Permissions",
  },
  {
    key: "5",
    label: "Settings",
  },
];

const MainLayout: FC = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={() => {
          // console.log(broken);
        }}
        onCollapse={() => {
          // console.log(collapsed, type);
        }}
      >
        <div
          style={{
            color: "white",
            fontSize: "1.1rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "10px",
            fontWeight: "bold",
          }}
        >
          PH University
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={items}
          style={{ marginTop: "30px" }}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0 }} />
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
        <Footer style={{ textAlign: "center" }}>
          ©{new Date().getFullYear()} Created by Rakib Khan
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
