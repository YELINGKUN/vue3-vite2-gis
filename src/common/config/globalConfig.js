export const globalConfig1 = {
    baseurl: "http://192.168.233.23:5000",
    baseimgurl: "http://192.168.233.23:5000",
    mapConfig: {
        "Init": {
            "projection": "EPSG:3857",
            "center": [
                4.166741,
                23.661341
            ],
            "zoom": 16
        },
        "BaseUrl": "http://120.38.253.6:6080/arcgis/rest/services/",
        "Extent": {
            "XMin": 4.153052,
            "YMin": 23.647721,
            "XMax": 4.181006,
            "YMax": 23.674876,
            "SpatialReference": 3857
        },
        "CustomLayer": [{
            "type": "TILE",
            "url": "http://1.117.34.229:8081/tiles",
            "layer": "tiles",
            "isBaseLayer": "true",
            "layerID": "4",
            "layerCnName": "影像",
            "layerEnName": "tiles",
            "img": "./static/images/layerid4.png",
            "alwayShow": "true",
            "layerIndex": "4",
            "defaultVisible": true
        },
            {
                "type": "WMS",
                "url": "http://1.117.34.229:8080/geoserver/pscj/wms",
                "layer": "pscj:wsline",
                "projection": "EPSG:3857",
                "isBaseLayer": "false",
                "tiled": true,
                "layerID": "6",
                "layerCnName": "管线",
                "layerEnName": "wsline",
                "serverType": "geoserver",
                "alwayShow": "false",
                "layerIndex": "6",
                "defaultVisible": true,
                "onlyselect": false
            },
            {
                "type": "WMS",
                "url": "http://1.117.34.229:8080/geoserver/pscj/wms",
                "layer": "pscj:wspoint",
                "projection": "EPSG:3857",
                "isBaseLayer": "false",
                "tiled": true,
                "layerID": "7",
                "layerCnName": "管点",
                "layerEnName": "wspoint",
                "serverType": "geoserver",
                "alwayShow": "false",
                "layerIndex": "7",
                "defaultVisible": true,
                "onlyselect": false
            }
        ],
        "Token": "3f590eecb9241236ca44c5d76bbf5179",
        "PointAttributes": {
            "JS": "供水管点",
            "OBJECTID": "要素ID",
            "P_TYPE": "管线类型",
            "PTYPE": "管线类型",
            "SCODE": "设施类别",
            "EXP_NO": "物探点号",
            "PNO": "设施编号",
            "FEATURE": "特征",
            "SUBSID": "附属物",
            "ADDRESS": "地址",
            "MATERIAL": "材质",
            "SPEC": "规格",
            "DEEP": "埋深",
            "H": "高程",
            "X": "X坐标",
            "Y": "Y坐标",
            "ROTANG": "旋转角度",
            "MAPNUMBER": "图幅号",
            "MDATE": "建设年代",
            "ROAD": "所在道路",
            "ONOFF": "开关状态",
            "STAURS": "目前状况",
            "SETUP": "是否安装",
            "DETAIL": "详图",
            "KIND": "闸门种类",
            "WDEEP": "井深",
            "KEYTYPE": "钥匙型号",
            "ROADTYPE": "路面类别",
            "MAKER": "生产厂家",
            "SUR_DATE": "入库日期",
            "DB_DATE": "更新日期",
            "P_ID": "工程号",
            "REMARK": "备注",
            "SHAPE": "要素类别"
        },
        "LineAttributes": {
            "JS": "供水管线",
            "OBJECTID": "要素ID",
            "P_TYPE": "管线类型",
            "PTYPE": "管线类型",
            "SPOINT": "起点号",
            "S_POINT": "起点号",
            "EPOINT": "终点号",
            "E_POINT": "终点号",
            "ADDRESS": "地址",
            "MATERIAL": "材质",
            "D_S": "管径",
            "S_DEEP": "起点埋深",
            "E_DEEP": "终点埋深",
            "S_H": "起点高程",
            "E_H": "终点高程",
            "MDATE": "建设年代",
            "RNAME": "所在道路",
            "FLOW_D": "流向",
            "FLOWDIRECT": "流向",
            "LLENGTH": "长度",
            "CDATE": "验收日期",
            "DETAIL": "详图",
            "SUR_DATE": "探测时间",
            "DB_DATE": "入库时间",
            "UP_DATE": "入库时间",
            "P_ID": "工程号",
            "REMARK": "备注",
            "SHAPE": "要素类别",
            "SHAPE_Length": "管线长度"
        }
    },
    api: {
        "addPoint": "/addPoint",
        "delPoint": "/delPoint",
        "modifyPoint": "/modifyPoint",
        "movePoint": "/movePoint",
        "addLine": "/addLine",
        "delLine": "/delLine",
        "modifyLine": "/modifyLine"
    },
}


