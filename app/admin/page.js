'use client';

import React, { useState } from 'react';
import Login from './frontend/Login';
import BlogManagement from './frontend/BlogManagement';
import Dashboard from './frontend/Dashboard';
import AdminLayout from './layout';

export default function AdminPage() {
  const [view, setView] = useState('login');

  return (
    <AdminLayout>
      <div style={{ padding: '20px' }}>
        <div style={{ marginBottom: '16px', display: 'flex', gap: '8px' }}>
          <button onClick={() => setView('login')} disabled={view === 'login'}>
            Login
          </button>
          <button onClick={() => setView('dashboard')} disabled={view === 'dashboard'}>
            Dashboard
          </button>
          <button onClick={() => setView('blogs')} disabled={view === 'blogs'}>
            Blog Management
          </button>
          <button onClick={() => setView('login')}>
            Logout
          </button>
        </div>

        <div>
          {view === 'login' ? (
            <Login onLogin={() => setView('dashboard')} />
          ) : view === 'dashboard' ? (
            <Dashboard />
          ) : (
            <BlogManagement />
          )}
        </div>
      </div>
    </AdminLayout>
  );
}
