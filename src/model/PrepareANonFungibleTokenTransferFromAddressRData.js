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
import PrepareANonFungibleTokenTransferFromAddressRI from './PrepareANonFungibleTokenTransferFromAddressRI';

/**
 * The PrepareANonFungibleTokenTransferFromAddressRData model module.
 * @module model/PrepareANonFungibleTokenTransferFromAddressRData
 * @version 1.13.0
 */
class PrepareANonFungibleTokenTransferFromAddressRData {
    /**
     * Constructs a new <code>PrepareANonFungibleTokenTransferFromAddressRData</code>.
     * @alias module:model/PrepareANonFungibleTokenTransferFromAddressRData
     * @param item {module:model/PrepareANonFungibleTokenTransferFromAddressRI} 
     */
    constructor(item) { 
        
        PrepareANonFungibleTokenTransferFromAddressRData.initialize(this, item);
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
     * Constructs a <code>PrepareANonFungibleTokenTransferFromAddressRData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PrepareANonFungibleTokenTransferFromAddressRData} obj Optional instance to populate.
     * @return {module:model/PrepareANonFungibleTokenTransferFromAddressRData} The populated <code>PrepareANonFungibleTokenTransferFromAddressRData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PrepareANonFungibleTokenTransferFromAddressRData();

            if (data.hasOwnProperty('item')) {
                obj['item'] = PrepareANonFungibleTokenTransferFromAddressRI.constructFromObject(data['item']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/PrepareANonFungibleTokenTransferFromAddressRI} item
 */
PrepareANonFungibleTokenTransferFromAddressRData.prototype['item'] = undefined;






export default PrepareANonFungibleTokenTransferFromAddressRData;

