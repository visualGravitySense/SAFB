import { createContext, useContext, useState, useEffect } from 'react'
import { loadContent } from '../services/contentApi'

const ContentContext = createContext(null)

export const useContent = () => {
  const context = useContext(ContentContext)
  if (!context) {
    throw new Error('useContent must be used within ContentProvider')
  }
  return context
}

export const ContentProvider = ({ children }) => {
  const [content, setContent] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchContent = async () => {
      try {
        setLoading(true)
        setError(null)
        
        // Check if we're in preview mode
        const urlParams = new URLSearchParams(window.location.search)
        const isPreview = urlParams.get('preview') === 'true'
        
        // If preview mode, try to load from localStorage first
        if (isPreview) {
          try {
            const previewData = localStorage.getItem('saf_content_preview')
            if (previewData) {
              const parsed = JSON.parse(previewData)
              if (parsed._preview) {
                // Remove preview metadata
                delete parsed._preview
                delete parsed._timestamp
                setContent(parsed)
                setLoading(false)
                console.log('📸 Loaded preview data from localStorage')
                return
              }
            }
          } catch (previewError) {
            console.warn('Failed to load preview data:', previewError)
          }
        }
        
        // Listen for preview data from postMessage
        const handleMessage = (event) => {
          // In production, check event.origin for security
          if (event.data && (event.data.type === 'PREVIEW_DATA' || event.data.type === 'PREVIEW_UPDATE')) {
            setContent(event.data.data)
            console.log('📸 Received preview data via postMessage')
          }
        }
        
        window.addEventListener('message', handleMessage)
        
        // Load from API
        const data = await loadContent()
        setContent(data)
        
        // Cleanup message listener
        const cleanup = () => {
          window.removeEventListener('message', handleMessage)
        }
        
        // Return cleanup function
        return cleanup
      } catch (err) {
        console.error('Error loading content:', err)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchContent()
  }, [])

  const value = {
    content,
    loading,
    error,
    refresh: async () => {
      try {
        setLoading(true)
        const data = await loadContent()
        setContent(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
  }

  return (
    <ContentContext.Provider value={value}>
      {children}
    </ContentContext.Provider>
  )
}

export default ContentContext
