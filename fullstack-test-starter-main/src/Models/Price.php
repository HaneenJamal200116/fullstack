<?php

namespace App\Models;

use PDO;
use App\Database\Database;
use App\Models\Currency;

class Price
{
    protected PDO $db;
    public function __construct($db)
    {
        $this->db = (new Database())->getConnection();
    }

    public function getPriceByProductId($productId)
    {
        $stmt = $this->db->prepare("SELECT id, amount FROM prices WHERE product_id = :product_id");
        $stmt->bindParam(':product_id', $productId, PDO::PARAM_STR);
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function getCurrByPriceId($priceId)
    {
        $currency = new Currency("");
        return $currency->getCurrencyByPriceId($priceId);
    }
}
