// Centralized API service (TypeScript)

const API_BASE_URL: string = "http://localhost:5000/api";

type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

interface RequestOptions {
  method?: HttpMethod;
  headers?: Record<string, string>;
  body?: unknown;
}

class ApiService {
  private async request<TResponse>(endpoint: string, options: RequestOptions = {}): Promise<TResponse> {
    const { method = "GET", headers = {}, body } = options;

    const token: string | null = typeof window !== "undefined" ? localStorage.getItem("token") : null;
    const authHeaders: Record<string, string> = token ? { Authorization: `Bearer ${token}` } : {};

    const finalHeaders: HeadersInit = {
      "Content-Type": "application/json",
      ...authHeaders,
      ...headers,
    };

    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method,
      headers: finalHeaders,
      body: body !== undefined ? JSON.stringify(body) : undefined,
    });

    const responseData = (await response.json().catch(() => ({}))) as TResponse & { message?: string };

    if (!response.ok) {
      const message = (responseData as any)?.message ?? `HTTP error! status: ${response.status}`;
      throw new Error(message);
    }

    return responseData as TResponse;
  }

  async get<TResponse>(endpoint: string): Promise<TResponse> {
    return this.request<TResponse>(endpoint, { method: "GET" });
  }

  async post<TResponse, TBody = unknown>(endpoint: string, data: TBody): Promise<TResponse> {
    return this.request<TResponse>(endpoint, { method: "POST", body: data });
  }

  // Auth utilities
  isAuthenticated(): boolean {
    const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
    return !!token;
  }

  getAuthHeaders(): Record<string, string> {
    const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
    return token ? { Authorization: `Bearer ${token}` } : {};
  }

  // Authentication methods
  login(credentials: { email: string; password: string }): Promise<{ token: string } & Record<string, unknown>> {
    return this.post("/auth/login", credentials);
  }

  register(userData: Record<string, unknown>): Promise<Record<string, unknown>> {
    return this.post("/auth/register", userData);
  }

  // Forgot Password methods
  forgotPassword(email: string): Promise<Record<string, unknown>> {
    return this.post("/auth/forgot-password", { email });
  }

  verifyOTP(email: string, otp: string): Promise<Record<string, unknown>> {
    return this.post("/auth/verify-otp", { email, otp });
  }

  resetPassword(email: string, newPassword: string): Promise<Record<string, unknown>> {
    return this.post("/auth/reset-password", { email, newPassword });
  }

  // Existing feature endpoints
  submitInquiry<T = Record<string, unknown>>(inquiryData: T): Promise<Record<string, unknown>> {
    return this.post("/inquiry", inquiryData);
  }

  submitEnrollment<T = Record<string, unknown>>(enrollmentData: T): Promise<Record<string, unknown>> {
    return this.post("/enroll", enrollmentData);
  }

  submitContact<T = Record<string, unknown>>(contactData: T): Promise<Record<string, unknown>> {
    return this.post("/contact", contactData);
  }

  submitServiceInquiry<T = Record<string, unknown>>(inquiryData: T): Promise<Record<string, unknown>> {
    return this.post("/service-inquiry", inquiryData);
  }
}

export const apiService = new ApiService();

export default apiService;


