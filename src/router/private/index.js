import {
  Home,
  EditAssignmentProfessor,
  ALLAssignmentProfessor,
  AssignmentDetails,
  InformationRoute,
  CandidateRoute,
  AllAssignmentsDetails,
} from "../routes";
import EditAssignmentsPage from "../../views/professor/edit-assignment";
import ProfessorDashBoard from "../../views/professor/professor-dashboard";
import AllAssignmentsPage from "../../views/professor/all-assignments";
import AssignmentDetailsPage from "../../views/professor/assignment-details";
import InformationPage from "../../views/professor/informations";
import CandidatePage from "../../views/professor/candidate";
import AllAssignmentsDetailsPage from "../../views/professor/all-assignment-details";

const privateRoutes = [
  //   {
  //     path: "/",
  //     title: "Home",
  //     component: ProfessorDashBoard,
  //   },
  {
    path: Home,
    title: "Home",
    component: ProfessorDashBoard,
  },
  {
    path: ALLAssignmentProfessor,
    title: "AllAssignments",
    component: AllAssignmentsPage,
  },
  {
    path: EditAssignmentProfessor,
    title: "Assignment",
    component: EditAssignmentsPage,
  },
  {
    path: AssignmentDetails,
    title: "Assignment Details",
    component: AssignmentDetailsPage,
  },
  {
    path: InformationRoute,
    title: "Information page",
    component: InformationPage,
  },
  {
    path: CandidateRoute,
    title: "Candidate page",
    component: CandidatePage,
  },
  {
    path: AllAssignmentsDetails,
    title: "All Assignment Detail page",
    component: AllAssignmentsDetailsPage,
  },
];

export default privateRoutes;
