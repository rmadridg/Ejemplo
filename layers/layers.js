ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32718").setExtent([691573.839713, 5818272.002401, 727645.266103, 5847988.153280]);
var wms_layers = [];

var format_HOJA_G027_RENAICO_0 = new ol.format.GeoJSON();
var features_HOJA_G027_RENAICO_0 = format_HOJA_G027_RENAICO_0.readFeatures(json_HOJA_G027_RENAICO_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_HOJA_G027_RENAICO_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HOJA_G027_RENAICO_0.addFeatures(features_HOJA_G027_RENAICO_0);
var lyr_HOJA_G027_RENAICO_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HOJA_G027_RENAICO_0, 
                style: style_HOJA_G027_RENAICO_0,
                interactive: true,
                title: '<img src="styles/legend/HOJA_G027_RENAICO_0.png" /> HOJA_G027_RENAICO'
            });
var format_Catastro_Renaico_1 = new ol.format.GeoJSON();
var features_Catastro_Renaico_1 = format_Catastro_Renaico_1.readFeatures(json_Catastro_Renaico_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_Catastro_Renaico_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Catastro_Renaico_1.addFeatures(features_Catastro_Renaico_1);
var lyr_Catastro_Renaico_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Catastro_Renaico_1, 
                style: style_Catastro_Renaico_1,
                interactive: true,
    title: 'Catastro_Renaico<br />\
    <img src="styles/legend/Catastro_Renaico_1_0.png" /> B.Nat-Exoticas Asilv.Semidenso<br />\
    <img src="styles/legend/Catastro_Renaico_1_1.png" /> B.Nativo-Plantacion Abierto<br />\
    <img src="styles/legend/Catastro_Renaico_1_2.png" /> B.Nativo-Plantacion Semidenso<br />\
    <img src="styles/legend/Catastro_Renaico_1_3.png" /> Bosque Nativo con ExÃƒÆ’Ã‚Â³ticas Asilvestradas Abierto<br />\
    <img src="styles/legend/Catastro_Renaico_1_4.png" /> Bosque Nativo con ExÃƒÆ’Ã‚Â³ticas Asilvestradas Denso<br />\
    <img src="styles/legend/Catastro_Renaico_1_5.png" /> Bosque Nativo con ExÃƒÆ’Ã‚Â³ticas Asilvestradas Semidenso<br />\
    <img src="styles/legend/Catastro_Renaico_1_6.png" /> Bosque Nativo Renoval Abierto<br />\
    <img src="styles/legend/Catastro_Renaico_1_7.png" /> Bosque Nativo Renoval Denso<br />\
    <img src="styles/legend/Catastro_Renaico_1_8.png" /> Bosque Nativo Renoval Semidenso<br />\
    <img src="styles/legend/Catastro_Renaico_1_9.png" /> Bosque Nativo-PlantaciÃƒÆ’Ã‚Â³n Abierto<br />\
    <img src="styles/legend/Catastro_Renaico_1_10.png" /> Bosque Nativo-PlantaciÃƒÆ’Ã‚Â³n Denso<br />\
    <img src="styles/legend/Catastro_Renaico_1_11.png" /> Bosque Nativo-PlantaciÃƒÆ’Ã‚Â³n Semidenso<br />\
    <img src="styles/legend/Catastro_Renaico_1_12.png" /> Bosque Nativo-Plantacion Denso<br />\
    <img src="styles/legend/Catastro_Renaico_1_13.png" /> Bosques Exoticas Asilvestradas<br />\
    <img src="styles/legend/Catastro_Renaico_1_14.png" /> Cajas de RÃƒÆ’Ã‚Â­os<br />\
    <img src="styles/legend/Catastro_Renaico_1_15.png" /> Ciudades-Pueblos-Zonas.Indus.<br />\
    <img src="styles/legend/Catastro_Renaico_1_16.png" /> Ciudades, Pueblos, Zonas Industriales<br />\
    <img src="styles/legend/Catastro_Renaico_1_17.png" /> Lago-Laguna-Embalse-Tranque<br />\
    <img src="styles/legend/Catastro_Renaico_1_18.png" /> Lagos, Lagunas, Embalses,Tranques<br />\
    <img src="styles/legend/Catastro_Renaico_1_19.png" /> Matorral Abierto<br />\
    <img src="styles/legend/Catastro_Renaico_1_20.png" /> Matorral Arborescen. Semidenso<br />\
    <img src="styles/legend/Catastro_Renaico_1_21.png" /> Matorral Arborescente Abierto<br />\
    <img src="styles/legend/Catastro_Renaico_1_22.png" /> Matorral Arborescente Denso<br />\
    <img src="styles/legend/Catastro_Renaico_1_23.png" /> Matorral Arborescente Semidenso<br />\
    <img src="styles/legend/Catastro_Renaico_1_24.png" /> Matorral Denso<br />\
    <img src="styles/legend/Catastro_Renaico_1_25.png" /> Matorral Pradera Abierto<br />\
    <img src="styles/legend/Catastro_Renaico_1_26.png" /> Matorral Pradera Semidenso<br />\
    <img src="styles/legend/Catastro_Renaico_1_27.png" /> Matorral Semidenso<br />\
    <img src="styles/legend/Catastro_Renaico_1_28.png" /> Matorral-Pradera Abierto<br />\
    <img src="styles/legend/Catastro_Renaico_1_29.png" /> Matorral-Pradera Denso<br />\
    <img src="styles/legend/Catastro_Renaico_1_30.png" /> Matorral-Pradera Semidenso<br />\
    <img src="styles/legend/Catastro_Renaico_1_31.png" /> MinerÃƒÆ’Ã‚Â­a Industrial<br />\
    <img src="styles/legend/Catastro_Renaico_1_32.png" /> Otros sin VegetaciÃƒÆ’Ã‚Â³n<br />\
    <img src="styles/legend/Catastro_Renaico_1_33.png" /> Otros Terrenos HÃƒÆ’Ã‚Âºmedos<br />\
    <img src="styles/legend/Catastro_Renaico_1_34.png" /> Planta.Joven-Recien Cosechada<br />\
    <img src="styles/legend/Catastro_Renaico_1_35.png" /> PlantaciÃƒÆ’Ã‚Â³n Adulta<br />\
    <img src="styles/legend/Catastro_Renaico_1_36.png" /> PlantaciÃƒÆ’Ã‚Â³n con ExÃƒÆ’Ã‚Â³ticas Asilvestradas<br />\
    <img src="styles/legend/Catastro_Renaico_1_37.png" /> PlantaciÃƒÆ’Ã‚Â³n Joven o ReciÃƒÆ’Ã‚Â©n Cosechada<br />\
    <img src="styles/legend/Catastro_Renaico_1_38.png" /> Plantacion Adulta<br />\
    <img src="styles/legend/Catastro_Renaico_1_39.png" /> Praderas Perennes<br />\
    <img src="styles/legend/Catastro_Renaico_1_40.png" /> RÃƒÆ’Ã‚Â­os<br />\
    <img src="styles/legend/Catastro_Renaico_1_41.png" /> Renoval Abierto<br />\
    <img src="styles/legend/Catastro_Renaico_1_42.png" /> Renoval Denso<br />\
    <img src="styles/legend/Catastro_Renaico_1_43.png" /> Renoval Semidenso<br />\
    <img src="styles/legend/Catastro_Renaico_1_44.png" /> Rios<br />\
    <img src="styles/legend/Catastro_Renaico_1_45.png" /> RotaciÃƒÆ’Ã‚Â³n Cultivo-Pradera<br />\
    <img src="styles/legend/Catastro_Renaico_1_46.png" /> Rotacion Cultivo-Pradera<br />\
    <img src="styles/legend/Catastro_Renaico_1_47.png" /> Terreno de Uso AgrÃƒÆ’Ã‚Â­cola<br />\
    <img src="styles/legend/Catastro_Renaico_1_48.png" /> Terrenos de Uso Agricola<br />\
    <img src="styles/legend/Catastro_Renaico_1_49.png" /> Vegas<br />'
        });
