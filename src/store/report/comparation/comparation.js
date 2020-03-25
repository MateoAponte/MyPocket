const state = {
    dateCategories: [],
    mainDateCategories: [],
    xyChartData: [
        {
            "thing": "Trabajo",
            "cost": "2500000",
            "date": "2020/03/23",
            "percent": "8",
            "iconData": {
                "category": 'Trabajo',
                "iconName": 'mouse-pointer',
                "class": '#07D6BD',
                'prefix': 'fas',
                'type': 'earning'
            }
        }, {
            "thing": "Cadenas",
            "cost": "850000",
            "date": "2020/03/01",
            "percent": "2",
            "iconData": {
                "category": 'Cadenas',
                "iconName": 'money-check-alt',
                "class": '#DC90EE',
                'prefix': 'fas',
                'type': 'earning'
            }
        },
        {
            "thing": "Universidad",
            "cost": "500000",
            "priority": "Alta",
            "date": "2020/03/05",
            "iconData": {
                "category": 'Tecnología',
                "iconName": 'mobile-alt',
                "class": '#BE4BDB',
                'prefix': 'fas',
                'type': 'expense'
            }
        }, {
            "thing": "Celular",
            "cost": "250000",
            "priority": "Alta",
            "date": "2020/03/15",
            "iconData": {
                "category": 'Banco & Transacciones',
                "iconName": 'money-bill-wave',
                "class": '#12BB85',
                'prefix': 'fas',
                'type': 'expense'
            }
        }, {
            "thing": "Bicicleta",
            "cost": "167000",
            "priority": "Alta",
            "date": "2020/03/18",
            "iconData": {
                "category": 'Banco & Transacciones',
                "iconName": 'money-bill-wave',
                "class": '#12BB85',
                'prefix': 'fas',
                'type': 'expense'
            }
        }, {
            "thing": "Comida",
            "cost": "100000",
            "priority": "Media",
            "date": "2020/03/20",
            "iconData": {
                "category": 'Comida',
                "iconName": 'utensils',
                "class": '#FD7E14',
                'prefix': 'fas',
                'type': 'expense'
            }
        }, {
            "thing": "Transporte",
            "cost": "80000",
            "priority": "Media",
            "date": "2020/03/24",
            "iconData": {
                "category": 'Viajes',
                "iconName": 'plane',
                "class": '#F963A0',
                'prefix': 'fas',
                'type': 'expense'
            }
        }, {
            "thing": "Canastas",
            "cost": "300000",
            "priority": "Alta",
            "date": "2020/03/25",
            "iconData": {
                "category": 'Comida',
                "iconName": 'utensils',
                "class": '#FD7E14',
                'prefix': 'fas',
                'type': 'expense'
            }
        }, {
            "thing": "Instituto",
            "cost": "150000",
            "priority": "Alta",
            "date": "2020/03/27",
            "iconData": {
                "category": 'Banco & Transacciones',
                "iconName": 'money-bill-wave',
                "class": '#12BB85',
                'prefix': 'fas',
                'type': 'expense'
            }
        }, {
            "thing": "Otros",
            "cost": "50000",
            "priority": "Baja",
            "date": "2020/03/28",
            "iconData": {
                "category": 'Comida',
                "iconName": 'utensils',
                "class": '#FD7E14',
                'prefix': 'fas',
                'type': 'expense'
            }
        }, {
            "thing": "Audifonos (Balaca)",
            "cost": "80000",
            "priority": "Media",
            "date": "2020/03/30",
            "iconData": {
                "category": 'Tecnología',
                "iconName": 'mobile-alt',
                "class": '#BE4BDB',
                'prefix': 'fas',
                'type': 'expense'
            }
        }, {
            "thing": "Audifonos (Balaca)",
            "cost": "80000",
            "priority": "Media",
            "date": "2020/03/31",
            "iconData": {
                "category": 'Moda',
                "iconName": 'tshirt',
                "class": '#4C6EF5',
                'prefix': 'fas',
                'type': 'expense'
            }
        },
        {
            "thing": "Trabajo",
            "cost": "2500000",
            "date": "2020/04/23",
            "percent": "8",
            "iconData": {
                "category": 'Trabajo',
                "iconName": 'mouse-pointer',
                "class": '#07D6BD',
                'prefix': 'fas',
                'type': 'earning'
            }
        }, {
            "thing": "Cadenas",
            "cost": "850000",
            "date": "2020/04/01",
            "percent": "2",
            "iconData": {
                "category": 'Cadenas',
                "iconName": 'money-check-alt',
                "class": '#DC90EE',
                'prefix': 'fas',
                'type': 'earning'
            }
        },
        {
            "thing": "Universidad",
            "cost": "500000",
            "priority": "Alta",
            "date": "2020/04/05",
            "iconData": {
                "category": 'Tecnología',
                "iconName": 'mobile-alt',
                "class": '#BE4BDB',
                'prefix': 'fas',
                'type': 'expense'
            }
        }, {
            "thing": "Celular",
            "cost": "250000",
            "priority": "Alta",
            "date": "2020/04/15",
            "iconData": {
                "category": 'Banco & Transacciones',
                "iconName": 'money-bill-wave',
                "class": '#12BB85',
                'prefix': 'fas',
                'type': 'expense'
            }
        }, {
            "thing": "Bicicleta",
            "cost": "167000",
            "priority": "Alta",
            "date": "2020/04/18",
            "iconData": {
                "category": 'Banco & Transacciones',
                "iconName": 'money-bill-wave',
                "class": '#12BB85',
                'prefix': 'fas',
                'type': 'expense'
            }
        }, {
            "thing": "Comida",
            "cost": "100000",
            "priority": "Media",
            "date": "2020/04/20",
            "iconData": {
                "category": 'Comida',
                "iconName": 'utensils',
                "class": '#FD7E14',
                'prefix': 'fas',
                'type': 'expense'
            }
        }, {
            "thing": "Transporte",
            "cost": "80000",
            "priority": "Media",
            "date": "2020/04/24",
            "iconData": {
                "category": 'Viajes',
                "iconName": 'plane',
                "class": '#F963A0',
                'prefix': 'fas',
                'type': 'expense'
            }
        }, {
            "thing": "Canastas",
            "cost": "300000",
            "priority": "Alta",
            "date": "2020/04/25",
            "iconData": {
                "category": 'Comida',
                "iconName": 'utensils',
                "class": '#FD7E14',
                'prefix': 'fas',
                'type': 'expense'
            }
        }, {
            "thing": "Instituto",
            "cost": "150000",
            "priority": "Alta",
            "date": "2020/04/27",
            "iconData": {
                "category": 'Banco & Transacciones',
                "iconName": 'money-bill-wave',
                "class": '#12BB85',
                'prefix': 'fas',
                'type': 'expense'
            }
        }, {
            "thing": "Otros",
            "cost": "50000",
            "priority": "Baja",
            "date": "2020/04/28",
            "iconData": {
                "category": 'Comida',
                "iconName": 'utensils',
                "class": '#FD7E14',
                'prefix': 'fas',
                'type': 'expense'
            }
        }, {
            "thing": "Audifonos (Balaca)",
            "cost": "80000",
            "priority": "Media",
            "date": "2020/04/30",
            "iconData": {
                "category": 'Tecnología',
                "iconName": 'mobile-alt',
                "class": '#BE4BDB',
                'prefix': 'fas',
                'type': 'expense'
            }
        }, {
            "thing": "Audifonos (Balaca)",
            "cost": "80000",
            "priority": "Media",
            "date": "2020/04/31",
            "iconData": {
                "category": 'Moda',
                "iconName": 'tshirt',
                "class": '#4C6EF5',
                'prefix': 'fas',
                'type': 'expense'
            }
        },
        {
            "thing": "Trabajo",
            "cost": "2500000",
            "date": "2020/05/23",
            "percent": "8",
            "iconData": {
                "category": 'Trabajo',
                "iconName": 'mouse-pointer',
                "class": '#07D6BD',
                'prefix': 'fas',
                'type': 'earning'
            }
        }, {
            "thing": "Cadenas",
            "cost": "850000",
            "date": "2020/05/01",
            "percent": "2",
            "iconData": {
                "category": 'Cadenas',
                "iconName": 'money-check-alt',
                "class": '#DC90EE',
                'prefix': 'fas',
                'type': 'earning'
            }
        },
        {
            "thing": "Universidad",
            "cost": "500000",
            "priority": "Alta",
            "date": "2020/05/05",
            "iconData": {
                "category": 'Tecnología',
                "iconName": 'mobile-alt',
                "class": '#BE4BDB',
                'prefix': 'fas',
                'type': 'expense'
            }
        }, {
            "thing": "Celular",
            "cost": "250000",
            "priority": "Alta",
            "date": "2020/05/15",
            "iconData": {
                "category": 'Banco & Transacciones',
                "iconName": 'money-bill-wave',
                "class": '#12BB85',
                'prefix': 'fas',
                'type': 'expense'
            }
        }, {
            "thing": "Bicicleta",
            "cost": "167000",
            "priority": "Alta",
            "date": "2020/05/18",
            "iconData": {
                "category": 'Banco & Transacciones',
                "iconName": 'money-bill-wave',
                "class": '#12BB85',
                'prefix': 'fas',
                'type': 'expense'
            }
        }, {
            "thing": "Comida",
            "cost": "100000",
            "priority": "Media",
            "date": "2020/05/20",
            "iconData": {
                "category": 'Comida',
                "iconName": 'utensils',
                "class": '#FD7E14',
                'prefix': 'fas',
                'type': 'expense'
            }
        }, {
            "thing": "Transporte",
            "cost": "80000",
            "priority": "Media",
            "date": "2020/05/24",
            "iconData": {
                "category": 'Viajes',
                "iconName": 'plane',
                "class": '#F963A0',
                'prefix': 'fas',
                'type': 'expense'
            }
        }, {
            "thing": "Canastas",
            "cost": "300000",
            "priority": "Alta",
            "date": "2020/05/25",
            "iconData": {
                "category": 'Comida',
                "iconName": 'utensils',
                "class": '#FD7E14',
                'prefix': 'fas',
                'type': 'expense'
            }
        }, {
            "thing": "Instituto",
            "cost": "150000",
            "priority": "Alta",
            "date": "2020/05/27",
            "iconData": {
                "category": 'Banco & Transacciones',
                "iconName": 'money-bill-wave',
                "class": '#12BB85',
                'prefix': 'fas',
                'type': 'expense'
            }
        }, {
            "thing": "Otros",
            "cost": "50000",
            "priority": "Baja",
            "date": "2020/05/28",
            "iconData": {
                "category": 'Comida',
                "iconName": 'utensils',
                "class": '#FD7E14',
                'prefix': 'fas',
                'type': 'expense'
            }
        }, {
            "thing": "Audifonos (Balaca)",
            "cost": "80000",
            "priority": "Media",
            "date": "2020/05/30",
            "iconData": {
                "category": 'Tecnología',
                "iconName": 'mobile-alt',
                "class": '#BE4BDB',
                'prefix': 'fas',
                'type': 'expense'
            }
        }, {
            "thing": "Audifonos (Balaca)",
            "cost": "80000",
            "priority": "Media",
            "date": "2020/05/31",
            "iconData": {
                "category": 'Moda',
                "iconName": 'tshirt',
                "class": '#4C6EF5',
                'prefix': 'fas',
                'type': 'expense'
            }
        },
        {
            "thing": "Trabajo",
            "cost": "2500000",
            "date": "2020/06/23",
            "percent": "8",
            "iconData": {
                "category": 'Trabajo',
                "iconName": 'mouse-pointer',
                "class": '#07D6BD',
                'prefix': 'fas',
                'type': 'earning'
            }
        }, {
            "thing": "Cadenas",
            "cost": "850000",
            "date": "2020/06/01",
            "percent": "2",
            "iconData": {
                "category": 'Cadenas',
                "iconName": 'money-check-alt',
                "class": '#DC90EE',
                'prefix': 'fas',
                'type': 'earning'
            }
        },
        {
            "thing": "Universidad",
            "cost": "500000",
            "priority": "Alta",
            "date": "2020/06/06",
            "iconData": {
                "category": 'Tecnología',
                "iconName": 'mobile-alt',
                "class": '#BE4BDB',
                'prefix': 'fas',
                'type': 'expense'
            }
        }, {
            "thing": "Celular",
            "cost": "250000",
            "priority": "Alta",
            "date": "2020/06/15",
            "iconData": {
                "category": 'Banco & Transacciones',
                "iconName": 'money-bill-wave',
                "class": '#12BB85',
                'prefix': 'fas',
                'type': 'expense'
            }
        }, {
            "thing": "Bicicleta",
            "cost": "167000",
            "priority": "Alta",
            "date": "2020/06/18",
            "iconData": {
                "category": 'Banco & Transacciones',
                "iconName": 'money-bill-wave',
                "class": '#12BB85',
                'prefix': 'fas',
                'type': 'expense'
            }
        }, {
            "thing": "Comida",
            "cost": "100000",
            "priority": "Media",
            "date": "2020/06/20",
            "iconData": {
                "category": 'Comida',
                "iconName": 'utensils',
                "class": '#FD7E14',
                'prefix': 'fas',
                'type': 'expense'
            }
        }, {
            "thing": "Transporte",
            "cost": "80000",
            "priority": "Media",
            "date": "2020/06/24",
            "iconData": {
                "category": 'Viajes',
                "iconName": 'plane',
                "class": '#F963A0',
                'prefix': 'fas',
                'type': 'expense'
            }
        }, {
            "thing": "Canastas",
            "cost": "300000",
            "priority": "Alta",
            "date": "2020/06/25",
            "iconData": {
                "category": 'Comida',
                "iconName": 'utensils',
                "class": '#FD7E14',
                'prefix': 'fas',
                'type': 'expense'
            }
        }, {
            "thing": "Instituto",
            "cost": "150000",
            "priority": "Alta",
            "date": "2020/06/27",
            "iconData": {
                "category": 'Banco & Transacciones',
                "iconName": 'money-bill-wave',
                "class": '#12BB85',
                'prefix': 'fas',
                'type': 'expense'
            }
        }, {
            "thing": "Otros",
            "cost": "50000",
            "priority": "Baja",
            "date": "2020/06/28",
            "iconData": {
                "category": 'Comida',
                "iconName": 'utensils',
                "class": '#FD7E14',
                'prefix': 'fas',
                'type': 'expense'
            }
        }, {
            "thing": "Audifonos (Balaca)",
            "cost": "80000",
            "priority": "Media",
            "date": "2020/06/30",
            "iconData": {
                "category": 'Tecnología',
                "iconName": 'mobile-alt',
                "class": '#BE4BDB',
                'prefix': 'fas',
                'type': 'expense'
            }
        }, {
            "thing": "Audifonos (Balaca)",
            "cost": "80000",
            "priority": "Media",
            "date": "2020/06/31",
            "iconData": {
                "category": 'Moda',
                "iconName": 'tshirt',
                "class": '#4C6EF5',
                'prefix': 'fas',
                'type': 'expense'
            }
        },
        {
            "thing": "Trabajo",
            "cost": "2500000",
            "date": "2020/07/23",
            "percent": "8",
            "iconData": {
                "category": 'Trabajo',
                "iconName": 'mouse-pointer',
                "class": '#07D6BD',
                'prefix': 'fas',
                'type': 'earning'
            }
        }, {
            "thing": "Cadenas",
            "cost": "850000",
            "date": "2020/07/01",
            "percent": "2",
            "iconData": {
                "category": 'Cadenas',
                "iconName": 'money-check-alt',
                "class": '#DC90EE',
                'prefix': 'fas',
                'type': 'earning'
            }
        },
        {
            "thing": "Universidad",
            "cost": "500000",
            "priority": "Alta",
            "date": "2020/07/07",
            "iconData": {
                "category": 'Tecnología',
                "iconName": 'mobile-alt',
                "class": '#BE4BDB',
                'prefix': 'fas',
                'type': 'expense'
            }
        }, {
            "thing": "Celular",
            "cost": "250000",
            "priority": "Alta",
            "date": "2020/07/15",
            "iconData": {
                "category": 'Banco & Transacciones',
                "iconName": 'money-bill-wave',
                "class": '#12BB85',
                'prefix': 'fas',
                'type': 'expense'
            }
        }, {
            "thing": "Bicicleta",
            "cost": "167000",
            "priority": "Alta",
            "date": "2020/07/18",
            "iconData": {
                "category": 'Banco & Transacciones',
                "iconName": 'money-bill-wave',
                "class": '#12BB85',
                'prefix': 'fas',
                'type': 'expense'
            }
        }, {
            "thing": "Comida",
            "cost": "100000",
            "priority": "Media",
            "date": "2020/07/20",
            "iconData": {
                "category": 'Comida',
                "iconName": 'utensils',
                "class": '#FD7E14',
                'prefix': 'fas',
                'type': 'expense'
            }
        }, {
            "thing": "Transporte",
            "cost": "80000",
            "priority": "Media",
            "date": "2020/07/24",
            "iconData": {
                "category": 'Viajes',
                "iconName": 'plane',
                "class": '#F963A0',
                'prefix': 'fas',
                'type': 'expense'
            }
        }, {
            "thing": "Canastas",
            "cost": "300000",
            "priority": "Alta",
            "date": "2020/07/25",
            "iconData": {
                "category": 'Comida',
                "iconName": 'utensils',
                "class": '#FD7E14',
                'prefix': 'fas',
                'type': 'expense'
            }
        }, {
            "thing": "Instituto",
            "cost": "150000",
            "priority": "Alta",
            "date": "2020/07/27",
            "iconData": {
                "category": 'Banco & Transacciones',
                "iconName": 'money-bill-wave',
                "class": '#12BB85',
                'prefix': 'fas',
                'type': 'expense'
            }
        }, {
            "thing": "Otros",
            "cost": "50000",
            "priority": "Baja",
            "date": "2020/07/28",
            "iconData": {
                "category": 'Comida',
                "iconName": 'utensils',
                "class": '#FD7E14',
                'prefix': 'fas',
                'type': 'expense'
            }
        }, {
            "thing": "Audifonos (Balaca)",
            "cost": "80000",
            "priority": "Media",
            "date": "2020/07/30",
            "iconData": {
                "category": 'Tecnología',
                "iconName": 'mobile-alt',
                "class": '#BE4BDB',
                'prefix': 'fas',
                'type': 'expense'
            }
        }, {
            "thing": "Audifonos (Balaca)",
            "cost": "80000",
            "priority": "Media",
            "date": "2020/07/31",
            "iconData": {
                "category": 'Moda',
                "iconName": 'tshirt',
                "class": '#4C6EF5',
                'prefix': 'fas',
                'type': 'expense'
            }
        },
        {
            "thing": "Trabajo",
            "cost": "2500000",
            "date": "2020/08/23",
            "percent": "8",
            "iconData": {
                "category": 'Trabajo',
                "iconName": 'mouse-pointer',
                "class": '#08D6BD',
                'prefix': 'fas',
                'type': 'earning'
            }
        }, {
            "thing": "Cadenas",
            "cost": "850000",
            "date": "2020/08/01",
            "percent": "2",
            "iconData": {
                "category": 'Cadenas',
                "iconName": 'money-check-alt',
                "class": '#DC90EE',
                'prefix': 'fas',
                'type': 'earning'
            }
        },
        {
            "thing": "Universidad",
            "cost": "500000",
            "priority": "Alta",
            "date": "2020/08/08",
            "iconData": {
                "category": 'Tecnología',
                "iconName": 'mobile-alt',
                "class": '#BE4BDB',
                'prefix': 'fas',
                'type': 'expense'
            }
        }, {
            "thing": "Celular",
            "cost": "250000",
            "priority": "Alta",
            "date": "2020/08/15",
            "iconData": {
                "category": 'Banco & Transacciones',
                "iconName": 'money-bill-wave',
                "class": '#12BB85',
                'prefix': 'fas',
                'type': 'expense'
            }
        }, {
            "thing": "Bicicleta",
            "cost": "167000",
            "priority": "Alta",
            "date": "2020/08/18",
            "iconData": {
                "category": 'Banco & Transacciones',
                "iconName": 'money-bill-wave',
                "class": '#12BB85',
                'prefix': 'fas',
                'type': 'expense'
            }
        }, {
            "thing": "Comida",
            "cost": "100000",
            "priority": "Media",
            "date": "2020/08/20",
            "iconData": {
                "category": 'Comida',
                "iconName": 'utensils',
                "class": '#FD7E14',
                'prefix': 'fas',
                'type': 'expense'
            }
        }, {
            "thing": "Transporte",
            "cost": "80000",
            "priority": "Media",
            "date": "2020/08/24",
            "iconData": {
                "category": 'Viajes',
                "iconName": 'plane',
                "class": '#F963A0',
                'prefix': 'fas',
                'type': 'expense'
            }
        }, {
            "thing": "Canastas",
            "cost": "300000",
            "priority": "Alta",
            "date": "2020/08/25",
            "iconData": {
                "category": 'Comida',
                "iconName": 'utensils',
                "class": '#FD7E14',
                'prefix': 'fas',
                'type': 'expense'
            }
        }, {
            "thing": "Instituto",
            "cost": "150000",
            "priority": "Alta",
            "date": "2020/08/27",
            "iconData": {
                "category": 'Banco & Transacciones',
                "iconName": 'money-bill-wave',
                "class": '#12BB85',
                'prefix': 'fas',
                'type': 'expense'
            }
        }, {
            "thing": "Otros",
            "cost": "50000",
            "priority": "Baja",
            "date": "2020/08/28",
            "iconData": {
                "category": 'Comida',
                "iconName": 'utensils',
                "class": '#FD7E14',
                'prefix': 'fas',
                'type': 'expense'
            }
        }, {
            "thing": "Audifonos (Balaca)",
            "cost": "80000",
            "priority": "Media",
            "date": "2020/08/30",
            "iconData": {
                "category": 'Tecnología',
                "iconName": 'mobile-alt',
                "class": '#BE4BDB',
                'prefix': 'fas',
                'type': 'expense'
            }
        }, {
            "thing": "Audifonos (Balaca)",
            "cost": "80000",
            "priority": "Media",
            "date": "2020/08/31",
            "iconData": {
                "category": 'Moda',
                "iconName": 'tshirt',
                "class": '#4C6EF5',
                'prefix': 'fas',
                'type': 'expense'
            }
        },
        {
            "thing": "Trabajo",
            "cost": "2500000",
            "date": "2020/09/23",
            "percent": "8",
            "iconData": {
                "category": 'Trabajo',
                "iconName": 'mouse-pointer',
                "class": '#09D6BD',
                'prefix': 'fas',
                'type': 'earning'
            }
        }, {
            "thing": "Cadenas",
            "cost": "850000",
            "date": "2020/09/01",
            "percent": "2",
            "iconData": {
                "category": 'Cadenas',
                "iconName": 'money-check-alt',
                "class": '#DC90EE',
                'prefix': 'fas',
                'type': 'earning'
            }
        },
        {
            "thing": "Universidad",
            "cost": "500000",
            "priority": "Alta",
            "date": "2020/09/09",
            "iconData": {
                "category": 'Tecnología',
                "iconName": 'mobile-alt',
                "class": '#BE4BDB',
                'prefix': 'fas',
                'type': 'expense'
            }
        }, {
            "thing": "Celular",
            "cost": "250000",
            "priority": "Alta",
            "date": "2020/09/15",
            "iconData": {
                "category": 'Banco & Transacciones',
                "iconName": 'money-bill-wave',
                "class": '#12BB85',
                'prefix': 'fas',
                'type': 'expense'
            }
        }, {
            "thing": "Bicicleta",
            "cost": "167000",
            "priority": "Alta",
            "date": "2020/09/18",
            "iconData": {
                "category": 'Banco & Transacciones',
                "iconName": 'money-bill-wave',
                "class": '#12BB85',
                'prefix': 'fas',
                'type': 'expense'
            }
        }, {
            "thing": "Comida",
            "cost": "100000",
            "priority": "Media",
            "date": "2020/09/20",
            "iconData": {
                "category": 'Comida',
                "iconName": 'utensils',
                "class": '#FD7E14',
                'prefix': 'fas',
                'type': 'expense'
            }
        }, {
            "thing": "Transporte",
            "cost": "80000",
            "priority": "Media",
            "date": "2020/09/24",
            "iconData": {
                "category": 'Viajes',
                "iconName": 'plane',
                "class": '#F963A0',
                'prefix': 'fas',
                'type': 'expense'
            }
        }, {
            "thing": "Canastas",
            "cost": "300000",
            "priority": "Alta",
            "date": "2020/09/25",
            "iconData": {
                "category": 'Comida',
                "iconName": 'utensils',
                "class": '#FD7E14',
                'prefix': 'fas',
                'type': 'expense'
            }
        }, {
            "thing": "Instituto",
            "cost": "150000",
            "priority": "Alta",
            "date": "2020/09/27",
            "iconData": {
                "category": 'Banco & Transacciones',
                "iconName": 'money-bill-wave',
                "class": '#12BB85',
                'prefix': 'fas',
                'type': 'expense'
            }
        }, {
            "thing": "Otros",
            "cost": "50000",
            "priority": "Baja",
            "date": "2020/09/28",
            "iconData": {
                "category": 'Comida',
                "iconName": 'utensils',
                "class": '#FD7E14',
                'prefix': 'fas',
                'type': 'expense'
            }
        }, {
            "thing": "Audifonos (Balaca)",
            "cost": "80000",
            "priority": "Media",
            "date": "2020/09/30",
            "iconData": {
                "category": 'Tecnología',
                "iconName": 'mobile-alt',
                "class": '#BE4BDB',
                'prefix': 'fas',
                'type': 'expense'
            }
        }, {
            "thing": "Audifonos (Balaca)",
            "cost": "80000",
            "priority": "Media",
            "date": "2020/09/31",
            "iconData": {
                "category": 'Moda',
                "iconName": 'tshirt',
                "class": '#4C6EF5',
                'prefix': 'fas',
                'type': 'expense'
            }
        },
        {
            "thing": "Trabajo",
            "cost": "2500000",
            "date": "2020/10/23",
            "percent": "8",
            "iconData": {
                "category": 'Trabajo',
                "iconName": 'mouse-pointer',
                "class": '#10D6BD',
                'prefix': 'fas',
                'type': 'earning'
            }
        }, {
            "thing": "Cadenas",
            "cost": "850000",
            "date": "2020/10/01",
            "percent": "2",
            "iconData": {
                "category": 'Cadenas',
                "iconName": 'money-check-alt',
                "class": '#DC90EE',
                'prefix': 'fas',
                'type': 'earning'
            }
        },
        {
            "thing": "Universidad",
            "cost": "500000",
            "priority": "Alta",
            "date": "2020/10/10",
            "iconData": {
                "category": 'Tecnología',
                "iconName": 'mobile-alt',
                "class": '#BE4BDB',
                'prefix': 'fas',
                'type': 'expense'
            }
        }, {
            "thing": "Celular",
            "cost": "250000",
            "priority": "Alta",
            "date": "2020/10/15",
            "iconData": {
                "category": 'Banco & Transacciones',
                "iconName": 'money-bill-wave',
                "class": '#12BB85',
                'prefix': 'fas',
                'type': 'expense'
            }
        }, {
            "thing": "Bicicleta",
            "cost": "167000",
            "priority": "Alta",
            "date": "2020/10/18",
            "iconData": {
                "category": 'Banco & Transacciones',
                "iconName": 'money-bill-wave',
                "class": '#12BB85',
                'prefix': 'fas',
                'type': 'expense'
            }
        }, {
            "thing": "Comida",
            "cost": "100000",
            "priority": "Media",
            "date": "2020/10/20",
            "iconData": {
                "category": 'Comida',
                "iconName": 'utensils',
                "class": '#FD7E14',
                'prefix': 'fas',
                'type': 'expense'
            }
        }, {
            "thing": "Transporte",
            "cost": "80000",
            "priority": "Media",
            "date": "2020/10/24",
            "iconData": {
                "category": 'Viajes',
                "iconName": 'plane',
                "class": '#F963A0',
                'prefix': 'fas',
                'type': 'expense'
            }
        }, {
            "thing": "Canastas",
            "cost": "300000",
            "priority": "Alta",
            "date": "2020/10/25",
            "iconData": {
                "category": 'Comida',
                "iconName": 'utensils',
                "class": '#FD7E14',
                'prefix': 'fas',
                'type': 'expense'
            }
        }, {
            "thing": "Instituto",
            "cost": "150000",
            "priority": "Alta",
            "date": "2020/10/27",
            "iconData": {
                "category": 'Banco & Transacciones',
                "iconName": 'money-bill-wave',
                "class": '#12BB85',
                'prefix': 'fas',
                'type': 'expense'
            }
        }, {
            "thing": "Otros",
            "cost": "50000",
            "priority": "Baja",
            "date": "2020/10/28",
            "iconData": {
                "category": 'Comida',
                "iconName": 'utensils',
                "class": '#FD7E14',
                'prefix': 'fas',
                'type': 'expense'
            }
        }, {
            "thing": "Audifonos (Balaca)",
            "cost": "80000",
            "priority": "Media",
            "date": "2020/10/30",
            "iconData": {
                "category": 'Tecnología',
                "iconName": 'mobile-alt',
                "class": '#BE4BDB',
                'prefix': 'fas',
                'type': 'expense'
            }
        }, {
            "thing": "Audifonos (Balaca)",
            "cost": "80000",
            "priority": "Media",
            "date": "2020/10/31",
            "iconData": {
                "category": 'Moda',
                "iconName": 'tshirt',
                "class": '#4C6EF5',
                'prefix': 'fas',
                'type': 'expense'
            }
        },
        {
            "thing": "Trabajo",
            "cost": "2500000",
            "date": "2020/11/23",
            "percent": "8",
            "iconData": {
                "category": 'Trabajo',
                "iconName": 'mouse-pointer',
                "class": '#11D6BD',
                'prefix': 'fas',
                'type': 'earning'
            }
        }, {
            "thing": "Cadenas",
            "cost": "850000",
            "date": "2020/11/01",
            "percent": "2",
            "iconData": {
                "category": 'Cadenas',
                "iconName": 'money-check-alt',
                "class": '#DC90EE',
                'prefix': 'fas',
                'type': 'earning'
            }
        },
        {
            "thing": "Universidad",
            "cost": "500000",
            "priority": "Alta",
            "date": "2020/11/11",
            "iconData": {
                "category": 'Tecnología',
                "iconName": 'mobile-alt',
                "class": '#BE4BDB',
                'prefix': 'fas',
                'type': 'expense'
            }
        }, {
            "thing": "Celular",
            "cost": "250000",
            "priority": "Alta",
            "date": "2020/11/15",
            "iconData": {
                "category": 'Banco & Transacciones',
                "iconName": 'money-bill-wave',
                "class": '#12BB85',
                'prefix': 'fas',
                'type': 'expense'
            }
        }, {
            "thing": "Bicicleta",
            "cost": "167000",
            "priority": "Alta",
            "date": "2020/11/18",
            "iconData": {
                "category": 'Banco & Transacciones',
                "iconName": 'money-bill-wave',
                "class": '#12BB85',
                'prefix': 'fas',
                'type': 'expense'
            }
        }, {
            "thing": "Comida",
            "cost": "110000",
            "priority": "Media",
            "date": "2020/11/20",
            "iconData": {
                "category": 'Comida',
                "iconName": 'utensils',
                "class": '#FD7E14',
                'prefix': 'fas',
                'type': 'expense'
            }
        }, {
            "thing": "Transporte",
            "cost": "80000",
            "priority": "Media",
            "date": "2020/11/24",
            "iconData": {
                "category": 'Viajes',
                "iconName": 'plane',
                "class": '#F963A0',
                'prefix': 'fas',
                'type': 'expense'
            }
        }, {
            "thing": "Canastas",
            "cost": "300000",
            "priority": "Alta",
            "date": "2020/11/25",
            "iconData": {
                "category": 'Comida',
                "iconName": 'utensils',
                "class": '#FD7E14',
                'prefix': 'fas',
                'type': 'expense'
            }
        }, {
            "thing": "Instituto",
            "cost": "150000",
            "priority": "Alta",
            "date": "2020/11/27",
            "iconData": {
                "category": 'Banco & Transacciones',
                "iconName": 'money-bill-wave',
                "class": '#12BB85',
                'prefix': 'fas',
                'type': 'expense'
            }
        }, {
            "thing": "Otros",
            "cost": "50000",
            "priority": "Baja",
            "date": "2020/11/28",
            "iconData": {
                "category": 'Comida',
                "iconName": 'utensils',
                "class": '#FD7E14',
                'prefix': 'fas',
                'type': 'expense'
            }
        }, {
            "thing": "Audifonos (Balaca)",
            "cost": "80000",
            "priority": "Media",
            "date": "2020/11/30",
            "iconData": {
                "category": 'Tecnología',
                "iconName": 'mobile-alt',
                "class": '#BE4BDB',
                'prefix': 'fas',
                'type': 'expense'
            }
        }, {
            "thing": "Audifonos (Balaca)",
            "cost": "80000",
            "priority": "Media",
            "date": "2020/11/31",
            "iconData": {
                "category": 'Moda',
                "iconName": 'tshirt',
                "class": '#4C6EF5',
                'prefix': 'fas',
                'type': 'expense'
            }
        },
        {
            "thing": "Trabajo",
            "cost": "2500000",
            "date": "2020/12/23",
            "percent": "8",
            "iconData": {
                "category": 'Trabajo',
                "iconName": 'mouse-pointer',
                "class": '#12D6BD',
                'prefix': 'fas',
                'type': 'earning'
            }
        }, {
            "thing": "Cadenas",
            "cost": "850000",
            "date": "2020/12/01",
            "percent": "2",
            "iconData": {
                "category": 'Cadenas',
                "iconName": 'money-check-alt',
                "class": '#DC90EE',
                'prefix': 'fas',
                'type': 'earning'
            }
        },
        {
            "thing": "Universidad",
            "cost": "500000",
            "priority": "Alta",
            "date": "2020/12/12",
            "iconData": {
                "category": 'Tecnología',
                "iconName": 'mobile-alt',
                "class": '#BE4BDB',
                'prefix': 'fas',
                'type': 'expense'
            }
        }, {
            "thing": "Celular",
            "cost": "250000",
            "priority": "Alta",
            "date": "2020/12/15",
            "iconData": {
                "category": 'Banco & Transacciones',
                "iconName": 'money-bill-wave',
                "class": '#12BB85',
                'prefix': 'fas',
                'type': 'expense'
            }
        }, {
            "thing": "Bicicleta",
            "cost": "167000",
            "priority": "Alta",
            "date": "2020/12/18",
            "iconData": {
                "category": 'Banco & Transacciones',
                "iconName": 'money-bill-wave',
                "class": '#12BB85',
                'prefix': 'fas',
                'type': 'expense'
            }
        }, {
            "thing": "Comida",
            "cost": "120000",
            "priority": "Media",
            "date": "2020/12/20",
            "iconData": {
                "category": 'Comida',
                "iconName": 'utensils',
                "class": '#FD7E14',
                'prefix': 'fas',
                'type': 'expense'
            }
        }, {
            "thing": "Transporte",
            "cost": "80000",
            "priority": "Media",
            "date": "2020/12/24",
            "iconData": {
                "category": 'Viajes',
                "iconName": 'plane',
                "class": '#F963A0',
                'prefix': 'fas',
                'type': 'expense'
            }
        }, {
            "thing": "Canastas",
            "cost": "300000",
            "priority": "Alta",
            "date": "2020/12/25",
            "iconData": {
                "category": 'Comida',
                "iconName": 'utensils',
                "class": '#FD7E14',
                'prefix': 'fas',
                'type': 'expense'
            }
        }, {
            "thing": "Instituto",
            "cost": "150000",
            "priority": "Alta",
            "date": "2020/12/27",
            "iconData": {
                "category": 'Banco & Transacciones',
                "iconName": 'money-bill-wave',
                "class": '#12BB85',
                'prefix': 'fas',
                'type': 'expense'
            }
        }, {
            "thing": "Otros",
            "cost": "50000",
            "priority": "Baja",
            "date": "2020/12/28",
            "iconData": {
                "category": 'Comida',
                "iconName": 'utensils',
                "class": '#FD7E14',
                'prefix': 'fas',
                'type': 'expense'
            }
        }, {
            "thing": "Audifonos (Balaca)",
            "cost": "80000",
            "priority": "Media",
            "date": "2020/12/30",
            "iconData": {
                "category": 'Tecnología',
                "iconName": 'mobile-alt',
                "class": '#BE4BDB',
                'prefix': 'fas',
                'type': 'expense'
            }
        }, {
            "thing": "Audifonos (Balaca)",
            "cost": "80000",
            "priority": "Media",
            "date": "2020/12/31",
            "iconData": {
                "category": 'Moda',
                "iconName": 'tshirt',
                "class": '#4C6EF5',
                'prefix': 'fas',
                'type': 'expense'
            }
        },
    ],
    financeData: {
        earnings: 0,
        acum: 0,
        expense: 0,
        quantity: 0
    }
}

const getters = {}

const mutations = {
    setDateCategories(state, payload){
        state.dateCategories = payload;
    },
    setMainDateCategories(state, payload){
        state.mainDateCategories = payload;
    },
    setFinanceData(state, payload){
        state.financeData = payload;
    },
}

const actions = {
    updateMainDateCategories({ commit }, payload){
        commit("setMainDateCategories", payload );
    },
    updateDateCategories({ commit }, payload){
        commit("setDateCategories", payload );
    },
    updateFinanceData({ commit, state }, payload){
        let financeData = _.cloneDeep(state.financeData);
        financeData = Object.assign(payload, payload);
        commit("setFinanceData", financeData );
    },
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}