export declare class IdToken {
    rawIdToken: string;
    issuer: string;
    objectId: string;
    subject: string;
    tenantId: string;
    version: string;
    preferredName: string;
    name: string;
    homeObjectId: string;
    nonce: string;
    expiration: string;
    roles: string[];
    groups: string[];
    constructor(rawIdToken: string);
}
