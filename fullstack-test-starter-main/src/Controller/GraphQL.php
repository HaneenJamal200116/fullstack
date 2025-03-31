<?php

namespace App\Controller;

use GraphQL\GraphQL as GraphQLBase;
use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;
use GraphQL\Type\Schema;
use GraphQL\Type\SchemaConfig;
use RuntimeException;
use Throwable;
use App\GraphQL\Types\Types;
use App\GraphQL\Resolvers\CategoryResolver;
use App\GraphQL\Resolvers\ProductResolver;
use App\GraphQL\Resolvers\AttributeResolver;
use App\GraphQL\Resolvers\OrderResolver;

class GraphQL
{
    public static function handle()
    {

        try {
            $queryType = new ObjectType([
                'name' => 'Query',
                'fields' => [

                    'categories' => [
                        'type' => Type::listOf(Types::category()),
                        'resolve' => [new CategoryResolver(), 'resolveAll'],
                    ],

                    'products' => [
                        'type' => Type::listOf(Types::product()),
                        'resolve' => [new ProductResolver(), 'resolveAll'],
                    ],

                    'product' => [
                        'type' => Types::product(),
                        'args' => [
                            'id' => ['type' => Type::nonNull(Type::id())],
                        ],
                        'resolve' => [new ProductResolver(), 'resolve'],
                    ],

                    'clothingProducts' => [
                        'type' => Type::listOf(Types::product()),
                        'resolve' => [new ProductResolver(), 'resolveAllClothingProducts'],
                    ],

                    'techProducts' => [
                        'type' => Type::listOf(Types::product()),
                        'resolve' => [new ProductResolver(), 'resolveAllTechProducts'],
                    ],

                ],
            ]);

            $mutationType = new ObjectType([
                'name' => 'Mutation',
                'fields' => [
                    'createOrder' => [
                        'type' => Type::listOf(Types::order()),
                        'args' => [  
                            'orders' => [
                                'type' => Type::listOf(Type::nonNull(Types::orderInput())), 
                                'description' => 'List of orders to be created',
                            ],
                        ],
                        'resolve' => [new OrderResolver(), 'resolveOrder'],
                    ],
                ],
            ]);

            // See docs on schema options:
            // https://webonyx.github.io/graphql-php/schema-definition/#configuration-options
            $schema = new Schema(
                (new SchemaConfig())
                ->setQuery($queryType)
                ->setMutation($mutationType)
            );

            $rawInput = file_get_contents('php://input');
            if ($rawInput === false) {
                throw new RuntimeException('Failed to get php://input');
            }

            $input = json_decode($rawInput, true);
            $query = $input['query'];
            $variableValues = $input['variables'] ?? null;

            $rootValue = ['prefix' => 'You said: '];
            $result = GraphQLBase::executeQuery($schema, $query, $rootValue, null, $variableValues);
            $output = $result->toArray();
        } catch (Throwable $e) {
            $output = [
                'error' => [
                    'message' => $e->getMessage(),
                ],
            ];
        }

        header('Content-Type: application/json; charset=UTF-8');
        return json_encode($output);
    }
}
