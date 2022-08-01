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
 * The DecodeRawTransactionHexRISZVoutInnerScriptPubKey model module.
 * @module model/DecodeRawTransactionHexRISZVoutInnerScriptPubKey
 * @version 1.7.2
 */
class DecodeRawTransactionHexRISZVoutInnerScriptPubKey {
    /**
     * Constructs a new <code>DecodeRawTransactionHexRISZVoutInnerScriptPubKey</code>.
     * Represents the script public key.
     * @alias module:model/DecodeRawTransactionHexRISZVoutInnerScriptPubKey
     */
    constructor() { 
        
        DecodeRawTransactionHexRISZVoutInnerScriptPubKey.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DecodeRawTransactionHexRISZVoutInnerScriptPubKey</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DecodeRawTransactionHexRISZVoutInnerScriptPubKey} obj Optional instance to populate.
     * @return {module:model/DecodeRawTransactionHexRISZVoutInnerScriptPubKey} The populated <code>DecodeRawTransactionHexRISZVoutInnerScriptPubKey</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DecodeRawTransactionHexRISZVoutInnerScriptPubKey();

            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('asm')) {
                obj['asm'] = ApiClient.convertToType(data['asm'], 'String');
            }
            if (data.hasOwnProperty('hex')) {
                obj['hex'] = ApiClient.convertToType(data['hex'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Represents the address which send the amount.
 * @member {String} address
 */
DecodeRawTransactionHexRISZVoutInnerScriptPubKey.prototype['address'] = undefined;

/**
 * Represents the assembly of the script public key of the address.
 * @member {String} asm
 */
DecodeRawTransactionHexRISZVoutInnerScriptPubKey.prototype['asm'] = undefined;

/**
 * Represents the hex of the script public key of the address.
 * @member {String} hex
 */
DecodeRawTransactionHexRISZVoutInnerScriptPubKey.prototype['hex'] = undefined;

/**
 * Represents the script type.
 * @member {String} type
 */
DecodeRawTransactionHexRISZVoutInnerScriptPubKey.prototype['type'] = undefined;






export default DecodeRawTransactionHexRISZVoutInnerScriptPubKey;

