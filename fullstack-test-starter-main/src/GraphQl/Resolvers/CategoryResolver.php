<?php

namespace App\GraphQL\Resolvers;

use App\Models\Category;

class CategoryResolver
{
    public function resolve($root, $args)
    {
        $categoryModel = new Category("");
        return $categoryModel->getCategoryById($args['id']);
    }

    public function resolveAll()
    {
        $categoryModel = new Category("");
        return $categoryModel->getAllCategories();
    }

    // public function resolveProduct($root)
    // {
    //     $categoryModel = new Category("");
    //     $categoryId = $root['id']; // Category ID from the query root

    //     // Check if the category_id is 1, and fetch all products in that case
    //     if ($categoryId == 1) {
    //         return $categoryModel->getProductCategoryId(); // Or some other method to get all products
    //     } else {
    //         return $categoryModel->getProductCategoryId($categoryId); // Fetch products for the specific category
    //     }
    // }
}
