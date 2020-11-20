document.querySelector('#formBox').onsubmit = function(e){
    e.preventDefault();
    var allPrice = 0;
    //Procesor
    var procesor = this.querySelector('#procesor').value;
    var procesorPrice = parseInt(this.querySelector('#procesor').selectedOptions[0].dataset.price);
    var box = this.querySelector('#box');
    var oem = this.querySelector('#oem');
    allPrice += procesorPrice;
    
    if(box.checked)
    {
        document.querySelector('#procesorTable').innerHTML = procesor +  " " + box.value;
        document.querySelector('#procesorPriceTable').innerHTML = procesorPrice + ' zł';
    }
    else if(oem.checked)
    {
        document.querySelector('#procesorTable').innerHTML = procesor +  " " + oem.value;
        document.querySelector('#procesorPriceTable').innerHTML = procesorPrice + ' zł';
    }
    //Pamięć RAM
    var ram = this.querySelector('#ram').value; 
    var cena = this.querySelector('#cena');
    var ramPrice = parseInt(this.querySelector('#cena').dataset.price);
    var cena2 = this.querySelector('#cena2');
    var ramPrice2 = parseInt(this.querySelector('#cena2').dataset.price);
    var cena3 = this.querySelector('#cena3');
    var ramPrice3 = parseInt(this.querySelector('#cena3').dataset.price);
    if(cena.checked)
    {
        document.querySelector('#ramTable').innerHTML = ram + ' ' + cena.value + 'GB';
        document.querySelector('#ramPriceTable').innerHTML = ramPrice + ' zł';
        allPrice += ramPrice;
    }
    else if(cena2.checked)
    {
        document.querySelector('#ramTable').innerHTML = ram + ' ' + cena2.value + 'GB';
        document.querySelector('#ramPriceTable').innerHTML = ramPrice2 + ' zł';
        allPrice += ramPrice2;
    }
    else if(cena3.checked)
    {
        document.querySelector('#ramTable').innerHTML = ram + ' ' + cena3.value + 'GB';
        document.querySelector('#ramPriceTable').innerHTML = ramPrice3 + ' zł';
        allPrice += ramPrice3;
    }
    //Płyta główna
    var plytaGlowna = this.querySelector('#plytaGlowna').value;
    var plytaGlownaPrice = parseInt(this.querySelector('#plytaGlowna').selectedOptions[0].dataset.price);
    document.querySelector('#plytaGlownaTable').innerHTML = plytaGlowna;
    document.querySelector('#plytaGlownaPriceTable').innerHTML = plytaGlownaPrice + ' zł';
    allPrice += plytaGlownaPrice;
    //Karta graficzna
    var kartaGraficzna = this.querySelector('#kartaGraficzna').value;
    var kartaGraficznaPrice = parseInt(this.querySelector('#kartaGraficzna').selectedOptions[0].dataset.price);
    document.querySelector('#kartaGraficznaTable').innerHTML = kartaGraficzna;
    document.querySelector('#kartaGraficznaPriceTable').innerHTML = kartaGraficznaPrice + ' zł';
    allPrice += kartaGraficznaPrice;
    //Zasilacz
    var zasilacz = this.querySelector('#zasilacz').value;
    var zasilaczPrice = parseInt(this.querySelector('#zasilacz').selectedOptions[0].dataset.price);
    document.querySelector('#zasilaczTable').innerHTML = zasilacz;
    document.querySelector('#zasilaczPriceTable').innerHTML = zasilaczPrice + ' zł';
    allPrice += zasilaczPrice;
    //Obudowa
    var obudowa = this.querySelector('#obudowa').value;
    var obudowaPrice = parseInt(this.querySelector('#obudowa').selectedOptions[0].dataset.price);
    document.querySelector('#obudowaTable').innerHTML = obudowa;
    document.querySelector('#obudowaPriceTable').innerHTML = obudowaPrice + ' zł';
    allPrice += obudowaPrice;
    //HDD
    var dyskHDD = this.querySelector('#dyskHDD').value;
    var dyskHDDPrice = parseInt(this.querySelector('#dyskHDD').selectedOptions[0].dataset.price);
    document.querySelector('#hddTable').innerHTML = dyskHDD;
    document.querySelector('#hddPriceTable').innerHTML = dyskHDDPrice + ' zł';
    allPrice += dyskHDDPrice;
    //SSD
    var dyskSSD = this.querySelector('#dyskSSD').value;
    var dyksSSDPrice = parseInt(this.querySelector('#dyskSSD').selectedOptions[0].dataset.price);
    document.querySelector('#ssdTable').innerHTML = dyskSSD;
    document.querySelector('#ssdPriceTable').innerHTML = dyksSSDPrice + ' zł';
    allPrice += dyksSSDPrice;
    //Chłodzenie procesora
    var chlodzenie = this.querySelector('#chlodzenie').value;
    var chlodzeniePrice = parseInt(this.querySelector('#chlodzenie').selectedOptions[0].dataset.price);
    document.querySelector('#coolerTable').innerHTML = chlodzenie;
    document.querySelector('#coolerPriceTable').innerHTML = chlodzeniePrice + ' zł';
    allPrice += chlodzeniePrice;
    //Dodatkowe Elementy
    var kolor = this.querySelector('#color');
    console.log(kolor.value);
    var klawiatura = this.querySelector('#klawiatura').value;
    var klawiaturaCheck = this.querySelector('#klawiatura');
    var klawiaturaPrice = parseInt(this.querySelector('#klawiatura').dataset.price);
    if(klawiaturaCheck.checked)
    {
        document.querySelector('#klawiaturaTable').innerHTML = klawiatura;
        document.querySelector('#klawiaturaPriceTable').innerHTML = klawiaturaPrice + 'zł';
        allPrice += klawiaturaPrice;
    }
    else 
    {
        document.querySelector('#klawiaturaTable').innerHTML = '-----';
        document.querySelector('#klawiaturaPriceTable').innerHTML = '-----';
    }
    var myszka = this.querySelector('#myszka').value;
    var myszkaPrice = parseInt(this.querySelector('#myszka').dataset.price);
    var myszkaCheck = this.querySelector('#myszka');
    if(myszkaCheck.checked) 
    {
        document.querySelector('#myszkaTable').innerHTML = myszka;
        document.querySelector('#myszkaPriceTable').innerHTML = myszkaPrice + 'zł';
        allPrice += myszkaPrice;
    }
    else
    {
        document.querySelector('#myszkaTable').innerHTML = '-----';
        document.querySelector('#myszkaPriceTable').innerHTML = '-----';
    }
    //Cena
    var allPriceTable = document.querySelector('#allPriceTable').innerHTML = allPrice + 'zł';
    //Dodatkowe informacje 
    var info = this.querySelector('#info').value;
    var infoContent = document.querySelector('#infoContent').innerHTML = info;
    //Data dostawy
    var dataDostawy = this.querySelector('#data').value;
    var dataDostawyInfo = document.querySelector('#dataDostawyInfo').innerHTML = dataDostawy;
    //Rgb
    var color = this.querySelector('#color').value;
    var td = document.querySelectorAll('td');
    var th = document.querySelectorAll('th');
    for(var i = 0; i < td.length; i++)
    {
        td[i].style.borderColor = color;
    }
    for(var i = 0; i < th.length; i++)
    {
        th[i].style.borderColor = color;
    }




}


    
