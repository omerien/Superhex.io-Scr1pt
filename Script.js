// ==UserScript==
// @name         Superhex.io Scr1pt - Zoom Hack and more
// @namespace    Superhex.io Scr1pt
// @version      1.9.1
// @license      MIT
// @homepageURL  https://github.com/TBM13/Superhex.io-Scr1pt
// @contributionURL https://www.paypal.me/tbm13
// @icon         http://superhex.io/img/fav_icon_1.png
// @description  Mod for Superhex.io
// @description:es-ES Mod para Superhex.io
// @author       TBM13
// @match        *://superhex.io/*
// @match        www.superhex.io/*
// @grant        none

// ==/UserScript==

/*
MIT License

Copyright (c) 2019 TBM13

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

var style = document.createElement("style"),
    Text1TBM = localStorage.getItem("Text1TBM"), AdsTBM = localStorage.getItem("AdsTBM"), Language = localStorage.getItem("LangTBM"), currSkin = localStorage.getItem("selectedSkin"), currQuality = localStorage.getItem("quality"), zoomHack = localStorage.getItem("zoomTBM"), zoomValue = localStorage.getItem("zoomValTBM"),
    skinPag = 1,
    superhex = window.superhex,
    invalidValueTxt = "Invalid value. Make sure to only use numbers.",
    adsDeleted = false, adsRestoredTxt = "Ads restored. Reload the website to apply the changes.",
    qChangeTxt = "Insert value. Example:\n0.25: Very low\n0.5: Low\n0.75: Medium\n1: High\n1.5: Very high\n2: Ultra", q27Txt = "WARNING: Values higher than 2.7 can cause problems.", q01Txt = "WARNING: Values lower than 0.1 can cause problems.", qInvalidTxt = "\nExample: 1.2", qChangedTxt = "Quality changed to: ",
    sChangeTxt = "Skin ID:", sInvalidTxt = "Invalid ID. Make sure to only use numbers.", sChangedTxt = "Skin changed.", sErrorTxt = "An error has occurred. Make sure to insert a valid ID.", sTheSTxt = "The skin doesn't exists.",
    pTextTxt = "Play button text:",
    sUnlockekdTxt = "You already unlocked the skins.", sUnlockedsTxt = "The following skins were unlocked:", sChickenTxt = "Yellow chicken", sBirdTxt = "Light blue bird", sCowTxt = "Cow", sBird2Txt = "Red bird", sElephantTxt = "Elephant",
    loadingScriptTxt = "Loading Superhex.io Scr1pt...", loadingInfoTxt = "If the script doesn't loads, refresh the website (F5).",
    sAlreadyTxt = "You are already using the skin ",
    keyActionsTxt = "Hotkeys:\n\n1 = Hide/show Leaderboard.\n0 = Hide/show UI.\n2 = Hide/show FPS and connection info.",
    partyTxt = "Party ID:", party5Txt = "The party ID must have more than 5 characters.", party6Txt = "The party ID must have less than 6 characters.",
    zoomValueTxt = "Insert zoom value.\nBy default is 13 (higher value = more zoom)\nNote: You can also use the mouse wheel to zoom in/out.", zoomValueH = "Value can't be greater than 60.", zoomValueL = "Value can't be less than 5.",
    highQB, mediumQB, lowQB, playBtn, playAgBtn, mMenuBtn, math_max_o = Math.max;

style.type = "text/css";
style.innerHTML = '.scr1ptPanel {background:rgba(0,60,0,0.5); border-style: solid; border-width: 3px; border-color: rgb(60,185,60,0.5); border-radius: 5px;} .scr1ptButton {line-height: 1; outline: none; color: white; background-color: #5CB85C; border-radius: 4px; border-width: 0px; transition: 0.2s;} .scr1ptButton:hover {background-color: #5ed15e; cursor: pointer;} .scr1ptButton:active {background-color: #4e9c4e;} .scr1ptButton.unselected {opacity: 0.5;} .scr1ptButton .spinner {display: none; vertical-align: middle;} .scr1ptButton.button-loading {background-color: #7D7D7D; color: white;} .scr1ptButton.button-loading .spinner {display: inline-block;} .scr1ptButton-grey {color: black; background-color: #f5f5f5;} .scr1ptButton-grey:hover {background-color: white; color: #5e5e5e;} .scr1ptButton-grey:active {background-color: #cccccc; color: #5e5e5e;} .scr1ptButton-gold {background-color: #c9c818;} .scr1ptButton-gold:hover {background-color: #d9d71a;} .scr1ptButton-gold:active {background-color: #aba913;}';
document.getElementsByTagName("head")[0].appendChild(style);

window.changeLang = function(write, ing) {
    if (ing) {
        localStorage.setItem('LangTBM', 'EN');
        alert("Language changed to English. To see the changes, reload the website.");
        document.getElementById("btn7").innerText = "Español (Spanish)";
        document.getElementById("btn7").setAttribute("onclick", "changeLang(true, false);");
    } else {
        adsRestoredTxt = "Anuncios restaurados. Para ver los cambios, recarga la página.";
        qChangeTxt = "Insertar valor. Ejemplo:\n0.25: Muy baja\n0.5: Baja\n0.75: Media\n1: Alta\n1.5: Muy alta\n2: Ultra";
        q27Txt = "ADVERTENCIA: Un valor mayor a 2.7 puede causar problemas.";
        q01Txt = "ADVERTENCIA: Un valor menor a 0.1 puede causar problemas.";
        qInvalidTxt = "\nEjemplo: 1.2";
        qChangedTxt = "Calidad cambiada a: ";
        sChangeTxt = "ID de la Skin:";
        sInvalidTxt = "ID inválido. Asegúrate de solo usar números.";
        sChangedTxt = "Skin cambiada.";
        sErrorTxt = "Se ha producido un error. Asegúrate de insertar un ID válido.";
        sTheSTxt = "La skin no existe.";
        pTextTxt = "Texto del botón Play (jugar):";
        sUnlockekdTxt = "Ya tienes las skins desbloqueadas.";
        sUnlockedsTxt = "Las siguientes skins fueron desbloqueadas:";
        sChickenTxt = "Pollo amarillo";
        sBirdTxt = "Ave celeste";
        sCowTxt = "Vaca";
        sBird2Txt = "Ave roja";
        sElephantTxt = "Elefante";
        sAlreadyTxt = "Ya estás usando la skin ";
        partyTxt = "ID de la Party:";
        party5Txt = "El ID de la fiesta debe tener más de 5 carácteres.";
        party6Txt = "El ID de la fiesta debe tener menos de 6 carácteres.";
        keyActionsTxt = "Teclas:\n\n1 = Oculta/muestra la Tabla de clasificación.\n0 = Oculta/muestra la UI.\n2 = Oculta/muestra los FPS y datos\n de conexión.";
        document.getElementById("btn2").innerText = "Calidad personalizada";
        document.getElementById("btn3").innerText = "Establecer Skin (ID)";
        document.getElementById("btn5").innerText = "Texto del botón Play";
        document.getElementById("check1Text").innerText = "Remover anuncios";
        document.getElementById("check2Text").innerText = "Hack de Zoom";
        document.getElementById("btn6").innerText = "Desbloquear skins";
        document.getElementById("btn7").innerText = "English (Inglés)";
        document.getElementById("btn7").setAttribute("onclick", "changeLang(false, true);");
        document.getElementById("btn8").innerText = "Crear Party";
        document.getElementById("scrText2").innerText = keyActionsTxt;
        zoomValueTxt = "Inserta el valor del hack de zoom.\nPor defecto es 13. (valor mayor = más zoom)\nNota: También puedes usar la rueda del mouse para acercar/alejar la cámara.";
        zoomValueH = "El valor no puede ser mayor a 60.";
        zoomValueL = "El valor no puede ser menor a 10.";
        invalidValueTxt = "Valor inválido. Asegúrate de solo usar números.";
        highQB.innerText = "Alta";
        mediumQB.innerText = "Media";
        lowQB.innerText = "Baja";
        Language = "ES";
        if (write) {
            localStorage.setItem('LangTBM', 'ES');
            if (document.getElementById("btn2").getAttribute("class") == "green") document.getElementById("btn2").innerText = "Calidad personalizada (" + currQuality.toString() + ")";
            alert("Idioma cambiado a Español.");
        }
    }
};

if (Language == "ES") {
    loadingScriptTxt = "Cargando Superhex.io Scr1pt...";
    loadingInfoTxt = "Si el script no carga, refresca la página (F5).";
}

var originalLoad = window.onload;
window.onload = function () {
    if (originalLoad) originalLoad();
    window.mkGui();
    var skinRightArrow = document.getElementById("skin-right-arrow"),
        skinLeftArrow = document.getElementById("skin-left-arrow");
    skinRightArrow.setAttribute("onclick", "skinChangePage(true, 1)");
    skinLeftArrow.setAttribute("onclick", "skinChangePage(false, 1)");
    playBtn = document.getElementById("button-play");
    playAgBtn = document.getElementById("button-play-again");
    mMenuBtn = document.getElementById("button-main-menu");
    highQB = document.getElementById("button-quality-high");
    mediumQB = document.getElementById("button-quality-medium");
    lowQB = document.getElementById("button-quality-low");
    if (Language == "ES") window.changeLang(false, false);
    if (AdsTBM) window.removeAds(false);
    if (Text1TBM) document.getElementById("button-play-text").innerText = Text1TBM;
    window.changeQuality(currQuality == null ? 0.75 : currQuality);
    window.zoomValue = zoomValue ? Number(zoomValue) : 13;
    if (zoomHack == "True") window.zoomH(false);
    if (playBtn.className == "green") playBtn.setAttribute("class", "scr1ptButton");
    if (playAgBtn.className == "playagain green") playAgBtn.setAttribute("class", "playagain scr1ptButton");
    if (mMenuBtn.className == "mainmenu grey") mMenuBtn.setAttribute("class", "mainmenu scr1ptButton scr1ptButton-grey");
    highQB.setAttribute("onclick", "changeQuality(1);");
    highQB.setAttribute("class", highQB.className == "green" ? "scr1ptButton" : "scr1ptButton unselected");
    mediumQB.setAttribute("onclick", "changeQuality(0.75);");
    mediumQB.setAttribute("class", mediumQB.className == "green" ? "scr1ptButton" : "scr1ptButton unselected");
    lowQB.setAttribute("onclick", "changeQuality(0.5);");
    lowQB.setAttribute("class", lowQB.className == "green" ? "scr1ptButton" : "scr1ptButton unselected");
};

window.skinChangePage = function (next, cantidad) {
    if (!next) {
        if (cantidad >= 1) superhex.previousSkins();
        if (cantidad >= 2) superhex.previousSkins();
        if (cantidad >= 3) superhex.previousSkins();
        skinPag -= cantidad;
    } else {
        if (cantidad >= 1) superhex.nextSkins();
        if (cantidad >= 2) superhex.nextSkins();
        if (cantidad >= 3) superhex.nextSkins();
        skinPag += cantidad;
    }
};

window.changeSkin = function (ID) {
    currSkin = Number(localStorage.getItem("selectedSkin"));
    if (currSkin != ID) {
        if (ID <= 3) {
            if (skinPag == 2) window.skinChangePage(false, 1); else if (skinPag == 3) window.skinChangePage(false, 2);
        } else if (ID <= 7) {
            if (skinPag == 1) window.skinChangePage(true, 1); else if (skinPag == 3) window.skinChangePage(false, 1);
        } else if (ID <= 9) {
            if (skinPag == 2) window.skinChangePage(true, 1); else if (skinPag == 1) window.skinChangePage(true, 2);
        } else {
            alert(sTheSTxt);
            return;
        }
        superhex.selectSkin(ID);
        currSkin = ID;
        alert(sChangedTxt);
    } else alert(sAlreadyTxt);
};

window.changeQuality = function (qualityValue) {
    superhex.setQuality(qualityValue);
    currQuality = localStorage.getItem("quality");
    document.getElementById("btn2").innerText = Language == "ES" ? "Calidad personalizada" : "Custom Quality";
    if (currQuality != 1 && currQuality != 0.75 && currQuality != 0.5) {
        document.getElementById("btn2").setAttribute("class", "scr1ptButton");
        document.getElementById("btn2").innerText += " (" + currQuality.toString() + ")";
    } else document.getElementById("btn2").setAttribute("class", "scr1ptButton unselected");
};

window.removeAds = function (checkBox) {
    if (checkBox) {
        if (!document.getElementById("checkAdBlock").checked) { //Restore Ads
            localStorage.removeItem("AdsTBM");
            adsDeleted = true;
            alert(adsRestoredTxt);
        } else {
            localStorage.setItem("AdsTBM", true);
            if (!adsDeleted) window.rAds();
        }
    } else setTimeout(function () { window.rAds(); }, 400);
};

window.rAds = function () {
    superhex.clickPlay = superhex.aipComplete;
    superhex.clickPlayAgain = superhex.aipComplete;
    window.removeAdElement(document.getElementById("TKS_superhex-io_300x250"));
    window.removeAdElement(document.getElementById("respawn-ad"));
    window.removeAdElement(document.getElementsByClassName("curse-ad")[0]);
};

window.removeAdElement = function (elem) {
    elem.innerHTML = "";
    elem.setAttribute("style", "opacity: 0;");
};

document.onkeyup = function (e) {
    try {
        e = e || window.event;
        var key = e.which || e.keyCode;
        if (key === 49 && document.getElementById("leaderboard").getAttribute("style") != null || key === 97 && document.getElementById("leaderboard").getAttribute("style") != null)
        {
            document.getElementById("leaderboard").setAttribute("style", "display: " + (document.getElementById("leaderboard").getAttribute("style") == "display: block;" ? "none;" : "block;"));
        }
        if (key === 48 && document.getElementById("leaderboard").getAttribute("style") != null || key === 96 && document.getElementById("leaderboard").getAttribute("style") != null) {
            if (document.getElementById("leaderboard").getAttribute("style") == "display: block;") document.getElementById("leaderboard").setAttribute("style", "display: none;");
            if (document.getElementById("minimap").getAttribute("style") == "display: block;") document.getElementById("minimap").setAttribute("style", "display: none;");
            if (document.getElementById("friendsScores").getAttribute("style") == "display: block;") document.getElementById("friendsScores").setAttribute("style", "display: none;");
            if (document.getElementById("score").getAttribute("style") == "display: block;") document.getElementById("score").setAttribute("style", "display: none;"); else {
                document.getElementById("score").setAttribute("style", "display: block;");
                document.getElementById("minimap").setAttribute("style", "display: block;");
                document.getElementById("leaderboard").setAttribute("style", "display: block;");
                if (window.location.hash.length > 5 && window.location.hash.length < 8) document.getElementById("friendsScores").setAttribute("style", "display: block;");
            }
        }
        if (key === 50 || key === 98) document.getElementById("fps").setAttribute("style", "display: " + (document.getElementById("fps").getAttribute("style") == "display: block; color: white;" ? "none;" : "block; color: white;"));
    } catch (err) {
        console.error("Superhex.io Scr1pt onKeyUp Error: " + err);
    }
};

window.goGitHub = function () { window.open("https://github.com/TBM13/Superhex.io-Scr1pt"); };

window.goGreasyFork = function () { window.open("https://greasyfork.org/es/scripts/36071-superhex-io-scr1pt"); };

window.changeQ = function () {
    var QualityPrompt = Number(window.prompt(qChangeTxt));
    if (QualityPrompt > 2.7) alert(q27Txt);
    if (QualityPrompt < 0.1 && QualityPrompt > 0) alert(q01Txt);
    if (QualityPrompt.toString() == "NaN") alert(invalidValueTxt + qInvalidTxt); else {
        if (QualityPrompt === 0) return;
        window.changeQuality(QualityPrompt);
        alert(qChangedTxt + QualityPrompt);
    }
};

window.changeS = function () {
    var SkinPrompt = Number(window.prompt(sChangeTxt));
    if (SkinPrompt == 0) return;
    SkinPrompt--;
    superhex.nextSkins();
    superhex.previousSkins();
    var ChickenS2, TweetS2, CowS2, RedBirdS2, ElephantS2;
    if (localStorage.getItem("followClicked")) ChickenS2 = true;
    if (localStorage.getItem("tweetClicked")) TweetS2 = true;
    if (localStorage.getItem("likeClicked")) CowS2 = true;
    if (localStorage.getItem("subscribeClicked")) RedBirdS2 = true;
    if (localStorage.getItem("shareClicked")) ElephantS2 = true;
    if (SkinPrompt.toString() == "NaN") alert(sInvalidTxt); else if (SkinPrompt => 0) {
        if (SkinPrompt == 0) {
            if (!ChickenS2) localStorage.setItem("followClicked", 1);
            window.changeSkin(0);
            if (!ChickenS2) localStorage.removeItem("followClicked");
        } else if (SkinPrompt == 1) {
            if (!TweetS2) localStorage.setItem("tweetClicked", 1);
            window.changeSkin(SkinPrompt);
            if (!TweetS2) localStorage.removeItem("tweetClicked");
        } else if (SkinPrompt == 2) {
            if (!CowS2) localStorage.setItem("likeClicked", 1);
            window.changeSkin(SkinPrompt);
            if (!CowS2) localStorage.removeItem("likeClicked");
        } else if (SkinPrompt == 3) {
            if (!RedBirdS2) localStorage.setItem("subscribeClicked", 1);
            window.changeSkin(SkinPrompt);
            if (!RedBirdS2) localStorage.removeItem("subscribeClicked");
        } else if (SkinPrompt == 4) {
            if (!ElephantS2) localStorage.setItem("shareClicked", 1);
            window.changeSkin(SkinPrompt);
            if (!ElephantS2) localStorage.removeItem("shareClicked");
        } else {
            try {
                window.changeSkin(SkinPrompt);
            } catch (err) {
                console.error("Superhex.io Scr1pt - Change skin by ID Error (changeS()): " + err);
                alert(sErrorTxt);
            }
        }
    }
};

window.changeT1 = function () {
    var Text1Prompt = window.prompt(pTextTxt);
    if (Text1Prompt != null && Text1Prompt.length > 0) {
        if (Text1Prompt != "Play") localStorage.setItem("Text1TBM", Text1Prompt); else localStorage.removeItem("Text1TBM");
        document.getElementById("button-play-text").innerText = Text1Prompt;
    }
};

window.unlockSK = function () {
    if (localStorage.getItem("shareClicked") && localStorage.getItem("subscribeClicked") && localStorage.getItem("likeClicked") && localStorage.getItem("tweetClicked") && localStorage.getItem("followClicked")) alert(sUnlockekdTxt); else {
        var ChickenS = true, TweetS = true, CowS = true, RedBirdS = true, ElephantS = true;
        if (localStorage.getItem("followClicked")) ChickenS = false;
        if (localStorage.getItem("tweetClicked")) TweetS = false;
        if (localStorage.getItem("likeClicked")) CowS = false;
        if (localStorage.getItem("subscribeClicked")) RedBirdS = false;
        if (localStorage.getItem("shareClicked")) ElephantS = false;
        localStorage.setItem("shareClicked", 1);
        localStorage.setItem("subscribeClicked", 1);
        localStorage.setItem("likeClicked", 1);
        localStorage.setItem("tweetClicked", 1);
        localStorage.setItem("followClicked", 1);
        superhex.nextSkins();
        superhex.previousSkins();
        var msg = sUnlockedsTxt;
        if (ChickenS) msg += "\n" + sChickenTxt;
        if (TweetS) msg += "\n" + sBirdTxt;
        if (CowS) msg += "\n" + sCowTxt;
        if (RedBirdS) msg += "\n" + sBird2Txt;
        if (ElephantS) msg += "\n" + sElephantTxt;
        alert(msg);
    }
};

window.mkParty = function () {
    var partyPrompt = window.prompt(partyTxt);
    if (partyPrompt !== null && partyPrompt.length != 0) {
        if (partyPrompt.length < 5) alert(party5Txt); else if (partyPrompt.length > 6) alert(party6Txt); else {
            document.getElementById("create-party").style.display = "none";
            document.getElementById("in-party").style.display = "block";
            window.location.hash = partyPrompt;
            document.getElementById("party-share-link").value = "http://" + window.location.hostname + (window.location.port ? ":" + window.location.port : "") + window.location.pathname + "#" + partyPrompt;
        }
    }
};

window.zoomH = function (message) {
    if (zoomHack == "True" && message) {
        localStorage.removeItem("zoomTBM");
        Math.max = math_max_o;
    } else {
        Math.max = function (a, b) {
            return a == window.innerWidth / 40 / 2 / .75 && b == window.innerHeight / 40 / Math.sqrt(3) ? window.zoomValue : math_max_o(a, b);
        };
        if (message) localStorage.setItem("zoomTBM", "True");
        document.onmousewheel = function(e) {
            var delta;
            if (!e) e = window.event;
            if (e.wheelDelta) delta = e.wheelDelta / 60; else if (e.detail) delta = -e.detail / 2;

            var oldValue = window.zoomValue;
            if (delta !== null && delta > 0) {
               if (window.zoomValue < 60) window.zoomValue += window.zoomValue < 16 ? 1 : 2;
            } else {
               if (window.zoomValue > 5) window.zoomValue -= window.zoomValue < 16 ? 1 : 2;
            }

            if (oldValue != window.zoomValue) {
                window.dispatchEvent(new Event('resize'));
                localStorage.setItem("zoomValTBM", window.zoomValue);
            }
        };
    }
    zoomHack = localStorage.getItem("zoomTBM");
};

window.setZoomH = function () {
    var zoomHPrompt = window.prompt(zoomValueTxt);
    if (zoomHPrompt !== null && zoomHPrompt.length != 0) {
        zoomHPrompt = Number(zoomHPrompt);
        if (zoomHPrompt > 60) alert(zoomValueH); else if (zoomHPrompt < 5) alert(zoomValueL); else if (zoomHPrompt.toString() == "NaN") alert(invalidValueTxt); else {
            window.zoomValue = zoomHPrompt;
            localStorage.setItem("zoomValTBM", zoomHPrompt);
        }
    }
};

var scrText1 = document.createElement("h2");
scrText1.setAttribute("style", "color: white; position: fixed; top: 70px; left: 5px;");
scrText1.innerText = loadingScriptTxt;
document.getElementById("homepage").appendChild(scrText1);

var scrTextInfo = document.createElement("h4");
scrTextInfo.setAttribute("style", "color: white; position: fixed; top: 120px; left: 5px;");
scrTextInfo.innerText = loadingInfoTxt;
document.getElementById("homepage").appendChild(scrTextInfo);

window.mkGui = function() {
    scrTextInfo.remove();
    scrText1.innerText = "Superhex.io Scr1pt";

    var mainPanel = document.createElement("Div");
    mainPanel.setAttribute("style", "position: fixed; top: 130px; left: -4px; height:350px; width:170px;");
    mainPanel.setAttribute("class", "scr1ptPanel");
    mainPanel.setAttribute("id", "scr1ptPanel");
    document.getElementById("homepage").appendChild(mainPanel);

    var btn = document.createElement("Button");
    btn.setAttribute("style", "position: relative; top: 10px; left: 15px; height: 25px; width: 140px;");
    btn.setAttribute("class", "scr1ptButton scr1ptButton-gold");
    btn.setAttribute("type", "button");
    btn.setAttribute("id", "btn");
    btn.innerText = "GitHub";
    btn.setAttribute("onclick", "goGitHub();");
    mainPanel.appendChild(btn);

    var btn2 = document.createElement("Button");
    btn2.setAttribute("class", "scr1ptButton unselected");
    btn2.setAttribute("type", "button");
    btn2.setAttribute("id", "btn2");
    btn2.innerText = "Custom Quality";
    btn2.setAttribute("onclick", "changeQ();");
    document.getElementById("button-quality-high").parentElement.appendChild(btn2);

    var btnGF = document.createElement("Button");
    btnGF.setAttribute("style", "position: relative; top: 20px; left: 15px; height: 25px; width: 140px;");
    btnGF.setAttribute("class", "scr1ptButton scr1ptButton-gold");
    btnGF.setAttribute("type", "button");
    btnGF.setAttribute("id", "btnGF");
    btnGF.innerText = "Greasy Fork";
    btnGF.setAttribute("onclick", "goGreasyFork();");
    mainPanel.appendChild(btnGF);

    var btn3 = document.createElement("Button");
    btn3.setAttribute("style", "position: relative; top: 30px; left: 15px; height: 25px; width: 140px;");
    btn3.setAttribute("class", "scr1ptButton");
    btn3.setAttribute("type", "button");
    btn3.setAttribute("id", "btn3");
    btn3.innerText = "Set Skin (ID)";
    btn3.setAttribute("onclick", "changeS();");
    mainPanel.appendChild(btn3);

    var btn5 = document.createElement("Button");
    btn5.setAttribute("style", "position: relative; top: 40px; left: 15px; height: 25px; width: 140px;");
    btn5.setAttribute("class", "scr1ptButton");
    btn5.setAttribute("type", "button");
    btn5.setAttribute("id", "btn5");
    btn5.innerText = "Set Play button text";
    btn5.setAttribute("onclick", "changeT1();");
    mainPanel.appendChild(btn5);

    var btn6 = document.createElement("Button");
    btn6.setAttribute("style", "position: relative; top: 50px; left: 15px; height: 25px; width: 140px;");
    btn6.setAttribute("class", "scr1ptButton");
    btn6.setAttribute("type", "button");
    btn6.setAttribute("id", "btn6");
    btn6.innerText = "Unlock skins";
    btn6.setAttribute("onclick", "unlockSK();");
    mainPanel.appendChild(btn6);

    var btn8 = document.createElement("Button");
    btn8.setAttribute("style", "position: relative; top: 60px; left: 15px; height: 25px; width: 140px;");
    btn8.setAttribute("class", "scr1ptButton");
    btn8.setAttribute("type", "button");
    btn8.setAttribute("id", "btn8");
    btn8.innerText = "Create Party";
    btn8.setAttribute("onclick", "mkParty();");
    mainPanel.appendChild(btn8);

    var btn7 = document.createElement("Button");
    btn7.setAttribute("style", "position: relative; top: 70px; left: 15px; height: 25px; width: 140px;");
    btn7.setAttribute("class", "scr1ptButton");
    btn7.setAttribute("type", "button");
    btn7.setAttribute("id", "btn7");
    btn7.innerText = "Español (Spanish)";
    btn7.setAttribute("onclick", "changeLang(true, false);");
    mainPanel.appendChild(btn7);

    var versionText = document.createElement("h5");
    scrTextInfo.setAttribute("style", "color: rgba(255,255,255,0.6); position: absolute; bottom: -20px; right: 5px;");
    scrTextInfo.innerText = "v1.9.1";
    mainPanel.appendChild(scrTextInfo);

    var Check1 = document.createElement("INPUT");
    Check1.setAttribute("type", "checkbox");
    Check1.setAttribute("id", "checkAdBlock");
    Check1.setAttribute("style", "position: absolute; top: 260px; left: 15px;");
    Check1.setAttribute("onclick", "removeAds(true);");
    mainPanel.appendChild(Check1);

    Check1.checked = AdsTBM;

    var check1Text = document.createElement("h5");
    check1Text.setAttribute("style", "color: white; position: absolute; top: 240px; left: 35px;");
    check1Text.setAttribute("id", "check1Text");
    check1Text.innerText = "Remove ads";
    mainPanel.appendChild(check1Text);

    var Check2 = document.createElement("INPUT");
    Check2.setAttribute("type", "checkbox");
    Check2.setAttribute("id", "checkZoom");
    Check2.setAttribute("style", "position: absolute; top: 285px; left: 15px;");
    Check2.setAttribute("onclick", "zoomH(true);");
    mainPanel.appendChild(Check2);

    Check2.checked = zoomHack == "True";

    var check2Text = document.createElement("h5");
    check2Text.setAttribute("style", "color: white; position: absolute; top: 265px; left: 35px;");
    check2Text.setAttribute("id", "check2Text");
    check2Text.innerText = "Zoom Hack";
    mainPanel.appendChild(check2Text);

    var btnZHS = document.createElement("Button");
    btnZHS.setAttribute("style", "position: absolute; top: 286px; left: 130px; height: 16px; width: 16px;");
    btnZHS.setAttribute("class", "scr1ptButton");
    btnZHS.innerHTML = "<img src='https://lh3.googleusercontent.com/Abm4DjvPOP55GK2MCe9gYh8M1ZJa7ws71oXcW2q6Rl1pQXIQ_bUcVxbN5vZ8_6pmP248O-uQEN2fUxq-xzFlzefdXyEBakvzEgGKzIwSkcdSBHdM2PwtgpgXbMvbP_N7FSI4BYIujg=s16-no' style='position: absolute; left: 0px; top: 0px;'/>";
    btnZHS.setAttribute("type", "button");
    btnZHS.setAttribute("id", "btnZHS");
    btnZHS.setAttribute("onclick", "setZoomH();");
    mainPanel.appendChild(btnZHS);

    var hotkeysPanel = document.createElement("Div");
    hotkeysPanel.setAttribute("style", "position: fixed; bottom: -4px; right: -4px; height:150px; width:300px;");
    hotkeysPanel.setAttribute("class", "scr1ptPanel");
    hotkeysPanel.setAttribute("id", "scr1ptPanel");
    document.getElementById("homepage").appendChild(hotkeysPanel);

    var scrText2 = document.createElement("h4");
    scrText2.setAttribute("style", "color: white; position: relative; left: 10px;");
    scrText2.setAttribute("id", "scrText2");
    scrText2.innerText = keyActionsTxt;
    hotkeysPanel.appendChild(scrText2);
};
