import { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import '../styles/style.css'

function Breadcrum() {
  const location = useLocation();
  const [breadcrumbs, setBreadcrumbs] = useState([]);

  useEffect(() => {
    const pathParts = location.pathname.split('/').filter(p => p);
    const crumbs = [{ name: 'Inicio', path: '/' }];
    
    let currentPath = '';
    pathParts.forEach(part => {
      currentPath += `/${part}`;
      const name = part.charAt(0).toUpperCase() + part.slice(1);
      crumbs.push({ name, path: currentPath });
    });
    
    setBreadcrumbs(crumbs);
  }, [location]);

  return (
    <div className="brackcrum">
      {breadcrumbs.map((crumb, index) => (
        <span key={index}>
          {index > 0 && <span className="separator">/</span>}
          {index === breadcrumbs.length - 1 ? (
            <span>{crumb.name}</span>
          ) : (
            <Link to={crumb.path}>{crumb.name}</Link>
          )}
        </span>
      ))}
    </div>
  )
}

export default Breadcrum