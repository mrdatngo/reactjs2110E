
import { TeamOutlined } from "@ant-design/icons"
import { Counter } from "./views/components/counter/Counter";
import { AddStudent } from "./views/components/students/AddStudent/AddStudent";
import { ListStudent } from "./views/components/students/ListStudent/ListStudent";
import { ListStudentClassComp } from "./views/components/students/ListStudent/ListStudentClassComp";

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
            },
            {
                path: "/list-student-class-component",
                title: "List Student Class Component",
                component: <ListStudentClassComp />
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
    {
        path: "/counter",
        title: "Counter",
        icon: "",
        component: <Counter />
    },
]

export default routers;