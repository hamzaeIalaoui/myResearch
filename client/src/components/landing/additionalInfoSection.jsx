import { Grid, Typography } from "@mui/material";
import { howItWorksImg, solutionsImg } from "../../utils/images";
import { useTheme } from "@material-ui/core";

export default function AdditionalInfo() {
  const theme = useTheme();
  return (
    <section style={theme.palette.primary.infoSection} className="py-5">
      <div className="container">
      <Typography style={theme.palette.primary.homeMainHeading} variant="h2">
          SUCCESS STORIES
        </Typography>
        <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
          
          <Grid item xs={6}>
            <img className="img-fluid" src={solutionsImg} alt="" />
          </Grid>
          
          <Grid
            item
            xs={6}
            className="d-flex flex-column justify-content-center"
          >
            
            <Typography
              style={theme.palette.primary.infoSectionHeading}
              variant="h2"
            >
              STORY TITLE 1
            </Typography>
            <Typography
              style={theme.palette.primary.infoSectionDesc}
              variant="h6"
            >
              txt txt txt txt txt txt 
            </Typography>
          </Grid>
          <Grid
            item
            xs={6}
            className="d-flex flex-column justify-content-center"
          >
            <Typography
              style={theme.palette.primary.infoSectionHeading}
              variant="h2"
            >
              STORY TITLE 2
            </Typography>
            <Typography
              style={theme.palette.primary.infoSectionDesc}
              variant="h6"
            >
             txt txt txt txt txt txt 
 
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <img className="img-fluid" src={howItWorksImg} alt="" />
          </Grid>
        </Grid>
      </div>
    </section>
  );
}
