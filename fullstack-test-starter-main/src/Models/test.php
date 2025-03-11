<?php

require_once __DIR__ . '/../../vendor/autoload.php';

use App\Models\TechProduct;
use App\Models\Category;
use App\Models\Attribute;
use App\Models\Item;
// $price=new Product("");
// print_r($price->getPricesByProductId("apple-imac-2021"));

$item = new Item("");
//ps-5
//print_r($product->getAllProducts());
print_r($item->getItemByProductIdAttributeId("huarache-x-stussy-le", "Size"));
