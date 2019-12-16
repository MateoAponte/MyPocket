$_$wp(1);
let data = ($_$w(1, 0), [
    {
        'thing': 'Universidad',
        'cost': '500000',
        'priority': 'Alta',
        'date': '2019/11/27',
        'iconData': {
            'category': 'Tecnología',
            'name': 'mobile-alt',
            'class': 'tecnology-icon'
        }
    },
    {
        'thing': 'Celular',
        'cost': '250000',
        'priority': 'Alta',
        'date': '2019/11/27',
        'iconData': {
            'category': 'Banco & Transacciones',
            'name': 'money-bill-wave',
            'class': 'money-icon'
        }
    },
    {
        'thing': 'Bicicleta',
        'cost': '167000',
        'priority': 'Alta',
        'date': '2019/11/27',
        'iconData': {
            'category': 'Banco & Transacciones',
            'name': 'money-bill-wave',
            'class': 'money-icon'
        }
    },
    {
        'thing': 'Comida',
        'cost': '100000',
        'priority': 'Media',
        'date': '2019/11/27',
        'iconData': {
            'category': 'Comida',
            'name': 'utensils',
            'class': 'food-icon'
        }
    },
    {
        'thing': 'Transporte',
        'cost': '80000',
        'priority': 'Media',
        'date': '2019/11/27',
        'iconData': {
            'category': 'Viajes',
            'name': 'plane',
            'class': 'plane-icon'
        }
    },
    {
        'thing': 'Canastas',
        'cost': '300000',
        'priority': 'Alta',
        'date': '2019/11/27',
        'iconData': {
            'category': 'Comida',
            'name': 'utensils',
            'class': 'food-icon'
        }
    },
    {
        'thing': 'Instituto',
        'cost': '150000',
        'priority': 'Alta',
        'date': '2019/11/27',
        'iconData': {
            'category': 'Banco & Transacciones',
            'name': 'money-bill-wave',
            'class': 'money-icon'
        }
    },
    {
        'thing': 'Otros',
        'cost': '50000',
        'priority': 'Baja',
        'date': '2019/11/27',
        'iconData': {
            'category': 'Comida',
            'name': 'utensils',
            'class': 'food-icon'
        }
    },
    {
        'thing': 'Audifonos (Balaca)',
        'cost': '80000',
        'priority': 'Media',
        'date': '2019/11/27',
        'iconData': {
            'category': 'Tecnología',
            'name': 'mobile-alt',
            'class': 'tecnology-icon'
        }
    }
]);
let categoryData = ($_$w(1, 1), {
    activeCategories: [],
    categoriesData: []
});
$_$w(1, 2), data.forEach(x => {
    $_$wf(1);
    if ($_$w(1, 3), !categoryData.activeCategories.includes(x.iconData.category)) {
        $_$w(1, 4), categoryData.activeCategories.push(x.iconData.category);
    }
});
$_$w(1, 5), categoryData.activeCategories.forEach(x => {
    $_$wf(1);
    $_$w(1, 6), categoryData.categoriesData.push({ categoryName: x });
});
$_$w(1, 7), data.forEach(x => {
    $_$wf(1);
    $_$w(1, 8), categoryData.categoriesData.forEach(z => {
        $_$wf(1);
        $_$w(1, 9), z.iconName = x.iconData.name;
        $_$w(1, 10), z.totalExpenses = 0;
    });
});
$_$w(1, 11), categoryData.activeCategories.forEach((x, index) => {
    $_$wf(1);
    $_$w(1, 12), data.forEach(z => {
        $_$wf(1);
        if ($_$w(1, 13), z.iconData.category == x) {
            $_$w(1, 14), categoryData.categoriesData[index].totalExpenses += parseInt(z.cost);
        }
    });
});
$_$w(1, 15), $_$wv(1, 15, '1,15', 'categoryData', categoryData, '$_$ne', 1, 0, '');
$_$wpe(1);