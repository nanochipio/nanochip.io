import * as React from 'react';

const NotFoundPage = () => (
  <div>
    <header className="header py-40" style={{ backgroundColor: '#29363d' }} />

    <div className="container py-200">
      <header className="section-header">
        <h2>Page Not Found</h2>
        <hr />
        <p className="lead">Seems you’re looking for something that doesn’t exist.</p>
      </header>
    </div>
  </div>
);

export default NotFoundPage;
