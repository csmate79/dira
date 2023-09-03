import { HttpClient } from '@angular/common/http';
import { TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AuthenticationController } from '../../authentication/controllers/authentication.controller';

export function HttpLoaderFactory(httpClient: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(httpClient, '/assets/i18n/', '.json');
}

export function AppInit(
  authenticationController: AuthenticationController,
  translate: TranslateLoader,
): () => void {
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  return () =>
    translate
      .getTranslation('hu')
      .toPromise()
      .then(() => authenticationController.restoreSession());
}
