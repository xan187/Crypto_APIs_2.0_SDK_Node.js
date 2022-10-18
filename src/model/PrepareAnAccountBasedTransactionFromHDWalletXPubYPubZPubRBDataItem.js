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
import PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRBDataItemFee from './PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRBDataItemFee';

/**
 * The PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRBDataItem model module.
 * @module model/PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRBDataItem
 * @version 1.9.0
 */
class PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRBDataItem {
    /**
     * Constructs a new <code>PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRBDataItem</code>.
     * @alias module:model/PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRBDataItem
     * @param amount {String} Representation of the amount of the transaction
     * @param recipient {String} Represents a list of recipient addresses with the respective amounts. In account-based protocols like Ethereum there is only one address in this list.
     * @param sender {String} Represents a  sender address with the respective amount. In account-based protocols like Ethereum there is only one address in this list.
     * @param xpub {String} Defines the account extended publicly known key which is used to derive all child public keys.
     * @param fee {module:model/PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRBDataItemFee} 
     */
    constructor(amount, recipient, sender, xpub, fee) { 
        
        PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRBDataItem.initialize(this, amount, recipient, sender, xpub, fee);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, amount, recipient, sender, xpub, fee) { 
        obj['amount'] = amount;
        obj['recipient'] = recipient;
        obj['sender'] = sender;
        obj['xpub'] = xpub;
        obj['fee'] = fee;
    }

    /**
     * Constructs a <code>PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRBDataItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRBDataItem} obj Optional instance to populate.
     * @return {module:model/PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRBDataItem} The populated <code>PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRBDataItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRBDataItem();

            if (data.hasOwnProperty('additionalData')) {
                obj['additionalData'] = ApiClient.convertToType(data['additionalData'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
            }
            if (data.hasOwnProperty('recipient')) {
                obj['recipient'] = ApiClient.convertToType(data['recipient'], 'String');
            }
            if (data.hasOwnProperty('sender')) {
                obj['sender'] = ApiClient.convertToType(data['sender'], 'String');
            }
            if (data.hasOwnProperty('xpub')) {
                obj['xpub'] = ApiClient.convertToType(data['xpub'], 'String');
            }
            if (data.hasOwnProperty('fee')) {
                obj['fee'] = PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRBDataItemFee.constructFromObject(data['fee']);
            }
            if (data.hasOwnProperty('nonce')) {
                obj['nonce'] = ApiClient.convertToType(data['nonce'], 'String');
            }
            if (data.hasOwnProperty('transactionType')) {
                obj['transactionType'] = ApiClient.convertToType(data['transactionType'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Representation of the additional data.
 * @member {String} additionalData
 */
PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRBDataItem.prototype['additionalData'] = undefined;

/**
 * Representation of the amount of the transaction
 * @member {String} amount
 */
PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRBDataItem.prototype['amount'] = undefined;

/**
 * Represents a list of recipient addresses with the respective amounts. In account-based protocols like Ethereum there is only one address in this list.
 * @member {String} recipient
 */
PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRBDataItem.prototype['recipient'] = undefined;

/**
 * Represents a  sender address with the respective amount. In account-based protocols like Ethereum there is only one address in this list.
 * @member {String} sender
 */
PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRBDataItem.prototype['sender'] = undefined;

/**
 * Defines the account extended publicly known key which is used to derive all child public keys.
 * @member {String} xpub
 */
PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRBDataItem.prototype['xpub'] = undefined;

/**
 * @member {module:model/PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRBDataItemFee} fee
 */
PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRBDataItem.prototype['fee'] = undefined;

/**
 * Representation of the nonce value
 * @member {String} nonce
 */
PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRBDataItem.prototype['nonce'] = undefined;

/**
 * Representation of the transaction type
 * @member {module:model/PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRBDataItem.TransactionTypeEnum} transactionType
 */
PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRBDataItem.prototype['transactionType'] = undefined;





/**
 * Allowed values for the <code>transactionType</code> property.
 * @enum {String}
 * @readonly
 */
PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRBDataItem['TransactionTypeEnum'] = {

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



export default PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRBDataItem;

