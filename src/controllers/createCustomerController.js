import usePostManager from "../constants/controller_templates/post_controller_template"; 

export const CreateCustomerManager = () => { 
  const { postCaller, isLoading, isSuccess, error, data } = usePostManager(
    `/customers`,
    ["create-Customer"],
    true
  );
  const addCustomers = async (details) => {
    try {
      await postCaller(details);
    } catch (error) {
      console.error("post error:", error);
    }
  };
  return {
    addCustomers,
    data,
    isLoading,
    isSuccess,
    error,
  };
};
