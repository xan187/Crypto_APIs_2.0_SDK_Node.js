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
import GetTransactionDetailsByTransactionIDRIBSB from './GetTransactionDetailsByTransactionIDRIBSB';
import GetTransactionDetailsByTransactionIDRIBSBC from './GetTransactionDetailsByTransactionIDRIBSBC';
import GetTransactionDetailsByTransactionIDRIBSBSC from './GetTransactionDetailsByTransactionIDRIBSBSC';
import GetTransactionDetailsByTransactionIDRIBSBSCGasPrice from './GetTransactionDetailsByTransactionIDRIBSBSCGasPrice';
import GetTransactionDetailsByTransactionIDRIBSD from './GetTransactionDetailsByTransactionIDRIBSD';
import GetTransactionDetailsByTransactionIDRIBSD2 from './GetTransactionDetailsByTransactionIDRIBSD2';
import GetTransactionDetailsByTransactionIDRIBSE from './GetTransactionDetailsByTransactionIDRIBSE';
import GetTransactionDetailsByTransactionIDRIBSEC from './GetTransactionDetailsByTransactionIDRIBSEC';
import GetTransactionDetailsByTransactionIDRIBSL from './GetTransactionDetailsByTransactionIDRIBSL';
import GetTransactionDetailsByTransactionIDRIBSZ from './GetTransactionDetailsByTransactionIDRIBSZ';
import GetTransactionDetailsByTransactionIDRIBSZVJoinSplitInner from './GetTransactionDetailsByTransactionIDRIBSZVJoinSplitInner';
import GetTransactionDetailsByTransactionIDRIBSZVShieldedOutputInner from './GetTransactionDetailsByTransactionIDRIBSZVShieldedOutputInner';
import GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner from './GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner';
import GetTransactionDetailsByTransactionIDRIBSZVinInner from './GetTransactionDetailsByTransactionIDRIBSZVinInner';
import GetTransactionDetailsByTransactionIDRIBSZVoutInner from './GetTransactionDetailsByTransactionIDRIBSZVoutInner';

/**
 * The GetTransactionDetailsByTransactionIDRIBS model module.
 * @module model/GetTransactionDetailsByTransactionIDRIBS
 * @version 1.7.2
 */
