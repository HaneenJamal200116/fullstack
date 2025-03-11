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
}
