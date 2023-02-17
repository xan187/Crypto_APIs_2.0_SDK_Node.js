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
import PrepareANonFungibleTokenTransferFromAddressRIBSBSCFee from './PrepareANonFungibleTokenTransferFromAddressRIBSBSCFee';

/**
 * The PrepareAFungibleTokenTransferFromAddressRIBSEC model module.
 * @module model/PrepareAFungibleTokenTransferFromAddressRIBSEC
 * @version 1.13.0
 */
class PrepareAFungibleTokenTransferFromAddressRIBSEC {
    /**
     * Constructs a new <code>PrepareAFungibleTokenTransferFromAddressRIBSEC</code>.
     * Ethereum Classic
     * @alias module:model/PrepareAFungibleTokenTransferFromAddressRIBSEC
     * @param sigHash {String} Representation of the hash that should be signed
     * @param fee {module:model/PrepareANonFungibleTokenTransferFromAddressRIBSBSCFee} 
     * @param transactionType {module:model/PrepareAFungibleTokenTransferFromAddressRIBSEC.TransactionTypeEnum} Representation of the transaction type
     */
    constructor(sigHash, fee, transactionType) { 
        
        PrepareAFungibleTokenTransferFromAddressRIBSEC.initialize(this, sigHash, fee, transactionType);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, sigHash, fee, transactionType) { 
        obj['sigHash'] = sigHash;
        obj['fee'] = fee;
        obj['transactionType'] = transactionType;
    }

    /**
     * Constructs a <code>PrepareAFungibleTokenTransferFromAddressRIBSEC</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PrepareAFungibleTokenTransferFromAddressRIBSEC} obj Optional instance to populate.
     * @return {module:model/PrepareAFungibleTokenTransferFromAddressRIBSEC} The populated <code>PrepareAFungibleTokenTransferFromAddressRIBSEC</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PrepareAFungibleTokenTransferFromAddressRIBSEC();

            if (data.hasOwnProperty('dataHex')) {
                obj['dataHex'] = ApiClient.convertToType(data['dataHex'], 'String');
            }
            if (data.hasOwnProperty('sigHash')) {
                obj['sigHash'] = ApiClient.convertToType(data['sigHash'], 'String');
            }
            if (data.hasOwnProperty('fee')) {
                obj['fee'] = PrepareANonFungibleTokenTransferFromAddressRIBSBSCFee.constructFromObject(data['fee']);
            }
            if (data.hasOwnProperty('transactionType')) {
                obj['transactionType'] = ApiClient.convertToType(data['transactionType'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Representation of the data in hex value
 * @member {String} dataHex
 */
PrepareAFungibleTokenTransferFromAddressRIBSEC.prototype['dataHex'] = undefined;

/**
 * Representation of the hash that should be signed
 * @member {String} sigHash
 */
PrepareAFungibleTokenTransferFromAddressRIBSEC.prototype['sigHash'] = undefined;

/**
 * @member {module:model/PrepareANonFungibleTokenTransferFromAddressRIBSBSCFee} fee
 */
PrepareAFungibleTokenTransferFromAddressRIBSEC.prototype['fee'] = undefined;

/**
 * Representation of the transaction type
 * @member {module:model/PrepareAFungibleTokenTransferFromAddressRIBSEC.TransactionTypeEnum} transactionType
 */
PrepareAFungibleTokenTransferFromAddressRIBSEC.prototype['transactionType'] = undefined;





/**
 * Allowed values for the <code>transactionType</code> property.
 * @enum {String}
 * @readonly
 */
PrepareAFungibleTokenTransferFromAddressRIBSEC['TransactionTypeEnum'] = {

    /**
     * value: "legacy-transaction"
     * @const
     */
    "legacy-transaction": "legacy-transaction"
};



export default PrepareAFungibleTokenTransferFromAddressRIBSEC;

