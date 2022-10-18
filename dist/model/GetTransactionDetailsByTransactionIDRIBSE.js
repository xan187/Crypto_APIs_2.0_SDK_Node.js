"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _GetTransactionDetailsByTransactionIDRIBSEGasPrice = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDRIBSEGasPrice"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The GetTransactionDetailsByTransactionIDRIBSE model module.
 * @module model/GetTransactionDetailsByTransactionIDRIBSE
 * @version 1.9.0
 */var GetTransactionDetailsByTransactionIDRIBSE = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetTransactionDetailsByTransactionIDRIBSE</code>.
   * Ethereum
   * @alias module:model/GetTransactionDetailsByTransactionIDRIBSE
   * @param contract {String} Represents the specific transaction contract.
   * @param gasLimit {String} Represents the amount of gas used by this specific transaction alone.
   * @param gasPrice {module:model/GetTransactionDetailsByTransactionIDRIBSEGasPrice} 
   * @param gasUsed {String} Represents the exact unit of gas that was used for the transaction.
   * @param inputData {String} Represents additional information that is required for the transaction.
   * @param nonce {Number} Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
   * @param transactionStatus {String} Represents the status of this transaction.
   */
  function GetTransactionDetailsByTransactionIDRIBSE(contract, gasLimit, gasPrice, gasUsed, inputData, nonce, transactionStatus) {
    _classCallCheck(this, GetTransactionDetailsByTransactionIDRIBSE);
    GetTransactionDetailsByTransactionIDRIBSE.initialize(this, contract, gasLimit, gasPrice, gasUsed, inputData, nonce, transactionStatus);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(GetTransactionDetailsByTransactionIDRIBSE, null, [{
    key: "initialize",
    value: function initialize(obj, contract, gasLimit, gasPrice, gasUsed, inputData, nonce, transactionStatus) {
      obj['contract'] = contract;
      obj['gasLimit'] = gasLimit;
      obj['gasPrice'] = gasPrice;
      obj['gasUsed'] = gasUsed;
      obj['inputData'] = inputData;
      obj['nonce'] = nonce;
      obj['transactionStatus'] = transactionStatus;
    }

    /**
     * Constructs a <code>GetTransactionDetailsByTransactionIDRIBSE</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetTransactionDetailsByTransactionIDRIBSE} obj Optional instance to populate.
     * @return {module:model/GetTransactionDetailsByTransactionIDRIBSE} The populated <code>GetTransactionDetailsByTransactionIDRIBSE</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetTransactionDetailsByTransactionIDRIBSE();
        if (data.hasOwnProperty('contract')) {
          obj['contract'] = _ApiClient["default"].convertToType(data['contract'], 'String');
        }
        if (data.hasOwnProperty('gasLimit')) {
          obj['gasLimit'] = _ApiClient["default"].convertToType(data['gasLimit'], 'String');
        }
        if (data.hasOwnProperty('gasPrice')) {
          obj['gasPrice'] = _GetTransactionDetailsByTransactionIDRIBSEGasPrice["default"].constructFromObject(data['gasPrice']);
        }
        if (data.hasOwnProperty('gasUsed')) {
          obj['gasUsed'] = _ApiClient["default"].convertToType(data['gasUsed'], 'String');
        }
        if (data.hasOwnProperty('inputData')) {
          obj['inputData'] = _ApiClient["default"].convertToType(data['inputData'], 'String');
        }
        if (data.hasOwnProperty('nonce')) {
          obj['nonce'] = _ApiClient["default"].convertToType(data['nonce'], 'Number');
        }
        if (data.hasOwnProperty('transactionStatus')) {
          obj['transactionStatus'] = _ApiClient["default"].convertToType(data['transactionStatus'], 'String');
        }
      }
      return obj;
    }
  }]);
  return GetTransactionDetailsByTransactionIDRIBSE;
}(); /**
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
var _default = GetTransactionDetailsByTransactionIDRIBSE;
exports["default"] = _default;