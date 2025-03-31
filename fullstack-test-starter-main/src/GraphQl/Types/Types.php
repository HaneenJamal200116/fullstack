<?php

namespace App\GraphQL\Types;

use GraphQL\Type\Definition\InputObjectType;
use GraphQL\Type\Definition\ObjectType;

class Types
{
    private static $category;
    private static $product;
    private static $attribute;
    private static $item;
    private static $gallery;
    private static $price;
    private static $currency;
    private static $order;
    private static $orderInput;

    public static function category(): ObjectType
    {
        return self::$category ?: (self::$category = new CategoryType());
    }

    public static function product(): ObjectType
    {
        return self::$product ?: (self::$product = new ProductType());
    }

    public static function attribute(): ObjectType
    {
        return self::$attribute ?: (self::$attribute = new AttributeType());
    }

    public static function item(): ObjectType
    {
        return self::$item ?: (self::$item = new ItemType());
    }

    public static function gallery(): ObjectType
    {
        return self::$gallery ?: (self::$gallery = new GalleryType());
    }

    public static function price(): ObjectType
    {
        return self::$price ?: (self::$price = new PriceType());
    }

    public static function currency(): ObjectType
    {
        return self::$currency ?: (self::$currency = new CurrencyType());
    }

    public static function order(): ObjectType
    {
        return self::$order ?: (self::$order = new OrderType());
    }

    public static function orderInput(): InputObjectType
    {
        return self::$orderInput ?: (self::$orderInput = new OrderInputType()); 
    }
    
}
