from flask import render_template, current_app as app

import cpuinfo
import psutil
import platform
import datetime
import os


@app.route("/")
def index():    
    user = os.environ.get("APP_USERNAME", "")    
    return render_template("index.html", username=user)

@app.route("/info")
def info():
    osinfo = {}
    osinfo["plat"] = platform
    osinfo["cpu"] = cpuinfo.get_cpu_info()
    osinfo["mem"] = psutil.virtual_memory()
    osinfo["net"] = psutil.net_if_addrs()
    osinfo["boottime"] = datetime.datetime.fromtimestamp(psutil.boot_time()).strftime(
        "%Y-%m-%d %H:%M:%S"
    )

    return render_template("info.html", info=osinfo)

@app.route("/monitor")
def monitor():
    return render_template("monitor.html")
