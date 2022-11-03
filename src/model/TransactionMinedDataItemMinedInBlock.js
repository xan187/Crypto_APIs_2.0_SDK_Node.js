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
 * The TransactionMinedDataItemMinedInBlock model module.
 * @module model/TransactionMinedDataItemMinedInBlock
 * @version 1.10.0
 */
class TransactionMinedDataItemMinedInBlock {
    /**
     * Constructs a new <code>TransactionMinedDataItemMinedInBlock</code>.
     * Refers to the specific block the transaction was mined in.
     * @alias module:model/TransactionMinedDataItemMinedInBlock
     * @param height {Number} Defines the number of blocks in the blockchain preceding this specific block.
     * @param hash {String} Represents the hash of the block's header, i.e. an output that has a fixed length.
     * @param timestamp {Number} Defines the exact date/time when this transaction was mined in seconds since Unix Epoch time.
     */
    constructor(height, hash, timestamp) { 
        
        TransactionMinedDataItemMinedInBlock.initialize(this, height, hash, timestamp);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, height, hash, timestamp) { 
        obj['height'] = height;
        obj['hash'] = hash;
        obj['timestamp'] = timestamp;
    }

    /**
     * Constructs a <code>TransactionMinedDataItemMinedInBlock</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransactionMinedDataItemMinedInBlock} obj Optional instance to populate.
     * @return {module:model/TransactionMinedDataItemMinedInBlock} The populated <code>TransactionMinedDataItemMinedInBlock</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TransactionMinedDataItemMinedInBlock();

            if (data.hasOwnProperty('height')) {
                obj['height'] = ApiClient.convertToType(data['height'], 'Number');
            }
            if (data.hasOwnProperty('hash')) {
                obj['hash'] = ApiClient.convertToType(data['hash'], 'String');
            }
            if (data.hasOwnProperty('timestamp')) {
                obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Defines the number of blocks in the blockchain preceding this specific block.
 * @member {Number} height
 */
TransactionMinedDataItemMinedInBlock.prototype['height'] = undefined;

/**
 * Represents the hash of the block's header, i.e. an output that has a fixed length.
 * @member {String} hash
 */
TransactionMinedDataItemMinedInBlock.prototype['hash'] = undefined;

/**
 * Defines the exact date/time when this transaction was mined in seconds since Unix Epoch time.
 * @member {Number} timestamp
 */
TransactionMinedDataItemMinedInBlock.prototype['timestamp'] = undefined;






export default TransactionMinedDataItemMinedInBlock;

