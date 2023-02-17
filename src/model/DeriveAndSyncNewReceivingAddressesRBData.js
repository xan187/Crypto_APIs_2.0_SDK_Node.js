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
import DeriveAndSyncNewReceivingAddressesRBDataItem from './DeriveAndSyncNewReceivingAddressesRBDataItem';

/**
 * The DeriveAndSyncNewReceivingAddressesRBData model module.
 * @module model/DeriveAndSyncNewReceivingAddressesRBData
 * @version 1.13.0
 */
class DeriveAndSyncNewReceivingAddressesRBData {
    /**
     * Constructs a new <code>DeriveAndSyncNewReceivingAddressesRBData</code>.
     * @alias module:model/DeriveAndSyncNewReceivingAddressesRBData
     * @param item {module:model/DeriveAndSyncNewReceivingAddressesRBDataItem} 
     */
    constructor(item) { 
        
        DeriveAndSyncNewReceivingAddressesRBData.initialize(this, item);
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
     * Constructs a <code>DeriveAndSyncNewReceivingAddressesRBData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeriveAndSyncNewReceivingAddressesRBData} obj Optional instance to populate.
     * @return {module:model/DeriveAndSyncNewReceivingAddressesRBData} The populated <code>DeriveAndSyncNewReceivingAddressesRBData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeriveAndSyncNewReceivingAddressesRBData();

            if (data.hasOwnProperty('item')) {
                obj['item'] = DeriveAndSyncNewReceivingAddressesRBDataItem.constructFromObject(data['item']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/DeriveAndSyncNewReceivingAddressesRBDataItem} item
 */
DeriveAndSyncNewReceivingAddressesRBData.prototype['item'] = undefined;






export default DeriveAndSyncNewReceivingAddressesRBData;

