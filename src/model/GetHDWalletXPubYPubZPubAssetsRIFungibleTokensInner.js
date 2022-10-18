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
 * The GetHDWalletXPubYPubZPubAssetsRIFungibleTokensInner model module.
 * @module model/GetHDWalletXPubYPubZPubAssetsRIFungibleTokensInner
 * @version 1.9.0
 */
class GetHDWalletXPubYPubZPubAssetsRIFungibleTokensInner {
    /**
     * Constructs a new <code>GetHDWalletXPubYPubZPubAssetsRIFungibleTokensInner</code>.
     * @alias module:model/GetHDWalletXPubYPubZPubAssetsRIFungibleTokensInner
     * @param amount {String} Defines the amount of the fungible tokens.
     * @param identifier {String} Represents tokens' contract address.
     * @param symbol {String} Defines the symbol of the fungible token.
     * @param type {String} Defines the specific token type.
     */
    constructor(amount, identifier, symbol, type) { 
        
        GetHDWalletXPubYPubZPubAssetsRIFungibleTokensInner.initialize(this, amount, identifier, symbol, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, amount, identifier, symbol, type) { 
        obj['amount'] = amount;
        obj['identifier'] = identifier;
        obj['symbol'] = symbol;
        obj['type'] = type;
    }

    /**
     * Constructs a <code>GetHDWalletXPubYPubZPubAssetsRIFungibleTokensInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetHDWalletXPubYPubZPubAssetsRIFungibleTokensInner} obj Optional instance to populate.
     * @return {module:model/GetHDWalletXPubYPubZPubAssetsRIFungibleTokensInner} The populated <code>GetHDWalletXPubYPubZPubAssetsRIFungibleTokensInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetHDWalletXPubYPubZPubAssetsRIFungibleTokensInner();

            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
            }
            if (data.hasOwnProperty('identifier')) {
                obj['identifier'] = ApiClient.convertToType(data['identifier'], 'String');
            }
            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Defines the amount of the fungible tokens.
 * @member {String} amount
 */
GetHDWalletXPubYPubZPubAssetsRIFungibleTokensInner.prototype['amount'] = undefined;

/**
 * Represents tokens' contract address.
 * @member {String} identifier
 */
GetHDWalletXPubYPubZPubAssetsRIFungibleTokensInner.prototype['identifier'] = undefined;

/**
 * Defines the symbol of the fungible token.
 * @member {String} symbol
 */
GetHDWalletXPubYPubZPubAssetsRIFungibleTokensInner.prototype['symbol'] = undefined;

/**
 * Defines the specific token type.
 * @member {String} type
 */
GetHDWalletXPubYPubZPubAssetsRIFungibleTokensInner.prototype['type'] = undefined;






export default GetHDWalletXPubYPubZPubAssetsRIFungibleTokensInner;

