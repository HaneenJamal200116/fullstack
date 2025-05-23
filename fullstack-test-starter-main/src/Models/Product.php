<?php

namespace App\Models;

use App\Models\AbstractProduct;
use App\Models\Price;
use App\Models\Attribute;
use PDO;

class Product extends AbstractProduct
{
    public function getName()
    {
        return $this->name;
    }
    public function getTypename()
    {
        return $this->typename;
    }
    public function getId()
    {
        return $this->id;
    }
    public function getInstock()
    {
        return $this->instock;
    }
    public function getDescription()
    {
        return $this->description;
    }
    public function getCategory()
    {
        return $this->category;
    }
    public function getBrand()
    {
        return $this->brand;
    }
    public function getPrice()
    {
        return $this->price;
    }

    public function getAllProducts()
    {
        $stmt = $this->db->query("SELECT * FROM {$this->tableName}");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}
