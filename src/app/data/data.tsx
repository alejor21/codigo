import iconLogo from './../../assets/icons/logo.svg';
import {
  FaHome,
  FaChartLine,
  FaCommentDots,
  FaCalendarAlt,
  FaSwatchbook,
} from 'react-icons/fa';
import { FaChalkboardUser } from 'react-icons/fa6';
import { MdWidgets } from 'react-icons/md';
import { BiLogOut } from 'react-icons/bi';

type NavItemType = {
  id: number;
  title: string;
  icon: JSX.Element;
  to: string;
};

type NavbarType = {
  logo: {
    title: string;
    icon: string;
  };
  nav: NavItemType[];
};

export const dataNavbar = (): NavbarType => ({
  // export const dataNavbar = (navItem: number): NavbarType => ({
  logo: {
    title: 'xenon',
    icon: iconLogo,
  },
  nav: [
    {
      id: 1,
      title: 'Home',
      // icon: <FaHome className={navItem === 1 ? 'text-app-primary' : 'text-app-shade-5'}/>,
      icon: <FaHome />,
      to: '/',
    },
    {
      id: 2,
      title: 'Analytics',
      icon: <FaChartLine />,
      to: '/analytics',
    },
    {
      id: 3,
      title: 'Chat',
      icon: <FaCommentDots />,
      to: '/chat',
    },
    {
      id: 4,
      title: 'Calendar',
      icon: <FaCalendarAlt />,
      to: '/calendar',
    },
    {
      id: 5,
      title: 'Project',
      icon: <FaSwatchbook />,
      to: '/project',
    },
    {
      id: 6,
      title: 'Widgets',
      icon: <MdWidgets />,
      to: '/widgets',
    },
    {
      id: 7,
      title: 'Meetings',
      icon: <FaChalkboardUser />,
      to: '/meetings',
    },
    {
      id: 8,
      title: 'Logout',
      icon: <BiLogOut />,
      to: '/logout',
    },
  ],
});
