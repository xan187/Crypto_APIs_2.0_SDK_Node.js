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
 * The GetXRPRippleTransactionDetailsByTransactionIDRISendersInner model module.
 * @module model/GetXRPRippleTransactionDetailsByTransactionIDRISendersInner
 * @version 1.8.0
 */
class GetXRPRippleTransactionDetailsByTransactionIDRISendersInner {
    /**
     * Constructs a new <code>GetXRPRippleTransactionDetailsByTransactionIDRISendersInner</code>.
     * @alias module:model/GetXRPRippleTransactionDetailsByTransactionIDRISendersInner
     * @param address {String} Represents the hash of the address that provides the funds.
     * @param amount {String} Represents the total amount sent by this address including the fee.
     */
    constructor(address, amount) { 
        
        GetXRPRippleTransactionDetailsByTransactionIDRISendersInner.initialize(this, address, amount);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, address, amount) { 
        obj['address'] = address;
        obj['amount'] = amount;
    }

    /**
     * Constructs a <code>GetXRPRippleTransactionDetailsByTransactionIDRISendersInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetXRPRippleTransactionDetailsByTransactionIDRISendersInner} obj Optional instance to populate.
     * @return {module:model/GetXRPRippleTransactionDetailsByTransactionIDRISendersInner} The populated <code>GetXRPRippleTransactionDetailsByTransactionIDRISendersInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetXRPRippleTransactionDetailsByTransactionIDRISendersInner();

            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Represents the hash of the address that provides the funds.
 * @member {String} address
 */
GetXRPRippleTransactionDetailsByTransactionIDRISendersInner.prototype['address'] = undefined;

/**
 * Represents the total amount sent by this address including the fee.
 * @member {String} amount
 */
GetXRPRippleTransactionDetailsByTransactionIDRISendersInner.prototype['amount'] = undefined;






export default GetXRPRippleTransactionDetailsByTransactionIDRISendersInner;

