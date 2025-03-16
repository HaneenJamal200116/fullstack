<?php

namespace App\Models;

use PDO;
use App\Database\Database;

class Item
{
    protected PDO $db;
    public function __construct($db)
    {
        $this->db = (new Database())->getConnection();
    }

    public function getItemByProductIdAttributeId($product_id, $attribute_id)
    {
        $stmt = $this->db->prepare("SELECT * FROM items WHERE 
        Product_id = :Product_id AND Attribute_id = :Attribute_id ORDER BY FIELD(value, '512G', '1T', '#44FF03', '#03FFF7')");
        $stmt->bindParam(':Product_id', $product_id, PDO::PARAM_STR);
        $stmt->bindParam(':Attribute_id', $attribute_id, PDO::PARAM_STR);
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}
