import React from 'react';
import Layout from '../components/Layout';
import PostLink from './postlink';

const blog = () => (
    <Layout title="My Blog">
        <ul>
            <PostLink slug="react-post" title="React Post" />
            <PostLink slug="angular-post" title="Angular Post" />
            <PostLink slug="vue-post" title="Vue Post" />
        </ul>
    </Layout>
);

export default blog;

