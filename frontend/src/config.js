const normalizeBaseUrl = (value) => {
  if (!value) {
    return '';
  }

  return value.endsWith('/') ? value.slice(0, -1) : value;
};

const hostname = window.location.hostname;
const isGitHubPagesHost =
  hostname === 'gursahibsingh.github.io' || hostname.endsWith('.github.io');

export const routerMode =
  process.env.REACT_APP_ROUTER_MODE || (isGitHubPagesHost ? 'hash' : 'browser');

export const backendEnabled =
  process.env.REACT_APP_ENABLE_BACKEND === 'true' ||
  (!process.env.REACT_APP_ENABLE_BACKEND && !isGitHubPagesHost);

const apiBaseUrl = normalizeBaseUrl(process.env.REACT_APP_API_BASE_URL || '');

export const buildApiUrl = (path) => {
  if (!apiBaseUrl) {
    return path;
  }

  return `${apiBaseUrl}${path}`;
};
