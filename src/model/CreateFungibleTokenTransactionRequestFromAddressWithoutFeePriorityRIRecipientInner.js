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
 * The CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIRecipientInner model module.
 * @module model/CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIRecipientInner
 * @version 1.8.0
 */
class CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIRecipientInner {
    /**
     * Constructs a new <code>CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIRecipientInner</code>.
     * @alias module:model/CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIRecipientInner
     * @param address {String} Defines the destination address.
     * @param amount {String} Defines the amount sent to the destination address.
     * @param unit {String} Represents the unit of the tokens amount recieved.
     */
    constructor(address, amount, unit) { 
        
        CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIRecipientInner.initialize(this, address, amount, unit);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, address, amount, unit) { 
        obj['address'] = address;
        obj['amount'] = amount;
        obj['unit'] = unit;
    }

    /**
     * Constructs a <code>CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIRecipientInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIRecipientInner} obj Optional instance to populate.
     * @return {module:model/CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIRecipientInner} The populated <code>CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIRecipientInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIRecipientInner();

            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
            }
            if (data.hasOwnProperty('unit')) {
                obj['unit'] = ApiClient.convertToType(data['unit'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Defines the destination address.
 * @member {String} address
 */
CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIRecipientInner.prototype['address'] = undefined;

/**
 * Defines the amount sent to the destination address.
 * @member {String} amount
 */
CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIRecipientInner.prototype['amount'] = undefined;

/**
 * Represents the unit of the tokens amount recieved.
 * @member {String} unit
 */
CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIRecipientInner.prototype['unit'] = undefined;






export default CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIRecipientInner;

