import Layout from '../components/Layout';
import {withRouter} from 'next/router'

const post = ({url}) => (
    <Layout title={url.query.title}>
        <p style={{ width:'80vw' }}>Enim commodo in ad proident proident tempor incididunt occaecat do est enim mollit. Laborum amet minim dolor ullamco id amet fugiat magna anim ad cupidatat laborum. Eiusmod aliquip Lorem anim in sunt non nisi consectetur ut reprehenderit duis anim.
        Consequat nostrud sint id reprehenderit sunt minim ipsum cillum. Dolore duis sint anim cillum laborum velit dolor nostrud pariatur nisi non mollit tempor ad. Magna tempor sint nisi officia sint do magna minim. Cillum quis non eiusmod sit in. Sit sint et voluptate duis adipisicing ut eu est aliquip incididunt sunt ex exercitation. Cillum reprehenderit esse qui magna sint consectetur laboris velit eiusmod irure nisi.
        </p>
    </Layout>
);

export default withRouter(post);