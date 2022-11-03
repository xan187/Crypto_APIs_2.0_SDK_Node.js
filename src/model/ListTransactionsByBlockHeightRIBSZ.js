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
import GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner from './GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner';
import ListTransactionsByBlockHeightRIBSZVJoinSplitInner from './ListTransactionsByBlockHeightRIBSZVJoinSplitInner';
import ListTransactionsByBlockHeightRIBSZVShieldedOutputInner from './ListTransactionsByBlockHeightRIBSZVShieldedOutputInner';
import ListTransactionsByBlockHeightRIBSZVinInner from './ListTransactionsByBlockHeightRIBSZVinInner';
import ListTransactionsByBlockHeightRIBSZVoutInner from './ListTransactionsByBlockHeightRIBSZVoutInner';

/**
 * The ListTransactionsByBlockHeightRIBSZ model module.
 * @module model/ListTransactionsByBlockHeightRIBSZ
 * @version 1.10.0
 */
class ListTransactionsByBlockHeightRIBSZ {
    /**
     * Constructs a new <code>ListTransactionsByBlockHeightRIBSZ</code>.
     * Zcash
     * @alias module:model/ListTransactionsByBlockHeightRIBSZ
     * @param bindingSig {String} It is used to enforce balance of Spend and Output transfers, in order to prevent their replay across transactions.
     * @param expiryHeight {Number} Represents a block height after which the transaction will expire.
     * @param joinSplitPubKey {String} Represents an encoding of a JoinSplitSig public validating key.
     * @param joinSplitSig {String} Is used to sign transactions that contain at least one JoinSplit description.
     * @param locktime {Number} Represents the time at which a particular transaction can be added to the blockchain.
     * @param overwintered {Boolean} \"Overwinter\" is the network upgrade for the Zcash blockchain.
     * @param size {Number} Represents the total size of this transaction.
     * @param vJoinSplit {Array.<module:model/ListTransactionsByBlockHeightRIBSZVJoinSplitInner>} Represents a sequence of JoinSplit descriptions using BCTV14 proofs.
     * @param vShieldedOutput {Array.<module:model/ListTransactionsByBlockHeightRIBSZVShieldedOutputInner>} Object Array representation of transaction output descriptions
     * @param vShieldedSpend {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner>} Object Array representation of transaction spend descriptions
     * @param valueBalance {String} Defines the transaction value balance.
     * @param version {Number} Represents the transaction version number.
     * @param versionGroupId {String} Represents the transaction version group ID.
     * @param vin {Array.<module:model/ListTransactionsByBlockHeightRIBSZVinInner>} Object Array representation of transaction inputs
     * @param vout {Array.<module:model/ListTransactionsByBlockHeightRIBSZVoutInner>} Object Array representation of transaction outputs
     */
    constructor(bindingSig, expiryHeight, joinSplitPubKey, joinSplitSig, locktime, overwintered, size, vJoinSplit, vShieldedOutput, vShieldedSpend, valueBalance, version, versionGroupId, vin, vout) { 
        
        ListTransactionsByBlockHeightRIBSZ.initialize(this, bindingSig, expiryHeight, joinSplitPubKey, joinSplitSig, locktime, overwintered, size, vJoinSplit, vShieldedOutput, vShieldedSpend, valueBalance, version, versionGroupId, vin, vout);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, bindingSig, expiryHeight, joinSplitPubKey, joinSplitSig, locktime, overwintered, size, vJoinSplit, vShieldedOutput, vShieldedSpend, valueBalance, version, versionGroupId, vin, vout) { 
        obj['bindingSig'] = bindingSig;
        obj['expiryHeight'] = expiryHeight;
        obj['joinSplitPubKey'] = joinSplitPubKey;
        obj['joinSplitSig'] = joinSplitSig;
        obj['locktime'] = locktime;
        obj['overwintered'] = overwintered;
        obj['size'] = size;
        obj['vJoinSplit'] = vJoinSplit;
        obj['vShieldedOutput'] = vShieldedOutput;
        obj['vShieldedSpend'] = vShieldedSpend;
        obj['valueBalance'] = valueBalance;
        obj['version'] = version;
        obj['versionGroupId'] = versionGroupId;
        obj['vin'] = vin;
        obj['vout'] = vout;
    }

