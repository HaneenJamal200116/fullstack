<?php

namespace App\GraphQL\Types;

use GraphQL\Type\Definition\InputObjectType;
use GraphQL\Type\Definition\Type;

class OrderInputType extends InputObjectType
{
    public function __construct()
    {
        parent::__construct([
            'name' => 'OrderInput',
            'fields' => [
                'productId' => [
                    'type' => Type::nonNull(Type::string())
                ],
                'productName' => [
                    'type' => Type::nonNull(Type::string())
                ],
                'quantity' => [
                    'type' => Type::nonNull(Type::int())
                ],
                'price' => [
                    'type' => Type::nonNull(Type::float())
                ],
                'attributes' => [
                    'type' => Type::string()
                ],
            ],
        ]);
    }
}
