import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#00F",
      customStyle: {
        color: "#6F52ED",
        borderColor: "#6F52ED",
        fontFamily: "Abel",
        fontSize: 14,
        minHeight: 50,
        minWidth: 250,
      },
      buttonContained: {
        backgroundColor: "#6F52ED",
        fontFamily: "Abel",
        fontSize: 14,
        minHeight: 50,
        minWidth: 250,
      },
      buttonBack: {
        backgroundColor: "#F5F5F5",
        color: "#1976D2",
        fontFamily: "Abel",
        fontSize: 14,
        minHeight: 50,
        minWidth: 150,
        marginTop: 10,
        border: "none",
      },
      headingMain: {
        fontFamily: "Abel",
        fontSize: 30,
        color: "#000",
      },
      StudentDetailBG: {
        backgroundColor: "#F9F9F9",
        marginBottom: 15,
        paddingBlock: 20,
      },
      studentHeading: {
        fontFamily: "Mulish",
        fontSize: 30,
        color: "#000",
        marginBottom: 10,
      },
      studentDetails: {
        fontFamily: "Abel",
        fontSize: 25,
        color: "#000",
        marginBottom: 0,
      },
      studentStatus: {
        fontFamily: "Abel",
        fontSize: 34,
        color: "#000",
        marginBottom: 0,
      },
      studentStatusColor: {
        fontFamily: "Abel",
        fontSize: 34,
        color: "#FF0000",
        marginBottom: 0,
      },
      studentAssignmentTitle: {
        fontFamily: "Mulish",
        fontSize: 24,
        fontWeight: 700,
        color: "#000000",
        marginBottom: 10,
      },
      studentAssignmentTitleDetail: {
        fontFamily: "Mulish",
        fontSize: 20,
        fontWeight: 700,
        color: "#000000",
        marginBottom: 10,
        textDecoration: "underline",
      },
      tableStyles: {
        cursor: "pointer",
      },
      studentAssignmentProgressTitle: {
        fontFamily: "Mulish",
        fontSize: 35,
        fontWeight: 700,
        color: "#828282",
        marginBottom: 10,
      },
      timeline: {
        transform: "rotate(90deg)",
        width: "fit-content",
        marginInline: "auto",
      },
      timelineContentContainer: {
        textAlign: "left",
      },
      timelineContent: {
        display: "inline-block",
        transform: "rotate(-90deg)",
        textAlign: "center",
        minWidth: 50,
      },
      timelineIcon: {
        transform: "rotate(-90deg)",
      },
      allAssignmentDetailTagLine: {
        fontFamily: "Mulish",
        fontSize: 20,
        color: "#000000",
        marginBottom: 10,
      },
      allAssignmentStudentDetails: {
        marginBottom: "10px",
      },
      allAssignmentDetailInfo: {
        fontFamily: "Mulish",
        fontSize: 14,
        color: "#000000",
        fontWeight: 400,
      },
      allAssignmentDetailInfoContent: {
        fontFamily: "Mulish",
        fontSize: 14,
        color: "#A6ACBE",
        fontWeight: 400,
      },
    },
  },
  custom: {
    myOwnComponent: {
      margin: "10px 10px",
      backgroundColor: "lightgreen",
    },
  },
});

export { theme };
