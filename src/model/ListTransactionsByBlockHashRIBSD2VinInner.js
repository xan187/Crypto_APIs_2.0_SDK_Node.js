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
import ListTransactionsByBlockHashRIBSD2VinInnerScriptSig from './ListTransactionsByBlockHashRIBSD2VinInnerScriptSig';

/**
 * The ListTransactionsByBlockHashRIBSD2VinInner model module.
 * @module model/ListTransactionsByBlockHashRIBSD2VinInner
 * @version 1.7.2
 */
class ListTransactionsByBlockHashRIBSD2VinInner {
    /**
     * Constructs a new <code>ListTransactionsByBlockHashRIBSD2VinInner</code>.
     * @alias module:model/ListTransactionsByBlockHashRIBSD2VinInner
     * @param addresses {Array.<String>} 
     * @param scriptSig {module:model/ListTransactionsByBlockHashRIBSD2VinInnerScriptSig} 
     * @param sequence {String} Represents the script sequence number.
     * @param txinwitness {Array.<String>} 
     * @param vout {Number} It refers to the index of the output address of this transaction. The index starts from 0.
     */
    constructor(addresses, scriptSig, sequence, txinwitness, vout) { 
        
        ListTransactionsByBlockHashRIBSD2VinInner.initialize(this, addresses, scriptSig, sequence, txinwitness, vout);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, addresses, scriptSig, sequence, txinwitness, vout) { 
        obj['addresses'] = addresses;
        obj['scriptSig'] = scriptSig;
        obj['sequence'] = sequence;
        obj['txinwitness'] = txinwitness;
        obj['vout'] = vout;
    }

    /**
     * Constructs a <code>ListTransactionsByBlockHashRIBSD2VinInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListTransactionsByBlockHashRIBSD2VinInner} obj Optional instance to populate.
     * @return {module:model/ListTransactionsByBlockHashRIBSD2VinInner} The populated <code>ListTransactionsByBlockHashRIBSD2VinInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListTransactionsByBlockHashRIBSD2VinInner();

            if (data.hasOwnProperty('addresses')) {
                obj['addresses'] = ApiClient.convertToType(data['addresses'], ['String']);
            }
            if (data.hasOwnProperty('coinbase')) {
                obj['coinbase'] = ApiClient.convertToType(data['coinbase'], 'String');
            }
            if (data.hasOwnProperty('scriptSig')) {
                obj['scriptSig'] = ListTransactionsByBlockHashRIBSD2VinInnerScriptSig.constructFromObject(data['scriptSig']);
            }
            if (data.hasOwnProperty('sequence')) {
                obj['sequence'] = ApiClient.convertToType(data['sequence'], 'String');
            }
            if (data.hasOwnProperty('txid')) {
                obj['txid'] = ApiClient.convertToType(data['txid'], 'String');
            }
            if (data.hasOwnProperty('txinwitness')) {
                obj['txinwitness'] = ApiClient.convertToType(data['txinwitness'], ['String']);
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
            if (data.hasOwnProperty('vout')) {
                obj['vout'] = ApiClient.convertToType(data['vout'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<String>} addresses
 */
ListTransactionsByBlockHashRIBSD2VinInner.prototype['addresses'] = undefined;

/**
 * Represents the coinbase hex.
 * @member {String} coinbase
 */
ListTransactionsByBlockHashRIBSD2VinInner.prototype['coinbase'] = undefined;

/**
 * @member {module:model/ListTransactionsByBlockHashRIBSD2VinInnerScriptSig} scriptSig
 */
ListTransactionsByBlockHashRIBSD2VinInner.prototype['scriptSig'] = undefined;

/**
 * Represents the script sequence number.
 * @member {String} sequence
 */
ListTransactionsByBlockHashRIBSD2VinInner.prototype['sequence'] = undefined;

/**
 * Represents the reference transaction identifier.
 * @member {String} txid
 */
ListTransactionsByBlockHashRIBSD2VinInner.prototype['txid'] = undefined;

/**
 * @member {Array.<String>} txinwitness
 */
ListTransactionsByBlockHashRIBSD2VinInner.prototype['txinwitness'] = undefined;

/**
 * Represents the sent/received amount.
 * @member {String} value
 */
ListTransactionsByBlockHashRIBSD2VinInner.prototype['value'] = undefined;

/**
 * It refers to the index of the output address of this transaction. The index starts from 0.
 * @member {Number} vout
 */
ListTransactionsByBlockHashRIBSD2VinInner.prototype['vout'] = undefined;






export default ListTransactionsByBlockHashRIBSD2VinInner;

