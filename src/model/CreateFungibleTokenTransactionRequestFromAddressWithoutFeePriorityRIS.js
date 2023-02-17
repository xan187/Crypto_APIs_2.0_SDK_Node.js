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
import CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIST from './CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIST';

/**
 * The CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIS model module.
 * @module model/CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIS
 * @version 1.13.0
 */
class CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIS {
    /**
     * Constructs a new <code>CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIS</code>.
     * Represents the specific token data which depends on its type - if it is a Coin or Token.
     * @alias module:model/CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIS
     * @implements module:model/CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIST
     * @param contractAddress {String} Defines the contract address in the blockchain for an ERC20 token.
     * @param feeLimit {String} Defines the fee limit value.
     * @param symbol {String} Defines the Token symbol.
     */
    constructor(contractAddress, feeLimit, symbol) { 
        CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIST.initialize(this, contractAddress, feeLimit, symbol);
        CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIS.initialize(this, contractAddress, feeLimit, symbol);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, contractAddress, feeLimit, symbol) { 
        obj['contractAddress'] = contractAddress;
        obj['feeLimit'] = feeLimit;
        obj['symbol'] = symbol;
    }

    /**
     * Constructs a <code>CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIS</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIS} obj Optional instance to populate.
     * @return {module:model/CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIS} The populated <code>CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIS</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIS();
            CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIST.constructFromObject(data, obj);

            if (data.hasOwnProperty('contractAddress')) {
                obj['contractAddress'] = ApiClient.convertToType(data['contractAddress'], 'String');
            }
            if (data.hasOwnProperty('feeLimit')) {
                obj['feeLimit'] = ApiClient.convertToType(data['feeLimit'], 'String');
            }
            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Defines the contract address in the blockchain for an ERC20 token.
 * @member {String} contractAddress
 */
CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIS.prototype['contractAddress'] = undefined;

/**
 * Defines the fee limit value.
 * @member {String} feeLimit
 */
CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIS.prototype['feeLimit'] = undefined;

/**
 * Defines the Token symbol.
 * @member {String} symbol
 */
CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIS.prototype['symbol'] = undefined;


// Implement CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIST interface:
/**
 * Defines the contract address in the blockchain for an ERC20 token.
 * @member {String} contractAddress
 */
CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIST.prototype['contractAddress'] = undefined;
/**
 * Defines the fee limit value.
 * @member {String} feeLimit
 */
CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIST.prototype['feeLimit'] = undefined;
/**
 * Defines the Token symbol.
 * @member {String} symbol
 */
CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIST.prototype['symbol'] = undefined;




export default CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIS;

