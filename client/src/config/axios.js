import axios from "axios";

const isLocalHost = Boolean(
    window.location.hostname === "location" ||
    window.location.hostname === "[::1]"
);

const API_URL = isLocalHost
    ? "http://localhost:8800/api/"
    : "https://bseaapi.onrender.com/";

export const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: API_URL,
})