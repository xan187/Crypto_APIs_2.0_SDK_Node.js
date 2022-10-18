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
 * The GetAddressBalanceRIConfirmedBalance model module.
 * @module model/GetAddressBalanceRIConfirmedBalance
 * @version 1.9.0
 */
class GetAddressBalanceRIConfirmedBalance {
    /**
     * Constructs a new <code>GetAddressBalanceRIConfirmedBalance</code>.
     * @alias module:model/GetAddressBalanceRIConfirmedBalance
     * @param amount {String} Defines the total balance of the address that is confirmed. It doesn't include unconfirmed transactions.
     * @param unit {String} Represents the unit of the confirmed balance.
     */
    constructor(amount, unit) { 
        
        GetAddressBalanceRIConfirmedBalance.initialize(this, amount, unit);
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
     * Constructs a <code>GetAddressBalanceRIConfirmedBalance</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetAddressBalanceRIConfirmedBalance} obj Optional instance to populate.
     * @return {module:model/GetAddressBalanceRIConfirmedBalance} The populated <code>GetAddressBalanceRIConfirmedBalance</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetAddressBalanceRIConfirmedBalance();

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
 * Defines the total balance of the address that is confirmed. It doesn't include unconfirmed transactions.
 * @member {String} amount
 */
GetAddressBalanceRIConfirmedBalance.prototype['amount'] = undefined;

/**
 * Represents the unit of the confirmed balance.
 * @member {String} unit
 */
GetAddressBalanceRIConfirmedBalance.prototype['unit'] = undefined;






export default GetAddressBalanceRIConfirmedBalance;

