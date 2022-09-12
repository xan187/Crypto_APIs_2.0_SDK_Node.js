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
 * The GetExchangeRateByAssetsIDsRI model module.
 * @module model/GetExchangeRateByAssetsIDsRI
 * @version 1.8.0
 */
class GetExchangeRateByAssetsIDsRI {
    /**
     * Constructs a new <code>GetExchangeRateByAssetsIDsRI</code>.
     * @alias module:model/GetExchangeRateByAssetsIDsRI
     * @param calculationTimestamp {Number} Defines the time of the market data used to calculate the exchange rate in UNIX Timestamp. Oldest possible timestamp is 30 days.
     * @param fromAssetId {String} Defines the base asset Reference ID to get a rate for.
     * @param fromAssetSymbol {String} Defines the base asset symbol to get a rate for.
     * @param rate {String} Defines the exchange rate between assets calculated by weighted average of the last trades in every exchange for the last 24 hours by giving more weight to exchanges with higher volume.
     * @param toAssetId {String} Defines the relation asset Reference ID in which the base asset rate will be displayed.
     * @param toAssetSymbol {String} Defines the relation asset symbol in which the base asset rate will be displayed.
     */
    constructor(calculationTimestamp, fromAssetId, fromAssetSymbol, rate, toAssetId, toAssetSymbol) { 
        
        GetExchangeRateByAssetsIDsRI.initialize(this, calculationTimestamp, fromAssetId, fromAssetSymbol, rate, toAssetId, toAssetSymbol);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, calculationTimestamp, fromAssetId, fromAssetSymbol, rate, toAssetId, toAssetSymbol) { 
        obj['calculationTimestamp'] = calculationTimestamp;
        obj['fromAssetId'] = fromAssetId;
        obj['fromAssetSymbol'] = fromAssetSymbol;
        obj['rate'] = rate;
        obj['toAssetId'] = toAssetId;
        obj['toAssetSymbol'] = toAssetSymbol;
    }

    /**
     * Constructs a <code>GetExchangeRateByAssetsIDsRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetExchangeRateByAssetsIDsRI} obj Optional instance to populate.
     * @return {module:model/GetExchangeRateByAssetsIDsRI} The populated <code>GetExchangeRateByAssetsIDsRI</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetExchangeRateByAssetsIDsRI();

            if (data.hasOwnProperty('calculationTimestamp')) {
                obj['calculationTimestamp'] = ApiClient.convertToType(data['calculationTimestamp'], 'Number');
            }
            if (data.hasOwnProperty('fromAssetId')) {
                obj['fromAssetId'] = ApiClient.convertToType(data['fromAssetId'], 'String');
            }
            if (data.hasOwnProperty('fromAssetSymbol')) {
                obj['fromAssetSymbol'] = ApiClient.convertToType(data['fromAssetSymbol'], 'String');
            }
            if (data.hasOwnProperty('rate')) {
                obj['rate'] = ApiClient.convertToType(data['rate'], 'String');
            }
            if (data.hasOwnProperty('toAssetId')) {
                obj['toAssetId'] = ApiClient.convertToType(data['toAssetId'], 'String');
            }
            if (data.hasOwnProperty('toAssetSymbol')) {
                obj['toAssetSymbol'] = ApiClient.convertToType(data['toAssetSymbol'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Defines the time of the market data used to calculate the exchange rate in UNIX Timestamp. Oldest possible timestamp is 30 days.
 * @member {Number} calculationTimestamp
 */
GetExchangeRateByAssetsIDsRI.prototype['calculationTimestamp'] = undefined;

/**
 * Defines the base asset Reference ID to get a rate for.
 * @member {String} fromAssetId
 */
GetExchangeRateByAssetsIDsRI.prototype['fromAssetId'] = undefined;

/**
 * Defines the base asset symbol to get a rate for.
 * @member {String} fromAssetSymbol
 */
GetExchangeRateByAssetsIDsRI.prototype['fromAssetSymbol'] = undefined;

/**
 * Defines the exchange rate between assets calculated by weighted average of the last trades in every exchange for the last 24 hours by giving more weight to exchanges with higher volume.
 * @member {String} rate
 */
GetExchangeRateByAssetsIDsRI.prototype['rate'] = undefined;

/**
 * Defines the relation asset Reference ID in which the base asset rate will be displayed.
 * @member {String} toAssetId
 */
GetExchangeRateByAssetsIDsRI.prototype['toAssetId'] = undefined;

/**
 * Defines the relation asset symbol in which the base asset rate will be displayed.
 * @member {String} toAssetSymbol
 */
GetExchangeRateByAssetsIDsRI.prototype['toAssetSymbol'] = undefined;






export default GetExchangeRateByAssetsIDsRI;

