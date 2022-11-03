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
 * The GenerateDepositAddressRBDataItem model module.
 * @module model/GenerateDepositAddressRBDataItem
 * @version 1.10.0
 */
class GenerateDepositAddressRBDataItem {
    /**
     * Constructs a new <code>GenerateDepositAddressRBDataItem</code>.
     * @alias module:model/GenerateDepositAddressRBDataItem
     * @param label {String} Represents a custom tag that customers can set up for their Wallets and addresses. E.g. custom label named \"Special addresses\".
     */
    constructor(label) { 
        
        GenerateDepositAddressRBDataItem.initialize(this, label);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, label) { 
        obj['label'] = label;
    }

    /**
     * Constructs a <code>GenerateDepositAddressRBDataItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GenerateDepositAddressRBDataItem} obj Optional instance to populate.
     * @return {module:model/GenerateDepositAddressRBDataItem} The populated <code>GenerateDepositAddressRBDataItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GenerateDepositAddressRBDataItem();

            if (data.hasOwnProperty('label')) {
                obj['label'] = ApiClient.convertToType(data['label'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Represents a custom tag that customers can set up for their Wallets and addresses. E.g. custom label named \"Special addresses\".
 * @member {String} label
 */
GenerateDepositAddressRBDataItem.prototype['label'] = undefined;






export default GenerateDepositAddressRBDataItem;

