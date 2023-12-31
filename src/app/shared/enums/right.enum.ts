/** Jogosultságokat definiáló enum */
export enum Right {
  ADMIN_COMPANY_LIST = '',

  ADMIN_PARTNER_GET = 'ADMIN_PARTNER_GET',

  ADMIN_PARTNER_MOD = 'ADMIN_PARTNER_MOD',

  ADMIN_PARTNER_CREATE = 'ADMIN_PARTNER_CREATE',

  ADMIN_DEMAND_LIST = 'ADMIN_DEMAND_LIST',

  ADMIN_DEMAND_MOD = 'ADMIN_DEMAND_MOD',

  ADMIN_PARTNER_LIST = 'ADMIN_PARTNER_LIST',

  ADMIN_PARTNER_DEL = 'ADMIN_PARTNER_DEL',

  ATTRIBUTE_AUTOCOMPLETE = 'ATTRIBUTE_AUTOCOMPLETE',

  ATTRIBUTE_CREATE = 'ATTRIBUTE_CREATE',

  ATTRIBUTE_DELETE = 'ATTRIBUTE_DELETE',

  ATTRIBUTE_MOD = 'ATTRIBUTE_MOD',

  ATTRIBUTE_VALIDATION = 'ATTRIBUTE_VALIDATION',

  CATEGORY_AUTOCOMPLETE = 'CATEGORY_AUTOCOMPLETE',

  CATEGORY_CREATE = 'CATEGORY_CREATE',

  CATEGORY_DEL = 'CATEGORY_DEL',

  MAIN_CATEGORY_CREATE = 'MAIN_CATEGORY_CREATE',

  MAIN_CATEGORY_MOD = 'MAIN_CATEGORY_MOD',

  SUB_CATEGORY_LIST = 'SUB_CATEGORY_LIST',

  SUB_CATEGORY_GET = 'SUB_CATEGORY_GET',

  SUB_CATEGORY_MOD = 'SUB_CATEGORY_MOD',

  CATEGORY_LIST = 'CATEGORY_LIST',

  CATEGORY_MOD = 'CATEGORY_MOD',

  DATA_CREATE = 'DATA_CREATE',

  DATA_DEL = 'DATA_DEL',

  DATA_GET = 'DATA_GET',

  DATA_LIST = 'DATA_LIST',

  DATA_MOD = 'DATA_MOD',

  DATA_PACKAGE_CREATE = 'DATA_PACKAGE_CREATE',

  DATA_UPDATE_VERSION = 'DATA_UPDATE_VERSION',

  DATE_VALIDATION_CREATE = 'DATE_VALIDATION_CREATE',

  DATE_VALIDATION_DEL = 'DATE_VALIDATION_DEL',

  DATE_VALIDATION_GET = 'DATE_VALIDATION_GET',

  DATE_VALIDATION_MOD = 'DATE_VALIDATION_MOD',

  deleteFile = 'deleteFile',

  DEMAND_CREATE = 'DEMAND_CREATE',

  DEMAND_LIST = 'DEMAND_LIST',

  DEMAND_MOD = 'DEMAND_MOD',

  DERIVED_INFO_CREATE = 'DERIVED_INFO_CREATE',

  DERIVED_TYPE_CREATE = 'DERIVED_TYPE_CREATE',

  DERIVED_TYPE_DEL = 'DERIVED_TYPE_DEL',

  DERIVED_TYPE_LIST = 'DERIVED_TYPE_LIST',

  FILE_CREATE = 'FILE_CREATE',

  FILE_DELETE = 'FILE_DELETE',

  FILE_DOWNLOAD = 'FILE_DOWNLOAD',

  FINISHED_PURCHASE_VIEW = 'FINISHED_PURCHASE_VIEW',

  FINISHED_SHARE_VIEW = 'FINISHED_SHARE_VIEW',

  INFOCURRENCY_CREATE = 'INFOCURRENCY_CREATE',

  INFOCURRENCY_LIST = 'INFOCURRENCY_LIST',

  INFOCURRENCY_GET = 'INFOCURRENCY_GET',

  INFO_UNIT_VIEW = 'INFO_UNIT_VIEW',

  INFORMATION_REQUEST_SEND = 'INFORMATION_REQUEST_SEND',

  INFOTYPE_AUTOCOMPLETE = 'INFOTYPE_AUTOCOMPLETE',

  INFOTYPE_CATEGORY_CREATE = 'INFOTYPE_CATEGORY_CREATE',

  INFOTYPE_CATEGORY_DEL = 'INFOTYPE_CATEGORY_DEL',

  INFOTYPE_CREATE = 'INFOTYPE_CREATE',

  INFOTYPE_DEL = 'INFOTYPE_DEL',

  INFOTYPE_GET = 'INFOTYPE_GET',

  INFOTYPE_GET_DEMAND = 'INFOTYPE_GET_DEMAND',

  INFOTYPE_LABEL_CREATE = 'INFOTYPE_LABEL_CREATE',

  INFOTYPE_LABEL_DEL = 'INFOTYPE_LABEL_DEL',

