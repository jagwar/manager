export default /* @ngInject */ ($stateProvider) => {
  $stateProvider.state(
    'telecom.telephony.billingAccount.carrierSip.endpoints',
    {
      url: '/endpoints',
      views: {
        '@telecom.telephony.billingAccount.carrierSip': 'carrierSipEndpoints',
      },
      resolve: {
        endpointIpList: /* @ngInject */ (endpoints) =>
          endpoints.map(({ ip }) => ip),
        endpointsWithIncomingCallsAllowed: /* @ngInject */ (endpoints) =>
          endpoints.filter(({ enableIncomingCalls }) => enableIncomingCalls),
        endpoints: /* @ngInject */ (
          billingAccount,
          CarrierSipService,
          serviceName,
        ) => CarrierSipService.getEndpoints(billingAccount, serviceName),
      },
    },
  );
};
