import { saveAs } from 'file-saver'; // Optional, if you want to simplify file downloads 
import Papa from "papaparse"; // Optional CSV library

export default function ExportToCSV(data, fileName) {
  if (!data || data.length === 0) {
    console.error("No data available to export.");
    return;
  }

  // Convert JSON data to CSV
  const csv = Papa.unparse(data); // Or create manually

  // Create a Blob from the CSV
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });

  // Trigger file download
  saveAs(blob, `${fileName}.csv`);
}