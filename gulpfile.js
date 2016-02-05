var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var replace = require('gulp-replace');

gulp.task('compact', function () {
   return gulp.src(['./lib/goog/base.js',
       './lib/goog/idisposable.js',
       './lib/goog/disposable.js',
       './lib/goog/eventid.js',
       './lib/goog/event.js',
       './lib/goog/error.js',
       './lib/goog/nodetype.js',
       './lib/goog/string.js',
       './lib/goog/asserts.js',
       './lib/goog/array.js',
       './lib/goog/object.js',
       './lib/goog/util.js',
       './lib/goog/browser.js',
       './lib/goog/engine.js',
       './lib/goog/reflect.js',
       './lib/goog/useragent.js',
       './lib/goog/eventtype.js',
       './lib/goog/browserfeature.js',
       './lib/goog/browserevent.js',
       './lib/goog/entrypointregistry.js',
       './lib/goog/listenable.js',
       './lib/goog/listener.js',
       './lib/goog/listenermap.js',
       './lib/goog/events.js',
       './src/gispace/GISpace.js',
       './src/gispace/Constants.js',
       './src/gispace/PlotTypes.js',
       './src/gispace/PlotUtils.js',
       './src/gispace/event/Event.js',
       './src/gispace/event/PlotDrawEvent.js',
       './src/gispace/plot/Plot.js',
       './src/gispace/plot/Arc.js',
       './src/gispace/plot/AttackArrow.js',
       './src/gispace/plot/SquadCombat.js',
       './src/gispace/plot/TailedAttackArrow.js',
       './src/gispace/plot/TailedSquadCombat.js',
       './src/gispace/plot/Circle.js',
       './src/gispace/plot/ClosedCurve.js',
       './src/gispace/plot/Curve.js',
       './src/gispace/plot/DoubleArrow.js',
       './src/gispace/plot/Ellipse.js',
       './src/gispace/plot/FineArrow.js',
       './src/gispace/plot/AssaultDirection.js',
       './src/gispace/plot/GatheringPlace.js',
       './src/gispace/plot/Lune.js',
       './src/gispace/plot/Sector.js',
       './src/gispace/plot/StraightArrow.js',
       './src/gispace/PlotFactory.js',
       './src/gispace/tool/PlotDraw.js'])
       .pipe(concat('p-min.js'))
       .pipe(replace('P.PlotUtils','P.u'))
       .pipe(replace('P.Constants','P.c'))
       .pipe(replace('generate','pg'))
       .pipe(replace('.distance','.ua'))
       .pipe(replace('.wholeDistance','.uaa'))
       .pipe(replace('.getBaseLength','.uc'))
       .pipe(replace('.mid','.ud'))
       .pipe(replace('.getCircleCenterOfThreePoints','.ue'))
       .pipe(replace('.getIntersectPoint','.uf'))
       .pipe(replace('.getAzimuth','.ug'))
       .pipe(replace('.getAngleOfThreePoints','.uh'))
       .pipe(replace('.isClockWise','.ui'))
       .pipe(replace('.getPointOnLine','.uj'))
       .pipe(replace('.getCubicValue','.uk'))
       .pipe(replace('.getThirdPoint','.ul'))
       .pipe(replace('.getArcPoints','.um'))
       .pipe(replace('.getBisectorNormals','.un'))
       .pipe(replace('.getNormal','.uo'))
       .pipe(replace('.getCurvePoints','.up'))
       .pipe(replace('.getLeftMostControlPoint','.uq'))
       .pipe(replace('.getRightMostControlPoint','.ur'))
       .pipe(replace('.getBezierPoints','.us'))
       .pipe(replace('.getBinomialFactor','.ut'))
       .pipe(replace('.getFactorial','.uu'))
       .pipe(replace('.getQBSplinePoints','.uv'))
       .pipe(replace('.getQuadricBSplineFactor','.uw'))
       .pipe(replace('Arc','p1'))
       .pipe(replace('AssaultDirection','p2'))
       .pipe(replace('AttackArrow','p3'))
       .pipe(replace('Circle','p4'))
       .pipe(replace('ClosedCurve','p5'))
       .pipe(replace('Curve','p6'))
       .pipe(replace('DoubleArrow','p7'))
       .pipe(replace('Ellipse','p8'))
       .pipe(replace('FineArrow','p9'))
       .pipe(replace('GatheringPlace','p10'))
       .pipe(replace('Lune','p11'))
       .pipe(replace('Sector','p12'))
       .pipe(replace('SquadCombat','p13'))
       .pipe(replace('StraightArrow','p14'))
       .pipe(replace('TailedAttackArrow','p15'))
       .pipe(replace('TailedSquadCombat','p16'))
       .pipe(uglify())
       .pipe(gulp.dest('./build/'))
       .pipe(gulp.dest('./sample/'));
});

gulp.task('default', function () {
    var datavizWatch = gulp.watch('./src/**/*.js', ['compact']);
    datavizWatch.on('change', function (e) {
        console.log('File ' + e.path + ' was ' + e.type + ', running compact ...');
    });
});