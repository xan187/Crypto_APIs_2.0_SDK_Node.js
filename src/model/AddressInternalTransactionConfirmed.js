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
import AddressInternalTransactionConfirmedData from './AddressInternalTransactionConfirmedData';

/**
 * The AddressInternalTransactionConfirmed model module.
 * @module model/AddressInternalTransactionConfirmed
 * @version 1.7.2
 */
class AddressInternalTransactionConfirmed {
    /**
     * Constructs a new <code>AddressInternalTransactionConfirmed</code>.
     * @alias module:model/AddressInternalTransactionConfirmed
     * @param apiVersion {String} Specifies the version of the API that incorporates this endpoint.
     * @param referenceId {String} Represents a unique identifier that serves as reference to the specific request which prompts a callback, e.g. Blockchain Events Subscription, Blockchain Automation, etc.
     * @param idempotencyKey {String} Specifies a unique ID generated by the system and attached to each callback. It is used by the server to recognize consecutive requests with the same data with the purpose not to perform the same operation twice.
     * @param data {module:model/AddressInternalTransactionConfirmedData} 
     */
    constructor(apiVersion, referenceId, idempotencyKey, data) { 
        
        AddressInternalTransactionConfirmed.initialize(this, apiVersion, referenceId, idempotencyKey, data);
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
     * Constructs a <code>AddressInternalTransactionConfirmed</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddressInternalTransactionConfirmed} obj Optional instance to populate.
     * @return {module:model/AddressInternalTransactionConfirmed} The populated <code>AddressInternalTransactionConfirmed</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddressInternalTransactionConfirmed();

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
                obj['data'] = AddressInternalTransactionConfirmedData.constructFromObject(data['data']);
            }
        }
        return obj;
    }


}

/**
 * Specifies the version of the API that incorporates this endpoint.
 * @member {String} apiVersion
 */
AddressInternalTransactionConfirmed.prototype['apiVersion'] = undefined;

/**
 * Represents a unique identifier that serves as reference to the specific request which prompts a callback, e.g. Blockchain Events Subscription, Blockchain Automation, etc.
 * @member {String} referenceId
 */
AddressInternalTransactionConfirmed.prototype['referenceId'] = undefined;

/**
 * Specifies a unique ID generated by the system and attached to each callback. It is used by the server to recognize consecutive requests with the same data with the purpose not to perform the same operation twice.
 * @member {String} idempotencyKey
 */
AddressInternalTransactionConfirmed.prototype['idempotencyKey'] = undefined;

/**
 * @member {module:model/AddressInternalTransactionConfirmedData} data
 */
AddressInternalTransactionConfirmed.prototype['data'] = undefined;






export default AddressInternalTransactionConfirmed;

