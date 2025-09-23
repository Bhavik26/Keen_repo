import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faComments,
  faTasks,
  faShoppingCart,
  faLifeRing,
  faBell,
  faUser,
  faServer,
  faCog,
  faChartArea,
  faChartBar,
  faHome,
  faTable,
  faPalette
} from '@fortawesome/free-solid-svg-icons';
import { faWpforms } from '@fortawesome/free-brands-svg-icons';
import { AreaChart, BarChart, DonutChart } from './ChartComponents';
import BlogManagement from './BlogManagement';

const Dashboard = ({ onLogout }) => {
  const [section, setSection] = useState('dashboard'); // 'dashboard' | 'blogs'
  const router = useRouter();

  const notifications = [
    { id: 1, type: 'comment', text: 'New Comment', time: '4 minutes ago', icon: faComments },
    { id: 2, type: 'followers', text: '3 New Followers', time: '12 minutes ago', icon: faUser },
    { id: 3, type: 'message', text: 'Message Sent', time: '27 minutes ago', icon: faComments },
    { id: 4, type: 'task', text: 'New Task', time: '43 minutes ago', icon: faTasks },
    { id: 5, type: 'server', text: 'Server Rebooted', time: '11:32 AM', icon: faServer },
    { id: 6, type: 'server', text: 'Server Crashed!', time: '11:13 AM', icon: faServer },
    { id: 7, type: 'warning', text: 'Server Not Responding', time: '10:57 AM', icon: faServer },
    { id: 8, type: 'order', text: 'New Order Placed', time: '9:49 AM', icon: faShoppingCart },
    { id: 9, type: 'payment', text: 'Payment Received', time: 'Yesterday', icon: faShoppingCart }
  ];

  const stats = [
    { title: 'New Comments!', value: 26, color: 'blue', icon: faComments },
    { title: 'New Tasks!', value: 12, color: 'green', icon: faTasks },
    { title: 'New Orders!', value: 124, color: 'orange', icon: faShoppingCart },
    { title: 'Support Tickets!', value: 13, color: 'red', icon: faLifeRing }
  ];

  const barChartData = [
    { id: 3326, date: '10/21/2013', time: '3:29 PM', amount: '$321.33' },
    { id: 3325, date: '10/21/2013', time: '3:20 PM', amount: '$234.34' },
    { id: 3324, date: '10/21/2013', time: '3:03 PM', amount: '$724.17' },
    { id: 3323, date: '10/21/2013', time: '3:00 PM', amount: '$23.71' },
    { id: 3322, date: '10/21/2013', time: '2:49 PM', amount: '$8345.23' }
  ];

  return (
    <div className="admin-dashboard">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-header">
          <h3>Startmin</h3>
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li
              className={section === 'dashboard' ? 'active' : ''}
              onClick={() => setSection('dashboard')}
            >
              <FontAwesomeIcon icon={faHome} /> Dashboard
            </li>
            <li
              className={section === 'blogs' ? 'active' : ''}
              onClick={() => setSection('blogs')}
            >
              <FontAwesomeIcon icon={faWpforms} /> Blog Management
            </li>
            <li>
              <FontAwesomeIcon icon={faChartArea} /> Charts
            </li>
            <li>
              <FontAwesomeIcon icon={faTable} /> Tables
            </li>
            <li>
              <FontAwesomeIcon icon={faWpforms} /> Forms
            </li>
            <li>
              <FontAwesomeIcon icon={faPalette} /> UI Elements
            </li>
            <li onClick={() => (onLogout ? onLogout() : router.replace('/admin'))}>
              <FontAwesomeIcon icon={faUser} /> Logout
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Top Navigation */}
        {/* Removed the top navigation header as per request */}
        {/*
        <div className="top-nav">
          <div className="search-container">
            <input type="text" placeholder="Search..." className="search-input" />
            <button className="search-btn">
              <i className="fa fa-search"></i>
            </button>
          </div>
          <div className="nav-right">
            <div className="notification-icon">
              <FontAwesomeIcon icon={faBell} />
            </div>
            <div className="user-menu">
              <FontAwesomeIcon icon={faUser} /> secondtruth
            </div>
          </div>
        </div>
        */}

        {section === 'blogs' ? (
          <div className="dashboard-content">
            <h1>Blog Management</h1>
            <BlogManagement />
          </div>
        ) : (
          <div className="dashboard-content">
            <h1>Dashboard</h1>

            {/* Statistics Cards */}
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className={`stat-card ${stat.color}`}>
                  <div className="stat-icon">
                    <FontAwesomeIcon icon={stat.icon} />
                  </div>
                  <div className="stat-content">
                    <div className="stat-value">{stat.value}</div>
                    <div className="stat-title">{stat.title}</div>
                  </div>
                  <div className="stat-footer">
                    View Details <i className="fa fa-arrow-circle-right"></i>
                  </div>
                </div>
              ))}
            </div>

            {/* Charts Section */}
            <div className="charts-section">
              <div className="chart-container">
                <div className="chart-header">
                  <FontAwesomeIcon icon={faChartArea} /> Area Chart Example
                  <div className="chart-actions">
                    Actions <i className="fa fa-caret-down"></i>
                  </div>
                </div>
                <div className="area-chart">
                  <AreaChart width={400} height={200} />
                </div>
              </div>

              <div className="notifications-panel">
                <div className="panel-header">
                  <FontAwesomeIcon icon={faBell} /> Notifications Panel
                </div>
                <div className="notifications-list">
                  {notifications.map((notification) => (
                    <div key={notification.id} className="notification-item">
                      <div className="notification-icon">
                        <FontAwesomeIcon icon={notification.icon} />
                      </div>
                      <div className="notification-content">
                        <div className="notification-text">{notification.text}</div>
                        <div className="notification-time">{notification.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="panel-footer">
                  <a href="#" className="view-all-link">View All Alerts</a>
                </div>
              </div>
            </div>

            {/* Bar Chart and Donut Chart */}
            <div className="bottom-charts">
              <div className="bar-chart-container">
                <div className="chart-header">
                  <FontAwesomeIcon icon={faChartBar} /> Bar Chart Example
                  <div className="chart-actions">
                    Actions <i className="fa fa-caret-down"></i>
                  </div>
                </div>
                <div className="bar-chart-table">
                  <table>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      {barChartData.map((row) => (
                        <tr key={row.id}>
                          <td>{row.id}</td>
                          <td>{row.date}</td>
                          <td>{row.time}</td>
                          <td>{row.amount}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="bar-chart-visual">
                  <BarChart width={400} height={200} />
                </div>
              </div>

              <div className="donut-chart-container">
                <div className="chart-header">
                  <FontAwesomeIcon icon={faChartBar} /> Donut Chart Example
                </div>
                <div className="donut-chart">
                  <DonutChart width={300} height={300} />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
