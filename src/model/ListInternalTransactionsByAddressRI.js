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
 * The ListInternalTransactionsByAddressRI model module.
 * @module model/ListInternalTransactionsByAddressRI
 * @version 1.7.2
 */
class ListInternalTransactionsByAddressRI {
    /**
     * Constructs a new <code>ListInternalTransactionsByAddressRI</code>.
     * @alias module:model/ListInternalTransactionsByAddressRI
     * @param amount {String} Defines the specific amount of the transaction.
     * @param minedInBlockHash {String} Represents the hash of the block where this transaction was mined/confirmed for first time. The hash is defined as a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
     * @param minedInBlockHeight {Number} Represents the hight of the block where this transaction was mined/confirmed for first time. The height is defined as the number of blocks in the blockchain preceding this specific block.
     * @param operationID {String} Represents the unique internal transaction ID in regards to the parent transaction (type trace address).
     * @param operationType {String} Defines the call type of the internal transaction.
     * @param parentHash {String} Defines the specific hash of the parent transaction.
     * @param recipient {String} Represents the recipient address with the respective amount.
     * @param sender {String} Represents the sender address with the respective amount.
     * @param timestamp {Number} 
     */
    constructor(amount, minedInBlockHash, minedInBlockHeight, operationID, operationType, parentHash, recipient, sender, timestamp) { 
        
        ListInternalTransactionsByAddressRI.initialize(this, amount, minedInBlockHash, minedInBlockHeight, operationID, operationType, parentHash, recipient, sender, timestamp);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, amount, minedInBlockHash, minedInBlockHeight, operationID, operationType, parentHash, recipient, sender, timestamp) { 
        obj['amount'] = amount;
        obj['minedInBlockHash'] = minedInBlockHash;
        obj['minedInBlockHeight'] = minedInBlockHeight;
        obj['operationID'] = operationID;
        obj['operationType'] = operationType;
        obj['parentHash'] = parentHash;
        obj['recipient'] = recipient;
        obj['sender'] = sender;
        obj['timestamp'] = timestamp;
    }

    /**
     * Constructs a <code>ListInternalTransactionsByAddressRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListInternalTransactionsByAddressRI} obj Optional instance to populate.
     * @return {module:model/ListInternalTransactionsByAddressRI} The populated <code>ListInternalTransactionsByAddressRI</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListInternalTransactionsByAddressRI();

            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
            }
            if (data.hasOwnProperty('minedInBlockHash')) {
                obj['minedInBlockHash'] = ApiClient.convertToType(data['minedInBlockHash'], 'String');
            }
            if (data.hasOwnProperty('minedInBlockHeight')) {
                obj['minedInBlockHeight'] = ApiClient.convertToType(data['minedInBlockHeight'], 'Number');
            }
            if (data.hasOwnProperty('operationID')) {
                obj['operationID'] = ApiClient.convertToType(data['operationID'], 'String');
            }
            if (data.hasOwnProperty('operationType')) {
                obj['operationType'] = ApiClient.convertToType(data['operationType'], 'String');
            }
            if (data.hasOwnProperty('parentHash')) {
                obj['parentHash'] = ApiClient.convertToType(data['parentHash'], 'String');
            }
            if (data.hasOwnProperty('recipient')) {
                obj['recipient'] = ApiClient.convertToType(data['recipient'], 'String');
            }
            if (data.hasOwnProperty('sender')) {
                obj['sender'] = ApiClient.convertToType(data['sender'], 'String');
            }
            if (data.hasOwnProperty('timestamp')) {
                obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Defines the specific amount of the transaction.
 * @member {String} amount
 */
ListInternalTransactionsByAddressRI.prototype['amount'] = undefined;

/**
 * Represents the hash of the block where this transaction was mined/confirmed for first time. The hash is defined as a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
 * @member {String} minedInBlockHash
 */
ListInternalTransactionsByAddressRI.prototype['minedInBlockHash'] = undefined;

/**
 * Represents the hight of the block where this transaction was mined/confirmed for first time. The height is defined as the number of blocks in the blockchain preceding this specific block.
 * @member {Number} minedInBlockHeight
 */
ListInternalTransactionsByAddressRI.prototype['minedInBlockHeight'] = undefined;

/**
 * Represents the unique internal transaction ID in regards to the parent transaction (type trace address).
 * @member {String} operationID
 */
ListInternalTransactionsByAddressRI.prototype['operationID'] = undefined;

/**
 * Defines the call type of the internal transaction.
 * @member {String} operationType
 */
ListInternalTransactionsByAddressRI.prototype['operationType'] = undefined;

/**
 * Defines the specific hash of the parent transaction.
 * @member {String} parentHash
 */
ListInternalTransactionsByAddressRI.prototype['parentHash'] = undefined;

/**
 * Represents the recipient address with the respective amount.
 * @member {String} recipient
 */
ListInternalTransactionsByAddressRI.prototype['recipient'] = undefined;

/**
 * Represents the sender address with the respective amount.
 * @member {String} sender
 */
ListInternalTransactionsByAddressRI.prototype['sender'] = undefined;

/**
 * @member {Number} timestamp
 */
ListInternalTransactionsByAddressRI.prototype['timestamp'] = undefined;






export default ListInternalTransactionsByAddressRI;

