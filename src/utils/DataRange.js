export default function getDateRange (type) {
    const today = new Date();
    let startDate, endDate = today.toISOString().split("T")[0];
  
    if (type === "7days") {
      startDate = new Date(today.setDate(today.getDate() - 7)).toISOString().split("T")[0];
    } else if (type === "30days") {
      startDate = new Date(today.setDate(today.getDate() - 30)).toISOString().split("T")[0];
    } else if (type === "3months") {
      startDate = new Date(today.setMonth(today.getMonth() - 3)).toISOString().split("T")[0];
    } else {
      startDate = "";
      endDate = "";
    }
  
    return { startDate, endDate };
  };
  