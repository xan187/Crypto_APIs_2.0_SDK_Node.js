/**
 * CryptoAPIs
 * Crypto APIs is a complex and innovative infrastructure layer that radically simplifies the development of any Blockchain and Crypto related applications. Organized around REST, Crypto APIs can assist both novice Bitcoin/Ethereum enthusiasts and crypto experts with the development of their blockchain applications. Crypto APIs provides unified endpoints and data, raw data, automatic tokens and coins forwardings, callback functionalities, and much more.
 *
 * The version of the OpenAPI document: 2021-03-20
 * Contact: developers@cryptoapis.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The SyncHDWalletXPubYPubZPubRI model module.
 * @module model/SyncHDWalletXPubYPubZPubRI
 * @version 1.13.0
 */
class SyncHDWalletXPubYPubZPubRI {
    /**
     * Constructs a new <code>SyncHDWalletXPubYPubZPubRI</code>.
     * @alias module:model/SyncHDWalletXPubYPubZPubRI
     * @param extendedPublicKey {String} Defines the account extended publicly known key which is used to derive all child public keys.
     */
    constructor(extendedPublicKey) { 
        
        SyncHDWalletXPubYPubZPubRI.initialize(this, extendedPublicKey);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, extendedPublicKey) { 
        obj['extendedPublicKey'] = extendedPublicKey;
    }

    /**
     * Constructs a <code>SyncHDWalletXPubYPubZPubRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SyncHDWalletXPubYPubZPubRI} obj Optional instance to populate.
     * @return {module:model/SyncHDWalletXPubYPubZPubRI} The populated <code>SyncHDWalletXPubYPubZPubRI</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SyncHDWalletXPubYPubZPubRI();

            if (data.hasOwnProperty('extendedPublicKey')) {
                obj['extendedPublicKey'] = ApiClient.convertToType(data['extendedPublicKey'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Defines the account extended publicly known key which is used to derive all child public keys.
 * @member {String} extendedPublicKey
 */
SyncHDWalletXPubYPubZPubRI.prototype['extendedPublicKey'] = undefined;






export default SyncHDWalletXPubYPubZPubRI;

