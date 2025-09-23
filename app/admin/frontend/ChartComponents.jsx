import React, { useEffect, useRef } from 'react';

// Simple Area Chart Component
export const AreaChart = ({ data, width = 400, height = 200 }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Clear canvas
    ctx.clearRect(0, 0, width, height);
    
    // Sample data for area chart
    const points = [
      { x: 50, y: 150 },
      { x: 100, y: 120 },
      { x: 150, y: 100 },
      { x: 200, y: 80 },
      { x: 250, y: 60 },
      { x: 300, y: 40 },
      { x: 350, y: 50 }
    ];
    
    // Draw area chart
    ctx.beginPath();
    ctx.moveTo(points[0].x, height);
    ctx.lineTo(points[0].x, points[0].y);
    
    for (let i = 1; i < points.length; i++) {
      ctx.lineTo(points[i].x, points[i].y);
    }
    
    ctx.lineTo(points[points.length - 1].x, height);
    ctx.closePath();
    
    // Fill with gradient
    const gradient = ctx.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0, 'rgba(54, 162, 235, 0.8)');
    gradient.addColorStop(1, 'rgba(54, 162, 235, 0.1)');
    ctx.fillStyle = gradient;
    ctx.fill();
    
    // Draw line
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    for (let i = 1; i < points.length; i++) {
      ctx.lineTo(points[i].x, points[i].y);
    }
    ctx.strokeStyle = 'rgba(54, 162, 235, 1)';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    // Draw points
    points.forEach(point => {
      ctx.beginPath();
      ctx.arc(point.x, point.y, 4, 0, 2 * Math.PI);
      ctx.fillStyle = 'rgba(54, 162, 235, 1)';
      ctx.fill();
      ctx.strokeStyle = 'white';
      ctx.lineWidth = 2;
      ctx.stroke();
    });
    
  }, [data, width, height]);

  return <canvas ref={canvasRef} width={width} height={height} />;
};

// Simple Bar Chart Component
export const BarChart = ({ data, width = 400, height = 200 }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Clear canvas
    ctx.clearRect(0, 0, width, height);
    
    // Sample data for bar chart
    const bars = [
      { value: 80, color: '#007bff' },
      { value: 65, color: '#28a745' },
      { value: 90, color: '#ffc107' },
      { value: 45, color: '#dc3545' },
      { value: 75, color: '#6f42c1' }
    ];
    
    const barWidth = width / bars.length - 20;
    const maxValue = Math.max(...bars.map(b => b.value));
    
    bars.forEach((bar, index) => {
      const barHeight = (bar.value / maxValue) * (height - 40);
      const x = index * (barWidth + 20) + 10;
      const y = height - barHeight - 20;
      
      // Draw bar
      ctx.fillStyle = bar.color;
      ctx.fillRect(x, y, barWidth, barHeight);
      
      // Draw value on top
      ctx.fillStyle = '#333';
      ctx.font = '12px Arial';
      ctx.textAlign = 'center';
      ctx.fillText(bar.value, x + barWidth / 2, y - 5);
    });
    
  }, [data, width, height]);

  return <canvas ref={canvasRef} width={width} height={height} />;
};

// Simple Donut Chart Component
export const DonutChart = ({ data, width = 200, height = 200 }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Clear canvas
    ctx.clearRect(0, 0, width, height);
    
    // Sample data for donut chart
    const segments = [
      { value: 30, color: '#007bff', label: 'Blue' },
      { value: 25, color: '#28a745', label: 'Green' },
      { value: 20, color: '#ffc107', label: 'Yellow' },
      { value: 15, color: '#dc3545', label: 'Red' },
      { value: 10, color: '#6f42c1', label: 'Purple' }
    ];
    
    const centerX = width / 2;
    const centerY = height / 2;
    const outerRadius = Math.min(width, height) / 2 - 10;
    const innerRadius = outerRadius * 0.6;
    
    let currentAngle = -Math.PI / 2;
    const total = segments.reduce((sum, segment) => sum + segment.value, 0);
    
    segments.forEach(segment => {
      const sliceAngle = (segment.value / total) * 2 * Math.PI;
      
      // Draw outer arc
      ctx.beginPath();
      ctx.arc(centerX, centerY, outerRadius, currentAngle, currentAngle + sliceAngle);
      ctx.arc(centerX, centerY, innerRadius, currentAngle + sliceAngle, currentAngle, true);
      ctx.closePath();
      ctx.fillStyle = segment.color;
      ctx.fill();
      
      currentAngle += sliceAngle;
    });
    
    // Draw center circle
    ctx.beginPath();
    ctx.arc(centerX, centerY, innerRadius, 0, 2 * Math.PI);
    ctx.fillStyle = '#f8f9fa';
    ctx.fill();
    
  }, [data, width, height]);

  return <canvas ref={canvasRef} width={width} height={height} />;
};
