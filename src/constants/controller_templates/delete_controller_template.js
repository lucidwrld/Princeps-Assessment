
import { useMutation, useQueryClient } from "@tanstack/react-query";
// import Axios from "../../../constants/api_management/MyHttpHelper";
import AxiosWithToken from "../api_management/MyHttpHelperWithToken";
import { toast } from "react-toastify";

const useDeleteManager = (endpoint, queryKey) => {
  const queryClient = useQueryClient();

  const deleteController = async (details) => {
    try {
      const [response] = [await AxiosWithToken.delete(endpoint, details)];
       

      return response.data;
    } catch (error) { 
      throw new Error(`Sorry: ${error.response.data.message}`);
    }
  };
 
  const mutation = useMutation({
    mutationFn: deleteController,
    onSuccess: async (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: [queryKey] });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const deleteCaller = async (details) => {
    try {
      await mutation.mutateAsync(details);
    } catch (error) {
      // Handle error if necessary
      console.error("Delete error:", error);
    }
  };

  return {
    deleteCaller,
    data: mutation.data,
    isLoading: mutation.isLoading,
    isSuccess: mutation.isSuccess,
    error: mutation.error,
  };
};

export default useDeleteManager;
