import { Home, EditAssignmentProfessor, ALLAssignmentProfessor, AssignmentDetails, InformationRoute, CandidateRoute, AllAssignmentsDetails } from '../routes';
import EditAssignmentsPage from '../../views/edit-assignment';
import ProfessorDashBoard from '../../views/professor-dashboard';
import AllAssignmentsPage from '../../views/all-assignments';
import AssignmentDetailsPage from "../../views/assignment-details"
import InformationPage from "../../views/informations"
import CandidatePage from '../../views/candidate';
import AllAssignmentsDetailsPage from '../../views/all-assignment-details';


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
        component: AllAssignmentsPage,
    },
    {
        path: EditAssignmentProfessor,
        title: 'Assignment',
        component: EditAssignmentsPage,
    },
    {
        path: AssignmentDetails,
        title: 'Assignment Details',
        component: AssignmentDetailsPage,
    },
    {
        path: InformationRoute,
        title: 'Information page',
        component: InformationPage,
    },
    {
        path: CandidateRoute,
        title: 'Candidate page',
        component: CandidatePage,
    },
    {
        path: AllAssignmentsDetails,
        title: 'All Assignment Detail page',
        component: AllAssignmentsDetailsPage,
    },
];

export default publicRoutes;