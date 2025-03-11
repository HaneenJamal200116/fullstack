<?php

namespace App\Models;

use PDO;
use App\Database\Database;

class Order
{
    protected PDO $db;
    private string $productId;
    private string $productName;
    private int $quantity;
    private float $price;
    private string $attributes;

    public function __construct(string $productId, string $productName, int $quantity, float $price, string $attributes)
    {
        $this->db = (new Database())->getConnection();
        $this->productId = $productId;
        $this->productName = $productName;
        $this->quantity = $quantity;
        $this->price = $price;
        $this->attributes = $attributes;
    }

    public function getProductId(): string
    {
        return $this->productId;
    }

    public function getProductName(): string
    {
        return $this->productName;
    }

    public function getQuantity(): int
    {
        return $this->quantity;
    }

    public function getPrice(): float
    {
        return $this->price;
    }

    public function getAttributes(): string
    {
        return $this->attributes;
    }

    public function createOrder()
    {
        try {
            $stmt = $this->db->prepare("INSERT INTO orders (product_id, product_name, quantity, 
            product_price,attributes) VALUES (:product_id, :product_name, :quantity, :price,:attributes)");

            $stmt->bindParam(':product_id', $this->productId);
            $stmt->bindParam(':product_name', $this->productName);
            $stmt->bindParam(':quantity', $this->quantity);
            $stmt->bindParam(':price', $this->price);
            $stmt->bindParam(':attributes', $this->attributes);

            if (!$stmt->execute()) {
                throw new \Exception("Database error: " . implode(", ", $stmt->errorInfo()));
            }
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        } catch (\PDOException $e) {
            error_log("Database error: " . $e->getMessage());
            throw new \Exception("Failed to create order");
        }
    }
}
