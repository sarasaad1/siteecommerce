import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMjIyZDg2YzQ5ZGQwY2VkNmVhMDBiZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NjUwMzY5NCwiZXhwIjoxNjQ2NzYyODk0fQ.LVW4W7YQshXyM-GnIJj3dNzQ7bpGJI5R-iKJ0GQo_ko";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
