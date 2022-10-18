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
 * The NewRevertedBlockRI model module.
 * @module model/NewRevertedBlockRI
 * @version 1.9.0
 */
class NewRevertedBlockRI {
    /**
     * Constructs a new <code>NewRevertedBlockRI</code>.
     * @alias module:model/NewRevertedBlockRI
     * @param address {String} Represents the address of the transaction, per which the result is returned.
     * @param callbackSecretKey {String} Represents the Secret Key value provided by the customer. This field is used for security purposes during the callback notification, in order to prove the sender of the callback as Crypto APIs. For more information please see our Documentation.
     * @param createdTimestamp {Number} Defines the specific time/date when the subscription was created in Unix Timestamp.
     * @param eventType {String} Defines the type of the specific event available for the customer to subscribe to for callback notification.
     * @param isActive {Boolean} Defines whether the subscription is active or not. Set as boolean.
     * @param referenceId {String} Represents a unique ID used to reference the specific callback subscription.
     */
    constructor(address, callbackSecretKey, createdTimestamp, eventType, isActive, referenceId) { 
        
        NewRevertedBlockRI.initialize(this, address, callbackSecretKey, createdTimestamp, eventType, isActive, referenceId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, address, callbackSecretKey, createdTimestamp, eventType, isActive, referenceId) { 
        obj['address'] = address;
        obj['callbackSecretKey'] = callbackSecretKey;
        obj['createdTimestamp'] = createdTimestamp;
        obj['eventType'] = eventType;
        obj['isActive'] = isActive;
        obj['referenceId'] = referenceId;
    }

    /**
     * Constructs a <code>NewRevertedBlockRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewRevertedBlockRI} obj Optional instance to populate.
     * @return {module:model/NewRevertedBlockRI} The populated <code>NewRevertedBlockRI</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NewRevertedBlockRI();

            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('callbackSecretKey')) {
                obj['callbackSecretKey'] = ApiClient.convertToType(data['callbackSecretKey'], 'String');
            }
            if (data.hasOwnProperty('callbackUrl')) {
                obj['callbackUrl'] = ApiClient.convertToType(data['callbackUrl'], 'String');
            }
            if (data.hasOwnProperty('createdTimestamp')) {
                obj['createdTimestamp'] = ApiClient.convertToType(data['createdTimestamp'], 'Number');
            }
            if (data.hasOwnProperty('eventType')) {
                obj['eventType'] = ApiClient.convertToType(data['eventType'], 'String');
            }
            if (data.hasOwnProperty('isActive')) {
                obj['isActive'] = ApiClient.convertToType(data['isActive'], 'Boolean');
            }
            if (data.hasOwnProperty('referenceId')) {
                obj['referenceId'] = ApiClient.convertToType(data['referenceId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Represents the address of the transaction, per which the result is returned.
 * @member {String} address
 */
NewRevertedBlockRI.prototype['address'] = undefined;

/**
 * Represents the Secret Key value provided by the customer. This field is used for security purposes during the callback notification, in order to prove the sender of the callback as Crypto APIs. For more information please see our Documentation.
 * @member {String} callbackSecretKey
 */
NewRevertedBlockRI.prototype['callbackSecretKey'] = undefined;

/**
 * Represents the URL that is set by the customer where the callback will be received at. The callback notification will be received only if and when the event occurs. We support ONLY httpS type of protocol.
 * @member {String} callbackUrl
 */
NewRevertedBlockRI.prototype['callbackUrl'] = undefined;

/**
 * Defines the specific time/date when the subscription was created in Unix Timestamp.
 * @member {Number} createdTimestamp
 */
NewRevertedBlockRI.prototype['createdTimestamp'] = undefined;

/**
 * Defines the type of the specific event available for the customer to subscribe to for callback notification.
 * @member {String} eventType
 */
NewRevertedBlockRI.prototype['eventType'] = undefined;

/**
 * Defines whether the subscription is active or not. Set as boolean.
 * @member {Boolean} isActive
 */
NewRevertedBlockRI.prototype['isActive'] = undefined;

/**
 * Represents a unique ID used to reference the specific callback subscription.
 * @member {String} referenceId
 */
NewRevertedBlockRI.prototype['referenceId'] = undefined;






export default NewRevertedBlockRI;

