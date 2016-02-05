/**
 * 动态标绘API plot4ol3，基于OpenLayer3开发，旨在为基于开源GIS技术做项目开发提供标绘API。
 * 当前版本1.0，提供的功能：绘制基本标绘符号。
 * 绘制接口：PlotDraw
 * 具体用法请参考演示系统源码。
 *
 * 开发者：@平凡的世界
 * QQ号：21587252
 * 邮箱：gispace@yeah.net
 * 博客：http://blog.csdn.net/gispace
 * 动态标绘交流QQ群：318659439
 *
 * 如果想要收到API更新邮件，请在博客评论或者资源下载页面留下您的邮箱地址。
 *
 * */

var map, plotDraw, drawOverlay, drawStyle, featureSource;

function init(){
    // 初始化地图，底图使用openstreetmap在线地图
    map = new ol.Map({
        target: 'map',
        layers: [
            new ol.layer.Tile({
                //source: new ol.source.MapQuest({layer: 'sat'})
                source: new ol.source.Stamen({
                    layer: 'watercolor'
                })
            })
        ],
        view: new ol.View({
            center: ol.proj.transform([37.41, 8.82], 'EPSG:4326', 'EPSG:3857'),
            zoom: 4
        })
    });

    // 初始化标绘绘制工具，添加绘制结束事件响应
    plotDraw = new P.PlotDraw(map);
    plotDraw.on(P.Event.PlotDrawEvent.DRAW_END, onDrawEnd, false, this);

    // 设置标绘符号显示的默认样式
    var stroke = new ol.style.Stroke({color: '#FF0000', width: 2});
    var fill = new ol.style.Fill({color: 'rgba(0,255,0,0.4)'});
    drawStyle = new ol.style.Style({fill:fill, stroke:stroke});

    // 绘制好的标绘符号，添加到FeatureOverlay显示。
    featureSource = new ol.source.Vector();
    drawOverlay = new ol.layer.Vector({
        source: featureSource
    });
    drawOverlay.setStyle(drawStyle);
    drawOverlay.setMap(map);
}

// 绘制结束后，添加到FeatureOverlay显示。
function onDrawEnd(event){
    var feature = event.feature;
    featureSource.addFeature(feature);
}

// 指定标绘类型，开始绘制。
function activate(type){
    plotDraw.activate(type);
};

function showAbout(){
    document.getElementById("aboutContainer").style.visibility = "visible";
}

function hideAbout(){
    document.getElementById("aboutContainer").style.visibility = "hidden";
}