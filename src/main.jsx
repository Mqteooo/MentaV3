import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          padding: '40px 24px', fontFamily: 'monospace',
          background: '#0d1f1f', color: '#4dff6e',
          minHeight: '100vh', whiteSpace: 'pre-wrap', wordBreak: 'break-all'
        }}>
          <h2 style={{ color: '#ff6b6b', marginBottom: 16 }}>⚠ Error de renderizado</h2>
          <p style={{ color: '#fff', marginBottom: 12 }}>{String(this.state.error)}</p>
          <pre style={{ color: '#aaa', fontSize: 12 }}>{this.state.error?.stack}</pre>
        </div>
      );
    }
    return this.props.children;
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
)
