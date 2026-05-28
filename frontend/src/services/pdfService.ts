import axios from 'axios';

const api = axios.create({
  // 1. Corrigido de efnv para env
  baseURL: import.meta.env.VITE_API_URL || 'https://ready-project-ko70.onrender.com'
});

export default api;

export const uploadPdf = async (file: File) => {
  const formData = new FormData();
  formData.append("pdf", file);

  // 2. Corrigido para usar a instância "api" que criamos lá em cima.
  // Como a baseURL já está configurada nela, basta colocar a rota '/upload-pdf' direto!
  const response = await api.post('/upload-pdf', formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};