    /**
     * Constructs a <code>ListTransactionsByBlockHeightRIBSZ</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListTransactionsByBlockHeightRIBSZ} obj Optional instance to populate.
     * @return {module:model/ListTransactionsByBlockHeightRIBSZ} The populated <code>ListTransactionsByBlockHeightRIBSZ</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListTransactionsByBlockHeightRIBSZ();

            if (data.hasOwnProperty('bindingSig')) {
                obj['bindingSig'] = ApiClient.convertToType(data['bindingSig'], 'String');
            }
            if (data.hasOwnProperty('expiryHeight')) {
                obj['expiryHeight'] = ApiClient.convertToType(data['expiryHeight'], 'Number');
            }
            if (data.hasOwnProperty('joinSplitPubKey')) {
                obj['joinSplitPubKey'] = ApiClient.convertToType(data['joinSplitPubKey'], 'String');
            }
            if (data.hasOwnProperty('joinSplitSig')) {
                obj['joinSplitSig'] = ApiClient.convertToType(data['joinSplitSig'], 'String');
            }
            if (data.hasOwnProperty('locktime')) {
                obj['locktime'] = ApiClient.convertToType(data['locktime'], 'Number');
            }
            if (data.hasOwnProperty('overwintered')) {
                obj['overwintered'] = ApiClient.convertToType(data['overwintered'], 'Boolean');
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'Number');
            }
            if (data.hasOwnProperty('vJoinSplit')) {
                obj['vJoinSplit'] = ApiClient.convertToType(data['vJoinSplit'], [ListTransactionsByBlockHeightRIBSZVJoinSplitInner]);
            }
            if (data.hasOwnProperty('vShieldedOutput')) {
                obj['vShieldedOutput'] = ApiClient.convertToType(data['vShieldedOutput'], [ListTransactionsByBlockHeightRIBSZVShieldedOutputInner]);
            }
            if (data.hasOwnProperty('vShieldedSpend')) {
                obj['vShieldedSpend'] = ApiClient.convertToType(data['vShieldedSpend'], [GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner]);
            }
            if (data.hasOwnProperty('valueBalance')) {
                obj['valueBalance'] = ApiClient.convertToType(data['valueBalance'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'Number');
            }
            if (data.hasOwnProperty('versionGroupId')) {
                obj['versionGroupId'] = ApiClient.convertToType(data['versionGroupId'], 'String');
            }
            if (data.hasOwnProperty('vin')) {
                obj['vin'] = ApiClient.convertToType(data['vin'], [ListTransactionsByBlockHeightRIBSZVinInner]);
            }
            if (data.hasOwnProperty('vout')) {
                obj['vout'] = ApiClient.convertToType(data['vout'], [ListTransactionsByBlockHeightRIBSZVoutInner]);
            }
        }
        return obj;
    }


}

/**
 * It is used to enforce balance of Spend and Output transfers, in order to prevent their replay across transactions.
 * @member {String} bindingSig
 */
ListTransactionsByBlockHeightRIBSZ.prototype['bindingSig'] = undefined;

/**
 * Represents a block height after which the transaction will expire.
 * @member {Number} expiryHeight
 */
ListTransactionsByBlockHeightRIBSZ.prototype['expiryHeight'] = undefined;

/**
 * Represents an encoding of a JoinSplitSig public validating key.
 * @member {String} joinSplitPubKey
 */
ListTransactionsByBlockHeightRIBSZ.prototype['joinSplitPubKey'] = undefined;

/**
 * Is used to sign transactions that contain at least one JoinSplit description.
 * @member {String} joinSplitSig
 */
ListTransactionsByBlockHeightRIBSZ.prototype['joinSplitSig'] = undefined;

/**
 * Represents the time at which a particular transaction can be added to the blockchain.
 * @member {Number} locktime
 */
ListTransactionsByBlockHeightRIBSZ.prototype['locktime'] = undefined;

/**
 * \"Overwinter\" is the network upgrade for the Zcash blockchain.
 * @member {Boolean} overwintered
 */
ListTransactionsByBlockHeightRIBSZ.prototype['overwintered'] = undefined;

/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
ListTransactionsByBlockHeightRIBSZ.prototype['size'] = undefined;

/**
 * Represents a sequence of JoinSplit descriptions using BCTV14 proofs.
 * @member {Array.<module:model/ListTransactionsByBlockHeightRIBSZVJoinSplitInner>} vJoinSplit
 */
ListTransactionsByBlockHeightRIBSZ.prototype['vJoinSplit'] = undefined;

/**
 * Object Array representation of transaction output descriptions
 * @member {Array.<module:model/ListTransactionsByBlockHeightRIBSZVShieldedOutputInner>} vShieldedOutput
 */
ListTransactionsByBlockHeightRIBSZ.prototype['vShieldedOutput'] = undefined;

/**
 * Object Array representation of transaction spend descriptions
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner>} vShieldedSpend
 */
ListTransactionsByBlockHeightRIBSZ.prototype['vShieldedSpend'] = undefined;

/**
 * Defines the transaction value balance.
 * @member {String} valueBalance
 */
ListTransactionsByBlockHeightRIBSZ.prototype['valueBalance'] = undefined;

/**
 * Represents the transaction version number.
 * @member {Number} version
 */
ListTransactionsByBlockHeightRIBSZ.prototype['version'] = undefined;

/**
 * Represents the transaction version group ID.
 * @member {String} versionGroupId
 */
ListTransactionsByBlockHeightRIBSZ.prototype['versionGroupId'] = undefined;

/**
 * Object Array representation of transaction inputs
 * @member {Array.<module:model/ListTransactionsByBlockHeightRIBSZVinInner>} vin
 */
ListTransactionsByBlockHeightRIBSZ.prototype['vin'] = undefined;

/**
 * Object Array representation of transaction outputs
 * @member {Array.<module:model/ListTransactionsByBlockHeightRIBSZVoutInner>} vout
 */
ListTransactionsByBlockHeightRIBSZ.prototype['vout'] = undefined;






export default ListTransactionsByBlockHeightRIBSZ;

