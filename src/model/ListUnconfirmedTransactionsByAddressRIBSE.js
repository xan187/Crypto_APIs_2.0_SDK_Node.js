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
import ListConfirmedTransactionsByAddressRIBSEGasPrice from './ListConfirmedTransactionsByAddressRIBSEGasPrice';
import ListUnconfirmedTransactionsByAddressRIBSEFee from './ListUnconfirmedTransactionsByAddressRIBSEFee';

/**
 * The ListUnconfirmedTransactionsByAddressRIBSE model module.
 * @module model/ListUnconfirmedTransactionsByAddressRIBSE
 * @version 1.8.0
 */
class ListUnconfirmedTransactionsByAddressRIBSE {
    /**
     * Constructs a new <code>ListUnconfirmedTransactionsByAddressRIBSE</code>.
     * Ethereum
     * @alias module:model/ListUnconfirmedTransactionsByAddressRIBSE
     * @param fee {module:model/ListUnconfirmedTransactionsByAddressRIBSEFee} 
     * @param gasLimit {String} Represents the amount of gas used by this specific transaction alone.
     * @param gasPrice {module:model/ListConfirmedTransactionsByAddressRIBSEGasPrice} 
     * @param inputData {String} Represents additional information that is required for the transaction.
     * @param nonce {Number} Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
     * @param transactionStatus {String} String representation of the transaction status
     */
    constructor(fee, gasLimit, gasPrice, inputData, nonce, transactionStatus) { 
        
        ListUnconfirmedTransactionsByAddressRIBSE.initialize(this, fee, gasLimit, gasPrice, inputData, nonce, transactionStatus);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fee, gasLimit, gasPrice, inputData, nonce, transactionStatus) { 
        obj['fee'] = fee;
        obj['gasLimit'] = gasLimit;
        obj['gasPrice'] = gasPrice;
        obj['inputData'] = inputData;
        obj['nonce'] = nonce;
        obj['transactionStatus'] = transactionStatus;
    }

    /**
     * Constructs a <code>ListUnconfirmedTransactionsByAddressRIBSE</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListUnconfirmedTransactionsByAddressRIBSE} obj Optional instance to populate.
     * @return {module:model/ListUnconfirmedTransactionsByAddressRIBSE} The populated <code>ListUnconfirmedTransactionsByAddressRIBSE</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListUnconfirmedTransactionsByAddressRIBSE();

            if (data.hasOwnProperty('fee')) {
                obj['fee'] = ListUnconfirmedTransactionsByAddressRIBSEFee.constructFromObject(data['fee']);
            }
            if (data.hasOwnProperty('gasLimit')) {
                obj['gasLimit'] = ApiClient.convertToType(data['gasLimit'], 'String');
            }
            if (data.hasOwnProperty('gasPrice')) {
                obj['gasPrice'] = ListConfirmedTransactionsByAddressRIBSEGasPrice.constructFromObject(data['gasPrice']);
            }
            if (data.hasOwnProperty('inputData')) {
                obj['inputData'] = ApiClient.convertToType(data['inputData'], 'String');
            }
            if (data.hasOwnProperty('nonce')) {
                obj['nonce'] = ApiClient.convertToType(data['nonce'], 'Number');
            }
            if (data.hasOwnProperty('transactionStatus')) {
                obj['transactionStatus'] = ApiClient.convertToType(data['transactionStatus'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/ListUnconfirmedTransactionsByAddressRIBSEFee} fee
 */
ListUnconfirmedTransactionsByAddressRIBSE.prototype['fee'] = undefined;

/**
 * Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */
ListUnconfirmedTransactionsByAddressRIBSE.prototype['gasLimit'] = undefined;

/**
 * @member {module:model/ListConfirmedTransactionsByAddressRIBSEGasPrice} gasPrice
 */
ListUnconfirmedTransactionsByAddressRIBSE.prototype['gasPrice'] = undefined;

/**
 * Represents additional information that is required for the transaction.
 * @member {String} inputData
 */
ListUnconfirmedTransactionsByAddressRIBSE.prototype['inputData'] = undefined;

/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {Number} nonce
 */
ListUnconfirmedTransactionsByAddressRIBSE.prototype['nonce'] = undefined;

/**
 * String representation of the transaction status
 * @member {String} transactionStatus
 */
ListUnconfirmedTransactionsByAddressRIBSE.prototype['transactionStatus'] = undefined;






export default ListUnconfirmedTransactionsByAddressRIBSE;