var format_HidroA_hojaG027_2 = new ol.format.GeoJSON();
var features_HidroA_hojaG027_2 = format_HidroA_hojaG027_2.readFeatures(json_HidroA_hojaG027_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_HidroA_hojaG027_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HidroA_hojaG027_2.addFeatures(features_HidroA_hojaG027_2);
var lyr_HidroA_hojaG027_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HidroA_hojaG027_2, 
                style: style_HidroA_hojaG027_2,
                interactive: true,
                title: '<img src="styles/legend/HidroA_hojaG027_2.png" /> HidroA_hojaG027'
            });
var format_HidroL_hojaG027_3 = new ol.format.GeoJSON();
var features_HidroL_hojaG027_3 = format_HidroL_hojaG027_3.readFeatures(json_HidroL_hojaG027_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_HidroL_hojaG027_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HidroL_hojaG027_3.addFeatures(features_HidroL_hojaG027_3);
var lyr_HidroL_hojaG027_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HidroL_hojaG027_3, 
                style: style_HidroL_hojaG027_3,
                interactive: true,
                title: '<img src="styles/legend/HidroL_hojaG027_3.png" /> HidroL_hojaG027'
            });
var format_TransL_hojaG027_4 = new ol.format.GeoJSON();
var features_TransL_hojaG027_4 = format_TransL_hojaG027_4.readFeatures(json_TransL_hojaG027_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_TransL_hojaG027_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TransL_hojaG027_4.addFeatures(features_TransL_hojaG027_4);
var lyr_TransL_hojaG027_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TransL_hojaG027_4, 
                style: style_TransL_hojaG027_4,
                interactive: true,
                title: '<img src="styles/legend/TransL_hojaG027_4.png" /> TransL_hojaG027'
            });
