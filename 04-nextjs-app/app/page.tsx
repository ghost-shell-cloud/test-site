export default function Home() {
  const env = {
    customVar: process.env.CUSTOM_VAR || 'not set',
    apiUrl: process.env.NEXT_PUBLIC_API_URL || 'not set',
    nodeEnv: process.env.NODE_ENV
  };

  return (
    <div style={{
      fontFamily: 'Monaco, monospace',
      background: '#0a0a0a',
      color: '#00ff00',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div style={{
        border: '2px solid #00ff00',
        padding: '40px',
        maxWidth: '600px'
      }}>
        <h1 style={{ marginTop: 0 }}>✅ GHOST SHELL Next.js Test</h1>
        <p style={{ fontSize: '24px' }}>Status: RUNNING</p>
        <div style={{ marginTop: '30px', fontSize: '14px', color: '#888' }}>
          <p>Project: 04-nextjs-app</p>
          <p>Framework: Next.js 14</p>
          <p>Deployed via: GitHub Deploy</p>
          <hr style={{ borderColor: '#333' }} />
          <h3>Environment Variables:</h3>
          <ul>
            <li>NODE_ENV: {env.nodeEnv}</li>
            <li>CUSTOM_VAR: {env.customVar}</li>
            <li>NEXT_PUBLIC_API_URL: {env.apiUrl}</li>
          </ul>
          <p>Build time: {new Date().toISOString()}</p>
        </div>
      </div>
    </div>
  );
}
