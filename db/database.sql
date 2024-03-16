CREATE DATABASE  IF NOT EXISTS traboockdb;

USE traboockdb;

CREATE TABLE users (
  id INT PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255) UNIQUE,
  password VARCHAR(255),
  birth_date DATE,
  document_number VARCHAR(20),
  registration_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  registration_ip_address VARCHAR(15)
);

CREATE TABLE tour_packages (
  id INT PRIMARY KEY,
  name VARCHAR(255),
  description TEXT,
  destination VARCHAR(255),
  start_date DATE,
  end_date DATE,
  price DECIMAL(10, 2),
  PRIMARY KEY (id)
);

CREATE TABLE reservations (
  id INT PRIMARY KEY,
  user_id INT,
  package_id INT,
  reservation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  status VARCHAR(20), -- e.g., pending, confirmed, canceled
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (package_id) REFERENCES tour_packages(id)
);

CREATE TABLE comments_ratings (
  id INT PRIMARY KEY,
  user_id INT,
  package_id INT,
  comment TEXT,
  rating INT,
  date_posted TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (package_id) REFERENCES tour_packages(id)
);

CREATE TABLE image_gallery (
  id INT PRIMARY KEY,
  package_id INT,
  image_path VARCHAR(255),
  description TEXT,
  FOREIGN KEY (package_id) REFERENCES tour_packages(id)
);

CREATE TABLE tour_categories (
  id INT PRIMARY KEY,
  name VARCHAR(255),
  description TEXT
);

CREATE TABLE destinations (
  id INT PRIMARY KEY,
  name VARCHAR(255),
  description TEXT,
  attractions TEXT
);

CREATE TABLE tour_package_categories (
  package_id INT,
  category_id INT,
  PRIMARY KEY (package_id, category_id),
  FOREIGN KEY (package_id) REFERENCES tour_packages(id),
  FOREIGN KEY (category_id) REFERENCES tour_categories(id)
);
