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
import ListDepositAddressesRIConfirmedBalance from './ListDepositAddressesRIConfirmedBalance';
import ListDepositAddressesRIFungibleTokensInner from './ListDepositAddressesRIFungibleTokensInner';
import ListDepositAddressesRINonFungibleTokensInner from './ListDepositAddressesRINonFungibleTokensInner';

/**
 * The ListDepositAddressesRI model module.
 * @module model/ListDepositAddressesRI
 * @version 1.10.0
 */
class ListDepositAddressesRI {
    /**
     * Constructs a new <code>ListDepositAddressesRI</code>.
     * @alias module:model/ListDepositAddressesRI
     * @param address {String} Specifies the specific address's unique string value.
     * @param confirmedBalance {module:model/ListDepositAddressesRIConfirmedBalance} 
     * @param createdTimestamp {Number} Defines the specific UNIX time when the deposit address was created.
     * @param fungibleTokens {Array.<module:model/ListDepositAddressesRIFungibleTokensInner>} Represents fungible tokens'es detailed information
     * @param index {String} Represents the index of the address in the wallet.
     * @param label {String} Represents a custom tag that customers can set up for their Wallets and addresses. E.g. custom label named \"Special addresses\".
     * @param nonFungibleTokens {Array.<module:model/ListDepositAddressesRINonFungibleTokensInner>} Represents non-fungible tokens'es detailed information.
     */
    constructor(address, confirmedBalance, createdTimestamp, fungibleTokens, index, label, nonFungibleTokens) { 
        
        ListDepositAddressesRI.initialize(this, address, confirmedBalance, createdTimestamp, fungibleTokens, index, label, nonFungibleTokens);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, address, confirmedBalance, createdTimestamp, fungibleTokens, index, label, nonFungibleTokens) { 
        obj['address'] = address;
        obj['confirmedBalance'] = confirmedBalance;
        obj['createdTimestamp'] = createdTimestamp;
        obj['fungibleTokens'] = fungibleTokens;
        obj['index'] = index;
        obj['label'] = label;
        obj['nonFungibleTokens'] = nonFungibleTokens;
    }

    /**
     * Constructs a <code>ListDepositAddressesRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListDepositAddressesRI} obj Optional instance to populate.
     * @return {module:model/ListDepositAddressesRI} The populated <code>ListDepositAddressesRI</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListDepositAddressesRI();

            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('confirmedBalance')) {
                obj['confirmedBalance'] = ListDepositAddressesRIConfirmedBalance.constructFromObject(data['confirmedBalance']);
            }
            if (data.hasOwnProperty('createdTimestamp')) {
                obj['createdTimestamp'] = ApiClient.convertToType(data['createdTimestamp'], 'Number');
            }
            if (data.hasOwnProperty('fungibleTokens')) {
                obj['fungibleTokens'] = ApiClient.convertToType(data['fungibleTokens'], [ListDepositAddressesRIFungibleTokensInner]);
            }
            if (data.hasOwnProperty('index')) {
                obj['index'] = ApiClient.convertToType(data['index'], 'String');
            }
            if (data.hasOwnProperty('label')) {
                obj['label'] = ApiClient.convertToType(data['label'], 'String');
            }
            if (data.hasOwnProperty('nonFungibleTokens')) {
                obj['nonFungibleTokens'] = ApiClient.convertToType(data['nonFungibleTokens'], [ListDepositAddressesRINonFungibleTokensInner]);
            }
        }
        return obj;
    }


}

/**
 * Specifies the specific address's unique string value.
 * @member {String} address
 */
ListDepositAddressesRI.prototype['address'] = undefined;

/**
 * @member {module:model/ListDepositAddressesRIConfirmedBalance} confirmedBalance
 */
ListDepositAddressesRI.prototype['confirmedBalance'] = undefined;

/**
 * Defines the specific UNIX time when the deposit address was created.
 * @member {Number} createdTimestamp
 */
ListDepositAddressesRI.prototype['createdTimestamp'] = undefined;

/**
 * Represents fungible tokens'es detailed information
 * @member {Array.<module:model/ListDepositAddressesRIFungibleTokensInner>} fungibleTokens
 */
ListDepositAddressesRI.prototype['fungibleTokens'] = undefined;

/**
 * Represents the index of the address in the wallet.
 * @member {String} index
 */
ListDepositAddressesRI.prototype['index'] = undefined;

/**
 * Represents a custom tag that customers can set up for their Wallets and addresses. E.g. custom label named \"Special addresses\".
 * @member {String} label
 */
ListDepositAddressesRI.prototype['label'] = undefined;

/**
 * Represents non-fungible tokens'es detailed information.
 * @member {Array.<module:model/ListDepositAddressesRINonFungibleTokensInner>} nonFungibleTokens
 */
ListDepositAddressesRI.prototype['nonFungibleTokens'] = undefined;






export default ListDepositAddressesRI;

