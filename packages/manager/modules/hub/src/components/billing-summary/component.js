import controller from './controller';
import template from './template.html';

export default {
  controller,
  template,
  bindings: {
    bills: '<?',
    debt: '<?',
    me: '<',
    trackingPrefix: '@',
    refresh: '&',
  },
};
