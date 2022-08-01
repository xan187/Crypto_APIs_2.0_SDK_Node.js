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
 * The ListAllAssetsFromAllWalletsRINonFungibleTokensInner model module.
 * @module model/ListAllAssetsFromAllWalletsRINonFungibleTokensInner
 * @version 1.7.2
 */
class ListAllAssetsFromAllWalletsRINonFungibleTokensInner {
    /**
     * Constructs a new <code>ListAllAssetsFromAllWalletsRINonFungibleTokensInner</code>.
     * @alias module:model/ListAllAssetsFromAllWalletsRINonFungibleTokensInner
     * @param blockchain {String} Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param identifier {String} Defines the specific token identifier. For Bitcoin-based transactions it should be the propertyId and for Ethereum-based transactions - the contract.
     * @param network {String} Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param symbol {String} Defines the symbol of the non-fungible tokens.
     * @param tokenId {String} Represents tokens' unique identifier.
     * @param type {String} Defines the specific token type.
     */
    constructor(blockchain, identifier, network, symbol, tokenId, type) { 
        
        ListAllAssetsFromAllWalletsRINonFungibleTokensInner.initialize(this, blockchain, identifier, network, symbol, tokenId, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, blockchain, identifier, network, symbol, tokenId, type) { 
        obj['blockchain'] = blockchain;
        obj['identifier'] = identifier;
        obj['network'] = network;
        obj['symbol'] = symbol;
        obj['tokenId'] = tokenId;
        obj['type'] = type;
    }

    /**
     * Constructs a <code>ListAllAssetsFromAllWalletsRINonFungibleTokensInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListAllAssetsFromAllWalletsRINonFungibleTokensInner} obj Optional instance to populate.
     * @return {module:model/ListAllAssetsFromAllWalletsRINonFungibleTokensInner} The populated <code>ListAllAssetsFromAllWalletsRINonFungibleTokensInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListAllAssetsFromAllWalletsRINonFungibleTokensInner();

            if (data.hasOwnProperty('blockchain')) {
                obj['blockchain'] = ApiClient.convertToType(data['blockchain'], 'String');
            }
            if (data.hasOwnProperty('identifier')) {
                obj['identifier'] = ApiClient.convertToType(data['identifier'], 'String');
            }
            if (data.hasOwnProperty('network')) {
                obj['network'] = ApiClient.convertToType(data['network'], 'String');
            }
            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
            if (data.hasOwnProperty('tokenId')) {
                obj['tokenId'] = ApiClient.convertToType(data['tokenId'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
 * @member {String} blockchain
 */
ListAllAssetsFromAllWalletsRINonFungibleTokensInner.prototype['blockchain'] = undefined;

/**
 * Defines the specific token identifier. For Bitcoin-based transactions it should be the propertyId and for Ethereum-based transactions - the contract.
 * @member {String} identifier
 */
ListAllAssetsFromAllWalletsRINonFungibleTokensInner.prototype['identifier'] = undefined;

/**
 * Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
 * @member {String} network
 */
ListAllAssetsFromAllWalletsRINonFungibleTokensInner.prototype['network'] = undefined;

/**
 * Defines the symbol of the non-fungible tokens.
 * @member {String} symbol
 */
ListAllAssetsFromAllWalletsRINonFungibleTokensInner.prototype['symbol'] = undefined;

/**
 * Represents tokens' unique identifier.
 * @member {String} tokenId
 */
ListAllAssetsFromAllWalletsRINonFungibleTokensInner.prototype['tokenId'] = undefined;

/**
 * Defines the specific token type.
 * @member {String} type
 */
ListAllAssetsFromAllWalletsRINonFungibleTokensInner.prototype['type'] = undefined;






export default ListAllAssetsFromAllWalletsRINonFungibleTokensInner;

