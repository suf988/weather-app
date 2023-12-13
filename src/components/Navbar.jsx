import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <nav className='navbar'>
                <div className='navbar-div'>
                    <a href="#" className='anchor'>
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-10" alt="CodeBook Logo" />
                        <span className='span'>CodeBook</span>
                    </a>

                </div>
            </nav>
        </div>
    )
}

export default Navbar