var format_EscuelasP_hojaG027_5 = new ol.format.GeoJSON();
var features_EscuelasP_hojaG027_5 = format_EscuelasP_hojaG027_5.readFeatures(json_EscuelasP_hojaG027_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_EscuelasP_hojaG027_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EscuelasP_hojaG027_5.addFeatures(features_EscuelasP_hojaG027_5);
var lyr_EscuelasP_hojaG027_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EscuelasP_hojaG027_5, 
                style: style_EscuelasP_hojaG027_5,
                interactive: true,
                title: '<img src="styles/legend/EscuelasP_hojaG027_5.png" /> EscuelasP_hojaG027'
            });

lyr_HOJA_G027_RENAICO_0.setVisible(true);lyr_Catastro_Renaico_1.setVisible(true);lyr_HidroA_hojaG027_2.setVisible(true);lyr_HidroL_hojaG027_3.setVisible(true);lyr_TransL_hojaG027_4.setVisible(true);lyr_EscuelasP_hojaG027_5.setVisible(true);
var layersList = [lyr_HOJA_G027_RENAICO_0,lyr_Catastro_Renaico_1,lyr_HidroA_hojaG027_2,lyr_HidroL_hojaG027_3,lyr_TransL_hojaG027_4,lyr_EscuelasP_hojaG027_5];
lyr_HOJA_G027_RENAICO_0.set('fieldAliases', {'WGS84': 'WGS84', 'nombre': 'nombre', 'categoria': 'categoria', 'name': 'name', });
lyr_Catastro_Renaico_1.set('fieldAliases', {'USO_TIERRA': 'USO_TIERRA', 'USO': 'USO', 'SUBUSO': 'SUBUSO', 'NOM_COM': 'NOM_COM', });
lyr_HidroA_hojaG027_2.set('fieldAliases', {'objectid': 'objectid', 'st_area_sh': 'st_area_sh', 'st_length_': 'st_length_', 'Nombre': 'Nombre', 'Tipo': 'Tipo', });
lyr_HidroL_hojaG027_3.set('fieldAliases', {'objectid': 'objectid', 'fid_drenes': 'fid_drenes', 'cod_comuna': 'cod_comuna', 'shape_leng': 'shape_leng', 'st_length_': 'st_length_', 'Nombre': 'Nombre', 'Dren_Tipo': 'Dren_Tipo', 'Region': 'Region', 'Provincia': 'Provincia', 'Comuna': 'Comuna', });
lyr_TransL_hojaG027_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ROL': 'ROL', 'CALZADA': 'CALZADA', 'ORIENTACIO': 'ORIENTACIO', 'ROL_LABEL': 'ROL_LABEL', 'NOMBRE_CAM': 'NOMBRE_CAM', 'CLASIFICAC': 'CLASIFICAC', 'CARPETA': 'CARPETA', 'KM_I': 'KM_I', 'KM_F': 'KM_F', 'KM_TRAMO': 'KM_TRAMO', 'ENROLADO': 'ENROLADO', 'CONCESIONA': 'CONCESIONA', 'REGION': 'REGION', 'Shape_Leng': 'Shape_Leng', });
lyr_EscuelasP_hojaG027_5.set('fieldAliases', {'NOM_RBD': 'NOM_RBD', 'NOM_COM_RB': 'NOM_COM_RB', 'LATITUD': 'LATITUD', 'LONGITUD': 'LONGITUD', });
lyr_HOJA_G027_RENAICO_0.set('fieldImages', {'WGS84': '', 'nombre': '', 'categoria': '', 'name': '', });
lyr_Catastro_Renaico_1.set('fieldImages', {'USO_TIERRA': 'TextEdit', 'USO': 'TextEdit', 'SUBUSO': 'TextEdit', 'NOM_COM': 'TextEdit', });
lyr_HidroA_hojaG027_2.set('fieldImages', {'objectid': '', 'st_area_sh': '', 'st_length_': '', 'Nombre': '', 'Tipo': '', });
lyr_HidroL_hojaG027_3.set('fieldImages', {'objectid': '', 'fid_drenes': '', 'cod_comuna': '', 'shape_leng': '', 'st_length_': '', 'Nombre': '', 'Dren_Tipo': '', 'Region': '', 'Provincia': '', 'Comuna': '', });
lyr_TransL_hojaG027_4.set('fieldImages', {'OBJECTID': '', 'ROL': '', 'CALZADA': '', 'ORIENTACIO': '', 'ROL_LABEL': '', 'NOMBRE_CAM': '', 'CLASIFICAC': '', 'CARPETA': '', 'KM_I': '', 'KM_F': '', 'KM_TRAMO': '', 'ENROLADO': '', 'CONCESIONA': '', 'REGION': '', 'Shape_Leng': '', });
lyr_EscuelasP_hojaG027_5.set('fieldImages', {'NOM_RBD': '', 'NOM_COM_RB': '', 'LATITUD': '', 'LONGITUD': '', });
lyr_HOJA_G027_RENAICO_0.set('fieldLabels', {'WGS84': 'no label', 'nombre': 'no label', 'categoria': 'no label', 'name': 'no label', });
lyr_Catastro_Renaico_1.set('fieldLabels', {'USO_TIERRA': 'no label', 'USO': 'no label', 'SUBUSO': 'no label', 'NOM_COM': 'no label', });
lyr_HidroA_hojaG027_2.set('fieldLabels', {'objectid': 'no label', 'st_area_sh': 'no label', 'st_length_': 'no label', 'Nombre': 'no label', 'Tipo': 'no label', });
lyr_HidroL_hojaG027_3.set('fieldLabels', {'objectid': 'no label', 'fid_drenes': 'no label', 'cod_comuna': 'no label', 'shape_leng': 'no label', 'st_length_': 'no label', 'Nombre': 'inline label', 'Dren_Tipo': 'no label', 'Region': 'no label', 'Provincia': 'no label', 'Comuna': 'no label', });
lyr_TransL_hojaG027_4.set('fieldLabels', {'OBJECTID': 'no label', 'ROL': 'no label', 'CALZADA': 'no label', 'ORIENTACIO': 'no label', 'ROL_LABEL': 'no label', 'NOMBRE_CAM': 'no label', 'CLASIFICAC': 'no label', 'CARPETA': 'no label', 'KM_I': 'no label', 'KM_F': 'no label', 'KM_TRAMO': 'no label', 'ENROLADO': 'no label', 'CONCESIONA': 'no label', 'REGION': 'no label', 'Shape_Leng': 'no label', });
lyr_EscuelasP_hojaG027_5.set('fieldLabels', {'NOM_RBD': 'inline label', 'NOM_COM_RB': 'no label', 'LATITUD': 'no label', 'LONGITUD': 'no label', });
lyr_EscuelasP_hojaG027_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});