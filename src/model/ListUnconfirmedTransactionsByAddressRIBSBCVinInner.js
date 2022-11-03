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
import GetTransactionDetailsByTransactionIDRIBSBVinInnerScriptSig from './GetTransactionDetailsByTransactionIDRIBSBVinInnerScriptSig';

/**
 * The ListUnconfirmedTransactionsByAddressRIBSBCVinInner model module.
 * @module model/ListUnconfirmedTransactionsByAddressRIBSBCVinInner
 * @version 1.10.0
 */
class ListUnconfirmedTransactionsByAddressRIBSBCVinInner {
    /**
     * Constructs a new <code>ListUnconfirmedTransactionsByAddressRIBSBCVinInner</code>.
     * @alias module:model/ListUnconfirmedTransactionsByAddressRIBSBCVinInner
     * @param addresses {Array.<String>} 
     * @param scriptSig {module:model/GetTransactionDetailsByTransactionIDRIBSBVinInnerScriptSig} 
     * @param sequence {String} Represents the script sequence number.
     * @param txid {String} String representation of the txid
     * @param txinwitness {Array.<String>} 
     * @param value {String} Represents the sent/received amount.
     * @param vout {Number} Defines the vout of the transaction output, i.e. which output to spend.
     */
    constructor(addresses, scriptSig, sequence, txid, txinwitness, value, vout) { 
        
        ListUnconfirmedTransactionsByAddressRIBSBCVinInner.initialize(this, addresses, scriptSig, sequence, txid, txinwitness, value, vout);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, addresses, scriptSig, sequence, txid, txinwitness, value, vout) { 
        obj['addresses'] = addresses;
        obj['scriptSig'] = scriptSig;
        obj['sequence'] = sequence;
        obj['txid'] = txid;
        obj['txinwitness'] = txinwitness;
        obj['value'] = value;
        obj['vout'] = vout;
    }

    /**
     * Constructs a <code>ListUnconfirmedTransactionsByAddressRIBSBCVinInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListUnconfirmedTransactionsByAddressRIBSBCVinInner} obj Optional instance to populate.
     * @return {module:model/ListUnconfirmedTransactionsByAddressRIBSBCVinInner} The populated <code>ListUnconfirmedTransactionsByAddressRIBSBCVinInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListUnconfirmedTransactionsByAddressRIBSBCVinInner();

            if (data.hasOwnProperty('addresses')) {
                obj['addresses'] = ApiClient.convertToType(data['addresses'], ['String']);
            }
            if (data.hasOwnProperty('scriptSig')) {
                obj['scriptSig'] = GetTransactionDetailsByTransactionIDRIBSBVinInnerScriptSig.constructFromObject(data['scriptSig']);
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
ListUnconfirmedTransactionsByAddressRIBSBCVinInner.prototype['addresses'] = undefined;

/**
 * @member {module:model/GetTransactionDetailsByTransactionIDRIBSBVinInnerScriptSig} scriptSig
 */
ListUnconfirmedTransactionsByAddressRIBSBCVinInner.prototype['scriptSig'] = undefined;

/**
 * Represents the script sequence number.
 * @member {String} sequence
 */
ListUnconfirmedTransactionsByAddressRIBSBCVinInner.prototype['sequence'] = undefined;

/**
 * String representation of the txid
 * @member {String} txid
 */
ListUnconfirmedTransactionsByAddressRIBSBCVinInner.prototype['txid'] = undefined;

/**
 * @member {Array.<String>} txinwitness
 */
ListUnconfirmedTransactionsByAddressRIBSBCVinInner.prototype['txinwitness'] = undefined;

/**
 * Represents the sent/received amount.
 * @member {String} value
 */
ListUnconfirmedTransactionsByAddressRIBSBCVinInner.prototype['value'] = undefined;

/**
 * Defines the vout of the transaction output, i.e. which output to spend.
 * @member {Number} vout
 */
ListUnconfirmedTransactionsByAddressRIBSBCVinInner.prototype['vout'] = undefined;






export default ListUnconfirmedTransactionsByAddressRIBSBCVinInner;

