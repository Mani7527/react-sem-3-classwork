import periPeriImg from '../assets/images/peri-peri-banner.jpg';
import whopperImg from '../assets/images/whopper.jpg';
import valueMealImg from '../assets/images/value-meal.jpg';

export const HERO_SLIDES = [
  {
    id: 1,
    type: 'peri-peri',
    title: 'PERI-PERI FEST',
    tagline: 'Spice. Flavor. Frenzy!',
    image: periPeriImg,
    ctaText: 'ORDER NOW',
    badge: 'Limited Time Only',
    subBadge: 'Spicy Bite? Time for Sprite',
    items: [
      'Peri-Peri Veg Whopper',
      'Peri-Peri Paneer Burger',
      'Peri-Peri Chicken',
      'Peri-Peri Cheese Burger',
      'Peri-Peri Fries',
      'Peri-Peri Chicken Burger',
      'Peri-Peri Chicken Nuggets',
      'Peri-Peri Chicken Whopper'
    ]
  },
  {
    id: 2,
    type: 'whopper-king',
    title: 'FLAME-GRILLED WHOPPER',
    tagline: '100% Real Flavors, 0% Compromise',
    image: whopperImg,
    ctaText: 'EXPLORE WHOPPERS',
    badge: 'Original Recipe',
    subBadge: 'Flame-Grilled Since 1954',
    items: [
      'Classic Whopper',
      'Double Whopper',
      'Crispy Veg Whopper',
      'Mutton Whopper'
    ]
  },
  {
    id: 3,
    type: 'value-deals',
    title: 'KING VALUE MEALS',
    tagline: 'Save Up to 47% on Daily Combos',
    image: valueMealImg,
    ctaText: 'VIEW DEALS',
    badge: 'Best Value',
    subBadge: 'Burger + Fries + Drink',
    items: [
      'Crispy Veg Meal',
      'Chicken Royale Meal',
      'Fiery Chicken Meal'
    ]
  }
];