class GetTransactionDetailsByTransactionIDRIBS {
    /**
     * Constructs a new <code>GetTransactionDetailsByTransactionIDRIBS</code>.
     * @alias module:model/GetTransactionDetailsByTransactionIDRIBS
     * @implements module:model/GetTransactionDetailsByTransactionIDRIBSB
     * @implements module:model/GetTransactionDetailsByTransactionIDRIBSBC
     * @implements module:model/GetTransactionDetailsByTransactionIDRIBSL
     * @implements module:model/GetTransactionDetailsByTransactionIDRIBSD
     * @implements module:model/GetTransactionDetailsByTransactionIDRIBSD2
     * @implements module:model/GetTransactionDetailsByTransactionIDRIBSE
     * @implements module:model/GetTransactionDetailsByTransactionIDRIBSEC
     * @implements module:model/GetTransactionDetailsByTransactionIDRIBSBSC
     * @implements module:model/GetTransactionDetailsByTransactionIDRIBSZ
     * @param locktime {Number} Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
     * @param size {Number} Represents the total size of this transaction.
     * @param vSize {Number} Represents the virtual size of this transaction.
     * @param version {Number} Defines the version of the transaction.
     * @param vin {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVinInner>} Object Array representation of transaction inputs
     * @param vout {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVoutInner>} Object Array representation of transaction outputs
     * @param contract {String} Represents the specific transaction contract
     * @param gasLimit {String} Represents the amount of gas used by this specific transaction alone.
     * @param gasPrice {module:model/GetTransactionDetailsByTransactionIDRIBSBSCGasPrice} 
     * @param gasUsed {String} Defines the unit of the gas price amount, e.g. BTC, ETH, XRP.
     * @param inputData {String} Represents additional information that is required for the transaction.
     * @param nonce {Number} Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
     * @param transactionStatus {String} Represents the status of this transaction.
     * @param bindingSig {String} It is used to enforce balance of Spend and Output transfers, in order to prevent their replay across transactions.
     * @param expiryHeight {Number} Represents a block height after which the transaction will expire.
     * @param joinSplitPubKey {String} Represents an encoding of a JoinSplitSig public validating key.
     * @param joinSplitSig {String} Is used to sign transactions that contain at least one JoinSplit description.
     * @param overwintered {Boolean} \"Overwinter\" is the network upgrade for the Zcash blockchain.
     * @param vJoinSplit {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVJoinSplitInner>} Represents a sequence of JoinSplit descriptions using BCTV14 proofs.
     * @param vShieldedOutput {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVShieldedOutputInner>} Object Array representation of transaction output descriptions
     * @param vShieldedSpend {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner>} Object Array representation of transaction spend descriptions
     * @param valueBalance {String} String representation of the transaction value balance
     * @param versionGroupId {String} Represents the transaction version group ID.
     */
    constructor(locktime, size, vSize, version, vin, vout, contract, gasLimit, gasPrice, gasUsed, inputData, nonce, transactionStatus, bindingSig, expiryHeight, joinSplitPubKey, joinSplitSig, overwintered, vJoinSplit, vShieldedOutput, vShieldedSpend, valueBalance, versionGroupId) { 
        GetTransactionDetailsByTransactionIDRIBSB.initialize(this, locktime, size, vSize, version, vin, vout);GetTransactionDetailsByTransactionIDRIBSBC.initialize(this, locktime, size, version, vin, vout);GetTransactionDetailsByTransactionIDRIBSL.initialize(this, locktime, size, vSize, version, vin, vout);GetTransactionDetailsByTransactionIDRIBSD.initialize(this, locktime, size, version, vin, vout);GetTransactionDetailsByTransactionIDRIBSD2.initialize(this, locktime, size, version, vin, vout);GetTransactionDetailsByTransactionIDRIBSE.initialize(this, contract, gasLimit, gasPrice, gasUsed, inputData, nonce, transactionStatus);GetTransactionDetailsByTransactionIDRIBSEC.initialize(this, contract, gasLimit, gasPrice, gasUsed, inputData, nonce);GetTransactionDetailsByTransactionIDRIBSBSC.initialize(this, contract, gasLimit, gasPrice, gasUsed, inputData, nonce);GetTransactionDetailsByTransactionIDRIBSZ.initialize(this, bindingSig, expiryHeight, joinSplitPubKey, joinSplitSig, locktime, overwintered, size, vJoinSplit, vShieldedOutput, vShieldedSpend, valueBalance, version, versionGroupId, vin, vout);
        GetTransactionDetailsByTransactionIDRIBS.initialize(this, locktime, size, vSize, version, vin, vout, contract, gasLimit, gasPrice, gasUsed, inputData, nonce, transactionStatus, bindingSig, expiryHeight, joinSplitPubKey, joinSplitSig, overwintered, vJoinSplit, vShieldedOutput, vShieldedSpend, valueBalance, versionGroupId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, locktime, size, vSize, version, vin, vout, contract, gasLimit, gasPrice, gasUsed, inputData, nonce, transactionStatus, bindingSig, expiryHeight, joinSplitPubKey, joinSplitSig, overwintered, vJoinSplit, vShieldedOutput, vShieldedSpend, valueBalance, versionGroupId) { 
        obj['locktime'] = locktime;
        obj['size'] = size;
        obj['vSize'] = vSize;
        obj['version'] = version;
        obj['vin'] = vin;
        obj['vout'] = vout;
        obj['contract'] = contract;
        obj['gasLimit'] = gasLimit;
        obj['gasPrice'] = gasPrice;
        obj['gasUsed'] = gasUsed;
        obj['inputData'] = inputData;
        obj['nonce'] = nonce;
        obj['transactionStatus'] = transactionStatus;
        obj['bindingSig'] = bindingSig;
        obj['expiryHeight'] = expiryHeight;
        obj['joinSplitPubKey'] = joinSplitPubKey;
        obj['joinSplitSig'] = joinSplitSig;
        obj['overwintered'] = overwintered;
        obj['vJoinSplit'] = vJoinSplit;
        obj['vShieldedOutput'] = vShieldedOutput;
        obj['vShieldedSpend'] = vShieldedSpend;
        obj['valueBalance'] = valueBalance;
        obj['versionGroupId'] = versionGroupId;
    }

    /**
     * Constructs a <code>GetTransactionDetailsByTransactionIDRIBS</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetTransactionDetailsByTransactionIDRIBS} obj Optional instance to populate.
     * @return {module:model/GetTransactionDetailsByTransactionIDRIBS} The populated <code>GetTransactionDetailsByTransactionIDRIBS</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetTransactionDetailsByTransactionIDRIBS();
            GetTransactionDetailsByTransactionIDRIBSB.constructFromObject(data, obj);
            GetTransactionDetailsByTransactionIDRIBSBC.constructFromObject(data, obj);
            GetTransactionDetailsByTransactionIDRIBSL.constructFromObject(data, obj);
            GetTransactionDetailsByTransactionIDRIBSD.constructFromObject(data, obj);
            GetTransactionDetailsByTransactionIDRIBSD2.constructFromObject(data, obj);
            GetTransactionDetailsByTransactionIDRIBSE.constructFromObject(data, obj);
            GetTransactionDetailsByTransactionIDRIBSEC.constructFromObject(data, obj);
            GetTransactionDetailsByTransactionIDRIBSBSC.constructFromObject(data, obj);
            GetTransactionDetailsByTransactionIDRIBSZ.constructFromObject(data, obj);

            if (data.hasOwnProperty('locktime')) {
                obj['locktime'] = ApiClient.convertToType(data['locktime'], 'Number');
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'Number');
            }
            if (data.hasOwnProperty('vSize')) {
                obj['vSize'] = ApiClient.convertToType(data['vSize'], 'Number');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'Number');
            }
            if (data.hasOwnProperty('vin')) {
                obj['vin'] = ApiClient.convertToType(data['vin'], [GetTransactionDetailsByTransactionIDRIBSZVinInner]);
            }
            if (data.hasOwnProperty('vout')) {
                obj['vout'] = ApiClient.convertToType(data['vout'], [GetTransactionDetailsByTransactionIDRIBSZVoutInner]);
            }
            if (data.hasOwnProperty('contract')) {
                obj['contract'] = ApiClient.convertToType(data['contract'], 'String');
            }
            if (data.hasOwnProperty('gasLimit')) {
                obj['gasLimit'] = ApiClient.convertToType(data['gasLimit'], 'String');
            }
            if (data.hasOwnProperty('gasPrice')) {
                obj['gasPrice'] = GetTransactionDetailsByTransactionIDRIBSBSCGasPrice.constructFromObject(data['gasPrice']);
            }
            if (data.hasOwnProperty('gasUsed')) {
                obj['gasUsed'] = ApiClient.convertToType(data['gasUsed'], 'String');
            }
            if (data.hasOwnProperty('inputData')) {
                obj['inputData'] = ApiClient.convertToType(data['inputData'], 'String');
            }
            if (data.hasOwnProperty('nonce')) {
                obj['nonce'] = ApiClient.convertToType(data['nonce'], 'Number');
            }
            if (data.hasOwnProperty('transactionStatus')) {
                obj['transactionStatus'] = ApiClient.convertToType(data['transactionStatus'], 'String');
            }
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
            if (data.hasOwnProperty('overwintered')) {
                obj['overwintered'] = ApiClient.convertToType(data['overwintered'], 'Boolean');
            }
            if (data.hasOwnProperty('vJoinSplit')) {
                obj['vJoinSplit'] = ApiClient.convertToType(data['vJoinSplit'], [GetTransactionDetailsByTransactionIDRIBSZVJoinSplitInner]);
            }
            if (data.hasOwnProperty('vShieldedOutput')) {
                obj['vShieldedOutput'] = ApiClient.convertToType(data['vShieldedOutput'], [GetTransactionDetailsByTransactionIDRIBSZVShieldedOutputInner]);
            }
            if (data.hasOwnProperty('vShieldedSpend')) {
                obj['vShieldedSpend'] = ApiClient.convertToType(data['vShieldedSpend'], [GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner]);
            }
            if (data.hasOwnProperty('valueBalance')) {
                obj['valueBalance'] = ApiClient.convertToType(data['valueBalance'], 'String');
            }
            if (data.hasOwnProperty('versionGroupId')) {
                obj['versionGroupId'] = ApiClient.convertToType(data['versionGroupId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
 * @member {Number} locktime
 */
GetTransactionDetailsByTransactionIDRIBS.prototype['locktime'] = undefined;

/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
GetTransactionDetailsByTransactionIDRIBS.prototype['size'] = undefined;

/**
 * Represents the virtual size of this transaction.
 * @member {Number} vSize
 */
GetTransactionDetailsByTransactionIDRIBS.prototype['vSize'] = undefined;

/**
 * Defines the version of the transaction.
 * @member {Number} version
 */
GetTransactionDetailsByTransactionIDRIBS.prototype['version'] = undefined;

/**
 * Object Array representation of transaction inputs
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVinInner>} vin
 */
GetTransactionDetailsByTransactionIDRIBS.prototype['vin'] = undefined;

/**
 * Object Array representation of transaction outputs
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVoutInner>} vout
 */
GetTransactionDetailsByTransactionIDRIBS.prototype['vout'] = undefined;

/**
 * Represents the specific transaction contract
 * @member {String} contract
 */
GetTransactionDetailsByTransactionIDRIBS.prototype['contract'] = undefined;

/**
 * Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */
GetTransactionDetailsByTransactionIDRIBS.prototype['gasLimit'] = undefined;

/**
 * @member {module:model/GetTransactionDetailsByTransactionIDRIBSBSCGasPrice} gasPrice
 */
GetTransactionDetailsByTransactionIDRIBS.prototype['gasPrice'] = undefined;

/**
 * Defines the unit of the gas price amount, e.g. BTC, ETH, XRP.
 * @member {String} gasUsed
 */
GetTransactionDetailsByTransactionIDRIBS.prototype['gasUsed'] = undefined;

/**
 * Represents additional information that is required for the transaction.
 * @member {String} inputData
 */
GetTransactionDetailsByTransactionIDRIBS.prototype['inputData'] = undefined;

/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {Number} nonce
 */
GetTransactionDetailsByTransactionIDRIBS.prototype['nonce'] = undefined;

/**
 * Represents the status of this transaction.
 * @member {String} transactionStatus
 */
GetTransactionDetailsByTransactionIDRIBS.prototype['transactionStatus'] = undefined;

/**
 * It is used to enforce balance of Spend and Output transfers, in order to prevent their replay across transactions.
 * @member {String} bindingSig
 */
GetTransactionDetailsByTransactionIDRIBS.prototype['bindingSig'] = undefined;

/**
 * Represents a block height after which the transaction will expire.
 * @member {Number} expiryHeight
 */
GetTransactionDetailsByTransactionIDRIBS.prototype['expiryHeight'] = undefined;

/**
 * Represents an encoding of a JoinSplitSig public validating key.
 * @member {String} joinSplitPubKey
 */
GetTransactionDetailsByTransactionIDRIBS.prototype['joinSplitPubKey'] = undefined;

/**
 * Is used to sign transactions that contain at least one JoinSplit description.
 * @member {String} joinSplitSig
 */
GetTransactionDetailsByTransactionIDRIBS.prototype['joinSplitSig'] = undefined;

/**
 * \"Overwinter\" is the network upgrade for the Zcash blockchain.
 * @member {Boolean} overwintered
 */
GetTransactionDetailsByTransactionIDRIBS.prototype['overwintered'] = undefined;

/**
 * Represents a sequence of JoinSplit descriptions using BCTV14 proofs.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVJoinSplitInner>} vJoinSplit
 */
GetTransactionDetailsByTransactionIDRIBS.prototype['vJoinSplit'] = undefined;

/**
 * Object Array representation of transaction output descriptions
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVShieldedOutputInner>} vShieldedOutput
 */
GetTransactionDetailsByTransactionIDRIBS.prototype['vShieldedOutput'] = undefined;

/**
 * Object Array representation of transaction spend descriptions
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner>} vShieldedSpend
 */
GetTransactionDetailsByTransactionIDRIBS.prototype['vShieldedSpend'] = undefined;

/**
 * String representation of the transaction value balance
 * @member {String} valueBalance
 */
GetTransactionDetailsByTransactionIDRIBS.prototype['valueBalance'] = undefined;

/**
 * Represents the transaction version group ID.
 * @member {String} versionGroupId
 */
GetTransactionDetailsByTransactionIDRIBS.prototype['versionGroupId'] = undefined;


// Implement GetTransactionDetailsByTransactionIDRIBSB interface:
/**
 * Represents the time at which a particular transaction can be added to the blockchain.
 * @member {Number} locktime
 */
GetTransactionDetailsByTransactionIDRIBSB.prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
GetTransactionDetailsByTransactionIDRIBSB.prototype['size'] = undefined;
/**
 * Represents the virtual size of this transaction.
 * @member {Number} vSize
 */
GetTransactionDetailsByTransactionIDRIBSB.prototype['vSize'] = undefined;
/**
 * Represents the transaction version number.
 * @member {Number} version
 */
GetTransactionDetailsByTransactionIDRIBSB.prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSBVinInner>} vin
 */
GetTransactionDetailsByTransactionIDRIBSB.prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSBVoutInner>} vout
 */
