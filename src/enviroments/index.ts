// const API_VERSION = 'api/v1';
// const API_URL_BASE = `http://localhost:4000/`;
const API_URL_BASE = `https://api.aquilessoluciones.com.ar/`;

const SERVICES = {
  PROFESSIONS: {
    GET_PROFESSIONS: 'profession',
    UPDATE_PROFESSION: 'profession',
    DELETE_PROFESSION: 'profession',
    CREATE: 'profession',
  },
  PROFESSIONALS: {
    GET_PROFESSIONALS: 'professional',
    GET_PROFESSIONAL_BY_ID: 'professional',
    UPDATE_PROFESSIONAL: 'professional',
    DELETE_PROFESSIONAL: 'professional',
    CREATE: 'professional',
    LOGIN: 'professional/login',
    DELETE_IMAGE: 'professional',
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
  MESSAGE_CLIENT: {
    GET_MESSAGES: 'messageClient',
    CREATE: 'messageClient',
    DELETE_MESSAGE: 'messageClient',
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
