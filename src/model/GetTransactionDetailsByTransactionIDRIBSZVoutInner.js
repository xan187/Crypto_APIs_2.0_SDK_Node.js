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
import GetTransactionDetailsByTransactionIDRIBSZVoutInnerScriptPubKey from './GetTransactionDetailsByTransactionIDRIBSZVoutInnerScriptPubKey';

/**
 * The GetTransactionDetailsByTransactionIDRIBSZVoutInner model module.
 * @module model/GetTransactionDetailsByTransactionIDRIBSZVoutInner
 * @version 1.13.0
 */
class GetTransactionDetailsByTransactionIDRIBSZVoutInner {
    /**
     * Constructs a new <code>GetTransactionDetailsByTransactionIDRIBSZVoutInner</code>.
     * @alias module:model/GetTransactionDetailsByTransactionIDRIBSZVoutInner
     * @param isSpent {Boolean} Defines whether the transaction output has been spent or not.
     * @param scriptPubKey {module:model/GetTransactionDetailsByTransactionIDRIBSZVoutInnerScriptPubKey} 
     * @param value {String} Represents the specific amount.
     */
    constructor(isSpent, scriptPubKey, value) { 
        
        GetTransactionDetailsByTransactionIDRIBSZVoutInner.initialize(this, isSpent, scriptPubKey, value);
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
     * Constructs a <code>GetTransactionDetailsByTransactionIDRIBSZVoutInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetTransactionDetailsByTransactionIDRIBSZVoutInner} obj Optional instance to populate.
     * @return {module:model/GetTransactionDetailsByTransactionIDRIBSZVoutInner} The populated <code>GetTransactionDetailsByTransactionIDRIBSZVoutInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetTransactionDetailsByTransactionIDRIBSZVoutInner();

            if (data.hasOwnProperty('isSpent')) {
                obj['isSpent'] = ApiClient.convertToType(data['isSpent'], 'Boolean');
            }
            if (data.hasOwnProperty('scriptPubKey')) {
                obj['scriptPubKey'] = GetTransactionDetailsByTransactionIDRIBSZVoutInnerScriptPubKey.constructFromObject(data['scriptPubKey']);
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Defines whether the transaction output has been spent or not.
 * @member {Boolean} isSpent
 */
GetTransactionDetailsByTransactionIDRIBSZVoutInner.prototype['isSpent'] = undefined;

/**
 * @member {module:model/GetTransactionDetailsByTransactionIDRIBSZVoutInnerScriptPubKey} scriptPubKey
 */
GetTransactionDetailsByTransactionIDRIBSZVoutInner.prototype['scriptPubKey'] = undefined;

/**
 * Represents the specific amount.
 * @member {String} value
 */
GetTransactionDetailsByTransactionIDRIBSZVoutInner.prototype['value'] = undefined;






export default GetTransactionDetailsByTransactionIDRIBSZVoutInner;

