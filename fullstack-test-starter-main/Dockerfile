# Use the official PHP image with Apache
FROM php:8.2-apache

# Enable required PHP extensions
RUN docker-php-ext-install pdo pdo_mysql mysqli

# Set the working directory to Apache's root
WORKDIR /var/www/html

# Copy only the public folder to Apache's root directory
COPY public/ /var/www/html/

# Copy the rest of the application (if needed for routing or other logic)
#COPY fullstack-test-starter-main /var/www/html/app

# Enable .htaccess if required for routing
RUN a2enmod rewrite

# Restart Apache in the foreground
CMD ["apache2-foreground"]
