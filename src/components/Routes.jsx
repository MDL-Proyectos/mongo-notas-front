// src/routes.js
//const BASE_URL = "http://localhost:8000";
const BASE_URL = "https://ba30-181-47-184-157.ngrok-free.app"
export const API_ROUTES = {
    GET_ALL_NOTES: `${BASE_URL}/notes/all`,
    CREATE_NOTE: `${BASE_URL}/notes/create`,
    FIND_NOTE: (id) => `${BASE_URL}/notes/find/${id}`,
    UPDATE_NOTE: (id) => `${BASE_URL}/notes/update/${id}`,
    DELETE_NOTE: (id) => `${BASE_URL}/notes/delete/${id}`,
};