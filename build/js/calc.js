// Переменные

const single_rulon_weight = 20;  // Вес одного рулона (кг)
const single_rulon_area = 0.8; // площадь одного рулона (м2)

const price_pesok_rulon = 1100;  // стоимость песна с доставкой и размещением за м3 (рулонный)
const price_plod_grunt_rulon = 1250; // стоимость плодородного грунта с доставкой и размещением
const count_cub_pp_rulon = 0.01; // кол-во кубов при высоте 1см/м2 песчаная подушка (рулонный)

let count_height_pp_rulon = 0; // высота песчаной подушки

let total_area_count = 0;  // переменная для хранения площади участка
let total_rulon_count = 0;  // считает итоговое количество рулонов
let total_rulon_weight_count = 0;  // итоговый вес рулонного газона

let price_for_m2 = 1;  // Цена за м2 рулонного газона
let price_rulon_du = 1;

let result_summ;  // итоговая стоимость газона
let result_summ_rulon;  // итоговая стоимость рулонного
let result_summ_posev;  // итоговая стоимость посевного

let area_counter;

const tab_type_rul = document.getElementById('rul-tab');
const tab_type_posev = document.getElementById('posev-tab');
const tab_podtype_rul_univers = document.getElementById('rul-univers-tab');
const tab_podtype_posev_univers = document.getElementById('posev-univers-tab');
const tab_podtype_posev_elit = document.getElementById('posev-elit-tab');
const tab_podtype_posev_prem = document.getElementById('posev-prem-tab');
const tab_podtype_posev_sport = document.getElementById('posev-sport-tab');



// показ нужных пунктов результирующей таблицы

document.getElementById('rul-tab').addEventListener('click', function() {
    document.getElementById('semyana-block').classList.add('d-none');
    document.getElementById('rulon-count').classList.remove('d-none');
    document.getElementById('rulon-weight').classList.remove('d-none');
});

document.getElementById('posev-tab').addEventListener('click', function() {
    document.getElementById('semyana-block').classList.remove('d-none');
    document.getElementById('rulon-count').classList.add('d-none');
    document.getElementById('rulon-weight').classList.add('d-none');
});

// Анимация цены

document.getElementById('result-button').addEventListener('click', function() {

    
    document.getElementById('price-itog').classList.add('fadeInUp');
    document.getElementById('price-itog').classList.add('price-itog');
    if (document.getElementById('price-itog').classList.contains('price-itog')) {
        (setTimeout(function(){
            document.getElementById('price-itog').classList.remove('fadeInUp');
            document.getElementById('price-itog').classList.remove('price-itog');
        }, 1500))
    } 
});

// получение введеной площади участка

function total_area() {
   return total_area_count = document.getElementById('total_area').value;
}

// добавление +1 / -1 к площади

document.getElementById('area-plus').addEventListener('click', function() {
    area_counter = Number(total_area());
    area_counter += 1;
    document.getElementById('total_area').value = area_counter;
    document.getElementById('rangeinput1').value = document.getElementById('total_area').value;
});

document.getElementById('area-minus').addEventListener('click', function() {
    area_counter = Number(total_area());
    if (area_counter >= 1) {
        area_counter -= 1;
        document.getElementById('total_area').value = area_counter;
        document.getElementById('rangeinput1').value = document.getElementById('total_area').value;
    }
});

// Расчет итогового количества рулонов
function count_total_rulon() {
    if (document.getElementById('rul-tab').classList.contains('active')) {
        total_rulon_count = total_area_count / single_rulon_area;
        total_rulon_count = Math.ceil(total_rulon_count);
        return total_rulon_count;
    } else {
        return total_rulon_count = 0;
    }
};


// Расчет итоговой массы рулонного газона

function count_total_rulon_weigh() {

    if (document.getElementById('rul-tab').classList.contains('active')) {
        total_rulon_weight_count = count_total_rulon() * single_rulon_weight;
    } else {
        total_rulon_weight_count = 0;
    }
    return Math.ceil(total_rulon_weight_count);
};

// Получение значения цены за м2 (для рулонного газона)

function count_total_price_by_rul_m2() {
    if (tab_type_rul.classList.contains('active')) {
        if (tab_podtype_rul_univers.classList.contains('active')) {
            price_for_m2 = 120;
            return Math.ceil(price_for_m2 * total_area());
        } else {
            price_for_m2 = 140;
            return Math.ceil(price_for_m2 * total_area());
        }
    } else {
        return price_for_m2 = 0;
    }
};

