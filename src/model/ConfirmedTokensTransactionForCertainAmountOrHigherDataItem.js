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
import AddressTokensTransactionConfirmedDataItemMinedInBlock from './AddressTokensTransactionConfirmedDataItemMinedInBlock';
import ConfirmedTokensTransactionForCertainAmountOrHigherToken from './ConfirmedTokensTransactionForCertainAmountOrHigherToken';

/**
 * The ConfirmedTokensTransactionForCertainAmountOrHigherDataItem model module.
 * @module model/ConfirmedTokensTransactionForCertainAmountOrHigherDataItem
 * @version 1.13.0
 */
class ConfirmedTokensTransactionForCertainAmountOrHigherDataItem {
    /**
     * Constructs a new <code>ConfirmedTokensTransactionForCertainAmountOrHigherDataItem</code>.
     * Defines an &#x60;item&#x60; as one result.
     * @alias module:model/ConfirmedTokensTransactionForCertainAmountOrHigherDataItem
     * @param blockchain {String} Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param network {String} Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\", \"mordor\" are test networks.
     * @param minedInBlock {module:model/AddressTokensTransactionConfirmedDataItemMinedInBlock} 
     * @param transactionId {String} Defines the unique ID of the specific transaction, i.e. its identification number.
     * @param tokenType {module:model/ConfirmedTokensTransactionForCertainAmountOrHigherDataItem.TokenTypeEnum} Defines the type of token sent with the transaction, e.g. ERC 20.
     * @param token {module:model/ConfirmedTokensTransactionForCertainAmountOrHigherToken} 
     */
    constructor(blockchain, network, minedInBlock, transactionId, tokenType, token) { 
        
        ConfirmedTokensTransactionForCertainAmountOrHigherDataItem.initialize(this, blockchain, network, minedInBlock, transactionId, tokenType, token);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, blockchain, network, minedInBlock, transactionId, tokenType, token) { 
        obj['blockchain'] = blockchain;
        obj['network'] = network;
        obj['minedInBlock'] = minedInBlock;
        obj['transactionId'] = transactionId;
        obj['tokenType'] = tokenType;
        obj['token'] = token;
    }

    /**
     * Constructs a <code>ConfirmedTokensTransactionForCertainAmountOrHigherDataItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ConfirmedTokensTransactionForCertainAmountOrHigherDataItem} obj Optional instance to populate.
     * @return {module:model/ConfirmedTokensTransactionForCertainAmountOrHigherDataItem} The populated <code>ConfirmedTokensTransactionForCertainAmountOrHigherDataItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConfirmedTokensTransactionForCertainAmountOrHigherDataItem();

            if (data.hasOwnProperty('blockchain')) {
                obj['blockchain'] = ApiClient.convertToType(data['blockchain'], 'String');
            }
            if (data.hasOwnProperty('network')) {
                obj['network'] = ApiClient.convertToType(data['network'], 'String');
            }
            if (data.hasOwnProperty('minedInBlock')) {
                obj['minedInBlock'] = AddressTokensTransactionConfirmedDataItemMinedInBlock.constructFromObject(data['minedInBlock']);
            }
            if (data.hasOwnProperty('transactionId')) {
                obj['transactionId'] = ApiClient.convertToType(data['transactionId'], 'String');
            }
            if (data.hasOwnProperty('tokenType')) {
                obj['tokenType'] = ApiClient.convertToType(data['tokenType'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ConfirmedTokensTransactionForCertainAmountOrHigherToken.constructFromObject(data['token']);
            }
        }
        return obj;
    }


}

/**
 * Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
 * @member {String} blockchain
 */
ConfirmedTokensTransactionForCertainAmountOrHigherDataItem.prototype['blockchain'] = undefined;

/**
 * Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\", \"mordor\" are test networks.
 * @member {String} network
 */
ConfirmedTokensTransactionForCertainAmountOrHigherDataItem.prototype['network'] = undefined;

/**
 * @member {module:model/AddressTokensTransactionConfirmedDataItemMinedInBlock} minedInBlock
 */
ConfirmedTokensTransactionForCertainAmountOrHigherDataItem.prototype['minedInBlock'] = undefined;

/**
 * Defines the unique ID of the specific transaction, i.e. its identification number.
 * @member {String} transactionId
 */
ConfirmedTokensTransactionForCertainAmountOrHigherDataItem.prototype['transactionId'] = undefined;

/**
 * Defines the type of token sent with the transaction, e.g. ERC 20.
 * @member {module:model/ConfirmedTokensTransactionForCertainAmountOrHigherDataItem.TokenTypeEnum} tokenType
 */
ConfirmedTokensTransactionForCertainAmountOrHigherDataItem.prototype['tokenType'] = undefined;

/**
 * @member {module:model/ConfirmedTokensTransactionForCertainAmountOrHigherToken} token
 */
ConfirmedTokensTransactionForCertainAmountOrHigherDataItem.prototype['token'] = undefined;





/**
 * Allowed values for the <code>tokenType</code> property.
 * @enum {String}
 * @readonly
 */
ConfirmedTokensTransactionForCertainAmountOrHigherDataItem['TokenTypeEnum'] = {

    /**
     * value: "ERC-20"
     * @const
     */
    "ERC-20": "ERC-20",

    /**
     * value: "ERC-721"
     * @const
     */
    "ERC-721": "ERC-721",

    /**
     * value: "BEP-20"
     * @const
     */
    "BEP-20": "BEP-20"
};



export default ConfirmedTokensTransactionForCertainAmountOrHigherDataItem;

