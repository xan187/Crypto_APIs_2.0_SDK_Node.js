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
import GetAssetDetailsByAssetSymbolE403 from './GetAssetDetailsByAssetSymbolE403';

/**
 * The GetAssetDetailsByAssetSymbol403Response model module.
 * @module model/GetAssetDetailsByAssetSymbol403Response
 * @version 1.8.0
 */
class GetAssetDetailsByAssetSymbol403Response {
    /**
     * Constructs a new <code>GetAssetDetailsByAssetSymbol403Response</code>.
     * @alias module:model/GetAssetDetailsByAssetSymbol403Response
     * @param apiVersion {String} Specifies the version of the API that incorporates this endpoint.
     * @param requestId {String} Defines the ID of the request. The `requestId` is generated by Crypto APIs and it's unique for every request.
     * @param error {module:model/GetAssetDetailsByAssetSymbolE403} 
     */
    constructor(apiVersion, requestId, error) { 
        
        GetAssetDetailsByAssetSymbol403Response.initialize(this, apiVersion, requestId, error);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, apiVersion, requestId, error) { 
        obj['apiVersion'] = apiVersion;
        obj['requestId'] = requestId;
        obj['error'] = error;
    }

    /**
     * Constructs a <code>GetAssetDetailsByAssetSymbol403Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetAssetDetailsByAssetSymbol403Response} obj Optional instance to populate.
     * @return {module:model/GetAssetDetailsByAssetSymbol403Response} The populated <code>GetAssetDetailsByAssetSymbol403Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetAssetDetailsByAssetSymbol403Response();

            if (data.hasOwnProperty('apiVersion')) {
                obj['apiVersion'] = ApiClient.convertToType(data['apiVersion'], 'String');
            }
            if (data.hasOwnProperty('requestId')) {
                obj['requestId'] = ApiClient.convertToType(data['requestId'], 'String');
            }
            if (data.hasOwnProperty('context')) {
                obj['context'] = ApiClient.convertToType(data['context'], 'String');
            }
            if (data.hasOwnProperty('error')) {
                obj['error'] = GetAssetDetailsByAssetSymbolE403.constructFromObject(data['error']);
            }
        }
        return obj;
    }


}

/**
 * Specifies the version of the API that incorporates this endpoint.
 * @member {String} apiVersion
 */
GetAssetDetailsByAssetSymbol403Response.prototype['apiVersion'] = undefined;

/**
 * Defines the ID of the request. The `requestId` is generated by Crypto APIs and it's unique for every request.
 * @member {String} requestId
 */
GetAssetDetailsByAssetSymbol403Response.prototype['requestId'] = undefined;

/**
 * In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
 * @member {String} context
 */
GetAssetDetailsByAssetSymbol403Response.prototype['context'] = undefined;

/**
 * @member {module:model/GetAssetDetailsByAssetSymbolE403} error
 */
GetAssetDetailsByAssetSymbol403Response.prototype['error'] = undefined;






export default GetAssetDetailsByAssetSymbol403Response;

