import axios from "axios";

// Lê a variável de ambiente do Vite. Se não existir, usa o caminho relativo '/api'
// Força o TypeScript a entender o import.meta como 'any' temporariamente
const API_URL = (import.meta as any).env.VITE_API_URL || '/api';

export const uploadPdf = async (file: File) => {
  const formData = new FormData();
  formData.append("pdf", file);

  // Agora a URL fica dinâmica usando a variável de ambiente
  const response = await axios.post(
    `${API_URL}/upload-pdf`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
};