import { useQuery } from "@tanstack/react-query"; 
import Axios from "../constants/api_management/MyHttpHelper";

const useGetCustomerByIdManager = ({
  customerId
}) => {
  return useQuery({
    queryKey: ["customer_id", customerId],
    queryFn: async () => {
      try {
        
        const response = await Axios.get(`/customers/${customerId}`);
        return response.data;
      } catch (error) { 
        throw new Error("Sorry: " + error.response?.data?.message);
      }
    },
    enabled: Boolean(customerId),
    refetchOnWindowFocus: false,
  });
};

export default useGetCustomerByIdManager;
