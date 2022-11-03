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
 * The GetTransactionDetailsByTransactionIDRIRecipientsInner model module.
 * @module model/GetTransactionDetailsByTransactionIDRIRecipientsInner
 * @version 1.10.0
 */
class GetTransactionDetailsByTransactionIDRIRecipientsInner {
    /**
     * Constructs a new <code>GetTransactionDetailsByTransactionIDRIRecipientsInner</code>.
     * @alias module:model/GetTransactionDetailsByTransactionIDRIRecipientsInner
     * @param address {String} The address which receives this transaction. In UTXO-based protocols like Bitcoin there could be several senders while in account-based protocols like Ethereum there is always only one recipient.
     * @param amount {String} Represents the amount received to this address.
     */
    constructor(address, amount) { 
        
        GetTransactionDetailsByTransactionIDRIRecipientsInner.initialize(this, address, amount);
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
     * Constructs a <code>GetTransactionDetailsByTransactionIDRIRecipientsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetTransactionDetailsByTransactionIDRIRecipientsInner} obj Optional instance to populate.
     * @return {module:model/GetTransactionDetailsByTransactionIDRIRecipientsInner} The populated <code>GetTransactionDetailsByTransactionIDRIRecipientsInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetTransactionDetailsByTransactionIDRIRecipientsInner();

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
 * The address which receives this transaction. In UTXO-based protocols like Bitcoin there could be several senders while in account-based protocols like Ethereum there is always only one recipient.
 * @member {String} address
 */
GetTransactionDetailsByTransactionIDRIRecipientsInner.prototype['address'] = undefined;

/**
 * Represents the amount received to this address.
 * @member {String} amount
 */
GetTransactionDetailsByTransactionIDRIRecipientsInner.prototype['amount'] = undefined;






export default GetTransactionDetailsByTransactionIDRIRecipientsInner;

