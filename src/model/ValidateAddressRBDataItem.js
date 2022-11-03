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
 * The ValidateAddressRBDataItem model module.
 * @module model/ValidateAddressRBDataItem
 * @version 1.10.0
 */
class ValidateAddressRBDataItem {
    /**
     * Constructs a new <code>ValidateAddressRBDataItem</code>.
     * @alias module:model/ValidateAddressRBDataItem
     * @param address {String} Represents the specific address that will be checked if it's valid or not.
     */
    constructor(address) { 
        
        ValidateAddressRBDataItem.initialize(this, address);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, address) { 
        obj['address'] = address;
    }

    /**
     * Constructs a <code>ValidateAddressRBDataItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ValidateAddressRBDataItem} obj Optional instance to populate.
     * @return {module:model/ValidateAddressRBDataItem} The populated <code>ValidateAddressRBDataItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ValidateAddressRBDataItem();

            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Represents the specific address that will be checked if it's valid or not.
 * @member {String} address
 */
ValidateAddressRBDataItem.prototype['address'] = undefined;






export default ValidateAddressRBDataItem;