GetTransactionDetailsByTransactionIDRIBSB.prototype['vout'] = undefined;
// Implement GetTransactionDetailsByTransactionIDRIBSBC interface:
/**
 * Represents the time at which a particular transaction can be added to the blockchain.
 * @member {Number} locktime
 */
GetTransactionDetailsByTransactionIDRIBSBC.prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
GetTransactionDetailsByTransactionIDRIBSBC.prototype['size'] = undefined;
/**
 * Represents transaction version number.
 * @member {Number} version
 */
GetTransactionDetailsByTransactionIDRIBSBC.prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSBCVinInner>} vin
 */
GetTransactionDetailsByTransactionIDRIBSBC.prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSBCVoutInner>} vout
 */
GetTransactionDetailsByTransactionIDRIBSBC.prototype['vout'] = undefined;
// Implement GetTransactionDetailsByTransactionIDRIBSL interface:
/**
 * Represents the time at which a particular transaction can be added to the blockchain.
 * @member {Number} locktime
 */
GetTransactionDetailsByTransactionIDRIBSL.prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
GetTransactionDetailsByTransactionIDRIBSL.prototype['size'] = undefined;
/**
 * Represents the virtual size of this transaction.
 * @member {Number} vSize
 */
GetTransactionDetailsByTransactionIDRIBSL.prototype['vSize'] = undefined;
/**
 * Represents transaction version number.
 * @member {Number} version
 */
