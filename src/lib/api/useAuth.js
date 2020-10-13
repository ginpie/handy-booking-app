const AUTH_TOKEN = 'AUTH_TOKEN';

const extractAuthTokenFromResponse = (response) => {
  const authToken = response.headers['x-auth-token'];

  if (authToken) {
    localStorage.setItem(AUTH_TOKEN, authToken);
  }

  return response;
};

const appendAuthTokenToRequest = (config) => {
  const authToken = localStorage.getItem(AUTH_TOKEN);

  if (authToken) {
    config.headers = {
      ...config.headers,
      'X-Auth-Token': localStorage.getItem(AUTH_TOKEN),
    };
  }

  return config;
};

const useAuth = (instance) => {
  instance.interceptors.request.use(appendAuthTokenToRequest);
  instance.interceptors.response.use(extractAuthTokenFromResponse);
};

export default useAuth;
