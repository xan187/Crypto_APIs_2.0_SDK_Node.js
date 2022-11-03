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
 * The DecodeXAddressRI model module.
 * @module model/DecodeXAddressRI
 * @version 1.10.0
 */
class DecodeXAddressRI {
    /**
     * Constructs a new <code>DecodeXAddressRI</code>.
     * @alias module:model/DecodeXAddressRI
     * @param addressTag {Number} Defines a specific Tag that is an additional XRP address feature. It helps identifying a transaction recipient beyond a wallet address.
     * @param classicAddress {String} Represents the public address, which is a compressed and shortened form of a public key.
     */
    constructor(addressTag, classicAddress) { 
        
        DecodeXAddressRI.initialize(this, addressTag, classicAddress);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, addressTag, classicAddress) { 
        obj['addressTag'] = addressTag;
        obj['classicAddress'] = classicAddress;
    }

    /**
     * Constructs a <code>DecodeXAddressRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DecodeXAddressRI} obj Optional instance to populate.
     * @return {module:model/DecodeXAddressRI} The populated <code>DecodeXAddressRI</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DecodeXAddressRI();

            if (data.hasOwnProperty('addressTag')) {
                obj['addressTag'] = ApiClient.convertToType(data['addressTag'], 'Number');
            }
            if (data.hasOwnProperty('classicAddress')) {
                obj['classicAddress'] = ApiClient.convertToType(data['classicAddress'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Defines a specific Tag that is an additional XRP address feature. It helps identifying a transaction recipient beyond a wallet address.
 * @member {Number} addressTag
 */
DecodeXAddressRI.prototype['addressTag'] = undefined;

/**
 * Represents the public address, which is a compressed and shortened form of a public key.
 * @member {String} classicAddress
 */
DecodeXAddressRI.prototype['classicAddress'] = undefined;






export default DecodeXAddressRI;