// Получение итоговой цена за м2 (для посевного газона)

function count_total_price_by_posev_m2() {
    if (tab_type_posev.classList.contains('active')) {
        if (tab_podtype_posev_univers.classList.contains('active')) {
            price_for_m2 = 90;
            return Math.ceil(price_for_m2 * total_area());
        } else if (tab_podtype_posev_elit.classList.contains('active')) {
            price_for_m2 = 120;
            return Math.ceil(price_for_m2 * total_area());
        } else if (tab_podtype_posev_prem.classList.contains('active')) {
            price_for_m2 = 100;
            return Math.ceil(price_for_m2 * total_area());
        } else if (tab_podtype_posev_sport.classList.contains('active')) {
            price_for_m2 = 110;
            return Math.ceil(price_for_m2 * total_area());
        }
    } else {
        return price_for_m2 = 0;
    }
};

// расчет веса семён для посевного газона

function count_total_semyana_weight() {
    if (tab_type_posev.classList.contains('active')) {
        if (tab_podtype_posev_univers.classList.contains('active')) {
            return Math.ceil(0.05 * total_area());
        } else if (tab_podtype_posev_elit.classList.contains('active')) {
            return Math.ceil(0.05 * total_area());
        } else if (tab_podtype_posev_prem.classList.contains('active')) {
            return Math.ceil(0.05 * total_area());
        } else if (tab_podtype_posev_sport.classList.contains('active')) {
            return Math.ceil(0.05 * total_area());
        }
    } else {
        return price_for_m2 = 0;
    }
};

// Расчет итогового значения для доставки и укладки 

function count_total_price_rul_univers_du() {
    if (tab_type_rul.classList.contains('active')) {
        if (tab_podtype_rul_univers.classList.contains('active')) {
            if (document.getElementById('rul-univers-du').checked) {
                price_rulon_du = 50;
                return price_rulon_du * total_area();
            } return 0;
        } else {
            if (document.getElementById('rul-elit-du').checked) {
                price_rulon_du = 50;
                return price_rulon_du * total_area();
            } return 0;
        }
    }
};

// Расчет итогового значения стоимости подготовки поверхности

function count_total_price_rul_univers_pp() {
    if (tab_type_rul.classList.contains('active')) {
        if (tab_podtype_rul_univers.classList.contains('active')) {
            if (document.getElementById('rul-univers-pp').checked) {
                price_rulon_pp = 50;
                return price_rulon_pp * total_area();
            } return 0;
        } else {
            if (document.getElementById('rul-elit-pp').checked) {
                price_rulon_pp = 70;
                return price_rulon_pp * total_area();
            } return 0;
        }
    }
};

// расчет итоговой стоимости укладки 

function count_total_price_ukl_rulon() {
    if (tab_type_rul.classList.contains('active')) {
        if (tab_podtype_rul_univers.classList.contains('active')) {
            if (document.getElementById('rul-univers-ukl').checked) {
                price_rulon_pp = 160;
                return price_rulon_pp * total_area();
            } return 0;
        } else {
            if (document.getElementById('rul-elit-ukl').checked) {
                price_rulon_pp = 160;
                return price_rulon_pp * total_area();
            } return 0;
        }
    }
};

// расчет итоговой стоимости устройства песчаной подушки (рулонный)

function count_total_price_pp_rulon() {
    if (tab_type_rul.classList.contains('active')) {
        if (tab_podtype_rul_univers.classList.contains('active')) {
            count_height_pp_rulon = document.getElementById('rul-univers-podushka-height').value;
            return Math.ceil(count_height_pp_rulon * total_area() * count_cub_pp_rulon * price_pesok_rulon);
        } else {
            count_height_pp_rulon = document.getElementById('rul-elit-podushka-height').value;
            return Math.ceil(count_height_pp_rulon * total_area() * count_cub_pp_rulon * price_pesok_rulon);
        }
    }    
};

// расчет итоговой стоимости устройства песчаной подушки (посевной)

