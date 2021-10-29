package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	"os/exec"
	"strconv"
	"strings"

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
	var id int
	var host_id string

	db := connection()
	tmp := HostList{}
	db.Where("host_name = ?", Hostname()).First(&tmp)
	host_id = strconv.Itoa(int(tmp.ID))
	url := "/one/" + host_id

	Find := []Monitor{}
	db.Last(&tmp)
	id = int(tmp.ID)

	db.Where("id = ?", id).Find(&Find)
	fmt.Println(Find)
	http.HandleFunc(url, func(w http.ResponseWriter, r *http.Request) {
		json.NewEncoder(w).Encode(Find)
	})
	http.ListenAndServe(":8080", nil)
}

func connection() *gorm.DB {
	dsn := "testuser1:P@ssw0rd@tcp(127.0.0.1:3306)/rassc?charset=utf8mb4&parseTime=True&loc=Local"
	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		//fmt.Println(err) //エラー発生時
		fmt.Println("aaa")
		panic(err.Error())
	}

	return db
}

func Hostname() (hostname string) {
	out, err := exec.Command("hostname").Output()
	if err != nil {
		fmt.Println(err)
	}
	hostname = strings.TrimSpace(string(out))

	return
}
