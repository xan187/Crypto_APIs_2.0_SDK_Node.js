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
import PrepareAnAccountBasedTransactionFromXPubRBDataItemFee from './PrepareAnAccountBasedTransactionFromXPubRBDataItemFee';

/**
 * The PrepareAnAccountBasedTransactionFromXPubRBDataItem model module.
 * @module model/PrepareAnAccountBasedTransactionFromXPubRBDataItem
 * @version 1.7.0
 */
class PrepareAnAccountBasedTransactionFromXPubRBDataItem {
    /**
     * Constructs a new <code>PrepareAnAccountBasedTransactionFromXPubRBDataItem</code>.
     * @alias module:model/PrepareAnAccountBasedTransactionFromXPubRBDataItem
     * @param additionalData {String} Representation of the additional data.
     * @param amount {String} Representation of the amount of the transaction
     * @param fee {module:model/PrepareAnAccountBasedTransactionFromXPubRBDataItemFee} 
     * @param recipient {String} Represents a list of recipient addresses with the respective amounts. In account-based protocols like Ethereum there is only one address in this list.
     * @param sender {String} Represents a  sender address with the respective amount. In account-based protocols like Ethereum there is only one address in this list.
     * @param transactionType {module:model/PrepareAnAccountBasedTransactionFromXPubRBDataItem.TransactionTypeEnum} Representation of the transaction type
     * @param xpub {String} Defines the account extended publicly known key which is used to derive all child public keys.
     */
    constructor(additionalData, amount, fee, recipient, sender, transactionType, xpub) { 
        
        PrepareAnAccountBasedTransactionFromXPubRBDataItem.initialize(this, additionalData, amount, fee, recipient, sender, transactionType, xpub);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, additionalData, amount, fee, recipient, sender, transactionType, xpub) { 
        obj['additionalData'] = additionalData;
        obj['amount'] = amount;
        obj['fee'] = fee;
        obj['recipient'] = recipient;
        obj['sender'] = sender;
        obj['transactionType'] = transactionType;
        obj['xpub'] = xpub;
    }

    /**
     * Constructs a <code>PrepareAnAccountBasedTransactionFromXPubRBDataItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PrepareAnAccountBasedTransactionFromXPubRBDataItem} obj Optional instance to populate.
     * @return {module:model/PrepareAnAccountBasedTransactionFromXPubRBDataItem} The populated <code>PrepareAnAccountBasedTransactionFromXPubRBDataItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PrepareAnAccountBasedTransactionFromXPubRBDataItem();

            if (data.hasOwnProperty('additionalData')) {
                obj['additionalData'] = ApiClient.convertToType(data['additionalData'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
            }
            if (data.hasOwnProperty('fee')) {
                obj['fee'] = PrepareAnAccountBasedTransactionFromXPubRBDataItemFee.constructFromObject(data['fee']);
            }
            if (data.hasOwnProperty('nonce')) {
                obj['nonce'] = ApiClient.convertToType(data['nonce'], 'String');
            }
            if (data.hasOwnProperty('recipient')) {
                obj['recipient'] = ApiClient.convertToType(data['recipient'], 'String');
            }
            if (data.hasOwnProperty('sender')) {
                obj['sender'] = ApiClient.convertToType(data['sender'], 'String');
            }
            if (data.hasOwnProperty('transactionType')) {
                obj['transactionType'] = ApiClient.convertToType(data['transactionType'], 'String');
            }
            if (data.hasOwnProperty('xpub')) {
                obj['xpub'] = ApiClient.convertToType(data['xpub'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Representation of the additional data.
 * @member {String} additionalData
 */
PrepareAnAccountBasedTransactionFromXPubRBDataItem.prototype['additionalData'] = undefined;

/**
 * Representation of the amount of the transaction
 * @member {String} amount
 */
PrepareAnAccountBasedTransactionFromXPubRBDataItem.prototype['amount'] = undefined;

/**
 * @member {module:model/PrepareAnAccountBasedTransactionFromXPubRBDataItemFee} fee
 */
PrepareAnAccountBasedTransactionFromXPubRBDataItem.prototype['fee'] = undefined;

/**
 * Representation of the nonce value
 * @member {String} nonce
 */
PrepareAnAccountBasedTransactionFromXPubRBDataItem.prototype['nonce'] = undefined;

/**
 * Represents a list of recipient addresses with the respective amounts. In account-based protocols like Ethereum there is only one address in this list.
 * @member {String} recipient
 */
PrepareAnAccountBasedTransactionFromXPubRBDataItem.prototype['recipient'] = undefined;

/**
 * Represents a  sender address with the respective amount. In account-based protocols like Ethereum there is only one address in this list.
 * @member {String} sender
 */
PrepareAnAccountBasedTransactionFromXPubRBDataItem.prototype['sender'] = undefined;

/**
 * Representation of the transaction type
 * @member {module:model/PrepareAnAccountBasedTransactionFromXPubRBDataItem.TransactionTypeEnum} transactionType
 */
PrepareAnAccountBasedTransactionFromXPubRBDataItem.prototype['transactionType'] = undefined;

/**
 * Defines the account extended publicly known key which is used to derive all child public keys.
 * @member {String} xpub
 */
PrepareAnAccountBasedTransactionFromXPubRBDataItem.prototype['xpub'] = undefined;





/**
 * Allowed values for the <code>transactionType</code> property.
 * @enum {String}
 * @readonly
 */
PrepareAnAccountBasedTransactionFromXPubRBDataItem['TransactionTypeEnum'] = {

    /**
     * value: "legacy-transaction"
     * @const
     */
    "legacy-transaction": "legacy-transaction",

    /**
     * value: "access-list-transaction"
     * @const
     */
    "access-list-transaction": "access-list-transaction",

    /**
     * value: "gas-fee-market-transaction"
     * @const
     */
    "gas-fee-market-transaction": "gas-fee-market-transaction"
};



export default PrepareAnAccountBasedTransactionFromXPubRBDataItem;

