import { useState } from 'react';
import { CatalogItem } from '../../services/api';
import { Edit, Trash2, RefreshCw, Search } from 'lucide-react';

interface CatalogItemListProps {
  items: CatalogItem[];
  loading: boolean;
  error: string | null;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  onRefresh: () => void;
}

export default function CatalogItemList({
  items,
  loading,
  error,
  onEdit,
  onDelete,
  onRefresh
}: CatalogItemListProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');

  const categories = ['All', ...new Set(items.map(item => item.category))];

  const filteredItems = items.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = filterCategory === 'All' || item.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="text-slate-400 font-mono">Loading catalog...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="glass-module p-6 text-center">
        <p className="text-red-400 mb-4">{error}</p>
        <button
          onClick={onRefresh}
          className="glass-pill bg-[#FF1A1A] text-white font-mono"
          style={{ padding: '0.5rem 1rem' }}
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div>
      {/* Filters */}
      <div className="glass-module p-6 mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search items..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#FF1A1A] transition-colors"
            />
          </div>

          <div className="flex gap-2 overflow-x-auto">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`glass-pill font-mono uppercase tracking-wider transition-all whitespace-nowrap ${
                  filterCategory === cat
                    ? 'bg-[#FF1A1A] text-white font-bold'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
                style={{ padding: '0.5rem 1rem', fontSize: '0.75rem' }}
              >
                {cat}
              </button>
            ))}
          </div>

          <button
            onClick={onRefresh}
            className="glass-pill flex items-center gap-2 hover:bg-white/5 transition-all"
            style={{ padding: '0.5rem 1rem' }}
          >
            <RefreshCw className="w-4 h-4" />
            Refresh
          </button>
        </div>
      </div>

      {/* Items Grid */}
      {filteredItems.length === 0 ? (
        <div className="glass-module p-12 text-center">
          <p className="text-slate-400 font-mono">No items found</p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map(item => (
            <div key={item.id} className="glass-module p-4 group hover:bg-white/[0.04] transition-colors">
              <div className="aspect-video w-full bg-white/5 rounded-lg overflow-hidden mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity"
                />
              </div>

              <div className="mb-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-medium text-lg">{item.name}</h3>
                  <span className="text-xs font-mono text-slate-500 bg-white/5 px-2 py-1 rounded">
                    {item.category}
                  </span>
                </div>
                <p className="text-sm text-slate-400 line-clamp-2">{item.description}</p>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => onEdit(item.id)}
                  className="flex-1 glass-pill bg-white/5 hover:bg-[#FF1A1A] hover:text-white transition-all flex items-center justify-center gap-2"
                  style={{ padding: '0.5rem' }}
                >
                  <Edit className="w-4 h-4" />
                  Edit
                </button>
                <button
                  onClick={() => onDelete(item.id)}
                  className="glass-pill bg-white/5 hover:bg-red-500 hover:text-white transition-all"
                  style={{ padding: '0.5rem 0.75rem' }}
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
