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
 * The NewRevertedBlockRBDataItem model module.
 * @module model/NewRevertedBlockRBDataItem
 * @version 1.10.0
 */
class NewRevertedBlockRBDataItem {
    /**
     * Constructs a new <code>NewRevertedBlockRBDataItem</code>.
     * @alias module:model/NewRevertedBlockRBDataItem
     * @param callbackSecretKey {String} Represents the Secret Key value provided by the customer. This field is used for security purposes during the callback notification, in order to prove the sender of the callback as Crypto APIs. For more information please see our Documentation.
     * @param callbackUrl {String} Represents the URL that is set by the customer where the callback will be received at. The callback notification will be received only if and when the event occurs. We support ONLY httpS type of protocol.
     */
    constructor(callbackSecretKey, callbackUrl) { 
        
        NewRevertedBlockRBDataItem.initialize(this, callbackSecretKey, callbackUrl);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, callbackSecretKey, callbackUrl) { 
        obj['callbackSecretKey'] = callbackSecretKey;
        obj['callbackUrl'] = callbackUrl;
    }

    /**
     * Constructs a <code>NewRevertedBlockRBDataItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewRevertedBlockRBDataItem} obj Optional instance to populate.
     * @return {module:model/NewRevertedBlockRBDataItem} The populated <code>NewRevertedBlockRBDataItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NewRevertedBlockRBDataItem();

            if (data.hasOwnProperty('allowDuplicates')) {
                obj['allowDuplicates'] = ApiClient.convertToType(data['allowDuplicates'], 'String');
            }
            if (data.hasOwnProperty('callbackSecretKey')) {
                obj['callbackSecretKey'] = ApiClient.convertToType(data['callbackSecretKey'], 'String');
            }
            if (data.hasOwnProperty('callbackUrl')) {
                obj['callbackUrl'] = ApiClient.convertToType(data['callbackUrl'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Specifies a flag that permits or denies the creation of duplicate addresses.
 * @member {String} allowDuplicates
 */
NewRevertedBlockRBDataItem.prototype['allowDuplicates'] = undefined;

/**
 * Represents the Secret Key value provided by the customer. This field is used for security purposes during the callback notification, in order to prove the sender of the callback as Crypto APIs. For more information please see our Documentation.
 * @member {String} callbackSecretKey
 */
NewRevertedBlockRBDataItem.prototype['callbackSecretKey'] = undefined;

/**
 * Represents the URL that is set by the customer where the callback will be received at. The callback notification will be received only if and when the event occurs. We support ONLY httpS type of protocol.
 * @member {String} callbackUrl
 */
NewRevertedBlockRBDataItem.prototype['callbackUrl'] = undefined;






export default NewRevertedBlockRBDataItem;

