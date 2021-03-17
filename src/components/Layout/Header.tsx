import { FC, useState } from 'react'
import { ReactComponent as Search } from '../../icons/search.svg'
import { ReactComponent as Menu } from '../../icons/menu.svg'

const Header: FC = () => {
	const [toggleMenu, setToggleMenu] = useState<boolean>(false)
	return (
		<header className='header'>
			<div className='container-fluid header-desktop'>
				<nav className='navbar navbar-expand-md container'>
					<a className='navbar-brand' href='/'>
						<img src='assets/header/logo.png' alt='logo' />
					</a>
					<button
						onClick={() => setToggleMenu(!toggleMenu)}
						className='navbar-toggler is-white border d-block d-md-none'
						type='button'
						data-toggle='collapse'
						data-target='#navbarSupportedContent'
						aria-controls='navbarSupportedContent'
						aria-expanded='false'
						aria-label='Toggle navigation'
					>
						<Menu />
					</button>
					<div className='d-none d-md-flex mx-auto w-100'>
						<ul className='navbar-nav m-auto '>
							<li className='nav-item  mx-0 mx-lg-4'>
								<a className='nav-link active' href='/'>
									Home
								</a>
							</li>
							<li className='nav-item  mx-0 mx-lg-4'>
								<a className='nav-link' href='/'>
									About Us
								</a>
							</li>
							<li className='nav-item  mx-0 mx-lg-4'>
								<a className='nav-link' href='/'>
									Services
								</a>
							</li>
							<li className='nav-item  mx-0 mx-lg-4'>
								<a className='nav-link' href='/'>
									Pricing
								</a>
							</li>
							<li className='nav-item  mx-0 mx-lg-4'>
								<a className='nav-link' href='/'>
									Careers
								</a>
							</li>
						</ul>
						<form className='form-inline my-2 my-lg-0'>
							<input
								className='form-control mr-sm-2 d-block d-md-none'
								type='search'
								placeholder='Search'
								aria-label='Search'
							/>
							<button
								className='btn is-white my-2 my-sm-0 d-none d-md-block'
								type='submit'
							>
								<Search />
							</button>
						</form>
					</div>
				</nav>
			</div>
			<div
				className={`d-block d-md-none collapse navbar-collapse ${
					toggleMenu ? 'show' : ''
				}`}
				id='navbarSupportedContent'
			>
				<ul className='navbar-nav m-auto container align-items-start'>
					<li className='nav-item  mx-0 mx-lg-4'>
						<a className='nav-link active' href='/'>
							Home
						</a>
					</li>
					<li className='nav-item  mx-0 mx-lg-4'>
						<a className='nav-link' href='/'>
							About Us
						</a>
					</li>
					<li className='nav-item  mx-0 mx-lg-4'>
						<a className='nav-link' href='/'>
							Services
						</a>
					</li>
					<li className='nav-item  mx-0 mx-lg-4'>
						<a className='nav-link' href='/'>
							Pricing
						</a>
					</li>
					<li className='nav-item  mx-0 mx-lg-4'>
						<a className='nav-link' href='/'>
							Careers
						</a>
					</li>
				</ul>
				<form className='form-inline my-2 my-lg-0 container align-items-start px-0'>
					<input
						className='form-control mr-sm-2 d-block d-md-none'
						type='search'
						placeholder='Search'
						aria-label='Search'
					/>
					<button
						className='btn is-white my-2 my-sm-0 d-none d-md-block'
						type='submit'
					>
						<Search />
					</button>
				</form>
			</div>
		</header>
	)
}

export default Header
