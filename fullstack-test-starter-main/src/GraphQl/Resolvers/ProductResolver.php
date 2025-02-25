<?php

namespace App\GraphQL\Resolvers;

use App\Models\Product;
use App\Models\ClothingProduct;
use App\Models\TechProduct;

class ProductResolver
{
    public function resolve($root, $args)
    {
        $productModel = new Product("");
        return $productModel->getProductById($args['id']);
    }

    public function resolveAll()
    {
        $productModel = new Product("");
        return $productModel->getAllProducts();
    }

    public function resolveAllTechProducts()
    {
        $productModel = new TechProduct("");
        return $productModel->getAllProducts();
    }

    public function resolveAllClothingProducts()
    {
        $productModel = new ClothingProduct("");
        return $productModel->getAllProducts();
    }

    public function resolveGallery($root, $args): array
    {
        $productId = $root['id'];
        $product = new Product("");

        $galleryData = [];

        $galleryItems = $product->getGalleryByProductId($productId);
        foreach ($galleryItems as $galleryItem) {
            $galleryData[] = [
                'imageUrl' => $galleryItem['image_url'],
            ];
        }

        return $galleryData;
    }

    public function resolvePrice($root)
    {
        $product = new Product("");
        $prices = $product->getPricesByProductId($root['id']);

        return $product->getPricesByProductId($root['id']);
    }

    public function resolveCurrency($root)
    {

        $priceId = $root['id'];
        $product = new Product("");

        return $product->getCurByPriceId($priceId);
    }
}
