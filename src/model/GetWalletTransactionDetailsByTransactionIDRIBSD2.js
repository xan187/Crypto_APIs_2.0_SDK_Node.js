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
import GetTransactionDetailsByTransactionIDRIBSD2VoutInner from './GetTransactionDetailsByTransactionIDRIBSD2VoutInner';
import GetWalletTransactionDetailsByTransactionIDRIBSD2VinInner from './GetWalletTransactionDetailsByTransactionIDRIBSD2VinInner';

/**
 * The GetWalletTransactionDetailsByTransactionIDRIBSD2 model module.
 * @module model/GetWalletTransactionDetailsByTransactionIDRIBSD2
 * @version 1.7.2
 */
class GetWalletTransactionDetailsByTransactionIDRIBSD2 {
    /**
     * Constructs a new <code>GetWalletTransactionDetailsByTransactionIDRIBSD2</code>.
     * Dash
     * @alias module:model/GetWalletTransactionDetailsByTransactionIDRIBSD2
     * @param locktime {Number} Represents the time at which a particular transaction can be added to the blockchain.
     * @param size {Number} Represents the total size of this transaction.
     * @param version {Number} Represents the transaction version number.
     * @param vin {Array.<module:model/GetWalletTransactionDetailsByTransactionIDRIBSD2VinInner>} Object Array representation of transaction inputs
     * @param vout {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSD2VoutInner>} Object Array representation of transaction outputs
     */
    constructor(locktime, size, version, vin, vout) { 
        
        GetWalletTransactionDetailsByTransactionIDRIBSD2.initialize(this, locktime, size, version, vin, vout);
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
     * Constructs a <code>GetWalletTransactionDetailsByTransactionIDRIBSD2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetWalletTransactionDetailsByTransactionIDRIBSD2} obj Optional instance to populate.
     * @return {module:model/GetWalletTransactionDetailsByTransactionIDRIBSD2} The populated <code>GetWalletTransactionDetailsByTransactionIDRIBSD2</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetWalletTransactionDetailsByTransactionIDRIBSD2();

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
                obj['vin'] = ApiClient.convertToType(data['vin'], [GetWalletTransactionDetailsByTransactionIDRIBSD2VinInner]);
            }
            if (data.hasOwnProperty('vout')) {
                obj['vout'] = ApiClient.convertToType(data['vout'], [GetTransactionDetailsByTransactionIDRIBSD2VoutInner]);
            }
        }
        return obj;
    }


}

/**
 * Represents the time at which a particular transaction can be added to the blockchain.
 * @member {Number} locktime
 */
GetWalletTransactionDetailsByTransactionIDRIBSD2.prototype['locktime'] = undefined;

/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
GetWalletTransactionDetailsByTransactionIDRIBSD2.prototype['size'] = undefined;

/**
 * Represents the transaction version number.
 * @member {Number} version
 */
GetWalletTransactionDetailsByTransactionIDRIBSD2.prototype['version'] = undefined;

/**
 * Object Array representation of transaction inputs
 * @member {Array.<module:model/GetWalletTransactionDetailsByTransactionIDRIBSD2VinInner>} vin
 */
GetWalletTransactionDetailsByTransactionIDRIBSD2.prototype['vin'] = undefined;

/**
 * Object Array representation of transaction outputs
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSD2VoutInner>} vout
 */
GetWalletTransactionDetailsByTransactionIDRIBSD2.prototype['vout'] = undefined;






export default GetWalletTransactionDetailsByTransactionIDRIBSD2;

