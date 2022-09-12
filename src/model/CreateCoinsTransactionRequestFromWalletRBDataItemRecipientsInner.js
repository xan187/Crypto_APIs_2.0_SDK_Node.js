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
 * The CreateCoinsTransactionRequestFromWalletRBDataItemRecipientsInner model module.
 * @module model/CreateCoinsTransactionRequestFromWalletRBDataItemRecipientsInner
 * @version 1.8.0
 */
class CreateCoinsTransactionRequestFromWalletRBDataItemRecipientsInner {
    /**
     * Constructs a new <code>CreateCoinsTransactionRequestFromWalletRBDataItemRecipientsInner</code>.
     * @alias module:model/CreateCoinsTransactionRequestFromWalletRBDataItemRecipientsInner
     * @param address {String} Defines the specific recipient/destination address.
     * @param amount {String} Represents the specific amount of the transaction's destination.
     */
    constructor(address, amount) { 
        
        CreateCoinsTransactionRequestFromWalletRBDataItemRecipientsInner.initialize(this, address, amount);
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
     * Constructs a <code>CreateCoinsTransactionRequestFromWalletRBDataItemRecipientsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateCoinsTransactionRequestFromWalletRBDataItemRecipientsInner} obj Optional instance to populate.
     * @return {module:model/CreateCoinsTransactionRequestFromWalletRBDataItemRecipientsInner} The populated <code>CreateCoinsTransactionRequestFromWalletRBDataItemRecipientsInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateCoinsTransactionRequestFromWalletRBDataItemRecipientsInner();

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
 * Defines the specific recipient/destination address.
 * @member {String} address
 */
CreateCoinsTransactionRequestFromWalletRBDataItemRecipientsInner.prototype['address'] = undefined;

/**
 * Represents the specific amount of the transaction's destination.
 * @member {String} amount
 */
CreateCoinsTransactionRequestFromWalletRBDataItemRecipientsInner.prototype['amount'] = undefined;






export default CreateCoinsTransactionRequestFromWalletRBDataItemRecipientsInner;

