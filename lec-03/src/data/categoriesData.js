import whopperImg from '../assets/images/whopper.jpg';
import beveragesImg from '../assets/images/beverages.jpg';
import valueMealImg from '../assets/images/value-meal.jpg';

export const CATEGORIES_DATA = [
  {
    id: 'take-off-combos',
    name: 'Take Off Combos',
    image: null,
    badgeType: 'plane',
    badgeText: 'Take-Off',
    badgeSub: 'COMBOS',
    color: '#D62300',
    bg: '#FFF3E8'
  },
  {
    id: 'value-meals-discount',
    name: 'Value Meals (Save Upto 47%)',
    image: whopperImg,
    badgeType: 'discount',
    tag: 'UP TO 47% OFF',
    color: '#F5A800',
    bg: '#FFFDF0'
  },
  {
    id: 'feast-and-fly',
    name: 'Feast & Fly',
    image: null,
    badgeType: 'ticket',
    badgeText: 'Feast & Fly',
    badgeSub: 'FLIGHT TICKETS INSIDE',
    color: '#FF6B00',
    bg: '#FFF5EB'
  },
  {
    id: 'peri-peri-fest',
    name: 'Peri Peri Fest',
    image: null,
    badgeType: 'flame',
    badgeText: 'PERI-PERI',
    badgeSub: 'FEST',
    color: '#C8102E',
    bg: '#FDF0F0'
  },
  {
    id: 'monsoon-feast-1',
    name: 'Monsoon Meals Feast For 1',
    image: null,
    badgeType: 'monsoon',
    badgeText: 'MONSOON',
    badgeSub: 'MEALS FOR 1',
    color: '#8A2BE2',
    bg: '#F8F2FF'
  },
  {
    id: 'monsoon-feast-2',
    name: 'Monsoon Meals Feast For 2',
    image: null,
    badgeType: 'monsoon',
    badgeText: 'MONSOON',
    badgeSub: 'MEALS FOR 2',
    color: '#8A2BE2',
    bg: '#F8F2FF'
  },
  {
    id: 'value-meals',
    name: 'Value Meals',
    image: valueMealImg,
    badgeType: null,
    color: '#ED7902',
    bg: '#FFF8F0'
  },
  {
    id: 'whopper',
    name: 'Whopper',
    image: whopperImg,
    badgeType: null,
    color: '#502314',
    bg: '#FAF4EB'
  },
  {
    id: 'kids-friendly-menu',
    name: 'Kids Friendly Menu',
    image: null,
    badgeType: 'kids',
    badgeText: 'Kids Friendly',
    badgeSub: 'WITH TOY',
    color: '#FF1493',
    bg: '#FFF0F5'
  },
  {
    id: 'beverages',
    name: 'Beverages',
    image: beveragesImg,
    badgeType: null,
    color: '#5C3A21',
    bg: '#F6F1EC'
  },
  {
    id: 'crazy-app-deals',
    name: 'Crazy App Deals',
    image: null,
    badgeType: 'crown',
    badgeText: 'CRAZY APP DEALS',
    badgeSub: 'EXCLUSIVE',
    color: '#D4AF37',
    bg: '#FFFDF2'
  },
  {
    id: 'two-for-offer',
    name: '2 for Offers',
    image: null,
    badgeType: 'two_for',
    badgeText: '2 FOR',
    badgeSub: 'OFFER ₹99',
    color: '#E60000',
    bg: '#FFF0F0'
  }
];
