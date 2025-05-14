import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumb: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(Boolean);

  return (
    <nav className="text-sm text-gray-600 px-6 md:px-20 pt-6">
      <ol className="flex flex-wrap items-center space-x-2">
        <li>
          <Link to="/" className="hover:text-yellow-600 font-medium">Accueil</Link>
        </li>
        {pathnames.length > 0 && (
          <>
            <li>
              <span className="mx-2">&gt;</span>
              <Link to="/nos-offres" className="hover:text-yellow-600">Nos Offres Crédit</Link>
            </li>
            {pathnames.slice(1).map((name, index) => {
              const routeTo = `/nos-offres/${pathnames.slice(1, index + 2).join('/')}`;
              const isLast = index === pathnames.slice(1).length - 1;
              return (
                <li key={index} className="flex items-center">
                  <span className="mx-2">&gt;</span>
                  {isLast ? (
                    <span className="text-gray-500 capitalize">
                      {decodeURIComponent(name.replace('-', ' '))}
                    </span>
                  ) : (
                    <Link to={routeTo} className="hover:text-yellow-600 capitalize">
                      {decodeURIComponent(name.replace('-', ' '))}
                    </Link>
                  )}
                </li>
              );
            })}
          </>
        )}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
