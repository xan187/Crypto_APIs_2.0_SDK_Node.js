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
import NewRevertedBlockRI from './NewRevertedBlockRI';

/**
 * The NewRevertedBlockRData model module.
 * @module model/NewRevertedBlockRData
 * @version 1.9.0
 */
class NewRevertedBlockRData {
    /**
     * Constructs a new <code>NewRevertedBlockRData</code>.
     * @alias module:model/NewRevertedBlockRData
     * @param item {module:model/NewRevertedBlockRI} 
     */
    constructor(item) { 
        
        NewRevertedBlockRData.initialize(this, item);
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
     * Constructs a <code>NewRevertedBlockRData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewRevertedBlockRData} obj Optional instance to populate.
     * @return {module:model/NewRevertedBlockRData} The populated <code>NewRevertedBlockRData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NewRevertedBlockRData();

            if (data.hasOwnProperty('item')) {
                obj['item'] = NewRevertedBlockRI.constructFromObject(data['item']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/NewRevertedBlockRI} item
 */
NewRevertedBlockRData.prototype['item'] = undefined;






export default NewRevertedBlockRData;

