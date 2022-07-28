"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PrepareAnAccountBasedTransactionFromXPubRIFee = _interopRequireDefault(require("./PrepareAnAccountBasedTransactionFromXPubRIFee"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The PrepareAnAccountBasedTransactionFromXPubRI model module.
 * @module model/PrepareAnAccountBasedTransactionFromXPubRI
 * @version 1.7.0
 */
var PrepareAnAccountBasedTransactionFromXPubRI = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PrepareAnAccountBasedTransactionFromXPubRI</code>.
   * @alias module:model/PrepareAnAccountBasedTransactionFromXPubRI
   * @param amount {String} Representation of the amount of the transaction
   * @param dataHex {String} Representation of the data in hex value
   * @param derivationIndex {Number} Representation of the derivation index of the xpub address
   * @param fee {module:model/PrepareAnAccountBasedTransactionFromXPubRIFee} 
   * @param nonce {String} Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
   * @param recipient {String} Represents a recipient addresses. In account-based protocols like Ethereum there is only one address in this list.
   * @param sender {String} Represents a sender address. In account-based protocols like Ethereum there is only one address in this list.
   * @param sigHash {String} Representation of the hash that should be signed.
   * @param transactionType {module:model/PrepareAnAccountBasedTransactionFromXPubRI.TransactionTypeEnum} Representation of the transaction type
   */
  function PrepareAnAccountBasedTransactionFromXPubRI(amount, dataHex, derivationIndex, fee, nonce, recipient, sender, sigHash, transactionType) {
    _classCallCheck(this, PrepareAnAccountBasedTransactionFromXPubRI);

    PrepareAnAccountBasedTransactionFromXPubRI.initialize(this, amount, dataHex, derivationIndex, fee, nonce, recipient, sender, sigHash, transactionType);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PrepareAnAccountBasedTransactionFromXPubRI, null, [{
    key: "initialize",
    value: function initialize(obj, amount, dataHex, derivationIndex, fee, nonce, recipient, sender, sigHash, transactionType) {
      obj['amount'] = amount;
      obj['dataHex'] = dataHex;
      obj['derivationIndex'] = derivationIndex;
      obj['fee'] = fee;
      obj['nonce'] = nonce;
      obj['recipient'] = recipient;
      obj['sender'] = sender;
      obj['sigHash'] = sigHash;
      obj['transactionType'] = transactionType;
    }
    /**
     * Constructs a <code>PrepareAnAccountBasedTransactionFromXPubRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PrepareAnAccountBasedTransactionFromXPubRI} obj Optional instance to populate.
     * @return {module:model/PrepareAnAccountBasedTransactionFromXPubRI} The populated <code>PrepareAnAccountBasedTransactionFromXPubRI</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PrepareAnAccountBasedTransactionFromXPubRI();

        if (data.hasOwnProperty('amount')) {
          obj['amount'] = _ApiClient["default"].convertToType(data['amount'], 'String');
        }

        if (data.hasOwnProperty('dataHex')) {
          obj['dataHex'] = _ApiClient["default"].convertToType(data['dataHex'], 'String');
        }

        if (data.hasOwnProperty('derivationIndex')) {
          obj['derivationIndex'] = _ApiClient["default"].convertToType(data['derivationIndex'], 'Number');
        }

        if (data.hasOwnProperty('fee')) {
          obj['fee'] = _PrepareAnAccountBasedTransactionFromXPubRIFee["default"].constructFromObject(data['fee']);
        }

        if (data.hasOwnProperty('nonce')) {
          obj['nonce'] = _ApiClient["default"].convertToType(data['nonce'], 'String');
        }

        if (data.hasOwnProperty('recipient')) {
          obj['recipient'] = _ApiClient["default"].convertToType(data['recipient'], 'String');
        }

        if (data.hasOwnProperty('sender')) {
          obj['sender'] = _ApiClient["default"].convertToType(data['sender'], 'String');
        }

        if (data.hasOwnProperty('sigHash')) {
          obj['sigHash'] = _ApiClient["default"].convertToType(data['sigHash'], 'String');
        }

        if (data.hasOwnProperty('transactionType')) {
          obj['transactionType'] = _ApiClient["default"].convertToType(data['transactionType'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PrepareAnAccountBasedTransactionFromXPubRI;
}();
/**
 * Representation of the amount of the transaction
 * @member {String} amount
 */


PrepareAnAccountBasedTransactionFromXPubRI.prototype['amount'] = undefined;
/**
 * Representation of the data in hex value
 * @member {String} dataHex
 */

PrepareAnAccountBasedTransactionFromXPubRI.prototype['dataHex'] = undefined;
/**
 * Representation of the derivation index of the xpub address
 * @member {Number} derivationIndex
 */

PrepareAnAccountBasedTransactionFromXPubRI.prototype['derivationIndex'] = undefined;
/**
 * @member {module:model/PrepareAnAccountBasedTransactionFromXPubRIFee} fee
 */

PrepareAnAccountBasedTransactionFromXPubRI.prototype['fee'] = undefined;
/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {String} nonce
 */

PrepareAnAccountBasedTransactionFromXPubRI.prototype['nonce'] = undefined;
/**
 * Represents a recipient addresses. In account-based protocols like Ethereum there is only one address in this list.
 * @member {String} recipient
 */

PrepareAnAccountBasedTransactionFromXPubRI.prototype['recipient'] = undefined;
/**
 * Represents a sender address. In account-based protocols like Ethereum there is only one address in this list.
 * @member {String} sender
 */

PrepareAnAccountBasedTransactionFromXPubRI.prototype['sender'] = undefined;
/**
 * Representation of the hash that should be signed.
 * @member {String} sigHash
 */

PrepareAnAccountBasedTransactionFromXPubRI.prototype['sigHash'] = undefined;
/**
 * Representation of the transaction type
 * @member {module:model/PrepareAnAccountBasedTransactionFromXPubRI.TransactionTypeEnum} transactionType
 */

PrepareAnAccountBasedTransactionFromXPubRI.prototype['transactionType'] = undefined;
/**
 * Allowed values for the <code>transactionType</code> property.
 * @enum {String}
 * @readonly
 */

PrepareAnAccountBasedTransactionFromXPubRI['TransactionTypeEnum'] = {
  /**
   * value: "legacy-transaction"
   * @const
   */
  "legacy-transaction": "legacy-transaction",

  /**
   * value: "access-list-transaction"
   * @const
   */
  "access-list-transaction": "access-list-transaction",

  /**
   * value: "gas-fee-market-transaction"
   * @const
   */
  "gas-fee-market-transaction": "gas-fee-market-transaction"
};
var _default = PrepareAnAccountBasedTransactionFromXPubRI;
exports["default"] = _default;