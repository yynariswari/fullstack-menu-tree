package repositories

import (
	"fullstack-menu-tree/backend/config"
	"fullstack-menu-tree/backend/models"
)

func GetAllMenus() ([]models.Menu, error) {

	var menus []models.Menu

	err := config.DB.
		Order("sort_order ASC").
		Find(&menus).Error

	return menus, err
}

func GetMenuByID(id uint) (*models.Menu, error) {

	var menu models.Menu

	err := config.DB.
		First(&menu, id).Error

	if err != nil {
		return nil, err
	}

	return &menu, nil
}

func CreateMenu(menu *models.Menu) error {

	return config.DB.Create(menu).Error
}

func UpdateMenu(menu *models.Menu) error {

	return config.DB.Save(menu).Error
}

func DeleteMenu(id uint) error {

	return config.DB.Delete(&models.Menu{}, id).Error
}