import environment from "./BaseEnvironment";

/*
 * environments for production
 * You shouldn't have override anything.
 */

const baseUrl = "http://localhost:4200";      // URL to run the application (HOST & PORT)
const baseApi = "https://localhost:8000/api"; // URL of production server

const env = environment(baseApi);

const ProductionEnvironment = {
  ...env,
  baseUrl: baseUrl,
};

export default ProductionEnvironment;