export const globalConfig = {
    "mapConfig": {
        "init": {
            "projection": "EPSG:3857",
            "center": [121.929924, 29.930058],
            "zoom": 1,
            "minZoom": 0,
            "maxZoom": 12,
            "rotation": 0.592
        },
        "mapcenter": [121.929924, 29.930058],
        "extent": [121.91030, 29.91258, 121.94881, 29.94827]
    },
    "layers": [
        {
            id: 1,
            label: '基础地图',
            children: [{
                id: 3,
                label: '大榭基础地图组',
                children: [
                    {
                        id: 8,
                        label: '大榭底图矢量切片',
                        layer: {
                            "type": "PBF",
                            // "url": "http://192.168.223.60:8080/daxie/{z}/{x}/{y}.pbf",//ax
                            "url": "http://10.5.1.239:8080/daxie/{z}/{x}/{y}.pbf",//dx
                            "layer": "daxie",
                            "projection": "EPSG:3857",
                            "tiled": true,
                            "serverType": "",
                            "layerID": "1",
                            "isBaseLayer": "true",
                            "layerCnName": "大榭底图矢量切片",
                            "layerEnName": "daxie",
                            "img": "",
                            "layerIndex": "1",
                            "defaultVisible": true,
                            "dataSource": "geoserver",
                        }
                    },
                    {
                        id: 9,
                        label: '大榭底图栅格切片',
                        layer: {
                            "type": "TILE",
                            "url": "http://10.5.1.239:8080/tiles/{z}/{x}/{y}.png",
                            "layer": "daxietile",
                            "projection": "EPSG:3857",
                            "tiled": true,
                            "serverType": "",
                            "layerID": "2",
                            "isBaseLayer": "true",
                            "layerCnName": "大榭底图栅格切片",
                            "layerEnName": "daxietile",
                            "img": "",
                            "layerIndex": "2",
                            "defaultVisible": false,
                            "dataSource": "geoserver",
                        }
                    }
                ]
            }],
        },
        {
            id: 2,
            label: '业务地图',
            children: [
                {
                    id: 4,
                    label: '集卡系列',
                    children: [
                        {
                            id: 10,
                            label: '集卡',
                            layer: {
                                "type": "Devicelayer",
                                "url": "",
                                "layer": "truck",
                                "projection": "EPSG:3857",
                                "tiled": false,
                                "serverType": "",
                                "layerID": "31",
                                "isBaseLayer": "false",
                                "layerCnName": "集卡",
                                "layerEnName": "truck",
                                "layerIndex": "31",
                                "defaultVisible": true,
                                "dataSource": "ws",
                            }
                        },
                        {
                            id: 11,
                            label: '外集卡',
                            layer: {
                                "type": "Devicelayer",
                                "url": "",
                                "layer": "etruck",
                                "projection": "EPSG:3857",
                                "tiled": false,
                                "serverType": "",
                                "layerID": "32",
                                "isBaseLayer": "false",
                                "layerCnName": "外集卡",
                                "layerEnName": "etruck",
                                "layerIndex": "32",
                                "defaultVisible": true,
                                "dataSource": "ws",
                            }
                        }
                    ]
                }, {
                    id: 5,
                    label: '流动设备与人员',
                    children: [
                        {
                            id: 12,
                            label: '流机设备',
                            layer: {
                                "type": "Devicelayer",
                                "url": "",
                                "layer": "forklift",
                                "projection": "EPSG:3857",
                                "tiled": false,
                                "serverType": "",
                                "layerID": "33",
                                "isBaseLayer": "false",
                                "layerCnName": "流机设备",
                                "layerEnName": "forklift",
                                "layerIndex": "33",
                                "defaultVisible": true,
                                "dataSource": "ws",
                            }
                        },
                        {
                            id: 13,
                            label: '防疫人员',
                            layer: {
                                "type": "Devicelayer",
                                "url": "",
                                "layer": "person",
                                "projection": "EPSG:3857",
                                "tiled": false,
                                "serverType": "",
                                "layerID": "34",
                                "isBaseLayer": "false",
                                "layerCnName": "防疫人员",
                                "layerEnName": "person",
                                "layerIndex": "34",
                                "defaultVisible": true,
                                "dataSource": "ws",
                            }
                        }
                    ]
                }, {
                    id: 6,
                    label: '大车',
                    children: [
                        {
                            id: 14,
                            label: '岸桥',
                            layer: {
                                "type": "Devicelayer",
                                "url": "",
                                "layer": "anqiao",
                                "projection": "EPSG:3857",
                                "tiled": false,
                                "serverType": "",
                                "layerID": "48",
                                "isBaseLayer": "false",
                                "layerCnName": "岸桥",
                                "layerEnName": "anqiao",
                                "layerIndex": "34",
                                "defaultVisible": true,
                                "dataSource": "ws",
                            }
                        },
                        {
                            id: 15,
                            label: '场桥',
                            layer: {
                                "type": "Devicelayer",
                                "url": "",
                                "layer": "changqiao",
                                "projection": "EPSG:3857",
                                "tiled": false,
                                "serverType": "",
                                "layerID": "49",
                                "isBaseLayer": "false",
                                "layerCnName": "场桥",
                                "layerEnName": "changqiao",
                                "layerIndex": "49",
                                "defaultVisible": true,
                                "dataSource": "ws",
                            }
                        }
                    ]
                }, {
                    id: 7,
                    label: '围栏',
                    children: [
                        {
                            id: 16,
                            label: '电子围栏',
                            layer: {
                                "type": "vectorlayer",
                                "url": "",//api
                                "layer": "fence",//api参数
                                "projection": "EPSG:3857",
                                "tiled": false,
                                "serverType": "",
                                "layerID": "10",
                                "isBaseLayer": "false",
                                "layerCnName": "电子围栏",
                                "layerEnName": "fence",
                                "layerIndex": "10",
                                "defaultVisible": true,
                                "dataSource": "database",// db
                            }
                        },
                    ]
                }
            ]
        }
    ],
    "tools": {
        // 常用工具"
        commontool: true,
        guide: true,
        fence: true,
        group: true,
        layers: true,
        poi: false,
    },
    "api": {
        "baseurl": "http://192.168.233.23:5000",
        "baseimgurl": "http://192.168.233.23:5000",
        "ws": "ws://10.5.1.239:15002/statusServer",
        "common": {
            "getGisLayer": "/map/fence/findLists",
            // "getGisLayer": "/map/fence/findList",
        },
        "monitor":
            {
                "gisStatusData":
                    "/map/track/gisStatusData",
                "onlineDevices":
                    "/map/track/onlineDevices",
            },
        "fence":
            {
                "findById":
                    "/map/fence/",
                "findAllFs":
                    "/map/fence/findList",
                "pcef":
                    "/map/fence/pcef",
                "addef":
                    "/map/fence/addef",
                "deleteById":
                    "/map/fence/delete",
                "upef":
                    "/map/fence/upef",
            },
    },
}

