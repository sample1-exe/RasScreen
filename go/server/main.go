package main

import (
	"fmt"
	"net/http"

	"github.com/labstack/echo"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

type HostList struct {
	gorm.Model
	HostName string
}

type Monitor struct {
	gorm.Model
	HostID int
	Ping   float64
	CPU    int
	RAM    int
}

func main() {
	e := echo.New()
	e.GET("/select/hostlist", hostlist)
	e.GET("/select/hoststatus/one/:id", one)
	e.GET("/select/hoststatus/some/:id", some)

	e.Logger.Fatal(e.Start(":8080"))
}

func hostlist(c echo.Context) error {
	db := Connection()
	hostlist := []HostList{}
	db.Find(&hostlist)

	return c.JSON(http.StatusOK, hostlist)
}

func one(c echo.Context) error {
	id := c.Param("id")
	db := Connection()
	one := []Monitor{}
	db.Where("id = ?", id).Find(&one)

	return c.JSON(http.StatusOK, one)
}

func some(c echo.Context) error {
	id := c.Param("id")
	db := Connection()
	some := []Monitor{}
	db.Where("host_id = ?", id).Order("id desc").Limit(5).Find(&some)

	return c.JSON(http.StatusOK, some)
}

func Connection() *gorm.DB {
	dsn := "user:P@ssw0rd@tcp(10.0.0.5:3306)/rasscreen?charset=utf8mb4&parseTime=True&loc=Local"
	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		fmt.Println(err) //エラー発生時
	}

	return db
}
