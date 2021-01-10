// see: https://nextjs.org/docs/api-reference/data-fetching/getInitialProps#typescript
import { NextPage } from 'next';
import React from 'react';
import { Game1All } from '../pages-parts';

const IndexPage: NextPage = () => <Game1All />;

IndexPage.getInitialProps = async () => ({
  // namespacesRequired: ['common', 'site/common', 'site/home'],
});

export default IndexPage;
