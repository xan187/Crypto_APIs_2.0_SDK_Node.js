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
import BannedIpAddress from './BannedIpAddress';
import BannedIpAddressDetailsInner from './BannedIpAddressDetailsInner';
import EndpointNotAllowedForApiKey from './EndpointNotAllowedForApiKey';
import EndpointNotAllowedForPlan from './EndpointNotAllowedForPlan';
import FeatureMainnetsNotAllowedForPlan from './FeatureMainnetsNotAllowedForPlan';

/**
 * The GetBlockDetailsByBlockHeightE403 model module.
 * @module model/GetBlockDetailsByBlockHeightE403
 * @version 1.8.0
 */
class GetBlockDetailsByBlockHeightE403 {
    /**
     * Constructs a new <code>GetBlockDetailsByBlockHeightE403</code>.
     * @alias module:model/GetBlockDetailsByBlockHeightE403
     * @implements module:model/BannedIpAddress
     * @implements module:model/EndpointNotAllowedForPlan
     * @implements module:model/EndpointNotAllowedForApiKey
     * @implements module:model/FeatureMainnetsNotAllowedForPlan
     * @param code {String} Specifies an error code, e.g. error 404.
     * @param message {String} Specifies the message of the error, i.e. why the error was returned, e.g. error 404 stands for “not found”.
     */
    constructor(code, message) { 
        BannedIpAddress.initialize(this, code, message);EndpointNotAllowedForPlan.initialize(this, code, message);EndpointNotAllowedForApiKey.initialize(this, code, message);FeatureMainnetsNotAllowedForPlan.initialize(this, code, message);
        GetBlockDetailsByBlockHeightE403.initialize(this, code, message);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, code, message) { 
        obj['code'] = code;
        obj['message'] = message;
    }

    /**
     * Constructs a <code>GetBlockDetailsByBlockHeightE403</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetBlockDetailsByBlockHeightE403} obj Optional instance to populate.
     * @return {module:model/GetBlockDetailsByBlockHeightE403} The populated <code>GetBlockDetailsByBlockHeightE403</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetBlockDetailsByBlockHeightE403();
            BannedIpAddress.constructFromObject(data, obj);
            EndpointNotAllowedForPlan.constructFromObject(data, obj);
            EndpointNotAllowedForApiKey.constructFromObject(data, obj);
            FeatureMainnetsNotAllowedForPlan.constructFromObject(data, obj);

            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('details')) {
                obj['details'] = ApiClient.convertToType(data['details'], [BannedIpAddressDetailsInner]);
            }
        }
        return obj;
    }


}

/**
 * Specifies an error code, e.g. error 404.
 * @member {String} code
 */
GetBlockDetailsByBlockHeightE403.prototype['code'] = undefined;

/**
 * Specifies the message of the error, i.e. why the error was returned, e.g. error 404 stands for “not found”.
 * @member {String} message
 */
GetBlockDetailsByBlockHeightE403.prototype['message'] = undefined;

/**
 * @member {Array.<module:model/BannedIpAddressDetailsInner>} details
 */
GetBlockDetailsByBlockHeightE403.prototype['details'] = undefined;


// Implement BannedIpAddress interface:
/**
 * Specifies an error code, e.g. error 404.
 * @member {String} code
 */
BannedIpAddress.prototype['code'] = undefined;
/**
 * Specifies the message of the error, i.e. why the error was returned, e.g. error 404 stands for “not found”.
 * @member {String} message
 */
BannedIpAddress.prototype['message'] = undefined;
/**
 * @member {Array.<module:model/BannedIpAddressDetailsInner>} details
 */
BannedIpAddress.prototype['details'] = undefined;
// Implement EndpointNotAllowedForPlan interface:
/**
 * Specifies an error code, e.g. error 404.
 * @member {String} code
 */
EndpointNotAllowedForPlan.prototype['code'] = undefined;
/**
 * Specifies the message of the error, i.e. why the error was returned, e.g. error 404 stands for “not found”.
 * @member {String} message
 */
EndpointNotAllowedForPlan.prototype['message'] = undefined;
/**
 * @member {Array.<module:model/BannedIpAddressDetailsInner>} details
 */
EndpointNotAllowedForPlan.prototype['details'] = undefined;
// Implement EndpointNotAllowedForApiKey interface:
/**
 * Specifies an error code, e.g. error 404.
 * @member {String} code
 */
EndpointNotAllowedForApiKey.prototype['code'] = undefined;
/**
 * Specifies the message of the error, i.e. why the error was returned, e.g. error 404 stands for “not found”.
 * @member {String} message
 */
EndpointNotAllowedForApiKey.prototype['message'] = undefined;
/**
 * @member {Array.<module:model/BannedIpAddressDetailsInner>} details
 */
EndpointNotAllowedForApiKey.prototype['details'] = undefined;
// Implement FeatureMainnetsNotAllowedForPlan interface:
/**
 * Specifies an error code, e.g. error 404.
 * @member {String} code
 */
FeatureMainnetsNotAllowedForPlan.prototype['code'] = undefined;
/**
 * Specifies the message of the error, i.e. why the error was returned, e.g. error 404 stands for “not found”.
 * @member {String} message
 */
FeatureMainnetsNotAllowedForPlan.prototype['message'] = undefined;
/**
 * @member {Array.<module:model/BannedIpAddressDetailsInner>} details
 */
FeatureMainnetsNotAllowedForPlan.prototype['details'] = undefined;




export default GetBlockDetailsByBlockHeightE403;

