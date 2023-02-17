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
import AlreadyExists from './AlreadyExists';
import BannedIpAddressDetailsInner from './BannedIpAddressDetailsInner';
import InvalidData from './InvalidData';

/**
 * The NewConfirmedInternalTransactionsForSpecificAmountE409 model module.
 * @module model/NewConfirmedInternalTransactionsForSpecificAmountE409
 * @version 1.13.0
 */
class NewConfirmedInternalTransactionsForSpecificAmountE409 {
    /**
     * Constructs a new <code>NewConfirmedInternalTransactionsForSpecificAmountE409</code>.
     * @alias module:model/NewConfirmedInternalTransactionsForSpecificAmountE409
     * @implements module:model/InvalidData
     * @implements module:model/AlreadyExists
     * @param code {String} Specifies an error code, e.g. error 404.
     * @param message {String} Specifies the message of the error, i.e. why the error was returned, e.g. error 404 stands for “not found”.
     */
    constructor(code, message) { 
        InvalidData.initialize(this, code, message);AlreadyExists.initialize(this, code, message);
        NewConfirmedInternalTransactionsForSpecificAmountE409.initialize(this, code, message);
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
     * Constructs a <code>NewConfirmedInternalTransactionsForSpecificAmountE409</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewConfirmedInternalTransactionsForSpecificAmountE409} obj Optional instance to populate.
     * @return {module:model/NewConfirmedInternalTransactionsForSpecificAmountE409} The populated <code>NewConfirmedInternalTransactionsForSpecificAmountE409</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NewConfirmedInternalTransactionsForSpecificAmountE409();
            InvalidData.constructFromObject(data, obj);
            AlreadyExists.constructFromObject(data, obj);

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
NewConfirmedInternalTransactionsForSpecificAmountE409.prototype['code'] = undefined;

/**
 * Specifies the message of the error, i.e. why the error was returned, e.g. error 404 stands for “not found”.
 * @member {String} message
 */
NewConfirmedInternalTransactionsForSpecificAmountE409.prototype['message'] = undefined;

/**
 * @member {Array.<module:model/BannedIpAddressDetailsInner>} details
 */
NewConfirmedInternalTransactionsForSpecificAmountE409.prototype['details'] = undefined;


// Implement InvalidData interface:
/**
 * Specifies an error code, e.g. error 404.
 * @member {String} code
 */
InvalidData.prototype['code'] = undefined;
/**
 * Specifies the message of the error, i.e. why the error was returned, e.g. error 404 stands for “not found”.
 * @member {String} message
 */
InvalidData.prototype['message'] = undefined;
/**
 * @member {Array.<module:model/BannedIpAddressDetailsInner>} details
 */
InvalidData.prototype['details'] = undefined;
// Implement AlreadyExists interface:
/**
 * Specifies an error code, e.g. error 404.
 * @member {String} code
 */
AlreadyExists.prototype['code'] = undefined;
/**
 * Specifies the message of the error, i.e. why the error was returned, e.g. error 404 stands for “not found”.
 * @member {String} message
 */
AlreadyExists.prototype['message'] = undefined;
/**
 * @member {Array.<module:model/BannedIpAddressDetailsInner>} details
 */
AlreadyExists.prototype['details'] = undefined;




export default NewConfirmedInternalTransactionsForSpecificAmountE409;

