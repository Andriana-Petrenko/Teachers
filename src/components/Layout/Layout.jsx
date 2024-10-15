import css from './Layout.module.css'
import Navigation from '../Navigation/Navigation'
import Logo from '../Logo/Logo'
import { Outlet } from 'react-router-dom'
import AuthNav from '../AuthNav/AuthNav'


const Layout = () => {
    return (
    <>
           <header className={css.header}>
             <Logo/>
             <Navigation />
             <AuthNav/>
          </header>
             <main>
                <Outlet />
             </main>
     
        </>
    
    
  )
}

export default Layout