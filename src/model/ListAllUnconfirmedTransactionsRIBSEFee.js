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
 * The ListAllUnconfirmedTransactionsRIBSEFee model module.
 * @module model/ListAllUnconfirmedTransactionsRIBSEFee
 * @version 1.7.2
 */
class ListAllUnconfirmedTransactionsRIBSEFee {
    /**
     * Constructs a new <code>ListAllUnconfirmedTransactionsRIBSEFee</code>.
     * Object representation of the transaction fee
     * @alias module:model/ListAllUnconfirmedTransactionsRIBSEFee
     * @param amount {String} String representation of the fee value
     */
    constructor(amount) { 
        
        ListAllUnconfirmedTransactionsRIBSEFee.initialize(this, amount);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, amount) { 
        obj['amount'] = amount;
    }

    /**
     * Constructs a <code>ListAllUnconfirmedTransactionsRIBSEFee</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListAllUnconfirmedTransactionsRIBSEFee} obj Optional instance to populate.
     * @return {module:model/ListAllUnconfirmedTransactionsRIBSEFee} The populated <code>ListAllUnconfirmedTransactionsRIBSEFee</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListAllUnconfirmedTransactionsRIBSEFee();

            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
            }
        }
        return obj;
    }


}

/**
 * String representation of the fee value
 * @member {String} amount
 */
ListAllUnconfirmedTransactionsRIBSEFee.prototype['amount'] = undefined;






export default ListAllUnconfirmedTransactionsRIBSEFee;

