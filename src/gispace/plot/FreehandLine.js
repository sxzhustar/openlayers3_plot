
P.Plot.FreehandLine = function(points){
    goog.base(this, []);
    this.type = P.PlotTypes.FREEHAND_LINE;
    this.freehand =  true;
    this.setPoints(points);
};

goog.inherits(P.Plot.FreehandLine, ol.geom.LineString);
goog.mixin(P.Plot.FreehandLine.prototype, P.Plot.prototype);

P.Plot.FreehandLine.prototype.generate = function(){
    this.setCoordinates(this.points);
};