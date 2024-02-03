import { selectCurrentUser } from "../../redux/features/auth/authSlice";
import { useAppSelector } from "../../redux/hooks";
import { adminPaths } from "../../routes/admin.routes";
import { facultyPaths } from "../../routes/faculty.routes";
import { studentPaths } from "../../routes/student.routes";
import { sidebarItemsGenerator } from "../../utils/sidebarItemsGenerator";
import { Menu, Layout } from "antd";

const { Sider } = Layout;

const userRole = {
  ADMIN: "admin",
  FACULTY: "faculty",
  STUDENT: "student",
};

const Sidebar = () => {
  const user = useAppSelector(selectCurrentUser);
  const role = user?.role;

  let sidebarItems;

  switch (role) {
    case userRole.ADMIN:
      sidebarItems = sidebarItemsGenerator(adminPaths, "admin");
      break;
    case userRole.FACULTY:
      sidebarItems = sidebarItemsGenerator(facultyPaths, "faculty");
      break;
    case userRole.STUDENT:
      sidebarItems = sidebarItemsGenerator(studentPaths, "student");
      break;

    default:
      break;
  }

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
      style={{
        height: "100vh",
        position: "sticky",
        top: "0",
        left: "0",
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
        items={sidebarItems}
        style={{ marginTop: "30px" }}
      />
    </Sider>
  );
};

export default Sidebar;
