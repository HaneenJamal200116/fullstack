<?php

namespace App\GraphQL\Resolvers;

use App\Models\Order;

class OrderResolver
{
    public function resolveOrder($root, $args)
    {
   
        $orders = [];
        foreach ($args['orders'] as $orderData) {
            $attributes = isset($orderData['attributes']) ? $orderData['attributes'] : [];  

            $order = new Order(
                $orderData['productId'],
                $orderData['productName'],
                $orderData['quantity'],
                $orderData['price'],
                $orderData['attributes'] 
            );
            
            $order->createOrder();

            $orders[] = [
                'productId' => $order->getProductId(),
                'productName' => $order->getProductName(),
                'quantity' => $order->getQuantity(),
                'price' => $order->getPrice(),
                'attributes' => $order->getAttributes(),
            ];
        }
        return $orders;
    }
}
