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
import ActivateBlockchainEventSubscription400Response from '../model/ActivateBlockchainEventSubscription400Response';
import ActivateBlockchainEventSubscription401Response from '../model/ActivateBlockchainEventSubscription401Response';
import ActivateBlockchainEventSubscription403Response from '../model/ActivateBlockchainEventSubscription403Response';
import ActivateBlockchainEventSubscriptionR from '../model/ActivateBlockchainEventSubscriptionR';
import ActivateBlockchainEventSubscriptionRB from '../model/ActivateBlockchainEventSubscriptionRB';
import ConvertBitcoinCashAddress402Response from '../model/ConvertBitcoinCashAddress402Response';
import ConvertBitcoinCashAddress409Response from '../model/ConvertBitcoinCashAddress409Response';
import ConvertBitcoinCashAddress415Response from '../model/ConvertBitcoinCashAddress415Response';
import ConvertBitcoinCashAddress422Response from '../model/ConvertBitcoinCashAddress422Response';
import ConvertBitcoinCashAddress429Response from '../model/ConvertBitcoinCashAddress429Response';
import ConvertBitcoinCashAddress500Response from '../model/ConvertBitcoinCashAddress500Response';
import DeleteBlockchainEventSubscription400Response from '../model/DeleteBlockchainEventSubscription400Response';
import DeleteBlockchainEventSubscription401Response from '../model/DeleteBlockchainEventSubscription401Response';
import DeleteBlockchainEventSubscription403Response from '../model/DeleteBlockchainEventSubscription403Response';
import DeleteBlockchainEventSubscriptionR from '../model/DeleteBlockchainEventSubscriptionR';
import GetBlockchainEventSubscriptionDetailsByReferenceID400Response from '../model/GetBlockchainEventSubscriptionDetailsByReferenceID400Response';
import GetBlockchainEventSubscriptionDetailsByReferenceID401Response from '../model/GetBlockchainEventSubscriptionDetailsByReferenceID401Response';
import GetBlockchainEventSubscriptionDetailsByReferenceID403Response from '../model/GetBlockchainEventSubscriptionDetailsByReferenceID403Response';
import GetBlockchainEventSubscriptionDetailsByReferenceIDR from '../model/GetBlockchainEventSubscriptionDetailsByReferenceIDR';
import GetXRPRippleTransactionDetailsByTransactionID404Response from '../model/GetXRPRippleTransactionDetailsByTransactionID404Response';
import ListBlockchainEventsSubscriptions400Response from '../model/ListBlockchainEventsSubscriptions400Response';
import ListBlockchainEventsSubscriptions401Response from '../model/ListBlockchainEventsSubscriptions401Response';
import ListBlockchainEventsSubscriptions403Response from '../model/ListBlockchainEventsSubscriptions403Response';
import ListBlockchainEventsSubscriptionsR from '../model/ListBlockchainEventsSubscriptionsR';

/**
* ManageSubscriptions service.
* @module api/ManageSubscriptionsApi
* @version 1.13.0
*/
export default class ManageSubscriptionsApi {

