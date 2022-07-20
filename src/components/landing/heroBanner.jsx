import { Typography } from "@mui/material";
import { useTheme } from "@material-ui/core";

export default function HeroBanner() {
  const theme = useTheme();
  return (
    <section style={theme.palette.primary.heroBanner} className="hero-banner">
      <div>
        <Typography
          style={theme.palette.primary.heroBannerHeading}
          variant="h2"
        >
          MyResearch
        </Typography>
        <Typography style={theme.palette.primary.heroBannerDesc} variant="h6">
          MyResearch helps student be engaged in research and find the best opportunities to do it.
        </Typography>
      </div>
    </section>
  );
}
