import axios from "axios";

const isLocalHost = Boolean(
    window.location.hostname === "localhost" ||
    window.location.hostname === "[::1]"
);

const API_URL = isLocalHost
    ? "http://localhost:8000/"
    : "https://bseaapi.onrender.com/";

export const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: API_URL,
})