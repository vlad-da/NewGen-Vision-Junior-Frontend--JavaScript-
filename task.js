
let courses = [
    { name: "Courses in England", prices: [0, 100] }, 
    { name: "Courses in Germany", prices: [500, null] }, 
    { name: "Courses in Italy", prices: [100, 200] }, 
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] },
];

// Варианты цен (фильтры), которые ищет пользователь
let requiredRange1 = [null, 200]; // England, Italy, Russia, China, USA, Kazakhstan, France
let requiredRange2 = [100, 350]; // England Italy Russia China USA Kazakhstan France
let requiredRange3 = [200, null]; // Germany Italy Russia China USA Kazakhstan France


//Аннотация к заданию 

// Цена [500, null] считается "от 500", [null, 400] - до 400 и [null, null] - все значения
// Цены рассмотрены на числовой прямой с пересечениями, то есть [null, null] будет содержать все значения (весь массив ).

// Первый фильтр [null, 200]:
// Фильтр [null, 200] будет содержать все значения до 200 (England, Italy, Russia (так как значение до 400, то в какой-то момент будет пересечение с 200 и ниже), 
// China (так как значение от 50 до 250, то в какой-то момент будет пересечение с 200 и ниже), USA (так как значение от 200), 
// Kazakhstan (так как значение от 56 до 324, то в какой-то момент будет пересечение с 200 и ниже), France (так как значение от 0 и до бесконечности, то найдётся число от null до 200)).

// Второй фильтр [100, 350]:
// Фильтр [100, 350] будет содержать все значения от 100 до 350 (England, Italy, Russia (так как значение до 400, то в какой-то момент будет пересечение с промежутком от 100 до 350, 
// где будет иметься курс, входящий в диапазон), China, USA, Kazakhstan, France (так как значение от 0 и до бесконечности, то найдётся число от 100 до 350)).

// Третий фильтр [200, null]:
// Фильтр [200, null] будет содержать все значения от 200 (Germany (так как значение от 500, то в какой-то момент будет пересечение с 200 и выше), Italy, 
// Russia (так как значение до 400, то будет пересечение от 200 до 400), China (так как от 50 до 250, то будет пересечение от 200 до 250), USA, 
// Kazakhstan (так как от 56 до 324, то будет пересечение от 200 до 324) France (так как значение от 0 и до бесконечности, то найдётся число от 200 до null)


// Функция, которая выводит массив со списком курсов. Она получает 2 значения: 1 - массив данных, 2 - значения фильтра. 
function showFilter(courses, requiredRange) {

    // Массив, в которые заносятся значения, подходящие под значения фильтра
    const arrayList = [];

    // Проверка на наличие null в значениях фильтра (requiredRange)
    // Если первое значение фильтра null, а второе нет, то вызывается функция firstIsNULL, куда передаётся значение фильтра
    if (requiredRange[0] == null && requiredRange[1] !== null) {
        firstIsNULL(requiredRange);
    }
    // Если оба значения не null, то вызывается функция withoutNULL, куда передаётся значение фильтра
    if (requiredRange[0] !== null && requiredRange[1] !== null ) {
        withoutNULL(requiredRange);
    }
    // Если второе значение фильтра null, а первое нет, то вызывается функция secondIsNULL, куда передаётся значение фильтра
    if (requiredRange[0] !== null && requiredRange[1] == null) {
        secondIsNULL(requiredRange);
    }

    // Функция, где первый аргумент фильтра null, а второй нет
    function firstIsNULL (arrayOfRange) {
        // Перебор массива courses
        for (let key in courses) { 
            // Условие: если второй аргумент цены объекта courses не null и первый аргумент цены объекта courses больше или равен первому значению фильтра 
            // или меньше или равен второму значению фильтра, то идёт записть названия курса в массив arrayList
            if ( 
                courses[key].prices[1] !== null &&
                courses[key].prices[0] >= arrayOfRange[0] ||
                courses[key].prices[0] <= arrayOfRange[1] ) {
                    // Запись в массив
                    arrayList.push(courses[key].name);
            } 

        }
    }

    // Функция, где оба аргумента не null
    function withoutNULL (arrayOfRange) {
        // Перебор массива courses
        for (let key in courses) { 
            // Условие: если первый и второй агрумент цены объекта courses не null, тогда вложенное условие:
           if ( 
                courses[key].prices[0] !== null &&
                courses[key].prices[1] !== null
                ) {
                    // Вложенное условие: если первый аргумент цены объекта courses больше или равен первому значению фильтра и меньше или равен второму значению фильтра 
                    // или второй аргумент цены объекта courses больше или равен первому значению фильтра и меньше или равен второму значению фильтра, 
                    // тогда идёт запись в массив
                    if (courses[key].prices[0] >= arrayOfRange[0] &&
                        courses[key].prices[0] <= arrayOfRange[1] ||
                        courses[key].prices[1] >= arrayOfRange[0] &&
                        courses[key].prices[1] <= arrayOfRange[1] ) {
                            // Запись в массив
                            arrayList.push(courses[key].name);
                        }
            } 
            // Условие: если первый аргумент цены объекта courses null и второй агрумент цены объекта courses не null, тогда вложенное условие:
            if (courses[key].prices[0] == null &&
                courses[key].prices[1] !== null) {
                    // Вложенное условие: если первый аргумент цены объекта courses больше или равен первому значению фильтра,
                    // тогда идёт запись в массив
                    if(courses[key].prices[1] >= arrayOfRange[0] 
                        ) {
                            // Запись в массив
                            arrayList.push(courses[key].name);
                        }
            } 
            // Условие: если первый аргумент цены объекта courses не null и второй агрумент цены объекта courses null, тогда вложенное условие:
            if ( courses[key].prices[0] !== null &&
                courses[key].prices[1] == null) {
                    // Вложенное условие: если первый аргумент цены объекта courses меньше или равен второму значению фильтра,
                    // тогда идёт запись в массив
                    if ( courses[key].prices[0] <= arrayOfRange[1]) {
                        // Запись в массив
                        arrayList.push(courses[key].name);
                    }
            } 
             // Условие: если оба аргумента цены объекта courses null, тогда идёт запись в массив
            if (courses[key].prices[0] == null &&
                courses[key].prices[1] == null) {
                    // Запись в массив
                    arrayList.push(courses[key].name);
            } 

        }
    }

    // Функция, где первый аргумент фильтра не null, а второй null
    function secondIsNULL (arrayOfRange) {
        // Перебор массива courses
        for (let key in courses) { 
            // Условие: если первый аргумент цены объекта courses не null и больше или равен первому значению фильтра или второй аргумент цены объекта courses больше или равен первому значению фильтра
            if ( 
                courses[key].prices[0] !== null &&
                courses[key].prices[0] >= arrayOfRange[0] ||
                courses[key].prices[1] >= arrayOfRange[0] 
                 ) {
                    // Запись в массив
                    arrayList.push(courses[key].name);
            } 
            // Условие: если оба аргумента цены объекта courses null, тогда идёт запись в массив
            if (courses[key].prices[0] == null &&
                courses[key].prices[1] == null) {
                    // Запись в массив
                    arrayList.push(courses[key].name);
            } 

        }
    }

    console.log(arrayList);
    return arrayList;

}

showFilter(courses, requiredRange1);
