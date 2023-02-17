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
import TokensForwardingFailData from './TokensForwardingFailData';

/**
 * The TokensForwardingFail model module.
 * @module model/TokensForwardingFail
 * @version 1.13.0
 */
class TokensForwardingFail {
    /**
     * Constructs a new <code>TokensForwardingFail</code>.
     * @alias module:model/TokensForwardingFail
     * @param apiVersion {String} Specifies the version of the API that incorporates this endpoint.
     * @param referenceId {String} Represents a unique identifier that serves as reference to the specific request which prompts a callback, e.g. Blockchain Events Subscription, Blockchain Automation, etc.
     * @param idempotencyKey {String} Specifies a unique ID generated by the system and attached to each callback. It is used by the server to recognize consecutive requests with the same data with the purpose not to perform the same operation twice.
     * @param data {module:model/TokensForwardingFailData} 
     */
    constructor(apiVersion, referenceId, idempotencyKey, data) { 
        
        TokensForwardingFail.initialize(this, apiVersion, referenceId, idempotencyKey, data);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, apiVersion, referenceId, idempotencyKey, data) { 
        obj['apiVersion'] = apiVersion;
        obj['referenceId'] = referenceId;
        obj['idempotencyKey'] = idempotencyKey;
        obj['data'] = data;
    }

    /**
     * Constructs a <code>TokensForwardingFail</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TokensForwardingFail} obj Optional instance to populate.
     * @return {module:model/TokensForwardingFail} The populated <code>TokensForwardingFail</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TokensForwardingFail();

            if (data.hasOwnProperty('apiVersion')) {
                obj['apiVersion'] = ApiClient.convertToType(data['apiVersion'], 'String');
            }
            if (data.hasOwnProperty('referenceId')) {
                obj['referenceId'] = ApiClient.convertToType(data['referenceId'], 'String');
            }
            if (data.hasOwnProperty('idempotencyKey')) {
                obj['idempotencyKey'] = ApiClient.convertToType(data['idempotencyKey'], 'String');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = TokensForwardingFailData.constructFromObject(data['data']);
            }
        }
        return obj;
    }


}

/**
 * Specifies the version of the API that incorporates this endpoint.
 * @member {String} apiVersion
 */
TokensForwardingFail.prototype['apiVersion'] = undefined;

/**
 * Represents a unique identifier that serves as reference to the specific request which prompts a callback, e.g. Blockchain Events Subscription, Blockchain Automation, etc.
 * @member {String} referenceId
 */
TokensForwardingFail.prototype['referenceId'] = undefined;

/**
 * Specifies a unique ID generated by the system and attached to each callback. It is used by the server to recognize consecutive requests with the same data with the purpose not to perform the same operation twice.
 * @member {String} idempotencyKey
 */
TokensForwardingFail.prototype['idempotencyKey'] = undefined;

/**
 * @member {module:model/TokensForwardingFailData} data
 */
TokensForwardingFail.prototype['data'] = undefined;






export default TokensForwardingFail;

