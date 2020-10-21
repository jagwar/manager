/* eslint-disable import/no-webpack-loader-syntax, import/no-unresolved, import/extensions */

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'script-loader!jquery';
import 'angular';
import 'angular-animate';
import 'angular-aria';
import 'angular-ui-bootstrap';
import 'angular-cookies';
import 'script-loader!angular-dynamic-locale/src/tmhDynamicLocale';
import 'angular-messages';
import 'script-loader!moment/min/moment.min';
import 'angular-moment';
import 'angular-resource';
import 'angular-sanitize';
import 'angular-scroll-glue';
import 'script-loader!angular-strap/dist/modules/compiler.min';
import 'script-loader!angular-strap/dist/modules/dimensions.min';
import 'script-loader!angular-strap/dist/modules/tooltip.min';
import 'script-loader!angular-strap/dist/modules/tooltip.tpl.min';
import 'script-loader!angular-strap/dist/modules/popover.min';
import 'script-loader!angular-strap/dist/modules/popover.tpl.min';
import 'angular-translate';
import 'angular-translate-loader-partial';
import 'script-loader!angular-websocket/dist/angular-websocket';
import 'script-loader!jquery-ui/ui/minified/core.min';
import 'script-loader!jquery-ui/ui/minified/widget.min';
import 'script-loader!jquery-ui/ui/minified/mouse.min';
import 'script-loader!jquery-ui/ui/minified/draggable.min';
import 'script-loader!jquery-ui/ui/minified/droppable.min';
import 'script-loader!jquery-ui/ui/minified/sortable.min';
import 'script-loader!angular-ui-sortable/src/sortable';
import 'script-loader!angular-ui-validate/dist/validate';
import 'script-loader!bootstrap/dist/js/bootstrap';
import 'd3';
import 'jquery.cookie';
import 'script-loader!jquery.scrollto/jquery.scrollTo.min';
import 'lodash';
import 'script-loader!matchmedia/matchMedia';
import 'matchmedia-ng';
import 'ng-slide-down';
import 'script-loader!uri.js/src/URI.min';
import 'script-loader!validator-js/validator';
import 'script-loader!jsplumb/dist/js/jquery.jsPlumb-1.7.4-min';
import 'ovh-common-style';
import 'script-loader!messenger/build/js/messenger';
import 'script-loader!messenger/build/js/messenger-theme-future';
import 'script-loader!messenger/build/js/messenger-theme-flat';
import 'ovh-api-services';
import 'script-loader!chart.js/dist/Chart';
import 'script-loader!angular-chart.js/dist/angular-chart';
import 'ovh-angular-list-view';
import 'script-loader!jsurl/lib/jsurl';
import 'moment-duration-format';
import 'script-loader!xterm/dist/xterm';
import 'script-loader!xterm/dist/addons/fit/fit';
import '@ovh-ux/ui-kit';
import 'script-loader!popper.js/dist/umd/popper';
import 'angular-translate-loader-pluggable';
/* eslint-enable import/no-webpack-loader-syntax, import/no-unresolved, import/extensions */

import './app.scss';
import './app.less';

import moduleName from './app';

