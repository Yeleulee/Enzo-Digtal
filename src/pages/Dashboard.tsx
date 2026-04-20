import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiService, CatalogItem } from '../services/api';
import DashboardLayout from '../components/dashboard/DashboardLayout';
import CatalogItemList from '../components/dashboard/CatalogItemList';
import CatalogItemForm from '../components/dashboard/CatalogItemForm';

type View = 'list' | 'create' | 'edit';

export default function Dashboard() {
  const [view, setView] = useState<View>('list');
  const [items, setItems] = useState<CatalogItem[]>([]);
  const [editingItem, setEditingItem] = useState<CatalogItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    checkAuth();
  }, []);

  useEffect(() => {
    if (view === 'list') {
      loadItems();
    }
  }, [view]);

  const checkAuth = async () => {
    try {
      const { authenticated } = await apiService.checkAuth();
      if (!authenticated) {
        navigate('/login');
      }
    } catch (err) {
      navigate('/login');
    }
  };

  const loadItems = async () => {
    try {
      setLoading(true);
      const data = await apiService.getCatalogItems();
      setItems(data);
      setError(null);
    } catch (err) {
      setError('Failed to load catalog items');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await apiService.logout();
      navigate('/login');
    } catch (err) {
      console.error('Logout error:', err);
    }
  };

  const handleEdit = (id: string) => {
    const item = items.find(i => i.id === id);
    if (item) {
      setEditingItem(item);
      setView('edit');
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this item?')) return;

    try {
      await apiService.deleteCatalogItem(id);
      setItems(items.filter(i => i.id !== id));
    } catch (err) {
      alert('Failed to delete item');
    }
  };

  const handleFormSubmit = async (data: any) => {
    try {
      if (view === 'edit' && editingItem) {
        await apiService.updateCatalogItem(editingItem.id, data);
      } else {
        await apiService.createCatalogItem(data);
      }
      setView('list');
      setEditingItem(null);
    } catch (err) {
      throw err;
    }
  };

  const handleFormCancel = () => {
    setView('list');
    setEditingItem(null);
  };

  return (
    <DashboardLayout onLogout={handleLogout}>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-semibold tracking-tight mb-2">
            {view === 'list' ? 'Catalog Management' : view === 'create' ? 'Create New Item' : 'Edit Item'}
          </h1>
          <p className="text-slate-400 font-mono text-sm">
            {view === 'list' ? 'Manage your service catalog' : 'Fill in the details below'}
          </p>
        </div>

        {view === 'list' && (
          <button
            onClick={() => setView('create')}
            className="glass-pill bg-[#4a6fa5] text-white font-mono font-bold hover:bg-[#6b9bd1] transition-all uppercase tracking-widest"
            style={{ padding: '0.75rem 1.5rem', fontSize: '0.75rem' }}
          >
            + Create New
          </button>
        )}
      </div>

      {view === 'list' && (
        <CatalogItemList
          items={items}
          loading={loading}
          error={error}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onRefresh={loadItems}
        />
      )}

      {(view === 'create' || view === 'edit') && (
        <CatalogItemForm
          item={editingItem || undefined}
          onSubmit={handleFormSubmit}
          onCancel={handleFormCancel}
        />
      )}
    </DashboardLayout>
  );
}
