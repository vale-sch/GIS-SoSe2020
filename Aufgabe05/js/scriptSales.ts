namespace Abgabe05 {
    //Attribute erstellen
    interface Artikel {
        showMe: boolean;
        image: string;
        titel: string;
        ablum: string;
        interpret: string;
        audio: string;
        preis: number;
    }

    //Artikel Musik Sale
    let artikel01: Artikel = {
        showMe: true,
        image: "Pictures/2.png",
        titel: "Titel: B.A.X",
        ablum: "Album: SC2019",
        interpret: "Interpret: Pongour Falls",
        preis: 2.49,
        audio: "music/1.m4a"
    };
    let artikel02: Artikel = {
        showMe: true,
        image: "Pictures/4.png",
        titel: "Titel: Dagger",
        ablum: "Album: Cloak & Degger",
        interpret: "Interpret: OC&Verde",
        preis: 0.99,
        audio: "music/2.m4a"

    };
    let artikel03: Artikel = {
        showMe: true,
        image: "Pictures/6.png",
        titel: "Titel: Fades (Original Mix)",
        ablum: "Album: Muse EP",
        interpret: "Interpret: Julian Wassermann",
        preis: 1.49,
        audio: "music/3.m4a"
    };
    let artikel04: Artikel = {
        showMe: true,
        image: "Pictures/8.png",
        titel: "Titel: Hangdrum (Extended Mix)",
        ablum: "Album: Hangdrum /Dust",
        interpret: "Interpret: Robin M.",
        preis: 1.99,
        audio: "music/4.m4a"
    };
    let artikel05: Artikel = {
        showMe: true,
        image: "Pictures/10.png",
        titel: "Titel: Jado (Original Mix)",
        ablum: "Album: Jado",
        interpret: "Interpret: 8Kays, Posting",
        audio: "music/5.m4a",
        preis: 0.49
    };
    let artikel06: Artikel = {
        showMe: true,
        image: "Pictures/12.png",
        titel: "Titel: La Nuit Sans Fin",
        ablum: "Album: La Nuit Sans Fin",
        interpret: "Interpret: Bodaishin",
        audio: "music/6.m4a",
        preis: 1.49
    };
    let artikel07: Artikel = {
        showMe: true,
        image: "Pictures/14.png",
        titel: "Titel: Nature",
        ablum: "ALbum: 1948",
        interpret: "Interpret: Sergio Sanchez",
        audio: "music/7.m4a",
        preis: 0.99
    };
    let artikel08: Artikel = {
        showMe: true,
        image: "Pictures/16.png",
        titel: "Titel: Sagna (Original Mix)",
        ablum: "Album: Versoria EP",
        interpret: "Interpret: Stephan Jolk",
        audio: "music/8.m4a",
        preis: 1.49
    };
    let artikel09: Artikel = {
        showMe: true,
        image: "Pictures/18.png",
        titel: "Titel: Olson (Original Mix)",
        ablum: "Album: Reunion",
        interpret: "Interpret: Fejka",
        audio: "music/9.m4a",
        preis: 1.99
    };
    let artikel10: Artikel = {
        showMe: true,
        image: "Pictures/20.png",
        titel: "Titel: Wahah",
        ablum: "Album: Wahah EP",
        interpret: "Interpret: Doctor Dru",
        audio: "music/10.m4a",
        preis: 0.99
    };
    let artikel11: Artikel = {
        showMe: true,
        image: "Pictures/22.png",
        titel: "Titel: Oppression",
        ablum: "Album: Oppression",
        interpret: "Interpret: Several Definitions",
        audio: "music/11.m4a",
        preis: 2.99
    };
    let artikel12: Artikel = {
        showMe: true,
        image: "Pictures/24.png",
        titel: "Titel: Oasis (Timo Maas 2020 Remix)",
        ablum: "Album: Oasis EP",
        interpret: "Interpret: Peter Dundov",
        audio: "music/12.m4a",
        preis: 1.49
    };

    //alle Artikel aus dem Sale
    const allSales: Artikel[] = [artikel01, artikel02, artikel03, artikel04, artikel05, artikel06, artikel07, artikel08, artikel09, artikel10, artikel11, artikel12];
  

    generateTags();
    function generateTags(): void {
        
        for (let index: number = 0; index < allSales.length; index++) {
            
            //Inhalte festlegen
            let img: HTMLElement = document.createElement("img");
            img.setAttribute("src", allSales[index].image);
            img.setAttribute("alt", "Music Covers");
            let div: HTMLElement = document.createElement("div");
            div.setAttribute("class", "music");
            let pTitel: HTMLElement = document.createElement("p");
            pTitel.setAttribute("class", "text");
            let pAlbum: HTMLElement = document.createElement("p");
            pAlbum.setAttribute("class", "text");
            let pInterpret: HTMLElement = document.createElement("p");
            pInterpret.setAttribute("class", "text");
            let pPrice: HTMLElement = document.createElement("p");
            pPrice.setAttribute("class", "text");
            let button: HTMLElement = document.createElement("a");
            button.setAttribute("title", "Ab in den Warenkorb!");
            button.setAttribute("href", "https://vale-sch.github.io/GIS-SoSe2020/Aufgabe04/Warenkorb.htm");
            button.setAttribute("class", "fas fa-shopping-basket");
            let audio: HTMLElement = document.createElement("audio");
            audio.setAttribute("controls", "");
            audio.setAttribute("src", allSales[index].audio);
            audio.setAttribute("class", "pAudio");
            audio.setAttribute("alt", "Audio Lines");
            
            
            //Inhalte generieren
            document.getElementById("masterSales")?.appendChild(div);
            div.appendChild(img);
            div.appendChild(button).innerHTML = "Preis: " + allSales[index].preis + "€";
            div.appendChild(pTitel).innerHTML = allSales[index].titel;
            div.appendChild(pAlbum).innerHTML = allSales[index].ablum;
            div.appendChild(pInterpret).innerHTML = allSales[index].interpret;
            div.appendChild(audio).innerHTML = allSales[index].audio;

        }
    }
}