import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../components/PageDefault';
import { ErrorWrapper } from './styles.js';

function Error404() {
  return (
    <PageDefault>
      <ErrorWrapper>
        {/* <h1>Error 404</h1> */}
        <img src="404.gif" alt="" />
        <p>Page not found</p>
        <Link to="/">Return to site</Link>
      </ErrorWrapper>
    </PageDefault>
  );
}

export default Error404;
