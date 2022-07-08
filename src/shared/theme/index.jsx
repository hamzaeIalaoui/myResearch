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
      studentCard: {
        marginTop: 20,
        background:
          "linear-gradient(90deg, rgba(142,215,238,1) 0%, rgba(0,170,181,1) 100%)",
        paddingLeft: 30,
        paddingTop: 20,
        paddingRight: 10,
        borderRadius: 8,
      },
      StudentDetailBG: {
        backgroundColor: "#F9F9F9",
        marginBottom: 15,
        paddingBlock: 20,
      },
      CardAssignmentTitle: {
        fontFamily: "Mulish",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: 18,
        display: "flex",
        alignItems: "center",
        letterSpacing: "0.01rem",
        paddingTop: 15,
      },
      CardButton: {
        marginTop: 20,
        marginBottom: 20,
        fontFamily: "Mulish",
        fontStyle: "normal",
        fontWeight: 600,
        fontSize: 12,
        letterSpacing: 0.4,
        backgroundColor: "#ffff",
        color: "#000000",
        borderRadius: 7,
      },
      StatusTitle: {
        fontFamily: "Abel",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: 25,
        letterSpacing: "0.03em",
        color: "#FFFFFF",
      },
      StatusDescriptionLate: {
        fontFamily: "Abel",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: 25,
        letterSpacing: "0.03em",
        color: "#FF0000",
        paddingRight: 20,
      },
      StatusDescriptionPending: {
        fontFamily: "Abel",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: 25,
        letterSpacing: "0.03em",
        color: "#FEC400",
        paddingRight: 20,
      },
      StatusDescriptionFinished: {
        fontFamily: "Abel",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: 25,
        letterSpacing: "0.03em",
        color: "#00563A",
        paddingRight: 20,
      },
      studentCardAvatar: {
        width: 70,
        height: 70,
      },
      studentHeading: {
        fontFamily: "Mulish",
        fontSize: 30,
        color: "#000",
        marginBottom: 10,
      },
      studentCardHeading: {
        fontFamily: "Mulish",
        fontStyle: "normal",
        fontWeight: 600,
        fontSize: 18,
        display: "flex",
        alignItems: "center",
        letterSpacing: "0.01rem",
      },
      studentCardSubHeading: {
        fontFamily: "Mulish",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: 18,
        display: "flex",
        alignItems: "center",
        letterSpacing: "0.01rem",
      },
      studentCardDescription: {
        fontFamily: "Mulish",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: 22,
        display: "flex",
        alignItems: "center",
        letterSpacing: "0.01rem",
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
      CardDate: {
        paddingRight: 20,
        fontFamily: "Abel",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: 18,
        textAlign: "right",
        letterSpacing: "0.01em",
        color: "#FFFFFF",
      },
      AddIcon: {
        marginTop: 20,
        width: 80,
        height: 80,
        color: "rgba(164, 164, 164, 0.54)",
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
