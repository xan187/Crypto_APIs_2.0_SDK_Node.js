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
import ListTransactionsByBlockHeightRI from './ListTransactionsByBlockHeightRI';

/**
 * The ListTransactionsByBlockHeightRData model module.
 * @module model/ListTransactionsByBlockHeightRData
 * @version 1.10.0
 */
class ListTransactionsByBlockHeightRData {
    /**
     * Constructs a new <code>ListTransactionsByBlockHeightRData</code>.
     * @alias module:model/ListTransactionsByBlockHeightRData
     * @param limit {Number} Defines how many items should be returned in the response per page basis.
     * @param offset {Number} The starting index of the response items, i.e. where the response should start listing the returned items.
     * @param total {Number} Defines the total number of items returned in the response.
     * @param items {Array.<module:model/ListTransactionsByBlockHeightRI>} 
     */
    constructor(limit, offset, total, items) { 
        
        ListTransactionsByBlockHeightRData.initialize(this, limit, offset, total, items);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, limit, offset, total, items) { 
        obj['limit'] = limit;
        obj['offset'] = offset;
        obj['total'] = total;
        obj['items'] = items;
    }

    /**
     * Constructs a <code>ListTransactionsByBlockHeightRData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListTransactionsByBlockHeightRData} obj Optional instance to populate.
     * @return {module:model/ListTransactionsByBlockHeightRData} The populated <code>ListTransactionsByBlockHeightRData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListTransactionsByBlockHeightRData();

            if (data.hasOwnProperty('limit')) {
                obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
            }
            if (data.hasOwnProperty('offset')) {
                obj['offset'] = ApiClient.convertToType(data['offset'], 'Number');
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'Number');
            }
            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], [ListTransactionsByBlockHeightRI]);
            }
        }
        return obj;
    }


}

/**
 * Defines how many items should be returned in the response per page basis.
 * @member {Number} limit
 */
ListTransactionsByBlockHeightRData.prototype['limit'] = undefined;

/**
 * The starting index of the response items, i.e. where the response should start listing the returned items.
 * @member {Number} offset
 */
ListTransactionsByBlockHeightRData.prototype['offset'] = undefined;

/**
 * Defines the total number of items returned in the response.
 * @member {Number} total
 */
ListTransactionsByBlockHeightRData.prototype['total'] = undefined;

/**
 * @member {Array.<module:model/ListTransactionsByBlockHeightRI>} items
 */
ListTransactionsByBlockHeightRData.prototype['items'] = undefined;






export default ListTransactionsByBlockHeightRData;

