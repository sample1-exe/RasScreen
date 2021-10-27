package main

import (
	//"math/rand" rand.Intn(99)

	"fmt"
	"os/exec"
	"strconv"
	"strings"
	"time"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

type HostList struct {
	ID        uint `gorm:"primary_key"`
	CreatedAt time.Time
	UpdatedAt time.Time
	DeletedAt *time.Time
	HostName  string
}

type Monitor struct {
	ID        uint `gorm:"primary_key"`
	CreatedAt time.Time
	UpdatedAt time.Time
	DeletedAt *time.Time
	HostID    int
	Ping      float64
	CPU       int
	RAM       int
}

func main() {
	MyData()

	db := connection()
	var id int
	var Find = HostList{}
	db.Where("host_name = ?", Hostname()).First(&Find)
	id = int(Find.ID)

	db.AutoMigrate(&Monitor{})
	var data = Monitor{
		HostID: id,
		Ping:   ping(),
		CPU:    cpu(),
		RAM:    ram(),
	}
	db.Create(&data)
}

func Hostname() (hostname string) {
	out, err := exec.Command("hostname").Output()
	if err != nil {
		fmt.Println(err)
	}
	hostname = strings.TrimSpace(string(out))

	return
}

func MyData() {
	db := connection()
	//テーブルの生成（あるときはパス）
	//db.AutoMigrate(&testtablefinal{})
	db.AutoMigrate(&HostList{})
	var Find = HostList{}
	if err := db.Where("host_name = ?", Hostname()).First(&Find).Error; err != nil {
		var data = HostList{
			HostName: Hostname(),
		}
		db.Create(&data)
	}
}

func connection() *gorm.DB {
	dsn := "testuser1:P@ssw0rd@tcp(192.168.156.3:3306)/rassc?charset=utf8mb4&parseTime=True&loc=Local"
	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		//fmt.Println(err) //エラー発生時
		panic(err.Error())
	}

	return db
}

func cpu() (cpu int) {
	var tmp string

	out, err := exec.Command("sh", "-c", "vmstat -n | tail -n 1 | awk -F ' ' '{print $(NF-2)}'").Output()
	if err != nil {
		fmt.Println(err)
	}

	// 実行したコマンドの結果を出力
	tmp = strings.TrimSpace(string(out))
	cpu, _ = strconv.Atoi(tmp)

	return
}

func ram() (ram int) {
	var tmp string
	var ram_use int
	var ram_full int

	out, err := exec.Command("sh", "-c", "free -m | grep 'Mem' | awk -F ' ' '{print $3}'").Output()
	if err != nil {
		fmt.Println(err)
	}
	tmp = strings.TrimSpace(string(out))
	ram_use, _ = strconv.Atoi(tmp)

	out, err = exec.Command("sh", "-c", "free -m | grep 'Mem' | awk -F ' ' '{print $2}'").Output()
	if err != nil {
		fmt.Println(err)
	}
	tmp = strings.TrimSpace(string(out))
	ram_full, _ = strconv.Atoi(tmp)

	ram = 100 * ram_use / ram_full

	return
}

func ping() (ping float64) {
	var tmp string

	out, err := exec.Command("sh", "-c", "ping -c 1 1.1.1.1 -i 1 -W 1 -s 56 | grep -w 'time=.*' -o | sed -e 's/time=//g' | sed -e 's/ ms//g'").Output()
	if err != nil {
		fmt.Println(err)
	}
	//fmt.Printf("result: %s ms", string(out))
	tmp = strings.TrimSpace(string(out))
	ping, _ = strconv.ParseFloat(tmp, 64)

	return
}
