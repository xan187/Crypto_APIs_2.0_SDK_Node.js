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
 * The CreateCoinsTransactionFromAddressForWholeAmountRISenders model module.
 * @module model/CreateCoinsTransactionFromAddressForWholeAmountRISenders
 * @version 1.8.0
 */
class CreateCoinsTransactionFromAddressForWholeAmountRISenders {
    /**
     * Constructs a new <code>CreateCoinsTransactionFromAddressForWholeAmountRISenders</code>.
     * Details about the sender
     * @alias module:model/CreateCoinsTransactionFromAddressForWholeAmountRISenders
     * @param address {String} Defines the sender's public address.
     */
    constructor(address) { 
        
        CreateCoinsTransactionFromAddressForWholeAmountRISenders.initialize(this, address);
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
     * Constructs a <code>CreateCoinsTransactionFromAddressForWholeAmountRISenders</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateCoinsTransactionFromAddressForWholeAmountRISenders} obj Optional instance to populate.
     * @return {module:model/CreateCoinsTransactionFromAddressForWholeAmountRISenders} The populated <code>CreateCoinsTransactionFromAddressForWholeAmountRISenders</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateCoinsTransactionFromAddressForWholeAmountRISenders();

            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Defines the sender's public address.
 * @member {String} address
 */
CreateCoinsTransactionFromAddressForWholeAmountRISenders.prototype['address'] = undefined;






export default CreateCoinsTransactionFromAddressForWholeAmountRISenders;

