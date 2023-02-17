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
import ListAllAssetsFromAllWalletsRICoinsInner from './ListAllAssetsFromAllWalletsRICoinsInner';
import ListAllAssetsFromAllWalletsRIFungibleTokensInner from './ListAllAssetsFromAllWalletsRIFungibleTokensInner';
import ListAllAssetsFromAllWalletsRINonFungibleTokensInner from './ListAllAssetsFromAllWalletsRINonFungibleTokensInner';

/**
 * The ListAllAssetsByWalletIDRI model module.
 * @module model/ListAllAssetsByWalletIDRI
 * @version 1.13.0
 */
class ListAllAssetsByWalletIDRI {
    /**
     * Constructs a new <code>ListAllAssetsByWalletIDRI</code>.
     * @alias module:model/ListAllAssetsByWalletIDRI
     * @param coins {Array.<module:model/ListAllAssetsFromAllWalletsRICoinsInner>} 
     * @param fungibleTokens {Array.<module:model/ListAllAssetsFromAllWalletsRIFungibleTokensInner>} Represents fungible tokens'es detailed information
     * @param nonFungibleTokens {Array.<module:model/ListAllAssetsFromAllWalletsRINonFungibleTokensInner>} Represents non-fungible tokens'es detailed information.
     * @param walletId {String} Defines the unique ID of the Wallet.
     * @param walletName {String} Represents the name of the wallet.
     */
    constructor(coins, fungibleTokens, nonFungibleTokens, walletId, walletName) { 
        
        ListAllAssetsByWalletIDRI.initialize(this, coins, fungibleTokens, nonFungibleTokens, walletId, walletName);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, coins, fungibleTokens, nonFungibleTokens, walletId, walletName) { 
        obj['coins'] = coins;
        obj['fungibleTokens'] = fungibleTokens;
        obj['nonFungibleTokens'] = nonFungibleTokens;
        obj['walletId'] = walletId;
        obj['walletName'] = walletName;
    }

    /**
     * Constructs a <code>ListAllAssetsByWalletIDRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListAllAssetsByWalletIDRI} obj Optional instance to populate.
     * @return {module:model/ListAllAssetsByWalletIDRI} The populated <code>ListAllAssetsByWalletIDRI</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListAllAssetsByWalletIDRI();

            if (data.hasOwnProperty('coins')) {
                obj['coins'] = ApiClient.convertToType(data['coins'], [ListAllAssetsFromAllWalletsRICoinsInner]);
            }
            if (data.hasOwnProperty('fungibleTokens')) {
                obj['fungibleTokens'] = ApiClient.convertToType(data['fungibleTokens'], [ListAllAssetsFromAllWalletsRIFungibleTokensInner]);
            }
            if (data.hasOwnProperty('nonFungibleTokens')) {
                obj['nonFungibleTokens'] = ApiClient.convertToType(data['nonFungibleTokens'], [ListAllAssetsFromAllWalletsRINonFungibleTokensInner]);
            }
            if (data.hasOwnProperty('walletId')) {
                obj['walletId'] = ApiClient.convertToType(data['walletId'], 'String');
            }
            if (data.hasOwnProperty('walletName')) {
                obj['walletName'] = ApiClient.convertToType(data['walletName'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/ListAllAssetsFromAllWalletsRICoinsInner>} coins
 */
ListAllAssetsByWalletIDRI.prototype['coins'] = undefined;

/**
 * Represents fungible tokens'es detailed information
 * @member {Array.<module:model/ListAllAssetsFromAllWalletsRIFungibleTokensInner>} fungibleTokens
 */
ListAllAssetsByWalletIDRI.prototype['fungibleTokens'] = undefined;

/**
 * Represents non-fungible tokens'es detailed information.
 * @member {Array.<module:model/ListAllAssetsFromAllWalletsRINonFungibleTokensInner>} nonFungibleTokens
 */
ListAllAssetsByWalletIDRI.prototype['nonFungibleTokens'] = undefined;

/**
 * Defines the unique ID of the Wallet.
 * @member {String} walletId
 */
ListAllAssetsByWalletIDRI.prototype['walletId'] = undefined;

/**
 * Represents the name of the wallet.
 * @member {String} walletName
 */
ListAllAssetsByWalletIDRI.prototype['walletName'] = undefined;






export default ListAllAssetsByWalletIDRI;

