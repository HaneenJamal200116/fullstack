<?php

namespace App\Models;

use App\Models\AbstractAttribute;
use PDO;

class Attribute extends AbstractAttribute
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
    public function getType()
    {
        return $this->type;
    }

    public function getAttributeByProductId($productId)
    {
        $stmt = $this->db->prepare("SELECT * FROM  {$this->tableName} WHERE product_id = :product_id");
        $stmt->bindParam(':product_id', $productId, PDO::PARAM_STR);
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}
