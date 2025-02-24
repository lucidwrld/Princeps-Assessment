
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { toast } from "react-toastify";
import AxiosWithToken from "../api_management/MyHttpHelperWithToken";
import Axios from "../api_management/MyHttpHelper";

const usePatchManager = (
  endpoint,
  queryKey,
  isMulti = false,
  isAuth = true,
  showSuccessToast = true
) => {
  const queryClient = useQueryClient();

  const patchController = async (data) => {
    try {
      const [response] = isAuth
        ? [await AxiosWithToken.patch(endpoint, data)]
        : [await Axios.patch(endpoint, data)];
       
      return response.data;
    } catch (error) { 
      throw new Error(`Sorry: ${error.response.data.message}`);
    }
  };
 
  const mutation = useMutation({
    mutationFn: patchController,
    onSuccess: async (data) => {
      if (showSuccessToast) {
        toast.success(data.message);
      }
      queryClient.invalidateQueries({ queryKey: [queryKey] });
    },
    onError: (error) => {
      if (showSuccessToast) {
        toast.error(error.message);
      }
    },
  });

  const patchCaller = async (details) => {
    try {
      await mutation.mutateAsync(details);
    } catch (error) {
      // Handle error if necessary
      console.error("Update error:", error);
    }
  };

  return {
    patchCaller,
    data: mutation.data,
    isLoading: mutation.isLoading,
    isSuccess: mutation.isSuccess,
    error: mutation.error,
  };
};

export default usePatchManager;
