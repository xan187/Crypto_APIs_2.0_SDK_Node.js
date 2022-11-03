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
import FreezeTronEnergyOrBandwidthRIDestinationsInner from './FreezeTronEnergyOrBandwidthRIDestinationsInner';
import FreezeTronEnergyOrBandwidthRITransactionAmount from './FreezeTronEnergyOrBandwidthRITransactionAmount';

/**
 * The FreezeTronEnergyOrBandwidthRI model module.
 * @module model/FreezeTronEnergyOrBandwidthRI
 * @version 1.10.0
 */
class FreezeTronEnergyOrBandwidthRI {
    /**
     * Constructs a new <code>FreezeTronEnergyOrBandwidthRI</code>.
     * @alias module:model/FreezeTronEnergyOrBandwidthRI
     * @param address {String} Defines the sender's public address.
     * @param destinations {Array.<module:model/FreezeTronEnergyOrBandwidthRIDestinationsInner>} Defines the destination of the transaction
     * @param resource {String} Defines the resource staking for (eg. Bandwidth, Energy)
     * @param status {module:model/FreezeTronEnergyOrBandwidthRI.StatusEnum} Represents the status of the transaction.
     * @param transactionId {String} Defines the created transaction
     * @param transactionType {module:model/FreezeTronEnergyOrBandwidthRI.TransactionTypeEnum} Defines the type of the transacted units.
     * @param walletId {String} Represents the sender's specific and unique Wallet ID of the sender.
     * @param transactionAmount {module:model/FreezeTronEnergyOrBandwidthRITransactionAmount} 
     */
    constructor(address, destinations, resource, status, transactionId, transactionType, walletId, transactionAmount) { 
        
        FreezeTronEnergyOrBandwidthRI.initialize(this, address, destinations, resource, status, transactionId, transactionType, walletId, transactionAmount);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, address, destinations, resource, status, transactionId, transactionType, walletId, transactionAmount) { 
        obj['address'] = address;
        obj['destinations'] = destinations;
        obj['resource'] = resource;
        obj['status'] = status;
        obj['transactionId'] = transactionId;
        obj['transactionType'] = transactionType;
        obj['walletId'] = walletId;
        obj['transactionAmount'] = transactionAmount;
    }

