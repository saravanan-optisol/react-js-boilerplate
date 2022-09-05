import environment from "./BaseEnvironment";

/*
 * environments for stage
 * You shouldn't have override anything.
 */

const baseUrl = "http://localhost:4200";      // URL to run the application (HOST & PORT)
const baseApi = "https://localhost:8000/api"; // URL of stage server

const env = environment(baseApi);

const StageEnvironment = {
  ...env,
  baseUrl: baseUrl,
};

export default StageEnvironment;
