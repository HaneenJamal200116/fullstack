<?php

namespace App\GraphQL\Resolvers;

use App\Models\Attribute;
use App\Models\SwatchAttribute;
use App\Models\TextAttribute;

class AttributeResolver
{
    public function resolveAttribute($root)
    {
        $attribute = new Attribute("");
        return $attribute->getAttributeByProductId($root['id']);
    }

    public function resolveSwatchAttribute($root)
    {
        $attribute = new SwatchAttribute("");
        return $attribute->getAttributeByProductId($root['id']);
    }

    public function resolveTextAttribute($root)
    {
        $attribute = new TextAttribute("");
        return $attribute->getAttributeByProductId($root['id']);
    }

    public function resolveItem($root)
    {
        $product_id = $root['product_id'];
        $attribute_id = $root['id'];

        $attr = new Attribute("");
        return $attr->getItemByProductAttributeId($product_id, $attribute_id);
    }
}
