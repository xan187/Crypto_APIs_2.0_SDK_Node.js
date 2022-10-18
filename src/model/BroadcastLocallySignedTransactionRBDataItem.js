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
 * The BroadcastLocallySignedTransactionRBDataItem model module.
 * @module model/BroadcastLocallySignedTransactionRBDataItem
 * @version 1.9.0
 */
class BroadcastLocallySignedTransactionRBDataItem {
    /**
     * Constructs a new <code>BroadcastLocallySignedTransactionRBDataItem</code>.
     * @alias module:model/BroadcastLocallySignedTransactionRBDataItem
     * @param signedTransactionHex {String} Represents the signed transaction's specific hex.
     */
    constructor(signedTransactionHex) { 
        
        BroadcastLocallySignedTransactionRBDataItem.initialize(this, signedTransactionHex);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, signedTransactionHex) { 
        obj['signedTransactionHex'] = signedTransactionHex;
    }

    /**
     * Constructs a <code>BroadcastLocallySignedTransactionRBDataItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BroadcastLocallySignedTransactionRBDataItem} obj Optional instance to populate.
     * @return {module:model/BroadcastLocallySignedTransactionRBDataItem} The populated <code>BroadcastLocallySignedTransactionRBDataItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BroadcastLocallySignedTransactionRBDataItem();

            if (data.hasOwnProperty('callbackSecretKey')) {
                obj['callbackSecretKey'] = ApiClient.convertToType(data['callbackSecretKey'], 'String');
            }
            if (data.hasOwnProperty('callbackUrl')) {
                obj['callbackUrl'] = ApiClient.convertToType(data['callbackUrl'], 'String');
            }
            if (data.hasOwnProperty('signedTransactionHex')) {
                obj['signedTransactionHex'] = ApiClient.convertToType(data['signedTransactionHex'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Represents the Secret Key value provided by the customer. This field is used for security purposes during the callback notification, in order to prove the sender of the callback as Crypto APIs. For more information please see our [Documentation](https://developers.cryptoapis.io/technical-documentation/general-information/callbacks#callback-security).
 * @member {String} callbackSecretKey
 */
BroadcastLocallySignedTransactionRBDataItem.prototype['callbackSecretKey'] = undefined;

/**
 * Represents the URL that is set by the customer where the callback will be received at. The callback notification will be received only if and when the event occurs. `We support ONLY httpS type of protocol`.
 * @member {String} callbackUrl
 */
BroadcastLocallySignedTransactionRBDataItem.prototype['callbackUrl'] = undefined;

/**
 * Represents the signed transaction's specific hex.
 * @member {String} signedTransactionHex
 */
BroadcastLocallySignedTransactionRBDataItem.prototype['signedTransactionHex'] = undefined;






export default BroadcastLocallySignedTransactionRBDataItem;

