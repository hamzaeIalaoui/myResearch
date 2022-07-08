import { FolderOpen, ListAltRounded, BarChartOutlined, InsertDriveFileOutlined } from "@mui/icons-material";
import { ALLAssignmentProfessor, InformationRoute, CandidateRoute } from "./routes";

export const sidebarRoutes = [
    {
        link: "/",
        icon: <FolderOpen />,
        text: "Home"
    },
    {
        link: ALLAssignmentProfessor,
        icon: <ListAltRounded />,
        text: "My Assignments"
    },
    {
        link: InformationRoute,
        icon: <BarChartOutlined />,
        text: "Information"
    },
    {
        link: CandidateRoute,
        icon: <InsertDriveFileOutlined />,
        text: "My Assignments"
    }
]