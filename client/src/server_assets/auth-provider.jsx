import { PublicClientApplication } from '@azure/msal-browser';

const msalConfig = {
  auth: {
    clientId: '18c5a6ac-3645-4abc-9ce4-b52d2ff6e454',
    redirectUri: `${
      process.env.REACT_APP_REDIRECT_URI || window.location.origin
    }`,
    authority: `https://login.microsoftonline.com/7025e04c-70ca-48bf-ab7b-73954cb846ad`,
    
  },
  cache: {
    cacheLocation: 'sessionStorage',
    storeAuthStateInCookie: true,
  },
};

const msalApp = new PublicClientApplication(msalConfig);

const scopes = ['user.read'];

export const msalLogin = async () => {
  try {
    const response = await msalApp.loginPopup({
      scopes,
      prompt: 'select_account',
    });
    return response;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.dir(err); // HACK proper error handling
  }
};
