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
 * The PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRBDataItemRecipientsInner model module.
 * @module model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRBDataItemRecipientsInner
 * @version 1.8.0
 */
class PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRBDataItemRecipientsInner {
    /**
     * Constructs a new <code>PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRBDataItemRecipientsInner</code>.
     * @alias module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRBDataItemRecipientsInner
     * @param address {String} The address which receives this transaction. In UTXO-based protocols like Bitcoin there could be several senders while in account-based protocols like Ethereum there is always only one recipient.
     * @param amount {String} Represents the amount value
     */
    constructor(address, amount) { 
        
        PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRBDataItemRecipientsInner.initialize(this, address, amount);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, address, amount) { 
        obj['address'] = address;
        obj['amount'] = amount;
    }

    /**
     * Constructs a <code>PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRBDataItemRecipientsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRBDataItemRecipientsInner} obj Optional instance to populate.
     * @return {module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRBDataItemRecipientsInner} The populated <code>PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRBDataItemRecipientsInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRBDataItemRecipientsInner();

            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The address which receives this transaction. In UTXO-based protocols like Bitcoin there could be several senders while in account-based protocols like Ethereum there is always only one recipient.
 * @member {String} address
 */
PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRBDataItemRecipientsInner.prototype['address'] = undefined;

/**
 * Represents the amount value
 * @member {String} amount
 */
PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRBDataItemRecipientsInner.prototype['amount'] = undefined;






export default PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRBDataItemRecipientsInner;

