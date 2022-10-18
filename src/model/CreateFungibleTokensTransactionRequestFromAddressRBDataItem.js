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
 * The CreateFungibleTokensTransactionRequestFromAddressRBDataItem model module.
 * @module model/CreateFungibleTokensTransactionRequestFromAddressRBDataItem
 * @version 1.9.0
 */
class CreateFungibleTokensTransactionRequestFromAddressRBDataItem {
    /**
     * Constructs a new <code>CreateFungibleTokensTransactionRequestFromAddressRBDataItem</code>.
     * @alias module:model/CreateFungibleTokensTransactionRequestFromAddressRBDataItem
     * @param amount {String} Represents the specific amount of the transaction.
     * @param feePriority {module:model/CreateFungibleTokensTransactionRequestFromAddressRBDataItem.FeePriorityEnum} Represents the fee priority of the automation, whether it is \"slow\", \"standard\" or \"fast\".
     * @param recipientAddress {String} Defines the specific recipient address for the transaction.
     * @param tokenIdentifier {String} Defines the specific token identifier. For Bitcoin-based transactions it should be the `propertyId` and for Ethereum-based transactions - the `contract`.
     */
    constructor(amount, feePriority, recipientAddress, tokenIdentifier) { 
        
        CreateFungibleTokensTransactionRequestFromAddressRBDataItem.initialize(this, amount, feePriority, recipientAddress, tokenIdentifier);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, amount, feePriority, recipientAddress, tokenIdentifier) { 
        obj['amount'] = amount;
        obj['feePriority'] = feePriority;
        obj['recipientAddress'] = recipientAddress;
        obj['tokenIdentifier'] = tokenIdentifier;
    }

    /**
     * Constructs a <code>CreateFungibleTokensTransactionRequestFromAddressRBDataItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateFungibleTokensTransactionRequestFromAddressRBDataItem} obj Optional instance to populate.
     * @return {module:model/CreateFungibleTokensTransactionRequestFromAddressRBDataItem} The populated <code>CreateFungibleTokensTransactionRequestFromAddressRBDataItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateFungibleTokensTransactionRequestFromAddressRBDataItem();

            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
            }
            if (data.hasOwnProperty('callbackSecretKey')) {
                obj['callbackSecretKey'] = ApiClient.convertToType(data['callbackSecretKey'], 'String');
            }
            if (data.hasOwnProperty('callbackUrl')) {
                obj['callbackUrl'] = ApiClient.convertToType(data['callbackUrl'], 'String');
            }
            if (data.hasOwnProperty('feePriority')) {
                obj['feePriority'] = ApiClient.convertToType(data['feePriority'], 'String');
            }
            if (data.hasOwnProperty('note')) {
                obj['note'] = ApiClient.convertToType(data['note'], 'String');
            }
            if (data.hasOwnProperty('recipientAddress')) {
                obj['recipientAddress'] = ApiClient.convertToType(data['recipientAddress'], 'String');
            }
            if (data.hasOwnProperty('tokenIdentifier')) {
                obj['tokenIdentifier'] = ApiClient.convertToType(data['tokenIdentifier'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Represents the specific amount of the transaction.
 * @member {String} amount
 */
CreateFungibleTokensTransactionRequestFromAddressRBDataItem.prototype['amount'] = undefined;

/**
 * Represents the Secret Key value provided by the customer. This field is used for security purposes during the callback notification, in order to prove the sender of the callback as Crypto APIs. For more information please see our [Documentation](https://developers.cryptoapis.io/technical-documentation/general-information/callbacks#callback-security).
 * @member {String} callbackSecretKey
 */
CreateFungibleTokensTransactionRequestFromAddressRBDataItem.prototype['callbackSecretKey'] = undefined;

/**
 * Represents the URL that is set by the customer where the callback will be received at. The callback notification will be received only if and when the event occurs. `We support ONLY httpS type of protocol`.
 * @member {String} callbackUrl
 */
CreateFungibleTokensTransactionRequestFromAddressRBDataItem.prototype['callbackUrl'] = undefined;

/**
 * Represents the fee priority of the automation, whether it is \"slow\", \"standard\" or \"fast\".
 * @member {module:model/CreateFungibleTokensTransactionRequestFromAddressRBDataItem.FeePriorityEnum} feePriority
 */
CreateFungibleTokensTransactionRequestFromAddressRBDataItem.prototype['feePriority'] = undefined;

/**
 * Represents an optional note to add a free text in, explaining or providing additional detail on the transaction request.
 * @member {String} note
 */
CreateFungibleTokensTransactionRequestFromAddressRBDataItem.prototype['note'] = undefined;

/**
 * Defines the specific recipient address for the transaction.
 * @member {String} recipientAddress
 */
CreateFungibleTokensTransactionRequestFromAddressRBDataItem.prototype['recipientAddress'] = undefined;

/**
 * Defines the specific token identifier. For Bitcoin-based transactions it should be the `propertyId` and for Ethereum-based transactions - the `contract`.
 * @member {String} tokenIdentifier
 */
CreateFungibleTokensTransactionRequestFromAddressRBDataItem.prototype['tokenIdentifier'] = undefined;





/**
 * Allowed values for the <code>feePriority</code> property.
 * @enum {String}
 * @readonly
 */
CreateFungibleTokensTransactionRequestFromAddressRBDataItem['FeePriorityEnum'] = {

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



export default CreateFungibleTokensTransactionRequestFromAddressRBDataItem;

