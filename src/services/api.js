import axios from 'axios';

const API_BASE_URL = 'https://campus-ecommerce-api.onrender.com/api/v1';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Handle token refresh
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = localStorage.getItem('refresh_token');
        const response = await axios.post(
          `${API_BASE_URL}/accounts/auth/token/refresh/`,
          { refresh: refreshToken }
        );

        const { access } = response.data;
        localStorage.setItem('access_token', access);

        originalRequest.headers.Authorization = `Bearer ${access}`;
        return api(originalRequest);
      } catch (refreshError) {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

// ==================== AUTHENTICATION SERVICES ====================
export const authService = {
  async login(username, password) {
    const response = await api.post('/accounts/auth/login/', { username, password });
    const { access, refresh } = response.data;
    
    localStorage.setItem('access_token', access);
    localStorage.setItem('refresh_token', refresh);
    
    return response.data;
  },

  async register(userData) {
    const response = await api.post('/accounts/auth/register/', userData);
    return response.data;
  },

  async getProfile() {
    const response = await api.get('/accounts/auth/profile/');
    return response.data;
  },

  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
  },
};

// ==================== VENDOR SERVICES ====================
export const vendorService = {
  async getVendorProfile() {
    try {
      const response = await api.get('/vendors/');
      return response.data;
    } catch (error) {
      console.log('No vendor profile found');
      return null;
    }
  },
};

// ==================== PRODUCT SERVICES ====================
export const productService = {
  async getProducts(params = {}) {
    const response = await api.get('/products/', { params });
    return response.data;
  },

  async getProduct(id) {
    const response = await api.get(`/products/${id}/`);
    return response.data;
  },

  async createProduct(productData) {
    const response = await api.post('/products/', productData);
    return response.data;
  },

  async updateProduct(id, productData) {
    const response = await api.put(`/products/${id}/`, productData);
    return response.data;
  },

  async deleteProduct(id) {
    const response = await api.delete(`/products/${id}/`);
    return response.data;
  },

  async getCategories() {
    const response = await api.get('/products/categories/');
    return response.data;
  },
};

// ==================== REVIEW SERVICES ====================
export const reviewService = {
  async getProductReviews(productId, params = {}) {
    const response = await api.get('/reviews/', { 
      params: { product: productId, ...params } 
    });
    return response.data;
  },

  async createReview(reviewData) {
    const response = await api.post('/reviews/', reviewData);
    return response.data;
  },
};

// ==================== ORDER SERVICES ====================
export const orderService = {
  async getOrders(params = {}) {
    const response = await api.get('/orders/', { params });
    return response.data;
  },

  async getOrder(id) {
    const response = await api.get(`/orders/${id}/`);
    return response.data;
  },

  async createOrder(orderData) {
    const response = await api.post('/orders/', orderData);
    return response.data;
  },
};

// ==================== DASHBOARD DATA ====================
export const fetchDashboardData = async () => {
  try {
    // Try to fetch real products first
    const productsData = await productService.getProducts();
    const products = productsData.results || [];
    
    if (products.length > 0) {
      // Calculate real stats from products
      const totalRevenue = products.reduce((sum, p) => sum + (parseFloat(p.price) * (p.stock || 0)), 0);
      const totalItems = products.reduce((sum, p) => sum + (p.stock || 0), 0);
      const averageRating = products.reduce((sum, p) => sum + (p.average_rating || 0), 0) / (products.length || 1);
      
      const topPerformers = products
        .sort((a, b) => (b.review_count || 0) - (a.review_count || 0))
        .slice(0, 3)
        .map(p => ({ name: p.name, revenue: parseFloat(p.price) * (p.stock || 0) }));
      
      return {
        totalRevenue,
        totalItems,
        rating: averageRating.toFixed(1),
        topPerformers,
        recentOrders: [],
        recentPayout: { amount: 0, time: 'No payouts yet' },
        reviews: [],
      };
    }
  } catch (error) {
    console.log('API not ready yet, using mock data');
  }
  
  // Fallback to mock data
  return {
    totalRevenue: 14290.50,
    totalItems: 48,
    rating: 4.8,
    topPerformers: [
      { name: 'Academic Pro Backpack', revenue: 2000 },
      { name: 'Campus Smart Sync v2', revenue: 3400 },
      { name: 'Editorial Hersha Tote', revenue: 1800 },
    ],
    recentOrders: [
      { id: '#832', product: 'Academic Pro Backpack', units: 2, time: 'Just now' },
      { id: '#831', product: 'Campus Smart Sync v2', units: 1, time: '4 hours ago' },
    ],
    recentPayout: { amount: 24500, time: '4 hours ago' },
    reviews: [
      {
        id: 1,
        product: 'LIMITED EDITION PRODUCTS',
        text: 'The quality of the fabric is actually insane. Way better than the standard university mesh. It\'s thick, soft, and the embroidery is high-end. Definitely worth the price point.',
        rating: 5,
        hasImage: true,
      },
      {
        id: 2,
        product: 'Campus Smart Sync',
        text: 'Keep my coffee hot for hours during long days. The matte finish is gorgeous.',
        rating: 4,
        hasImage: false,
      },
      {
        id: 3,
        product: 'Academic Pro Backpack',
        text: 'Best purchase of the semester. Durable, sleek, and supports the campus sustainability initiative.',
        rating: 5,
        hasImage: true,
      }
    ]
  };
};

export const fetchProducts = async () => {
  try {
    const data = await productService.getProducts();
    const products = data.results || [];
    
    if (products.length > 0) {
      return products.map(p => ({
        id: p.id,
        name: p.name,
        price: parseFloat(p.price),
        quantity: p.stock || 0,
        status: (p.stock || 0) > 10 ? 'active' : (p.stock || 0) > 0 ? 'low stock' : 'out of stock',
        description: p.description,
      }));
    }
  } catch (error) {
    console.log('Using mock products');
  }
  
  // Mock products fallback
  return [
    { id: 1, name: 'Academic Pro Backpack', price: 89.99, quantity: 45, status: 'active', description: 'High-quality backpack for students' },
    { id: 2, name: 'Campus Smart Sync v2', price: 129.99, quantity: 28, status: 'active', description: 'Smart sync device' },
    { id: 3, name: 'Editorial Hersha Tote', price: 59.99, quantity: 12, status: 'low stock', description: 'Limited edition tote' },
  ];
};

export const createProduct = async (productData) => {
  try {
    const response = await productService.createProduct({
      name: productData.name,
      description: productData.description,
      price: parseFloat(productData.price),
      stock: parseInt(productData.quantity),
    });
    return { success: true, id: response.id };
  } catch (error) {
    console.log('Mock: Product created', productData);
    alert('Demo: Product would be created here');
    return { success: true, id: Date.now() };
  }
};

export const updateProduct = async (id, productData) => {
  try {
    const response = await productService.updateProduct(id, {
      name: productData.name,
      description: productData.description,
      price: parseFloat(productData.price),
      stock: parseInt(productData.quantity),
    });
    return { success: true };
  } catch (error) {
    console.log('Mock: Product updated');
    alert('Demo: Product would be updated here');
    return { success: true };
  }
};

export const deleteProduct = async (id) => {
  try {
    await productService.deleteProduct(id);
    return { success: true };
  } catch (error) {
    console.log('Mock: Product deleted');
    alert('Demo: Product would be deleted here');
    return { success: true };
  }
};

export default api;