import Layout from '../components/Layout';

export default (props) => (
    <Layout title="Error!!!">
            {props.statusCode ? `Could not load your user data: Status Code ${props.statusCode}`:`Couldn't get that page, sorry!`}
    </Layout>
);