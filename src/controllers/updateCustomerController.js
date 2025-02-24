import useUpdateManager from "../constants/controller_templates/put_controller_template"; 

export const UpdateCustomerManager = ({ customerId }) => { 
  const { updateCaller, isLoading, isSuccess, error, data } = useUpdateManager(
    `/customers/${customerId}`,
    ["update-Customer"],
    true,
    true
  );
  const updateCustomer = async (details) => {
    try {
      await updateCaller(details);
    } catch (error) {
      console.error("error:", error);
    }
  };
  return {
    updateCustomer,
    data,
    isLoading,
    isSuccess,
    error,
  };
};
