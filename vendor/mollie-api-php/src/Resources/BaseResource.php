<?php

namespace Mollie\Api\Resources;

use Mollie\Api\MollieApiClient;
abstract class BaseResource
{
    /**
     * @var MollieApiClient
     */
    protected $client;
    /**
     * Indicates the type of resource.
     *
     * @example payment
     *
     * @var string
     */
    public $resource;
    /**
     * @param MollieApiClient $client
     */
    public function __construct(\Mollie\Api\MollieApiClient $client)
    {
        $this->client = $client;
    }
}
