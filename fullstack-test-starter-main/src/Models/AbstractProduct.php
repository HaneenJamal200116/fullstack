<?php

namespace App\Models;

use App\Database\Database;
use PDO;

abstract class AbstractProduct
{
    //attributes
    protected PDO $db;
    protected $tableName = 'products';
    protected string $id;
    protected string $name;
    protected bool $instock;
    protected string $description;
    protected string $category;
    protected string $brand;
    protected string $typename;
    //constructor
    public function __construct($db)
    {
        $this->db = (new Database())->getConnection();
    }
    //methods
    abstract public function getName();
    abstract public function getTypename();
    abstract public function getId();
    abstract public function getInstock();
    abstract public function getDescription();
    abstract public function getCategory();
    abstract public function getBrand();
    abstract public function getAllProducts();


    public function getProductsCategoryId($category_id)
    {
        $stmt = $this->db->prepare("SELECT * FROM {$this->tableName} WHERE category_id = :category_id");
        $stmt->bindParam(':category_id', $category_id, PDO::PARAM_INT);
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function getProductById($id)
    {
        $stmt = $this->db->prepare("SELECT * FROM {$this->tableName} WHERE id = :id");
        $stmt->bindParam(':id', $id, PDO::PARAM_STR);
        $stmt->execute();
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    public function getGalleryByProductId($productId)
    {
        $stmt = $this->db->prepare("SELECT image_url FROM gallery WHERE product_id = :product_id");
        $stmt->bindParam(':product_id', $productId, PDO::PARAM_STR);
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function getPricesByProductId($productId)
    {
        $price = new Price("");
        return $price->getPriceByProductId($productId);
    }

    public function getCurByPriceId($priceId)
    {
        $price = new Price("");
        return $price->getCurrByPriceId($priceId);
    }
}
