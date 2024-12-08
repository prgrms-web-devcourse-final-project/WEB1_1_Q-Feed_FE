import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { APIResponse } from '@/types/response';
import { getCookie } from '@/utils/cookies';
import { ACCESS_TOKEN_KEY } from '@/constants/token';
export class APIClient {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: '/api',
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    });

    // 요청 인터셉터
    this.client.interceptors.request.use(
      (config) => {
        const token = getCookie(ACCESS_TOKEN_KEY);
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

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

  async postText<T>(url: string, text: string): Promise<APIResponse<T>> {
    const response = await this.client.post<APIResponse<T>>(url, text, {
      headers: {
        'Content-Type': 'text/plain',
      },
      transformRequest: [(data) => data], // 데이터 변환 방지
    });
    return response.data;
  }
}

export const apiClient = new APIClient();
