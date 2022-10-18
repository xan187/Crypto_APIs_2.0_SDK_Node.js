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
 * The AddressTokensTransactionUnconfirmedOmni model module.
 * @module model/AddressTokensTransactionUnconfirmedOmni
 * @version 1.9.0
 */
class AddressTokensTransactionUnconfirmedOmni {
    /**
     * Constructs a new <code>AddressTokensTransactionUnconfirmedOmni</code>.
     * OMNI
     * @alias module:model/AddressTokensTransactionUnconfirmedOmni
     * @param name {String} Specifies the name of the token.
     * @param propertyId {String} Defines the ID of the property for Omni Layer.
     * @param transactionType {String} Defines the type of the transaction made.
     * @param createdByTransactionId {String} The transaction ID used to create the token.
     * @param amount {String} Defines the amount of tokens sent with the transaction that is pending confirmation.
     */
    constructor(name, propertyId, transactionType, createdByTransactionId, amount) { 
        
        AddressTokensTransactionUnconfirmedOmni.initialize(this, name, propertyId, transactionType, createdByTransactionId, amount);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, propertyId, transactionType, createdByTransactionId, amount) { 
        obj['name'] = name;
        obj['propertyId'] = propertyId;
        obj['transactionType'] = transactionType;
        obj['createdByTransactionId'] = createdByTransactionId;
        obj['amount'] = amount;
    }

    /**
     * Constructs a <code>AddressTokensTransactionUnconfirmedOmni</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddressTokensTransactionUnconfirmedOmni} obj Optional instance to populate.
     * @return {module:model/AddressTokensTransactionUnconfirmedOmni} The populated <code>AddressTokensTransactionUnconfirmedOmni</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddressTokensTransactionUnconfirmedOmni();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('propertyId')) {
                obj['propertyId'] = ApiClient.convertToType(data['propertyId'], 'String');
            }
            if (data.hasOwnProperty('transactionType')) {
                obj['transactionType'] = ApiClient.convertToType(data['transactionType'], 'String');
            }
            if (data.hasOwnProperty('createdByTransactionId')) {
                obj['createdByTransactionId'] = ApiClient.convertToType(data['createdByTransactionId'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Specifies the name of the token.
 * @member {String} name
 */
AddressTokensTransactionUnconfirmedOmni.prototype['name'] = undefined;

/**
 * Defines the ID of the property for Omni Layer.
 * @member {String} propertyId
 */
AddressTokensTransactionUnconfirmedOmni.prototype['propertyId'] = undefined;

/**
 * Defines the type of the transaction made.
 * @member {String} transactionType
 */
AddressTokensTransactionUnconfirmedOmni.prototype['transactionType'] = undefined;

/**
 * The transaction ID used to create the token.
 * @member {String} createdByTransactionId
 */
AddressTokensTransactionUnconfirmedOmni.prototype['createdByTransactionId'] = undefined;

/**
 * Defines the amount of tokens sent with the transaction that is pending confirmation.
 * @member {String} amount
 */
AddressTokensTransactionUnconfirmedOmni.prototype['amount'] = undefined;






export default AddressTokensTransactionUnconfirmedOmni;

