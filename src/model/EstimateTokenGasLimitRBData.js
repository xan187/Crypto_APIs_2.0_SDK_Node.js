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
import EstimateTokenGasLimitRBDataItem from './EstimateTokenGasLimitRBDataItem';

/**
 * The EstimateTokenGasLimitRBData model module.
 * @module model/EstimateTokenGasLimitRBData
 * @version 1.9.0
 */
class EstimateTokenGasLimitRBData {
    /**
     * Constructs a new <code>EstimateTokenGasLimitRBData</code>.
     * @alias module:model/EstimateTokenGasLimitRBData
     * @param item {module:model/EstimateTokenGasLimitRBDataItem} 
     */
    constructor(item) { 
        
        EstimateTokenGasLimitRBData.initialize(this, item);
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
     * Constructs a <code>EstimateTokenGasLimitRBData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EstimateTokenGasLimitRBData} obj Optional instance to populate.
     * @return {module:model/EstimateTokenGasLimitRBData} The populated <code>EstimateTokenGasLimitRBData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EstimateTokenGasLimitRBData();

            if (data.hasOwnProperty('item')) {
                obj['item'] = EstimateTokenGasLimitRBDataItem.constructFromObject(data['item']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/EstimateTokenGasLimitRBDataItem} item
 */
EstimateTokenGasLimitRBData.prototype['item'] = undefined;






export default EstimateTokenGasLimitRBData;

