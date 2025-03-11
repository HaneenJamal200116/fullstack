# Use an official PHP runtime as a parent image
FROM php:8.2-apache

# Install necessary extensions
RUN docker-php-ext-install mysqli pdo pdo_mysql

# Copy application files to the container
COPY . /var/www/html/

# Set permissions
RUN chown -R www-data:www-data /var/www/html

# Expose port 80 for Apache
EXPOSE 80

# Start Apache server
CMD ["apache2-foreground"]
