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
 * The GetTransactionDetailsByTransactionIDRISendersInner model module.
 * @module model/GetTransactionDetailsByTransactionIDRISendersInner
 * @version 1.7.2
 */
class GetTransactionDetailsByTransactionIDRISendersInner {
    /**
     * Constructs a new <code>GetTransactionDetailsByTransactionIDRISendersInner</code>.
     * @alias module:model/GetTransactionDetailsByTransactionIDRISendersInner
     * @param address {String} Represents the address which sends this transaction. In UTXO-based protocols like Bitcoin there could be several senders while in account-based protocols like Ethereum there is always only one sender.
     * @param amount {String} Represents the total amount sent by this address including the fee.
     */
    constructor(address, amount) { 
        
        GetTransactionDetailsByTransactionIDRISendersInner.initialize(this, address, amount);
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
     * Constructs a <code>GetTransactionDetailsByTransactionIDRISendersInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetTransactionDetailsByTransactionIDRISendersInner} obj Optional instance to populate.
     * @return {module:model/GetTransactionDetailsByTransactionIDRISendersInner} The populated <code>GetTransactionDetailsByTransactionIDRISendersInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetTransactionDetailsByTransactionIDRISendersInner();

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
 * Represents the address which sends this transaction. In UTXO-based protocols like Bitcoin there could be several senders while in account-based protocols like Ethereum there is always only one sender.
 * @member {String} address
 */
GetTransactionDetailsByTransactionIDRISendersInner.prototype['address'] = undefined;

/**
 * Represents the total amount sent by this address including the fee.
 * @member {String} amount
 */
GetTransactionDetailsByTransactionIDRISendersInner.prototype['amount'] = undefined;






export default GetTransactionDetailsByTransactionIDRISendersInner;

