import stepModuleNames from '../../../../../components/dedicated-cloud/service-pack/upgrade/types/certification/certification.steps';

import component from '../../../../../components/dedicated-cloud/service-pack/upgrade/upgrade.component';

export const state = {
  name: 'app.managedBaremetal.details.servicePackUpgrade.certification',
  params: {
    activationType: 'basic',
  },
  resolve: {
    backButtonText: /* @ngInject */ ($translate) =>
      $translate.instant('ovhManagerPccServicePackUpgradeCertification_header'),
    orderableServicePacks: /* @ngInject */ (
      currentService,
      currentUser,
      UpgradeCertificationService,
    ) =>
      UpgradeCertificationService.getOrderableServicePacks(
        currentService.name,
        currentUser.ovhSubsidiary,
      ),
    steps: /* @ngInject */ (pccServicePackUpgradeService) =>
      pccServicePackUpgradeService.buildSteps(stepModuleNames),
    breadcrumb: /* @ngInject */ ($translate) =>
      $translate.instant('managed_baremetal_servicepack_upgrade_certification'),
  },
  url: '/certification',
  views: {
    'pccView@app.managedBaremetal.details': component.name,
  },
};

export const registerState = /* @ngInject */ ($stateProvider) => {
  $stateProvider.state(state.name, state);
};

export default {
  state,
  registerState,
};
