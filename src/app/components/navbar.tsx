import { NavLink } from 'react-router-dom';
import { dataNavbar } from '../data/data';
import { useNavbarStore } from '../../store/navbarStore';

const Navbar = () => {
  const {navbarItemActive, selectedItemNavbar} = useNavbarStore();
  return (
    <nav className='hidden bg-app-light-background sm:flex sm:flex-col sm:min-w-[290px]'>
      <aside className='flex items-center justify-center py-11 border-b-2 border-app-border'>
        <a href='#'>
          <img
            src={dataNavbar().logo.icon}
            alt={dataNavbar().logo.title}
            className='w-32'
          />
        </a>
      </aside>

      <ul className='flex flex-col gap-y-7 py-12 overflow-scroll'>
        {dataNavbar().nav.map((item) => (
          <NavLink
            key={item.id}
            to={item.to}
            className='flex flex-row items-center mx-6 p-2 text-2xl rounded-md text-app-shade-5 hover:bg-app-shade-6 hover:text-app-primary transition ease-in duration-200'
            onClick={() => {
              selectedItemNavbar(item.id);
              
            }}
          >
            {item.icon}

            <span className={`ml-3 text-base font-medium`}>
              {item.title} - {navbarItemActive}
              </span>
          </NavLink>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

{
  /* <button type="button" class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
    Valider
</button> */
}
