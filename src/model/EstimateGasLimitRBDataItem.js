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
 * The EstimateGasLimitRBDataItem model module.
 * @module model/EstimateGasLimitRBDataItem
 * @version 1.9.0
 */
class EstimateGasLimitRBDataItem {
    /**
     * Constructs a new <code>EstimateGasLimitRBDataItem</code>.
     * @alias module:model/EstimateGasLimitRBDataItem
     * @param amount {String} Represents transactions' amount.
     * @param recipient {String} The address which receives this transaction. In UTXO-based protocols like Bitcoin there could be several senders while in account-based protocols like Ethereum there is always only one recipient.
     * @param sender {String} Represents the address which sends this transaction. In UTXO-based protocols like Bitcoin there could be several senders while in account-based protocols like Ethereum there is always only one sender.
     */
    constructor(amount, recipient, sender) { 
        
        EstimateGasLimitRBDataItem.initialize(this, amount, recipient, sender);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, amount, recipient, sender) { 
        obj['amount'] = amount;
        obj['recipient'] = recipient;
        obj['sender'] = sender;
    }

    /**
     * Constructs a <code>EstimateGasLimitRBDataItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EstimateGasLimitRBDataItem} obj Optional instance to populate.
     * @return {module:model/EstimateGasLimitRBDataItem} The populated <code>EstimateGasLimitRBDataItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EstimateGasLimitRBDataItem();

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
        }
        return obj;
    }


}

/**
 * Represents an optional field to add additonal data.
 * @member {String} additionalData
 */
EstimateGasLimitRBDataItem.prototype['additionalData'] = undefined;

/**
 * Represents transactions' amount.
 * @member {String} amount
 */
EstimateGasLimitRBDataItem.prototype['amount'] = undefined;

/**
 * The address which receives this transaction. In UTXO-based protocols like Bitcoin there could be several senders while in account-based protocols like Ethereum there is always only one recipient.
 * @member {String} recipient
 */
EstimateGasLimitRBDataItem.prototype['recipient'] = undefined;

/**
 * Represents the address which sends this transaction. In UTXO-based protocols like Bitcoin there could be several senders while in account-based protocols like Ethereum there is always only one sender.
 * @member {String} sender
 */
EstimateGasLimitRBDataItem.prototype['sender'] = undefined;






export default EstimateGasLimitRBDataItem;

