import axios from "axios";

const baseURL = "http://160.119.254.236:5085/api/v1"; 

const AxiosWithToken = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

let retryCount = 0;

AxiosWithToken.interceptors.request.use(
  async (config) => {
    const token = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vdGVzdC5wcmluY2Vwcy5jbG91ZC9hcGkvdjEvbG9naW4iLCJpYXQiOjE3Mjc5NjE0NDYsImV4cCI6MTcyNzk4MzA0NiwibmJmIjoxNzI3OTYxNDQ2LCJqdGkiOiJRUjE3bFZiV3RCTVAzT0FMIiwic3ViIjoiOWNmYmYyMzEtMzQyZi00ZTZjLWFjOTUtZWQ2NDRiZWVkZTIxIiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyIsImVtYWlsIjoiYWJpb2R1bi5hZm9sYWJpQHByaW5jZXBzZmluYW5jZS5jb20iLCJpZCI6IjljZmJmMjMxLTM0MmYtNGU2Yy1hYzk1LWVkNjQ0YmVlZGUyMSJ9.eAHaVNAlN94H4kbyI0czTArPXX2gEEW-u9FFT_e5YOk" /* localStorage.getItem("token") */;
     
   
    if (!token && retryCount < 3) {
      // Retry the request after 100 milliseconds if the token is not available
      await new Promise((resolve) => setTimeout(resolve, 100));
      retryCount++;
      return AxiosWithToken.request(config);
    }
    if (!token && retryCount === 3) {
      // Send the request without a token after 3 retries
      return config;
    }
    config.headers.Authorization = token;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

AxiosWithToken.interceptors.response.use(
  (response) => {
    // Handle successful responses here
    return response;
  },
  async (error) => {
    if (error.response && error.response.status === 401) {
      const token = localStorage.getItem("token"); 

      if (!token ) {
        window.location.href = "/";
      }
      return Promise.reject(error);
    }

    // Handle other error cases here if needed

    return Promise.reject(error);
  }
);

export default AxiosWithToken;
