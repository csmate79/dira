/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-base-to-string */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { IEnvironment } from 'src/environments/environment.interface';

const keyEnv: any = 'env';
const keyProd: any = 'prod';
const keyHost: any = 'host';
const baseUrl = 'http://localhost';

export const environment: IEnvironment = {
    serviceUrls: {
        instructor: `${baseUrl}:8080/instructor`,
        rating: `${baseUrl}:8080/rating`,
    },
    appVersion: '0',
    contactData: {
        email: '',
        phone: '',
    },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
