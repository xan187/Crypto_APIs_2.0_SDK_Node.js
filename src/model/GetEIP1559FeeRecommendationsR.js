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
import GetEIP1559FeeRecommendationsRData from './GetEIP1559FeeRecommendationsRData';

/**
 * The GetEIP1559FeeRecommendationsR model module.
 * @module model/GetEIP1559FeeRecommendationsR
 * @version 1.8.0
 */
class GetEIP1559FeeRecommendationsR {
    /**
     * Constructs a new <code>GetEIP1559FeeRecommendationsR</code>.
     * @alias module:model/GetEIP1559FeeRecommendationsR
     * @param apiVersion {String} Specifies the version of the API that incorporates this endpoint.
     * @param requestId {String} Defines the ID of the request. The `requestId` is generated by Crypto APIs and it's unique for every request.
     * @param data {module:model/GetEIP1559FeeRecommendationsRData} 
     */
    constructor(apiVersion, requestId, data) { 
        
        GetEIP1559FeeRecommendationsR.initialize(this, apiVersion, requestId, data);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, apiVersion, requestId, data) { 
        obj['apiVersion'] = apiVersion;
        obj['requestId'] = requestId;
        obj['data'] = data;
    }

    /**
     * Constructs a <code>GetEIP1559FeeRecommendationsR</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetEIP1559FeeRecommendationsR} obj Optional instance to populate.
     * @return {module:model/GetEIP1559FeeRecommendationsR} The populated <code>GetEIP1559FeeRecommendationsR</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetEIP1559FeeRecommendationsR();

            if (data.hasOwnProperty('apiVersion')) {
                obj['apiVersion'] = ApiClient.convertToType(data['apiVersion'], 'String');
            }
            if (data.hasOwnProperty('requestId')) {
                obj['requestId'] = ApiClient.convertToType(data['requestId'], 'String');
            }
            if (data.hasOwnProperty('context')) {
                obj['context'] = ApiClient.convertToType(data['context'], 'String');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = GetEIP1559FeeRecommendationsRData.constructFromObject(data['data']);
            }
        }
        return obj;
    }


}

/**
 * Specifies the version of the API that incorporates this endpoint.
 * @member {String} apiVersion
 */
GetEIP1559FeeRecommendationsR.prototype['apiVersion'] = undefined;

/**
 * Defines the ID of the request. The `requestId` is generated by Crypto APIs and it's unique for every request.
 * @member {String} requestId
 */
GetEIP1559FeeRecommendationsR.prototype['requestId'] = undefined;

/**
 * In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
 * @member {String} context
 */
GetEIP1559FeeRecommendationsR.prototype['context'] = undefined;

/**
 * @member {module:model/GetEIP1559FeeRecommendationsRData} data
 */
GetEIP1559FeeRecommendationsR.prototype['data'] = undefined;






export default GetEIP1559FeeRecommendationsR;

