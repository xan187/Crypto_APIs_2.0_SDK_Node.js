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
 * The PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBSBSCFee model module.
 * @module model/PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBSBSCFee
 * @version 1.9.0
 */
class PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBSBSCFee {
    /**
     * Constructs a new <code>PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBSBSCFee</code>.
     * When isConfirmed is True - Defines the amount of the transaction fee When isConfirmed is False - For ETH-based blockchains this attribute represents the max fee value.
     * @alias module:model/PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBSBSCFee
     * @param gasLimit {String} Represents the amount of gas used by this specific transaction alone.
     */
    constructor(gasLimit) { 
        
        PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBSBSCFee.initialize(this, gasLimit);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, gasLimit) { 
        obj['gasLimit'] = gasLimit;
    }

    /**
     * Constructs a <code>PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBSBSCFee</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBSBSCFee} obj Optional instance to populate.
     * @return {module:model/PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBSBSCFee} The populated <code>PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBSBSCFee</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBSBSCFee();

            if (data.hasOwnProperty('gasLimit')) {
                obj['gasLimit'] = ApiClient.convertToType(data['gasLimit'], 'String');
            }
            if (data.hasOwnProperty('gasPrice')) {
                obj['gasPrice'] = ApiClient.convertToType(data['gasPrice'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */
PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBSBSCFee.prototype['gasLimit'] = undefined;

/**
 * Represents the price offered to the miner to purchase this amount of gas.
 * @member {String} gasPrice
 */
PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBSBSCFee.prototype['gasPrice'] = undefined;






export default PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBSBSCFee;

