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
import ListXRPRippleTransactionsByBlockHeightRIFee from './ListXRPRippleTransactionsByBlockHeightRIFee';
import ListXRPRippleTransactionsByBlockHeightRIOffer from './ListXRPRippleTransactionsByBlockHeightRIOffer';
import ListXRPRippleTransactionsByBlockHeightRIReceive from './ListXRPRippleTransactionsByBlockHeightRIReceive';
import ListXRPRippleTransactionsByBlockHeightRIRecipientsInner from './ListXRPRippleTransactionsByBlockHeightRIRecipientsInner';
import ListXRPRippleTransactionsByBlockHeightRISendersInner from './ListXRPRippleTransactionsByBlockHeightRISendersInner';
import ListXRPRippleTransactionsByBlockHeightRIValue from './ListXRPRippleTransactionsByBlockHeightRIValue';

/**
 * The ListXRPRippleTransactionsByBlockHeightRI model module.
 * @module model/ListXRPRippleTransactionsByBlockHeightRI
 * @version 1.10.0
 */
class ListXRPRippleTransactionsByBlockHeightRI {
    /**
     * Constructs a new <code>ListXRPRippleTransactionsByBlockHeightRI</code>.
     * @alias module:model/ListXRPRippleTransactionsByBlockHeightRI
     * @param index {Number} 
     * @param minedInBlockHash {String} 
     * @param recipients {Array.<module:model/ListXRPRippleTransactionsByBlockHeightRIRecipientsInner>} Object Array representation of transaction receivers
     * @param senders {Array.<module:model/ListXRPRippleTransactionsByBlockHeightRISendersInner>} Object Array representation of transaction senders
     * @param sequence {Number} 
     * @param status {String} 
     * @param timestamp {Number} Defines the exact date/time in Unix Timestamp when this transaction was mined, confirmed or first seen in Mempool, if it is unconfirmed.
     * @param transactionHash {String} 
     * @param type {String} 
     * @param fee {module:model/ListXRPRippleTransactionsByBlockHeightRIFee} 
     * @param offer {module:model/ListXRPRippleTransactionsByBlockHeightRIOffer} 
     * @param receive {module:model/ListXRPRippleTransactionsByBlockHeightRIReceive} 
     * @param value {module:model/ListXRPRippleTransactionsByBlockHeightRIValue} 
     */
    constructor(index, minedInBlockHash, recipients, senders, sequence, status, timestamp, transactionHash, type, fee, offer, receive, value) { 
        
        ListXRPRippleTransactionsByBlockHeightRI.initialize(this, index, minedInBlockHash, recipients, senders, sequence, status, timestamp, transactionHash, type, fee, offer, receive, value);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, index, minedInBlockHash, recipients, senders, sequence, status, timestamp, transactionHash, type, fee, offer, receive, value) { 
        obj['index'] = index;
        obj['minedInBlockHash'] = minedInBlockHash;
        obj['recipients'] = recipients;
        obj['senders'] = senders;
        obj['sequence'] = sequence;
        obj['status'] = status;
        obj['timestamp'] = timestamp;
        obj['transactionHash'] = transactionHash;
        obj['type'] = type;
        obj['fee'] = fee;
        obj['offer'] = offer;
        obj['receive'] = receive;
        obj['value'] = value;
    }

