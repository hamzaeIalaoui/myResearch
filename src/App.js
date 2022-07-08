import AppRouter from "./router"

import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/css/main.css"
import { MuiThemeProvider } from "@material-ui/core";
import { theme } from "./shared/theme"

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <AppRouter />
    </MuiThemeProvider>
  );
}

export default App;
