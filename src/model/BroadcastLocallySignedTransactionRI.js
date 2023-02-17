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
 * The BroadcastLocallySignedTransactionRI model module.
 * @module model/BroadcastLocallySignedTransactionRI
 * @version 1.13.0
 */
class BroadcastLocallySignedTransactionRI {
    /**
     * Constructs a new <code>BroadcastLocallySignedTransactionRI</code>.
     * @alias module:model/BroadcastLocallySignedTransactionRI
     * @param transactionId {String} Represents the unique identifier of a transaction, i.e. it could be `transactionId` in UTXO-based protocols like Bitcoin, and transaction `hash` in Ethereum blockchain.
     */
    constructor(transactionId) { 
        
        BroadcastLocallySignedTransactionRI.initialize(this, transactionId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, transactionId) { 
        obj['transactionId'] = transactionId;
    }

    /**
     * Constructs a <code>BroadcastLocallySignedTransactionRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BroadcastLocallySignedTransactionRI} obj Optional instance to populate.
     * @return {module:model/BroadcastLocallySignedTransactionRI} The populated <code>BroadcastLocallySignedTransactionRI</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BroadcastLocallySignedTransactionRI();

            if (data.hasOwnProperty('transactionId')) {
                obj['transactionId'] = ApiClient.convertToType(data['transactionId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Represents the unique identifier of a transaction, i.e. it could be `transactionId` in UTXO-based protocols like Bitcoin, and transaction `hash` in Ethereum blockchain.
 * @member {String} transactionId
 */
BroadcastLocallySignedTransactionRI.prototype['transactionId'] = undefined;






export default BroadcastLocallySignedTransactionRI;

