import Layout from '../components/Layout';
import Link from 'next/link';


const PostLink = props => (
    <li><Link href={`/post?title=${props.title}`}><a>{props.title}</a></Link></li>
);

const blog = () => (
    <Layout title="My Blog">
        <ul>
            <PostLink title="React" />
            <PostLink title="Angular" />
            <PostLink title="Vue" />
        </ul>
    </Layout>
);

export default blog;