GetTransactionDetailsByTransactionIDRIBSL.prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSLVinInner>} vin
 */
GetTransactionDetailsByTransactionIDRIBSL.prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSLVoutInner>} vout
 */
GetTransactionDetailsByTransactionIDRIBSL.prototype['vout'] = undefined;
// Implement GetTransactionDetailsByTransactionIDRIBSD interface:
/**
 * Represents the time at which a particular transaction can be added to the blockchain.
 * @member {Number} locktime
 */
GetTransactionDetailsByTransactionIDRIBSD.prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
GetTransactionDetailsByTransactionIDRIBSD.prototype['size'] = undefined;
/**
 * Represents transaction version number.
 * @member {Number} version
 */
GetTransactionDetailsByTransactionIDRIBSD.prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSDVinInner>} vin
 */
GetTransactionDetailsByTransactionIDRIBSD.prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSDVoutInner>} vout
 */
GetTransactionDetailsByTransactionIDRIBSD.prototype['vout'] = undefined;
// Implement GetTransactionDetailsByTransactionIDRIBSD2 interface:
/**
 * Represents the time at which a particular transaction can be added to the blockchain.
 * @member {Number} locktime
 */
GetTransactionDetailsByTransactionIDRIBSD2.prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
GetTransactionDetailsByTransactionIDRIBSD2.prototype['size'] = undefined;
/**
 * Represents transaction version number.
 * @member {Number} version
 */
