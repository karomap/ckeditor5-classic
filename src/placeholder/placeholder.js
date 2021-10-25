import './lang/id';

import Plugin from '@ckeditor/ckeditor5-core/src/plugin';

import { PlaceholderEditing } from './placeholderediting';
import { PlaceholderUI } from './placeholderui';

export class Placeholder extends Plugin {
  static get requires() {
    return [PlaceholderEditing, PlaceholderUI];
  }
}

export default Placeholder;