  INFOTYPE_LIST = 'INFOTYPE_LIST',

  INFOTYPE_MOD = 'INFOTYPE_MOD',

  INFOVALUE_CONFIG_GET = 'INFOVALUE_CONFIG_GET',

  INFOVALUE_CONFIG_MOD = 'INFOVALUE_CONFIG_MOD',

  INFOVALUE_CONFIG_CREATE = 'INFOVALUE_CONFIG_CREATE',

  LABEL_AUTOCOMPLETE = 'LABEL_AUTOCOMPLETE',

  LABEL_CREATE = 'LABEL_CREATE',

  LABEL_DEL = 'LABEL_DEL',

  LABEL_GET = 'LABEL_GET',

  LABEL_LIST = 'LABEL_LIST',

  LABEL_MOD = 'LABEL_MOD',

  MAIN_ACCOUNT_CONFIG = 'MAIN_ACCOUNT_CONFIG',

  MAIN_ACCOUNT_CONFIG_LIST = 'MAIN_ACCOUNT_CONFIG_LIST',

  MAIN_ACCOUNT_CONFIG_SAVE = 'MAIN_ACCOUNT_CONFIG_SAVE',

  MAINCAT_GET_BY_INFOTYPE = 'MAINCAT_GET_BY_INFOTYPE',

  NOTIFICATION_CREATE = 'NOTIFICATION_CREATE',

  NOTIFICATION_DEL = 'NOTIFICATION_DEL',

  NOTIFICATION_GET = 'NOTIFICATION_GET',

  NOTIFICATION_LIST = 'NOTIFICATION_LIST',

  NOTIFICATION_TEMPLATE_CREATE = 'NOTIFICATION_TEMPLATE_CREATE',

  NOTIFICATION_TEMPLATE_INACTIVATE = 'NOTIFICATION_TEMPLATE_INACTIVATE',

  NOTIFICATION_TEMPLATE_LIST = 'NOTIFICATION_TEMPLATE_LIST',

  NOTIFICATION_TEMPLATE_VIEW = 'NOTIFICATION_TEMPLATE_VIEW',

  NUMBER_VALIDATION_CREATE = 'NUMBER_VALIDATION_CREATE',

  NUMBER_VALIDATION_DEL = 'NUMBER_VALIDATION_DEL',

  NUMBER_VALIDATION_GET = 'NUMBER_VALIDATION_GET',

  NUMBER_VALIDATION_MOD = 'NUMBER_VALIDATION_MOD',

  PACKAGE_BY_DEMAND_LIST = 'PACKAGE_BY_DEMAND_LIST',

  PACKAGE_SIMPLE_LIST = 'PACKAGE_SIMPLE_LIST',

  PARTNER_DATA_COH_VAL = 'PARTNER_DATA_COH_VAL',

  PARTNER_DEL = 'PARTNER_DEL',

  PARTNER_GET = 'PARTNER_GET',

  PARTNER_MOD = 'PARTNER_MOD',

  PARTNER_REFRESH_TOKEN = 'PARTNER_REFRESH_TOKEN',

  postFileUpload = 'postFileUpload',

  PURCHASE_CREATE = 'PURCHASE_CREATE',

  PURCHASE_DEMAND_AD_PATCH = 'PURCHASE_DEMAND_AD_PATCH',

  PURCHASE_LIST = 'PURCHASE_LIST',

  OFFER_RATING = 'OFFER_RATING',

  RATING_LIST = 'RATING_LIST',

  RATING_GET = 'RATING_GET',

  SHARE_CREATE = 'SHARE_CREATE',

  SHARE_LIST = 'SHARE_LIST',

  SUPPLY_CREATE = 'SUPPLY_CREATE',

  SUPPLY_DEL = 'SUPPLY_DEL',

  SUPPLY_GET = 'SUPPLY_GET',

  SUPPLY_LIST = 'SUPPLY_LIST',

  SUPPLY_MOD = 'SUPPLY_MOD',

  SURFACE_COMPONENT_GET = 'SURFACE_COMPONENT_GET',

  SYSTEM_NOTIFICATION_CREATE = 'SYSTEM_NOTIFICATION_CREATE',

  SYSTEM_NOTIFICATION_DEL = 'SYSTEM_NOTIFICATION_DEL',

  SYSTEM_NOTIFICATION_GET = 'SYSTEM_NOTIFICATION_GET',

  SYSTEM_NOTIFICATION_LIST = 'SYSTEM_NOTIFICATION_LIST',

  TEXT_VALIDATION_CREATE = 'TEXT_VALIDATION_CREATE',

  TEXT_VALIDATION_DEL = 'TEXT_VALIDATION_DEL',

  TEXT_VALIDATION_GET = 'TEXT_VALIDATION_GET',

  TEXT_VALIDATION_MOD = 'TEXT_VALIDATION_MOD',

  TRANSACTION_LIST = 'TRANSACTION_LIST',

  TRANSACTION_VIEW = 'TRANSACTION_VIEW',
}