    /**
     * Constructs a <code>FreezeTronEnergyOrBandwidthRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FreezeTronEnergyOrBandwidthRI} obj Optional instance to populate.
     * @return {module:model/FreezeTronEnergyOrBandwidthRI} The populated <code>FreezeTronEnergyOrBandwidthRI</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FreezeTronEnergyOrBandwidthRI();

            if (data.hasOwnProperty('additionalData')) {
                obj['additionalData'] = ApiClient.convertToType(data['additionalData'], 'String');
            }
            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('callbackSecretKey')) {
                obj['callbackSecretKey'] = ApiClient.convertToType(data['callbackSecretKey'], 'String');
            }
            if (data.hasOwnProperty('callbackUrl')) {
                obj['callbackUrl'] = ApiClient.convertToType(data['callbackUrl'], 'String');
            }
            if (data.hasOwnProperty('destinations')) {
                obj['destinations'] = ApiClient.convertToType(data['destinations'], [FreezeTronEnergyOrBandwidthRIDestinationsInner]);
            }
            if (data.hasOwnProperty('resource')) {
                obj['resource'] = ApiClient.convertToType(data['resource'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('transactionId')) {
                obj['transactionId'] = ApiClient.convertToType(data['transactionId'], 'String');
            }
            if (data.hasOwnProperty('transactionType')) {
                obj['transactionType'] = ApiClient.convertToType(data['transactionType'], 'String');
            }
            if (data.hasOwnProperty('walletId')) {
                obj['walletId'] = ApiClient.convertToType(data['walletId'], 'String');
            }
            if (data.hasOwnProperty('transactionAmount')) {
                obj['transactionAmount'] = FreezeTronEnergyOrBandwidthRITransactionAmount.constructFromObject(data['transactionAmount']);
            }
        }
        return obj;
    }


}

/**
 * Defines a transaction note with additional details
 * @member {String} additionalData
 */
FreezeTronEnergyOrBandwidthRI.prototype['additionalData'] = undefined;

/**
 * Defines the sender's public address.
 * @member {String} address
 */
FreezeTronEnergyOrBandwidthRI.prototype['address'] = undefined;

/**
 * Represents the Secret Key value provided by the customer. This field is used for security purposes during the callback notification, in order to prove the sender of the callback as Crypto APIs. For more information please see our Documentation.
 * @member {String} callbackSecretKey
 */
FreezeTronEnergyOrBandwidthRI.prototype['callbackSecretKey'] = undefined;

/**
 * Represents the URL that is set by the customer where the callback will be received at. The callback notification will be received only if and when the event occurs. We support ONLY httpS type of protocol.
 * @member {String} callbackUrl
 */
FreezeTronEnergyOrBandwidthRI.prototype['callbackUrl'] = undefined;

/**
 * Defines the destination of the transaction
 * @member {Array.<module:model/FreezeTronEnergyOrBandwidthRIDestinationsInner>} destinations
 */
FreezeTronEnergyOrBandwidthRI.prototype['destinations'] = undefined;

/**
 * Defines the resource staking for (eg. Bandwidth, Energy)
 * @member {String} resource
 */
FreezeTronEnergyOrBandwidthRI.prototype['resource'] = undefined;

/**
 * Represents the status of the transaction.
 * @member {module:model/FreezeTronEnergyOrBandwidthRI.StatusEnum} status
 */
FreezeTronEnergyOrBandwidthRI.prototype['status'] = undefined;

/**
 * Defines the created transaction
 * @member {String} transactionId
 */
FreezeTronEnergyOrBandwidthRI.prototype['transactionId'] = undefined;

/**
 * Defines the type of the transacted units.
 * @member {module:model/FreezeTronEnergyOrBandwidthRI.TransactionTypeEnum} transactionType
 */
FreezeTronEnergyOrBandwidthRI.prototype['transactionType'] = undefined;

/**
 * Represents the sender's specific and unique Wallet ID of the sender.
 * @member {String} walletId
 */
FreezeTronEnergyOrBandwidthRI.prototype['walletId'] = undefined;

/**
 * @member {module:model/FreezeTronEnergyOrBandwidthRITransactionAmount} transactionAmount
 */
FreezeTronEnergyOrBandwidthRI.prototype['transactionAmount'] = undefined;





/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
FreezeTronEnergyOrBandwidthRI['StatusEnum'] = {

    /**
     * value: "created"
     * @const
     */
    "created": "created",

    /**
     * value: "await-approval"
     * @const
     */
    "await-approval": "await-approval",

    /**
     * value: "pending"
     * @const
     */
    "pending": "pending",

    /**
     * value: "prepared"
     * @const
     */
    "prepared": "prepared",

    /**
     * value: "signed"
     * @const
     */
    "signed": "signed",

    /**
     * value: "broadcasted"
     * @const
     */
    "broadcasted": "broadcasted",

    /**
     * value: "success"
     * @const
     */
    "success": "success",

    /**
     * value: "failed"
     * @const
     */
    "failed": "failed",

    /**
     * value: "rejected"
     * @const
     */
    "rejected": "rejected",

    /**
     * value: "mined"
     * @const
     */
    "mined": "mined",

    /**
     * value: "mined-with-errors"
     * @const
     */
    "mined-with-errors": "mined-with-errors"
};


/**
 * Allowed values for the <code>transactionType</code> property.
 * @enum {String}
 * @readonly
 */
FreezeTronEnergyOrBandwidthRI['TransactionTypeEnum'] = {

    /**
     * value: "staking"
     * @const
     */
    "staking": "staking",

    /**
     * value: "unstaking"
     * @const
     */
    "unstaking": "unstaking"
};



export default FreezeTronEnergyOrBandwidthRI;

