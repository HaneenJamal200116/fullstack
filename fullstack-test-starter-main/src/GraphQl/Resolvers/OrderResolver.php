<?php

namespace App\GraphQL\Resolvers;

use App\Models\Order;

class OrderResolver
{
    public function resolveOrder($root, $args)
    {

        $order = new Order(
            $args['productId'],
            $args['productName'],
            $args['quantity'],
            $args['price'],
            $args['attributes'],
        );

        $order->createOrder();

        return [
            'productId' => $order->getProductId(),
            'productName' => $order->getProductName(),
            'quantity' => $order->getQuantity(),
            'price' => $order->getPrice(),
            'attributes' => $order->getAttributes(),
        ];
    }
}
