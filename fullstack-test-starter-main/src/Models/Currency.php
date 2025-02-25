<?php

namespace App\Models;

use PDO;
use App\Database\Database;

class Currency
{
    protected PDO $db;
    public function __construct($db)
    {
        $this->db = (new Database())->getConnection();
    }

    public function getCurrencyByPriceId($priceId)
    {
        $stmt = $this->db->prepare("SELECT symbol,label  FROM currency WHERE price_id = :price_id");
        $stmt->bindParam(':price_id', $priceId, PDO::PARAM_STR);
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}
