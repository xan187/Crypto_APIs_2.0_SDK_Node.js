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
 * The GetWalletTransactionDetailsByTransactionIDRIBST model module.
 * @module model/GetWalletTransactionDetailsByTransactionIDRIBST
 * @version 1.7.2
 */
class GetWalletTransactionDetailsByTransactionIDRIBST {
    /**
     * Constructs a new <code>GetWalletTransactionDetailsByTransactionIDRIBST</code>.
     * Tron
     * @alias module:model/GetWalletTransactionDetailsByTransactionIDRIBST
     * @param amount {String} String representation of the amount value
     * @param bandwidthUsed {String} Numeric representation of the transaction used bandwidth
     * @param contract {String} Numeric representation of the transaction contract
     * @param energyUsed {String} String representation of the transaction used energy
     * @param hasInternalTransactions {Boolean} 
     * @param hasTokenTransfers {Boolean} 
     * @param input {String} Numeric representation of the transaction input
     * @param status {String} String representation of the transaction status
     */
    constructor(amount, bandwidthUsed, contract, energyUsed, hasInternalTransactions, hasTokenTransfers, input, status) { 
        
        GetWalletTransactionDetailsByTransactionIDRIBST.initialize(this, amount, bandwidthUsed, contract, energyUsed, hasInternalTransactions, hasTokenTransfers, input, status);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, amount, bandwidthUsed, contract, energyUsed, hasInternalTransactions, hasTokenTransfers, input, status) { 
        obj['amount'] = amount;
        obj['bandwidthUsed'] = bandwidthUsed;
        obj['contract'] = contract;
        obj['energyUsed'] = energyUsed;
        obj['hasInternalTransactions'] = hasInternalTransactions;
        obj['hasTokenTransfers'] = hasTokenTransfers;
        obj['input'] = input;
        obj['status'] = status;
    }

    /**
     * Constructs a <code>GetWalletTransactionDetailsByTransactionIDRIBST</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetWalletTransactionDetailsByTransactionIDRIBST} obj Optional instance to populate.
     * @return {module:model/GetWalletTransactionDetailsByTransactionIDRIBST} The populated <code>GetWalletTransactionDetailsByTransactionIDRIBST</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetWalletTransactionDetailsByTransactionIDRIBST();

            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
            }
            if (data.hasOwnProperty('bandwidthUsed')) {
                obj['bandwidthUsed'] = ApiClient.convertToType(data['bandwidthUsed'], 'String');
            }
            if (data.hasOwnProperty('contract')) {
                obj['contract'] = ApiClient.convertToType(data['contract'], 'String');
            }
            if (data.hasOwnProperty('energyUsed')) {
                obj['energyUsed'] = ApiClient.convertToType(data['energyUsed'], 'String');
            }
            if (data.hasOwnProperty('hasInternalTransactions')) {
                obj['hasInternalTransactions'] = ApiClient.convertToType(data['hasInternalTransactions'], 'Boolean');
            }
            if (data.hasOwnProperty('hasTokenTransfers')) {
                obj['hasTokenTransfers'] = ApiClient.convertToType(data['hasTokenTransfers'], 'Boolean');
            }
            if (data.hasOwnProperty('input')) {
                obj['input'] = ApiClient.convertToType(data['input'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
        }
        return obj;
    }


}

/**
 * String representation of the amount value
 * @member {String} amount
 */
GetWalletTransactionDetailsByTransactionIDRIBST.prototype['amount'] = undefined;

/**
 * Numeric representation of the transaction used bandwidth
 * @member {String} bandwidthUsed
 */
GetWalletTransactionDetailsByTransactionIDRIBST.prototype['bandwidthUsed'] = undefined;

/**
 * Numeric representation of the transaction contract
 * @member {String} contract
 */
GetWalletTransactionDetailsByTransactionIDRIBST.prototype['contract'] = undefined;

/**
 * String representation of the transaction used energy
 * @member {String} energyUsed
 */
GetWalletTransactionDetailsByTransactionIDRIBST.prototype['energyUsed'] = undefined;

/**
 * @member {Boolean} hasInternalTransactions
 */
GetWalletTransactionDetailsByTransactionIDRIBST.prototype['hasInternalTransactions'] = undefined;

/**
 * @member {Boolean} hasTokenTransfers
 */
GetWalletTransactionDetailsByTransactionIDRIBST.prototype['hasTokenTransfers'] = undefined;

/**
 * Numeric representation of the transaction input
 * @member {String} input
 */
GetWalletTransactionDetailsByTransactionIDRIBST.prototype['input'] = undefined;

/**
 * String representation of the transaction status
 * @member {String} status
 */
GetWalletTransactionDetailsByTransactionIDRIBST.prototype['status'] = undefined;






export default GetWalletTransactionDetailsByTransactionIDRIBST;

