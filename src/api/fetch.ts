import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { APIResponse } from '@/types/response';

export class APIClient {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: process.env.CLIENT_URL,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // 응답 인터셉터: 모든 응답을 표준 형식으로 변환
    this.client.interceptors.response.use(
      (response: AxiosResponse): AxiosResponse<APIResponse> => {
        const standardResponse: APIResponse = {
          success: response.status >= 200 && response.status < 300,
          data: response.data.data || response.data,
          status: response.status,
        };

        return { ...response, data: standardResponse };
      },
      (error) => {
        const standardError: APIResponse = {
          success: false,
          error: {
            message: error.response?.data?.message || '오류가 발생했습니다.',
            details: error.response?.data?.details,
          },
          status: error.response?.status,
        };

        return Promise.reject(standardError);
      }
    );
  }

  async get<T>(url: string, params?: object): Promise<APIResponse<T>> {
    const response = await this.client.get<APIResponse<T>>(url, { params });
    return response.data;
  }

  async post<T>(url: string, data?: object, config?: object): Promise<APIResponse<T>> {
    const response = await this.client.post<APIResponse<T>>(url, data, config);
    return response.data;
  }

  async put<T>(url: string, data?: object, config?: object): Promise<APIResponse<T>> {
    const response = await this.client.put<APIResponse<T>>(url, data, config);
    return response.data;
  }

  async patch<T>(url: string, data?: object, config?: object): Promise<APIResponse<T>> {
    const response = await this.client.patch<APIResponse<T>>(url, data, config);
    return response.data;
  }

  async delete<T>(url: string, config?: object): Promise<APIResponse<T>> {
    const response = await this.client.delete<APIResponse<T>>(url, config);
    return response.data;
  }
}

export const apiClient = new APIClient();
