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
 * The AddressTokensTransactionConfirmedEachConfirmationErc20 model module.
 * @module model/AddressTokensTransactionConfirmedEachConfirmationErc20
 * @version 1.13.0
 */
class AddressTokensTransactionConfirmedEachConfirmationErc20 {
    /**
     * Constructs a new <code>AddressTokensTransactionConfirmedEachConfirmationErc20</code>.
     * ERC-20
     * @alias module:model/AddressTokensTransactionConfirmedEachConfirmationErc20
     * @param name {String} Specifies the name of the token.
     * @param symbol {String} Specifies an identifier of the token, where up to five alphanumeric characters can be used for it.
     * @param amount {String} Defines the amount of tokens sent with the confirmed transaction.
     * @param contractAddress {String} Defines the address of the contract.
     */
    constructor(name, symbol, amount, contractAddress) { 
        
        AddressTokensTransactionConfirmedEachConfirmationErc20.initialize(this, name, symbol, amount, contractAddress);
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
     * Constructs a <code>AddressTokensTransactionConfirmedEachConfirmationErc20</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddressTokensTransactionConfirmedEachConfirmationErc20} obj Optional instance to populate.
     * @return {module:model/AddressTokensTransactionConfirmedEachConfirmationErc20} The populated <code>AddressTokensTransactionConfirmedEachConfirmationErc20</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddressTokensTransactionConfirmedEachConfirmationErc20();

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
 * Specifies the name of the token.
 * @member {String} name
 */
AddressTokensTransactionConfirmedEachConfirmationErc20.prototype['name'] = undefined;

/**
 * Specifies an identifier of the token, where up to five alphanumeric characters can be used for it.
 * @member {String} symbol
 */
AddressTokensTransactionConfirmedEachConfirmationErc20.prototype['symbol'] = undefined;

/**
 * Defines how many decimals can be used to break the token.
 * @member {String} decimals
 */
AddressTokensTransactionConfirmedEachConfirmationErc20.prototype['decimals'] = undefined;

/**
 * Defines the amount of tokens sent with the confirmed transaction.
 * @member {String} amount
 */
AddressTokensTransactionConfirmedEachConfirmationErc20.prototype['amount'] = undefined;

/**
 * Defines the address of the contract.
 * @member {String} contractAddress
 */
AddressTokensTransactionConfirmedEachConfirmationErc20.prototype['contractAddress'] = undefined;






export default AddressTokensTransactionConfirmedEachConfirmationErc20;

