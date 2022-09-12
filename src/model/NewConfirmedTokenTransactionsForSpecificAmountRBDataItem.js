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
 * The NewConfirmedTokenTransactionsForSpecificAmountRBDataItem model module.
 * @module model/NewConfirmedTokenTransactionsForSpecificAmountRBDataItem
 * @version 1.8.0
 */
class NewConfirmedTokenTransactionsForSpecificAmountRBDataItem {
    /**
     * Constructs a new <code>NewConfirmedTokenTransactionsForSpecificAmountRBDataItem</code>.
     * @alias module:model/NewConfirmedTokenTransactionsForSpecificAmountRBDataItem
     * @param amountHigherThan {Number} Represents a specific amount of tokens after which the system have to send a callback to customers' callbackUrl.
     * @param callbackUrl {String} Represents the URL that is set by the customer where the callback will be received at. The callback notification will be received only if and when the event occurs. `We support ONLY httpS type of protocol`.
     * @param contractAddress {String} Represents the contract address of the token, which controls its logic. It is not the address that holds the tokens.
     */
    constructor(amountHigherThan, callbackUrl, contractAddress) { 
        
        NewConfirmedTokenTransactionsForSpecificAmountRBDataItem.initialize(this, amountHigherThan, callbackUrl, contractAddress);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, amountHigherThan, callbackUrl, contractAddress) { 
        obj['amountHigherThan'] = amountHigherThan;
        obj['callbackUrl'] = callbackUrl;
        obj['contractAddress'] = contractAddress;
    }

    /**
     * Constructs a <code>NewConfirmedTokenTransactionsForSpecificAmountRBDataItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewConfirmedTokenTransactionsForSpecificAmountRBDataItem} obj Optional instance to populate.
     * @return {module:model/NewConfirmedTokenTransactionsForSpecificAmountRBDataItem} The populated <code>NewConfirmedTokenTransactionsForSpecificAmountRBDataItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NewConfirmedTokenTransactionsForSpecificAmountRBDataItem();

            if (data.hasOwnProperty('allowDuplicates')) {
                obj['allowDuplicates'] = ApiClient.convertToType(data['allowDuplicates'], 'Boolean');
            }
            if (data.hasOwnProperty('amountHigherThan')) {
                obj['amountHigherThan'] = ApiClient.convertToType(data['amountHigherThan'], 'Number');
            }
            if (data.hasOwnProperty('callbackSecretKey')) {
                obj['callbackSecretKey'] = ApiClient.convertToType(data['callbackSecretKey'], 'String');
            }
            if (data.hasOwnProperty('callbackUrl')) {
                obj['callbackUrl'] = ApiClient.convertToType(data['callbackUrl'], 'String');
            }
            if (data.hasOwnProperty('contractAddress')) {
                obj['contractAddress'] = ApiClient.convertToType(data['contractAddress'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Specifies a flag that permits or denies the creation of duplicate addresses.
 * @member {Boolean} allowDuplicates
 * @default false
 */
NewConfirmedTokenTransactionsForSpecificAmountRBDataItem.prototype['allowDuplicates'] = false;

/**
 * Represents a specific amount of tokens after which the system have to send a callback to customers' callbackUrl.
 * @member {Number} amountHigherThan
 */
NewConfirmedTokenTransactionsForSpecificAmountRBDataItem.prototype['amountHigherThan'] = undefined;

/**
 * Represents the Secret Key value provided by the customer. This field is used for security purposes during the callback notification, in order to prove the sender of the callback as Crypto APIs 2.0. For more information please see our [Documentation](https://developers.cryptoapis.io/technical-documentation/general-information/callbacks#callback-security).
 * @member {String} callbackSecretKey
 */
NewConfirmedTokenTransactionsForSpecificAmountRBDataItem.prototype['callbackSecretKey'] = undefined;

/**
 * Represents the URL that is set by the customer where the callback will be received at. The callback notification will be received only if and when the event occurs. `We support ONLY httpS type of protocol`.
 * @member {String} callbackUrl
 */
NewConfirmedTokenTransactionsForSpecificAmountRBDataItem.prototype['callbackUrl'] = undefined;

/**
 * Represents the contract address of the token, which controls its logic. It is not the address that holds the tokens.
 * @member {String} contractAddress
 */
NewConfirmedTokenTransactionsForSpecificAmountRBDataItem.prototype['contractAddress'] = undefined;






export default NewConfirmedTokenTransactionsForSpecificAmountRBDataItem;

