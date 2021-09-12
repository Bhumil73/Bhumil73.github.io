import React from 'react'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link text-black" aria-current="page" href="/#">.resume()</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-black" aria-current="page" href="/#">.projects()</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-black" aria-current="page" href="/#">.blogs()</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-black" aria-current="page" href="/#">.vlogs()</a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navbar