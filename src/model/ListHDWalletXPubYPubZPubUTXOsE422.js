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
import BannedIpAddressDetailsInner from './BannedIpAddressDetailsInner';
import InvalidRequestBodyStructure from './InvalidRequestBodyStructure';
import XpubSyncInProgress from './XpubSyncInProgress';

/**
 * The ListHDWalletXPubYPubZPubUTXOsE422 model module.
 * @module model/ListHDWalletXPubYPubZPubUTXOsE422
 * @version 1.9.0
 */
class ListHDWalletXPubYPubZPubUTXOsE422 {
    /**
     * Constructs a new <code>ListHDWalletXPubYPubZPubUTXOsE422</code>.
     * @alias module:model/ListHDWalletXPubYPubZPubUTXOsE422
     * @implements module:model/InvalidRequestBodyStructure
     * @implements module:model/XpubSyncInProgress
     * @param code {String} Specifies an error code, e.g. error 404.
     * @param message {String} Specifies the message of the error, i.e. why the error was returned, e.g. error 404 stands for “not found”.
     */
    constructor(code, message) { 
        InvalidRequestBodyStructure.initialize(this, code, message);XpubSyncInProgress.initialize(this, code, message);
        ListHDWalletXPubYPubZPubUTXOsE422.initialize(this, code, message);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, code, message) { 
        obj['code'] = code;
        obj['message'] = message;
    }

    /**
     * Constructs a <code>ListHDWalletXPubYPubZPubUTXOsE422</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListHDWalletXPubYPubZPubUTXOsE422} obj Optional instance to populate.
     * @return {module:model/ListHDWalletXPubYPubZPubUTXOsE422} The populated <code>ListHDWalletXPubYPubZPubUTXOsE422</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListHDWalletXPubYPubZPubUTXOsE422();
            InvalidRequestBodyStructure.constructFromObject(data, obj);
            XpubSyncInProgress.constructFromObject(data, obj);

            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('details')) {
                obj['details'] = ApiClient.convertToType(data['details'], [BannedIpAddressDetailsInner]);
            }
        }
        return obj;
    }


}

/**
 * Specifies an error code, e.g. error 404.
 * @member {String} code
 */
ListHDWalletXPubYPubZPubUTXOsE422.prototype['code'] = undefined;

/**
 * Specifies the message of the error, i.e. why the error was returned, e.g. error 404 stands for “not found”.
 * @member {String} message
 */
ListHDWalletXPubYPubZPubUTXOsE422.prototype['message'] = undefined;

/**
 * @member {Array.<module:model/BannedIpAddressDetailsInner>} details
 */
ListHDWalletXPubYPubZPubUTXOsE422.prototype['details'] = undefined;


// Implement InvalidRequestBodyStructure interface:
/**
 * Specifies an error code, e.g. error 404.
 * @member {String} code
 */
InvalidRequestBodyStructure.prototype['code'] = undefined;
/**
 * Specifies the message of the error, i.e. why the error was returned, e.g. error 404 stands for “not found”.
 * @member {String} message
 */
InvalidRequestBodyStructure.prototype['message'] = undefined;
/**
 * @member {Array.<module:model/BannedIpAddressDetailsInner>} details
 */
InvalidRequestBodyStructure.prototype['details'] = undefined;
// Implement XpubSyncInProgress interface:
/**
 * Specifies an error code, e.g. error 404.
 * @member {String} code
 */
XpubSyncInProgress.prototype['code'] = undefined;
/**
 * Specifies the message of the error, i.e. why the error was returned, e.g. error 404 stands for “not found”.
 * @member {String} message
 */
XpubSyncInProgress.prototype['message'] = undefined;
/**
 * @member {Array.<module:model/BannedIpAddressDetailsInner>} details
 */
XpubSyncInProgress.prototype['details'] = undefined;




export default ListHDWalletXPubYPubZPubUTXOsE422;

