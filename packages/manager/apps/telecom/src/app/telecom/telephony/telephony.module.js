import angular from 'angular';

import component from './telephony.component';
import routing from './telephony.routing';

const moduleName = 'ovhManagerTelecomTelephony';

angular
  .module(moduleName, [])
  .config(routing)
  .component('telecomTelephony', component)
  .run(/* @ngTranslationsInject:json ./translations */);

export default moduleName;