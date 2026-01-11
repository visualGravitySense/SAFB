// API Configuration
const API_BASE_URL = import.meta.env.VITE_API_URL || 
  (import.meta.env.PROD 
    ? 'https://safb-admin.vercel.app/api'  // Vercel API URL
    : 'http://localhost:3000/api')

export const API_CONFIG = {
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
}

// Helper function to get image URL
export const getImageUrl = (imagePath) => {
  if (!imagePath) return ''
  
  // If it's already a full URL, return as is
  if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
    return imagePath
  }
  
  // If it starts with /uploads, it's a local file from API
  if (imagePath.startsWith('/uploads')) {
    const apiBase = API_BASE_URL.replace('/api', '') || 
      (import.meta.env.PROD ? 'https://safb-admin.vercel.app' : 'http://localhost:3000')
    return `${apiBase}${imagePath}`
  }
  
  // Otherwise return as is (might be relative path to local images)
  return imagePath
}

export default API_CONFIG
