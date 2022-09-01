class Weather {
    constructor() {

    }

    async getUser(user) {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '0e7d777bfemsh97303a9a4053102p1bbdc8jsneec3d0096d85',
                'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
            }
        };

        const response = await fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${user}&days=3`, options)
        const resultData = await response.json()
        return { resultData }
    }

}