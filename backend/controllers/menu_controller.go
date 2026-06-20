package controllers

import (
	"net/http"
	"strconv"

	//"fullstack-menu-tree/backend/models"
	"fullstack-menu-tree/backend/services"
	"fullstack-menu-tree/backend/validators"

	"github.com/gin-gonic/gin"
)

// GetAllMenus godoc
// @Summary Get all menus
// @Description Get menu tree hierarchy
// @Tags Menus
// @Produce json
// @Success 200 {array} models.Menu
// @Failure 500 {object} map[string]string
// @Router /menus [get]
func GetAllMenus(c *gin.Context) {

	menus, err := services.GetMenuTree()

	if err != nil {

		c.JSON(http.StatusInternalServerError, gin.H{
			"message": "Failed to get menus",
		})

		return
	}

	c.JSON(http.StatusOK, menus)
}

// GetMenuByID godoc
// @Summary Get menu by ID
// @Description Get single menu by ID
// @Tags Menus
// @Produce json
// @Param id path int true "Menu ID"
// @Success 200 {object} models.Menu
// @Failure 400 {object} map[string]string
// @Failure 404 {object} map[string]string
// @Router /menus/{id} [get]
func GetMenuByID(c *gin.Context) {

	idParam := c.Param("id")

	id, err := strconv.Atoi(idParam)

	if err != nil {

		c.JSON(http.StatusBadRequest, gin.H{
			"message": "Invalid ID",
		})

		return
	}

	menu, err := services.GetMenuByID(uint(id))

	if err != nil {

		c.JSON(http.StatusNotFound, gin.H{
			"message": "Menu not found",
		})

		return
	}

	c.JSON(http.StatusOK, menu)
}

// CreateMenu godoc
// @Summary Create menu
// @Description Create a new menu
// @Tags Menus
// @Accept json
// @Produce json
// @Param menu body validators.CreateMenuRequest true "Menu Data"
// @Success 201 {object} models.Menu
// @Failure 400 {object} map[string]string
// @Failure 500 {object} map[string]string
// @Router /menus [post]
func CreateMenu(c *gin.Context) {

	var req validators.CreateMenuRequest

	if err := c.ShouldBindJSON(&req); err != nil {

		c.JSON(http.StatusBadRequest, gin.H{
			"message": "Invalid request",
		})

		return
	}

	menu, err := services.CreateMenu(req)

	if err != nil {

		c.JSON(http.StatusInternalServerError, gin.H{
			"message": "Failed to create menu",
		})

		return
	}

	c.JSON(http.StatusCreated, menu)
}

// UpdateMenu godoc
// @Summary Update menu
// @Description Update menu by ID
// @Tags Menus
// @Accept json
// @Produce json
// @Param id path int true "Menu ID"
// @Param menu body validators.UpdateMenuRequest true "Menu Data"
// @Success 200 {object} models.Menu
// @Failure 400 {object} map[string]string
// @Failure 404 {object} map[string]string
// @Router /menus/{id} [put]
func UpdateMenu(c *gin.Context) {

	idParam := c.Param("id")

	id, err := strconv.Atoi(idParam)

	if err != nil {

		c.JSON(http.StatusBadRequest, gin.H{
			"message": "Invalid ID",
		})

		return
	}

	var req validators.UpdateMenuRequest

	if err := c.ShouldBindJSON(&req); err != nil {

		c.JSON(http.StatusBadRequest, gin.H{
			"message": "Invalid request",
		})

		return
	}

	menu, err := services.UpdateMenu(uint(id), req)

	if err != nil {

		c.JSON(http.StatusNotFound, gin.H{
			"message": "Menu not found",
		})

		return
	}

	c.JSON(http.StatusOK, menu)
}

// DeleteMenu godoc
// @Summary Delete menu
// @Description Delete menu by ID
// @Tags Menus
// @Produce json
// @Param id path int true "Menu ID"
// @Success 200 {object} map[string]string
// @Failure 400 {object} map[string]string
// @Failure 404 {object} map[string]string
// @Router /menus/{id} [delete]
func DeleteMenu(c *gin.Context) {

	idParam := c.Param("id")

	id, err := strconv.Atoi(idParam)

	if err != nil {

		c.JSON(http.StatusBadRequest, gin.H{
			"message": "Invalid ID",
		})

		return
	}

	err = services.DeleteMenu(uint(id))

	if err != nil {

		c.JSON(http.StatusNotFound, gin.H{
			"message": "Menu not found",
		})

		return
	}

	c.JSON(http.StatusOK, gin.H{
		"message": "Menu deleted successfully",
	})
}