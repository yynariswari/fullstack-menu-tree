package services

import (
	"fullstack-menu-tree/backend/models"
	"fullstack-menu-tree/backend/repositories"

)

func BuildMenuTree(menus []models.Menu) []*models.Menu {

	menuMap := make(map[uint]*models.Menu)

	for i := range menus {
		menus[i].Children = []*models.Menu{}
		menuMap[menus[i].ID] = &menus[i]
	}

	var roots []*models.Menu

	for i := range menus {

		menu := &menus[i]

		if menu.ParentID == nil {

			roots = append(roots, menu)
			continue
		}

		if parent, exists := menuMap[*menu.ParentID]; exists {

			parent.Children = append(parent.Children, menu)
		}
	}

	return roots
}

func GetMenuTree() ([]*models.Menu, error) {

	menus, err := repositories.GetAllMenus()

	if err != nil {
		return nil, err
	}

	tree := BuildMenuTree(menus)



	return tree, nil
}