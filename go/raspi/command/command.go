package command

import (
	"fmt"
	"os/exec"
	"strconv"
	"strings"
)

func Hostname() (hostname string) {
	out, err := exec.Command("hostname").Output()
	if err != nil {
		fmt.Println(err)
	}
	hostname = strings.TrimSpace(string(out))

	return
}

func Cpu() (cpu int) {
	var tmp string

	out, err := exec.Command("sh", "-c", "vmstat -n | tail -n 1 | awk -F ' ' '{print $(NF-2)}'").Output()
	if err != nil {
		fmt.Println(err)
	}
	tmp = strings.TrimSpace(string(out))
	cpu, _ = strconv.Atoi(tmp)

	return
}

func Ram() (ram int) {
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

func Ping() (ping float64) {
	var tmp string

	out, err := exec.Command("sh", "-c", "ping -c 1 1.1.1.1 -i 1 -W 1 -s 56 | grep -w 'time=.*' -o | sed -e 's/time=//g' | sed -e 's/ ms//g'").Output()
	if err != nil {
		fmt.Println(err)
	}
	tmp = strings.TrimSpace(string(out))
	ping, _ = strconv.ParseFloat(tmp, 64)

	return
}
