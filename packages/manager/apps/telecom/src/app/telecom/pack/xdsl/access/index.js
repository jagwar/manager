import angular from 'angular';

import ngTranslateAsyncLoader from '@ovh-ux/ng-translate-async-loader';
import uiRouter from '@uirouter/angularjs';
import angularTranslate from 'angular-translate';
import '@ovh-ux/ui-kit';

import diagnostic from './diagnostic';
import diagnosticDetails from './diagnostic/details';
import access from './pack-xdsl-access.component';
import notifications from './notifications';
import comfortExchange from './comfortExchange/comfort-exchange.module';

const moduleName = 'ovhManagerTelecomPackXdslAccess';

angular
  .module(moduleName, [
    ngTranslateAsyncLoader,
    uiRouter,
    angularTranslate,
    'oui',
    diagnostic,
    diagnosticDetails,
    notifications,
    comfortExchange,
  ])
  .component('packXdslAccess', access);

export default moduleName;
