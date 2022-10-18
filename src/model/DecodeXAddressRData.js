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
import DecodeXAddressRI from './DecodeXAddressRI';

/**
 * The DecodeXAddressRData model module.
 * @module model/DecodeXAddressRData
 * @version 1.9.0
 */
class DecodeXAddressRData {
    /**
     * Constructs a new <code>DecodeXAddressRData</code>.
     * @alias module:model/DecodeXAddressRData
     * @param item {module:model/DecodeXAddressRI} 
     */
    constructor(item) { 
        
        DecodeXAddressRData.initialize(this, item);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, item) { 
        obj['item'] = item;
    }

    /**
     * Constructs a <code>DecodeXAddressRData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DecodeXAddressRData} obj Optional instance to populate.
     * @return {module:model/DecodeXAddressRData} The populated <code>DecodeXAddressRData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DecodeXAddressRData();

            if (data.hasOwnProperty('item')) {
                obj['item'] = DecodeXAddressRI.constructFromObject(data['item']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/DecodeXAddressRI} item
 */
DecodeXAddressRData.prototype['item'] = undefined;






export default DecodeXAddressRData;

