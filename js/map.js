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
    
    map.addChild(new YMapDefaultSchemeLayer());
    map.addChild(new YMapDefaultFeaturesLayer());

    // Данные для маркеров
    const warehouses = [
        {
            coordinates: [37.381105, 56.000201],
            title: "Шереметьево",
            image: "img/Sheremetyevo/main.webp",
            prices: [
                {
                    type: "Light Industrial в продаже:",
                    area: "82 308 м²",
                    price: "132 000 руб./м²"
                },
                {
                    type: "BigBox в продаже:",
                    area: "122 135 м²",
                    price: "96 000 руб./м²"
                }
            ],
            link: "objects/sheremetyevo.html"
        },
        {
            coordinates: [37.833614, 55.828820],
            title: "Абрамцево",
            image: "img/Abramcevo/main.jpg",
            prices: [
                {
                    type: "Light Industrial в продаже:",
                    area: "69 264 м²",
                    price: "184 800 руб./м²"
                }
            ],
            link: "objects/abramcevo.html"
        },
        {
            coordinates: [38.339922, 55.423288],
            title: "Альфа Light",
            image: "img/Alfalight/main.webp",
            prices: [
                {
                    type: "Light Industrial в продаже:",
                    area: "9 000 м²",
                    price: "132 000 руб./м²"
                }
            ],
            link: "objects/alfalight.html"
        },
        {
            coordinates: [37.894972, 55.075188],
            title: "Ольховка",
            image: "img/Olhovka/main.jpg",
            prices: [
                {
                    type: "Light Industrial в продаже:",
                    area: "39 962 м²",
                    price: "132 000 руб./м²"
                },
                {
                    type: "BigBox в продаже:",
                    area: "43 289 м²",
                    price: "96 000 руб./м²"
                }
            ],
            link: "objects/olhovka.html"
        }
    ];

    // Функция для создания маркера
    function createWarehouseMarker(warehouse) {
        const markerElement = document.createElement('div');
        markerElement.className = 'warehouse-marker';
        
        markerElement.innerHTML = `
            <a href="${warehouse.link}">
                <div class="warehouse-price">${warehouse.title}</div>
            </a>
            <div class="warehouse-tooltip">
                <div class="warehouse-tooltip-content">
                    <a href="${warehouse.link}"><img src="${warehouse.image}" alt="${warehouse.title}"></a>
                    <h3>${warehouse.title}</h3>
                    <div class="price-block">
                        ${warehouse.prices.map(price => `
                            <div class="price-item">
                                <span class="price-type">${price.type}</span><br>
                                ${price.area}<br>
                                <span class="price-value">${price.price}</span> в т.ч. НДС
                            </div>
                        `).join('')}
                    </div>
                    <a href="${warehouse.link}" class="btn btn--primary">Подробнее</a>
                </div>
            </div>
        `;
        
        const marker = new YMapMarker({ coordinates: warehouse.coordinates }, markerElement);
        return marker;
    }

    // Добавляем маркеры
    warehouses.forEach(warehouse => {
        map.addChild(createWarehouseMarker(warehouse));
    });
}

initMap();
