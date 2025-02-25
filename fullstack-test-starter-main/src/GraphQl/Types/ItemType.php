<?php

namespace App\GraphQL\Types;

use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;

class ItemType extends ObjectType
{
    public function __construct()
    {
        parent::__construct([
            'name' => 'Item',
            'fields' => [
                'id' => [
                    'type' => Type::id(),
                    'description' => 'The ID of the Item',
                ],
                'value' => [
                    'type' => Type::string(),
                    'description' => 'The value of the Item',
                ],

                'displayValue' => [
                    'type' => Type::string(),
                    'description' => 'The value of the Item',
                ],
                'typename' => [
                    'type' => Type::string(),
                    'description' => 'The typename of the Item',
                ],
            ],
        ]);
    }
}
