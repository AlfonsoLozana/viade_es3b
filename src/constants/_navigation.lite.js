/**
 * Object mapping of known possible inboxes for the user
 */
export const NavigationItems = [
  {
    id: 'welcome',
    icon: 'img/viade-icons/terrain-out.svg',
    label: 'navBar.welcome',
    to: '/welcome'
  },
  {
    id: 'upload',
    icon: 'img/viade-icons/directions-out.svg',
    label: 'navBar.upload',
    to: '/upload'
  },
  {
    id: 'map',
    //icon: 'img/icon/map.png',
    icon: '../images/viade-icons/map.png',
    label: 'navBar.myTrails',
    to: '/map'
  },
  {
    id: 'newROute',
    //icon: 'img/icon/map.png',
    icon: '../images/viade-icons/map.png',
    label: 'Nueva ruta',
    to: '/newRoute'
  },
  {
    id: 'friends',
    //icon: 'img/viade-icons/people.svg',
    icon: '../images/viade-icons/people.svg',
    label: 'navBar.friends',
    to: '/friends'

  }
];

export const ProfileOptions = [
  {
    label: 'navBar.profile',
    onClick: 'profileRedirect',
    icon: 'cog'
  },
  {
    label: 'navBar.logOut',
    onClick: 'logOut',
    icon: 'lock'
  }
];
