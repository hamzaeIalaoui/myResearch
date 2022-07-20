import { Grid, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import {
  checkManageCardImg,
  evaluateCardImg,
  postAssignmentsCardImg,
  studentsListCardImg,
  uploadAssignmentsCardImg,
  viewScoresCardImg,
} from "../../utils/images";
import { useTheme } from "@material-ui/core";

export default function FeatureSection() {
  const theme = useTheme();
  return (
    <section className="py-5">
      <div className="container">
        <Typography style={theme.palette.primary.homeMainHeading} variant="h2">
          LATEST PUBLICATIONS
        </Typography>
        <Typography
          style={theme.palette.primary.homeMainSubHeading}
          variant="h6"
        >
          text text text
        </Typography>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={4}>
            <Card
              style={theme.palette.primary.featureCard}
              sx={{ maxWidth: "100%" }}
            >
              <CardMedia
                component="img"
                alt="green iguana"
                height="310"
                image={postAssignmentsCardImg}
              />
              <CardContent>
                <Typography
                  style={theme.palette.primary.featureCardHeading}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  Title 1
                </Typography>
                <Typography
                  style={theme.palette.primary.featureCardDesc}
                  variant="body2"
                >
                  description 1
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card
              style={theme.palette.primary.featureCard}
              sx={{ maxWidth: "100%" }}
            >
              <CardMedia
                component="img"
                alt="green iguana"
                height="310"
                image={studentsListCardImg}
              />
              <CardContent>
                <Typography
                  style={theme.palette.primary.featureCardHeading}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  Title 2 
                </Typography>
                <Typography
                  style={theme.palette.primary.featureCardDesc}
                  variant="body2"
                >
                  description 2 
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card
              style={theme.palette.primary.featureCard}
              sx={{ maxWidth: "100%" }}
            >
              <CardMedia
                component="img"
                alt="green iguana"
                height="310"
                image={evaluateCardImg}
              />
              <CardContent>
                <Typography
                  style={theme.palette.primary.featureCardHeading}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  Title 3 
                </Typography>
                <Typography
                  style={theme.palette.primary.featureCardDesc}
                  variant="body2"
                >
                  description 3 
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card
              style={theme.palette.primary.featureCard}
              sx={{ maxWidth: "100%" }}
            >
              <CardMedia
                component="img"
                alt="green iguana"
                height="310"
                image={uploadAssignmentsCardImg}
              />
              <CardContent>
                <Typography
                  style={theme.palette.primary.featureCardHeading}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  Title 4 
                </Typography>
                <Typography
                  style={theme.palette.primary.featureCardDesc}
                  variant="body2"
                >
                  description 4 
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card
              style={theme.palette.primary.featureCard}
              sx={{ maxWidth: "100%" }}
            >
              <CardMedia
                component="img"
                alt="green iguana"
                height="310"
                image={checkManageCardImg}
              />
              <CardContent>
                <Typography
                  style={theme.palette.primary.featureCardHeading}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  Title 5 
                </Typography>
                <Typography
                  style={theme.palette.primary.featureCardDesc}
                  variant="body2"
                >
                  description 5 
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card
              style={theme.palette.primary.featureCard}
              sx={{ maxWidth: "100%" }}
            >
              <CardMedia
                component="img"
                alt="green iguana"
                height="310"
                image={viewScoresCardImg}
              />
              <CardContent>
                <Typography
                  style={theme.palette.primary.featureCardHeading}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  Title 6
                </Typography>
                <Typography
                  style={theme.palette.primary.featureCardDesc}
                  variant="body2"
                >
                  description 6
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </section>
  );
}
