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
 * The CreateAutomaticTokensForwardingRITSET model module.
 * @module model/CreateAutomaticTokensForwardingRITSET
 * @version 1.8.0
 */
class CreateAutomaticTokensForwardingRITSET {
    /**
     * Constructs a new <code>CreateAutomaticTokensForwardingRITSET</code>.
     * Ethereum Token
     * @alias module:model/CreateAutomaticTokensForwardingRITSET
     * @param contractAddress {String} Represents the specific `contractAddress` of the Token that will be forwarded.
     */
    constructor(contractAddress) { 
        
        CreateAutomaticTokensForwardingRITSET.initialize(this, contractAddress);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, contractAddress) { 
        obj['contractAddress'] = contractAddress;
    }

    /**
     * Constructs a <code>CreateAutomaticTokensForwardingRITSET</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateAutomaticTokensForwardingRITSET} obj Optional instance to populate.
     * @return {module:model/CreateAutomaticTokensForwardingRITSET} The populated <code>CreateAutomaticTokensForwardingRITSET</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateAutomaticTokensForwardingRITSET();

            if (data.hasOwnProperty('contractAddress')) {
                obj['contractAddress'] = ApiClient.convertToType(data['contractAddress'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Represents the specific `contractAddress` of the Token that will be forwarded.
 * @member {String} contractAddress
 */
CreateAutomaticTokensForwardingRITSET.prototype['contractAddress'] = undefined;






export default CreateAutomaticTokensForwardingRITSET;