    /**
     * Constructs a <code>ListXRPRippleTransactionsByBlockHeightRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListXRPRippleTransactionsByBlockHeightRI} obj Optional instance to populate.
     * @return {module:model/ListXRPRippleTransactionsByBlockHeightRI} The populated <code>ListXRPRippleTransactionsByBlockHeightRI</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListXRPRippleTransactionsByBlockHeightRI();

            if (data.hasOwnProperty('additionalData')) {
                obj['additionalData'] = ApiClient.convertToType(data['additionalData'], 'String');
            }
            if (data.hasOwnProperty('destinationTag')) {
                obj['destinationTag'] = ApiClient.convertToType(data['destinationTag'], 'Number');
            }
            if (data.hasOwnProperty('index')) {
                obj['index'] = ApiClient.convertToType(data['index'], 'Number');
            }
            if (data.hasOwnProperty('minedInBlockHash')) {
                obj['minedInBlockHash'] = ApiClient.convertToType(data['minedInBlockHash'], 'String');
            }
            if (data.hasOwnProperty('recipients')) {
                obj['recipients'] = ApiClient.convertToType(data['recipients'], [ListXRPRippleTransactionsByBlockHeightRIRecipientsInner]);
            }
            if (data.hasOwnProperty('senders')) {
                obj['senders'] = ApiClient.convertToType(data['senders'], [ListXRPRippleTransactionsByBlockHeightRISendersInner]);
            }
            if (data.hasOwnProperty('sequence')) {
                obj['sequence'] = ApiClient.convertToType(data['sequence'], 'Number');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('timestamp')) {
                obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'Number');
            }
            if (data.hasOwnProperty('transactionHash')) {
                obj['transactionHash'] = ApiClient.convertToType(data['transactionHash'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('fee')) {
                obj['fee'] = ListXRPRippleTransactionsByBlockHeightRIFee.constructFromObject(data['fee']);
            }
            if (data.hasOwnProperty('offer')) {
                obj['offer'] = ListXRPRippleTransactionsByBlockHeightRIOffer.constructFromObject(data['offer']);
            }
            if (data.hasOwnProperty('receive')) {
                obj['receive'] = ListXRPRippleTransactionsByBlockHeightRIReceive.constructFromObject(data['receive']);
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ListXRPRippleTransactionsByBlockHeightRIValue.constructFromObject(data['value']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} additionalData
 */
ListXRPRippleTransactionsByBlockHeightRI.prototype['additionalData'] = undefined;

/**
 * @member {Number} destinationTag
 */
ListXRPRippleTransactionsByBlockHeightRI.prototype['destinationTag'] = undefined;

/**
 * @member {Number} index
 */
ListXRPRippleTransactionsByBlockHeightRI.prototype['index'] = undefined;

/**
 * @member {String} minedInBlockHash
 */
ListXRPRippleTransactionsByBlockHeightRI.prototype['minedInBlockHash'] = undefined;

/**
 * Object Array representation of transaction receivers
 * @member {Array.<module:model/ListXRPRippleTransactionsByBlockHeightRIRecipientsInner>} recipients
 */
ListXRPRippleTransactionsByBlockHeightRI.prototype['recipients'] = undefined;

/**
 * Object Array representation of transaction senders
 * @member {Array.<module:model/ListXRPRippleTransactionsByBlockHeightRISendersInner>} senders
 */
ListXRPRippleTransactionsByBlockHeightRI.prototype['senders'] = undefined;

/**
 * @member {Number} sequence
 */
ListXRPRippleTransactionsByBlockHeightRI.prototype['sequence'] = undefined;

/**
 * @member {String} status
 */
ListXRPRippleTransactionsByBlockHeightRI.prototype['status'] = undefined;

/**
 * Defines the exact date/time in Unix Timestamp when this transaction was mined, confirmed or first seen in Mempool, if it is unconfirmed.
 * @member {Number} timestamp
 */
ListXRPRippleTransactionsByBlockHeightRI.prototype['timestamp'] = undefined;

/**
 * @member {String} transactionHash
 */
ListXRPRippleTransactionsByBlockHeightRI.prototype['transactionHash'] = undefined;

/**
 * @member {String} type
 */
ListXRPRippleTransactionsByBlockHeightRI.prototype['type'] = undefined;

/**
 * @member {module:model/ListXRPRippleTransactionsByBlockHeightRIFee} fee
 */
ListXRPRippleTransactionsByBlockHeightRI.prototype['fee'] = undefined;

/**
 * @member {module:model/ListXRPRippleTransactionsByBlockHeightRIOffer} offer
 */
ListXRPRippleTransactionsByBlockHeightRI.prototype['offer'] = undefined;

/**
 * @member {module:model/ListXRPRippleTransactionsByBlockHeightRIReceive} receive
 */
ListXRPRippleTransactionsByBlockHeightRI.prototype['receive'] = undefined;

/**
 * @member {module:model/ListXRPRippleTransactionsByBlockHeightRIValue} value
 */
ListXRPRippleTransactionsByBlockHeightRI.prototype['value'] = undefined;






export default ListXRPRippleTransactionsByBlockHeightRI;

