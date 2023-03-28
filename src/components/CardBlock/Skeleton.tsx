import React from 'react';
import ContentLoader from 'react-content-loader';

export const Skeleton = (props: any) => (
  <ContentLoader
    className="card"
    speed={2}
    width={320}
    height={450}
    viewBox="0 0 320 450"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="24" y="219" rx="10" ry="10" width="50" height="16" />
    <rect x="0" y="461" rx="11" ry="11" width="95" height="30" />
    <rect x="125" y="451" rx="26" ry="26" width="152" height="45" />
    <rect x="50" y="6" rx="10" ry="10" width="200" height="200" />
    <rect x="25" y="240" rx="5" ry="5" width="100" height="16" />
    <rect x="23" y="267" rx="5" ry="5" width="195" height="21" />
    <rect x="23" y="298" rx="5" ry="5" width="195" height="21" />
    <rect x="24" y="332" rx="5" ry="5" width="195" height="21" />
    <rect x="24" y="386" rx="5" ry="5" width="48" height="22" />
    <rect x="117" y="374" rx="20" ry="20" width="153" height="45" />
  </ContentLoader>
);
