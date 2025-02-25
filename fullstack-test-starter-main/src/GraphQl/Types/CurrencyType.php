<?php

namespace App\GraphQL\Types;

use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;

class CurrencyType extends ObjectType
{
    public function __construct()
    {
        parent::__construct([
            'name' => 'Currency',
            'fields' => [
                'label' => [
                    'type' => Type::string(),
                    'description' => 'The currency label',
                ],
                'symbol' => [
                    'type' => Type::string(),
                    'description' => 'The currency symbol',
                ],
                'typename' => [
                    'type' => Type::string(),
                    'description' => 'The typename of the Currency',
                ],

            ],
        ]);
    }
}
