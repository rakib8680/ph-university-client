import { adminPaths } from "../../routes/admin.routes";
import { sidebarItemsGenerator } from "../../utils/sidebarItemsGenerator";
import { Menu, Layout } from "antd";

const { Sider } = Layout;

const Sidebar = () => {
  return (
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
        items={sidebarItemsGenerator(adminPaths, "admin")}
        style={{ marginTop: "30px" }}
      />
    </Sider>
  );
};

export default Sidebar;
