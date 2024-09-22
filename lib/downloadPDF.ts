import axios from "axios";

export async function downloadFileByURL(
  fileURL: string,
  fileName: string,
  fileType: string
) {
  try {
    const response = await axios({
      url: `${fileURL}`,
      method: "GET",
      responseType: "blob", // Important for binary files
    });
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `${fileName}.${fileType}`); // Set the file name
    document.body.appendChild(link);
    link.click();

    return {
      success: true,
    };
  } catch (error) {
    return {
      success: false,
    };
  }
}
