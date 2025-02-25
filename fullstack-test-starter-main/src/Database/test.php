<?php

require_once __DIR__ . '/../../vendor/autoload.php';
use App\Database\Database;

$database = new Database();
$conn = $database->getConnection();

$query = "SELECT * FROM products ";
$result = $conn->query($query);

while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
    echo $row['name'] . '<br>';
}
