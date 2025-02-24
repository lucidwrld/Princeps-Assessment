import { useQuery } from "@tanstack/react-query"; 
import Axios from "../constants/api_management/MyHttpHelper";

const useGetCustomersManager = ({
  page,
  page_size = 5,
  date, status,
  search_text = "", 
}) => {
  return useQuery({
    queryKey: ["get-all-customers", page, page_size, search_text, date, status],
    queryFn: async () => {
      try {
        
        const response = await Axios.get(`/customers?page=${page}&page_size=${page_size}${search_text}${date}${status}`);
        return response.data;
      } catch (error) { 
        throw new Error("Sorry: " + error.response?.data?.message);
      }
    },
    // enabled: Boolean(movieId),
    refetchOnWindowFocus: false,
  });
};

export default useGetCustomersManager;