    /**
    * Constructs a new ManageSubscriptionsApi. 
    * @alias module:api/ManageSubscriptionsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Activate Blockchain Event Subscription
     * Through this endpoint customers can reactivate an event subscription (callback) which has been deactivated by the system. Deactivations could happen due to various reasons, most often \"maximum retry attempts reached\".
     * @param {String} referenceId Represents a unique ID used to reference the specific callback subscription.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {module:model/ActivateBlockchainEventSubscriptionRB} opts.activateBlockchainEventSubscriptionRB 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ActivateBlockchainEventSubscriptionR} and HTTP response
     */
    activateBlockchainEventSubscriptionWithHttpInfo(referenceId, opts) {
      opts = opts || {};
      let postBody = opts['activateBlockchainEventSubscriptionRB'];
      // verify the required parameter 'referenceId' is set
      if (referenceId === undefined || referenceId === null) {
        throw new Error("Missing the required parameter 'referenceId' when calling activateBlockchainEventSubscription");
      }

      let pathParams = {
        'referenceId': referenceId
      };
      let queryParams = {
        'context': opts['context']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ActivateBlockchainEventSubscriptionR;
      return this.apiClient.callApi(
        '/blockchain-events/subscriptions/{referenceId}/activate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Activate Blockchain Event Subscription
     * Through this endpoint customers can reactivate an event subscription (callback) which has been deactivated by the system. Deactivations could happen due to various reasons, most often \"maximum retry attempts reached\".
     * @param {String} referenceId Represents a unique ID used to reference the specific callback subscription.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {module:model/ActivateBlockchainEventSubscriptionRB} opts.activateBlockchainEventSubscriptionRB 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ActivateBlockchainEventSubscriptionR}
     */
    activateBlockchainEventSubscription(referenceId, opts) {
      return this.activateBlockchainEventSubscriptionWithHttpInfo(referenceId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete Blockchain Event Subscription
     * Through this endpoint the customer can delete blockchain event subscriptions they have by attributes `referenceId` and `network`.    Currently Crypto APIs 2.0 offers certain Blockchain event endpoints which allow the user to subscribe for one/a few/all and receive callback notifications when the specific event occurs.    {note}To have an operational callback subscription, you need to first verify a domain for the Callback URL. Please see more information on Callbacks [here](https://developers.cryptoapis.io/technical-documentation/general-information/callbacks#callback-url).{/note}    {warning}Crypto APIs will notify the user **only when** the event occurs. There are cases when the specific event doesn't happen at all, or takes a long time to do so. A callback notification **will not** be sent if the event does not or cannot occur, or will take long time to occur.{/warning}
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} referenceId Represents a unique ID used to reference the specific callback subscription.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DeleteBlockchainEventSubscriptionR} and HTTP response
     */
    deleteBlockchainEventSubscriptionWithHttpInfo(blockchain, network, referenceId, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling deleteBlockchainEventSubscription");
      }
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling deleteBlockchainEventSubscription");
      }
      // verify the required parameter 'referenceId' is set
      if (referenceId === undefined || referenceId === null) {
        throw new Error("Missing the required parameter 'referenceId' when calling deleteBlockchainEventSubscription");
      }

      let pathParams = {
        'blockchain': blockchain,
        'network': network,
        'referenceId': referenceId
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
      let returnType = DeleteBlockchainEventSubscriptionR;
      return this.apiClient.callApi(
        '/blockchain-events/{blockchain}/{network}/subscriptions/{referenceId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete Blockchain Event Subscription
     * Through this endpoint the customer can delete blockchain event subscriptions they have by attributes `referenceId` and `network`.    Currently Crypto APIs 2.0 offers certain Blockchain event endpoints which allow the user to subscribe for one/a few/all and receive callback notifications when the specific event occurs.    {note}To have an operational callback subscription, you need to first verify a domain for the Callback URL. Please see more information on Callbacks [here](https://developers.cryptoapis.io/technical-documentation/general-information/callbacks#callback-url).{/note}    {warning}Crypto APIs will notify the user **only when** the event occurs. There are cases when the specific event doesn't happen at all, or takes a long time to do so. A callback notification **will not** be sent if the event does not or cannot occur, or will take long time to occur.{/warning}
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} referenceId Represents a unique ID used to reference the specific callback subscription.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DeleteBlockchainEventSubscriptionR}
     */
    deleteBlockchainEventSubscription(blockchain, network, referenceId, opts) {
      return this.deleteBlockchainEventSubscriptionWithHttpInfo(blockchain, network, referenceId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get Blockchain Event Subscription Details By Reference ID
     * Through this endpoint the customer can get detailed information for a callback subscription by providing its reference ID.    Currently Crypto APIs 2.0 offers certain Blockchain event endpoints which allow the user to subscribe for one/a few/all and receive callback notifications when the specific event occurs.
     * @param {String} referenceId Represents a unique ID used to reference the specific callback subscription.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetBlockchainEventSubscriptionDetailsByReferenceIDR} and HTTP response
     */
    getBlockchainEventSubscriptionDetailsByReferenceIDWithHttpInfo(referenceId, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'referenceId' is set
      if (referenceId === undefined || referenceId === null) {
        throw new Error("Missing the required parameter 'referenceId' when calling getBlockchainEventSubscriptionDetailsByReferenceID");
      }

      let pathParams = {
        'referenceId': referenceId
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
      let returnType = GetBlockchainEventSubscriptionDetailsByReferenceIDR;
      return this.apiClient.callApi(
        '/blockchain-events/subscriptions/{referenceId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get Blockchain Event Subscription Details By Reference ID
     * Through this endpoint the customer can get detailed information for a callback subscription by providing its reference ID.    Currently Crypto APIs 2.0 offers certain Blockchain event endpoints which allow the user to subscribe for one/a few/all and receive callback notifications when the specific event occurs.
     * @param {String} referenceId Represents a unique ID used to reference the specific callback subscription.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetBlockchainEventSubscriptionDetailsByReferenceIDR}
     */
    getBlockchainEventSubscriptionDetailsByReferenceID(referenceId, opts) {
      return this.getBlockchainEventSubscriptionDetailsByReferenceIDWithHttpInfo(referenceId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List Blockchain Events Subscriptions
     * Through this endpoint the customer can obtain a list of their callback subscriptions for the available Blockchain events.    Currently Crypto APIs 2.0 offers certain Blockchain event endpoints which allow the user to subscribe for one/a few/all and receive callback notifications when the specific event occurs.    {note}To have an operational callback subscription, you need to first verify a domain for the Callback URL. Please see more information on Callbacks [here](https://developers.cryptoapis.io/technical-documentation/general-information/callbacks#callback-url).{/note}
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
     * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListBlockchainEventsSubscriptionsR} and HTTP response
     */
    listBlockchainEventsSubscriptionsWithHttpInfo(blockchain, network, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling listBlockchainEventsSubscriptions");
      }
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling listBlockchainEventsSubscriptions");
      }

      let pathParams = {
        'blockchain': blockchain,
        'network': network
      };
      let queryParams = {
        'context': opts['context'],
        'limit': opts['limit'],
        'offset': opts['offset']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ListBlockchainEventsSubscriptionsR;
      return this.apiClient.callApi(
        '/blockchain-events/{blockchain}/{network}/subscriptions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List Blockchain Events Subscriptions
     * Through this endpoint the customer can obtain a list of their callback subscriptions for the available Blockchain events.    Currently Crypto APIs 2.0 offers certain Blockchain event endpoints which allow the user to subscribe for one/a few/all and receive callback notifications when the specific event occurs.    {note}To have an operational callback subscription, you need to first verify a domain for the Callback URL. Please see more information on Callbacks [here](https://developers.cryptoapis.io/technical-documentation/general-information/callbacks#callback-url).{/note}
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
     * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListBlockchainEventsSubscriptionsR}
     */
    listBlockchainEventsSubscriptions(blockchain, network, opts) {
      return this.listBlockchainEventsSubscriptionsWithHttpInfo(blockchain, network, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
