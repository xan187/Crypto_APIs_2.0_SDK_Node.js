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
 * The ListSyncedAddressesRI model module.
 * @module model/ListSyncedAddressesRI
 * @version 1.13.0
 */
class ListSyncedAddressesRI {
    /**
     * Constructs a new <code>ListSyncedAddressesRI</code>.
     * @alias module:model/ListSyncedAddressesRI
     * @param address {String} Represents the address.
     * @param index {Number} Represents the index position of the transaction in the specific block.
     */
    constructor(address, index) { 
        
        ListSyncedAddressesRI.initialize(this, address, index);
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
     * Constructs a <code>ListSyncedAddressesRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListSyncedAddressesRI} obj Optional instance to populate.
     * @return {module:model/ListSyncedAddressesRI} The populated <code>ListSyncedAddressesRI</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListSyncedAddressesRI();

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
 * Represents the address.
 * @member {String} address
 */
ListSyncedAddressesRI.prototype['address'] = undefined;

/**
 * Represents the index position of the transaction in the specific block.
 * @member {Number} index
 */
ListSyncedAddressesRI.prototype['index'] = undefined;






export default ListSyncedAddressesRI;

