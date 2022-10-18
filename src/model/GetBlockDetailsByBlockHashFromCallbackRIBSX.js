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
import GetLatestMinedXRPRippleBlockRITotalCoins from './GetLatestMinedXRPRippleBlockRITotalCoins';
import GetLatestMinedXRPRippleBlockRITotalFees from './GetLatestMinedXRPRippleBlockRITotalFees';

/**
 * The GetBlockDetailsByBlockHashFromCallbackRIBSX model module.
 * @module model/GetBlockDetailsByBlockHashFromCallbackRIBSX
 * @version 1.9.0
 */
class GetBlockDetailsByBlockHashFromCallbackRIBSX {
    /**
     * Constructs a new <code>GetBlockDetailsByBlockHashFromCallbackRIBSX</code>.
     * XRP
     * @alias module:model/GetBlockDetailsByBlockHashFromCallbackRIBSX
     * @param totalCoins {module:model/GetLatestMinedXRPRippleBlockRITotalCoins} 
     * @param totalFees {module:model/GetLatestMinedXRPRippleBlockRITotalFees} 
     */
    constructor(totalCoins, totalFees) { 
        
        GetBlockDetailsByBlockHashFromCallbackRIBSX.initialize(this, totalCoins, totalFees);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, totalCoins, totalFees) { 
        obj['totalCoins'] = totalCoins;
        obj['totalFees'] = totalFees;
    }

    /**
     * Constructs a <code>GetBlockDetailsByBlockHashFromCallbackRIBSX</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetBlockDetailsByBlockHashFromCallbackRIBSX} obj Optional instance to populate.
     * @return {module:model/GetBlockDetailsByBlockHashFromCallbackRIBSX} The populated <code>GetBlockDetailsByBlockHashFromCallbackRIBSX</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetBlockDetailsByBlockHashFromCallbackRIBSX();

            if (data.hasOwnProperty('totalCoins')) {
                obj['totalCoins'] = GetLatestMinedXRPRippleBlockRITotalCoins.constructFromObject(data['totalCoins']);
            }
            if (data.hasOwnProperty('totalFees')) {
                obj['totalFees'] = GetLatestMinedXRPRippleBlockRITotalFees.constructFromObject(data['totalFees']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/GetLatestMinedXRPRippleBlockRITotalCoins} totalCoins
 */
GetBlockDetailsByBlockHashFromCallbackRIBSX.prototype['totalCoins'] = undefined;

/**
 * @member {module:model/GetLatestMinedXRPRippleBlockRITotalFees} totalFees
 */
GetBlockDetailsByBlockHashFromCallbackRIBSX.prototype['totalFees'] = undefined;






export default GetBlockDetailsByBlockHashFromCallbackRIBSX;

