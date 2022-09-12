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
 * The DeriveHDWalletXPubYPubZPubChangeOrReceivingAddressesRIAddressesInner model module.
 * @module model/DeriveHDWalletXPubYPubZPubChangeOrReceivingAddressesRIAddressesInner
 * @version 1.8.0
 */
class DeriveHDWalletXPubYPubZPubChangeOrReceivingAddressesRIAddressesInner {
    /**
     * Constructs a new <code>DeriveHDWalletXPubYPubZPubChangeOrReceivingAddressesRIAddressesInner</code>.
     * @alias module:model/DeriveHDWalletXPubYPubZPubChangeOrReceivingAddressesRIAddressesInner
     * @param address {String} Represents the public address, which is a compressed and shortened form of a public key.
     * @param index {Number} Represents the output index. It refers to the UTXO sequence in the transaction outputs (vout).
     */
    constructor(address, index) { 
        
        DeriveHDWalletXPubYPubZPubChangeOrReceivingAddressesRIAddressesInner.initialize(this, address, index);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, address, index) { 
        obj['address'] = address;
        obj['index'] = index;
    }

    /**
     * Constructs a <code>DeriveHDWalletXPubYPubZPubChangeOrReceivingAddressesRIAddressesInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeriveHDWalletXPubYPubZPubChangeOrReceivingAddressesRIAddressesInner} obj Optional instance to populate.
     * @return {module:model/DeriveHDWalletXPubYPubZPubChangeOrReceivingAddressesRIAddressesInner} The populated <code>DeriveHDWalletXPubYPubZPubChangeOrReceivingAddressesRIAddressesInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeriveHDWalletXPubYPubZPubChangeOrReceivingAddressesRIAddressesInner();

            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('index')) {
                obj['index'] = ApiClient.convertToType(data['index'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Represents the public address, which is a compressed and shortened form of a public key.
 * @member {String} address
 */
DeriveHDWalletXPubYPubZPubChangeOrReceivingAddressesRIAddressesInner.prototype['address'] = undefined;

/**
 * Represents the output index. It refers to the UTXO sequence in the transaction outputs (vout).
 * @member {Number} index
 */
DeriveHDWalletXPubYPubZPubChangeOrReceivingAddressesRIAddressesInner.prototype['index'] = undefined;






export default DeriveHDWalletXPubYPubZPubChangeOrReceivingAddressesRIAddressesInner;

