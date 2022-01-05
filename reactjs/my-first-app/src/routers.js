
import { TeamOutlined } from "@ant-design/icons"
import { AddStudent } from "./views/components/students/AddStudent/AddStudent";
import { ListStudent } from "./views/components/students/ListStudent/ListStudent";

const routers = [
    {
        path: "students",
        title: "Students",
        icon: <TeamOutlined />,
        children: [
            {
                path: "/add-student",
                title: "Add student",
                component: <AddStudent />
            },
            {
                path: "/list-student",
                title: "List Student",
                component: <ListStudent />
            }
        ]
    },
    {
        path: "Test",
        title: "Test",
        icon: "",
        component: "Test"
    },
    {
        path: "/classes",
        title: "Class Management",
        icon: "",
        component: <h3>Class management</h3>
    },
]

export default routers;