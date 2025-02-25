<?php

namespace App\GraphQL\Types;

use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;
use App\GraphQL\Resolvers\ProductResolver;
use App\GraphQL\Resolvers\AttributeResolver;

class AttributeType extends ObjectType
{
    public function __construct()
    {
        parent::__construct([
            'name' => 'Attribute',
            'fields' => [
                'id' => [
                    'type' => Type::id(),
                    'description' => 'The ID of the Attribute',
                ],
                'name' => [
                    'type' => Type::string(),
                    'description' => 'The name of the Attribute',
                ],

                'type' => [
                    'type' =>  Type::string(),
                    'description' => 'The type of the Attribute',
                ],
                'items' => [
                    'type' => Type::listOf(Types::item()),
                    'resolve' => [new AttributeResolver(), 'resolveItem'],
                ],
                'typename' => [
                    'type' => Type::string(),
                    'description' => 'The typename of the Attribute',
                ],
            ],
        ]);
    }
}
