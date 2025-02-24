import usePatchManager from "../constants/controller_templates/patch_controller_template";
import useUpdateManager from "../constants/controller_templates/put_controller_template"; 

export const PatchCustomerManager = ({ customerId }) => { 
  const { patchCaller, isLoading, isSuccess, error, data } = usePatchManager(
    `/customers/${customerId}`,
    ["patch-Customer"],
    true,
    true
  );
  const patchCustomer = async (details) => {
    try {
      await patchCaller(details);
    } catch (error) {
      console.error("error:", error);
    }
  };
  return {
    patchCustomer,
    data,
    isLoading,
    isSuccess,
    error,
  };
};
