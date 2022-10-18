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


import ApiClient from "../ApiClient";
import ConvertBitcoinCashAddress402Response from '../model/ConvertBitcoinCashAddress402Response';
import ConvertBitcoinCashAddress409Response from '../model/ConvertBitcoinCashAddress409Response';
import ConvertBitcoinCashAddress415Response from '../model/ConvertBitcoinCashAddress415Response';
import ConvertBitcoinCashAddress422Response from '../model/ConvertBitcoinCashAddress422Response';
import ConvertBitcoinCashAddress429Response from '../model/ConvertBitcoinCashAddress429Response';
import ConvertBitcoinCashAddress500Response from '../model/ConvertBitcoinCashAddress500Response';
import GetAssetDetailsByAssetID400Response from '../model/GetAssetDetailsByAssetID400Response';
import GetAssetDetailsByAssetID401Response from '../model/GetAssetDetailsByAssetID401Response';
import GetAssetDetailsByAssetID403Response from '../model/GetAssetDetailsByAssetID403Response';
import GetAssetDetailsByAssetIDR from '../model/GetAssetDetailsByAssetIDR';
import GetAssetDetailsByAssetSymbol400Response from '../model/GetAssetDetailsByAssetSymbol400Response';
import GetAssetDetailsByAssetSymbol401Response from '../model/GetAssetDetailsByAssetSymbol401Response';
import GetAssetDetailsByAssetSymbol403Response from '../model/GetAssetDetailsByAssetSymbol403Response';
import GetAssetDetailsByAssetSymbolR from '../model/GetAssetDetailsByAssetSymbolR';

/**
* Assets service.
* @module api/AssetsApi
* @version 1.9.0
*/
export default class AssetsApi {

    /**
    * Constructs a new AssetsApi. 
    * @alias module:api/AssetsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Get Asset Details By Asset ID
     * Through this endpoint users can obtain information on assets by `assetId`.    The details returned could include information on the latest rate and rate fluctuation of different periods of time - 24 hours, a week, one hour, the encoding of the logo, and more.
     * @param {String} assetId Defines the unique ID of the specific asset.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetAssetDetailsByAssetIDR} and HTTP response
     */
    getAssetDetailsByAssetIDWithHttpInfo(assetId, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'assetId' is set
      if (assetId === undefined || assetId === null) {
        throw new Error("Missing the required parameter 'assetId' when calling getAssetDetailsByAssetID");
      }

      let pathParams = {
        'assetId': assetId
      };
      let queryParams = {
        'context': opts['context']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetAssetDetailsByAssetIDR;
      return this.apiClient.callApi(
        '/market-data/assets/assetId/{assetId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get Asset Details By Asset ID
     * Through this endpoint users can obtain information on assets by `assetId`.    The details returned could include information on the latest rate and rate fluctuation of different periods of time - 24 hours, a week, one hour, the encoding of the logo, and more.
     * @param {String} assetId Defines the unique ID of the specific asset.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetAssetDetailsByAssetIDR}
     */
    getAssetDetailsByAssetID(assetId, opts) {
      return this.getAssetDetailsByAssetIDWithHttpInfo(assetId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get Asset Details By Asset Symbol
     * Through this endpoint users can obtain information on assets by asset symbol.    The details returned could include information on the latest rate and rate fluctuation of different periods of time - 24 hours, a week, one hour, the encoding of the logo, and more.
     * @param {String} assetSymbol Specifies the asset's unique symbol in the Crypto APIs listings.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetAssetDetailsByAssetSymbolR} and HTTP response
     */
    getAssetDetailsByAssetSymbolWithHttpInfo(assetSymbol, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'assetSymbol' is set
      if (assetSymbol === undefined || assetSymbol === null) {
        throw new Error("Missing the required parameter 'assetSymbol' when calling getAssetDetailsByAssetSymbol");
      }

      let pathParams = {
        'assetSymbol': assetSymbol
      };
      let queryParams = {
        'context': opts['context']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetAssetDetailsByAssetSymbolR;
      return this.apiClient.callApi(
        '/market-data/assets/{assetSymbol}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get Asset Details By Asset Symbol
     * Through this endpoint users can obtain information on assets by asset symbol.    The details returned could include information on the latest rate and rate fluctuation of different periods of time - 24 hours, a week, one hour, the encoding of the logo, and more.
     * @param {String} assetSymbol Specifies the asset's unique symbol in the Crypto APIs listings.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetAssetDetailsByAssetSymbolR}
     */
    getAssetDetailsByAssetSymbol(assetSymbol, opts) {
      return this.getAssetDetailsByAssetSymbolWithHttpInfo(assetSymbol, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
