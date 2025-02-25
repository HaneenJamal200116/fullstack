<?php

namespace App\Models;

use App\Models\AbstractCategory;
use PDO;

class Category extends AbstractCategory
{
    public function getName()
    {
        return $this->name;
    }

    public function getTypename()
    {
        return $this->typename;
    }

    public function getAllCategories()
    {
        $stmt = $this->db->query("SELECT * FROM {$this->tableName}");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}
