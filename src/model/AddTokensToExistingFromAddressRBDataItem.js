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
import AddTokensToExistingFromAddressRBTokenData from './AddTokensToExistingFromAddressRBTokenData';

/**
 * The AddTokensToExistingFromAddressRBDataItem model module.
 * @module model/AddTokensToExistingFromAddressRBDataItem
 * @version 1.9.0
 */
class AddTokensToExistingFromAddressRBDataItem {
    /**
     * Constructs a new <code>AddTokensToExistingFromAddressRBDataItem</code>.
     * @alias module:model/AddTokensToExistingFromAddressRBDataItem
     * @param callbackUrl {String} Represents the URL that is set by the customer where the callback will be received at. The callback notification will be received only if and when the event occurs. `We support ONLY httpS type of protocol`.
     * @param confirmationsCount {Number} Represents the number of confirmations, i.e. the amount of blocks that have been built on top of this block.
     * @param feePriority {module:model/AddTokensToExistingFromAddressRBDataItem.FeePriorityEnum} Represents the fee priority of the automation, whether it is \"SLOW\", \"STANDARD\" or \"FAST\".
     * @param fromAddress {String} Represents the hash of the address that forwards the tokens.
     * @param minimumTransferAmount {String} Represents the minimum transfer amount of the currency in the `fromAddress` that can be allowed for an automatic forwarding.
     * @param toAddress {String} Represents the hash of the address the currency is forwarded to.
     * @param tokenData {module:model/AddTokensToExistingFromAddressRBTokenData} 
     */
    constructor(callbackUrl, confirmationsCount, feePriority, fromAddress, minimumTransferAmount, toAddress, tokenData) { 
        
        AddTokensToExistingFromAddressRBDataItem.initialize(this, callbackUrl, confirmationsCount, feePriority, fromAddress, minimumTransferAmount, toAddress, tokenData);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, callbackUrl, confirmationsCount, feePriority, fromAddress, minimumTransferAmount, toAddress, tokenData) { 
        obj['callbackUrl'] = callbackUrl;
        obj['confirmationsCount'] = confirmationsCount;
        obj['feePriority'] = feePriority;
        obj['fromAddress'] = fromAddress;
        obj['minimumTransferAmount'] = minimumTransferAmount;
        obj['toAddress'] = toAddress;
        obj['tokenData'] = tokenData;
    }

    /**
     * Constructs a <code>AddTokensToExistingFromAddressRBDataItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddTokensToExistingFromAddressRBDataItem} obj Optional instance to populate.
     * @return {module:model/AddTokensToExistingFromAddressRBDataItem} The populated <code>AddTokensToExistingFromAddressRBDataItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddTokensToExistingFromAddressRBDataItem();

            if (data.hasOwnProperty('callbackSecretKey')) {
                obj['callbackSecretKey'] = ApiClient.convertToType(data['callbackSecretKey'], 'String');
            }
            if (data.hasOwnProperty('callbackUrl')) {
                obj['callbackUrl'] = ApiClient.convertToType(data['callbackUrl'], 'String');
            }
            if (data.hasOwnProperty('confirmationsCount')) {
                obj['confirmationsCount'] = ApiClient.convertToType(data['confirmationsCount'], 'Number');
            }
            if (data.hasOwnProperty('feePriority')) {
                obj['feePriority'] = ApiClient.convertToType(data['feePriority'], 'String');
            }
            if (data.hasOwnProperty('fromAddress')) {
                obj['fromAddress'] = ApiClient.convertToType(data['fromAddress'], 'String');
            }
            if (data.hasOwnProperty('minimumTransferAmount')) {
                obj['minimumTransferAmount'] = ApiClient.convertToType(data['minimumTransferAmount'], 'String');
            }
            if (data.hasOwnProperty('toAddress')) {
                obj['toAddress'] = ApiClient.convertToType(data['toAddress'], 'String');
            }
            if (data.hasOwnProperty('tokenData')) {
                obj['tokenData'] = AddTokensToExistingFromAddressRBTokenData.constructFromObject(data['tokenData']);
            }
        }
        return obj;
    }


}

/**
 * Represents the Secret Key value provided by the customer. This field is used for security purposes during the callback notification, in order to prove the sender of the callback as Crypto APIs. For more information please see our [Documentation](https://developers.cryptoapis.io/technical-documentation/general-information/callbacks#callback-security).
 * @member {String} callbackSecretKey
 */
AddTokensToExistingFromAddressRBDataItem.prototype['callbackSecretKey'] = undefined;

/**
 * Represents the URL that is set by the customer where the callback will be received at. The callback notification will be received only if and when the event occurs. `We support ONLY httpS type of protocol`.
 * @member {String} callbackUrl
 */
AddTokensToExistingFromAddressRBDataItem.prototype['callbackUrl'] = undefined;

/**
 * Represents the number of confirmations, i.e. the amount of blocks that have been built on top of this block.
 * @member {Number} confirmationsCount
 */
AddTokensToExistingFromAddressRBDataItem.prototype['confirmationsCount'] = undefined;

/**
 * Represents the fee priority of the automation, whether it is \"SLOW\", \"STANDARD\" or \"FAST\".
 * @member {module:model/AddTokensToExistingFromAddressRBDataItem.FeePriorityEnum} feePriority
 */
AddTokensToExistingFromAddressRBDataItem.prototype['feePriority'] = undefined;

/**
 * Represents the hash of the address that forwards the tokens.
 * @member {String} fromAddress
 */
AddTokensToExistingFromAddressRBDataItem.prototype['fromAddress'] = undefined;

/**
 * Represents the minimum transfer amount of the currency in the `fromAddress` that can be allowed for an automatic forwarding.
 * @member {String} minimumTransferAmount
 */
AddTokensToExistingFromAddressRBDataItem.prototype['minimumTransferAmount'] = undefined;

/**
 * Represents the hash of the address the currency is forwarded to.
 * @member {String} toAddress
 */
AddTokensToExistingFromAddressRBDataItem.prototype['toAddress'] = undefined;

/**
 * @member {module:model/AddTokensToExistingFromAddressRBTokenData} tokenData
 */
AddTokensToExistingFromAddressRBDataItem.prototype['tokenData'] = undefined;





/**
 * Allowed values for the <code>feePriority</code> property.
 * @enum {String}
 * @readonly
 */
AddTokensToExistingFromAddressRBDataItem['FeePriorityEnum'] = {

    /**
     * value: "slow"
     * @const
     */
    "slow": "slow",

    /**
     * value: "standard"
     * @const
     */
    "standard": "standard",

    /**
     * value: "fast"
     * @const
     */
    "fast": "fast"
};



export default AddTokensToExistingFromAddressRBDataItem;

