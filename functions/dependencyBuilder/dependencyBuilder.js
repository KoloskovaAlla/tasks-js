/** 
 * @param dependencies объект с исходными зависимостями, в него же должен быть записан и ответ 
 * @param fetcher функция для получения информации о зависимостях пакета.  
 * @returns {Promise<void>} 
 */

const buildDependencyTree = async (
  dependencies,
  fetcher
) => {
  const fetchDependencies = async (packageName) => {
    for (let attempt = 0; attempt < 3; attempt++) {
      try {
        const result = await fetcher(packageName);
        return result.dependencies || [];
      } catch (error) {
        if (attempt === 2) throw error;
      }
    }
  }

  const buildTree = async (packageName, subtree) => {
    const dependencies = await fetchDependencies(packageName);
    if (dependencies.length === 0) return;
    for (const dependency of dependencies) {
      if (!subtree[dependency]) {
        subtree[dependency] = {};
        await buildTree(dependency, subtree[dependency]);
      }
    }
  }

  const packageNames = Object.keys(dependencies);
  for (const packageName of packageNames) {
    await buildTree(packageName, dependencies[packageName]);
  }

  // Возвращаем завершающий промис
  return dependencies;
};

// Пример использования функции
const fakeFetcher = async (packageName) => {
  // Имитируем получение зависимостей по имени пакета
  if (packageName === "core-js") {
    return { package: packageName, dependencies: ["npm", "yup"] }; // Для "core-js" возвращаем зависимости "npm" и "yup"
  } else {
    return { package: packageName, dependencies: [] }; // В остальных случаях возвращаем пустой список зависимостей
  }
};

buildDependencyTree(
  {
    "core-js": {},
    "har": {}
  },
  fakeFetcher
).then(result => {
  console.log(result); // Выводим результат выполнения в консоль
});

module.exports = buildDependencyTree;