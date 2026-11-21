import bodyHeartIcon from '../assets/icons/Body-Heart.svg';
import homeHeartIcon from '../assets/icons/HomeHeart.svg';
import medicalBagIcon from '../assets/icons/MedicalBag.svg';
import scalesIcon from '../assets/icons/Scales.svg';
import shieldIcon from '../assets/icons/Shield.svg';
import supportGroupIcon from '../assets/icons/Support-Group.svg';
import type { SupportCategory } from '../types/support';

export const supportCategories: SupportCategory[] = [
  {
    id: 'centar-za-socijalni-rad',
    title: 'Centar za socijalni rad',
    iconSrc: supportGroupIcon,
  },
  {
    id: 'centar-za-mentalno-zdravlje',
    title: 'Centar za mentalno zdravlje',
    iconSrc: bodyHeartIcon,
  },
  {
    id: 'policija',
    title: 'Policija',
    iconSrc: shieldIcon,
  },
  {
    id: 'hitna-pomoc',
    title: 'Hitna pomoć',
    iconSrc: medicalBagIcon,
  },
  {
    id: 'pravna-pomoc',
    title: 'Pravna pomoć',
    iconSrc: scalesIcon,
  },
  {
    id: 'sigurne-kuce-specijalizirane-organizacije',
    title: 'Sigurne kuće / specijalizirane organizacije',
    iconSrc: homeHeartIcon,
  },
];