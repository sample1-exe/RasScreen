package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	"os"
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
	db := connection()
	dbInit()
	tmp := HostList{}
	db.Where("host_name = ?", Hostname()).First(&tmp)
	host_id := strconv.Itoa(int(tmp.ID))
	fmt.Println(tmp)
	url_one := "/select/hoststatus/one/" + host_id
	Find_one := []Monitor{}
	tmp_last := Monitor{}
	db.Last(&tmp_last)
	id := int(tmp_last.ID)

	host := []HostList{}
	db.Find(&host)

	db.Where("id = ?", id).Find(&Find_one)

	url_some := "/select/hoststatus/some/" + host_id
	Find_some := []Monitor{}
	db.Order("id desc").Limit(5).Find(&Find_some)

	http.HandleFunc("/select/hostlist", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Headers", "*")
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
		json.NewEncoder(w).Encode(host)
	})
	http.HandleFunc(url_one, func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprint(w, "Hello")
		/*
			w.Header().Set("Access-Control-Allow-Headers", "*")
			w.Header().Set("Access-Control-Allow-Origin", "*")
			w.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
			json.NewEncoder(w).Encode(Find_one)*/
	})
	http.HandleFunc(url_some, func(w http.ResponseWriter, r *http.Request) {
		json.NewEncoder(w).Encode(Find_some)
	})
	http.ListenAndServe(":8080", nil)
}

func connection() *gorm.DB {
	dsn := "tmcit:tmcit1!@tcp(RasScreen_db:3306)/rasscreen?charset=utf8mb4&parseTime=True&loc=Local"
	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		fmt.Fprintln(os.Stderr, err)
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

func dbInit() {
	db := connection()
	db.AutoMigrate(
		&HostList{},
		&Monitor{},
	)

}
