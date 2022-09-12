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
 * The GetBlockDetailsByBlockHashFromCallbackRIBSZ model module.
 * @module model/GetBlockDetailsByBlockHashFromCallbackRIBSZ
 * @version 1.8.0
 */
class GetBlockDetailsByBlockHashFromCallbackRIBSZ {
    /**
     * Constructs a new <code>GetBlockDetailsByBlockHashFromCallbackRIBSZ</code>.
     * Zilliqa
     * @alias module:model/GetBlockDetailsByBlockHashFromCallbackRIBSZ
     * @param difficulty {String} Defines how difficult it is for a specific miner to mine the block.
     * @param dsBlock {Number} Represents the Directory Service block which contains metadata about the miners who participate in the consensus protocol.
     * @param dsDifficulty {String} Defines how difficult it is to mine the dsBlocks.
     * @param dsLeader {String} Represents a part of the DS Committee which leads the consensus protocol for the epoch.
     * @param gasLimit {Number} Represents the maximum amount of gas allowed in the block in order to determine how many transactions it can fit.
     * @param gasUsed {Number} Defines how much of the gas for the block has been used.
     * @param microBlocks {Array.<String>} 
     */
    constructor(difficulty, dsBlock, dsDifficulty, dsLeader, gasLimit, gasUsed, microBlocks) { 
        
        GetBlockDetailsByBlockHashFromCallbackRIBSZ.initialize(this, difficulty, dsBlock, dsDifficulty, dsLeader, gasLimit, gasUsed, microBlocks);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, difficulty, dsBlock, dsDifficulty, dsLeader, gasLimit, gasUsed, microBlocks) { 
        obj['difficulty'] = difficulty;
        obj['dsBlock'] = dsBlock;
        obj['dsDifficulty'] = dsDifficulty;
        obj['dsLeader'] = dsLeader;
        obj['gasLimit'] = gasLimit;
        obj['gasUsed'] = gasUsed;
        obj['microBlocks'] = microBlocks;
    }

    /**
     * Constructs a <code>GetBlockDetailsByBlockHashFromCallbackRIBSZ</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetBlockDetailsByBlockHashFromCallbackRIBSZ} obj Optional instance to populate.
     * @return {module:model/GetBlockDetailsByBlockHashFromCallbackRIBSZ} The populated <code>GetBlockDetailsByBlockHashFromCallbackRIBSZ</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetBlockDetailsByBlockHashFromCallbackRIBSZ();

            if (data.hasOwnProperty('difficulty')) {
                obj['difficulty'] = ApiClient.convertToType(data['difficulty'], 'String');
            }
            if (data.hasOwnProperty('dsBlock')) {
                obj['dsBlock'] = ApiClient.convertToType(data['dsBlock'], 'Number');
            }
            if (data.hasOwnProperty('dsDifficulty')) {
                obj['dsDifficulty'] = ApiClient.convertToType(data['dsDifficulty'], 'String');
            }
            if (data.hasOwnProperty('dsLeader')) {
                obj['dsLeader'] = ApiClient.convertToType(data['dsLeader'], 'String');
            }
            if (data.hasOwnProperty('gasLimit')) {
                obj['gasLimit'] = ApiClient.convertToType(data['gasLimit'], 'Number');
            }
            if (data.hasOwnProperty('gasUsed')) {
                obj['gasUsed'] = ApiClient.convertToType(data['gasUsed'], 'Number');
            }
            if (data.hasOwnProperty('microBlocks')) {
                obj['microBlocks'] = ApiClient.convertToType(data['microBlocks'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * Defines how difficult it is for a specific miner to mine the block.
 * @member {String} difficulty
 */
GetBlockDetailsByBlockHashFromCallbackRIBSZ.prototype['difficulty'] = undefined;

/**
 * Represents the Directory Service block which contains metadata about the miners who participate in the consensus protocol.
 * @member {Number} dsBlock
 */
GetBlockDetailsByBlockHashFromCallbackRIBSZ.prototype['dsBlock'] = undefined;

/**
 * Defines how difficult it is to mine the dsBlocks.
 * @member {String} dsDifficulty
 */
GetBlockDetailsByBlockHashFromCallbackRIBSZ.prototype['dsDifficulty'] = undefined;

/**
 * Represents a part of the DS Committee which leads the consensus protocol for the epoch.
 * @member {String} dsLeader
 */
GetBlockDetailsByBlockHashFromCallbackRIBSZ.prototype['dsLeader'] = undefined;

/**
 * Represents the maximum amount of gas allowed in the block in order to determine how many transactions it can fit.
 * @member {Number} gasLimit
 */
GetBlockDetailsByBlockHashFromCallbackRIBSZ.prototype['gasLimit'] = undefined;

/**
 * Defines how much of the gas for the block has been used.
 * @member {Number} gasUsed
 */
GetBlockDetailsByBlockHashFromCallbackRIBSZ.prototype['gasUsed'] = undefined;

/**
 * @member {Array.<String>} microBlocks
 */
GetBlockDetailsByBlockHashFromCallbackRIBSZ.prototype['microBlocks'] = undefined;






export default GetBlockDetailsByBlockHashFromCallbackRIBSZ;