import '../components/at-internet/at-internet-controller-decorators.provider';
import '../components/at-internet/at-internet.config';
import '../components/at-internet/at-internet.constants';
import '../components/auth/auth.config';
import '../components/bytes/bytes.filter';
import '../components/changelog/changelog.controller';
import '../components/changelog/changelog.service';
import '../components/cloud-ui/autocomplete/cloud-autocomplete.component';
import '../components/cloud-ui/search/cloud-search.component';
import '../components/debug/debug.config';
import '../components/docs/docs.constants';
import '../components/docs/docs.service';
import '../components/hterm/hterm.directive';
import '../components/location/location.config';
import '../components/moment/moment.config';
import '../components/moment/moment.constants';
import '../components/moment/moment.filter';
import '../components/openStreetMap/openStreetMap.filter';
import '../components/ovh-doc-url/ovh-doc-url.config';
import '../components/ovh-task-alert/modal/ovh-task-follow-modal.controller';
import '../components/ovh-task-alert/ovh-task-alert';
import '../components/ovh-task-alert/ovh-task-alert.service';
import '../components/pluralize/pluralize.filter';
import '../components/q/q.config';
import '../components/region/region-map.component';
import '../components/security/sce.config';
import '../components/session/session.service';
import '../components/sidebar/sidebar';
import '../components/sshKeyMin/sshKeyMin';
import '../components/toaster/toaster.config';
import '../components/toaster/toaster.service';
import '../components/ui-bootstrap/datepicker/datepicker.config';
import '../components/validator/validator.config';
import '../components/validator/validator.constants';
import './config';
import './cda/cda';
import './cda/cda.service';
import './cda/details/cda-details.controller';
import './cda/details/cda-details';
import './cda/details/home/cda-details-home.controller';
import './cda/details/home/cda-details-home';
import './cda/details/home/detail/cda-detail.component';
import './cda/details/home/detail/edit/cda-detail-edit.controller';
import './cda/details/home/health/cda-health.component';
import './cda/details/home/space-usage/cda-space-usage.component';
import './cda/details/home/tasks/cda-tasks.component';
import './cda/ip/add/cda-ip-add.controller';
import './cda/ip/cda-ip';
import './cda/ip/delete/cda-ip-delete.controller';
import './cda/ip/list/cda-ip-list.controller';
import './cda/ip/list/cda-ip-list';
import './cda/pool/add/cda-pool-add.controller';
import './cda/pool/cda-pool';
import './cda/pool/delete/cda-pool-delete.controller';
import './cda/pool/list/cda-pool-list.controller';
import './cda/pool/list/cda-pool-list';
import './cda/user/add/cda-user-add.controller';
import './cda/user/cda-user';
import './cda/user/delete/cda-user-delete.controller';
import './cda/user/details/cda-user-details.controller';
import './cda/user/details/cda-user-details';
import './cda/user/details/permissions/cda-user-details-permission-list.controller';
import './cda/user/details/permissions/cda-user-details-permission-list';
import './cda/user/details/permissions/cda-user-permission.service';
import './cda/user/details/permissions/edit/cda-user-details-permission-list-edit.controller';
import './cda/user/details/permissions/edit/cda-user-details-permission-list-edit';
import './cda/user/list/cda-user-list.controller';
import './cda/user/list/cda-user-list';
import './cloud/cloud.constants';
import './cloud/cloud.controller';
import './cloud/cloud';
import './cloud/components/project/add/project-add.service';
import './cloud/components/project/billing/additional-services/additional-services.component.controller';
import './cloud/components/project/billing/additional-services/additional-services.component';
import './cloud/components/project/billing/archive-storage-list/billing-archive-storage-list.component.controller';
import './cloud/components/project/billing/archive-storage-list/billing-archive-storage-list.component';
import './cloud/components/project/billing/cloud-project-billing';
import './cloud/components/project/billing/details/billing-details-display-helper.service';
import './cloud/components/project/billing/hourly-resource-list/billing-hourly-resource-list.component.controller';
import './cloud/components/project/billing/hourly-resource-list/billing-hourly-resource-list.component';
import './cloud/components/project/billing/instance-list/billing-instance-list.component.controller';
import './cloud/components/project/billing/instance-list/billing-instance-list.component';
import './cloud/components/project/billing/monthly-resource-list/billing-monthly-resource-list.component.controller';
import './cloud/components/project/billing/monthly-resource-list/billing-monthly-resource-list.component';
import './cloud/components/project/billing/object-storage-list/billing-object-storage-list.component.controller';
import './cloud/components/project/billing/object-storage-list/billing-object-storage-list.component';
import './cloud/components/project/billing/outgoing-trafic/outgoing-trafic.component.controller';
import './cloud/components/project/billing/outgoing-trafic/outgoing-trafic.component';
import './cloud/components/project/billing/snapshot-list/billing-snapshot-list.component.controller';
import './cloud/components/project/billing/snapshot-list/billing-snapshot-list.component';
import './cloud/components/project/billing/volume-list/billing-volume-list.component.controller';
import './cloud/components/project/billing/volume-list/billing-volume-list.component';
import './cloud/components/project/compute/compute.factory';
import './cloud/components/project/compute/infrastructure/infrastructure-flavor.filter';
import './cloud/components/project/compute/infrastructure/infrastructure-orchestrator.service';
import './cloud/components/project/compute/infrastructure/infrastructure.factory';
import './cloud/components/project/compute/infrastructure/internet/internet.factory';
import './cloud/components/project/compute/infrastructure/internet/ip/failover/ip.failover.factory';
import './cloud/components/project/compute/infrastructure/internet/ip/ip.factory';
import './cloud/components/project/compute/infrastructure/internet/ip/public/ip.public.factory';
import './cloud/components/project/compute/infrastructure/vrack/virtualMachine/virtualMachine.factory';
import './cloud/components/project/compute/infrastructure/vrack/vlan/vlan.factory';
import './cloud/components/project/compute/infrastructure/vrack/vrack.factory';
import './cloud/components/project/compute/volumes/volume/volume.factory';
import './cloud/components/project/compute/volumes/volumes-orchestrator.service';
import './cloud/components/project/compute/volumes/volumes.factory';
import './cloud/components/project/project-orchestrator.service';
import './cloud/components/project/project.factory';
import './cloud/components/project/rights/project-rights.service';
import './cloud/components/runabove/filelistener/filelistener-directive';
import './cloud/components/runabove/modal/modal-controller';
import './cloud/components/runabove/modal/modal-directive';
import './cloud/components/runabove/modal/module-service';
import './cloud/components/runabove/promise-task-state/promise-task-state.component';
import './cloud/components/runabove/scrollHere/scroll-here-directive';
import './cloud/components/runabove/show-byte/show-byte';
import './cloud/components/runabove/units/bits/units-bits-filter';
import './cloud/components/writeRightRequired/writeRightRequired.directive';
import './cloud/iaas';
import './cloud/offer/cloud-offer.controller';
import './cloud/offer/cloud-offer';
import './cloud/paas';
import './cloud/project/add/cloud-project-add.config';
import './cloud/project/add/cloud-project-add.controller';
import './cloud/project/add/cloud-project-add';
import './cloud/project/billing/cloud-project-billing.controller';
import './cloud/project/billing/cloud-project-billing';
import './cloud/project/billing/cloud-project-billing.service';
import './cloud/project/billing/consumption/cloud-project-billing-consumption.controller';
import './cloud/project/billing/consumption/cloud-project-billing-consumption';
import './cloud/project/billing/consumption/current/cloud-project-billing-consumption-current.controller';
import './cloud/project/billing/consumption/current/cloud-project-billing-consumption-current';
import './cloud/project/billing/consumption/estimate/alert/add/cloud-project-billing-consumption-estimate-alert-add.controller';
import './cloud/project/billing/consumption/estimate/cloud-project-billing-consumption-estimate.controller';
import './cloud/project/billing/consumption/estimate/cloud-project-billing-consumption-estimate';
import './cloud/project/billing/history/cloud-project-billing-history.controller';
import './cloud/project/billing/history/cloud-project-billing-history';
import './cloud/project/billing/history/details/cloud-project-billing-history-details.controller';
import './cloud/project/billing/history/details/cloud-project-billing-history-details';
import './cloud/project/billing/rights/addRights/cloud-project-billing-rights-add.controller';
import './cloud/project/billing/rights/cloud-project-billing-rights.controller';
import './cloud/project/billing/rights/cloud-project-billing-rights';
import './cloud/project/billing/vouchers/addCredit/cloud-project-billing-vouchers-add-credit-agora.controller';
import './cloud/project/billing/vouchers/addCredit/cloud-project-billing-vouchers-add-credit.controller';
import './cloud/project/billing/vouchers/addVoucher/cloud-project-billing-vouchers-add.controller';
import './cloud/project/billing/vouchers/cloud-project-billing-vouchers.controller';
import './cloud/project/billing/vouchers/cloud-project-billing-vouchers';
import './cloud/project/billing/vouchers/cloud-project-billing-vouchers.service';
import './cloud/project/cloud-project.controller';
import './cloud/project/cloud-project';
import './cloud/project/compute/cloud-project-compute.constants';
import './cloud/project/compute/cloud-project-compute.controller';
import './cloud/project/compute/cloud-project-compute';
import './cloud/project/compute/infrastructure/cloud-project-compute-infrastructure.config';
import './cloud/project/compute/infrastructure/cloud-project-compute-infrastructure.controller';
import './cloud/project/compute/infrastructure/cloud-project-compute-infrastructure';
import './cloud/project/compute/infrastructure/cloud-project-compute-infrastructure.service';
import './cloud/project/compute/infrastructure/diagram/cloud-project-compute-infrastructure-diagram.controller';
import './cloud/project/compute/infrastructure/diagram/cloud-project-compute-infrastructure-diagram';
import './cloud/project/compute/infrastructure/flavor.service';
import './cloud/project/compute/infrastructure/iac/deploy/cloud-project-compute-infrastructure-iac-deploy.controller';
import './cloud/project/compute/infrastructure/iac/deploy/cloud-project-compute-infrastructure-iac-deploy';
import './cloud/project/compute/infrastructure/iac/view/cloud-project-compute-infrastructure-iac-view.controller';
import './cloud/project/compute/infrastructure/iac/view/cloud-project-compute-infrastructure-iac-view';
import './cloud/project/compute/infrastructure/image.service';
import './cloud/project/compute/infrastructure/ip/add_OLD_/cloud-project-compute-infrastructure-ip-add.controller';
import './cloud/project/compute/infrastructure/ip/dropdown/ip-dropdown.component.controller';
import './cloud/project/compute/infrastructure/ip/dropdown/ip-dropdown.component';
import './cloud/project/compute/infrastructure/ip/failover/buy/cloud-project-compute-infrastructure-ip-failover-buy-agora.controller';
import './cloud/project/compute/infrastructure/ip/failover/buy/cloud-project-compute-infrastructure-ip-failover-buy.controller';
import './cloud/project/compute/infrastructure/ip/failover/import/cloud-project-compute-infrastructure-ip-failover-import.controller';
import './cloud/project/compute/infrastructure/list/cloud-project-compute-infrastructure-list.controller';
import './cloud/project/compute/infrastructure/list/cloud-project-compute-infrastructure-list';
import './cloud/project/compute/infrastructure/openstackClient/cloud-project-compute-infrastructure-openstack-client.controller';
import './cloud/project/compute/infrastructure/openstackClient/cloud-project-compute-infrastructure-openstack-client.service';
import './cloud/project/compute/infrastructure/privateNetwork/cloud-project-compute-infrastructure-privateNetwork-list.directive';
import './cloud/project/compute/infrastructure/privateNetwork/cloud-project-compute-infrastructure-privateNetwork.service';
import './cloud/project/compute/infrastructure/privateNetwork/delete/cloud-project-compute-infrastructure-privateNetwork-delete.controller';
import './cloud/project/compute/infrastructure/privateNetwork/dialog/cloud-project-compute-infrastructure-privateNetwork-dialog-privateNetwork-description.filter';
import './cloud/project/compute/infrastructure/privateNetwork/dialog/cloud-project-compute-infrastructure-privateNetwork-dialog-uniqueVlanId.directive';
import './cloud/project/compute/infrastructure/privateNetwork/dialog/cloud-project-compute-infrastructure-privateNetwork-dialog-validIpAddress.directive';
import './cloud/project/compute/infrastructure/privateNetwork/dialog/cloud-project-compute-infrastructure-privateNetwork-dialog.controller';
import './cloud/project/compute/infrastructure/privateNetwork/dialog/cloud-project-compute-infrastructure-privateNetwork-dialog.service';
import './cloud/project/compute/infrastructure/region.service';
import './cloud/project/compute/infrastructure/virtualMachine/add/cloud-project-compute-infrastructure-virtualMachine-add.controller';
import './cloud/project/compute/infrastructure/virtualMachine/add/cloud-project-compute-infrastructure-virtualMachine-add';
import './cloud/project/compute/infrastructure/virtualMachine/add/cloud-project-compute-infrastructure-virtualMachine-add.service';
import './cloud/project/compute/infrastructure/virtualMachine/addEdit/cloud-project-compute-infrastructure-virtualMachine-addEdit.config';
import './cloud/project/compute/infrastructure/virtualMachine/addEdit/cloud-project-compute-infrastructure-virtualMachine-addEdit.controller';
import './cloud/project/compute/infrastructure/virtualMachine/delete/cloud-project-compute-infrastructure-virtual-machine-delete.controller';
import './cloud/project/compute/infrastructure/virtualMachine/loginInformation/cloud-project-compute-infrastructure-virtual-machine-login-information.controller';
import './cloud/project/compute/infrastructure/virtualMachine/monitoring/cloud-project-compute-infrastructure-virtualMachine-monitoring.controller';
import './cloud/project/compute/infrastructure/virtualMachine/monthlyConfirm/cloud-project-compute-infrastructure-virtual-machine-monthlyConfirm.controller';
import './cloud/project/compute/infrastructure/virtualMachine/rescue/cloud-project-compute-infrastructure-virtual-machine-rescue.controller';
import './cloud/project/compute/infrastructure/virtualMachine/vnc/cloud-project-compute-infrastructure-virtual-machine-vnc.controller';
import './cloud/project/compute/infrastructure/volume/addEdit/cloud-project-compute-infrastructure-volume-addEdit.constant';
import './cloud/project/compute/infrastructure/volume/addEdit/cloud-project-compute-infrastructure-volume-addEdit.controller';
import './cloud/project/compute/infrastructure/volume/addEdit/cloud-project-compute-infrastructure-volume-addEdit';
import './cloud/project/compute/loadbalancer/cloud-project-compute-loadbalancer.controller';
import './cloud/project/compute/loadbalancer/cloud-project-compute-loadbalancer';
import './cloud/project/compute/loadbalancer/cloud-project-compute-loadbalancer.service';
import './cloud/project/compute/loadbalancer/configure/compute-loadbalancer-configure.controller';
import './cloud/project/compute/loadbalancer/configure/compute-loadbalancer-configure';
import './cloud/project/compute/quota/cloud-project-compute-quota.controller';
import './cloud/project/compute/quota/cloud-project-compute-quota';
import './cloud/project/compute/regions/regions.controller';
import './cloud/project/compute/regions/regions';
import './cloud/project/compute/snapshot/add/cloud-project-compute-snapshot-add.controller';
import './cloud/project/compute/snapshot/cloud-project-compute-snapshot-price.service';
import './cloud/project/compute/snapshot/cloud-project-compute-snapshot.controller';
import './cloud/project/compute/snapshot/cloud-project-compute-snapshot';
import './cloud/project/compute/snapshot/delete/compute-snapshot-delete.controller';
import './cloud/project/compute/ssh/cloud-project-compute-ssh.controller';
import './cloud/project/compute/ssh/cloud-project-compute-ssh';
import './cloud/project/compute/ssh/cloud-project-ssh.service';
import './cloud/project/compute/ssh/delete/cloud-project-compute-ssh-delete.controller';
import './cloud/project/compute/volume/cloud-project-compute-volume.controller';
import './cloud/project/compute/volume/cloud-project-compute-volume';
import './cloud/project/compute/volume/delete/cloud-project-compute-volume-delete.controller';
import './cloud/project/compute/volume/snapshot/cloud-project-compute-volume-snapshot-add.controller';
import './cloud/project/delete/cloud-project-delete.controller';
import './cloud/project/details/cloud-project-details.controller';
import './cloud/project/details/cloud-project-details';
import './cloud/project/onboarding/onboarding-pci.controller';
import './cloud/project/openstack/openstack.controller';
import './cloud/project/openstack/openstack';
import './cloud/project/openstack/users/add/openstack-users-add.controller';
import './cloud/project/openstack/users/delete/openstack-users-delete.controller';
import './cloud/project/openstack/users/openrc/openstack-users-openrc.constant';
import './cloud/project/openstack/users/openrc/openstack-users-openrc.controller';
import './cloud/project/openstack/users/openrc/openstack-users-openrc';
import './cloud/project/openstack/users/openstack-users.controller';
import './cloud/project/openstack/users/openstack-users';
import './cloud/project/openstack/users/password/openstack-users-password.service';
import './cloud/project/openstack/users/rclone/openstack-users-rclone.modal.controller';
import './cloud/project/openstack/users/rclone/openstack-users-rclone.service';
import './cloud/project/openstack/users/token/openstack-users-token.controller';
import './cloud/project/openstack/users/token/openstack-users-token.service';
import './cloud/project/rename/cloud-project-rename.controller';
import './cloud/project/rename/cloud-project-rename.directive';
import './cloud/project/storage/services/container-tasks-runner.service';
import './cloud/project/storage/services/container.service';
import './cloud/project/storage/services/containers.service';
import './cloud/project/storage/services/containersConfiguration.service';
import './cloud/project/storage/storage-add-object/storage-add-object-controller';
import './cloud/project/storage/storage-add/storage-add.controller';
import './cloud/project/storage/storage-add/storage/add-storage-controller';
import './cloud/project/storage/storage-add/storage/step_container_type/add-storage-step-container-type-controller';
import './cloud/project/storage/storage-add/storage/step_region/add-storage-step-region-controller';
import './cloud/project/storage/storage-delete-container/storage-delete-container-controller';
import './cloud/project/storage/storage-delete-object/storage-delete-object-controller';
import './cloud/project/storage/storage-details/storage-details.controller';
import './cloud/project/storage/storage-hosting-help/storage-add-object-controller';
import './cloud/project/storage/storage.controller';
import './cloud/project/storage/storage';
import './common/cloud-main-controller.controller';
import './common/phone.constant';
import './dbaas/dbaas-metrics/dashboard/chart-pie/metrics-chart-pie.component';
import './dbaas/dbaas-metrics/dashboard/metrics-dashboard.controller';
import './dbaas/dbaas-metrics/header/metrics-header.controller';
import './dbaas/dbaas-metrics/metrics-detail.controller';
import './dbaas/dbaas-metrics/metrics.constant';
import './dbaas/dbaas-metrics/metrics';
import './dbaas/dbaas-metrics/metrics.service';
import './dbaas/dbaas-metrics/platform/metrics-platform.controller';
import './dbaas/dbaas-metrics/token/add/metrics-token-add.controller';
import './dbaas/dbaas-metrics/token/delete/metrics-token-delete.controller';
import './dbaas/dbaas-metrics/token/edit/metrics-token-edit.controller';
import './dbaas/dbaas-metrics/token/metrics-token.controller';
import './dbaas/dbaas-metrics/token/preview/metrics-token-preview.controller';
import './dbaas/dbaas';
import './dbaas/logs/detail/account/logs-account.service';
import './dbaas/logs/detail/account/password/logs-account-password.controller';
import './dbaas/logs/detail/account/setup/logs-account-setup.controller';
import './dbaas/logs/detail/aliases/add/logs-aliases-add.controller';
import './dbaas/logs/detail/aliases/add/logs-aliases-add.modal.controller';
import './dbaas/logs/detail/aliases/home/logs-aliases-home.controller';
import './dbaas/logs/detail/aliases/link/aliases-link.controller';
import './dbaas/logs/detail/aliases/logs-aliases.controller';
import './dbaas/logs/detail/aliases/logs-aliases';
import './dbaas/logs/detail/aliases/logs-aliases.service';
import './dbaas/logs/detail/dashboards/crud/logs-dashboards-crud.controller';
import './dbaas/logs/detail/dashboards/crud/logs-dashboards-crud.modal.controller';
import './dbaas/logs/detail/dashboards/logs-dashboards.controller';
import './dbaas/logs/detail/dashboards/logs-dashboards';
import './dbaas/logs/detail/dashboards/logs-dashboards.service';
import './dbaas/logs/detail/home/account/logs-home-account.controller';
import './dbaas/logs/detail/home/account/logs-home-account.modal.controller';
import './dbaas/logs/detail/home/formatsports/logs-home-formatsports.controller';
import './dbaas/logs/detail/home/logs-home.controller';
import './dbaas/logs/detail/home/logs-home';
import './dbaas/logs/detail/home/logs-home.service';
import './dbaas/logs/detail/index/add/logs-index-add.controller';
import './dbaas/logs/detail/index/logs-index.controller';
import './dbaas/logs/detail/index/logs-index';
import './dbaas/logs/detail/index/logs-index.service';
import './dbaas/logs/detail/inputs/add/configure/logs-inputs-add-configure.controller';
import './dbaas/logs/detail/inputs/add/edit/logs-inputs-add-edit.controller';
import './dbaas/logs/detail/inputs/add/logs-inputs-add.controller';
import './dbaas/logs/detail/inputs/console/logs-inputs-console.controller';
import './dbaas/logs/detail/inputs/home/info/logs-inputs-home-info.controller';
import './dbaas/logs/detail/inputs/home/logs-inputs-home.controller';
import './dbaas/logs/detail/inputs/logs-inputs.controller';
import './dbaas/logs/detail/inputs/logs-inputs';
import './dbaas/logs/detail/inputs/logs-inputs.service';
import './dbaas/logs/detail/kibana/add/logs-kibana-add.controller';
import './dbaas/logs/detail/kibana/logs-kibana.controller';
import './dbaas/logs/detail/kibana/logs-kibana';
import './dbaas/logs/detail/kibana/logs-kibana.service';
import './dbaas/logs/detail/logs-detail.controller';
import './dbaas/logs/detail/logs-detail';
import './dbaas/logs/detail/logs-detail.service';
import './dbaas/logs/detail/logs-helper.service';
import './dbaas/logs/detail/logs-order.service';
import './dbaas/logs/detail/roles/add/logs-role-add.controller';
import './dbaas/logs/detail/roles/edit-permissions/edit-permissions.controller';
import './dbaas/logs/detail/roles/logs-roles.controller';
import './dbaas/logs/detail/roles/logs-roles';
import './dbaas/logs/detail/roles/logs-roles.service';
import './dbaas/logs/detail/roles/members/add/add-members.controller';
import './dbaas/logs/detail/roles/members/logs-roles-members.controller';
import './dbaas/logs/detail/roles/overview/logs-role-overview.controller';
import './dbaas/logs/detail/streams/add/logs-streams-add.controller';
import './dbaas/logs/detail/streams/alerts/add/alerts-add.controller';
import './dbaas/logs/detail/streams/alerts/home/alerts-home.controller';
import './dbaas/logs/detail/streams/alerts/streams-alerts.controller';
import './dbaas/logs/detail/streams/alerts/streams-alerts';
import './dbaas/logs/detail/streams/alerts/streams-alerts.service';
import './dbaas/logs/detail/streams/archives/streams-archives.controller';
import './dbaas/logs/detail/streams/archives/streams-archives';
import './dbaas/logs/detail/streams/archives/streams-archives.service';
import './dbaas/logs/detail/streams/follow/streams-follow.controller';
import './dbaas/logs/detail/streams/follow/streams-follow.service';
import './dbaas/logs/detail/streams/home/logs-streams-home.controller';
import './dbaas/logs/detail/streams/logs-streams.controller';
import './dbaas/logs/detail/streams/logs-streams';
import './dbaas/logs/detail/streams/logs-streams.service';
import './dbaas/logs/detail/tokens/add/logs-token-add.controller';
import './dbaas/logs/detail/tokens/add/logs-token-add.modal.controller';
import './dbaas/logs/detail/tokens/logs-tokens.controller';
import './dbaas/logs/detail/tokens/logs-tokens';
import './dbaas/logs/detail/tokens/logs-tokens.service';
import './dbaas/logs/header/logs-dashboard-header.controller';
import './dbaas/logs/header/logs-list-header.controller';
import './dbaas/logs/list/logs-list.controller';
import './dbaas/logs/list/logs-list';
import './dbaas/logs/list/logs-list.service';
import './dbaas/logs/logs-constants';
import './dbaas/logs/logs';
import './dbaas/logs/welcome/logs-welcome.controller';
import './dbaas/logs/welcome/logs-welcome';
import './deskaas/deskaas-change-password/deskaas-change-password.controller';
import './deskaas/deskaas-change-username/deskaas-change-username.controller';
import './deskaas/deskaas-confirm-terminate/deskaas-confirm-terminate.controller';
import './deskaas/deskaas-details/deskaas-details.controller';
import './deskaas/deskaas-details/deskaas-details';
import './deskaas/deskaas-get-console-access/deskaas-get-console-access.controller';
import './deskaas/deskaas-upgrade/deskaas-upgrade.controller';
import './deskaas/deskaas-upgrade/deskaas-upgrade';
import './deskaas/deskaas.constants';
import './deskaas/deskaas.controller';
import './deskaas/deskaas';
import './deskaas/deskaas.service';
import './deskaas/sidebar/deskaas-sidebar.service';
import './error/error.module';
import './error/error.routing';
import './filter/order-by-hash-key.filter';
import './home/home.controller';
import './home/home';
import './ui-components/accordion/accordion.component';
import './ui-components/advanced-options/advanced-options.component';
import './ui-components/agreement/agreement.component';
import './ui-components/dual-list/dual-list.component';
import './ui-components/dual-list/dual-list.controller';
import './ui-components/dual-list/dual-list.filter';
import './ui-components/dual-list/dual-list.provider';
import './ui-components/format-si/format-si.filter';
import './ui-components/inline-adder/inline-adder-group.controller';
import './ui-components/inline-adder/inline-adder.component';
import './ui-components/inline-adder/inline-adder.controller';
import './ui-components/input/compare-to.component';
import './ui-components/input/password.component';

export default moduleName;
