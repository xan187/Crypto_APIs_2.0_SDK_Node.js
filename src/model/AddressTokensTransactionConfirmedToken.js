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
import AddressTokensTransactionConfirmedBep20 from './AddressTokensTransactionConfirmedBep20';
import AddressTokensTransactionConfirmedErc20 from './AddressTokensTransactionConfirmedErc20';
import AddressTokensTransactionConfirmedErc721 from './AddressTokensTransactionConfirmedErc721';
import AddressTokensTransactionConfirmedOmni from './AddressTokensTransactionConfirmedOmni';
import AddressTokensTransactionConfirmedTrc20 from './AddressTokensTransactionConfirmedTrc20';
import AddressTokensTransactionConfirmedTrc721 from './AddressTokensTransactionConfirmedTrc721';

/**
 * The AddressTokensTransactionConfirmedToken model module.
 * @module model/AddressTokensTransactionConfirmedToken
 * @version 1.13.0
 */
class AddressTokensTransactionConfirmedToken {
    /**
     * Constructs a new <code>AddressTokensTransactionConfirmedToken</code>.
     * @alias module:model/AddressTokensTransactionConfirmedToken
     * @implements module:model/AddressTokensTransactionConfirmedErc20
     * @implements module:model/AddressTokensTransactionConfirmedErc721
     * @implements module:model/AddressTokensTransactionConfirmedOmni
     * @implements module:model/AddressTokensTransactionConfirmedBep20
     * @implements module:model/AddressTokensTransactionConfirmedTrc20
     * @implements module:model/AddressTokensTransactionConfirmedTrc721
     * @param name {String} 
     * @param symbol {String} 
     * @param amount {String} 
     * @param contractAddress {String} 
     * @param tokenId {String} 
     * @param propertyId {String} Defines the ID of the property for Omni Layer.
     * @param transactionType {String} Defines the type of the transaction.
     * @param createdByTransactionId {String} The transaction ID used to create the token.
     */
    constructor(name, symbol, amount, contractAddress, tokenId, propertyId, transactionType, createdByTransactionId) { 
        AddressTokensTransactionConfirmedErc20.initialize(this, name, symbol, amount, contractAddress);AddressTokensTransactionConfirmedErc721.initialize(this, name, symbol, tokenId, contractAddress);AddressTokensTransactionConfirmedOmni.initialize(this, name, propertyId, transactionType, createdByTransactionId, amount);AddressTokensTransactionConfirmedBep20.initialize(this, name, symbol, amount, contractAddress);AddressTokensTransactionConfirmedTrc20.initialize(this, name, symbol, amount, contractAddress);AddressTokensTransactionConfirmedTrc721.initialize(this, name, symbol, tokenId, contractAddress);
        AddressTokensTransactionConfirmedToken.initialize(this, name, symbol, amount, contractAddress, tokenId, propertyId, transactionType, createdByTransactionId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, symbol, amount, contractAddress, tokenId, propertyId, transactionType, createdByTransactionId) { 
        obj['name'] = name;
        obj['symbol'] = symbol;
        obj['amount'] = amount;
        obj['contractAddress'] = contractAddress;
        obj['tokenId'] = tokenId;
        obj['propertyId'] = propertyId;
        obj['transactionType'] = transactionType;
        obj['createdByTransactionId'] = createdByTransactionId;
    }

    /**
     * Constructs a <code>AddressTokensTransactionConfirmedToken</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddressTokensTransactionConfirmedToken} obj Optional instance to populate.
     * @return {module:model/AddressTokensTransactionConfirmedToken} The populated <code>AddressTokensTransactionConfirmedToken</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddressTokensTransactionConfirmedToken();
            AddressTokensTransactionConfirmedErc20.constructFromObject(data, obj);
            AddressTokensTransactionConfirmedErc721.constructFromObject(data, obj);
            AddressTokensTransactionConfirmedOmni.constructFromObject(data, obj);
            AddressTokensTransactionConfirmedBep20.constructFromObject(data, obj);
            AddressTokensTransactionConfirmedTrc20.constructFromObject(data, obj);
            AddressTokensTransactionConfirmedTrc721.constructFromObject(data, obj);

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
            if (data.hasOwnProperty('decimals')) {
                obj['decimals'] = ApiClient.convertToType(data['decimals'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
            }
            if (data.hasOwnProperty('contractAddress')) {
                obj['contractAddress'] = ApiClient.convertToType(data['contractAddress'], 'String');
            }
            if (data.hasOwnProperty('tokenId')) {
                obj['tokenId'] = ApiClient.convertToType(data['tokenId'], 'String');
            }
            if (data.hasOwnProperty('propertyId')) {
                obj['propertyId'] = ApiClient.convertToType(data['propertyId'], 'String');
            }
            if (data.hasOwnProperty('transactionType')) {
                obj['transactionType'] = ApiClient.convertToType(data['transactionType'], 'String');
            }
            if (data.hasOwnProperty('createdByTransactionId')) {
                obj['createdByTransactionId'] = ApiClient.convertToType(data['createdByTransactionId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
AddressTokensTransactionConfirmedToken.prototype['name'] = undefined;

/**
 * @member {String} symbol
 */
AddressTokensTransactionConfirmedToken.prototype['symbol'] = undefined;

/**
 * @member {String} decimals
 */
AddressTokensTransactionConfirmedToken.prototype['decimals'] = undefined;

/**
 * @member {String} amount
 */
AddressTokensTransactionConfirmedToken.prototype['amount'] = undefined;

/**
 * @member {String} contractAddress
 */
AddressTokensTransactionConfirmedToken.prototype['contractAddress'] = undefined;

/**
 * @member {String} tokenId
 */
AddressTokensTransactionConfirmedToken.prototype['tokenId'] = undefined;

/**
 * Defines the ID of the property for Omni Layer.
 * @member {String} propertyId
 */
AddressTokensTransactionConfirmedToken.prototype['propertyId'] = undefined;

/**
 * Defines the type of the transaction.
 * @member {String} transactionType
 */
AddressTokensTransactionConfirmedToken.prototype['transactionType'] = undefined;

/**
 * The transaction ID used to create the token.
 * @member {String} createdByTransactionId
 */
AddressTokensTransactionConfirmedToken.prototype['createdByTransactionId'] = undefined;


// Implement AddressTokensTransactionConfirmedErc20 interface:
/**
 * Specifies the name of the token.
 * @member {String} name
 */
AddressTokensTransactionConfirmedErc20.prototype['name'] = undefined;
/**
 * Specifies an identifier of the token, where up to five alphanumeric characters can be used for it.
 * @member {String} symbol
 */
AddressTokensTransactionConfirmedErc20.prototype['symbol'] = undefined;
/**
 * Defines how many decimals can be used to break the token.
 * @member {String} decimals
 */
AddressTokensTransactionConfirmedErc20.prototype['decimals'] = undefined;
/**
 * Defines the amount of tokens sent with the confirmed transaction.
 * @member {String} amount
 */
AddressTokensTransactionConfirmedErc20.prototype['amount'] = undefined;
/**
 * Defines the address of the contract.
 * @member {String} contractAddress
 */
AddressTokensTransactionConfirmedErc20.prototype['contractAddress'] = undefined;
// Implement AddressTokensTransactionConfirmedErc721 interface:
/**
 * Specifies the name of the token.
 * @member {String} name
 */
AddressTokensTransactionConfirmedErc721.prototype['name'] = undefined;
/**
 * Specifies an identifier of the token, where up to five alphanumeric characters can be used for it.
 * @member {String} symbol
 */
AddressTokensTransactionConfirmedErc721.prototype['symbol'] = undefined;
/**
 * Specifies the ID of the token.
 * @member {String} tokenId
 */
AddressTokensTransactionConfirmedErc721.prototype['tokenId'] = undefined;
/**
 * Specifies the address of the contract.
 * @member {String} contractAddress
 */
AddressTokensTransactionConfirmedErc721.prototype['contractAddress'] = undefined;
// Implement AddressTokensTransactionConfirmedOmni interface:
/**
 * Specifies the name of the token.
 * @member {String} name
 */
AddressTokensTransactionConfirmedOmni.prototype['name'] = undefined;
/**
 * Defines the ID of the property for Omni Layer.
 * @member {String} propertyId
 */
AddressTokensTransactionConfirmedOmni.prototype['propertyId'] = undefined;
/**
 * Defines the type of the transaction.
 * @member {String} transactionType
 */
AddressTokensTransactionConfirmedOmni.prototype['transactionType'] = undefined;
/**
 * The transaction ID used to create the token.
 * @member {String} createdByTransactionId
 */
AddressTokensTransactionConfirmedOmni.prototype['createdByTransactionId'] = undefined;
/**
 * Defines the amount of tokens sent with the confirmed transaction.
 * @member {String} amount
 */
AddressTokensTransactionConfirmedOmni.prototype['amount'] = undefined;
// Implement AddressTokensTransactionConfirmedBep20 interface:
/**
 * Specifies the name of the token.
 * @member {String} name
 */
AddressTokensTransactionConfirmedBep20.prototype['name'] = undefined;
/**
 * Specifies an identifier of the token, where up to five alphanumeric characters can be used for it.
 * @member {String} symbol
 */
AddressTokensTransactionConfirmedBep20.prototype['symbol'] = undefined;
/**
 * Defines how many decimals can be used to break the token.
 * @member {String} decimals
 */
AddressTokensTransactionConfirmedBep20.prototype['decimals'] = undefined;
/**
 * Defines the amount of tokens sent with the confirmed transaction.
 * @member {String} amount
 */
AddressTokensTransactionConfirmedBep20.prototype['amount'] = undefined;
/**
 * Defines the address of the contract.
 * @member {String} contractAddress
 */
AddressTokensTransactionConfirmedBep20.prototype['contractAddress'] = undefined;
// Implement AddressTokensTransactionConfirmedTrc20 interface:
/**
 * @member {String} name
 */
AddressTokensTransactionConfirmedTrc20.prototype['name'] = undefined;
/**
 * @member {String} symbol
 */
AddressTokensTransactionConfirmedTrc20.prototype['symbol'] = undefined;
/**
 * @member {String} decimals
 */
AddressTokensTransactionConfirmedTrc20.prototype['decimals'] = undefined;
/**
 * @member {String} amount
 */
AddressTokensTransactionConfirmedTrc20.prototype['amount'] = undefined;
/**
 * @member {String} contractAddress
 */
AddressTokensTransactionConfirmedTrc20.prototype['contractAddress'] = undefined;
// Implement AddressTokensTransactionConfirmedTrc721 interface:
/**
 * @member {String} name
 */
AddressTokensTransactionConfirmedTrc721.prototype['name'] = undefined;
/**
 * @member {String} symbol
 */
AddressTokensTransactionConfirmedTrc721.prototype['symbol'] = undefined;
/**
 * @member {String} tokenId
 */
AddressTokensTransactionConfirmedTrc721.prototype['tokenId'] = undefined;
/**
 * @member {String} contractAddress
 */
AddressTokensTransactionConfirmedTrc721.prototype['contractAddress'] = undefined;




export default AddressTokensTransactionConfirmedToken;

