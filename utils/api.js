export const fetchData = async (url) => {
    try {
        const response = await fetch(url);
        const json = await response.json();
        return json;
    } catch (error) {
        console.error('Ошибка загрузки:', error);
        throw error;
    }
};npx react-native start