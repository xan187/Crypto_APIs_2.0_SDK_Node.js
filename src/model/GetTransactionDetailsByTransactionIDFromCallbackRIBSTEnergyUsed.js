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
 * The GetTransactionDetailsByTransactionIDFromCallbackRIBSTEnergyUsed model module.
 * @module model/GetTransactionDetailsByTransactionIDFromCallbackRIBSTEnergyUsed
 * @version 1.9.0
 */
class GetTransactionDetailsByTransactionIDFromCallbackRIBSTEnergyUsed {
    /**
     * Constructs a new <code>GetTransactionDetailsByTransactionIDFromCallbackRIBSTEnergyUsed</code>.
     * @alias module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSTEnergyUsed
     * @param amount {String} Representats the used energy for the  transaction.
     * @param unit {String} Defines the energyUsed unit.
     */
    constructor(amount, unit) { 
        
        GetTransactionDetailsByTransactionIDFromCallbackRIBSTEnergyUsed.initialize(this, amount, unit);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, amount, unit) { 
        obj['amount'] = amount;
        obj['unit'] = unit;
    }

    /**
     * Constructs a <code>GetTransactionDetailsByTransactionIDFromCallbackRIBSTEnergyUsed</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSTEnergyUsed} obj Optional instance to populate.
     * @return {module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSTEnergyUsed} The populated <code>GetTransactionDetailsByTransactionIDFromCallbackRIBSTEnergyUsed</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetTransactionDetailsByTransactionIDFromCallbackRIBSTEnergyUsed();

            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
            }
            if (data.hasOwnProperty('unit')) {
                obj['unit'] = ApiClient.convertToType(data['unit'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Representats the used energy for the  transaction.
 * @member {String} amount
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBSTEnergyUsed.prototype['amount'] = undefined;

/**
 * Defines the energyUsed unit.
 * @member {String} unit
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBSTEnergyUsed.prototype['unit'] = undefined;






export default GetTransactionDetailsByTransactionIDFromCallbackRIBSTEnergyUsed;

