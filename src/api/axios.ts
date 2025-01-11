import { config } from "@/config/config";
import axios from "axios";

const baseUrl = config.baseUrl;

export const authApi = axios.create({
  baseURL: baseUrl,
});
