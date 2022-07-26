import AppRouter from "./router"

import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/css/main.css"
import { MuiThemeProvider } from "@material-ui/core";
import { theme } from "./shared/theme"
import {useCookies} from 'react-cookie';
import axios from 'axios';


function App() {
  const [cookies, setCookie] = useCookies();

  //if the cookies.accessToken exists then check its validity
  if(cookies.accessToken){
    const token = cookies.accessToken;
     axios.post("http://localhost:4000/login", {
      email: process.env.REACT_APP_EMAIL,
      password: process.env.REACT_APP_PASSWORD,
    }).then((res) => {

      axios.post("http://localhost:3001/api/users/check-valid-token", {
        token: token,

      },
        {
          headers: {
            'Authorization': "Bearer " + res.data.accessToken,
            'Content-Type': 'application/json'


          }
        }

      ).then((res) => {
        
        


      }
      
      
      ).catch((err) => {
        
        console.log(err)
        if(err.response.status === 403){
            setCookie('accessToken', '');
            alert("Your session has expired. Please sign in again.")
            window.location.href = "/";
        }
      }
      )



    }
    ).catch((err) => {
      console.log(err);
    }
    )
    
    } 
  return (
    <MuiThemeProvider theme={theme}>
      <AppRouter />
    </MuiThemeProvider>
  );
}

export default App;