GetTransactionDetailsByTransactionIDRIBSD2.prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSD2VinInner>} vin
 */
GetTransactionDetailsByTransactionIDRIBSD2.prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSD2VoutInner>} vout
 */
GetTransactionDetailsByTransactionIDRIBSD2.prototype['vout'] = undefined;
// Implement GetTransactionDetailsByTransactionIDRIBSE interface:
/**
 * Represents the specific transaction contract.
 * @member {String} contract
 */
GetTransactionDetailsByTransactionIDRIBSE.prototype['contract'] = undefined;
/**
 * Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */
GetTransactionDetailsByTransactionIDRIBSE.prototype['gasLimit'] = undefined;
/**
 * @member {module:model/GetTransactionDetailsByTransactionIDRIBSEGasPrice} gasPrice
 */
GetTransactionDetailsByTransactionIDRIBSE.prototype['gasPrice'] = undefined;
/**
 * Represents the exact unit of gas that was used for the transaction.
 * @member {String} gasUsed
 */
GetTransactionDetailsByTransactionIDRIBSE.prototype['gasUsed'] = undefined;
/**
 * Represents additional information that is required for the transaction.
 * @member {String} inputData
 */
GetTransactionDetailsByTransactionIDRIBSE.prototype['inputData'] = undefined;
/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {Number} nonce
 */
