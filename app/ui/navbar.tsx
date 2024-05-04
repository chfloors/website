import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand krona-one text-light pt-2" href="/">
          CH Floors
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="toggler-icon"></span>
          <span className="toggler-icon" style={{ margin: "7px auto" }}></span>
          <span className="toggler-icon"></span>
        </button>

        <div
          className="offcanvas offcanvas-end fs-7"
          tabIndex={-1}
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header bg-primary m-0 py-3 border-bottom border-4">
            <h1
              className="offcanvas-title text-light navbar-brand pt-2"
              id="offcanvasNavbarLabel"
            >
              CH Floors
            </h1>

            <button
              className="navbar-toggler text-light fs-2 ms-auto krona-one"
              type="button"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >
              X
            </button>
          </div>

          <div
            className="offcanvas-body bg-primary navbar-text d-flex flex-column p-2 "
            style={{ height: "fit-content" }}
          >
            <ul className="navbar-nav justify-content-start pt-5 flex-grow-1">
              <li className="nav-item text-light" data-bs-dismiss="offcanvas">
                <Link
                  className="nav-link active text-light"
                  aria-current="page"
                  href="/"
                >
                  HOME
                </Link>
              </li>

              <li className="nav-item " data-bs-dismiss="offcanvas">
                <Link
                  className="nav-link active text-light"
                  aria-current="page"
                  href="/services"
                >
                  SERVICES
                </Link>
              </li>

              <li className="nav-item" data-bs-dismiss="offcanvas">
                <Link
                  className="nav-link active text-light"
                  aria-current="page"
                  href="/gallery"
                >
                  GALLERY
                </Link>
              </li>

              <li className="nav-item" data-bs-dismiss="offcanvas">
                <Link
                  className="nav-link active text-light"
                  aria-current="page"
                  href="/contact"
                >
                  CONTACT US
                </Link>
              </li>

              {/* <li className="nav-item " data-bs-dismiss="offcanvas">
                <Link
                  className="nav-link active text-light"
                  aria-current="page"
                  href="/help"
                >
                  HELP
                </Link>
              </li> */}

              {/* <li>
                <div className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle text-light"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    LANGUAGE
                  </a>
                  <ul className="dropdown-menu bg-primary fs-7">
                    <li>
                      <a className="dropdown-item text-tertiary" href="#">
                        English
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item text-tertiary" href="#">
                        Portuguese
                      </a>
                    </li>
                  </ul>
                </div>
              </li> */}
            </ul>
            <div className="mx-auto mb-3">
              <Image
                src="/images/logo.png"
                width={85}
                height={85}
                alt="CH Floors Logo"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
