<?php

namespace App\GraphQL\Types;

use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;
use App\GraphQL\Resolvers\ProductResolver;

class PriceType extends ObjectType
{
    public function __construct()
    {
        parent::__construct([
            'name' => 'Price',
            'fields' => [
                'amount' => [
                    'type' => Type::float(),
                    'description' => 'The price amount of the product',
                ],
                'currency' => [
                    'type' => Type::listOf(Types::currency()),
                    'description' => 'The price currency ',
                    'resolve' => [new ProductResolver(), 'resolveCurrency'],
                ],
                'typename' => [
                    'type' => Type::string(),
                    'description' => 'The typename of the price',
                ],

            ],
        ]);
    }
}
