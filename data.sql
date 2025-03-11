CREATE DATABASE  IF NOT EXISTS `data` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `data`;
-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: localhost    Database: data
-- ------------------------------------------------------
-- Server version	5.6.26-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `attributes`
--

DROP TABLE IF EXISTS `attributes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `attributes` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `__typename` varchar(255) DEFAULT 'AttributeSet',
  `product_id` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`,`product_id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `attributes_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `attributes`
--

LOCK TABLES `attributes` WRITE;
/*!40000 ALTER TABLE `attributes` DISABLE KEYS */;
INSERT INTO `attributes` VALUES ('Capacity','Capacity','text','AttributeSet','apple-imac-2021'),('Capacity','Capacity','text','AttributeSet','apple-iphone-12-pro'),('Capacity','Capacity','text','AttributeSet','ps-5'),('Capacity','Capacity','text','AttributeSet','xbox-series-s'),('Color','Color','swatch','AttributeSet','apple-iphone-12-pro'),('Color','Color','swatch','AttributeSet','ps-5'),('Color','Color','swatch','AttributeSet','xbox-series-s'),('Size','Size','text','AttributeSet','huarache-x-stussy-le'),('Size','Size','text','AttributeSet','jacket-canada-goosee'),('Touch ID in keyboard','Touch ID in keyboard','text','AttributeSet','apple-imac-2021'),('With USB 3 ports','With USB 3 ports','text','AttributeSet','apple-imac-2021');
/*!40000 ALTER TABLE `attributes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `__typename` varchar(255) DEFAULT 'Category',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'all','Category'),(2,'clothes','Category'),(3,'tech','Category');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `currency`
--

DROP TABLE IF EXISTS `currency`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `currency` (
  `label` varchar(255) DEFAULT NULL,
  `symbol` varchar(255) DEFAULT NULL,
  `__typename` varchar(255) DEFAULT 'Currency',
  `price_id` int(11) DEFAULT NULL,
  KEY `price_id` (`price_id`),
  CONSTRAINT `currency_ibfk_1` FOREIGN KEY (`price_id`) REFERENCES `prices` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `currency`
--

LOCK TABLES `currency` WRITE;
/*!40000 ALTER TABLE `currency` DISABLE KEYS */;
INSERT INTO `currency` VALUES ('USD','$','Currency',1),('USD','$','Currency',2),('USD','$','Currency',3),('USD','$','Currency',4),('USD','$','Currency',5),('USD','$','Currency',6),('USD','$','Currency',7),('USD','$','Currency',8);
/*!40000 ALTER TABLE `currency` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gallery`
--

DROP TABLE IF EXISTS `gallery`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gallery` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `image_url` longtext,
  `product_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `gallery_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gallery`
--

LOCK TABLES `gallery` WRITE;
/*!40000 ALTER TABLE `gallery` DISABLE KEYS */;
INSERT INTO `gallery` VALUES (1,'https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_2_720x.jpg?v=1612816087','huarache-x-stussy-le'),(2,'https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_1_720x.jpg?v=1612816087','huarache-x-stussy-le'),(3,'https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_3_720x.jpg?v=1612816087','huarache-x-stussy-le'),(4,'https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_5_720x.jpg?v=1612816087','huarache-x-stussy-le'),(5,'https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_4_720x.jpg?v=1612816087','huarache-x-stussy-le'),(6,'https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016105/product-image/2409L_61.jpg','jacket-canada-goosee'),(7,'https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016107/product-image/2409L_61_a.jpg','jacket-canada-goosee'),(8,'https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016108/product-image/2409L_61_b.jpg','jacket-canada-goosee'),(9,'https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016109/product-image/2409L_61_c.jpg','jacket-canada-goosee'),(10,'https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016110/product-image/2409L_61_d.jpg','jacket-canada-goosee'),(11,'https://images.canadagoose.com/image/upload/w_1333,c_scale,f_auto,q_auto:best/v1634058169/product-image/2409L_61_o.png','jacket-canada-goosee'),(12,'https://images.canadagoose.com/image/upload/w_1333,c_scale,f_auto,q_auto:best/v1634058159/product-image/2409L_61_p.png','jacket-canada-goosee'),(13,'https://images-na.ssl-images-amazon.com/images/I/510VSJ9mWDL._SL1262_.jpg','ps-5'),(14,'https://images-na.ssl-images-amazon.com/images/I/610%2B69ZsKCL._SL1500_.jpg','ps-5'),(15,'https://images-na.ssl-images-amazon.com/images/I/51iPoFwQT3L._SL1230_.jpg','ps-5'),(16,'https://images-na.ssl-images-amazon.com/images/I/61qbqFcvoNL._SL1500_.jpg','ps-5'),(17,'https://images-na.ssl-images-amazon.com/images/I/51HCjA3rqYL._SL1230_.jpg','ps-5'),(18,'https://images-na.ssl-images-amazon.com/images/I/71vPCX0bS-L._SL1500_.jpg','xbox-series-s'),(19,'https://images-na.ssl-images-amazon.com/images/I/71q7JTbRTpL._SL1500_.jpg','xbox-series-s'),(20,'https://images-na.ssl-images-amazon.com/images/I/71iQ4HGHtsL._SL1500_.jpg','xbox-series-s'),(21,'https://images-na.ssl-images-amazon.com/images/I/61IYrCrBzxL._SL1500_.jpg','xbox-series-s'),(22,'https://images-na.ssl-images-amazon.com/images/I/61RnXmpAmIL._SL1500_.jpg','xbox-series-s'),(23,'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac-24-blue-selection-hero-202104?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1617492405000','apple-imac-2021'),(24,'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-family-hero?wid=940&amp;hei=1112&amp;fmt=jpeg&amp;qlt=80&amp;.v=1604021663000','apple-iphone-12-pro'),(25,'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWP22?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1591634795000','apple-airpods-pro'),(27,'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airtag-double-select-202104?wid=445&hei=370&fmt=jpeg&qlt=95&.v=1617761672000','apple-airtag');
/*!40000 ALTER TABLE `gallery` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `items`
--

DROP TABLE IF EXISTS `items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `items` (
  `attribute_id` varchar(255) NOT NULL,
  `product_id` varchar(255) NOT NULL,
  `id` varchar(255) NOT NULL,
  `displayValue` varchar(255) DEFAULT NULL,
  `value` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`attribute_id`,`product_id`,`id`),
  CONSTRAINT `items_ibfk_1` FOREIGN KEY (`attribute_id`, `product_id`) REFERENCES `attributes` (`id`, `product_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `items`
--

LOCK TABLES `items` WRITE;
/*!40000 ALTER TABLE `items` DISABLE KEYS */;
INSERT INTO `items` VALUES ('Capacity','apple-imac-2021','256GB','256GB','256GB'),('Capacity','apple-imac-2021','512GB','512GB','512GB'),('Capacity','apple-iphone-12-pro','1T','1T','1T'),('Capacity','apple-iphone-12-pro','512G','512G','512G'),('Capacity','ps-5','1T','1T','1T'),('Capacity','ps-5','512G','512G','512G'),('Capacity','xbox-series-s','1T','1T','1T'),('Capacity','xbox-series-s','512G','512G','512G'),('Color','apple-iphone-12-pro','Black','Black','#000000'),('Color','apple-iphone-12-pro','Blue','Blue','#030BFF'),('Color','apple-iphone-12-pro','Cyan','Cyan','#03FFF7'),('Color','apple-iphone-12-pro','Green','Green','#44FF03'),('Color','apple-iphone-12-pro','White','White','#FFFFFF'),('Color','ps-5','Black','Black','#000000'),('Color','ps-5','Blue','Blue','#030BFF'),('Color','ps-5','Cyan','Cyan','#03FFF7'),('Color','ps-5','Green','Green','#44FF03'),('Color','ps-5','White','White','#FFFFFF'),('Color','xbox-series-s','Black','Black','#000000'),('Color','xbox-series-s','Blue','Blue','#030BFF'),('Color','xbox-series-s','Cyan','Cyan','#03FFF7'),('Color','xbox-series-s','Green','Green','#44FF03'),('Color','xbox-series-s','White','White','#FFFFFF'),('Size','huarache-x-stussy-le','40','40','40'),('Size','huarache-x-stussy-le','41','41','41'),('Size','huarache-x-stussy-le','42','42','42'),('Size','huarache-x-stussy-le','43','43','43'),('Size','jacket-canada-goosee','Extra Large','Extra Large','XL'),('Size','jacket-canada-goosee','Large','Large','L'),('Size','jacket-canada-goosee','Medium','Medium','M'),('Size','jacket-canada-goosee','Small','Small','S'),('Touch ID in keyboard','apple-imac-2021','No','No','No'),('Touch ID in keyboard','apple-imac-2021','Yes','Yes','Yes'),('With USB 3 ports','apple-imac-2021','No','No','No'),('With USB 3 ports','apple-imac-2021','Yes','Yes','Yes');
/*!40000 ALTER TABLE `items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `product_id` varchar(255) NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `quantity` int(11) NOT NULL,
  `product_price` decimal(10,2) NOT NULL,
  `attributes` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `prices`
--

DROP TABLE IF EXISTS `prices`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `prices` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `amount` decimal(10,2) DEFAULT NULL,
  `__typename` varchar(255) DEFAULT 'Price',
  `product_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `prices_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `prices`
--

LOCK TABLES `prices` WRITE;
/*!40000 ALTER TABLE `prices` DISABLE KEYS */;
INSERT INTO `prices` VALUES (1,144.69,'Price','huarache-x-stussy-le'),(2,518.47,'Price','jacket-canada-goosee'),(3,844.02,'Price','ps-5'),(4,333.99,'Price','xbox-series-s'),(5,1688.03,'Price','apple-imac-2021'),(6,1000.76,'Price','apple-iphone-12-pro'),(7,300.23,'Price','apple-airpods-pro'),(8,120.57,'Price','apple-airtag');
/*!40000 ALTER TABLE `prices` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `instock` tinyint(1) DEFAULT NULL,
  `description` longtext,
  `category` varchar(255) DEFAULT NULL,
  `brand` varchar(255) DEFAULT NULL,
  `__typename` varchar(255) DEFAULT 'Product',
  `category_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `category_id` (`category_id`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES ('apple-airpods-pro','AirPods Pro',0,'\n<h3>Magic like you’ve never heard</h3>\n<p>AirPods Pro have been designed to deliver Active Noise Cancellation for immersive sound, Transparency mode so you can hear your surroundings, and a customizable fit for all-day comfort. Just like AirPods, AirPods Pro connect magically to your iPhone or Apple Watch. And they’re ready to use right out of the case.\n\n<h3>Active Noise Cancellation</h3>\n<p>Incredibly light noise-cancelling headphones, AirPods Pro block out your environment so you can focus on what you’re listening to. AirPods Pro use two microphones, an outward-facing microphone and an inward-facing microphone, to create superior noise cancellation. By continuously adapting to the geometry of your ear and the fit of the ear tips, Active Noise Cancellation silences the world to keep you fully tuned in to your music, podcasts, and calls.\n\n<h3>Transparency mode</h3>\n<p>Switch to Transparency mode and AirPods Pro let the outside sound in, allowing you to hear and connect to your surroundings. Outward- and inward-facing microphones enable AirPods Pro to undo the sound-isolating effect of the silicone tips so things sound and feel natural, like when you’re talking to people around you.</p>\n\n<h3>All-new design</h3>\n<p>AirPods Pro offer a more customizable fit with three sizes of flexible silicone tips to choose from. With an internal taper, they conform to the shape of your ear, securing your AirPods Pro in place and creating an exceptional seal for superior noise cancellation.</p>\n\n<h3>Amazing audio quality</h3>\n<p>A custom-built high-excursion, low-distortion driver delivers powerful bass. A superefficient high dynamic range amplifier produces pure, incredibly clear sound while also extending battery life. And Adaptive EQ automatically tunes music to suit the shape of your ear for a rich, consistent listening experience.</p>\n\n<h3>Even more magical</h3>\n<p>The Apple-designed H1 chip delivers incredibly low audio latency. A force sensor on the stem makes it easy to control music and calls and switch between Active Noise Cancellation and Transparency mode. Announce Messages with Siri gives you the option to have Siri read your messages through your AirPods. And with Audio Sharing, you and a friend can share the same audio stream on two sets of AirPods - so you can play a game, watch a movie, or listen to a song together.</p>\n','tech','Apple','Product',3),('apple-airtag','AirTag',1,'\n<h1>Lose your knack for losing things.</h1>\n<p>AirTag is an easy way to keep track of your stuff. Attach one to your keys, slip another one in your backpack. And just like that, they’re on your radar in the Find My app. AirTag has your back.</p>\n','tech','Apple','Product',3),('apple-imac-2021','iMac 2021',1,'The new iMac!','tech','Apple','Product',3),('apple-iphone-12-pro','iPhone 12 Pro',1,'This is iPhone 12. Nothing else to say.','tech','Apple','Product',3),('huarache-x-stussy-le','Nike Air Huarache Le',1,'<p>Great sneakers for everyday use!</p>','clothes','Nike x Stussy','Product',2),('jacket-canada-goosee','Jacket',1,'<p>Awesome winter jacket</p>','clothes','Canada Goose','Product',2),('ps-5','PlayStation 5',1,'<p>A good gaming console. Plays games of PS4! Enjoy if you can buy it mwahahahaha</p>','tech','Sony','Product',3),('xbox-series-s','Xbox Series S 512GB',0,'\n<div>\n    <ul>\n        <li><span>Hardware-beschleunigtes Raytracing macht dein Spiel noch realistischer</span></li>\n        <li><span>Spiele Games mit bis zu 120 Bilder pro Sekunde</span></li>\n        <li><span>Minimiere Ladezeiten mit einer speziell entwickelten 512GB NVMe SSD und wechsle mit Quick Resume nahtlos zwischen mehreren Spielen.</span></li>\n        <li><span>Xbox Smart Delivery stellt sicher, dass du die beste Version deines Spiels spielst, egal, auf welcher Konsole du spielst</span></li>\n        <li><span>Spiele deine Xbox One-Spiele auf deiner Xbox Series S weiter. Deine Fortschritte, Erfolge und Freundesliste werden automatisch auf das neue System übertragen.</span></li>\n        <li><span>Erwecke deine Spiele und Filme mit innovativem 3D Raumklang zum Leben</span></li>\n        <li><span>Der brandneue Xbox Wireless Controller zeichnet sich durch höchste Präzision, eine neue Share-Taste und verbesserte Ergonomie aus</span></li>\n        <li><span>Ultra-niedrige Latenz verbessert die Reaktionszeit von Controller zum Fernseher</span></li>\n        <li><span>Verwende dein Xbox One-Gaming-Zubehör -einschließlich Controller, Headsets und mehr</span></li>\n        <li><span>Erweitere deinen Speicher mit der Seagate 1 TB-Erweiterungskarte für Xbox Series X (separat erhältlich) und streame 4K-Videos von Disney+, Netflix, Amazon, Microsoft Movies &amp; TV und mehr</span></li>\n    </ul>\n</div>','tech','Microsoft','Product',3);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-03-11 21:15:07
