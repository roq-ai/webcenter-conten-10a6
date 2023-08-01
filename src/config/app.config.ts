interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Administrator'],
  customerRoles: ['End User'],
  tenantRoles: ['Administrator', 'Content Manager'],
  tenantName: 'Organization',
  applicationName: 'webcenter content',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
