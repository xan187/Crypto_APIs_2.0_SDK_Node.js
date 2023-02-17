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
import CreateAutomaticCoinsForwardingRBDataItem from './CreateAutomaticCoinsForwardingRBDataItem';

/**
 * The CreateAutomaticCoinsForwardingRBData model module.
 * @module model/CreateAutomaticCoinsForwardingRBData
 * @version 1.13.0
 */
class CreateAutomaticCoinsForwardingRBData {
    /**
     * Constructs a new <code>CreateAutomaticCoinsForwardingRBData</code>.
     * @alias module:model/CreateAutomaticCoinsForwardingRBData
     * @param item {module:model/CreateAutomaticCoinsForwardingRBDataItem} 
     */
    constructor(item) { 
        
        CreateAutomaticCoinsForwardingRBData.initialize(this, item);
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
     * Constructs a <code>CreateAutomaticCoinsForwardingRBData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateAutomaticCoinsForwardingRBData} obj Optional instance to populate.
     * @return {module:model/CreateAutomaticCoinsForwardingRBData} The populated <code>CreateAutomaticCoinsForwardingRBData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateAutomaticCoinsForwardingRBData();

            if (data.hasOwnProperty('item')) {
                obj['item'] = CreateAutomaticCoinsForwardingRBDataItem.constructFromObject(data['item']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/CreateAutomaticCoinsForwardingRBDataItem} item
 */
CreateAutomaticCoinsForwardingRBData.prototype['item'] = undefined;






export default CreateAutomaticCoinsForwardingRBData;

