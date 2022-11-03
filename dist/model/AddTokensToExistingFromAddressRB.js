"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _AddTokensToExistingFromAddressRBData = _interopRequireDefault(require("./AddTokensToExistingFromAddressRBData"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The AddTokensToExistingFromAddressRB model module.
 * @module model/AddTokensToExistingFromAddressRB
 * @version 1.10.0
 */
var AddTokensToExistingFromAddressRB = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AddTokensToExistingFromAddressRB</code>.
   * @alias module:model/AddTokensToExistingFromAddressRB
   * @param data {module:model/AddTokensToExistingFromAddressRBData} 
   */
  function AddTokensToExistingFromAddressRB(data) {
    _classCallCheck(this, AddTokensToExistingFromAddressRB);
    AddTokensToExistingFromAddressRB.initialize(this, data);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(AddTokensToExistingFromAddressRB, null, [{
    key: "initialize",
    value: function initialize(obj, data) {
      obj['data'] = data;
    }

    /**
     * Constructs a <code>AddTokensToExistingFromAddressRB</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddTokensToExistingFromAddressRB} obj Optional instance to populate.
     * @return {module:model/AddTokensToExistingFromAddressRB} The populated <code>AddTokensToExistingFromAddressRB</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AddTokensToExistingFromAddressRB();
        if (data.hasOwnProperty('context')) {
          obj['context'] = _ApiClient["default"].convertToType(data['context'], 'String');
        }
        if (data.hasOwnProperty('data')) {
          obj['data'] = _AddTokensToExistingFromAddressRBData["default"].constructFromObject(data['data']);
        }
      }
      return obj;
    }
  }]);
  return AddTokensToExistingFromAddressRB;
}();
/**
 * In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
 * @member {String} context
 */
AddTokensToExistingFromAddressRB.prototype['context'] = undefined;

/**
 * @member {module:model/AddTokensToExistingFromAddressRBData} data
 */
AddTokensToExistingFromAddressRB.prototype['data'] = undefined;
var _default = AddTokensToExistingFromAddressRB;
exports["default"] = _default;