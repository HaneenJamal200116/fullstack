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
-- Table structure for table `items`
--

DROP TABLE IF EXISTS `items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `items` (
  `attribute_id` varchar(255) NOT NULL,
  `product_id` varchar(255) NOT NULL,
  `id` varchar(255) NOT NULL,
  `display_value` varchar(255) DEFAULT NULL,
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
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-02-22 22:15:15
