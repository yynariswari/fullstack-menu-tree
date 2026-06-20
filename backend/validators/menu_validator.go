package validators

type CreateMenuRequest struct {
	Name string `json:"name" binding:"required"`

	ParentID *uint `json:"parent_id"`
}

type UpdateMenuRequest struct {
	Name     string `json:"name" binding:"required"`
	ParentID *uint  `json:"parent_id"`
}