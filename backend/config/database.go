package config

import (
	"fmt"
	"log"

	"fullstack-menu-tree/backend/models"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var DB *gorm.DB

func ConnectDatabase() {

	dsn := fmt.Sprintf(
		"host=%s user=%s password=%s dbname=%s port=%s sslmode=disable",
		"localhost",
		"postgres",
		"admin123",
		"menu_db",
		"5432",
	)

	database, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})

	if err != nil {
		log.Fatal("Failed to connect database")
	}

	DB = database

	DB.AutoMigrate(&models.Menu{})

	log.Println("Database connected successfully")
}