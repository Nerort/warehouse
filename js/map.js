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
            link: "objects/sheremetyevo.html",
            tooltipPosition: "top"
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
            link: "objects/abramcevo.html",
            tooltipPosition: "top"
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
            link: "objects/alfalight.html",
            tooltipPosition: "top"
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
            link: "objects/olhovka.html",
            tooltipPosition: "top"
        }
    ];

    function createWarehouseMarker(warehouse) {
        const markerElement = document.createElement('div');
        markerElement.className = 'warehouse-marker-container';
        
        markerElement.innerHTML = `
            <div class="warehouse-marker">
                <a href="${warehouse.link}" class="marker-link">
                    <div class="warehouse-price">${warehouse.title}</div>
                </a>
            </div>
            <div class="warehouse-tooltip ${warehouse.tooltipPosition === 'bottom' ? 'tooltip-bottom' : ''}">
                <div class="warehouse-tooltip-content">
                    <a href="${warehouse.link}"><img src="${warehouse.image}" alt="${warehouse.title}"></a>
                    <h3 class="tooltip-title">${warehouse.title}</h3>
                    <div class="tooltip-prices">
                        ${warehouse.prices.map(price => `
                            <div class="tooltip-price-row">
                                <div class="tooltip-price-info">
                                    <span class="tooltip-price-type">${price.type}</span>
                                    <div class="tooltip-price-details">
                                        <span class="tooltip-price-area">${price.area}</span>
                                        <span class="tooltip-price-value">${price.price}</span>
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                    <a href="${warehouse.link}" class="btn btn--primary btn--small">Подробнее</a>
                </div>
            </div>
        `;
        
        const marker = new YMapMarker({ coordinates: warehouse.coordinates }, markerElement);
        
        // Добавляем обработчики наведения
        const markerLink = markerElement.querySelector('.marker-link');
        let hoverTimeout;
        
        markerLink.addEventListener('mouseenter', () => {
            // Задержка перед центрированием (200ms)
            hoverTimeout = setTimeout(() => {
                const offsetY = 0.32;
                const centeredCoords = [
                warehouse.coordinates[0],
                warehouse.coordinates[1] + offsetY
            ];
                
                map.setLocation({
                    center: centeredCoords,
                    duration: 300 // Плавная анимация 300ms
                });
            }, 150);
        });
        
        markerLink.addEventListener('mouseleave', () => {
            // Отменяем центрирование если курсор ушел до истечения задержки
            clearTimeout(hoverTimeout);
        });
        
        return marker;
    }

    // Добавляем все маркеры на карту
    warehouses.forEach(warehouse => {
        map.addChild(createWarehouseMarker(warehouse));
    });
}

initMap();
