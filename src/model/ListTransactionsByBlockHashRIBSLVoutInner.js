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
import ListTransactionsByBlockHashRIBSLVoutInnerScriptPubKey from './ListTransactionsByBlockHashRIBSLVoutInnerScriptPubKey';

/**
 * The ListTransactionsByBlockHashRIBSLVoutInner model module.
 * @module model/ListTransactionsByBlockHashRIBSLVoutInner
 * @version 1.8.0
 */
class ListTransactionsByBlockHashRIBSLVoutInner {
    /**
     * Constructs a new <code>ListTransactionsByBlockHashRIBSLVoutInner</code>.
     * @alias module:model/ListTransactionsByBlockHashRIBSLVoutInner
     * @param isSpent {Boolean} Defines whether the output is spent or not.
     * @param scriptPubKey {module:model/ListTransactionsByBlockHashRIBSLVoutInnerScriptPubKey} 
     * @param value {String} Represents the sent/received amount.
     */
    constructor(isSpent, scriptPubKey, value) { 
        
        ListTransactionsByBlockHashRIBSLVoutInner.initialize(this, isSpent, scriptPubKey, value);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, isSpent, scriptPubKey, value) { 
        obj['isSpent'] = isSpent;
        obj['scriptPubKey'] = scriptPubKey;
        obj['value'] = value;
    }

    /**
     * Constructs a <code>ListTransactionsByBlockHashRIBSLVoutInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListTransactionsByBlockHashRIBSLVoutInner} obj Optional instance to populate.
     * @return {module:model/ListTransactionsByBlockHashRIBSLVoutInner} The populated <code>ListTransactionsByBlockHashRIBSLVoutInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListTransactionsByBlockHashRIBSLVoutInner();

            if (data.hasOwnProperty('isSpent')) {
                obj['isSpent'] = ApiClient.convertToType(data['isSpent'], 'Boolean');
            }
            if (data.hasOwnProperty('scriptPubKey')) {
                obj['scriptPubKey'] = ListTransactionsByBlockHashRIBSLVoutInnerScriptPubKey.constructFromObject(data['scriptPubKey']);
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Defines whether the output is spent or not.
 * @member {Boolean} isSpent
 */
ListTransactionsByBlockHashRIBSLVoutInner.prototype['isSpent'] = undefined;

/**
 * @member {module:model/ListTransactionsByBlockHashRIBSLVoutInnerScriptPubKey} scriptPubKey
 */
ListTransactionsByBlockHashRIBSLVoutInner.prototype['scriptPubKey'] = undefined;

/**
 * Represents the sent/received amount.
 * @member {String} value
 */
ListTransactionsByBlockHashRIBSLVoutInner.prototype['value'] = undefined;






export default ListTransactionsByBlockHashRIBSLVoutInner;

