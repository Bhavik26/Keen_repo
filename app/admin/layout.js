import React from 'react';
import '../admin/frontend/Login.css';
import '../admin/frontend/Dashboard.css';

const AdminLayout = ({ children }) => {
  return (
    <div className="admin-wrapper">
      {children}
    </div>
  );
};

export default AdminLayout;
