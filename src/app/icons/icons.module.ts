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
export class IconsModule {}