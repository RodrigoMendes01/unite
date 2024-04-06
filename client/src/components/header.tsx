import Logo from '../assets/images/logo.png';
import { NavLink } from './nav-link';

export function Header () {
  return (
    <div className='flex items-center gap-5 py-2'>
      <img src={Logo} alt="Logo da empresa" className='w-16' />

      <nav className='flex items-center gap-5'>
        <NavLink href='/eventos'>Eventos</NavLink>
        <NavLink href='/participants'>Participantes</NavLink>
      </nav>
    </div>
  );
}
