export const ROOT = '/';
export const DASHBOARD = '/dashboard';
export const LOGIN = '/login';
export const SIGNUP = '/signup';
export const SERVICES = (type: string) => {
  return `/services/${type}`;
};
export const DOCUMENTS = '/documents';

// Admin Routes
export const ADMIN_ROOT = '/admin';
export const ADMIN_LOGIN = '/admin/login';
export const ADMIN_UPLOAD_DOCUMENTS = '/admin/upload-documents';
