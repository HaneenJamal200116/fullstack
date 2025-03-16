<?php

namespace App\Database;

use PDO;

class Database
{
    private $host = '127.0.0.1:3306';
    private $db_name = 'u509122456_data';
    private $username = 'u509122456_root';
    private $password = 'pT2@ik0Z8MW';
    private $conn;
    public function getConnection()
    {
        $this->conn = null;
        try {
            $this->conn = new PDO(
                "mysql:host=" . $this->host . ";dbname=" . $this->db_name,
                $this->username,
                $this->password
            );
            $this->conn->exec("set names utf8");
        } catch (PDOException $exception) {
            echo "Connection error: " . $exception->getMessage();
        }
        return $this->conn;
    }
}
