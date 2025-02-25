<?php

namespace App\GraphQL\Types;

use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;
use App\GraphQL\Resolvers\CategoryResolver;

class CategoryType extends ObjectType
{
    public function __construct()
    {
        parent::__construct([
            'name' => 'Category',
            'fields' => [
                'id' => [
                    'type' => Type::id(),
                    'description' => 'The ID of the category',
                ],
                'name' => [
                    'type' => Type::string(),
                    'description' => 'The name of the category',
                ],
                'typename' => [
                    'type' => Type::string(),
                    'description' => 'The typename of the category',
                ],
                'product' => [
                    'type' => Type::listOf(Types::product()),
                    'resolve' => [new CategoryResolver(), 'resolveProduct'],
                ],
            ],
        ]);
    }
}
