import useDeleteManager from "../constants/controller_templates/delete_controller_template";
 

export const DeleteCustomerManager = ({customerId}) => { 
  const { deleteCaller, isLoading, isSuccess, error, data } = useDeleteManager(
    `/customers/${customerId}`,
    ["delete-Customer"]
  );
  const deleteCustomer = async (details) => {
    try {
      await deleteCaller(details);
    } catch (error) {
      console.error("error:", error);
    }
    
  };
  return {
    deleteCustomer,
    data,
    isLoading,
    isSuccess,
    error,
  };
};
