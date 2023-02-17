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
 * The PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSEFee model module.
 * @module model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSEFee
 * @version 1.13.0
 */
class PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSEFee {
    /**
     * Constructs a new <code>PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSEFee</code>.
     * When isConfirmed is True - Defines the amount of the transaction fee When isConfirmed is False - For ETH-based blockchains this attribute represents the max fee value.
     * @alias module:model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSEFee
     * @param gasLimit {String} Represents the amount of gas used by this specific transaction alone.
     * @param gasPrice {String} Represents the price offered to the miner to purchase this amount of gas.
     * @param maxFeePerGas {String} Representation of the max fee per gas value
     * @param maxPriorityFeePerGas {String} Representation of the max priority fee per gas value
     */
    constructor(gasLimit, gasPrice, maxFeePerGas, maxPriorityFeePerGas) { 
        
        PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSEFee.initialize(this, gasLimit, gasPrice, maxFeePerGas, maxPriorityFeePerGas);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, gasLimit, gasPrice, maxFeePerGas, maxPriorityFeePerGas) { 
        obj['gasLimit'] = gasLimit;
        obj['gasPrice'] = gasPrice;
        obj['maxFeePerGas'] = maxFeePerGas;
        obj['maxPriorityFeePerGas'] = maxPriorityFeePerGas;
    }

    /**
     * Constructs a <code>PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSEFee</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSEFee} obj Optional instance to populate.
     * @return {module:model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSEFee} The populated <code>PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSEFee</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSEFee();

            if (data.hasOwnProperty('gasLimit')) {
                obj['gasLimit'] = ApiClient.convertToType(data['gasLimit'], 'String');
            }
            if (data.hasOwnProperty('gasPrice')) {
                obj['gasPrice'] = ApiClient.convertToType(data['gasPrice'], 'String');
            }
            if (data.hasOwnProperty('maxFeePerGas')) {
                obj['maxFeePerGas'] = ApiClient.convertToType(data['maxFeePerGas'], 'String');
            }
            if (data.hasOwnProperty('maxPriorityFeePerGas')) {
                obj['maxPriorityFeePerGas'] = ApiClient.convertToType(data['maxPriorityFeePerGas'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSEFee.prototype['gasLimit'] = undefined;

/**
 * Represents the price offered to the miner to purchase this amount of gas.
 * @member {String} gasPrice
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSEFee.prototype['gasPrice'] = undefined;

/**
 * Representation of the max fee per gas value
 * @member {String} maxFeePerGas
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSEFee.prototype['maxFeePerGas'] = undefined;

/**
 * Representation of the max priority fee per gas value
 * @member {String} maxPriorityFeePerGas
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSEFee.prototype['maxPriorityFeePerGas'] = undefined;






export default PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSEFee;

