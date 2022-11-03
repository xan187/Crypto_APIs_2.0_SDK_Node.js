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
import AddressTokensTransactionConfirmedEachConfirmationToken from './AddressTokensTransactionConfirmedEachConfirmationToken';

/**
 * The AddressTokensTransactionConfirmedEachConfirmationDataItem model module.
 * @module model/AddressTokensTransactionConfirmedEachConfirmationDataItem
 * @version 1.10.0
 */
class AddressTokensTransactionConfirmedEachConfirmationDataItem {
    /**
     * Constructs a new <code>AddressTokensTransactionConfirmedEachConfirmationDataItem</code>.
     * Defines an &#x60;item&#x60; as one result.
     * @alias module:model/AddressTokensTransactionConfirmedEachConfirmationDataItem
     * @param blockchain {String} Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param network {String} Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\",  are test networks.
     * @param address {String} Defines the specific address to which the transaction has been sent.
     * @param minedInBlock {module:model/AddressTokensTransactionConfirmedDataItemMinedInBlock} 
     * @param transactionId {String} Defines the unique ID of the specific transaction, i.e. its identification number.
     * @param currentConfirmations {Number} Defines the number of currently received confirmations for the transaction.
     * @param targetConfirmations {Number} Defines the number of confirmation transactions requested as callbacks, i.e. the system can notify till the n-th confirmation.
     * @param tokenType {module:model/AddressTokensTransactionConfirmedEachConfirmationDataItem.TokenTypeEnum} Defines the type of token sent with the transaction, e.g. ERC 20.
     * @param token {module:model/AddressTokensTransactionConfirmedEachConfirmationToken} 
     * @param direction {module:model/AddressTokensTransactionConfirmedEachConfirmationDataItem.DirectionEnum} Defines whether the transaction is \"incoming\" or \"outgoing\".
     */
    constructor(blockchain, network, address, minedInBlock, transactionId, currentConfirmations, targetConfirmations, tokenType, token, direction) { 
        
        AddressTokensTransactionConfirmedEachConfirmationDataItem.initialize(this, blockchain, network, address, minedInBlock, transactionId, currentConfirmations, targetConfirmations, tokenType, token, direction);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, blockchain, network, address, minedInBlock, transactionId, currentConfirmations, targetConfirmations, tokenType, token, direction) { 
        obj['blockchain'] = blockchain;
        obj['network'] = network;
        obj['address'] = address;
        obj['minedInBlock'] = minedInBlock;
        obj['transactionId'] = transactionId;
        obj['currentConfirmations'] = currentConfirmations;
        obj['targetConfirmations'] = targetConfirmations;
        obj['tokenType'] = tokenType;
        obj['token'] = token;
        obj['direction'] = direction;
    }

    /**
     * Constructs a <code>AddressTokensTransactionConfirmedEachConfirmationDataItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddressTokensTransactionConfirmedEachConfirmationDataItem} obj Optional instance to populate.
     * @return {module:model/AddressTokensTransactionConfirmedEachConfirmationDataItem} The populated <code>AddressTokensTransactionConfirmedEachConfirmationDataItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddressTokensTransactionConfirmedEachConfirmationDataItem();

            if (data.hasOwnProperty('blockchain')) {
                obj['blockchain'] = ApiClient.convertToType(data['blockchain'], 'String');
            }
            if (data.hasOwnProperty('network')) {
                obj['network'] = ApiClient.convertToType(data['network'], 'String');
            }
            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('minedInBlock')) {
                obj['minedInBlock'] = AddressTokensTransactionConfirmedDataItemMinedInBlock.constructFromObject(data['minedInBlock']);
            }
            if (data.hasOwnProperty('transactionId')) {
                obj['transactionId'] = ApiClient.convertToType(data['transactionId'], 'String');
            }
            if (data.hasOwnProperty('currentConfirmations')) {
                obj['currentConfirmations'] = ApiClient.convertToType(data['currentConfirmations'], 'Number');
            }
            if (data.hasOwnProperty('targetConfirmations')) {
                obj['targetConfirmations'] = ApiClient.convertToType(data['targetConfirmations'], 'Number');
            }
            if (data.hasOwnProperty('tokenType')) {
                obj['tokenType'] = ApiClient.convertToType(data['tokenType'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = AddressTokensTransactionConfirmedEachConfirmationToken.constructFromObject(data['token']);
            }
            if (data.hasOwnProperty('direction')) {
                obj['direction'] = ApiClient.convertToType(data['direction'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
 * @member {String} blockchain
 */
AddressTokensTransactionConfirmedEachConfirmationDataItem.prototype['blockchain'] = undefined;

/**
 * Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\",  are test networks.
 * @member {String} network
 */
AddressTokensTransactionConfirmedEachConfirmationDataItem.prototype['network'] = undefined;

/**
 * Defines the specific address to which the transaction has been sent.
 * @member {String} address
 */
AddressTokensTransactionConfirmedEachConfirmationDataItem.prototype['address'] = undefined;

/**
 * @member {module:model/AddressTokensTransactionConfirmedDataItemMinedInBlock} minedInBlock
 */
AddressTokensTransactionConfirmedEachConfirmationDataItem.prototype['minedInBlock'] = undefined;

/**
 * Defines the unique ID of the specific transaction, i.e. its identification number.
 * @member {String} transactionId
 */
AddressTokensTransactionConfirmedEachConfirmationDataItem.prototype['transactionId'] = undefined;

/**
 * Defines the number of currently received confirmations for the transaction.
 * @member {Number} currentConfirmations
 */
AddressTokensTransactionConfirmedEachConfirmationDataItem.prototype['currentConfirmations'] = undefined;

/**
 * Defines the number of confirmation transactions requested as callbacks, i.e. the system can notify till the n-th confirmation.
 * @member {Number} targetConfirmations
 */
AddressTokensTransactionConfirmedEachConfirmationDataItem.prototype['targetConfirmations'] = undefined;

/**
 * Defines the type of token sent with the transaction, e.g. ERC 20.
 * @member {module:model/AddressTokensTransactionConfirmedEachConfirmationDataItem.TokenTypeEnum} tokenType
 */
AddressTokensTransactionConfirmedEachConfirmationDataItem.prototype['tokenType'] = undefined;

/**
 * @member {module:model/AddressTokensTransactionConfirmedEachConfirmationToken} token
 */
AddressTokensTransactionConfirmedEachConfirmationDataItem.prototype['token'] = undefined;

/**
 * Defines whether the transaction is \"incoming\" or \"outgoing\".
 * @member {module:model/AddressTokensTransactionConfirmedEachConfirmationDataItem.DirectionEnum} direction
 */
AddressTokensTransactionConfirmedEachConfirmationDataItem.prototype['direction'] = undefined;





/**
 * Allowed values for the <code>tokenType</code> property.
 * @enum {String}
 * @readonly
 */
AddressTokensTransactionConfirmedEachConfirmationDataItem['TokenTypeEnum'] = {

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
     * value: "OMNI"
     * @const
     */
    "OMNI": "OMNI",

    /**
     * value: "BEP-20"
     * @const
     */
    "BEP-20": "BEP-20"
};


/**
 * Allowed values for the <code>direction</code> property.
 * @enum {String}
 * @readonly
 */
AddressTokensTransactionConfirmedEachConfirmationDataItem['DirectionEnum'] = {

    /**
     * value: "incoming"
     * @const
     */
    "incoming": "incoming",

    /**
     * value: "outgoing"
     * @const
     */
    "outgoing": "outgoing"
};



export default AddressTokensTransactionConfirmedEachConfirmationDataItem;

