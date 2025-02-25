<?php

namespace App\Models;

use App\Database\Database;
use PDO;
use App\Models\Product;

abstract class AbstractCategory
{
    //attributes
    protected PDO $db;
    protected $tableName = 'categories';
    protected string $name;
    protected string $typename;
    //constructor
    public function __construct($db)
    {
        $this->db = (new Database())->getConnection();
    }
    //methods
    abstract public function getName();
    abstract public function getTypename();
    abstract public function getAllCategories();

    public function getCategoryById($id)
    {
        $stmt = $this->db->prepare("SELECT * FROM {$this->tableName} WHERE id = :id");
        $stmt->bindParam(':id', $id, PDO::PARAM_INT);
        $stmt->execute();
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    public function getProductCategoryId($id)
    {
        $product = new Product("");
        return $product->getProductsCategoryId($id);
    }

    public function getProductCategoryId1()
    {
        $product = new Product("");
        return $product->getAllProducts();
    }
}
