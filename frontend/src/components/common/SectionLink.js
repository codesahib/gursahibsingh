import React from 'react';
import { Link } from 'react-router-dom';

// Router hashes keep section links working with BrowserRouter and HashRouter.
export default function SectionLink({ section = '', children, ...props }) {
  return <Link to={{ pathname: '/', hash: section ? `#${section}` : '' }} data-section={section} {...props}>{children}</Link>;
}
