import { btnClose, menu, tabLinks, tabContent } from './elementsNodeList';
import { mobileMenu, tabs } from './helpers';

window.addEventListener('load', () => {
  // Mobile menu
  mobileMenu(btnClose, menu);
  
  // tabs
  tabs(tabLinks, tabContent);
});
