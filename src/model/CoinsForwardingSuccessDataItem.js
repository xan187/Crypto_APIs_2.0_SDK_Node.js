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
 * The CoinsForwardingSuccessDataItem model module.
 * @module model/CoinsForwardingSuccessDataItem
 * @version 1.13.0
 */
class CoinsForwardingSuccessDataItem {
    /**
     * Constructs a new <code>CoinsForwardingSuccessDataItem</code>.
     * Defines an &#x60;item&#x60; as one result.
     * @alias module:model/CoinsForwardingSuccessDataItem
     * @param blockchain {String} Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param network {String} Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\", \"rinkeby\" are test networks.
     * @param fromAddress {String} Represents the hash of the address that provides the coins.
     * @param toAddress {String} Represents the hash of the address to forward the coins to.
     * @param forwardedAmount {String} Represents the amount of coins that have been forwarded.
     * @param forwardedUnit {String} Represents the unit of coins that have been forwarded, e.g. BTC.
     * @param spentFeesAmount {String} Represents the amount of the fee spent for the coins to be forwarded.
     * @param spentFeesUnit {String} Represents the unit of the fee spent for the coins to be forwarded, e.g. BTC.
     * @param triggerTransactionId {String} Defines the unique Transaction ID that triggered the coin forwarding.
     * @param forwardingTransactionId {String} Defines the unique Transaction ID that forwarded the coins.
     */
    constructor(blockchain, network, fromAddress, toAddress, forwardedAmount, forwardedUnit, spentFeesAmount, spentFeesUnit, triggerTransactionId, forwardingTransactionId) { 
        
        CoinsForwardingSuccessDataItem.initialize(this, blockchain, network, fromAddress, toAddress, forwardedAmount, forwardedUnit, spentFeesAmount, spentFeesUnit, triggerTransactionId, forwardingTransactionId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, blockchain, network, fromAddress, toAddress, forwardedAmount, forwardedUnit, spentFeesAmount, spentFeesUnit, triggerTransactionId, forwardingTransactionId) { 
        obj['blockchain'] = blockchain;
        obj['network'] = network;
        obj['fromAddress'] = fromAddress;
        obj['toAddress'] = toAddress;
        obj['forwardedAmount'] = forwardedAmount;
        obj['forwardedUnit'] = forwardedUnit;
        obj['spentFeesAmount'] = spentFeesAmount;
        obj['spentFeesUnit'] = spentFeesUnit;
        obj['triggerTransactionId'] = triggerTransactionId;
        obj['forwardingTransactionId'] = forwardingTransactionId;
    }

    /**
     * Constructs a <code>CoinsForwardingSuccessDataItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CoinsForwardingSuccessDataItem} obj Optional instance to populate.
     * @return {module:model/CoinsForwardingSuccessDataItem} The populated <code>CoinsForwardingSuccessDataItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CoinsForwardingSuccessDataItem();

            if (data.hasOwnProperty('blockchain')) {
                obj['blockchain'] = ApiClient.convertToType(data['blockchain'], 'String');
            }
            if (data.hasOwnProperty('network')) {
                obj['network'] = ApiClient.convertToType(data['network'], 'String');
            }
            if (data.hasOwnProperty('fromAddress')) {
                obj['fromAddress'] = ApiClient.convertToType(data['fromAddress'], 'String');
            }
            if (data.hasOwnProperty('toAddress')) {
                obj['toAddress'] = ApiClient.convertToType(data['toAddress'], 'String');
            }
            if (data.hasOwnProperty('forwardedAmount')) {
                obj['forwardedAmount'] = ApiClient.convertToType(data['forwardedAmount'], 'String');
            }
            if (data.hasOwnProperty('forwardedUnit')) {
                obj['forwardedUnit'] = ApiClient.convertToType(data['forwardedUnit'], 'String');
            }
            if (data.hasOwnProperty('spentFeesAmount')) {
                obj['spentFeesAmount'] = ApiClient.convertToType(data['spentFeesAmount'], 'String');
            }
            if (data.hasOwnProperty('spentFeesUnit')) {
                obj['spentFeesUnit'] = ApiClient.convertToType(data['spentFeesUnit'], 'String');
            }
            if (data.hasOwnProperty('triggerTransactionId')) {
                obj['triggerTransactionId'] = ApiClient.convertToType(data['triggerTransactionId'], 'String');
            }
            if (data.hasOwnProperty('forwardingTransactionId')) {
                obj['forwardingTransactionId'] = ApiClient.convertToType(data['forwardingTransactionId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
 * @member {String} blockchain
 */
CoinsForwardingSuccessDataItem.prototype['blockchain'] = undefined;

/**
 * Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\", \"rinkeby\" are test networks.
 * @member {String} network
 */
CoinsForwardingSuccessDataItem.prototype['network'] = undefined;

/**
 * Represents the hash of the address that provides the coins.
 * @member {String} fromAddress
 */
CoinsForwardingSuccessDataItem.prototype['fromAddress'] = undefined;

/**
 * Represents the hash of the address to forward the coins to.
 * @member {String} toAddress
 */
CoinsForwardingSuccessDataItem.prototype['toAddress'] = undefined;

/**
 * Represents the amount of coins that have been forwarded.
 * @member {String} forwardedAmount
 */
CoinsForwardingSuccessDataItem.prototype['forwardedAmount'] = undefined;

/**
 * Represents the unit of coins that have been forwarded, e.g. BTC.
 * @member {String} forwardedUnit
 */
CoinsForwardingSuccessDataItem.prototype['forwardedUnit'] = undefined;

/**
 * Represents the amount of the fee spent for the coins to be forwarded.
 * @member {String} spentFeesAmount
 */
CoinsForwardingSuccessDataItem.prototype['spentFeesAmount'] = undefined;

/**
 * Represents the unit of the fee spent for the coins to be forwarded, e.g. BTC.
 * @member {String} spentFeesUnit
 */
CoinsForwardingSuccessDataItem.prototype['spentFeesUnit'] = undefined;

/**
 * Defines the unique Transaction ID that triggered the coin forwarding.
 * @member {String} triggerTransactionId
 */
CoinsForwardingSuccessDataItem.prototype['triggerTransactionId'] = undefined;

/**
 * Defines the unique Transaction ID that forwarded the coins.
 * @member {String} forwardingTransactionId
 */
CoinsForwardingSuccessDataItem.prototype['forwardingTransactionId'] = undefined;






export default CoinsForwardingSuccessDataItem;

