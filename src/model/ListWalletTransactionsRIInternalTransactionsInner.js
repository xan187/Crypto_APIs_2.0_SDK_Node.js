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
 * The ListWalletTransactionsRIInternalTransactionsInner model module.
 * @module model/ListWalletTransactionsRIInternalTransactionsInner
 * @version 1.10.0
 */
class ListWalletTransactionsRIInternalTransactionsInner {
    /**
     * Constructs a new <code>ListWalletTransactionsRIInternalTransactionsInner</code>.
     * @alias module:model/ListWalletTransactionsRIInternalTransactionsInner
     * @param amount {String} Defines the specific amount of the transaction.
     * @param convertedAmount {String} Represents the converted amount.
     * @param exchangeRateUnit {String} Defines the base asset symbol to get a rate for.
     * @param operationId {String} Represents the unique internal transaction ID in regards to the parent transaction (type trace address).
     * @param recipient {String} Represents the recipient address with the respective amount.
     * @param sender {String} Represents the sender address with the respective amount.
     * @param symbol {String} Represents the unique unit symbol.
     */
    constructor(amount, convertedAmount, exchangeRateUnit, operationId, recipient, sender, symbol) { 
        
        ListWalletTransactionsRIInternalTransactionsInner.initialize(this, amount, convertedAmount, exchangeRateUnit, operationId, recipient, sender, symbol);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, amount, convertedAmount, exchangeRateUnit, operationId, recipient, sender, symbol) { 
        obj['amount'] = amount;
        obj['convertedAmount'] = convertedAmount;
        obj['exchangeRateUnit'] = exchangeRateUnit;
        obj['operationId'] = operationId;
        obj['recipient'] = recipient;
        obj['sender'] = sender;
        obj['symbol'] = symbol;
    }

    /**
     * Constructs a <code>ListWalletTransactionsRIInternalTransactionsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListWalletTransactionsRIInternalTransactionsInner} obj Optional instance to populate.
     * @return {module:model/ListWalletTransactionsRIInternalTransactionsInner} The populated <code>ListWalletTransactionsRIInternalTransactionsInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListWalletTransactionsRIInternalTransactionsInner();

            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
            }
            if (data.hasOwnProperty('convertedAmount')) {
                obj['convertedAmount'] = ApiClient.convertToType(data['convertedAmount'], 'String');
            }
            if (data.hasOwnProperty('exchangeRateUnit')) {
                obj['exchangeRateUnit'] = ApiClient.convertToType(data['exchangeRateUnit'], 'String');
            }
            if (data.hasOwnProperty('operationId')) {
                obj['operationId'] = ApiClient.convertToType(data['operationId'], 'String');
            }
            if (data.hasOwnProperty('recipient')) {
                obj['recipient'] = ApiClient.convertToType(data['recipient'], 'String');
            }
            if (data.hasOwnProperty('sender')) {
                obj['sender'] = ApiClient.convertToType(data['sender'], 'String');
            }
            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Defines the specific amount of the transaction.
 * @member {String} amount
 */
ListWalletTransactionsRIInternalTransactionsInner.prototype['amount'] = undefined;

/**
 * Represents the converted amount.
 * @member {String} convertedAmount
 */
ListWalletTransactionsRIInternalTransactionsInner.prototype['convertedAmount'] = undefined;

/**
 * Defines the base asset symbol to get a rate for.
 * @member {String} exchangeRateUnit
 */
ListWalletTransactionsRIInternalTransactionsInner.prototype['exchangeRateUnit'] = undefined;

/**
 * Represents the unique internal transaction ID in regards to the parent transaction (type trace address).
 * @member {String} operationId
 */
ListWalletTransactionsRIInternalTransactionsInner.prototype['operationId'] = undefined;

/**
 * Represents the recipient address with the respective amount.
 * @member {String} recipient
 */
ListWalletTransactionsRIInternalTransactionsInner.prototype['recipient'] = undefined;

/**
 * Represents the sender address with the respective amount.
 * @member {String} sender
 */
ListWalletTransactionsRIInternalTransactionsInner.prototype['sender'] = undefined;

/**
 * Represents the unique unit symbol.
 * @member {String} symbol
 */
ListWalletTransactionsRIInternalTransactionsInner.prototype['symbol'] = undefined;






export default ListWalletTransactionsRIInternalTransactionsInner;

