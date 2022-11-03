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
import NewConfirmedInternalTransactionsForSpecificAmountRBDataItem from './NewConfirmedInternalTransactionsForSpecificAmountRBDataItem';

/**
 * The NewConfirmedInternalTransactionsForSpecificAmountRBData model module.
 * @module model/NewConfirmedInternalTransactionsForSpecificAmountRBData
 * @version 1.10.0
 */
class NewConfirmedInternalTransactionsForSpecificAmountRBData {
    /**
     * Constructs a new <code>NewConfirmedInternalTransactionsForSpecificAmountRBData</code>.
     * @alias module:model/NewConfirmedInternalTransactionsForSpecificAmountRBData
     * @param item {module:model/NewConfirmedInternalTransactionsForSpecificAmountRBDataItem} 
     */
    constructor(item) { 
        
        NewConfirmedInternalTransactionsForSpecificAmountRBData.initialize(this, item);
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
     * Constructs a <code>NewConfirmedInternalTransactionsForSpecificAmountRBData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewConfirmedInternalTransactionsForSpecificAmountRBData} obj Optional instance to populate.
     * @return {module:model/NewConfirmedInternalTransactionsForSpecificAmountRBData} The populated <code>NewConfirmedInternalTransactionsForSpecificAmountRBData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NewConfirmedInternalTransactionsForSpecificAmountRBData();

            if (data.hasOwnProperty('item')) {
                obj['item'] = NewConfirmedInternalTransactionsForSpecificAmountRBDataItem.constructFromObject(data['item']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/NewConfirmedInternalTransactionsForSpecificAmountRBDataItem} item
 */
NewConfirmedInternalTransactionsForSpecificAmountRBData.prototype['item'] = undefined;






export default NewConfirmedInternalTransactionsForSpecificAmountRBData;

