import { NgModule } from '@angular/core';

import { TablerIconsModule } from 'angular-tabler-icons';
import { IconBrandGithub, IconBrandLinkedin, IconBrandTwitter, IconFileText, IconFolder } from 'angular-tabler-icons/icons';

/*
  List of All Icons: https://tabler-icons.io/
  CSS Styling: https://www.npmjs.com/package/angular-tabler-icons#styling-icons
*/

// Select some icons (use an object, not an array)
const icons = {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconFileText,
  IconFolder
};

@NgModule({
  imports: [
    TablerIconsModule.pick(icons)
  ],
  exports: [
    TablerIconsModule
  ]
})
export class IconsModule { }

// NOTES:
// 1. We add TablerIconsModule to the 'exports', since the <i-tabler> component will be used in templates of parent module
// 2. Don't forget to pick some icons using TablerIconsModule.pick({ ... })