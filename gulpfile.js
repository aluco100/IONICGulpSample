var gulp = require('gulp');
var rename = require('gulp-rename');
var xml = require('xmldoc');
var fs = require("fs");

var paths = {
  falabella_config : './configs/falabella_config.ts',
  paris_config : './configs/paris_config.ts',
  falabella_css : './styles/styles_falabella/*.+(css|scss)',
  paris_css : './styles/styles_paris/*.+(css|scss)',
  falabella_resources: './resources_falabella/**/*',
  paris_resources: './resources_paris/**/*'
}

var targets = {
  falabella: {
    appName: "Falabella",
    bundle: "com.dsy.falabella"
  },
  paris: {
    appName: "Paris",
    bundle: "com.dsy.paris"
  }
}

gulp.task('falabella', ['resources_falabella','css_falabella','app-name-falabella','config_falabella']);
gulp.task('paris',['resources_paris','css_paris','app-name-paris','config_paris']);

gulp.task('resources_falabella', function(){
  gulp.src(paths.falabella_resources)
      .pipe(gulp.dest('./resources'))
});

gulp.task('resources_paris', function(){
  gulp.src(paths.paris_resources)
      .pipe(gulp.dest('./resources'))
});

gulp.task('css_falabella',function(){
  gulp.src(paths.falabella_css)
      .pipe(gulp.dest('./src/assets'))
});

gulp.task('css_paris',function(){
  gulp.src(paths.paris_css)
      .pipe(gulp.dest('./src/assets'))
});

gulp.task('app-name-falabella', function(){
  var configXML = new xml.XmlDocument(fs.readFileSync("config.xml"));

  //cambiando el bundle identifier
  console.log("\nChanging package name to: " + targets.falabella.bundle + "\n");
  configXML.attr.id = targets.falabella.bundle;

  //cambiando el nombre de la app
  console.log("\nChanging app name to: " + targets.falabella.appName + "\n");
  configXML.childNamed("name").val = targets.falabella.appName;
  configXML.childNamed("name").children[0].text = targets.falabella.appName;
  configXML.childNamed("name").firstChild.text = targets.falabella.appName;
  configXML.childNamed("name").lastChild.text = targets.falabella.appName;
  configXML.childNamed("description").val = targets.falabella.appName;
  configXML.childNamed("description").children[0].text = targets.falabella.appName;
  configXML.childNamed("description").firstChild.text = targets.falabella.appName;
  configXML.childNamed("description").lastChild.text = targets.falabella.appName;
  fs.writeFileSync("config.xml", configXML.toString());
});

gulp.task('app-name-paris', function(){
  var configXML = new xml.XmlDocument(fs.readFileSync("config.xml"));

  //cambiando el bundle identifier
  console.log("\nChanging package name to: " + targets.paris.bundle + "\n");
  configXML.attr.id = targets.paris.bundle;

  //cambiando el nombre de la app
  console.log("\nChanging app name to: " + targets.paris.appName + "\n");
  configXML.childNamed("name").val = targets.paris.appName;
  configXML.childNamed("name").children[0].text = targets.paris.appName;
  configXML.childNamed("name").firstChild.text = targets.paris.appName;
  configXML.childNamed("name").lastChild.text = targets.paris.appName;
  configXML.childNamed("description").val = targets.paris.appName;
  configXML.childNamed("description").children[0].text = targets.paris.appName;
  configXML.childNamed("description").firstChild.text = targets.paris.appName;
  configXML.childNamed("description").lastChild.text = targets.paris.appName;
  fs.writeFileSync("config.xml", configXML.toString());
});

gulp.task('config_falabella', function(){
  gulp.src(paths.falabella_config)
      .pipe(rename('base-config.ts'))
      .pipe(gulp.dest('./src/services/'))
});
gulp.task('config_paris', function(){
  gulp.src(paths.paris_config)
      .pipe(rename('base-config.ts'))
      .pipe(gulp.dest('./src/services/'))
});

gulp.task('sample', function() {
  console.log("primera tarea con gulp");
});
