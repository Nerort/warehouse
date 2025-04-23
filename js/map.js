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
    function createWarehouseMarker(coordinates, price, site) {
        const markerElement = document.createElement('div');
        markerElement.className = 'warehouse-marker';
        
        markerElement.innerHTML = `
            <a href="https://nerort.github.io/warehouse/objects/${site}">
            <div class="warehouse-price">${price}</div>
            </a>
        `;
        
        const marker = new YMapMarker({ coordinates }, markerElement);
        return marker;
    }

    // Добавляем 4 маркера складов
    map.addChild(createWarehouseMarker(
        [37.381105, 56.000201], 
        '112,3 Га',
        'warehousepres.pdf'
    ));

    map.addChild(createWarehouseMarker(
        [37.833614, 55.828820], 
        '16,7 Га',
        'warehousepres.pdf'
    ));
    
    map.addChild(createWarehouseMarker(
        [38.339922, 55.423288], 
        '2 Га',
        'warehousepres.pdf'
    ));
    
    map.addChild(createWarehouseMarker(
        [37.894972, 55.075188], 
        '21 Га',
        'warehousepres.pdf'
    ));
}

initMap();
