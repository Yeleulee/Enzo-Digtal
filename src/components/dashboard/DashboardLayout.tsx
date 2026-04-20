import { LogOut, Package, Home } from 'lucide-react';

interface DashboardLayoutProps {
  children: React.ReactNode;
  onLogout: () => void;
}

export default function DashboardLayout({ children, onLogout }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-[#050810] bg-grid font-sans">
      {/* Header */}
      <header className="border-b border-[#4a6fa5]/15 glass-subtle sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <img 
            src="/src/assets/logo.png" 
            alt="Enzo OS" 
            className="h-10 w-auto object-contain drop-shadow-[0_0_15px_rgba(255,26,26,0.4)]"
          />

          <div className="flex items-center gap-4">
            <a
              href="/"
              className="glass-pill flex items-center gap-2 text-sm hover:bg-[#2d4a7c]/20 transition-all"
              style={{ padding: '0.5rem 1rem' }}
            >
              <Home className="w-4 h-4" />
              View Catalog
            </a>
            <button
              onClick={onLogout}
              className="glass-pill flex items-center gap-2 text-sm hover:bg-[#4a6fa5] hover:text-white transition-all"
              style={{ padding: '0.5rem 1rem' }}
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {children}
      </main>
    </div>
  );
}
