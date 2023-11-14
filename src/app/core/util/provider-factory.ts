import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AuthenticationController } from '../../authentication/controllers/authentication.controller';
import { firstValueFrom } from 'rxjs';

export function HttpLoaderFactory(httpClient: HttpClient): TranslateHttpLoader {
    return new TranslateHttpLoader(httpClient, '/assets/i18n/', '.json');
}

export function AppInit(
    authenticationController: AuthenticationController,
): () => Promise<any> {
    return () => firstValueFrom(authenticationController.restoreSession());
}
