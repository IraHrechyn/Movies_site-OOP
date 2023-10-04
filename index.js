import { AppModel } from './types/app-model.js';
import { MainComponent } from './components/main.component.js';


AppModel.init();
new MainComponent('mainContainer');
