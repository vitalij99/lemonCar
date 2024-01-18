'use client';
import { Breadcrumbs, Link } from '@mui/material';

import { usePathname } from 'next/navigation';

const BreadcrumbsCustl = ({ lastLink }) => {
  const pathname = usePathname();
  const [_, prefPath, thisPath] = pathname.split('/');

  return (
    <Breadcrumbs sx={{ color: 'var(--text)' }} aria-label="breadcrumb">
      <Link underline="hover" color="inherit" href="/">
        Leman Car
      </Link>
      <Link
        underline="hover"
        color="inherit"
        sx={{ textTransform: 'capitalize' }}
        href={`/${prefPath}`}
      >
        {prefPath}
      </Link>
      {lastLink && (
        <Link
          underline="hover"
          color="inherit"
          sx={{ textTransform: 'capitalize' }}
          href={`/${prefPath}/${thisPath}`}
        >
          {lastLink ? lastLink : thisPath}
        </Link>
      )}
    </Breadcrumbs>
  );
};

export default BreadcrumbsCustl;
