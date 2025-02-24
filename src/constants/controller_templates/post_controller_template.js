
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { toast } from "react-toastify";
import AxiosWithToken from "../api_management/MyHttpHelperWithToken";
import Axios from "../api_management/MyHttpHelper";

const usePostManager = (endpoint, queryKey, isAuth = true, isNotifi = false) => {
  const queryClient = useQueryClient();
  const postController = async (details) => {
    try {
      const [response] = isAuth
        ? [await AxiosWithToken.post(endpoint, details)]
        : [await Axios.post(endpoint, details)];
      
      return response.data;
    } catch (error) { 
      throw new Error(`Sorry: ${error.response.data.message}`);
    }
  };

  const mutation = useMutation({
    mutationFn: postController,
    onSuccess: async (data) => {
      if (isNotifi) {
        toast.success(data.message);
      }
      queryClient.invalidateQueries({ queryKey: [queryKey] });
    },
    onError: (error) => {
      if (isNotifi) {
        toast.error(error.message);
      }
    },
  });
  

  const postCaller = async (details) => {
    try {
      await mutation.mutateAsync(details);
    } catch (error) { 
    }
  };

  return {
    postCaller,
    data: mutation.data,
    isLoading: mutation.isLoading,
    isSuccess: mutation.isSuccess,
    error: mutation.error,
  };
};

export default usePostManager;
