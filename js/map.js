async function initMap() {
    await ymaps3.ready;

    const {YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker} = ymaps3;

    const map = new YMap(
        document.getElementById('map'),
        {
            location: {
                center: [37.754404, 55.507866],
                zoom: 8
            }
        }
    );
    
    // Добавляем обязательные слои
    map.addChild(new YMapDefaultSchemeLayer());
    map.addChild(new YMapDefaultFeaturesLayer());

    // Функция для создания маркера
    function createWarehouseMarker(coordinates, title, price, site, color = '#2196f3') {
        const markerElement = document.createElement('div');
        markerElement.className = 'warehouse-marker';
        markerElement.style.backgroundColor = color;
        
        markerElement.innerHTML = `
            <a href="warehouse/objects/${site}">
            <div class="warehouse-icon">🏭</div>
            <div class="warehouse-title">${title}</div>
            <div class="warehouse-price">${price}</div>
            </a>
        `;
        console.log('Marker color:', color);
        
        const marker = new YMapMarker({ coordinates }, markerElement);
        return marker;
    }

    // Добавляем 4 маркера складов
    map.addChild(createWarehouseMarker(
        [37.381105, 56.000201], 
        'Шереметьево', 
        '112,3 Га',
        'sheremetyevo.html'
    ));

    map.addChild(createWarehouseMarker(
        [37.833614, 55.828820], 
        'Абрамцево', 
        '16,7 Га',
        'abramcevo.html'
    ));
    
    map.addChild(createWarehouseMarker(
        [38.339922, 55.423288], 
        'АльфаLight', 
        '2 Га',
        'alfalight.html',
        '#2196f3' // Синий
    ));
    
    map.addChild(createWarehouseMarker(
        [37.894972, 55.075188], 
        'Ольховка', 
        '21 Га',
        'olhovka.html'
    ));
}

initMap();
