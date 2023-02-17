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
import GetAddressDetailsFromCallback400Response from '../model/GetAddressDetailsFromCallback400Response';
import GetAddressDetailsFromCallback401Response from '../model/GetAddressDetailsFromCallback401Response';
import GetAddressDetailsFromCallback403Response from '../model/GetAddressDetailsFromCallback403Response';
import GetAddressDetailsFromCallback404Response from '../model/GetAddressDetailsFromCallback404Response';
import GetAddressDetailsFromCallbackR from '../model/GetAddressDetailsFromCallbackR';
import GetBlockDetailsByBlockHashFromCallback400Response from '../model/GetBlockDetailsByBlockHashFromCallback400Response';
import GetBlockDetailsByBlockHashFromCallback401Response from '../model/GetBlockDetailsByBlockHashFromCallback401Response';
import GetBlockDetailsByBlockHashFromCallback403Response from '../model/GetBlockDetailsByBlockHashFromCallback403Response';
import GetBlockDetailsByBlockHashFromCallbackR from '../model/GetBlockDetailsByBlockHashFromCallbackR';
import GetBlockDetailsByBlockHeightFromCallback400Response from '../model/GetBlockDetailsByBlockHeightFromCallback400Response';
import GetBlockDetailsByBlockHeightFromCallback401Response from '../model/GetBlockDetailsByBlockHeightFromCallback401Response';
import GetBlockDetailsByBlockHeightFromCallback403Response from '../model/GetBlockDetailsByBlockHeightFromCallback403Response';
import GetBlockDetailsByBlockHeightFromCallbackR from '../model/GetBlockDetailsByBlockHeightFromCallbackR';
import GetTransactionDetailsByTransactionIDFromCallback400Response from '../model/GetTransactionDetailsByTransactionIDFromCallback400Response';
import GetTransactionDetailsByTransactionIDFromCallback401Response from '../model/GetTransactionDetailsByTransactionIDFromCallback401Response';
import GetTransactionDetailsByTransactionIDFromCallback403Response from '../model/GetTransactionDetailsByTransactionIDFromCallback403Response';
import GetTransactionDetailsByTransactionIDFromCallbackR from '../model/GetTransactionDetailsByTransactionIDFromCallbackR';
import GetXRPRippleTransactionDetailsByTransactionID404Response from '../model/GetXRPRippleTransactionDetailsByTransactionID404Response';
import ListTransactionsByBlockHeight404Response from '../model/ListTransactionsByBlockHeight404Response';

/**
* CallbackData service.
* @module api/CallbackDataApi
* @version 1.13.0
*/
export default class CallbackDataApi {

