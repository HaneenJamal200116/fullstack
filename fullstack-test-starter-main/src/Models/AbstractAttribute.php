<?php

namespace App\Models;

use App\Database\Database;
use PDO;
use App\Models\Item;

abstract class AbstractAttribute
{
    //attributes
    protected string $id;
    protected string $name;
    protected string $type;
    protected string $typename;
    protected PDO $db;
    protected $tableName = 'attributes';
    //constructor
    public function __construct($db)
    {
        $this->db = (new Database())->getConnection();
    }
    //methods
    abstract public function getName();
    abstract public function getTypename();
    abstract public function getId();
    abstract public function getType();

    public function getItemByProductAttributeId($product_id, $attribute_id)
    {
        $item = new Item("");
        return $item->getItemByProductIdAttributeId($product_id, $attribute_id);
    }
}
