[
    {
        "id": "dd8a1142.d816c",
        "type": "tab",
        "label": "IQRF_Request",
        "disabled": false,
        "info": ""
    },
    {
        "id": "7fb68445.dc619c",
        "type": "tab",
        "label": "IQRF_Response",
        "disabled": false,
        "info": ""
    },
    {
        "id": "23980423.5c63cc",
        "type": "tab",
        "label": "IQRF_Visualization",
        "disabled": false,
        "info": ""
    },
    {
        "id": "8ceac1f5.ddc84",
        "type": "tab",
        "label": "Operation mode"
    },
    {
        "id": "27cf39fd.b45a06",
        "type": "tab",
        "label": "BME280_Visualization",
        "disabled": false,
        "info": ""
    },
    {
        "id": "8a845cf4.ea641",
        "type": "tab",
        "label": "IQRF_Fan",
        "disabled": false,
        "info": ""
    },
    {
        "id": "ae8a1f56.99e2c",
        "type": "mqtt-broker",
        "z": "",
        "broker": "127.0.0.1",
        "port": "1883",
        "clientid": "",
        "usetls": false,
        "compatmode": true,
        "keepalive": "60",
        "cleansession": true,
        "willTopic": "",
        "willQos": "0",
        "willPayload": "",
        "birthTopic": "",
        "birthQos": "0",
        "birthPayload": ""
    },
    {
        "id": "b914875d.7e25a8",
        "type": "ui_tab",
        "z": "",
        "name": "IQRF",
        "icon": "dashboard"
    },
    {
        "id": "85c384f6.fb88b8",
        "type": "ui_group",
        "z": "",
        "name": "Temperature Node",
        "tab": "b914875d.7e25a8",
        "order": 2,
        "disp": true,
        "width": "6"
    },
    {
        "id": "59628c40.1378a4",
        "type": "ui_group",
        "z": "",
        "name": "Light",
        "tab": "b914875d.7e25a8",
        "order": 4,
        "disp": true,
        "width": "6"
    },
    {
        "id": "54264262.49504c",
        "type": "ui_group",
        "z": "",
        "name": "Potentiometr",
        "tab": "b914875d.7e25a8",
        "order": 3,
        "disp": true,
        "width": "6"
    },
    {
        "id": "50a41c14.41fd24",
        "type": "ui_base",
        "theme": {
            "name": "theme-dark",
            "lightTheme": {
                "default": "#0094CE",
                "baseColor": "#0579cc",
                "baseFont": "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif",
                "edited": true,
                "reset": false
            },
            "darkTheme": {
                "default": "#097479",
                "baseColor": "#0579cc",
                "baseFont": "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif",
                "edited": true,
                "reset": false
            },
            "customTheme": {
                "name": "Untitled Theme 1",
                "default": "#4B7930",
                "baseColor": "#4B7930",
                "baseFont": "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif"
            },
            "themeState": {
                "base-color": {
                    "default": "#097479",
                    "value": "#0579cc",
                    "edited": true
                },
                "page-titlebar-backgroundColor": {
                    "value": "#0579cc",
                    "edited": false
                },
                "page-backgroundColor": {
                    "value": "#111111",
                    "edited": false
                },
                "page-sidebar-backgroundColor": {
                    "value": "#ffffff",
                    "edited": false
                },
                "group-textColor": {
                    "value": "#24a0fa",
                    "edited": false
                },
                "group-borderColor": {
                    "value": "#555555",
                    "edited": false
                },
                "group-backgroundColor": {
                    "value": "#333333",
                    "edited": false
                },
                "widget-textColor": {
                    "value": "#eeeeee",
                    "edited": false
                },
                "widget-backgroundColor": {
                    "value": "#0579cc",
                    "edited": false
                },
                "widget-borderColor": {
                    "value": "#333333",
                    "edited": false
                },
                "base-font": {
                    "value": "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif"
                }
            }
        },
        "site": {
            "name": "Node-RED Dashboard",
            "hideToolbar": "false",
            "allowSwipe": "true",
            "dateFormat": "DD. MM. YYYY",
            "sizes": {
                "sx": 48,
                "sy": 48,
                "gx": 6,
                "gy": 6,
                "cx": 6,
                "cy": 6,
                "px": 0,
                "py": 0
            }
        }
    },
    {
        "id": "58282760.fabe68",
        "type": "ui_group",
        "z": "",
        "name": "Temperature SE",
        "tab": "b914875d.7e25a8",
        "order": 1,
        "disp": true,
        "width": "6"
    },
    {
        "id": "77f045b1.1ae3f4",
        "type": "ui_group",
        "z": "",
        "name": "BME280  Temperature",
        "tab": "bca5063b.71b748",
        "order": 1,
        "disp": true,
        "width": "6",
        "collapse": false
    },
    {
        "id": "71917c62.b9dc6c",
        "type": "ui_group",
        "z": "",
        "name": "BME280 Humidity",
        "tab": "bca5063b.71b748",
        "order": 2,
        "disp": true,
        "width": "6",
        "collapse": false
    },
    {
        "id": "9397be2b.d02808",
        "type": "ui_group",
        "z": "",
        "name": "BME280 Pressure",
        "tab": "bca5063b.71b748",
        "order": 3,
        "disp": true,
        "width": "6",
        "collapse": false
    },
    {
        "id": "bca5063b.71b748",
        "type": "ui_tab",
        "z": "",
        "name": "BME280",
        "icon": "dashboard",
        "order": 2
    },
    {
        "id": "ba7f6b6e.66f4a8",
        "type": "ui_group",
        "z": "",
        "name": "Fan speed",
        "tab": "b914875d.7e25a8",
        "order": 5,
        "disp": true,
        "width": "6",
        "collapse": false
    },
    {
        "id": "d9a8a6be.9d04b8",
        "type": "mqtt out",
        "z": "dd8a1142.d816c",
        "name": "Gateway Request",
        "topic": "Iqrf/DpaRequest",
        "qos": "",
        "retain": "",
        "broker": "ae8a1f56.99e2c",
        "x": 810,
        "y": 180,
        "wires": []
    },
    {
        "id": "96ef7d13.38a4b",
        "type": "inject",
        "z": "8ceac1f5.ddc84",
        "name": "Servisní mod",
        "topic": "",
        "payload": "{\"ctype\": \"conf\", \"type\": \"mode\", \"cmd\": \"service\"}",
        "payloadType": "str",
        "repeat": "",
        "crontab": "",
        "once": false,
        "x": 390,
        "y": 220,
        "wires": [
            [
                "94a65dd0.eedcb"
            ]
        ]
    },
    {
        "id": "46e7ca9a.329b94",
        "type": "inject",
        "z": "8ceac1f5.ddc84",
        "name": "Standartní mod",
        "topic": "",
        "payload": "{\"ctype\": \"conf\", \"type\": \"mode\", \"cmd\": \"operational\"}",
        "payloadType": "str",
        "repeat": "",
        "crontab": "",
        "once": false,
        "x": 380,
        "y": 260,
        "wires": [
            [
                "94a65dd0.eedcb"
            ]
        ]
    },
    {
        "id": "521b17c1.a752c8",
        "type": "mqtt out",
        "z": "8ceac1f5.ddc84",
        "name": "Gateway Request",
        "topic": "Iqrf/DpaRequest",
        "qos": "",
        "retain": "",
        "broker": "ae8a1f56.99e2c",
        "x": 750,
        "y": 220,
        "wires": []
    },
    {
        "id": "e9a59ebb.dadf6",
        "type": "debug",
        "z": "8ceac1f5.ddc84",
        "name": "",
        "active": false,
        "console": "false",
        "complete": "true",
        "x": 710,
        "y": 280,
        "wires": []
    },
    {
        "id": "fdf01737.24c668",
        "type": "mqtt in",
        "z": "8ceac1f5.ddc84",
        "name": "Gateway Response",
        "topic": "Iqrf/DpaResponse",
        "qos": "2",
        "broker": "ae8a1f56.99e2c",
        "x": 370,
        "y": 400,
        "wires": [
            [
                "17cdb9ef.3199f6",
                "fdbeaa10.6cb9d8"
            ]
        ]
    },
    {
        "id": "17cdb9ef.3199f6",
        "type": "json",
        "z": "8ceac1f5.ddc84",
        "name": "",
        "x": 570,
        "y": 400,
        "wires": [
            [
                "b0b00ca5.91d7a"
            ]
        ]
    },
    {
        "id": "b0b00ca5.91d7a",
        "type": "debug",
        "z": "8ceac1f5.ddc84",
        "name": "",
        "active": false,
        "console": "false",
        "complete": "false",
        "x": 750,
        "y": 400,
        "wires": []
    },
    {
        "id": "94a65dd0.eedcb",
        "type": "json",
        "z": "8ceac1f5.ddc84",
        "name": "",
        "property": "payload",
        "action": "",
        "pretty": false,
        "x": 570,
        "y": 260,
        "wires": [
            [
                "e9a59ebb.dadf6",
                "521b17c1.a752c8"
            ]
        ]
    },
    {
        "id": "fdbeaa10.6cb9d8",
        "type": "debug",
        "z": "8ceac1f5.ddc84",
        "name": "",
        "active": false,
        "console": "false",
        "complete": "false",
        "x": 590,
        "y": 440,
        "wires": []
    },
    {
        "id": "440e26a5.bd39e8",
        "type": "inject",
        "z": "8ceac1f5.ddc84",
        "name": "forward",
        "topic": "",
        "payload": "{\"ctype\": \"conf\", \"type\": \"mode\", \"cmd\": \"forwarding\"}",
        "payloadType": "str",
        "repeat": "",
        "crontab": "",
        "once": false,
        "x": 410,
        "y": 300,
        "wires": [
            [
                "94a65dd0.eedcb"
            ]
        ]
    },
    {
        "id": "89613caf.96b19",
        "type": "function",
        "z": "dd8a1142.d816c",
        "name": "Req sensor std",
        "func": "var data={\n    type: \"raw\",\n    request: {\n        nadr: \"0x0001\",\n        pnum: \"0x5E\",\n        pcmd: \"0x01\",\n        hwpid: \"0xFFFF\",\n        pdata: \"0xFFFFFFFF\",\n    },\n    timeout: 1000\n}\nmsg.payload=data;\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 420,
        "y": 180,
        "wires": [
            [
                "fc03850c.ab92e8"
            ]
        ]
    },
    {
        "id": "efff2047.7efa2",
        "type": "inject",
        "z": "dd8a1142.d816c",
        "name": "Senzor Kit 5s",
        "topic": "",
        "payload": "1",
        "payloadType": "num",
        "repeat": "5",
        "crontab": "",
        "once": true,
        "onceDelay": "",
        "x": 220,
        "y": 180,
        "wires": [
            [
                "89613caf.96b19"
            ]
        ]
    },
    {
        "id": "fc03850c.ab92e8",
        "type": "function",
        "z": "dd8a1142.d816c",
        "name": "JSONtoIQRF",
        "func": "out = ('000'+Number(msg.payload.request.nadr).toString(16)).slice(-2);\nout += \".\"+(('000'+Number(msg.payload.request.nadr).toString(16)).slice(-4)).substr(0,2);\nout += \".\"+('0'+Number(msg.payload.request.pnum).toString(16)).slice(-2);\nout += \".\"+('0'+Number(msg.payload.request.pcmd).toString(16)).slice(-2);\nout += \".\"+('000'+Number(msg.payload.request.hwpid).toString(16)).slice(-2);\nout += \".\"+(('000'+Number(msg.payload.request.hwpid).toString(16)).slice(-4)).substr(0,2);\n\n\nif (typeof msg.payload.request.pdata !== 'undefined' && msg.payload.request.pdata !== null) {\n    len = msg.payload.request.pdata.length; \n    count = -len;\n    for(i=len;i>2;i=i-2) {\n        count = count + 2;\n        out += \".\"+(('000'+Number(msg.payload.request.pdata).toString(16)).slice(count)).substr(0,2);\n    }\n}\n\nmsg.payload = {\n    ctype:\"dpa\",\n    type: msg.payload.type,\n    request: out, timeout:\n    msg.payload.timeout\n};\nreturn msg;\n",
        "outputs": 1,
        "noerr": 0,
        "x": 610,
        "y": 180,
        "wires": [
            [
                "420a80d.4cb158",
                "d9a8a6be.9d04b8"
            ]
        ]
    },
    {
        "id": "420a80d.4cb158",
        "type": "debug",
        "z": "dd8a1142.d816c",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "x": 790,
        "y": 140,
        "wires": []
    },
    {
        "id": "5c9af930.e7a6e8",
        "type": "mqtt in",
        "z": "7fb68445.dc619c",
        "name": "Gateway Response",
        "topic": "Iqrf/DpaResponse",
        "qos": "2",
        "broker": "ae8a1f56.99e2c",
        "x": 170,
        "y": 200,
        "wires": [
            [
                "4060c38e.b07d0c"
            ]
        ]
    },
    {
        "id": "b0424b2c.fafd98",
        "type": "mqtt out",
        "z": "7fb68445.dc619c",
        "name": "Status",
        "topic": "Iqrf/DpaResponse",
        "qos": "",
        "retain": "",
        "broker": "ae8a1f56.99e2c",
        "x": 910,
        "y": 1480,
        "wires": []
    },
    {
        "id": "4060c38e.b07d0c",
        "type": "json",
        "z": "7fb68445.dc619c",
        "name": "",
        "x": 350,
        "y": 200,
        "wires": [
            [
                "fa1cc6c0.359b28",
                "c10fcb5e.fcd878"
            ]
        ]
    },
    {
        "id": "ed0c364f.d54fe8",
        "type": "function",
        "z": "7fb68445.dc619c",
        "name": "Get Temp",
        "func": "var res=msg.payload.response.pdata.split(\".\");\n\nparstemp1 =  parseInt(res[5],16);   //ff\nparstemp2 =  parseInt(res[4],16);   //d0\n\ntemp1 = parstemp1;\ntemp2 = parstemp2;\n\ntemp1 &= 0x7F;\ntemp2 &= 0xF0;\n\ntemp = (temp1<<4) + (temp2>>4);\n\ntemp2 =  parstemp2;\ntemp2 &= 0x0F;\n\ntemp2 *= 0.0625;\n\ntemp += temp2; \n\nif(((parstemp1 & 0x80)>>7) === 1) {\n    temp = 2048 - temp;\n    temp = -temp;\n}\nmsg.payload={\"KitTemp\":temp};\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 520,
        "y": 320,
        "wires": [
            [
                "c3035d57.15ce9"
            ]
        ]
    },
    {
        "id": "723d6e5a.40c",
        "type": "function",
        "z": "7fb68445.dc619c",
        "name": "Get Potenciometer",
        "func": "var res=msg.payload.response.pdata.split(\".\");\nmsg.payload={\n    \"KitPot\":parseInt(res[9],16)\n};\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 550,
        "y": 400,
        "wires": [
            [
                "c3035d57.15ce9"
            ]
        ]
    },
    {
        "id": "bc8ddf5b.1a55e",
        "type": "function",
        "z": "7fb68445.dc619c",
        "name": "Get Light",
        "func": "var res=msg.payload.response.pdata.split(\".\");\nmsg.payload={\n    \"KitLight\":parseInt(res[7],16)\n};\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 520,
        "y": 360,
        "wires": [
            [
                "c3035d57.15ce9"
            ]
        ]
    },
    {
        "id": "5a48c3e5.a63b2c",
        "type": "debug",
        "z": "7fb68445.dc619c",
        "name": "",
        "active": false,
        "console": "false",
        "complete": "false",
        "x": 930,
        "y": 1440,
        "wires": []
    },
    {
        "id": "745b07c9.3d9c68",
        "type": "inject",
        "z": "7fb68445.dc619c",
        "name": "",
        "topic": "",
        "payload": "Test",
        "payloadType": "str",
        "repeat": "",
        "crontab": "",
        "once": false,
        "x": 290,
        "y": 1580,
        "wires": [
            [
                "86ce6f12.1963d"
            ]
        ]
    },
    {
        "id": "86ce6f12.1963d",
        "type": "function",
        "z": "7fb68445.dc619c",
        "name": "Req Tst",
        "func": "var data={\n    request: {\n        nadr:  \"0x0001\",\n        pnum:  \"0x20\",\n        pcmd:  \"0xB1\",\n        hwpid: \"0x001E\",\n        err:   \"0x00\",\n        dpa:   \"0x67\",\n        pdata1: Math.floor((Math.random() * 30) + 1),\n        pdata2: Math.floor((Math.random() * 255) + 1),\n        pdata3: Math.floor((Math.random() * 255) + 1)\n    },\n}\nmsg.payload=data.request;\nreturn msg;\n",
        "outputs": 1,
        "noerr": 0,
        "x": 420,
        "y": 1580,
        "wires": [
            [
                "3f15bdf.9a47342",
                "5a48c3e5.a63b2c"
            ]
        ]
    },
    {
        "id": "3f15bdf.9a47342",
        "type": "function",
        "z": "7fb68445.dc619c",
        "name": "JSONtoIQRF",
        "func": "out = ('000'+Number(msg.payload.nadr).toString(16)).slice(-2);\nout += \".\"+(('000'+Number(msg.payload.nadr).toString(16)).slice(-4)).substr(0,2);\nout += \".\"+('0'+Number(msg.payload.pnum).toString(16)).slice(-2);\nout += \".\"+('0'+Number(msg.payload.pcmd).toString(16)).slice(-2);\nout += \".\"+('000'+Number(msg.payload.hwpid).toString(16)).slice(-2);\nout += \".\"+(('000'+Number(msg.payload.hwpid).toString(16)).slice(-4)).substr(0,2);\n\nres = ('000'+Number(msg.payload.nadr).toString(16)).slice(-2);\nres += \".\"+(('000'+Number(msg.payload.nadr).toString(16)).slice(-4)).substr(0,2);\nres += \".\"+('0'+Number(msg.payload.pnum).toString(16)).slice(-2);\nres += \".\"+('0'+Number(msg.payload.pcmd).toString(16)).slice(-2);\nres += \".\"+('000'+Number(msg.payload.hwpid).toString(16)).slice(-2);\nres += \".\"+(('000'+Number(msg.payload.hwpid).toString(16)).slice(-4)).substr(0,2);\nres += \".\"+('0'+Number(msg.payload.err).toString(16)).slice(-2);\nres += \".\"+('0'+Number(msg.payload.dpa).toString(16)).slice(-2);\nres += \".\"+('0'+Number(msg.payload.pdata1).toString(16)).slice(-2);\nres += \".\"+('0'+Number(msg.payload.pdata2).toString(16)).slice(-2);\nres += \".\"+('0'+Number(msg.payload.pdata3).toString(16)).slice(-2);\n\n//res += ('00000'+Number(msg.payload.pdata).toString(16)).slice(-2)+\" \";\n//res += (('00000'+Number(msg.payload.pdata).toString(16)).slice(-4)).substr(0,2);\n//res += (('00000'+Number(msg.payload.pdata).toString(16)).slice(-4)).substr(0,2);\n\nmsg.payload= {ctype:\"dpa\", type: \"raw\", timeout: 0, request: out, response: res};\nreturn msg;\n",
        "outputs": 1,
        "noerr": 0,
        "x": 570,
        "y": 1480,
        "wires": [
            [
                "b0424b2c.fafd98",
                "5a48c3e5.a63b2c"
            ]
        ]
    },
    {
        "id": "daf0c340.420f",
        "type": "switch",
        "z": "7fb68445.dc619c",
        "name": "PNUM ?",
        "property": "payload.response.pnum",
        "propertyType": "msg",
        "rules": [
            {
                "t": "eq",
                "v": "94",
                "vt": "str"
            }
        ],
        "checkall": "true",
        "outputs": 1,
        "x": 340,
        "y": 360,
        "wires": [
            [
                "ed0c364f.d54fe8",
                "bc8ddf5b.1a55e",
                "723d6e5a.40c",
                "adbd7419.4c0278"
            ]
        ]
    },
    {
        "id": "fa1cc6c0.359b28",
        "type": "function",
        "z": "7fb68445.dc619c",
        "name": "IQRFtoJSON",
        "func": "var response=msg.payload.response.split(\".\");\nvar request=msg.payload.request.split(\".\");\n\nvar data={\n    type: \"\",\n    request: {\n        nadr: \"\",\n        pnum: \"\",\n        pcmd: \"\",\n        hwpid: \"\"\n    },\n    response: {\n        nadr: \"\",\n        pnum: \"\",\n        pcmd: \"\",\n        hwpid: \"\",\n        errn: \"\",\n        dpa: \"\",\n        pdata: \"\",\n    },\n    timeout: \"\",\n    result: \"\",\n    time: new Date()\n}\n\n\ndata.type = msg.payload.type;\n\ndata.request.nadr=parseInt(request[0], 16) + (parseInt(request[1], 16)*256);\ndata.request.pnum=parseInt(request[2], 16);\ndata.request.pcmd=parseInt(request[3], 16);\ndata.request.hwpid=parseInt(request[4], 16) + (parseInt(request[5], 16)*256);\n\ndata.response.nadr=parseInt(response[0], 16) + (parseInt(response[1], 16)*256);\ndata.response.pnum=parseInt(response[2], 16);\ndata.response.pcmd=parseInt(response[3], 16);\ndata.response.hwpid=parseInt(response[4], 16) + (parseInt(response[5], 16)*256);\ndata.response.errn=parseInt(response[6], 16);\ndata.response.dpa=parseInt(response[7], 16);\ndata.response.pdata=msg.payload.response.slice(24).trim();\ndata.timeout=msg.payload.timeout;\ndata.result=msg.payload.result;\nmsg.payload=data;\nreturn msg;\n",
        "outputs": 1,
        "noerr": 0,
        "x": 510,
        "y": 200,
        "wires": [
            [
                "840ee9c2.7cb7b8",
                "c103097f.c03eb8"
            ]
        ]
    },
    {
        "id": "840ee9c2.7cb7b8",
        "type": "debug",
        "z": "7fb68445.dc619c",
        "name": "parse",
        "active": false,
        "console": "false",
        "complete": "payload",
        "x": 670,
        "y": 160,
        "wires": []
    },
    {
        "id": "f0499fc5.ed2ec",
        "type": "switch",
        "z": "7fb68445.dc619c",
        "name": "ADR",
        "property": "payload.response.nadr",
        "propertyType": "msg",
        "rules": [
            {
                "t": "eq",
                "v": "1",
                "vt": "str"
            },
            {
                "t": "eq",
                "v": "3",
                "vt": "str"
            }
        ],
        "checkall": "true",
        "outputs": 2,
        "x": 190,
        "y": 360,
        "wires": [
            [
                "daf0c340.420f"
            ],
            []
        ]
    },
    {
        "id": "adbd7419.4c0278",
        "type": "function",
        "z": "7fb68445.dc619c",
        "name": "Get Temp",
        "func": "var res=msg.payload.response.pdata.split(\".\");\n\nparstemp1 = parseInt(res[2],16);   //ff\nparstemp2 = parseInt(res[1],16);   //d0\n\ntemp1 = parstemp1;\ntemp2 = parstemp2;\nif(temp1 == 0xFF && temp2 == 0xFF) {\n    temp = \"NaN\";\n    msg.payload={\"KitNodeTemp\":temp};\n    return msg;\n}\n\ntemp1 &= 0x7F;\ntemp2 &= 0xF0;\n\ntemp = (temp1<<4) + (temp2>>4);\n\ntemp2 =  parstemp2;\ntemp2 &= 0x0F;\n\ntemp2 *= 0.0625;\n\ntemp += temp2; \n\nif(((parstemp1 & 0x80)>>7) === 1) {\n    temp = 2048 - temp;\n    temp = -temp;\n}\nif(temp == -2048) {\n    temp = \"NaN\";\n}\nmsg.payload={\"KitNodeTemp\":temp};\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 520,
        "y": 280,
        "wires": [
            [
                "c3035d57.15ce9"
            ]
        ]
    },
    {
        "id": "c3035d57.15ce9",
        "type": "join",
        "z": "7fb68445.dc619c",
        "name": "",
        "mode": "custom",
        "build": "merged",
        "property": "payload",
        "propertyType": "msg",
        "key": "topic",
        "joiner": "\\n",
        "joinerType": "str",
        "accumulate": false,
        "timeout": "0.2",
        "count": "",
        "reduceRight": false,
        "reduceExp": "",
        "reduceInit": "",
        "reduceInitType": "",
        "reduceFixup": "",
        "x": 750,
        "y": 360,
        "wires": [
            [
                "8fab24fe.2a8b08",
                "e88b272c.669b78",
                "dc2526be.83dce8"
            ]
        ]
    },
    {
        "id": "8fab24fe.2a8b08",
        "type": "debug",
        "z": "7fb68445.dc619c",
        "name": "",
        "active": false,
        "console": "false",
        "complete": "true",
        "x": 930,
        "y": 400,
        "wires": []
    },
    {
        "id": "528a28be.a314d8",
        "type": "function",
        "z": "23980423.5c63cc",
        "name": "Get  S_KIT TempDS",
        "func": "msg.payload=msg.payload.KitTemp;\nif(msg.payload > -2000) {\n    msg.payload = Math.round(msg.payload * 10)/10;\n    return msg;\n}\nreturn;",
        "outputs": 1,
        "noerr": 0,
        "x": 430,
        "y": 300,
        "wires": [
            [
                "c4789422.bd9458",
                "9b853c64.18f16",
                "aa75502b.99b42"
            ]
        ]
    },
    {
        "id": "a17a7bcf.dcecf8",
        "type": "function",
        "z": "23980423.5c63cc",
        "name": "Get S_KIT Light",
        "func": "if (msg.payload.KitLight) {\n    msg.payload=8*(127-msg.payload.KitLight);\n   return msg;\n}\nreturn;",
        "outputs": 1,
        "noerr": 0,
        "x": 420,
        "y": 400,
        "wires": [
            [
                "fc87412c.d35ad",
                "502a012b.26438",
                "74c033c0.19a95c"
            ]
        ]
    },
    {
        "id": "292487a7.9e2728",
        "type": "function",
        "z": "23980423.5c63cc",
        "name": "Get S_KIT Pot",
        "func": "msg.payload=msg.payload.KitPot;\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 420,
        "y": 500,
        "wires": [
            [
                "db8ebd52.ae253",
                "d12dc87b.6d6ef8",
                "c0c6c64f.db12e8"
            ]
        ]
    },
    {
        "id": "c4789422.bd9458",
        "type": "debug",
        "z": "23980423.5c63cc",
        "name": "",
        "active": false,
        "console": "false",
        "complete": "true",
        "x": 830,
        "y": 300,
        "wires": []
    },
    {
        "id": "502a012b.26438",
        "type": "debug",
        "z": "23980423.5c63cc",
        "name": "",
        "active": false,
        "console": "false",
        "complete": "true",
        "x": 830,
        "y": 400,
        "wires": []
    },
    {
        "id": "d12dc87b.6d6ef8",
        "type": "debug",
        "z": "23980423.5c63cc",
        "name": "",
        "active": false,
        "console": "false",
        "complete": "payload",
        "x": 850,
        "y": 500,
        "wires": []
    },
    {
        "id": "3f99ad80.fede12",
        "type": "link in",
        "z": "23980423.5c63cc",
        "name": "IqrfGraf",
        "links": [
            "e88b272c.669b78"
        ],
        "x": 235,
        "y": 300,
        "wires": [
            [
                "528a28be.a314d8",
                "a17a7bcf.dcecf8",
                "292487a7.9e2728",
                "e88d0f8.6b6f0f",
                "3a82e93f.21a6e6"
            ]
        ]
    },
    {
        "id": "6258d979.3b78d8",
        "type": "debug",
        "z": "23980423.5c63cc",
        "name": "",
        "active": false,
        "console": "false",
        "complete": "payload",
        "x": 850,
        "y": 200,
        "wires": []
    },
    {
        "id": "3a82e93f.21a6e6",
        "type": "function",
        "z": "23980423.5c63cc",
        "name": "Get S_KIT TempNode",
        "func": "msg.payload=msg.payload.KitNodeTemp;\nif(msg.payload > -2000) {\n    msg.payload = Math.round(msg.payload * 10)/10;\n    return msg;\n}\nreturn;",
        "outputs": 1,
        "noerr": 0,
        "x": 440,
        "y": 200,
        "wires": [
            [
                "1f8e1111.6398af",
                "6258d979.3b78d8",
                "cb2c8644.8217f8"
            ]
        ]
    },
    {
        "id": "e88d0f8.6b6f0f",
        "type": "debug",
        "z": "23980423.5c63cc",
        "name": "Complete data",
        "active": false,
        "tosidebar": true,
        "console": false,
        "complete": "payload",
        "x": 420,
        "y": 100,
        "wires": []
    },
    {
        "id": "e88b272c.669b78",
        "type": "link out",
        "z": "7fb68445.dc619c",
        "name": "",
        "links": [
            "3f99ad80.fede12"
        ],
        "x": 895,
        "y": 360,
        "wires": []
    },
    {
        "id": "c10fcb5e.fcd878",
        "type": "debug",
        "z": "7fb68445.dc619c",
        "name": "raw",
        "active": false,
        "console": "false",
        "complete": "payload",
        "x": 490,
        "y": 160,
        "wires": []
    },
    {
        "id": "c103097f.c03eb8",
        "type": "link out",
        "z": "7fb68445.dc619c",
        "name": "",
        "links": [
            "a9e219b2.2a95d8"
        ],
        "x": 635,
        "y": 200,
        "wires": []
    },
    {
        "id": "a9e219b2.2a95d8",
        "type": "link in",
        "z": "7fb68445.dc619c",
        "name": "ToParse",
        "links": [
            "c103097f.c03eb8"
        ],
        "x": 95,
        "y": 360,
        "wires": [
            [
                "f0499fc5.ed2ec"
            ]
        ]
    },
    {
        "id": "dc2526be.83dce8",
        "type": "debug",
        "z": "7fb68445.dc619c",
        "name": "",
        "active": false,
        "console": "false",
        "complete": "false",
        "x": 950,
        "y": 320,
        "wires": []
    },
    {
        "id": "aa75502b.99b42",
        "type": "ui_gauge",
        "z": "23980423.5c63cc",
        "name": "Temperature_SE_KIT",
        "group": "58282760.fabe68",
        "order": 0,
        "width": "6",
        "height": "5",
        "gtype": "gage",
        "title": "",
        "label": "°C",
        "format": "{{value}}",
        "min": 0,
        "max": "100",
        "colors": [
            "#00b500",
            "#e6e600",
            "#ca3838"
        ],
        "seg1": "",
        "seg2": "",
        "x": 660,
        "y": 280,
        "wires": []
    },
    {
        "id": "db8ebd52.ae253",
        "type": "ui_gauge",
        "z": "23980423.5c63cc",
        "name": "Potentiometer",
        "group": "54264262.49504c",
        "order": 0,
        "width": 0,
        "height": 0,
        "gtype": "compass",
        "title": "",
        "label": "Volume",
        "format": "{{value}}",
        "min": 0,
        "max": "127",
        "colors": [
            "#00b500",
            "#e6e600",
            "#ca3838"
        ],
        "seg1": "",
        "seg2": "",
        "x": 640,
        "y": 480,
        "wires": []
    },
    {
        "id": "1f8e1111.6398af",
        "type": "ui_gauge",
        "z": "23980423.5c63cc",
        "name": "Temperature_node",
        "group": "85c384f6.fb88b8",
        "order": 0,
        "width": "6",
        "height": "5",
        "gtype": "gage",
        "title": "",
        "label": "°C",
        "format": "{{value}}",
        "min": 0,
        "max": "100",
        "colors": [
            "#00b500",
            "#e6e600",
            "#ca3838"
        ],
        "seg1": "",
        "seg2": "",
        "x": 650,
        "y": 180,
        "wires": []
    },
    {
        "id": "74c033c0.19a95c",
        "type": "ui_gauge",
        "z": "23980423.5c63cc",
        "name": "Light",
        "group": "59628c40.1378a4",
        "order": 1,
        "width": 0,
        "height": 0,
        "gtype": "donut",
        "title": "",
        "label": "lx",
        "format": "{{value}}",
        "min": 0,
        "max": "1000",
        "colors": [
            "#00b500",
            "#e6e600",
            "#ca3838"
        ],
        "seg1": "",
        "seg2": "",
        "x": 610,
        "y": 380,
        "wires": []
    },
    {
        "id": "9b853c64.18f16",
        "type": "ui_chart",
        "z": "23980423.5c63cc",
        "name": "Temperature_SE_KIT",
        "group": "58282760.fabe68",
        "order": 0,
        "width": 0,
        "height": 0,
        "label": "",
        "chartType": "line",
        "legend": "false",
        "xformat": "HH:mm:ss",
        "interpolate": "linear",
        "nodata": "Waiting for data",
        "dot": false,
        "ymin": "0",
        "ymax": "100",
        "removeOlder": "5",
        "removeOlderPoints": "",
        "removeOlderUnit": "60",
        "cutout": 0,
        "useOneColor": false,
        "colors": [
            "#1f77b4",
            "#aec7e8",
            "#ff7f0e",
            "#2ca02c",
            "#98df8a",
            "#d62728",
            "#ff9896",
            "#9467bd",
            "#c5b0d5"
        ],
        "x": 660,
        "y": 320,
        "wires": [
            [],
            []
        ]
    },
    {
        "id": "fc87412c.d35ad",
        "type": "ui_chart",
        "z": "23980423.5c63cc",
        "name": "Light",
        "group": "59628c40.1378a4",
        "order": 2,
        "width": 0,
        "height": 0,
        "label": "",
        "chartType": "line",
        "legend": "false",
        "xformat": "HH:mm:ss",
        "interpolate": "linear",
        "nodata": "Waiting for data",
        "dot": false,
        "ymin": "0",
        "ymax": "1000",
        "removeOlder": "5",
        "removeOlderPoints": "",
        "removeOlderUnit": "60",
        "cutout": 0,
        "useOneColor": false,
        "colors": [
            "#1f77b4",
            "#aec7e8",
            "#ff7f0e",
            "#2ca02c",
            "#98df8a",
            "#d62728",
            "#ff9896",
            "#9467bd",
            "#c5b0d5"
        ],
        "x": 610,
        "y": 420,
        "wires": [
            [],
            []
        ]
    },
    {
        "id": "cb2c8644.8217f8",
        "type": "ui_chart",
        "z": "23980423.5c63cc",
        "name": "Temperature_node",
        "group": "85c384f6.fb88b8",
        "order": 0,
        "width": 0,
        "height": 0,
        "label": "",
        "chartType": "line",
        "legend": "false",
        "xformat": "HH:mm:ss",
        "interpolate": "linear",
        "nodata": "Waiting for data",
        "dot": false,
        "ymin": "0",
        "ymax": "100",
        "removeOlder": "5",
        "removeOlderPoints": "",
        "removeOlderUnit": "60",
        "cutout": 0,
        "useOneColor": false,
        "colors": [
            "#1f77b4",
            "#aec7e8",
            "#ff7f0e",
            "#2ca02c",
            "#98df8a",
            "#d62728",
            "#ff9896",
            "#9467bd",
            "#c5b0d5"
        ],
        "useOldStyle": true,
        "x": 650,
        "y": 220,
        "wires": [
            [],
            []
        ]
    },
    {
        "id": "c0c6c64f.db12e8",
        "type": "ui_chart",
        "z": "23980423.5c63cc",
        "name": "Potenciometr",
        "group": "54264262.49504c",
        "order": 0,
        "width": 0,
        "height": 0,
        "label": "",
        "chartType": "line",
        "legend": "false",
        "xformat": "HH:mm:ss",
        "interpolate": "linear",
        "nodata": "Waiting for data",
        "dot": false,
        "ymin": "0",
        "ymax": "127",
        "removeOlder": "5",
        "removeOlderPoints": "",
        "removeOlderUnit": "60",
        "cutout": 0,
        "useOneColor": false,
        "colors": [
            "#1f77b4",
            "#aec7e8",
            "#ff7f0e",
            "#2ca02c",
            "#98df8a",
            "#d62728",
            "#ff9896",
            "#9467bd",
            "#c5b0d5"
        ],
        "x": 630,
        "y": 520,
        "wires": [
            [],
            []
        ]
    },
    {
        "id": "425a5dc1.eafaec",
        "type": "ui_gauge",
        "z": "27cf39fd.b45a06",
        "name": "",
        "group": "77f045b1.1ae3f4",
        "order": 0,
        "width": "6",
        "height": "5",
        "gtype": "gage",
        "title": "Temperature BME280",
        "label": "°C",
        "format": "{{value}}",
        "min": 0,
        "max": "100",
        "colors": [
            "#00b500",
            "#e6e600",
            "#ca3838"
        ],
        "seg1": "",
        "seg2": "",
        "x": 680,
        "y": 220,
        "wires": []
    },
    {
        "id": "85cf7aeb.51f4b",
        "type": "ui_chart",
        "z": "27cf39fd.b45a06",
        "name": "",
        "group": "77f045b1.1ae3f4",
        "order": 0,
        "width": 0,
        "height": 0,
        "label": "Temperature BME280",
        "chartType": "line",
        "legend": "false",
        "xformat": "HH:mm:ss",
        "interpolate": "linear",
        "nodata": "",
        "dot": false,
        "ymin": "",
        "ymax": "",
        "removeOlder": "5",
        "removeOlderPoints": "",
        "removeOlderUnit": "60",
        "cutout": 0,
        "useOneColor": false,
        "colors": [
            "#1f77b4",
            "#aec7e8",
            "#ff7f0e",
            "#2ca02c",
            "#98df8a",
            "#d62728",
            "#ff9896",
            "#9467bd",
            "#c5b0d5"
        ],
        "useOldStyle": false,
        "x": 680,
        "y": 260,
        "wires": [
            [],
            []
        ]
    },
    {
        "id": "64bc92a5.7b7c4c",
        "type": "mqtt in",
        "z": "27cf39fd.b45a06",
        "name": "Temperature BME280",
        "topic": "/sensors/bme280/0/temperature",
        "qos": "2",
        "broker": "ae8a1f56.99e2c",
        "x": 300,
        "y": 240,
        "wires": [
            [
                "425a5dc1.eafaec",
                "85cf7aeb.51f4b"
            ]
        ]
    },
    {
        "id": "53748c06.124f0c",
        "type": "ui_gauge",
        "z": "27cf39fd.b45a06",
        "name": "",
        "group": "71917c62.b9dc6c",
        "order": 0,
        "width": "6",
        "height": "5",
        "gtype": "gage",
        "title": "Humidity BME280",
        "label": "%",
        "format": "{{value}}",
        "min": 0,
        "max": "100",
        "colors": [
            "#00b500",
            "#e6e600",
            "#ca3838"
        ],
        "seg1": "",
        "seg2": "",
        "x": 670,
        "y": 320,
        "wires": []
    },
    {
        "id": "5f02cc85.b8ae0c",
        "type": "ui_chart",
        "z": "27cf39fd.b45a06",
        "name": "",
        "group": "71917c62.b9dc6c",
        "order": 0,
        "width": 0,
        "height": 0,
        "label": "Humidity BME280",
        "chartType": "line",
        "legend": "false",
        "xformat": "HH:mm:ss",
        "interpolate": "linear",
        "nodata": "",
        "dot": false,
        "ymin": "",
        "ymax": "",
        "removeOlder": "5",
        "removeOlderPoints": "",
        "removeOlderUnit": "60",
        "cutout": 0,
        "useOneColor": false,
        "colors": [
            "#1f77b4",
            "#aec7e8",
            "#ff7f0e",
            "#2ca02c",
            "#98df8a",
            "#d62728",
            "#ff9896",
            "#9467bd",
            "#c5b0d5"
        ],
        "useOldStyle": false,
        "x": 670,
        "y": 360,
        "wires": [
            [],
            []
        ]
    },
    {
        "id": "afa28c7.1a9a97",
        "type": "mqtt in",
        "z": "27cf39fd.b45a06",
        "name": "Humidity BME280",
        "topic": "/sensors/bme280/0/humidity",
        "qos": "2",
        "broker": "ae8a1f56.99e2c",
        "x": 320,
        "y": 340,
        "wires": [
            [
                "53748c06.124f0c",
                "5f02cc85.b8ae0c"
            ]
        ]
    },
    {
        "id": "6af3d432.cf60dc",
        "type": "ui_gauge",
        "z": "27cf39fd.b45a06",
        "name": "",
        "group": "9397be2b.d02808",
        "order": 0,
        "width": "6",
        "height": "5",
        "gtype": "gage",
        "title": "Pressure BME280",
        "label": "kPa",
        "format": "{{value}}",
        "min": "950",
        "max": "1050",
        "colors": [
            "#ca3838",
            "#00b500",
            "#ca3838"
        ],
        "seg1": "",
        "seg2": "",
        "x": 670,
        "y": 420,
        "wires": []
    },
    {
        "id": "bd869e52.2fa3e",
        "type": "ui_chart",
        "z": "27cf39fd.b45a06",
        "name": "",
        "group": "9397be2b.d02808",
        "order": 0,
        "width": 0,
        "height": 0,
        "label": "Pressure BME280",
        "chartType": "line",
        "legend": "false",
        "xformat": "HH:mm:ss",
        "interpolate": "linear",
        "nodata": "",
        "dot": false,
        "ymin": "",
        "ymax": "",
        "removeOlder": "5",
        "removeOlderPoints": "",
        "removeOlderUnit": "60",
        "cutout": 0,
        "useOneColor": false,
        "colors": [
            "#1f77b4",
            "#aec7e8",
            "#ff7f0e",
            "#2ca02c",
            "#98df8a",
            "#d62728",
            "#ff9896",
            "#9467bd",
            "#c5b0d5"
        ],
        "useOldStyle": false,
        "x": 670,
        "y": 460,
        "wires": [
            [],
            []
        ]
    },
    {
        "id": "bc0ed6b4.f84558",
        "type": "mqtt in",
        "z": "27cf39fd.b45a06",
        "name": "Pressure BME280",
        "topic": "/sensors/bme280/0/pressure",
        "qos": "2",
        "broker": "ae8a1f56.99e2c",
        "x": 310,
        "y": 440,
        "wires": [
            [
                "ef5bc2d8.598e8"
            ]
        ]
    },
    {
        "id": "ef5bc2d8.598e8",
        "type": "function",
        "z": "27cf39fd.b45a06",
        "name": "Fix pressure",
        "func": "msg.payload = parseFloat(msg.payload) + 50;\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 490,
        "y": 440,
        "wires": [
            [
                "6af3d432.cf60dc",
                "bd869e52.2fa3e"
            ]
        ]
    },
    {
        "id": "a9120dd6.c9d34",
        "type": "range",
        "z": "8a845cf4.ea641",
        "minin": "0",
        "maxin": "100",
        "minout": "0",
        "maxout": "128",
        "action": "scale",
        "round": false,
        "property": "payload",
        "name": "",
        "x": 690,
        "y": 120,
        "wires": [
            [
                "4d2011e9.f5da7"
            ]
        ]
    },
    {
        "id": "4d2011e9.f5da7",
        "type": "function",
        "z": "8a845cf4.ea641",
        "name": "Req PWM",
        "func": "var data={\n    type: \"raw\",\n    request: {\n        nadr: \"0x0004\",\n        pnum: \"0x20\",\n        pcmd: \"0x00\",\n        hwpid: \"0xFFFF\",\n        pdata: \"0x027D\" + Math.round(msg.payload).toString(16),\n    },\n    timeout: 1000\n}\nmsg.payload=data;\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 820,
        "y": 120,
        "wires": [
            [
                "88e1c68b.5ab91"
            ]
        ]
    },
    {
        "id": "a50d0e9c.c3a048",
        "type": "link in",
        "z": "dd8a1142.d816c",
        "name": "ToSend",
        "links": [
            "88e1c68b.5ab91"
        ],
        "x": 460,
        "y": 240,
        "wires": [
            [
                "fc03850c.ab92e8"
            ]
        ]
    },
    {
        "id": "88e1c68b.5ab91",
        "type": "link out",
        "z": "8a845cf4.ea641",
        "name": "",
        "links": [
            "a50d0e9c.c3a048"
        ],
        "x": 915,
        "y": 120,
        "wires": []
    },
    {
        "id": "b7dc0d64.b4faa8",
        "type": "ui_slider",
        "z": "8a845cf4.ea641",
        "name": "",
        "label": "IQRF Fan speed",
        "group": "58282760.fabe68",
        "order": 0,
        "width": 0,
        "height": 0,
        "passthru": true,
        "topic": "",
        "min": 0,
        "max": "100",
        "step": 1,
        "x": 540,
        "y": 120,
        "wires": [
            [
                "a9120dd6.c9d34"
            ]
        ]
    },
    {
        "id": "ba3b6dc3.7852f8",
        "type": "function",
        "z": "8a845cf4.ea641",
        "name": "Temp to speed",
        "func": "let wantedTemp = 28;\nlet currentTemp = msg.payload;\nlet overflow = false;\nif (currentTemp > (wantedTemp + 2) && !overflow) {\n    overflow = true;\n    msg.payload = 100;\n} else if (currentTemp < (wantedTemp - 2) && overflow) {\n    overflow = false;\n    msg.payload = 25;\n} else {\n    msg.payload = 50;\n}\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 360,
        "y": 120,
        "wires": [
            [
                "b7dc0d64.b4faa8"
            ]
        ]
    },
    {
        "id": "f4155ab1.fc556",
        "type": "mqtt in",
        "z": "8a845cf4.ea641",
        "name": "Temperature BME280",
        "topic": "/sensors/bme280/0/temperature",
        "qos": "2",
        "broker": "ae8a1f56.99e2c",
        "x": 160,
        "y": 120,
        "wires": [
            [
                "ba3b6dc3.7852f8"
            ]
        ]
    }
];
