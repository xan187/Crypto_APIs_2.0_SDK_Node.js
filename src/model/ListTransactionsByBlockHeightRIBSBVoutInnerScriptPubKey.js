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
 * The ListTransactionsByBlockHeightRIBSBVoutInnerScriptPubKey model module.
 * @module model/ListTransactionsByBlockHeightRIBSBVoutInnerScriptPubKey
 * @version 1.13.0
 */
class ListTransactionsByBlockHeightRIBSBVoutInnerScriptPubKey {
    /**
     * Constructs a new <code>ListTransactionsByBlockHeightRIBSBVoutInnerScriptPubKey</code>.
     * Represents the script public key.
     * @alias module:model/ListTransactionsByBlockHeightRIBSBVoutInnerScriptPubKey
     * @param addresses {Array.<String>} 
     * @param asm {String} Represents the assembly of the script public key of the address.
     * @param hex {String} Represents the hex of the script public key of the address.
     * @param type {String} Represents the script type.
     */
    constructor(addresses, asm, hex, type) { 
        
        ListTransactionsByBlockHeightRIBSBVoutInnerScriptPubKey.initialize(this, addresses, asm, hex, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, addresses, asm, hex, type) { 
        obj['addresses'] = addresses;
        obj['asm'] = asm;
        obj['hex'] = hex;
        obj['type'] = type;
    }

    /**
     * Constructs a <code>ListTransactionsByBlockHeightRIBSBVoutInnerScriptPubKey</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListTransactionsByBlockHeightRIBSBVoutInnerScriptPubKey} obj Optional instance to populate.
     * @return {module:model/ListTransactionsByBlockHeightRIBSBVoutInnerScriptPubKey} The populated <code>ListTransactionsByBlockHeightRIBSBVoutInnerScriptPubKey</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListTransactionsByBlockHeightRIBSBVoutInnerScriptPubKey();

            if (data.hasOwnProperty('addresses')) {
                obj['addresses'] = ApiClient.convertToType(data['addresses'], ['String']);
            }
            if (data.hasOwnProperty('asm')) {
                obj['asm'] = ApiClient.convertToType(data['asm'], 'String');
            }
            if (data.hasOwnProperty('hex')) {
                obj['hex'] = ApiClient.convertToType(data['hex'], 'String');
            }
            if (data.hasOwnProperty('reqSigs')) {
                obj['reqSigs'] = ApiClient.convertToType(data['reqSigs'], 'Number');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<String>} addresses
 */
ListTransactionsByBlockHeightRIBSBVoutInnerScriptPubKey.prototype['addresses'] = undefined;

/**
 * Represents the assembly of the script public key of the address.
 * @member {String} asm
 */
ListTransactionsByBlockHeightRIBSBVoutInnerScriptPubKey.prototype['asm'] = undefined;

/**
 * Represents the hex of the script public key of the address.
 * @member {String} hex
 */
ListTransactionsByBlockHeightRIBSBVoutInnerScriptPubKey.prototype['hex'] = undefined;

/**
 * Represents the required signatures.
 * @member {Number} reqSigs
 */
ListTransactionsByBlockHeightRIBSBVoutInnerScriptPubKey.prototype['reqSigs'] = undefined;

/**
 * Represents the script type.
 * @member {String} type
 */
ListTransactionsByBlockHeightRIBSBVoutInnerScriptPubKey.prototype['type'] = undefined;






export default ListTransactionsByBlockHeightRIBSBVoutInnerScriptPubKey;

