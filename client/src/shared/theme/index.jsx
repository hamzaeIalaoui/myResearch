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
      // Student CSS Start
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
      AssesmentTitle: {
        fontFamily: "Mulish",
        fontStyle: "normal",
        fontWeight: 700,
        fontSize: 32,
        color: "#000000",
      },
      AssignmentDetails: {
        backgroundColor: "#FFFFFF",
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
      AssignmentRemarks: {
        marginTop: 25,
      },
      AssignmentRemarks2: {
        marginTop: 15,
      },
      ResumeSection: {
        marginTop: 15,
      },
      Resume: {
        marginTop: 20,
      },
      ResumeTitle: {
        fontFamily: "Abel",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: 15,
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
        fontSize: 18,
        fontWeight: 700,
        color: "#000000",
        marginBottom: 10,
        textDecoration: "underline",
      },
      PdfIcon: {
        width: 50,
        height: 50,
        marginTop: 5,
        marginLeft: 40,
      },
      PdfFileTitle: {
        fontFamily: "Mulish",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: 18,
        textDecorationLine: "underline",
        color: "#000000",
        marginTop: 15,
      },
      TickIcon: {
        color: "#00EE34",
        paddingRight: 10,
        alignItems: "center",
      },
      HourGlassIcon: {
        paddingRight: 10,
        alignItems: "center",
      },
      PdfFileStatus: {
        display: "flex",
        background: "rgba(0, 238, 52, 0.15)",
        borderRadius: 8,
        width: "auto",
        padding: 13,
        height: 30,
        alignItems: "center",
        marginLeft: 30,
        marginTop: 15,
      },
      PdfFileStatusUploadButton: {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: 15,
        color: "rgba(0, 0, 0, 0.87)",
      },
      PdfFileStatusUpload: {
        background: "#F5F5F5",
        borderRadius: 4,
      },
      FileUploadButton: {
        background: "#F5F5F5",
        borderRadius: 4,
        color: "rgba(0, 0, 0, 0.87)",
        marginLeft: 50,
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: 13,
      },
      ProposalUploadButton: {
        background: "#F5F5F5",
        borderRadius: 4,
        color: "rgba(0, 0, 0, 0.87)",
        marginLeft: 2,
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: 13,
      },
      ResumeUploadButton: {
        marginLeft: 80,
      },
      PdfFileStatusPending: {
        display: "flex",
        borderRadius: 8,
        width: "auto",
        padding: 13,
        height: 30,
        alignItems: "center",
        marginLeft: 30,
        marginTop: 15,
      },

      PdfFileStatusTitle: {
        fontFamily: "Mulish",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: 18,
        color: "#00EE34",
      },
      PdfFileStatusPendingTitle: {
        fontFamily: "Mulish",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: 18,
      },
      AssesmentSubTitle: {
        fontFamily: "Mulish",
        fontStyle: "normal",
        fontWeight: 600,
        fontSize: 30,
        color: "#828282",
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
      BorderLine: {
        borderTop: 2,
      },
      ApplyAssignmentText: {
        fontFamily: "Abel",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: 13,
        color: "#000000",
        marginTop: 5,
      },
      ResumeSection: {
        marginTop: 7,
        marginBottom: 7,
      },
      // Student CSS end
      // Landing CSS start
      navMain: {
        paddingLeft: 0,
        marginLeft: 0,
        backgroundColor: "#fff",
      },
      navLogo: {
        backgroundColor: "var(--primary-color)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 65,
        width: "80px",
      },
      navLogoImg: {
        width: 40,
      },
      navItems: {
        fontFamily: "Abel",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: 25,
        color: "#373B53",
        textDecoration: "none",
      },
      navButton: {
        fontFamily: "Abel",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: 18,
        color: "#fff",
        textDecoration: "none",
        backgroundColor: "#6F52ED",
        display: "flex",
        alignItems: "center",
        gap: 5,
      },
      heroBanner: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        minHeight: "100vh",
      },
      heroBannerHeading: {
        fontFamily: "Abel",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: 60,
        color: "#fff",
        textAlign: "center",
        marginBottom: "30px",
      },
      heroBannerDesc: {
        fontFamily: "Abel",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: 25,
        color: "#fff",
        textAlign: "center",
        width: "60%",
        marginInline: "auto",
      },
      homeMainHeading: {
        fontFamily: "Abel",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: 50,
        color: "#1B1D21",
        textAlign: "center",
        marginBottom: "30px",
      },
      homeMainSubHeading: {
        fontFamily: "Mulish",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: 20,
        color: "#1B1D21",
        textAlign: "center",
        marginBottom: "30px",
      },
      featureCard: {
        boxShadow: "0px 4px 53px rgba(0, 0, 0, 0.09)",
        minHeight: 450,
        borderRadius: 10,
      },
      featureCardHeading: {
        fontFamily: "Abel",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: 24,
        color: "#373B53",
      },
      featureCardDesc: {
        fontFamily: "Mulish",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: 14,
        color: "#252733",
      },
      infoSection: {
        backgroundColor: "#FBF9FF",
      },
      infoSectionHeading: {
        fontFamily: "Abel",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: 50,
        color: "#373B53",
        marginBottom: "20px",
      },
      infoSectionDesc: {
        fontFamily: "Mulish",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: 22,
        color: "#000",
      },
      // Landing Css end
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
      // today

      informationCardTitle: {
        fontFamily: "Abel",
        fontSize: 28,
        color: "#000000",
        fontWeight: 400,
      },
      informationCardSubTitle: {
        fontFamily: "Abel",
        fontSize: 14,
        color: "#A6ACBE",
        fontWeight: 400,
      },
      averageCardMain: {
        display: "flex",
      },
      averageCard: {
        flexBasis: "49%",
        backgroundColor: "#FFFFFF",
        borderRadius: "10",
        border: "2px solid #EDEDF6",
      },
      averageCardTitle: {
        fontFamily: "Abel",
        fontSize: 14,
        color: "#000000",
        fontWeight: 400,
        marginBottom: 0,
      },
      averageCardSelect: {
        fontFamily: "Abel",
        fontSize: 14,
        color: "#A6ACBE",
        fontWeight: 400,
      },
      averageCardDataTitle: {
        fontFamily: "Abel",
        fontSize: 14,
        color: "#A6ACBE",
        fontWeight: 400,
      },
      averageCardDataPercentage: {
        fontFamily: "Abel",
        fontSize: 14,
        color: "#000000",
        fontWeight: 400,
      },
      allCandidateCardTitle: {
        fontFamily: "Mulish",
        fontSize: 26,
        color: "#081F32",
        fontWeight: 400,
      },
      allCandidateCardSubTitle: {
        fontFamily: "Mulish",
        fontSize: 16,
        color: "#989898",
        fontWeight: 400,
        display: "inline-block",
        marginLeft: "10px",
      },
      allCandidateCardDesc: {
        fontFamily: "Mulish",
        fontSize: 18,
        color: "#6E798C",
        fontWeight: 400,
      },
      allCandidateDetailBtn: {
        backgroundColor: "#F5F5F5",
        fontFamily: "Mulish",
        fontSize: 14,
        minHeight: 50,
        minWidth: 200,
        color: "#081F32",
      },
      allCandidateDenyBtn: {
        fontFamily: "Mulish",
        fontSize: 14,
        minHeight: 30,
        minWidth: 100,
        color: "#081F32",
        border: "1px solid #ff0000",
      },
      allCandidateApproveBtn: {
        fontFamily: "Mulish",
        fontSize: 14,
        minHeight: 30,
        minWidth: 100,
        color: "#081F32",
        border: "1px solid #21B8C7",
      },
      CandidateDetailApproveBtn: {
        fontFamily: "Abel",
        backgroundColor: "#66BB6A",
        fontSize: 18,
        minHeight: 40,
        minWidth: 145,
        color: "#FFF",
      },
      CandidateDetailDenyBtn: {
        fontFamily: "Abel",
        backgroundColor: "#F44336",
        fontSize: 18,
        minHeight: 40,
        minWidth: 145,
        color: "#FFF",
      },
      CandidateDetailTitle: {
        fontFamily: "Mulish",
        fontSize: 40,
        color: "#081F32",
        marginBottom: "10px",
      },
      CandidateDetailMajor: {
        fontFamily: "Abel",
        fontSize: 20,
        color: "#000",
        marginBottom: "10px",
      },
      CandidateDetailSocialBtnlinkedin: {
        fontFamily: "Abel",
        backgroundColor: "#2867B2",
        fontSize: 18,
        minHeight: 60,
        minWidth: 60,
        color: "#FFF",
        borderRadius: "50%",
        border: "none",
      },
      CandidateDetailSocialBtnGit: {
        fontFamily: "Abel",
        backgroundColor: "#231E1B",
        fontSize: 18,
        minHeight: 60,
        minWidth: 60,
        color: "#FFF",
        borderRadius: "50%",
        border: "none",
      },

      CandidateDetailMainBox: {
        width: "100%",
        height: "400px",
        border: "2px solid #EDEDF6",
        borderRadius: "10px",
        padding: "20px",
        overflow: "auto",
      },
      CandidateDetailSubHeading: {
        fontFamily: "Mulish",
        fontSize: 30,
        color: "#081F32",
        marginBottom: "10px",
      },
      CandidateDetailBoxDesc: {
        fontFamily: "Mulish",
        fontSize: 20,
        color: "#081F32",
        marginBottom: "10px",
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