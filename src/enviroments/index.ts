// const API_VERSION = 'api/v1';
// const API_URL_BASE = `http://localhost:4000/`;
const API_URL_BASE = `https://aquiles-backend.onrender.com/`;

const SERVICES = {
  PROFESIONES: {
    GET_PROFESSIONS: 'profession',
    UPDATE_PROFESSION: 'profession',
    DELETE_PROFESSION: 'profession',
    CREATE: 'profession',
  },
  PROFESIONALES: {
    GET_PROFESSIONALS: 'professional',
    UPDATE_PROFESSIONAL: 'professional',
    DELETE_PROFESSIONAL: 'professional',
    CREATE: 'professional',
  },
  BARRIOS: {
    GET_CITIES: 'city',
    CREATE: 'city',
    UPDATE_CITY: 'city',
    DELETE_CITY: 'city',
  },
  REGISTRO_PROFESIONALES: {
    GET_PROFESSIONAL_APPLICATION: 'professionalApplication',
    CREATE_MESSAGE: 'professionalApplication',
    DELETE_MESSAGE: 'professionalApplication',
  },
  MENSAJES: {
    GET_MESSAGES: 'message',
    CREATE: 'message',
    UPDATE_MESSAGE: 'message',
    DELETE_MESSAGE: 'message',
  },
  AUTENTICACION: {
    LOGIN: 'auth/login',
    REGISTER: 'auth/register',
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
