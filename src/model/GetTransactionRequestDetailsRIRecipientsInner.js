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
 * The GetTransactionRequestDetailsRIRecipientsInner model module.
 * @module model/GetTransactionRequestDetailsRIRecipientsInner
 * @version 1.7.2
 */
class GetTransactionRequestDetailsRIRecipientsInner {
    /**
     * Constructs a new <code>GetTransactionRequestDetailsRIRecipientsInner</code>.
     * @alias module:model/GetTransactionRequestDetailsRIRecipientsInner
     * @param address {String} The address which receives this transaction. In UTXO-based protocols like Bitcoin there could be several senders while in account-based protocols like Ethereum there is always only one recipient.
     * @param amount {String} Represents the amount received to this address.
     * @param unit {String} Defines the unit of the amount.
     */
    constructor(address, amount, unit) { 
        
        GetTransactionRequestDetailsRIRecipientsInner.initialize(this, address, amount, unit);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, address, amount, unit) { 
        obj['address'] = address;
        obj['amount'] = amount;
        obj['unit'] = unit;
    }

    /**
     * Constructs a <code>GetTransactionRequestDetailsRIRecipientsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetTransactionRequestDetailsRIRecipientsInner} obj Optional instance to populate.
     * @return {module:model/GetTransactionRequestDetailsRIRecipientsInner} The populated <code>GetTransactionRequestDetailsRIRecipientsInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetTransactionRequestDetailsRIRecipientsInner();

            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('addressTag')) {
                obj['addressTag'] = ApiClient.convertToType(data['addressTag'], 'Number');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
            }
            if (data.hasOwnProperty('classicAddress')) {
                obj['classicAddress'] = ApiClient.convertToType(data['classicAddress'], 'String');
            }
            if (data.hasOwnProperty('unit')) {
                obj['unit'] = ApiClient.convertToType(data['unit'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The address which receives this transaction. In UTXO-based protocols like Bitcoin there could be several senders while in account-based protocols like Ethereum there is always only one recipient.
 * @member {String} address
 */
GetTransactionRequestDetailsRIRecipientsInner.prototype['address'] = undefined;

/**
 * Defines a specific Tag that is an additional XRP address feature. It helps identify a transaction recipient beyond a wallet address. The tag that was encoded into the x-Address along with the Classic Address.
 * @member {Number} addressTag
 */
GetTransactionRequestDetailsRIRecipientsInner.prototype['addressTag'] = undefined;

/**
 * Represents the amount received to this address.
 * @member {String} amount
 */
GetTransactionRequestDetailsRIRecipientsInner.prototype['amount'] = undefined;

/**
 * Represents the public address, which is a compressed and shortened form of a public key. A classic address is shown when the destination address is an x-Address.
 * @member {String} classicAddress
 */
GetTransactionRequestDetailsRIRecipientsInner.prototype['classicAddress'] = undefined;

/**
 * Defines the unit of the amount.
 * @member {String} unit
 */
GetTransactionRequestDetailsRIRecipientsInner.prototype['unit'] = undefined;






export default GetTransactionRequestDetailsRIRecipientsInner;

