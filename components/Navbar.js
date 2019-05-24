import Link from 'next/link';

const navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
        <Link href="/"><a className="navbar-brand" >BitzPrice</a></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02"
                aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    <Link href="/"><a className="nav-link" >Home <span className="sr-only">(current)</span></a></Link>
                </li>
                <li className="nav-item">
                    <Link href="/about"><a className="nav-link" href="#">Features</a></Link>
                </li>
            </ul>
        </div>
    </nav>
);

export default navbar;