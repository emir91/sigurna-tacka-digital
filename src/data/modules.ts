import bodyHeartIcon from '../assets/icons/Body-Heart.svg';
import brainIcon from '../assets/icons/Brain.svg';
import eyeIcon from '../assets/icons/Eye.svg';
import shieldIcon from '../assets/icons/Shield.svg';
import signpostIcon from '../assets/icons/Signpost.svg';
import supportGroupIcon from '../assets/icons/Support-Group.svg';
import type { Module } from '../types/module';

export const modules: Module[] = [
  {
    id: 1,
    slug: 'prepoznati',
    title: 'Prepoznati',
    iconSrc: eyeIcon,
  },
  {
    id: 2,
    slug: 'reakcije-na-stres',
    title: 'Reakcije na stres',
    iconSrc: brainIcon,
  },
  {
    id: 3,
    slug: 'licne-granice',
    title: 'Lične granice',
    iconSrc: shieldIcon,
    description:
      'Saznaj šta su lične granice, zašto su važne i kako ih prepoznati u svakodnevnim situacijama.',
  },
  {
    id: 4,
    slug: 'tijelo-i-autonomija',
    title: 'Tijelo i autonomija',
    iconSrc: bodyHeartIcon,
  },
  {
    id: 5,
    slug: 'odluka-i-sigurnost',
    title: 'Odluka i sigurnost',
    iconSrc: signpostIcon,
  },
  {
    id: 6,
    slug: 'gdje-potraziti-podrsku',
    title: 'Gdje potražiti podršku',
    iconSrc: supportGroupIcon,
  },
];