const API_BASE_URL = 'http://localhost:5000/api';

// Helper function to handle API responses
const handleResponse = async (response) => {
  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.message || `HTTP error! status: ${response.status}`);
  }
  return response.json();
};

// Helper function to get auth headers
const getAuthHeaders = () => {
  const token = localStorage.getItem('admin_token');
  return {
    'Content-Type': 'application/json',
    ...(token && { Authorization: `Bearer ${token}` })
  };
};

// Auth API calls
export const authAPI = {
  login: async (credentials) => {
    const response = await fetch(`${API_BASE_URL}/admin/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials)
    });
    return handleResponse(response);
  },

  verifyToken: async () => {
    const response = await fetch(`${API_BASE_URL}/admin/verify`, {
      headers: getAuthHeaders()
    });
    return handleResponse(response);
  }
};

// Trainings API calls
export const trainingsAPI = {
  getAll: async () => {
    const response = await fetch(`${API_BASE_URL}/admin/trainings`, {
      headers: getAuthHeaders()
    });
    return handleResponse(response);
  },

  create: async (trainingData) => {
    const response = await fetch(`${API_BASE_URL}/admin/trainings`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(trainingData)
    });
    return handleResponse(response);
  },

  update: async (id, trainingData) => {
    const response = await fetch(`${API_BASE_URL}/admin/trainings/${id}`, {
      method: 'PUT',
      headers: getAuthHeaders(),
      body: JSON.stringify(trainingData)
    });
    return handleResponse(response);
  },

  delete: async (id) => {
    const response = await fetch(`${API_BASE_URL}/admin/trainings/${id}`, {
      method: 'DELETE',
      headers: getAuthHeaders()
    });
    return handleResponse(response);
  }
};

// Dashboard API calls
export const dashboardAPI = {
  getStats: async () => {
    const response = await fetch(`${API_BASE_URL}/admin/dashboard/stats`, {
      headers: getAuthHeaders()
    });
    return handleResponse(response);
  },

  getRecentActivity: async () => {
    const response = await fetch(`${API_BASE_URL}/admin/dashboard/activity`, {
      headers: getAuthHeaders()
    });
    return handleResponse(response);
  }
};

// Users API calls
export const usersAPI = {
  getAll: async () => {
    const response = await fetch(`${API_BASE_URL}/admin/users`, {
      headers: getAuthHeaders()
    });
    return handleResponse(response);
  },

  create: async (userData) => {
    const response = await fetch(`${API_BASE_URL}/admin/users`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(userData)
    });
    return handleResponse(response);
  },

  update: async (userId, userData) => {
    const response = await fetch(`${API_BASE_URL}/admin/users/${userId}`, {
      method: 'PUT',
      headers: getAuthHeaders(),
      body: JSON.stringify(userData)
    });
    return handleResponse(response);
  },

  delete: async (userId) => {
    const response = await fetch(`${API_BASE_URL}/admin/users/${userId}`, {
      method: 'DELETE',
      headers: getAuthHeaders()
    });
    return handleResponse(response);
  }
};

// Inquiries API calls
export const inquiriesAPI = {
  getAll: async () => {
    const response = await fetch(`${API_BASE_URL}/admin/inquiries`, {
      headers: getAuthHeaders()
    });
    return handleResponse(response);
  },

  update: async (inquiryId, status) => {
    const response = await fetch(`${API_BASE_URL}/admin/inquiries/${inquiryId}`, {
      method: 'PUT',
      headers: getAuthHeaders(),
      body: JSON.stringify({ status })
    });
    return handleResponse(response);
  },

  delete: async (inquiryId) => {
    const response = await fetch(`${API_BASE_URL}/admin/inquiries/${inquiryId}`, {
      method: 'DELETE',
      headers: getAuthHeaders()
    });
    return handleResponse(response);
  }
};

// Enrollments API calls
export const enrollmentsAPI = {
  getAll: async () => {
    const response = await fetch(`${API_BASE_URL}/admin/enrollments`, {
      headers: getAuthHeaders()
    });
    return handleResponse(response);
  },

  update: async (enrollmentId, status) => {
    const response = await fetch(`${API_BASE_URL}/admin/enrollments/${enrollmentId}`, {
      method: 'PUT',
      headers: getAuthHeaders(),
      body: JSON.stringify({ status })
    });
    return handleResponse(response);
  }
};

// Service Inquiries API calls
export const serviceInquiriesAPI = {
  getAll: async () => {
    const response = await fetch(`${API_BASE_URL}/admin/service-inquiries`, {
      headers: getAuthHeaders()
    });
    return handleResponse(response);
  },

  update: async (inquiryId, status) => {
    const response = await fetch(`${API_BASE_URL}/admin/service-inquiries/${inquiryId}`, {
      method: 'PUT',
      headers: getAuthHeaders(),
      body: JSON.stringify({ status })
    });
    return handleResponse(response);
  }
};

// Industries API calls
export const industriesAPI = {
  getAll: async () => {
    const response = await fetch(`${API_BASE_URL}/admin/industries`, {
      headers: getAuthHeaders()
    });
    return handleResponse(response);
  },

  getById: async (id) => {
    const response = await fetch(`${API_BASE_URL}/admin/industries/${id}`, {
      headers: getAuthHeaders()
    });
    return handleResponse(response);
  },

  create: async (industryData) => {
    const response = await fetch(`${API_BASE_URL}/admin/industries`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(industryData)
    });
    return handleResponse(response);
  },

  update: async (id, industryData) => {
    const response = await fetch(`${API_BASE_URL}/admin/industries/${id}`, {
      method: 'PUT',
      headers: getAuthHeaders(),
      body: JSON.stringify(industryData)
    });
    return handleResponse(response);
  },

  delete: async (id) => {
    const response = await fetch(`${API_BASE_URL}/admin/industries/${id}`, {
      method: 'DELETE',
      headers: getAuthHeaders()
    });
    return handleResponse(response);
  },

  toggleStatus: async (id) => {
    const response = await fetch(`${API_BASE_URL}/admin/industries/${id}/toggle`, {
      method: 'PATCH',
      headers: getAuthHeaders()
    });
    return handleResponse(response);
  },

  reorder: async (orderData) => {
    const response = await fetch(`${API_BASE_URL}/admin/industries/reorder`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify({ orderData })
    });
    return handleResponse(response);
  },

  getStats: async () => {
    const response = await fetch(`${API_BASE_URL}/admin/industries/stats`, {
      headers: getAuthHeaders()
    });
    return handleResponse(response);
  }
};
