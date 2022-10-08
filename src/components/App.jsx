// https://arul2112.github.io/unitcon/

import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

function App() {
  var feet;
  var meter;
  var inch;
  var centimeter;
  var km;
  var mile;
  var millimeter;

  var sqmeter;
  var sqcm;
  var sqfeet;
  var sqmile;
  var sqkm;
  var cent;
  var acre;

  var cumeter;
  var cufeet;
  var cuinch;
  var cucentimeter;
  var gallon;
  var liter;
  var milliliter;

  // for metter ----- length  -------------------------------------

  function updateForMeter() {
    var meterValue = document.getElementById("meter").value;
    document.getElementById("feet").value = (meterValue * 3.28084).toFixed(2);
    document.getElementById("inch").value = (meterValue * 39.3701).toFixed(2);
    document.getElementById("km").value = (meterValue * 0.001).toFixed(2);
    document.getElementById("centimeter").value = (meterValue * 100).toFixed(2);
    document.getElementById("mile").value = (meterValue * 0.000621371).toFixed(
      2
    );
    document.getElementById("millimeter").value = (meterValue * 1000).toFixed(
      2
    );
  }

  // for feet----- length  -------------------------------------

  function updateForFeet() {
    var feetValue = document.getElementById("feet").value;
    document.getElementById("meter").value = (feetValue * 0.3048).toFixed(2);
    document.getElementById("inch").value = (feetValue * 12).toFixed(2);
    document.getElementById("km").value = (feetValue * 0.0003048).toFixed(2);
    document.getElementById("centimeter").value = (feetValue * 30.48).toFixed(
      2
    );
    document.getElementById("mile").value = (feetValue * 0.000189394).toFixed(
      2
    );
    document.getElementById("millimeter").value = (
      feetValue * 304.800097536
    ).toFixed(2);
  }

  // for inch----- length  -------------------------------------

  function updateForInch() {
    var inchValue = document.getElementById("inch").value;
    document.getElementById("meter").value = (inchValue * 0.0254).toFixed(2);
    document.getElementById("feet").value = (inchValue * 0.0833333).toFixed(2);
    document.getElementById("km").value = (inchValue * 2.54e-5).toFixed(2);
    document.getElementById("centimeter").value = (inchValue * 2.54).toFixed(2);
    document.getElementById("mile").value = (inchValue * 1.5783e-5).toFixed(2);
    document.getElementById("millimeter").value = (inchValue * 25.4).toFixed(2);
  }

  // for centimeter----- length  -------------------------------------

  function updateForCentimeter() {
    var cmValue = document.getElementById("centimeter").value;
    document.getElementById("meter").value = (cmValue * 0.01).toFixed(2);
    document.getElementById("feet").value = (cmValue * 0.0328084).toFixed(2);
    document.getElementById("km").value = (cmValue * 1e-5).toFixed(2);
    document.getElementById("inch").value = (cmValue * 0.393701).toFixed(2);
    document.getElementById("mile").value = (cmValue * 6.2137e-6).toFixed(2);
    document.getElementById("millimeter").value = (cmValue * 10).toFixed(2);
  }

  ///kilometer to----- length  -------------------------------------

  var km_t_m = 1000;
  var km_t_mm = 1e6;
  var km_t_cm = 100000;
  var km_t_in = 39370.1;
  var km_t_ft = 3280.84;
  var km_t_mi = 0.621371;

  function updateForKilometer() {
    var kmValue = document.getElementById("km").value;
    document.getElementById("meter").value = (kmValue * km_t_m).toFixed(2);
    document.getElementById("feet").value = (kmValue * km_t_ft).toFixed(2);
    document.getElementById("centimeter").value = (kmValue * km_t_cm).toFixed(
      2
    );
    document.getElementById("inch").value = (kmValue * km_t_in).toFixed(2);
    document.getElementById("mile").value = (kmValue * km_t_mi).toFixed(2);
    document.getElementById("millimeter").value = (kmValue * km_t_mm).toFixed(
      2
    );
  }

  ///mile to----- length  -------------------------------------

  var mi_t_m = 1609.34;
  var mi_t_mm = 1.609e6;
  var mi_t_cm = 160934;
  var mi_t_in = 63360;
  var mi_t_ft = 5280;
  var mi_t_km = 1.60934;

  function updateForMile() {
    var mileValue = document.getElementById("mile").value;
    document.getElementById("meter").value = (mileValue * mi_t_m).toFixed(2);
    document.getElementById("feet").value = (mileValue * mi_t_ft).toFixed(2);
    document.getElementById("centimeter").value = (mileValue * mi_t_cm).toFixed(
      2
    );
    document.getElementById("inch").value = (mileValue * mi_t_in).toFixed(2);
    document.getElementById("km").value = (mileValue * mi_t_km).toFixed(2);
    document.getElementById("millimeter").value = (mileValue * mi_t_mm).toFixed(
      2
    );
  }

  ///millimeter to----- length  -------------------------------------

  var mm_t_m = 0.001;
  var mm_t_cm = 0.1;
  var mm_t_in = 0.0393701;
  var mm_t_ft = 0.00328084;
  var mm_t_km = 1e-6;
  var mm_t_mi = 6.2137e-7;

  function updateForMillimeter() {
    var mmValue = document.getElementById("millimeter").value;
    document.getElementById("meter").value = (mmValue * mm_t_m).toFixed(2);
    document.getElementById("feet").value = (mmValue * mm_t_ft).toFixed(2);
    document.getElementById("km").value = (mmValue * mm_t_km).toFixed(2);
    document.getElementById("centimeter").value = (mmValue * mm_t_cm).toFixed(
      2
    );
    document.getElementById("mile").value = (mmValue * mm_t_mi).toFixed(2);
    document.getElementById("inch").value = (mmValue * mm_t_in).toFixed(2);
  }

  // m2 to ----------- area ----------------------------------

  //sqmeter to
  var sqm_t_sqft = 10.7639;
  var sqm_t_ct = 0.02471;
  var sqm_t_ac = 0.000247105;
  var sqm_t_sqcm = 10000;
  var sqm_t_sqkm = 1e-6;
  var sqm_t_sqmi = 3.861e-7;

  function updateForSqMeter() {
    var sqmeterValue = document.getElementById("sqmeter").value;
    document.getElementById("sqfeet").value = (
      sqmeterValue * sqm_t_sqft
    ).toFixed(2);
    document.getElementById("sqcm").value = (sqmeterValue * sqm_t_sqcm).toFixed(
      2
    );
    document.getElementById("cent").value = (sqmeterValue * sqm_t_ct).toFixed(
      2
    );
    document.getElementById("acre").value = (sqmeterValue * sqm_t_ac).toFixed(
      2
    );
    document.getElementById("sqkm").value = (sqmeterValue * sqm_t_sqkm).toFixed(
      2
    );
    document.getElementById("sqmile").value = (
      sqmeterValue * sqm_t_sqmi
    ).toFixed(2);
  }

  //sqfeet to
  var sqft_t_sqm = 0.092903;
  var sqft_t_ct = 0.0022956841138659;
  var sqft_t_ac = 2.2957e-5;
  var sqft_t_sqcm = 929.03;
  var sqft_t_sqkm = 9.2903e-8;
  var sqft_t_sqmi = 3.587e-8;

  function updateForSqFeet() {
    var sqfeetValue = document.getElementById("sqfeet").value;
    document.getElementById("sqmeter").value = (
      sqfeetValue * sqft_t_sqm
    ).toFixed(2);
    document.getElementById("sqcm").value = (sqfeetValue * sqft_t_sqcm).toFixed(
      2
    );
    document.getElementById("cent").value = (sqfeetValue * sqft_t_ct).toFixed(
      2
    );
    document.getElementById("acre").value = (sqfeetValue * sqft_t_ac).toFixed(
      2
    );
    document.getElementById("sqkm").value = (sqfeetValue * sqft_t_sqkm).toFixed(
      2
    );
    document.getElementById("sqmile").value = (
      sqfeetValue * sqft_t_sqmi
    ).toFixed(2);
  }

  //sqcentimeter to
  var sqcm_t_sqm = 1e-4;
  var sqcm_t_sqft = 0.00107639;
  var sqcm_t_ct = 0.0000024710538146717;
  var sqcm_t_ac = 2.4711e-8;
  var sqcm_t_sqkm = 1e-10;
  var sqcm_t_sqmi = 3.861e-11;

  function updateForSqCm() {
    var sqcmValue = document.getElementById("sqcm").value;
    document.getElementById("sqmeter").value = (sqcmValue * sqcm_t_sqm).toFixed(
      2
    );
    document.getElementById("sqfeet").value = (sqcmValue * sqcm_t_sqft).toFixed(
      2
    );
    document.getElementById("cent").value = (sqcmValue * sqcm_t_ct).toFixed(2);
    document.getElementById("acre").value = (sqcmValue * sqcm_t_ac).toFixed(2);
    document.getElementById("sqkm").value = (sqcmValue * sqcm_t_sqkm).toFixed(
      2
    );
    document.getElementById("sqmile").value = (sqcmValue * sqcm_t_sqmi).toFixed(
      2
    );
  }
  //cent to
  var ct_t_sqm = 40.468564224;
  var ct_t_sqft = 435.6;
  var ct_t_ac = 0.01;
  var ct_t_sqcm = 404685.64224;
  var ct_t_sqkm = 4.0468564224e-5;
  var ct_t_sqmi = 1.5625e-5;

  function updateForCent() {
    var centValue = document.getElementById("cent").value;
    document.getElementById("sqmeter").value = (centValue * ct_t_sqm).toFixed(
      2
    );
    document.getElementById("sqfeet").value = (centValue * ct_t_sqft).toFixed(
      2
    );
    document.getElementById("sqcm").value = (centValue * ct_t_sqcm).toFixed(2);
    document.getElementById("acre").value = (centValue * ct_t_ac).toFixed(2);
    document.getElementById("sqkm").value = (centValue * ct_t_sqkm).toFixed(2);
    document.getElementById("sqmile").value = (centValue * ct_t_sqmi).toFixed(
      2
    );
  }

  //acre to
  var ac_t_sqm = 4046.86;
  var ac_t_sqft = 43560;
  var ac_t_ct = 100;
  var ac_t_sqcm = 4.047e7;
  var ac_t_sqkm = 0.00404686;
  var ac_t_sqmi = 0.0015625;

  function updateForAcre() {
    var acreValue = document.getElementById("acre").value;
    document.getElementById("sqmeter").value = (acreValue * ac_t_sqm).toFixed(
      2
    );
    document.getElementById("sqfeet").value = (acreValue * ac_t_sqft).toFixed(
      2
    );
    document.getElementById("sqcm").value = (acreValue * ac_t_sqcm).toFixed(2);
    document.getElementById("cent").value = (acreValue * ac_t_ct).toFixed(2);
    document.getElementById("sqkm").value = (acreValue * ac_t_sqkm).toFixed(2);
    document.getElementById("sqmile").value = (acreValue * ac_t_sqmi).toFixed(
      2
    );
  }

  //sqkilometer to
  var sqkm_t_sqm = 1e6;
  var sqkm_t_sqft = 1.076e7;
  var sqkm_t_ct = 24710.538146717;
  var sqkm_t_ac = 247.105;
  var sqkm_t_sqcm = 1e10;
  var sqkm_t_sqmi = 0.386102;

  function updateForSqkm() {
    var sqkmValue = document.getElementById("sqkm").value;
    document.getElementById("sqmeter").value = (sqkmValue * sqkm_t_sqm).toFixed(
      2
    );
    document.getElementById("sqfeet").value = (sqkmValue * sqkm_t_sqft).toFixed(
      2
    );
    document.getElementById("sqcm").value = (sqkmValue * sqkm_t_sqcm).toFixed(
      2
    );
    document.getElementById("cent").value = (sqkmValue * sqkm_t_ct).toFixed(2);
    document.getElementById("acre").value = (sqkmValue * sqkm_t_ac).toFixed(2);
    document.getElementById("sqmile").value = (sqkmValue * sqkm_t_sqmi).toFixed(
      2
    );
  }

  // mile to

  var sqmi_t_sqm = 2.59e6;
  var sqmi_t_sqft = 2.788e7;
  var sqmi_t_ct = 64000;
  var sqmi_t_ac = 640;
  var sqmi_t_sqcm = 2.59e10;
  var sqmi_t_sqkm = 2.58999;

  function updateForSqmile() {
    var sqmileValue = document.getElementById("sqmile").value;
    document.getElementById("sqmeter").value = (
      sqmileValue * sqmi_t_sqm
    ).toFixed(2);
    document.getElementById("sqfeet").value = (
      sqmileValue * sqmi_t_sqft
    ).toFixed(2);
    document.getElementById("sqcm").value = (sqmileValue * sqmi_t_sqcm).toFixed(
      2
    );
    document.getElementById("cent").value = (sqmileValue * sqmi_t_ct).toFixed(
      2
    );
    document.getElementById("acre").value = (sqmileValue * sqmi_t_ac).toFixed(
      2
    );
    document.getElementById("sqkm").value = (sqmileValue * sqmi_t_sqkm).toFixed(
      2
    );
  }

  //cumeter to
  var cum_t_cuft = 35.3147;
  var cum_t_cuin = 61023.7;
  var cum_t_l = 1000;
  var cum_t_ml = 1e6;
  var cum_t_gl = 219.969;
  var cum_t_cucm = 1e6;

  function updateForCumeter() {
    var cumeterValue = document.getElementById("cumeter").value;
    document.getElementById("cufeet").value = (
      cumeterValue * cum_t_cuft
    ).toFixed(2);
    document.getElementById("cuinch").value = (
      cumeterValue * cum_t_cuin
    ).toFixed(2);
    document.getElementById("liter").value = (cumeterValue * cum_t_l).toFixed(
      2
    );
    document.getElementById("milliliter").value = (
      cumeterValue * cum_t_ml
    ).toFixed(2);
    document.getElementById("gallon").value = (cumeterValue * cum_t_gl).toFixed(
      2
    );
    document.getElementById("cucentimeter").value = (
      cumeterValue * cum_t_cucm
    ).toFixed(2);
  }
  //cufeet to
  var cuft_t_cum = 0.0283168;
  var cuft_t_cuin = 1728;
  var cuft_t_l = 28.3168;
  var cuft_t_ml = 28316.8;
  var cuft_t_gl = 6.22884;
  var cuft_t_cucm = 28316.8;

  function updateForCufeet() {
    var cufeetValue = document.getElementById("cufeet").value;
    document.getElementById("cumeter").value = (
      cufeetValue * cuft_t_cum
    ).toFixed(2);
    document.getElementById("cuinch").value = (
      cufeetValue * cuft_t_cuin
    ).toFixed(2);
    document.getElementById("liter").value = (cufeetValue * cuft_t_l).toFixed(
      2
    );
    document.getElementById("milliliter").value = (
      cufeetValue * cuft_t_ml
    ).toFixed(2);
    document.getElementById("gallon").value = (cufeetValue * cuft_t_gl).toFixed(
      2
    );
    document.getElementById("cucentimeter").value = (
      cufeetValue * cuft_t_cucm
    ).toFixed(2);
  }

  //cuinch to
  var cuin_t_cum = 1.6387e-5;
  var cuin_t_cuft = 0.000578704;
  var cuin_t_l = 0.0163871;
  var cuin_t_ml = 16.3871;
  var cuin_t_gl = 0.00360465;
  var cuin_t_cucm = 16.3871;

  function updateForCuinch() {
    var cuinchValue = document.getElementById("cuinch").value;
    document.getElementById("cumeter").value = (
      cuinchValue * cuin_t_cum
    ).toFixed(2);
    document.getElementById("cufeet").value = (
      cuinchValue * cuin_t_cuft
    ).toFixed(2);
    document.getElementById("liter").value = (cuinchValue * cuin_t_l).toFixed(
      2
    );
    document.getElementById("milliliter").value = (
      cuinchValue * cuin_t_ml
    ).toFixed(2);
    document.getElementById("gallon").value = (cuinchValue * cuin_t_gl).toFixed(
      2
    );
    document.getElementById("cucentimeter").value = (
      cuinchValue * cuin_t_cucm
    ).toFixed(2);
  }

  //l to
  var l_t_cum = 0.001;
  var l_t_cuft = 0.0353147;
  var l_t_cuin = 61.0237;
  var l_t_ml = 1000;
  var l_t_gl = 0.219969;
  var l_t_cucm = 1000;

  function updateForLiter() {
    var literValue = document.getElementById("liter").value;
    document.getElementById("cumeter").value = (literValue * l_t_cum).toFixed(
      2
    );
    document.getElementById("cufeet").value = (literValue * l_t_cuft).toFixed(
      2
    );
    document.getElementById("cuinch").value = (literValue * l_t_cuin).toFixed(
      2
    );
    document.getElementById("milliliter").value = (literValue * l_t_ml).toFixed(
      2
    );
    document.getElementById("gallon").value = (literValue * l_t_gl).toFixed(2);
    document.getElementById("cucentimeter").value = (
      literValue * l_t_cucm
    ).toFixed(2);
  }

  //ml to
  var ml_t_cum = 1e-6;
  var ml_t_cuft = 3.5315e-5;
  var ml_t_cuin = 0.0610237;
  var ml_t_l = 0.001;
  var ml_t_gl = 0.000219969;
  var ml_t_cucm = 1;

  function updateForMilliliter() {
    var milliliterValue = document.getElementById("milliliter").value;
    document.getElementById("cumeter").value = (
      milliliterValue * ml_t_cum
    ).toFixed(2);
    document.getElementById("cufeet").value = (
      milliliterValue * ml_t_cuft
    ).toFixed(2);
    document.getElementById("cuinch").value = (
      milliliterValue * ml_t_cuin
    ).toFixed(2);
    document.getElementById("liter").value = (milliliterValue * ml_t_l).toFixed(
      2
    );
    document.getElementById("gallon").value = (
      milliliterValue * ml_t_gl
    ).toFixed(2);
    document.getElementById("cucentimeter").value = (
      milliliterValue * ml_t_cucm
    ).toFixed(2);
  }

  //gl to
  var gl_t_cum = 0.00454609;
  var gl_t_cuft = 0.160544;
  var gl_t_cuin = 277.419;
  var gl_t_l = 4.54609;
  var gl_t_ml = 4546.09;
  var gl_t_cucm = 4.54609;

  function updateForGallon() {
    var gallonValue = document.getElementById("gallon").value;
    document.getElementById("cumeter").value = (gallonValue * gl_t_cum).toFixed(
      2
    );
    document.getElementById("cufeet").value = (gallonValue * gl_t_cuft).toFixed(
      2
    );
    document.getElementById("cuinch").value = (gallonValue * gl_t_cuin).toFixed(
      2
    );
    document.getElementById("liter").value = (gallonValue * gl_t_l).toFixed(2);
    document.getElementById("milliliter").value = (
      gallonValue * gl_t_ml
    ).toFixed(2);
    document.getElementById("cucentimeter").value = (
      gallonValue * gl_t_cucm
    ).toFixed(2);
  }

  //cucm to
  var cucm_t_cum = 1e-6;
  var cucm_t_cuft = 3.5315e-5;
  var cucm_t_cuin = 0.0610237;
  var cucm_t_l = 0.001;
  var cucm_t_ml = 1;
  var cucm_t_gl = 0.000219969;

  function updateForCucentimeter() {
    var cucentimeterValue = document.getElementById("cucentimeter").value;
    document.getElementById("cumeter").value = (
      cucentimeterValue * cucm_t_cum
    ).toFixed(2);
    document.getElementById("cufeet").value = (
      cucentimeterValue * cucm_t_cuft
    ).toFixed(2);
    document.getElementById("cuinch").value = (
      cucentimeterValue * cucm_t_cuin
    ).toFixed(2);
    document.getElementById("liter").value = (
      cucentimeterValue * cucm_t_l
    ).toFixed(2);
    document.getElementById("milliliter").value = (
      cucentimeterValue * cucm_t_ml
    ).toFixed(2);
    document.getElementById("gallon").value = (
      cucentimeterValue * cucm_t_gl
    ).toFixed(2);
  }

  return (
    // length
    <div>
      <Header />
      <div className="note">
        <h1 className="topH1">length</h1>
        <Note id="meter" unit="meter" update={updateForMeter} value={meter} />
        <Note id="feet" unit="feet" update={updateForFeet} value={feet} />
        <Note id="inch" unit="inch" update={updateForInch} value={inch} />
        <Note
          id="centimeter"
          unit="centimeter"
          update={updateForCentimeter}
          value={centimeter}
        />
        <Note id="km" unit="km" update={updateForKilometer} value={km} />
        <Note id="mile" unit="mile" update={updateForMile} value={mile} />
        <Note
          id="millimeter"
          unit="millimeter"
          update={updateForMillimeter}
          value={millimeter}
        />
      </div>
      {/* area */}
      <div className="note">
        <h1 className="topH1">area</h1>
        <Note
          id="sqmeter"
          unit="sq Meter"
          update={updateForSqMeter}
          value={sqmeter}
        />
        <Note
          id="sqfeet"
          unit="sq Feet"
          update={updateForSqFeet}
          value={sqfeet}
        />
        <Note id="sqcm" unit="sq Cm" update={updateForSqCm} value={sqcm} />
        <Note id="cent" unit="Cent" update={updateForCent} value={cent} />
        <Note id="acre" unit="Acre" update={updateForAcre} value={acre} />
        <Note id="sqkm" unit="sq Km" update={updateForSqkm} value={sqkm} />
        <Note
          id="sqmile"
          unit="sq.Mile"
          update={updateForSqmile}
          value={sqmile}
        />
      </div>
      {/* volume */}

      <div className="note">
        <h1 className="topH1">volume</h1>
        <Note
          id="cumeter"
          unit="cu Meter"
          update={updateForCumeter}
          value={cumeter}
        />
        <Note
          id="cufeet"
          unit="cu Feet"
          update={updateForCufeet}
          value={cufeet}
        />
        <Note
          id="cuinch"
          unit="cu Inch"
          update={updateForCuinch}
          value={cuinch}
        />
        <Note id="liter" unit="liter" update={updateForLiter} value={liter} />
        <Note
          id="milliliter"
          unit="milli liter"
          update={updateForMilliliter}
          value={milliliter}
        />
        <Note
          id="gallon"
          unit="gallon"
          update={updateForGallon}
          value={gallon}
        />
        <Note
          id="cucentimeter"
          unit="cu Cm"
          update={updateForCucentimeter}
          value={cucentimeter}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
