const API_BASE = 'http://localhost:3001/api';

export interface CatalogItem {
  id: string;
  name: string;
  category: string;
  description: string;
  features: string[];
  image: string;
  imageSrcSet: string;
  botLink: string;
  createdAt: string;
  updatedAt: string;
}

export interface CatalogItemInput {
  name: string;
  category: string;
  description: string;
  features: string[];
  image: string;
  imageSrcSet: string;
  botLink: string;
}

class ApiService {
  // Catalog operations
  async getCatalogItems(): Promise<CatalogItem[]> {
    const response = await fetch(`${API_BASE}/catalog`);
    if (!response.ok) throw new Error('Failed to fetch catalog items');
    const data = await response.json();
    return data.items;
  }

  async getCatalogItem(id: string): Promise<CatalogItem> {
    const response = await fetch(`${API_BASE}/catalog/${id}`);
    if (!response.ok) throw new Error('Failed to fetch catalog item');
    return response.json();
  }

  async createCatalogItem(item: CatalogItemInput): Promise<CatalogItem> {
    const response = await fetch(`${API_BASE}/catalog`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(item)
    });
    if (!response.ok) throw new Error('Failed to create catalog item');
    return response.json();
  }

  async updateCatalogItem(id: string, item: CatalogItemInput): Promise<CatalogItem> {
    const response = await fetch(`${API_BASE}/catalog/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(item)
    });
    if (!response.ok) throw new Error('Failed to update catalog item');
    return response.json();
  }

  async deleteCatalogItem(id: string): Promise<void> {
    const response = await fetch(`${API_BASE}/catalog/${id}`, {
      method: 'DELETE',
      credentials: 'include'
    });
    if (!response.ok) throw new Error('Failed to delete catalog item');
  }

  // Image upload
  async uploadImage(file: File): Promise<{ imageUrl: string; imageSrcSet: string }> {
    const formData = new FormData();
    formData.append('image', file);

    const response = await fetch(`${API_BASE}/upload/image`, {
      method: 'POST',
      credentials: 'include',
      body: formData
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to upload image');
    }

    return response.json();
  }

  // Authentication
  async login(username: string, password: string): Promise<{ success: boolean; username: string }> {
    const response = await fetch(`${API_BASE}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ username, password })
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Login failed');
    }

    return response.json();
  }

  async logout(): Promise<void> {
    const response = await fetch(`${API_BASE}/auth/logout`, {
      method: 'POST',
      credentials: 'include'
    });
    if (!response.ok) throw new Error('Logout failed');
  }

  async checkAuth(): Promise<{ authenticated: boolean; username?: string }> {
    const response = await fetch(`${API_BASE}/auth/check`, {
      credentials: 'include'
    });
    if (!response.ok) throw new Error('Auth check failed');
    return response.json();
  }
}

export const apiService = new ApiService();
