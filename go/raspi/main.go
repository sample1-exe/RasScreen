package main

import (
	"time"

	"RasScreen/command"
	connection "RasScreen/db"

	"gorm.io/gorm"
)

type HostList struct {
	gorm.Model
	HostName string
}

type Monitor struct {
	ID        uint `gorm:"primaryKey"`
	CreatedAt time.Time
	UpdatedAt time.Time
	DeletedAt gorm.DeletedAt
	HostID    int
	Ping      float64
	CPU       int
	RAM       int
}

func main() {
	First_registration()

	db := connection.Connection()
	var id int
	var Find = HostList{}
	db.Where("host_name = ?", command.Hostname()).First(&Find)
	id = int(Find.ID)

	db.AutoMigrate(&Monitor{})
	for range time.Tick(3 * time.Second) {
		var data = Monitor{
			HostID: id,
			Ping:   command.Ping(),
			CPU:    command.Cpu(),
			RAM:    command.Ram(),
		}
		db.Create(&data)
	}
}

func First_registration() {
	db := connection.Connection()
	//テーブルの生成（あるときはパス）
	db.AutoMigrate(&HostList{})
	var Find = HostList{}
	if err := db.Where("host_name = ?", command.Hostname()).First(&Find).Error; err != nil {
		var data = HostList{
			HostName: command.Hostname(),
		}
		db.Create(&data)
	}
}
