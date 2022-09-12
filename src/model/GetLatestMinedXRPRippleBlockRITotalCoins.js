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
 * The GetLatestMinedXRPRippleBlockRITotalCoins model module.
 * @module model/GetLatestMinedXRPRippleBlockRITotalCoins
 * @version 1.8.0
 */
class GetLatestMinedXRPRippleBlockRITotalCoins {
    /**
     * Constructs a new <code>GetLatestMinedXRPRippleBlockRITotalCoins</code>.
     * @alias module:model/GetLatestMinedXRPRippleBlockRITotalCoins
     * @param amount {String} Defines the amount of all coins.
     * @param unit {String} Defines the unit of the amount of all coins.
     */
    constructor(amount, unit) { 
        
        GetLatestMinedXRPRippleBlockRITotalCoins.initialize(this, amount, unit);
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
     * Constructs a <code>GetLatestMinedXRPRippleBlockRITotalCoins</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetLatestMinedXRPRippleBlockRITotalCoins} obj Optional instance to populate.
     * @return {module:model/GetLatestMinedXRPRippleBlockRITotalCoins} The populated <code>GetLatestMinedXRPRippleBlockRITotalCoins</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetLatestMinedXRPRippleBlockRITotalCoins();

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
 * Defines the amount of all coins.
 * @member {String} amount
 */
GetLatestMinedXRPRippleBlockRITotalCoins.prototype['amount'] = undefined;

/**
 * Defines the unit of the amount of all coins.
 * @member {String} unit
 */
GetLatestMinedXRPRippleBlockRITotalCoins.prototype['unit'] = undefined;






export default GetLatestMinedXRPRippleBlockRITotalCoins;

