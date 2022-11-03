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
import TransactionMinedDataItemMinedInBlock from './TransactionMinedDataItemMinedInBlock';

/**
 * The TransactionMinedDataItem model module.
 * @module model/TransactionMinedDataItem
 * @version 1.10.0
 */
class TransactionMinedDataItem {
    /**
     * Constructs a new <code>TransactionMinedDataItem</code>.
     * Defines an &#x60;item&#x60; as one result.
     * @alias module:model/TransactionMinedDataItem
     * @param blockchain {String} Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param network {String} Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\", \"rinkeby\" are test networks.
     * @param transactionId {String} Defines the unique ID of the specific transaction, i.e. its identification number.
     * @param minedInBlock {module:model/TransactionMinedDataItemMinedInBlock} 
     */
    constructor(blockchain, network, transactionId, minedInBlock) { 
        
        TransactionMinedDataItem.initialize(this, blockchain, network, transactionId, minedInBlock);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, blockchain, network, transactionId, minedInBlock) { 
        obj['blockchain'] = blockchain;
        obj['network'] = network;
        obj['transactionId'] = transactionId;
        obj['minedInBlock'] = minedInBlock;
    }

    /**
     * Constructs a <code>TransactionMinedDataItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransactionMinedDataItem} obj Optional instance to populate.
     * @return {module:model/TransactionMinedDataItem} The populated <code>TransactionMinedDataItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TransactionMinedDataItem();

            if (data.hasOwnProperty('blockchain')) {
                obj['blockchain'] = ApiClient.convertToType(data['blockchain'], 'String');
            }
            if (data.hasOwnProperty('network')) {
                obj['network'] = ApiClient.convertToType(data['network'], 'String');
            }
            if (data.hasOwnProperty('transactionId')) {
                obj['transactionId'] = ApiClient.convertToType(data['transactionId'], 'String');
            }
            if (data.hasOwnProperty('minedInBlock')) {
                obj['minedInBlock'] = TransactionMinedDataItemMinedInBlock.constructFromObject(data['minedInBlock']);
            }
        }
        return obj;
    }


}

/**
 * Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
 * @member {String} blockchain
 */
TransactionMinedDataItem.prototype['blockchain'] = undefined;

/**
 * Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\", \"rinkeby\" are test networks.
 * @member {String} network
 */
TransactionMinedDataItem.prototype['network'] = undefined;

/**
 * Defines the unique ID of the specific transaction, i.e. its identification number.
 * @member {String} transactionId
 */
TransactionMinedDataItem.prototype['transactionId'] = undefined;

/**
 * @member {module:model/TransactionMinedDataItemMinedInBlock} minedInBlock
 */
TransactionMinedDataItem.prototype['minedInBlock'] = undefined;






export default TransactionMinedDataItem;

