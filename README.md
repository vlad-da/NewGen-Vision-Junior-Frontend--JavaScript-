 # Аннотация к заданию 

Цена **[500, null]** считается "от 500", **[null, 400]** - до 400 и **[null, null]** - все значения
Цены рассмотрены на числовой прямой с пересечениями, то есть [null, null] будет содержать все значения (весь массив ).

## Первый фильтр **[null, 200]**:
Фильтр [null, 200] будет содержать все значения до 200 (*England*, *Italy*, *Russia* (так как значение до 400, то в какой-то момент будет пересечение с 200 и ниже), 
*China* (так как значение от 50 до 250, то в какой-то момент будет пересечение с 200 и ниже), *USA* (так как значение от 200), 
*Kazakhstan* (так как значение от 56 до 324, то в какой-то момент будет пересечение с 200 и ниже), *France* (так как значение от 0 и до бесконечности, то найдётся число от null до 200)).

## Второй фильтр **[100, 350]**:
Фильтр **[100, 350]** будет содержать все значения от 100 до 350 (*England*, *Italy*, *Russia* (так как значение до 400, то в какой-то момент будет пересечение с промежутком от 100 до 350, где будет иметься курс, входящий в диапазон), *China*, *USA*, *Kazakhstan*, *France* (так как значение от 0 и до бесконечности, то найдётся число от 100 до 350)).

## Третий фильтр **[200, null]**:
Фильтр **[200, null]** будет содержать все значения от 200 (*Germany* (так как значение от 500, то в какой-то момент будет пересечение с 200 и выше), *Italy*, 
*Russia* (так как значение до 400, то будет пересечение от 200 до 400), *China* (так как от 50 до 250, то будет пересечение от 200 до 250), *USA*, 
*Kazakhstan* (так как от 56 до 324, то будет пересечение от 200 до 324), *France* (так как значение от 0 и до бесконечности, то найдётся число от 200 до null)
