import { CompanyType } from 'src/app/shared/enums/company-type.enum';
import { IAutocompleteSearchParams } from 'src/app/shared/interfaces/autocomplete/autocomplete-search-params.interface';

export interface ICompanyAutocompleteSearchParams extends IAutocompleteSearchParams {
  companyType?: CompanyType;
}
