import Link from 'next/link'
import Layout from '../components/Layout'

const Index = () => (
    <Layout title="Home">
        <h1>Hello Next JS</h1>
        <Link href="/about"><a>about page</a></Link>
    </Layout>
);

export default Index;