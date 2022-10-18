"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The GetAssetDetailsByAssetIDRILatestRate model module.
 * @module model/GetAssetDetailsByAssetIDRILatestRate
 * @version 1.9.0
 */var GetAssetDetailsByAssetIDRILatestRate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetAssetDetailsByAssetIDRILatestRate</code>.
   * Specifies the latest price of the asset.
   * @alias module:model/GetAssetDetailsByAssetIDRILatestRate
   * @param amount {String} Represents the amount of the latest rate.
   * @param unit {String} Specifies the unit of the latest price of the asset.
   */
  function GetAssetDetailsByAssetIDRILatestRate(amount, unit) {
    _classCallCheck(this, GetAssetDetailsByAssetIDRILatestRate);
    GetAssetDetailsByAssetIDRILatestRate.initialize(this, amount, unit);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(GetAssetDetailsByAssetIDRILatestRate, null, [{
    key: "initialize",
    value: function initialize(obj, amount, unit) {
      obj['amount'] = amount;
      obj['unit'] = unit;
    }

    /**
     * Constructs a <code>GetAssetDetailsByAssetIDRILatestRate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetAssetDetailsByAssetIDRILatestRate} obj Optional instance to populate.
     * @return {module:model/GetAssetDetailsByAssetIDRILatestRate} The populated <code>GetAssetDetailsByAssetIDRILatestRate</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetAssetDetailsByAssetIDRILatestRate();
        if (data.hasOwnProperty('amount')) {
          obj['amount'] = _ApiClient["default"].convertToType(data['amount'], 'String');
        }
        if (data.hasOwnProperty('calculationTimestamp')) {
          obj['calculationTimestamp'] = _ApiClient["default"].convertToType(data['calculationTimestamp'], 'Number');
        }
        if (data.hasOwnProperty('unit')) {
          obj['unit'] = _ApiClient["default"].convertToType(data['unit'], 'String');
        }
      }
      return obj;
    }
  }]);
  return GetAssetDetailsByAssetIDRILatestRate;
}(); /**
      * Represents the amount of the latest rate.
      * @member {String} amount
      */
GetAssetDetailsByAssetIDRILatestRate.prototype['amount'] = undefined;

/**
 * Defines when the price was calculated in UNIX timestamp. Oldest possible timestamp is 30 days.
 * @member {Number} calculationTimestamp
 */
GetAssetDetailsByAssetIDRILatestRate.prototype['calculationTimestamp'] = undefined;

/**
 * Specifies the unit of the latest price of the asset.
 * @member {String} unit
 */
GetAssetDetailsByAssetIDRILatestRate.prototype['unit'] = undefined;
var _default = GetAssetDetailsByAssetIDRILatestRate;
exports["default"] = _default;