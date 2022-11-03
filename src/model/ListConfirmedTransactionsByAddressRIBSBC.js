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
import GetTransactionDetailsByTransactionIDRIBSBCVoutInner from './GetTransactionDetailsByTransactionIDRIBSBCVoutInner';
import ListConfirmedTransactionsByAddressRIBSBCVinInner from './ListConfirmedTransactionsByAddressRIBSBCVinInner';

/**
 * The ListConfirmedTransactionsByAddressRIBSBC model module.
 * @module model/ListConfirmedTransactionsByAddressRIBSBC
 * @version 1.10.0
 */
class ListConfirmedTransactionsByAddressRIBSBC {
    /**
     * Constructs a new <code>ListConfirmedTransactionsByAddressRIBSBC</code>.
     * Bitcoin Cash
     * @alias module:model/ListConfirmedTransactionsByAddressRIBSBC
     * @param locktime {Number} Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
     * @param size {Number} Represents the total size of this transaction.
     * @param version {Number} Represents the transaction's version number.
     * @param vin {Array.<module:model/ListConfirmedTransactionsByAddressRIBSBCVinInner>} Represents the transaction inputs.
     */
    constructor(locktime, size, version, vin) { 
        
        ListConfirmedTransactionsByAddressRIBSBC.initialize(this, locktime, size, version, vin);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, locktime, size, version, vin) { 
        obj['locktime'] = locktime;
        obj['size'] = size;
        obj['version'] = version;
        obj['vin'] = vin;
    }

    /**
     * Constructs a <code>ListConfirmedTransactionsByAddressRIBSBC</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListConfirmedTransactionsByAddressRIBSBC} obj Optional instance to populate.
     * @return {module:model/ListConfirmedTransactionsByAddressRIBSBC} The populated <code>ListConfirmedTransactionsByAddressRIBSBC</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListConfirmedTransactionsByAddressRIBSBC();

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
                obj['vin'] = ApiClient.convertToType(data['vin'], [ListConfirmedTransactionsByAddressRIBSBCVinInner]);
            }
            if (data.hasOwnProperty('vout')) {
                obj['vout'] = ApiClient.convertToType(data['vout'], [GetTransactionDetailsByTransactionIDRIBSBCVoutInner]);
            }
        }
        return obj;
    }


}

/**
 * Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
 * @member {Number} locktime
 */
ListConfirmedTransactionsByAddressRIBSBC.prototype['locktime'] = undefined;

/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
ListConfirmedTransactionsByAddressRIBSBC.prototype['size'] = undefined;

/**
 * Represents the transaction's version number.
 * @member {Number} version
 */
ListConfirmedTransactionsByAddressRIBSBC.prototype['version'] = undefined;

/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/ListConfirmedTransactionsByAddressRIBSBCVinInner>} vin
 */
ListConfirmedTransactionsByAddressRIBSBC.prototype['vin'] = undefined;

/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSBCVoutInner>} vout
 */
ListConfirmedTransactionsByAddressRIBSBC.prototype['vout'] = undefined;






export default ListConfirmedTransactionsByAddressRIBSBC;

