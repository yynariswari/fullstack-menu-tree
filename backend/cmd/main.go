package main

import (
	"fullstack-menu-tree/backend/config"
	"fullstack-menu-tree/backend/routes"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"

	swaggerFiles "github.com/swaggo/files"
	ginSwagger "github.com/swaggo/gin-swagger"

	_ "fullstack-menu-tree/backend/docs"
)

// @title Menu Tree API
// @version 1.0
// @description Fullstack Menu Tree Technical Test
// @host localhost:8080
// @BasePath /api
func main() {

	config.ConnectDatabase()

	router := gin.Default()

	// CORS
	router.Use(cors.New(cors.Config{
		AllowOrigins: []string{
			"http://localhost:5173",
		},
		AllowMethods: []string{
			"GET",
			"POST",
			"PUT",
			"DELETE",
			"OPTIONS",
		},
		AllowHeaders: []string{
			"Origin",
			"Content-Type",
			"Accept",
			"Authorization",
		},
	}))

	routes.SetupMenuRoutes(router)

	router.GET(
		"/swagger/*any",
		ginSwagger.WrapHandler(swaggerFiles.Handler),
	)

	router.Run(":8080")
}