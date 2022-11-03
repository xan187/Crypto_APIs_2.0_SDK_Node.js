"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _CreateCoinsTransactionFromAddressForWholeAmountRData = _interopRequireDefault(require("./CreateCoinsTransactionFromAddressForWholeAmountRData"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The CreateCoinsTransactionFromAddressForWholeAmountR model module.
 * @module model/CreateCoinsTransactionFromAddressForWholeAmountR
 * @version 1.10.0
 */
var CreateCoinsTransactionFromAddressForWholeAmountR = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateCoinsTransactionFromAddressForWholeAmountR</code>.
   * @alias module:model/CreateCoinsTransactionFromAddressForWholeAmountR
   * @param apiVersion {String} Specifies the version of the API that incorporates this endpoint.
   * @param requestId {String} Defines the ID of the request. The `requestId` is generated by Crypto APIs and it's unique for every request.
   * @param data {module:model/CreateCoinsTransactionFromAddressForWholeAmountRData} 
   */
  function CreateCoinsTransactionFromAddressForWholeAmountR(apiVersion, requestId, data) {
    _classCallCheck(this, CreateCoinsTransactionFromAddressForWholeAmountR);
    CreateCoinsTransactionFromAddressForWholeAmountR.initialize(this, apiVersion, requestId, data);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(CreateCoinsTransactionFromAddressForWholeAmountR, null, [{
    key: "initialize",
    value: function initialize(obj, apiVersion, requestId, data) {
      obj['apiVersion'] = apiVersion;
      obj['requestId'] = requestId;
      obj['data'] = data;
    }

    /**
     * Constructs a <code>CreateCoinsTransactionFromAddressForWholeAmountR</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateCoinsTransactionFromAddressForWholeAmountR} obj Optional instance to populate.
     * @return {module:model/CreateCoinsTransactionFromAddressForWholeAmountR} The populated <code>CreateCoinsTransactionFromAddressForWholeAmountR</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateCoinsTransactionFromAddressForWholeAmountR();
        if (data.hasOwnProperty('apiVersion')) {
          obj['apiVersion'] = _ApiClient["default"].convertToType(data['apiVersion'], 'String');
        }
        if (data.hasOwnProperty('requestId')) {
          obj['requestId'] = _ApiClient["default"].convertToType(data['requestId'], 'String');
        }
        if (data.hasOwnProperty('context')) {
          obj['context'] = _ApiClient["default"].convertToType(data['context'], 'String');
        }
        if (data.hasOwnProperty('data')) {
          obj['data'] = _CreateCoinsTransactionFromAddressForWholeAmountRData["default"].constructFromObject(data['data']);
        }
      }
      return obj;
    }
  }]);
  return CreateCoinsTransactionFromAddressForWholeAmountR;
}();
/**
 * Specifies the version of the API that incorporates this endpoint.
 * @member {String} apiVersion
 */
CreateCoinsTransactionFromAddressForWholeAmountR.prototype['apiVersion'] = undefined;

/**
 * Defines the ID of the request. The `requestId` is generated by Crypto APIs and it's unique for every request.
 * @member {String} requestId
 */
CreateCoinsTransactionFromAddressForWholeAmountR.prototype['requestId'] = undefined;

/**
 * In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
 * @member {String} context
 */
CreateCoinsTransactionFromAddressForWholeAmountR.prototype['context'] = undefined;

/**
 * @member {module:model/CreateCoinsTransactionFromAddressForWholeAmountRData} data
 */
CreateCoinsTransactionFromAddressForWholeAmountR.prototype['data'] = undefined;
var _default = CreateCoinsTransactionFromAddressForWholeAmountR;
exports["default"] = _default;