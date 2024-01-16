import { FC } from "react";

import { Layout, Menu, MenuProps } from "antd";

const { Header, Content, Footer, Sider } = Layout;

const items: MenuProps["items"] = [
  {
    key: "1",
    label: "Dashboard",
    children: [
      {
        key: "1.1",
        label: "Admin",
      },
      {
        key: "1.2",
        label: "Faculty",
      },
      {
        key: "1.3",
        label: "Student",
      },
    ],
  },
  {
    key: "2",
    label: "Users",
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
            <h1>The main content should go here </h1>
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
