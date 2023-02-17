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
 * The AddressTokensTransactionConfirmedTrc20 model module.
 * @module model/AddressTokensTransactionConfirmedTrc20
 * @version 1.13.0
 */
class AddressTokensTransactionConfirmedTrc20 {
    /**
     * Constructs a new <code>AddressTokensTransactionConfirmedTrc20</code>.
     * TRC-20
     * @alias module:model/AddressTokensTransactionConfirmedTrc20
     * @param name {String} 
     * @param symbol {String} 
     * @param amount {String} 
     * @param contractAddress {String} 
     */
    constructor(name, symbol, amount, contractAddress) { 
        
        AddressTokensTransactionConfirmedTrc20.initialize(this, name, symbol, amount, contractAddress);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, symbol, amount, contractAddress) { 
        obj['name'] = name;
        obj['symbol'] = symbol;
        obj['amount'] = amount;
        obj['contractAddress'] = contractAddress;
    }

    /**
     * Constructs a <code>AddressTokensTransactionConfirmedTrc20</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddressTokensTransactionConfirmedTrc20} obj Optional instance to populate.
     * @return {module:model/AddressTokensTransactionConfirmedTrc20} The populated <code>AddressTokensTransactionConfirmedTrc20</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddressTokensTransactionConfirmedTrc20();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
            if (data.hasOwnProperty('decimals')) {
                obj['decimals'] = ApiClient.convertToType(data['decimals'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
            }
            if (data.hasOwnProperty('contractAddress')) {
                obj['contractAddress'] = ApiClient.convertToType(data['contractAddress'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
AddressTokensTransactionConfirmedTrc20.prototype['name'] = undefined;

/**
 * @member {String} symbol
 */
AddressTokensTransactionConfirmedTrc20.prototype['symbol'] = undefined;

/**
 * @member {String} decimals
 */
AddressTokensTransactionConfirmedTrc20.prototype['decimals'] = undefined;

/**
 * @member {String} amount
 */
AddressTokensTransactionConfirmedTrc20.prototype['amount'] = undefined;

/**
 * @member {String} contractAddress
 */
AddressTokensTransactionConfirmedTrc20.prototype['contractAddress'] = undefined;






export default AddressTokensTransactionConfirmedTrc20;

