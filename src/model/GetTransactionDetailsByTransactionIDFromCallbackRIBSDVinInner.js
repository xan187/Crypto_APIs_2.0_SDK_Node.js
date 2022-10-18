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
import GetTransactionDetailsByTransactionIDRIBSD2VinInnerScriptSig from './GetTransactionDetailsByTransactionIDRIBSD2VinInnerScriptSig';

/**
 * The GetTransactionDetailsByTransactionIDFromCallbackRIBSDVinInner model module.
 * @module model/GetTransactionDetailsByTransactionIDFromCallbackRIBSDVinInner
 * @version 1.9.0
 */
class GetTransactionDetailsByTransactionIDFromCallbackRIBSDVinInner {
    /**
     * Constructs a new <code>GetTransactionDetailsByTransactionIDFromCallbackRIBSDVinInner</code>.
     * @alias module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSDVinInner
     * @param addresses {Array.<String>} 
     * @param scriptSig {module:model/GetTransactionDetailsByTransactionIDRIBSD2VinInnerScriptSig} 
     * @param sequence {Number} Represents the script sequence number.
     * @param txinwitness {Array.<String>} 
     */
    constructor(addresses, scriptSig, sequence, txinwitness) { 
        
        GetTransactionDetailsByTransactionIDFromCallbackRIBSDVinInner.initialize(this, addresses, scriptSig, sequence, txinwitness);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, addresses, scriptSig, sequence, txinwitness) { 
        obj['addresses'] = addresses;
        obj['scriptSig'] = scriptSig;
        obj['sequence'] = sequence;
        obj['txinwitness'] = txinwitness;
    }

    /**
     * Constructs a <code>GetTransactionDetailsByTransactionIDFromCallbackRIBSDVinInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSDVinInner} obj Optional instance to populate.
     * @return {module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSDVinInner} The populated <code>GetTransactionDetailsByTransactionIDFromCallbackRIBSDVinInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetTransactionDetailsByTransactionIDFromCallbackRIBSDVinInner();

            if (data.hasOwnProperty('addresses')) {
                obj['addresses'] = ApiClient.convertToType(data['addresses'], ['String']);
            }
            if (data.hasOwnProperty('coinbase')) {
                obj['coinbase'] = ApiClient.convertToType(data['coinbase'], 'String');
            }
            if (data.hasOwnProperty('scriptSig')) {
                obj['scriptSig'] = GetTransactionDetailsByTransactionIDRIBSD2VinInnerScriptSig.constructFromObject(data['scriptSig']);
            }
            if (data.hasOwnProperty('sequence')) {
                obj['sequence'] = ApiClient.convertToType(data['sequence'], 'Number');
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
GetTransactionDetailsByTransactionIDFromCallbackRIBSDVinInner.prototype['addresses'] = undefined;

/**
 * Represents the coinbase hex.
 * @member {String} coinbase
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBSDVinInner.prototype['coinbase'] = undefined;

/**
 * @member {module:model/GetTransactionDetailsByTransactionIDRIBSD2VinInnerScriptSig} scriptSig
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBSDVinInner.prototype['scriptSig'] = undefined;

/**
 * Represents the script sequence number.
 * @member {Number} sequence
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBSDVinInner.prototype['sequence'] = undefined;

/**
 * String representation of the txid
 * @member {String} txid
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBSDVinInner.prototype['txid'] = undefined;

/**
 * @member {Array.<String>} txinwitness
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBSDVinInner.prototype['txinwitness'] = undefined;

/**
 * Represents the sent/received amount.
 * @member {String} value
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBSDVinInner.prototype['value'] = undefined;

/**
 * It refers to the index of the output address of this transaction. The index starts from 0.
 * @member {Number} vout
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBSDVinInner.prototype['vout'] = undefined;






export default GetTransactionDetailsByTransactionIDFromCallbackRIBSDVinInner;

