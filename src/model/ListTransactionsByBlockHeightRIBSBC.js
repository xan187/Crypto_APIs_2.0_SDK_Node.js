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
import ListTransactionsByBlockHashRIBSBCVinInner from './ListTransactionsByBlockHashRIBSBCVinInner';
import ListTransactionsByBlockHashRIBSBCVoutInner from './ListTransactionsByBlockHashRIBSBCVoutInner';

/**
 * The ListTransactionsByBlockHeightRIBSBC model module.
 * @module model/ListTransactionsByBlockHeightRIBSBC
 * @version 1.8.0
 */
class ListTransactionsByBlockHeightRIBSBC {
    /**
     * Constructs a new <code>ListTransactionsByBlockHeightRIBSBC</code>.
     * Bitcoin Cash
     * @alias module:model/ListTransactionsByBlockHeightRIBSBC
     * @param locktime {Number} Represents the time at which a particular transaction can be added to the blockchain.
     * @param size {Number} Represents the total size of this transaction.
     * @param version {Number} Represents the total size of this transaction.
     * @param vin {Array.<module:model/ListTransactionsByBlockHashRIBSBCVinInner>} Represents the transaction inputs.
     * @param vout {Array.<module:model/ListTransactionsByBlockHashRIBSBCVoutInner>} Represents the transaction outputs.
     */
    constructor(locktime, size, version, vin, vout) { 
        
        ListTransactionsByBlockHeightRIBSBC.initialize(this, locktime, size, version, vin, vout);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, locktime, size, version, vin, vout) { 
        obj['locktime'] = locktime;
        obj['size'] = size;
        obj['version'] = version;
        obj['vin'] = vin;
        obj['vout'] = vout;
    }

    /**
     * Constructs a <code>ListTransactionsByBlockHeightRIBSBC</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListTransactionsByBlockHeightRIBSBC} obj Optional instance to populate.
     * @return {module:model/ListTransactionsByBlockHeightRIBSBC} The populated <code>ListTransactionsByBlockHeightRIBSBC</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListTransactionsByBlockHeightRIBSBC();

            if (data.hasOwnProperty('locktime')) {
                obj['locktime'] = ApiClient.convertToType(data['locktime'], 'Number');
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'Number');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'Number');
            }
            if (data.hasOwnProperty('vin')) {
                obj['vin'] = ApiClient.convertToType(data['vin'], [ListTransactionsByBlockHashRIBSBCVinInner]);
            }
            if (data.hasOwnProperty('vout')) {
                obj['vout'] = ApiClient.convertToType(data['vout'], [ListTransactionsByBlockHashRIBSBCVoutInner]);
            }
        }
        return obj;
    }


}

/**
 * Represents the time at which a particular transaction can be added to the blockchain.
 * @member {Number} locktime
 */
ListTransactionsByBlockHeightRIBSBC.prototype['locktime'] = undefined;

/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
ListTransactionsByBlockHeightRIBSBC.prototype['size'] = undefined;

/**
 * Represents the total size of this transaction.
 * @member {Number} version
 */
ListTransactionsByBlockHeightRIBSBC.prototype['version'] = undefined;

/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/ListTransactionsByBlockHashRIBSBCVinInner>} vin
 */
ListTransactionsByBlockHeightRIBSBC.prototype['vin'] = undefined;

/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/ListTransactionsByBlockHashRIBSBCVoutInner>} vout
 */
ListTransactionsByBlockHeightRIBSBC.prototype['vout'] = undefined;






export default ListTransactionsByBlockHeightRIBSBC;