function count_total_price_pp_posev() {
    if (tab_type_posev.classList.contains('active')) {
        if (tab_podtype_posev_univers.classList.contains('active')) {
            count_height_pp_rulon = document.getElementById('posev-univers-podushka-height').value;
            return Math.ceil(count_height_pp_rulon * total_area() * count_cub_pp_rulon * price_pesok_rulon);
        } else if (tab_podtype_posev_elit.classList.contains('active')) {
            count_height_pp_rulon = document.getElementById('posev-elit-podushka-height').value;
            return Math.ceil(count_height_pp_rulon * total_area() * count_cub_pp_rulon * price_pesok_rulon);
        } else if (tab_podtype_posev_prem.classList.contains('active')) {
            count_height_pp_rulon = document.getElementById('posev-prem-podushka-height').value;
            return Math.ceil(count_height_pp_rulon * total_area() * count_cub_pp_rulon * price_pesok_rulon);
        } else if (tab_podtype_posev_sport.classList.contains('active')) {
            count_height_pp_rulon = document.getElementById('posev-sport-podushka-height').value;
            return Math.ceil(count_height_pp_rulon * total_area() * count_cub_pp_rulon * price_pesok_rulon);
        }
    }
};

// расчет итоговой стоимости устройства плодородного грунта (посевной)

function count_total_price_pg_posev() {
    if (tab_type_posev.classList.contains('active')) {
        if (tab_podtype_posev_univers.classList.contains('active')) {
            count_height_pp_rulon = document.getElementById('posev-univers-grunt-height').value;
            return Math.ceil(count_height_pp_rulon * total_area() * count_cub_pp_rulon * price_pesok_rulon);
        } else if (tab_podtype_posev_elit.classList.contains('active')) {
            count_height_pp_rulon = document.getElementById('posev-elit-grunt-height').value;
            return Math.ceil(count_height_pp_rulon * total_area() * count_cub_pp_rulon * price_pesok_rulon);
        } else if (tab_podtype_posev_prem.classList.contains('active')) {
            count_height_pp_rulon = document.getElementById('posev-prem-grunt-height').value;
            return Math.ceil(count_height_pp_rulon * total_area() * count_cub_pp_rulon * price_pesok_rulon);
        } else if (tab_podtype_posev_sport.classList.contains('active')) {
            count_height_pp_rulon = document.getElementById('posev-sport-grunt-height').value;
            return Math.ceil(count_height_pp_rulon * total_area() * count_cub_pp_rulon * price_pesok_rulon);
        }
    }
}

// Расчет итоговой стоимости устройства плодородного грунта (рулонный)

function count_total_price_pg_rulon() {
    if (tab_type_rul.classList.contains('active')) {
        if (tab_podtype_rul_univers.classList.contains('active')) {
            count_height_pg_rulon = document.getElementById('rul-univers-grunt-height').value;
            return Math.ceil(count_height_pg_rulon * total_area() * count_cub_pp_rulon * price_plod_grunt_rulon);
        } else {
            count_height_pg_rulon = document.getElementById('rul-elit-grunt-height').value;
            return Math.ceil(count_height_pg_rulon * total_area() * count_cub_pp_rulon * price_plod_grunt_rulon);
        }
    }    
};


// Итоговые расчеты и таблица

function result_table_update() {
    
    if (document.getElementById('rul-tab').classList.contains('active')) {
        document.getElementById('price-itog').innerHTML = count_summ_rulon();
        document.getElementById('result-pp-price-count').innerHTML = count_total_price_pp_rulon() + ' руб';
        document.getElementById('result-pg-price-count').innerHTML = count_total_price_pg_rulon() + ' руб';
        document.getElementById('result-rulon-count').innerHTML = count_total_rulon() + ' шт';
        document.getElementById('result-rulon-weight-count').innerHTML = count_total_rulon_weigh() + ' кг';
    } else {
        document.getElementById('price-itog').innerHTML = count_summ_posev();
        document.getElementById('result-semyana-count').innerHTML = count_total_semyana_weight() + ` кг`;
        document.getElementById('result-pp-price-count').innerHTML = count_total_price_pp_posev() + ' руб';
        document.getElementById('result-pg-price-count').innerHTML = count_total_price_pg_posev() + ' руб';
    }
  
};

function count_summ_rulon() {
    result_summ_rulon = count_total_price_by_rul_m2()
     + count_total_price_rul_univers_du()
     + count_total_price_rul_univers_pp()
     + count_total_price_pp_rulon()
     + count_total_price_pg_rulon()
     + count_total_price_ukl_rulon();
    return result_summ_rulon;
};

function count_summ_posev() {
    result_summ_posev = count_total_price_by_posev_m2()
    + count_total_price_pp_posev()
    + count_total_price_pg_posev();
    return result_summ_posev;
};