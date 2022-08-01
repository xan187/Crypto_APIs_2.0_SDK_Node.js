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
 * The ListDepositAddressesRIConfirmedBalance model module.
 * @module model/ListDepositAddressesRIConfirmedBalance
 * @version 1.7.2
 */
class ListDepositAddressesRIConfirmedBalance {
    /**
     * Constructs a new <code>ListDepositAddressesRIConfirmedBalance</code>.
     * @alias module:model/ListDepositAddressesRIConfirmedBalance
     * @param amount {String} Defines the total balance of the address that is confirmed. It doesn't include unconfirmed transactions.
     * @param unit {String} Represents the unit of the confirmed balance.
     */
    constructor(amount, unit) { 
        
        ListDepositAddressesRIConfirmedBalance.initialize(this, amount, unit);
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
     * Constructs a <code>ListDepositAddressesRIConfirmedBalance</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListDepositAddressesRIConfirmedBalance} obj Optional instance to populate.
     * @return {module:model/ListDepositAddressesRIConfirmedBalance} The populated <code>ListDepositAddressesRIConfirmedBalance</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListDepositAddressesRIConfirmedBalance();

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
ListDepositAddressesRIConfirmedBalance.prototype['amount'] = undefined;

/**
 * Represents the unit of the confirmed balance.
 * @member {String} unit
 */
ListDepositAddressesRIConfirmedBalance.prototype['unit'] = undefined;






export default ListDepositAddressesRIConfirmedBalance;

