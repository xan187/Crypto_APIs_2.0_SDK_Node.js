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
import PrepareAFungibleTokenTransferFromAddressRBDataItemFee from './PrepareAFungibleTokenTransferFromAddressRBDataItemFee';

/**
 * The PrepareAFungibleTokenTransferFromAddressRBDataItem model module.
 * @module model/PrepareAFungibleTokenTransferFromAddressRBDataItem
 * @version 1.13.0
 */
class PrepareAFungibleTokenTransferFromAddressRBDataItem {
    /**
     * Constructs a new <code>PrepareAFungibleTokenTransferFromAddressRBDataItem</code>.
     * @alias module:model/PrepareAFungibleTokenTransferFromAddressRBDataItem
     * @param amount {String} Representation of the amount to be transferred
     * @param contract {String} Represents the contract address of the token, which controls its logic. It is not the address that holds the tokens.
     * @param recipient {String} The address which receives this transaction. In UTXO-based protocols like Bitcoin there could be several senders while in account-based protocols like Ethereum there is always only one recipient.
     * @param sender {String} Represents the address which sends this transaction. In UTXO-based protocols like Bitcoin there could be several senders while in account-based protocols like Ethereum there is always only one sender.
     * @param fee {module:model/PrepareAFungibleTokenTransferFromAddressRBDataItemFee} 
     */
    constructor(amount, contract, recipient, sender, fee) { 
        
        PrepareAFungibleTokenTransferFromAddressRBDataItem.initialize(this, amount, contract, recipient, sender, fee);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, amount, contract, recipient, sender, fee) { 
        obj['amount'] = amount;
        obj['contract'] = contract;
        obj['recipient'] = recipient;
        obj['sender'] = sender;
        obj['fee'] = fee;
    }

    /**
     * Constructs a <code>PrepareAFungibleTokenTransferFromAddressRBDataItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PrepareAFungibleTokenTransferFromAddressRBDataItem} obj Optional instance to populate.
     * @return {module:model/PrepareAFungibleTokenTransferFromAddressRBDataItem} The populated <code>PrepareAFungibleTokenTransferFromAddressRBDataItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PrepareAFungibleTokenTransferFromAddressRBDataItem();

            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
            }
            if (data.hasOwnProperty('contract')) {
                obj['contract'] = ApiClient.convertToType(data['contract'], 'String');
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
            if (data.hasOwnProperty('fee')) {
                obj['fee'] = PrepareAFungibleTokenTransferFromAddressRBDataItemFee.constructFromObject(data['fee']);
            }
            if (data.hasOwnProperty('transactionType')) {
                obj['transactionType'] = ApiClient.convertToType(data['transactionType'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Representation of the amount to be transferred
 * @member {String} amount
 */
PrepareAFungibleTokenTransferFromAddressRBDataItem.prototype['amount'] = undefined;

/**
 * Represents the contract address of the token, which controls its logic. It is not the address that holds the tokens.
 * @member {String} contract
 */
PrepareAFungibleTokenTransferFromAddressRBDataItem.prototype['contract'] = undefined;

/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {String} nonce
 */
PrepareAFungibleTokenTransferFromAddressRBDataItem.prototype['nonce'] = undefined;

/**
 * The address which receives this transaction. In UTXO-based protocols like Bitcoin there could be several senders while in account-based protocols like Ethereum there is always only one recipient.
 * @member {String} recipient
 */
PrepareAFungibleTokenTransferFromAddressRBDataItem.prototype['recipient'] = undefined;

/**
 * Represents the address which sends this transaction. In UTXO-based protocols like Bitcoin there could be several senders while in account-based protocols like Ethereum there is always only one sender.
 * @member {String} sender
 */
PrepareAFungibleTokenTransferFromAddressRBDataItem.prototype['sender'] = undefined;

/**
 * @member {module:model/PrepareAFungibleTokenTransferFromAddressRBDataItemFee} fee
 */
PrepareAFungibleTokenTransferFromAddressRBDataItem.prototype['fee'] = undefined;

/**
 * Representation of the transaction type. For Ethereum-Classic and Binance Smart Chain there is no need to provide \"transactionType\" in the request.
 * @member {module:model/PrepareAFungibleTokenTransferFromAddressRBDataItem.TransactionTypeEnum} transactionType
 */
PrepareAFungibleTokenTransferFromAddressRBDataItem.prototype['transactionType'] = undefined;





/**
 * Allowed values for the <code>transactionType</code> property.
 * @enum {String}
 * @readonly
 */
PrepareAFungibleTokenTransferFromAddressRBDataItem['TransactionTypeEnum'] = {

    /**
     * value: "legacy-transaction"
     * @const
     */
    "legacy-transaction": "legacy-transaction"
};



export default PrepareAFungibleTokenTransferFromAddressRBDataItem;

