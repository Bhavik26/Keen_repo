'use client';

export const dynamic = 'force-dynamic';

export default function NotFound() {
  return (
    <div style={{ minHeight: '40vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 8 }}>
      <h1 style={{ margin: 0 }}>404 - Page Not Found</h1>
      <p style={{ color: '#666' }}>The page you are looking for does not exist.</p>
      <a href="/" style={{ color: '#4f46e5' }}>Go back home</a>
    </div>
  );
}
