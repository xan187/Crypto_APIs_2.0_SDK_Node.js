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
 * The CreateSingleTransactionRequestFromAddressWithoutFeePriorityRITotalAmount model module.
 * @module model/CreateSingleTransactionRequestFromAddressWithoutFeePriorityRITotalAmount
 * @version 1.9.0
 */
class CreateSingleTransactionRequestFromAddressWithoutFeePriorityRITotalAmount {
    /**
     * Constructs a new <code>CreateSingleTransactionRequestFromAddressWithoutFeePriorityRITotalAmount</code>.
     * @alias module:model/CreateSingleTransactionRequestFromAddressWithoutFeePriorityRITotalAmount
     */
    constructor() { 
        
        CreateSingleTransactionRequestFromAddressWithoutFeePriorityRITotalAmount.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateSingleTransactionRequestFromAddressWithoutFeePriorityRITotalAmount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateSingleTransactionRequestFromAddressWithoutFeePriorityRITotalAmount} obj Optional instance to populate.
     * @return {module:model/CreateSingleTransactionRequestFromAddressWithoutFeePriorityRITotalAmount} The populated <code>CreateSingleTransactionRequestFromAddressWithoutFeePriorityRITotalAmount</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateSingleTransactionRequestFromAddressWithoutFeePriorityRITotalAmount();

            if (data.hasOwnProperty('unit')) {
                obj['unit'] = ApiClient.convertToType(data['unit'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Defines the unit of the total amount transacted.
 * @member {String} unit
 */
CreateSingleTransactionRequestFromAddressWithoutFeePriorityRITotalAmount.prototype['unit'] = undefined;

/**
 * Total amount of the transaction
 * @member {String} value
 */
CreateSingleTransactionRequestFromAddressWithoutFeePriorityRITotalAmount.prototype['value'] = undefined;






export default CreateSingleTransactionRequestFromAddressWithoutFeePriorityRITotalAmount;

