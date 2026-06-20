package models

import "time"

type Menu struct {
	ID uint `gorm:"primaryKey" json:"id"`

	Name string `gorm:"type:varchar(255);not null" json:"name"`

	ParentID *uint `json:"parent_id"`

	Parent *Menu `gorm:"foreignKey:ParentID" json:"-"`

	//Children []Menu `gorm:"foreignKey:ParentID;-:migration" json:"children,omitempty"`
 Children []*Menu `gorm:"-" json:"children,omitempty"`

	Depth int `gorm:"default:0" json:"depth"`

	SortOrder int `gorm:"default:0" json:"sort_order"`

	CreatedAt time.Time `json:"created_at"`

	UpdatedAt time.Time `json:"updated_at"`
}