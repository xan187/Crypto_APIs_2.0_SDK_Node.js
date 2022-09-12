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
import GetHDWalletXPubYPubZPubAssetsRI from './GetHDWalletXPubYPubZPubAssetsRI';

/**
 * The GetHDWalletXPubYPubZPubAssetsRData model module.
 * @module model/GetHDWalletXPubYPubZPubAssetsRData
 * @version 1.8.0
 */
class GetHDWalletXPubYPubZPubAssetsRData {
    /**
     * Constructs a new <code>GetHDWalletXPubYPubZPubAssetsRData</code>.
     * @alias module:model/GetHDWalletXPubYPubZPubAssetsRData
     * @param item {module:model/GetHDWalletXPubYPubZPubAssetsRI} 
     */
    constructor(item) { 
        
        GetHDWalletXPubYPubZPubAssetsRData.initialize(this, item);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, item) { 
        obj['item'] = item;
    }

    /**
     * Constructs a <code>GetHDWalletXPubYPubZPubAssetsRData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetHDWalletXPubYPubZPubAssetsRData} obj Optional instance to populate.
     * @return {module:model/GetHDWalletXPubYPubZPubAssetsRData} The populated <code>GetHDWalletXPubYPubZPubAssetsRData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetHDWalletXPubYPubZPubAssetsRData();

            if (data.hasOwnProperty('item')) {
                obj['item'] = GetHDWalletXPubYPubZPubAssetsRI.constructFromObject(data['item']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/GetHDWalletXPubYPubZPubAssetsRI} item
 */
GetHDWalletXPubYPubZPubAssetsRData.prototype['item'] = undefined;






export default GetHDWalletXPubYPubZPubAssetsRData;