    /**
    * Constructs a new CallbackDataApi. 
    * @alias module:api/CallbackDataApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Get Address Details From Callback
     * This endpoint creates a shortcut to obtain information from Blockchain data by going through Blockchain Events and a specific Event Subscription. It provides data for a specific address from the Event it takes part in only if the address already exists in the blockchain events subscriptions. It applies only for Events related to that customer.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} address Represents the public address, which is a compressed and shortened form of a public key.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetAddressDetailsFromCallbackR} and HTTP response
     */
    getAddressDetailsFromCallbackWithHttpInfo(blockchain, network, address, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling getAddressDetailsFromCallback");
      }
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling getAddressDetailsFromCallback");
      }
      // verify the required parameter 'address' is set
      if (address === undefined || address === null) {
        throw new Error("Missing the required parameter 'address' when calling getAddressDetailsFromCallback");
      }

      let pathParams = {
        'blockchain': blockchain,
        'network': network,
        'address': address
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
      let returnType = GetAddressDetailsFromCallbackR;
      return this.apiClient.callApi(
        '/blockchain-events/{blockchain}/{network}/addresses/{address}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get Address Details From Callback
     * This endpoint creates a shortcut to obtain information from Blockchain data by going through Blockchain Events and a specific Event Subscription. It provides data for a specific address from the Event it takes part in only if the address already exists in the blockchain events subscriptions. It applies only for Events related to that customer.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} address Represents the public address, which is a compressed and shortened form of a public key.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetAddressDetailsFromCallbackR}
     */
    getAddressDetailsFromCallback(blockchain, network, address, opts) {
      return this.getAddressDetailsFromCallbackWithHttpInfo(blockchain, network, address, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get Block Details By Block Hash From Callback
     * This endpoint creates a shortcut to obtain information from Blockchain data by going through Blockchain Events and a specific Event Subscription. It provides data for a specific block by providing the `blockHash` attribute from the Event it takes part in and after making check that the customer in question does have a subscription for this block. It applies only for Events related to that user.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} blockHash Represents the hash of the block, which is its unique identifier. It represents a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetBlockDetailsByBlockHashFromCallbackR} and HTTP response
     */
    getBlockDetailsByBlockHashFromCallbackWithHttpInfo(blockchain, network, blockHash, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling getBlockDetailsByBlockHashFromCallback");
      }
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling getBlockDetailsByBlockHashFromCallback");
      }
      // verify the required parameter 'blockHash' is set
      if (blockHash === undefined || blockHash === null) {
        throw new Error("Missing the required parameter 'blockHash' when calling getBlockDetailsByBlockHashFromCallback");
      }

      let pathParams = {
        'blockchain': blockchain,
        'network': network,
        'blockHash': blockHash
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
      let returnType = GetBlockDetailsByBlockHashFromCallbackR;
      return this.apiClient.callApi(
        '/blockchain-events/{blockchain}/{network}/blocks/hash/{blockHash}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get Block Details By Block Hash From Callback
     * This endpoint creates a shortcut to obtain information from Blockchain data by going through Blockchain Events and a specific Event Subscription. It provides data for a specific block by providing the `blockHash` attribute from the Event it takes part in and after making check that the customer in question does have a subscription for this block. It applies only for Events related to that user.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} blockHash Represents the hash of the block, which is its unique identifier. It represents a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetBlockDetailsByBlockHashFromCallbackR}
     */
    getBlockDetailsByBlockHashFromCallback(blockchain, network, blockHash, opts) {
      return this.getBlockDetailsByBlockHashFromCallbackWithHttpInfo(blockchain, network, blockHash, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get Block Details By Block Height From Callback
     * This endpoint creates a shortcut to obtain information from Blockchain data by going through Blockchain Events and a specific Event Subscription. It provides data for the specific Block by providing the `blockHeight` attribute from the Event it takes part in. It applies only for Events related to that user.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} blockHeight Represents the number of blocks in the blockchain preceding this specific block. Block numbers have no gaps. A blockchain usually starts with block 0 called the \"Genesis block\".
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetBlockDetailsByBlockHeightFromCallbackR} and HTTP response
     */
    getBlockDetailsByBlockHeightFromCallbackWithHttpInfo(blockchain, network, blockHeight, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling getBlockDetailsByBlockHeightFromCallback");
      }
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling getBlockDetailsByBlockHeightFromCallback");
      }
      // verify the required parameter 'blockHeight' is set
      if (blockHeight === undefined || blockHeight === null) {
        throw new Error("Missing the required parameter 'blockHeight' when calling getBlockDetailsByBlockHeightFromCallback");
      }

      let pathParams = {
        'blockchain': blockchain,
        'network': network,
        'blockHeight': blockHeight
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
      let returnType = GetBlockDetailsByBlockHeightFromCallbackR;
      return this.apiClient.callApi(
        '/blockchain-events/{blockchain}/{network}/blocks/height/{blockHeight}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get Block Details By Block Height From Callback
     * This endpoint creates a shortcut to obtain information from Blockchain data by going through Blockchain Events and a specific Event Subscription. It provides data for the specific Block by providing the `blockHeight` attribute from the Event it takes part in. It applies only for Events related to that user.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} blockHeight Represents the number of blocks in the blockchain preceding this specific block. Block numbers have no gaps. A blockchain usually starts with block 0 called the \"Genesis block\".
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetBlockDetailsByBlockHeightFromCallbackR}
     */
    getBlockDetailsByBlockHeightFromCallback(blockchain, network, blockHeight, opts) {
      return this.getBlockDetailsByBlockHeightFromCallbackWithHttpInfo(blockchain, network, blockHeight, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get Transaction Details By Transaction ID From Callback
     * This endpoint creates a shortcut to obtain information from Blockchain data by going through Blockchain Events and a specific Event Subscription. It provides data for a specific transaction from the Event it takes part in by providing the `transactionId` attribute. It applies only for Events related to that user.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} transactionId Represents the unique identifier of a transaction, i.e. it could be transactionId in UTXO-based protocols like Bitcoin, and transaction hash in Ethereum blockchain.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetTransactionDetailsByTransactionIDFromCallbackR} and HTTP response
     */
    getTransactionDetailsByTransactionIDFromCallbackWithHttpInfo(blockchain, network, transactionId, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling getTransactionDetailsByTransactionIDFromCallback");
      }
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling getTransactionDetailsByTransactionIDFromCallback");
      }
      // verify the required parameter 'transactionId' is set
      if (transactionId === undefined || transactionId === null) {
        throw new Error("Missing the required parameter 'transactionId' when calling getTransactionDetailsByTransactionIDFromCallback");
      }

      let pathParams = {
        'blockchain': blockchain,
        'network': network,
        'transactionId': transactionId
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
      let returnType = GetTransactionDetailsByTransactionIDFromCallbackR;
      return this.apiClient.callApi(
        '/blockchain-events/{blockchain}/{network}/transactions/{transactionId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get Transaction Details By Transaction ID From Callback
     * This endpoint creates a shortcut to obtain information from Blockchain data by going through Blockchain Events and a specific Event Subscription. It provides data for a specific transaction from the Event it takes part in by providing the `transactionId` attribute. It applies only for Events related to that user.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} transactionId Represents the unique identifier of a transaction, i.e. it could be transactionId in UTXO-based protocols like Bitcoin, and transaction hash in Ethereum blockchain.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetTransactionDetailsByTransactionIDFromCallbackR}
     */
    getTransactionDetailsByTransactionIDFromCallback(blockchain, network, transactionId, opts) {
      return this.getTransactionDetailsByTransactionIDFromCallbackWithHttpInfo(blockchain, network, transactionId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
