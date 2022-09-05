import environment from "./BaseEnvironment";

/*
 * environments for test
 * You shouldn't have override anything.
 */

const baseUrl = "http://localhost:4200";      // URL to run the application (HOST & PORT)
const baseApi = "https://localhost:8000/api"; // URL of test server

const env = environment(baseApi);

const TestEnvironment = {
  ...env,
  baseUrl: baseUrl,
};

export default TestEnvironment;
