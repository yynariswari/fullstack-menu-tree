package services

import (
	"fullstack-menu-tree/backend/models"
	"fullstack-menu-tree/backend/repositories"
	"fullstack-menu-tree/backend/validators"
)

func GetAllMenus() ([]models.Menu, error) {

	return repositories.GetAllMenus()
}

func GetMenuByID(id uint) (*models.Menu, error) {

	return repositories.GetMenuByID(id)
}

func CreateMenu(req validators.CreateMenuRequest) (*models.Menu, error) {

	menu := models.Menu{
		Name:      req.Name,
		ParentID:  req.ParentID,
		Depth:     0,
		SortOrder: 0,
	}

	err := repositories.CreateMenu(&menu)

	if err != nil {
		return nil, err
	}

	return &menu, nil
}

func UpdateMenu(
	id uint,
	req validators.UpdateMenuRequest,
) (*models.Menu, error) {

	menu, err := repositories.GetMenuByID(id)

	if err != nil {
		return nil, err
	}

	menu.Name = req.Name
	menu.ParentID = req.ParentID

	err = repositories.UpdateMenu(menu)

	if err != nil {
		return nil, err
	}

	return menu, nil
}

func DeleteMenu(id uint) error {

	_, err := repositories.GetMenuByID(id)

	if err != nil {
		return err
	}

	return repositories.DeleteMenu(id)
}