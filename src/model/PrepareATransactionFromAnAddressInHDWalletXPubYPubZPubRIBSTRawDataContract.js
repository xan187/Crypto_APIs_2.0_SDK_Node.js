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
import PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSTRawDataContractParameter from './PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSTRawDataContractParameter';

/**
 * The PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSTRawDataContract model module.
 * @module model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSTRawDataContract
 * @version 1.13.0
 */
class PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSTRawDataContract {
    /**
     * Constructs a new <code>PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSTRawDataContract</code>.
     * Defines the contract information
     * @alias module:model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSTRawDataContract
     * @param parameter {module:model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSTRawDataContractParameter} 
     */
    constructor(parameter) { 
        
        PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSTRawDataContract.initialize(this, parameter);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, parameter) { 
        obj['parameter'] = parameter;
    }

    /**
     * Constructs a <code>PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSTRawDataContract</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSTRawDataContract} obj Optional instance to populate.
     * @return {module:model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSTRawDataContract} The populated <code>PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSTRawDataContract</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSTRawDataContract();

            if (data.hasOwnProperty('parameter')) {
                obj['parameter'] = PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSTRawDataContractParameter.constructFromObject(data['parameter']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSTRawDataContractParameter} parameter
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSTRawDataContract.prototype['parameter'] = undefined;






export default PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSTRawDataContract;

