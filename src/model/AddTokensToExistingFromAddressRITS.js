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
import AddTokensToExistingFromAddressRITSBOT from './AddTokensToExistingFromAddressRITSBOT';
import AddTokensToExistingFromAddressRITSET from './AddTokensToExistingFromAddressRITSET';

/**
 * The AddTokensToExistingFromAddressRITS model module.
 * @module model/AddTokensToExistingFromAddressRITS
 * @version 1.8.0
 */
class AddTokensToExistingFromAddressRITS {
    /**
     * Constructs a new <code>AddTokensToExistingFromAddressRITS</code>.
     * @alias module:model/AddTokensToExistingFromAddressRITS
     * @implements module:model/AddTokensToExistingFromAddressRITSBOT
     * @implements module:model/AddTokensToExistingFromAddressRITSET
     * @param propertyId {Number} Defines the `propertyId` of the Omni Layer token.
     * @param contractAddress {String} Token contract address to be transferred
     */
    constructor(propertyId, contractAddress) { 
        AddTokensToExistingFromAddressRITSBOT.initialize(this, propertyId);AddTokensToExistingFromAddressRITSET.initialize(this, contractAddress);
        AddTokensToExistingFromAddressRITS.initialize(this, propertyId, contractAddress);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, propertyId, contractAddress) { 
        obj['propertyId'] = propertyId;
        obj['contractAddress'] = contractAddress;
    }

    /**
     * Constructs a <code>AddTokensToExistingFromAddressRITS</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddTokensToExistingFromAddressRITS} obj Optional instance to populate.
     * @return {module:model/AddTokensToExistingFromAddressRITS} The populated <code>AddTokensToExistingFromAddressRITS</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddTokensToExistingFromAddressRITS();
            AddTokensToExistingFromAddressRITSBOT.constructFromObject(data, obj);
            AddTokensToExistingFromAddressRITSET.constructFromObject(data, obj);

            if (data.hasOwnProperty('propertyId')) {
                obj['propertyId'] = ApiClient.convertToType(data['propertyId'], 'Number');
            }
            if (data.hasOwnProperty('contractAddress')) {
                obj['contractAddress'] = ApiClient.convertToType(data['contractAddress'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Defines the `propertyId` of the Omni Layer token.
 * @member {Number} propertyId
 */
AddTokensToExistingFromAddressRITS.prototype['propertyId'] = undefined;

/**
 * Token contract address to be transferred
 * @member {String} contractAddress
 */
AddTokensToExistingFromAddressRITS.prototype['contractAddress'] = undefined;


// Implement AddTokensToExistingFromAddressRITSBOT interface:
/**
 * Defines the `propertyId` of the Omni Layer token.
 * @member {Number} propertyId
 */
AddTokensToExistingFromAddressRITSBOT.prototype['propertyId'] = undefined;
// Implement AddTokensToExistingFromAddressRITSET interface:
/**
 * Token contract address to be transferred
 * @member {String} contractAddress
 */
AddTokensToExistingFromAddressRITSET.prototype['contractAddress'] = undefined;




export default AddTokensToExistingFromAddressRITS;

