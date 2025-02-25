// const API_VERSION = 'api/v1';
const API_URL_BASE = `http://localhost:4000/`;
// const API_URL_BASE = `https://aquiles-backend.onrender.com/`;

const SERVICES = {
  PROFESSIONS: {
    GET_PROFESSIONS: 'profession',
    UPDATE_PROFESSION: 'profession',
    DELETE_PROFESSION: 'profession',
    CREATE: 'profession',
  },
  PROFESSIONALS: {
    GET_PROFESSIONALS: 'professional',
    UPDATE_PROFESSIONAL: 'professional',
    DELETE_PROFESSIONAL: 'professional',
    CREATE: 'professional',
    LOGIN: 'professional/login',
  },
  CITIES: {
    GET_CITIES: 'city',
    CREATE: 'city',
    UPDATE_CITY: 'city',
    DELETE_CITY: 'city',
  },
  PROFESSIONAL_APPLICATION: {
    GET_PROFESSIONAL_APPLICATION: 'professionalApplication',
    CREATE_MESSAGE: 'professionalApplication',
    DELETE_MESSAGE: 'professionalApplication',
  },
  MESSAGES: {
    GET_MESSAGES: 'message',
    CREATE: 'message',
    UPDATE_MESSAGE: 'message',
    DELETE_MESSAGE: 'message',
  },
  AUTHENTICATION: {
    LOGIN: 'auth/login',
    REGISTER: 'auth/register',
    RESET_PASSWORD: 'professional/reset-password',
  },
};
const HTTP_METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  PATCH: 'PATCH',
  DELETE: 'DELETE',
};

export { API_URL_BASE, SERVICES, HTTP_METHODS };
