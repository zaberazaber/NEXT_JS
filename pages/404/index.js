
export default function UnsupportedBrowser() {
    return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
        <h1>Unsupported Browser</h1>
        <p>We're sorry, but this application is only accessible using Google Chrome.</p>
        <a href="https://www.google.com/chrome/" target="_blank" rel="noopener noreferrer">
          <button style={{ padding: '10px 20px', fontSize: '16px' }}>Download Chrome</button>
        </a>
      </div>
    );
  }
  