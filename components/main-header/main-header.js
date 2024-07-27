import Link from "next/link";

import logoImg from '@/assets/logo.png';

import classes from './main-header.module.css';
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";

export function MainHeader() {
  
  return (
    <>
    <MainHeaderBackground />
    <header className={classes.header}>
      <Link className={classes.logo} href="/">
        <Image src={logoImg} alt="A plate with food on it" priority/>
        NextLevel Food
      </Link>

      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink href={"/meals"}>
            Browse Meals
            </NavLink>
            {/* <Link href="/meals" className={path.startsWith('/meals') ? classes.active : undefined}>Browse Meals</Link> */}
          </li>
          <li>
          <NavLink href={"/community"}>
            Foodies Community
            </NavLink>
            {/* <Link href="/community" className={path === '/community' ? classes.active : undefined}>Foodies Community</Link> */}
          </li>
        </ul>
      </nav>
    </header>
    </>
  )
}