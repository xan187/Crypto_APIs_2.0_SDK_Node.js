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
import PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBS from './PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBS';

/**
 * The PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRI model module.
 * @module model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRI
 * @version 1.13.0
 */
class PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRI {
    /**
     * Constructs a new <code>PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRI</code>.
     * @alias module:model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRI
     * @param amount {String} Representation of the amount of the transaction
     * @param recipient {String} Represents a recipient addresses. In account-based protocols like Ethereum there is only one address in this list.
     * @param sender {String} Represents a sender address with the respective amount. In account-based protocols like Ethereum there is only one address in this list.
     * @param sigHash {String} Representation of the hash that should be signed.
     * @param blockchainSpecific {module:model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBS} 
     */
    constructor(amount, recipient, sender, sigHash, blockchainSpecific) { 
        
        PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRI.initialize(this, amount, recipient, sender, sigHash, blockchainSpecific);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, amount, recipient, sender, sigHash, blockchainSpecific) { 
        obj['amount'] = amount;
        obj['recipient'] = recipient;
        obj['sender'] = sender;
        obj['sigHash'] = sigHash;
        obj['blockchainSpecific'] = blockchainSpecific;
    }

    /**
     * Constructs a <code>PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRI} obj Optional instance to populate.
     * @return {module:model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRI} The populated <code>PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRI</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRI();

            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
            }
            if (data.hasOwnProperty('recipient')) {
                obj['recipient'] = ApiClient.convertToType(data['recipient'], 'String');
            }
            if (data.hasOwnProperty('sender')) {
                obj['sender'] = ApiClient.convertToType(data['sender'], 'String');
            }
            if (data.hasOwnProperty('sigHash')) {
                obj['sigHash'] = ApiClient.convertToType(data['sigHash'], 'String');
            }
            if (data.hasOwnProperty('blockchainSpecific')) {
                obj['blockchainSpecific'] = PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBS.constructFromObject(data['blockchainSpecific']);
            }
        }
        return obj;
    }


}

/**
 * Representation of the amount of the transaction
 * @member {String} amount
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRI.prototype['amount'] = undefined;

/**
 * Represents a recipient addresses. In account-based protocols like Ethereum there is only one address in this list.
 * @member {String} recipient
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRI.prototype['recipient'] = undefined;

/**
 * Represents a sender address with the respective amount. In account-based protocols like Ethereum there is only one address in this list.
 * @member {String} sender
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRI.prototype['sender'] = undefined;

/**
 * Representation of the hash that should be signed.
 * @member {String} sigHash
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRI.prototype['sigHash'] = undefined;

/**
 * @member {module:model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBS} blockchainSpecific
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRI.prototype['blockchainSpecific'] = undefined;






export default PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRI;

