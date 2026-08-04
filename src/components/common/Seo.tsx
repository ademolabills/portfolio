import { Helmet } from 'react-helmet-async';
import { SITE_NAME, SITE_URL } from '@/utils/constants';

interface SeoProps {
  title: string;
  description: string;
  path?: string;
}

/** Sets the document title and meta description/OG/Twitter tags per page. */
export function Seo({ title, description, path = '/' }: SeoProps) {
  const fullTitle = title === SITE_NAME ? title : `${title} — ${SITE_NAME}`;
  const url = `${SITE_URL}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}
