export interface IEnvironment {
    serviceUrls: {
        instructor: string;
        rating: string;
    };
    appVersion: string;
    contactData: {
        email: string;
        phone: string;
    };
}
