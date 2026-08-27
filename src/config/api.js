const runtimeApiUrl =
  typeof window !== 'undefined' &&
  window._env_ &&
  window._env_.REACT_APP_API_BASE_URL;

const API_BASE_URL =
  (runtimeApiUrl && runtimeApiUrl.trim() !== '' ? runtimeApiUrl : null) ||
  process.env.REACT_APP_API_BASE_URL ||
  '/api';

export default API_BASE_URL;