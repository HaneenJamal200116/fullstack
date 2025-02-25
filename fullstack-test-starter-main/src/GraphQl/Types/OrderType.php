<?php

namespace App\GraphQL\Types;

use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;

class OrderType extends ObjectType
{
    public function __construct()
    {
        parent::__construct([
            'name' => 'Order',
            'fields' => [

                'productId' => [
                    'type' => Type::nonNull(Type::string()),
                ],
                'productName' => [
                    'type' => Type::nonNull(Type::string()),
                ],
                'quantity' => [
                    'type' => Type::nonNull(Type::int()),
                ],
                'price' => [
                    'type' => Type::nonNull(Type::float()),
                ],
            ],
        ]);
    }
}
