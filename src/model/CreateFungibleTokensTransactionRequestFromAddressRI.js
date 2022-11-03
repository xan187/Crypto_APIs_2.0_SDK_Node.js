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
import CreateCoinsTransactionRequestFromAddressRISenders from './CreateCoinsTransactionRequestFromAddressRISenders';
import CreateFungibleTokensTransactionRequestFromAddressRIRecipientsInner from './CreateFungibleTokensTransactionRequestFromAddressRIRecipientsInner';
import CreateFungibleTokensTransactionRequestFromAddressRIS from './CreateFungibleTokensTransactionRequestFromAddressRIS';

/**
 * The CreateFungibleTokensTransactionRequestFromAddressRI model module.
 * @module model/CreateFungibleTokensTransactionRequestFromAddressRI
 * @version 1.10.0
 */
class CreateFungibleTokensTransactionRequestFromAddressRI {
    /**
     * Constructs a new <code>CreateFungibleTokensTransactionRequestFromAddressRI</code>.
     * @alias module:model/CreateFungibleTokensTransactionRequestFromAddressRI
     * @param callbackSecretKey {String} Represents the Secret Key value provided by the customer. This field is used for security purposes during the callback notification, in order to prove the sender of the callback as Crypto APIs. For more information please see our [Documentation](https://developers.cryptoapis.io/technical-documentation/general-information/callbacks#callback-security).
     * @param callbackUrl {String} Represents the URL that is set by the customer where the callback will be received at. The callback notification will be received only if and when the event occurs. `We support ONLY httpS type of protocol`.
     * @param feePriority {module:model/CreateFungibleTokensTransactionRequestFromAddressRI.FeePriorityEnum} Represents the fee priority of the automation, whether it is \"slow\", \"standard\" or \"fast\".
     * @param recipients {Array.<module:model/CreateFungibleTokensTransactionRequestFromAddressRIRecipientsInner>} Defines the destination for the transaction, i.e. the recipient(s).
     * @param senders {module:model/CreateCoinsTransactionRequestFromAddressRISenders} 
     * @param tokenTypeSpecificData {module:model/CreateFungibleTokensTransactionRequestFromAddressRIS} 
     * @param transactionRequestId {String} Represents a unique identifier of the transaction request (the request sent to make a transaction), which helps in identifying which callback and which `referenceId` concern that specific transaction request.
     */
    constructor(callbackSecretKey, callbackUrl, feePriority, recipients, senders, tokenTypeSpecificData, transactionRequestId) { 
        
        CreateFungibleTokensTransactionRequestFromAddressRI.initialize(this, callbackSecretKey, callbackUrl, feePriority, recipients, senders, tokenTypeSpecificData, transactionRequestId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, callbackSecretKey, callbackUrl, feePriority, recipients, senders, tokenTypeSpecificData, transactionRequestId) { 
        obj['callbackSecretKey'] = callbackSecretKey;
        obj['callbackUrl'] = callbackUrl;
        obj['feePriority'] = feePriority;
        obj['recipients'] = recipients;
        obj['senders'] = senders;
        obj['tokenTypeSpecificData'] = tokenTypeSpecificData;
        obj['transactionRequestId'] = transactionRequestId;
    }

    /**
     * Constructs a <code>CreateFungibleTokensTransactionRequestFromAddressRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateFungibleTokensTransactionRequestFromAddressRI} obj Optional instance to populate.
     * @return {module:model/CreateFungibleTokensTransactionRequestFromAddressRI} The populated <code>CreateFungibleTokensTransactionRequestFromAddressRI</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateFungibleTokensTransactionRequestFromAddressRI();

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
            if (data.hasOwnProperty('recipients')) {
                obj['recipients'] = ApiClient.convertToType(data['recipients'], [CreateFungibleTokensTransactionRequestFromAddressRIRecipientsInner]);
            }
            if (data.hasOwnProperty('senders')) {
                obj['senders'] = CreateCoinsTransactionRequestFromAddressRISenders.constructFromObject(data['senders']);
            }
            if (data.hasOwnProperty('tokenTypeSpecificData')) {
                obj['tokenTypeSpecificData'] = CreateFungibleTokensTransactionRequestFromAddressRIS.constructFromObject(data['tokenTypeSpecificData']);
            }
            if (data.hasOwnProperty('transactionRequestId')) {
                obj['transactionRequestId'] = ApiClient.convertToType(data['transactionRequestId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Represents the Secret Key value provided by the customer. This field is used for security purposes during the callback notification, in order to prove the sender of the callback as Crypto APIs. For more information please see our [Documentation](https://developers.cryptoapis.io/technical-documentation/general-information/callbacks#callback-security).
 * @member {String} callbackSecretKey
 */
CreateFungibleTokensTransactionRequestFromAddressRI.prototype['callbackSecretKey'] = undefined;

/**
 * Represents the URL that is set by the customer where the callback will be received at. The callback notification will be received only if and when the event occurs. `We support ONLY httpS type of protocol`.
 * @member {String} callbackUrl
 */
CreateFungibleTokensTransactionRequestFromAddressRI.prototype['callbackUrl'] = undefined;

/**
 * Represents the fee priority of the automation, whether it is \"slow\", \"standard\" or \"fast\".
 * @member {module:model/CreateFungibleTokensTransactionRequestFromAddressRI.FeePriorityEnum} feePriority
 */
CreateFungibleTokensTransactionRequestFromAddressRI.prototype['feePriority'] = undefined;

/**
 * Represents an optional note to add a free text in, explaining or providing additional detail on the transaction request.
 * @member {String} note
 */
CreateFungibleTokensTransactionRequestFromAddressRI.prototype['note'] = undefined;

/**
 * Defines the destination for the transaction, i.e. the recipient(s).
 * @member {Array.<module:model/CreateFungibleTokensTransactionRequestFromAddressRIRecipientsInner>} recipients
 */
CreateFungibleTokensTransactionRequestFromAddressRI.prototype['recipients'] = undefined;

/**
 * @member {module:model/CreateCoinsTransactionRequestFromAddressRISenders} senders
 */
CreateFungibleTokensTransactionRequestFromAddressRI.prototype['senders'] = undefined;

/**
 * @member {module:model/CreateFungibleTokensTransactionRequestFromAddressRIS} tokenTypeSpecificData
 */
CreateFungibleTokensTransactionRequestFromAddressRI.prototype['tokenTypeSpecificData'] = undefined;

/**
 * Represents a unique identifier of the transaction request (the request sent to make a transaction), which helps in identifying which callback and which `referenceId` concern that specific transaction request.
 * @member {String} transactionRequestId
 */
CreateFungibleTokensTransactionRequestFromAddressRI.prototype['transactionRequestId'] = undefined;





/**
 * Allowed values for the <code>feePriority</code> property.
 * @enum {String}
 * @readonly
 */
CreateFungibleTokensTransactionRequestFromAddressRI['FeePriorityEnum'] = {

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



export default CreateFungibleTokensTransactionRequestFromAddressRI;

