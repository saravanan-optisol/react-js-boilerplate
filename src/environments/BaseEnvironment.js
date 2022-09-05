/*
 * Base is the default environment for production.
 * Add everything here and override value in other files if needed.
 * https://blog.usejournal.com/my-awesome-custom-react-environment-variables-setup-8ebb0797d8ac
 */
export default function BaseEnvironment(baseApi, baseChatApi) {
  return {
    route: {
      baseRoute: "/"
    },
    api: {
      registration: `${baseApi}/endpoint`,
      general: `http://localhost:8000/api`
    },
    isProduction: false,
    isDevelopment: true,
    isTesting: false
  };
}
