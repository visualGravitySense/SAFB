import axios from 'axios'
import { API_CONFIG } from '../config/api'

const apiClient = axios.create(API_CONFIG)

// Default content as fallback
const defaultContent = {
  hero: {
    title: 'SIIM AIMLA FUNK BAND',
    subtitle: 'Funk, mis paneb sind tantsima',
    description: 'Tipptasemel live-muusika, mis loob unustamatu elamuse teie üritusele',
    ctaPrimary: 'Broneeri Nüüd',
    ctaSecondary: 'Kuula Muusikat',
    stats: {
      viewers: '50K+',
      viewersLabel: 'Vaatajat',
      experience: '8+',
      experienceLabel: 'Aastat Kogemust'
    }
  },
  about: {
    title: 'Bändist',
    description: 'Siim Aimla Funk Band on see, mis muudab iga ürituse peoks. James Brown\'i energia, Michael Breckeri vibe ja eesti popiklassika, mida keegi ei oska oodata – kõik ühes paketis.',
    members: []
  },
  events: [],
  music: {
    videos: [],
    albums: [],
    spotifyLink: '',
    youtubeLink: ''
  },
  gallery: [],
  stats: {
    events: 200,
    viewers: 50,
    years: 8,
    albums: 2
  },
  booking: {
    enabled: true,
    responseTime: '24h',
    defaultMessage: 'Täida lihtne vorm ja saame sinuga ühendust 24 tunni jooksul!'
  }
}

/**
 * Load all content from API
 * @returns {Promise<Object>} Content data
 */
export const loadContent = async () => {
  try {
    const response = await apiClient.get('/content')
    if (response.data.success) {
      return response.data.data
    }
    throw new Error('Invalid response format')
  } catch (error) {
    console.warn('Failed to load content from API, using default content:', error.message)
    // Try to load from localStorage as fallback
    try {
      // First check for preview data
      const previewData = localStorage.getItem('saf_content_preview')
      if (previewData) {
        const parsed = JSON.parse(previewData)
        if (parsed._preview) {
          delete parsed._preview
          delete parsed._timestamp
          return { ...defaultContent, ...parsed }
        }
      }
      
      // Then check for regular saved data
      const saved = localStorage.getItem('saf_content')
      if (saved) {
        const parsed = JSON.parse(saved)
        return { ...defaultContent, ...parsed }
      }
    } catch (localError) {
      console.warn('Failed to load from localStorage:', localError.message)
    }
    // Return default content
    return defaultContent
  }
}

/**
 * Load specific section from API
 * @param {string} section - Section name (hero, about, events, etc.)
 * @returns {Promise<Object>} Section data
 */
export const loadSection = async (section) => {
  try {
    const response = await apiClient.get(`/content/${section}`)
    if (response.data.success) {
      return response.data.data
    }
    throw new Error('Invalid response format')
  } catch (error) {
    console.warn(`Failed to load ${section} from API, using default:`, error.message)
    return defaultContent[section] || {}
  }
}

export default {
  loadContent,
  loadSection,
  defaultContent
}
