<?php

namespace App\GraphQL\Types;

use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;
use App\GraphQL\Resolvers\ProductResolver;
use App\GraphQL\Resolvers\AttributeResolver;

class ProductType extends ObjectType
{
    public function __construct()
    {
        parent::__construct([
            'name' => 'Product',
            'fields' => [
                'id' => [
                    'type' => Type::id(),
                    'description' => 'The ID of the Product',
                ],
                'name' => [
                    'type' => Type::string(),
                    'description' => 'The name of the Product',
                ],
                'instock' => [
                    'type' => Type::boolean(),
                    'description' => 'Check if the product is instock',
                ],
                'description' => [
                    'type' => Type::string(),
                    'description' => 'The description of the Product',
                ],
                'brand' => [
                    'type' => Type::string(),
                    'description' => 'The brand of the Product',
                ],
                'category' => [
                    'type' => Type::string(),
                    'description' => 'The category of the Product',
                ],
                'category_id' => [
                    'type' => Type::int(),
                    'description' => 'The category id of the Product',
                ],
                'gallery' => [
                    'type' => Type::listOf(Types::gallery()),
                    'resolve' => [new ProductResolver(), 'resolveGallery'],
                ],
                'attribute' => [
                    'type' => Type::listOf(Types::attribute()),
                    'resolve' => [new AttributeResolver(), 'resolveAttribute'],
                ],
                'swatchAttribute' => [
                    'type' => Type::listOf(Types::attribute()),
                    'resolve' => [new AttributeResolver(), 'resolveSwatchAttribute'],
                ],
                'textAttribute' => [
                    'type' => Type::listOf(Types::attribute()),
                    'resolve' => [new AttributeResolver(), 'resolveTextAttribute'],
                ],
                'price' => [
                    'type' => Type::listOf(Types::price()),
                    'resolve' => [new ProductResolver(), 'resolvePrice'],
                ],
                'typename' => [
                    'type' => Type::string(),
                    'description' => 'The typename of the Product',
                ],
            ],
        ]);
    }
}