GetTransactionDetailsByTransactionIDRIBSE.prototype['nonce'] = undefined;
/**
 * Represents the status of this transaction.
 * @member {String} transactionStatus
 */
GetTransactionDetailsByTransactionIDRIBSE.prototype['transactionStatus'] = undefined;
// Implement GetTransactionDetailsByTransactionIDRIBSEC interface:
/**
 * Represents the specific transaction contract.
 * @member {String} contract
 */
GetTransactionDetailsByTransactionIDRIBSEC.prototype['contract'] = undefined;
/**
 * Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */
GetTransactionDetailsByTransactionIDRIBSEC.prototype['gasLimit'] = undefined;
/**
 * @member {module:model/GetTransactionDetailsByTransactionIDRIBSECGasPrice} gasPrice
 */
GetTransactionDetailsByTransactionIDRIBSEC.prototype['gasPrice'] = undefined;
/**
 * Represents the exact unit of gas that was used for the transaction.
 * @member {String} gasUsed
 */
GetTransactionDetailsByTransactionIDRIBSEC.prototype['gasUsed'] = undefined;
/**
 * Represents additional information that is required for the transaction.
 * @member {String} inputData
 */
GetTransactionDetailsByTransactionIDRIBSEC.prototype['inputData'] = undefined;
/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {Number} nonce
 */
GetTransactionDetailsByTransactionIDRIBSEC.prototype['nonce'] = undefined;
// Implement GetTransactionDetailsByTransactionIDRIBSBSC interface:
/**
 * Represents the specific transaction contract
 * @member {String} contract
 */
GetTransactionDetailsByTransactionIDRIBSBSC.prototype['contract'] = undefined;
/**
 * Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */
