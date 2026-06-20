package routes

import (
	"fullstack-menu-tree/backend/controllers"

	"github.com/gin-gonic/gin"
)

func SetupMenuRoutes(router *gin.Engine) {

	menuGroup := router.Group("/api/menus")
	{
		menuGroup.GET("", controllers.GetAllMenus)
		menuGroup.GET("/:id", controllers.GetMenuByID)

		menuGroup.POST("", controllers.CreateMenu)

		
		menuGroup.PUT("/:id", controllers.UpdateMenu)
		 menuGroup.DELETE("/:id", controllers.DeleteMenu)
	}
}