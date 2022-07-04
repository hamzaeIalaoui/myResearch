import { Home, EditAssignmentProfessor, ALLAssignmentProfessor } from '../routes';
import EditAssignment from '../../components/professor-dashboard/editAssignment';
import ProfessorDashBoard from '../../views/professor-dashboard';
import AllAssignments from '../../components/professor-dashboard/allAssignments';


const publicRoutes = [
    {
        path: '/',
        title: 'Home',
        component: ProfessorDashBoard,
    },
    {
        path: Home,
        title: 'Home',
        component: ProfessorDashBoard,
    },
    {
        path: ALLAssignmentProfessor,
        title: 'AllAssignments',
        component: AllAssignments,
    },
    {
        path: EditAssignmentProfessor,
        title: 'Assignment',
        component: EditAssignment,
    },
];

export default publicRoutes;