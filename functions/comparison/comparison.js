function solution(oldSchema, newSchema) {
  // Проверяем, идентичны ли обе схемы
  if (JSON.stringify(oldSchema) === JSON.stringify(newSchema)) {
    // console.log('patch');
    return "patch"; // Нет изменений
  }

  // Проверяем наличие удаленных модулей
  const modulesRemoved = oldSchema.filter(entry => !newSchema.some(newEntry => newEntry.name === entry.name));
  if (modulesRemoved.length > 0) {
    console.log('major');
    return "major"; // Удаление модулей, это major изменение
  }



for (const newEntry of newSchema) {
  const oldEntry = oldSchema.find(oldEntry => oldEntry.name === newEntry.name);
  if (oldEntry && oldEntry.type !== newEntry.type) {
    // Проверяем, является ли новый тип подмножеством старого типа
    if (isSubsetOf(newEntry.type, oldEntry.type)) {
      continue; // Продолжаем итерацию, так как это расширение типа, а не сужение
    } else {
      console.log('тут');
      return "major"; // Сужение типа, это major изменение
    }
  }
}

  // Проверяем наличие минорных изменений: расширение типа модуля
for (const newEntry of newSchema) {
  const oldEntry = oldSchema.find(oldEntry => oldEntry.name === newEntry.name);
  if (oldEntry && oldEntry.type !== newEntry.type) {
    // Проверяем, является ли новый тип подмножеством старого типа
  if (newEntry.type.split(" | ").some(type => !oldEntry.type.split(" | ").includes(type))) {
    console.log('minor');
    return "minor"; // Расширение типа, это minor изменение
  }
   
  }
}
  // Проверяем наличие добавленных модулей
const modulesAdded = newSchema.filter(entry => !oldSchema.some(oldEntry => oldEntry.name === entry.name));
if (modulesAdded.length > 0) {
  console.log('minor');
  return "minor"; // Добавление новых модулей, это minor изменение
}
  // Если ни одно изменение не найдено, считаем это патчем
  // console.log('patch');
  return "patch";
}

/**
 * Проверяет, является ли тип subset подмножеством superset.
 * @param {string} subset - Подмножество.
 * @param {string} superset - Супермножество.
 * @return {boolean} - Возвращает true, если subset является подмножеством superset, иначе false.
 */
function isSubsetOf(subset, superset) {
  const subsetTypes = subset.split(" | ");
  const supersetTypes = superset.split(" | ");

  // Проверяем, все ли типы subset содержатся в superset
  return subsetTypes.every(subType => supersetTypes.includes(subType));
}

solution([
  {
    name: "x",
    type: "number",
  },
  {
    name: "y",
    type: "string",
  },
],
[
  {
    name: "x",
    type: "number | string",
  },
  {
    name: "y",
    type: "string | undefined",
  },
]);

module.exports = solution;