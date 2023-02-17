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
 * The GetLastMinedBlockRIBST model module.
 * @module model/GetLastMinedBlockRIBST
 * @version 1.13.0
 */
class GetLastMinedBlockRIBST {
    /**
     * Constructs a new <code>GetLastMinedBlockRIBST</code>.
     * Tron
     * @alias module:model/GetLastMinedBlockRIBST
     * @param size {Number} Represents the total size of the block in Bytes.
     */
    constructor(size) { 
        
        GetLastMinedBlockRIBST.initialize(this, size);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, size) { 
        obj['size'] = size;
    }

    /**
     * Constructs a <code>GetLastMinedBlockRIBST</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetLastMinedBlockRIBST} obj Optional instance to populate.
     * @return {module:model/GetLastMinedBlockRIBST} The populated <code>GetLastMinedBlockRIBST</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetLastMinedBlockRIBST();

            if (data.hasOwnProperty('bandwidthUsed')) {
                obj['bandwidthUsed'] = ApiClient.convertToType(data['bandwidthUsed'], 'String');
            }
            if (data.hasOwnProperty('burnedTRX')) {
                obj['burnedTRX'] = ApiClient.convertToType(data['burnedTRX'], 'String');
            }
            if (data.hasOwnProperty('energyUsed')) {
                obj['energyUsed'] = ApiClient.convertToType(data['energyUsed'], 'String');
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Representation of the blocks' bandwidth limit.
 * @member {String} bandwidthUsed
 */
GetLastMinedBlockRIBST.prototype['bandwidthUsed'] = undefined;

/**
 * Representation of the blocks' burned TRX.
 * @member {String} burnedTRX
 */
GetLastMinedBlockRIBST.prototype['burnedTRX'] = undefined;

/**
 * Representation of the blocks' energy used.
 * @member {String} energyUsed
 */
GetLastMinedBlockRIBST.prototype['energyUsed'] = undefined;

/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */
GetLastMinedBlockRIBST.prototype['size'] = undefined;






export default GetLastMinedBlockRIBST;