GetTransactionDetailsByTransactionIDRIBSBSC.prototype['gasLimit'] = undefined;
/**
 * @member {module:model/GetTransactionDetailsByTransactionIDRIBSBSCGasPrice} gasPrice
 */
GetTransactionDetailsByTransactionIDRIBSBSC.prototype['gasPrice'] = undefined;
/**
 * Defines the unit of the gas price amount, e.g. BTC, ETH, XRP.
 * @member {String} gasUsed
 */
GetTransactionDetailsByTransactionIDRIBSBSC.prototype['gasUsed'] = undefined;
/**
 * Represents additional information that is required for the transaction.
 * @member {String} inputData
 */
GetTransactionDetailsByTransactionIDRIBSBSC.prototype['inputData'] = undefined;
/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {Number} nonce
 */
GetTransactionDetailsByTransactionIDRIBSBSC.prototype['nonce'] = undefined;
// Implement GetTransactionDetailsByTransactionIDRIBSZ interface:
/**
 * It is used to enforce balance of Spend and Output transfers, in order to prevent their replay across transactions.
 * @member {String} bindingSig
 */
GetTransactionDetailsByTransactionIDRIBSZ.prototype['bindingSig'] = undefined;
/**
 * Represents a block height after which the transaction will expire.
 * @member {Number} expiryHeight
 */
GetTransactionDetailsByTransactionIDRIBSZ.prototype['expiryHeight'] = undefined;
/**
 * Represents an encoding of a JoinSplitSig public validating key.
 * @member {String} joinSplitPubKey
 */
GetTransactionDetailsByTransactionIDRIBSZ.prototype['joinSplitPubKey'] = undefined;
/**
 * Is used to sign transactions that contain at least one JoinSplit description.
 * @member {String} joinSplitSig
 */
GetTransactionDetailsByTransactionIDRIBSZ.prototype['joinSplitSig'] = undefined;
/**
 * Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
 * @member {Number} locktime
 */
GetTransactionDetailsByTransactionIDRIBSZ.prototype['locktime'] = undefined;
/**
 * \"Overwinter\" is the network upgrade for the Zcash blockchain.
 * @member {Boolean} overwintered
 */
GetTransactionDetailsByTransactionIDRIBSZ.prototype['overwintered'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
GetTransactionDetailsByTransactionIDRIBSZ.prototype['size'] = undefined;
/**
 * Represents a sequence of JoinSplit descriptions using BCTV14 proofs.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVJoinSplitInner>} vJoinSplit
 */
GetTransactionDetailsByTransactionIDRIBSZ.prototype['vJoinSplit'] = undefined;
/**
 * Object Array representation of transaction output descriptions
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVShieldedOutputInner>} vShieldedOutput
 */
GetTransactionDetailsByTransactionIDRIBSZ.prototype['vShieldedOutput'] = undefined;
/**
 * Object Array representation of transaction spend descriptions
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner>} vShieldedSpend
 */
GetTransactionDetailsByTransactionIDRIBSZ.prototype['vShieldedSpend'] = undefined;
/**
 * String representation of the transaction value balance
 * @member {String} valueBalance
 */
GetTransactionDetailsByTransactionIDRIBSZ.prototype['valueBalance'] = undefined;
/**
 * Defines the version of the transaction.
 * @member {Number} version
 */
GetTransactionDetailsByTransactionIDRIBSZ.prototype['version'] = undefined;
/**
 * Represents the transaction version group ID.
 * @member {String} versionGroupId
 */
GetTransactionDetailsByTransactionIDRIBSZ.prototype['versionGroupId'] = undefined;
/**
 * Object Array representation of transaction inputs
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVinInner>} vin
 */
GetTransactionDetailsByTransactionIDRIBSZ.prototype['vin'] = undefined;
/**
 * Object Array representation of transaction outputs
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVoutInner>} vout
 */
GetTransactionDetailsByTransactionIDRIBSZ.prototype['vout'] = undefined;




export default GetTransactionDetailsByTransactionIDRIBS;

