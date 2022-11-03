"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _InvalidRequestBodyStructure = _interopRequireDefault(require("./InvalidRequestBodyStructure"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The ConvertBitcoinCashAddress422Response model module.
 * @module model/ConvertBitcoinCashAddress422Response
 * @version 1.10.0
 */
var ConvertBitcoinCashAddress422Response = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ConvertBitcoinCashAddress422Response</code>.
   * @alias module:model/ConvertBitcoinCashAddress422Response
   * @param apiVersion {String} Specifies the version of the API that incorporates this endpoint.
   * @param requestId {String} Defines the ID of the request. The `requestId` is generated by Crypto APIs and it's unique for every request.
   * @param error {module:model/InvalidRequestBodyStructure} 
   */
  function ConvertBitcoinCashAddress422Response(apiVersion, requestId, error) {
    _classCallCheck(this, ConvertBitcoinCashAddress422Response);
    ConvertBitcoinCashAddress422Response.initialize(this, apiVersion, requestId, error);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(ConvertBitcoinCashAddress422Response, null, [{
    key: "initialize",
    value: function initialize(obj, apiVersion, requestId, error) {
      obj['apiVersion'] = apiVersion;
      obj['requestId'] = requestId;
      obj['error'] = error;
    }

    /**
     * Constructs a <code>ConvertBitcoinCashAddress422Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ConvertBitcoinCashAddress422Response} obj Optional instance to populate.
     * @return {module:model/ConvertBitcoinCashAddress422Response} The populated <code>ConvertBitcoinCashAddress422Response</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ConvertBitcoinCashAddress422Response();
        if (data.hasOwnProperty('apiVersion')) {
          obj['apiVersion'] = _ApiClient["default"].convertToType(data['apiVersion'], 'String');
        }
        if (data.hasOwnProperty('requestId')) {
          obj['requestId'] = _ApiClient["default"].convertToType(data['requestId'], 'String');
        }
        if (data.hasOwnProperty('context')) {
          obj['context'] = _ApiClient["default"].convertToType(data['context'], 'String');
        }
        if (data.hasOwnProperty('error')) {
          obj['error'] = _InvalidRequestBodyStructure["default"].constructFromObject(data['error']);
        }
      }
      return obj;
    }
  }]);
  return ConvertBitcoinCashAddress422Response;
}();
/**
 * Specifies the version of the API that incorporates this endpoint.
 * @member {String} apiVersion
 */
ConvertBitcoinCashAddress422Response.prototype['apiVersion'] = undefined;

/**
 * Defines the ID of the request. The `requestId` is generated by Crypto APIs and it's unique for every request.
 * @member {String} requestId
 */
ConvertBitcoinCashAddress422Response.prototype['requestId'] = undefined;

/**
 * In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
 * @member {String} context
 */
ConvertBitcoinCashAddress422Response.prototype['context'] = undefined;

/**
 * @member {module:model/InvalidRequestBodyStructure} error
 */
ConvertBitcoinCashAddress422Response.prototype['error'] = undefined;
var _default = ConvertBitcoinCashAddress422Response;
exports["default"] = _default;