import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiService } from '../services/api';
import { Terminal, Lock } from 'lucide-react';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      await apiService.login(username, password);
      navigate('/dashboard');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] bg-grid font-sans flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="glass-module p-8">
          <div className="flex items-center gap-3 mb-8">
            <Lock className="text-[#FF1A1A] w-8 h-8" />
            <h1 className="text-3xl font-semibold tracking-tight">Owner Access</h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-mono text-slate-400 mb-2">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#FF1A1A] transition-colors"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-mono text-slate-400 mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#FF1A1A] transition-colors"
                required
              />
            </div>

            {error && (
              <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full glass-pill bg-[#FF1A1A] text-white font-mono font-bold flex items-center justify-center gap-2 hover:bg-[#cc0000] transition-all uppercase tracking-widest disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ padding: '0.875rem' }}
            >
              <Terminal className="w-4 h-4" />
              {isLoading ? 'Authenticating...' : 'Access Dashboard'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <a href="/" className="text-sm text-slate-400 hover:text-white transition-colors">
              ← Back to Catalog
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
