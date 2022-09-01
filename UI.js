class UI {
    constructor() {
        this.locationName = document.querySelector('#location-name')
        this.rightBucket = document.querySelector('.right-bucket')
        this.dashBtn = document.querySelector('.dash-btn')
        this.leftBucketMiddle = document.querySelector('.left-bucket-middle')
        this.leftBucketData = document.querySelector('.left-bucket-bottom')
        this.table = document.querySelector('table');
        this.otherLocationList = document.querySelector('.other-location-list')

    }

    // clearing the input Field
    clearInputField() {
            this.locationName.value = ''
        }
        // sliding the field into view
    slideFieldIn() {
            this.rightBucket.style.display = 'block';
            this.rightBucket.style.right = '0';
            this.dashBtn.style.display = 'none'

        }
        //Sliding field out of view
    slideFieldOut() {
        this.dashBtn.style = 'display:block'
        this.rightBucket.style = 'right:-1000rem';
        this.rightBucket.style = 'display:none';
    }

    // displaying location data
    displayLocationData(data) {
        this.leftBucketMiddle.innerHTML = `
        <h4>Weather Prediction: ${data.current.condition.text}</h4>

        `
        const day = data.forecast.forecastday
            // console.log(day[0].day.condition)
        this.leftBucketData.innerHTML = `
        <span class="degree"><h1>${data.current.temp_c}<sup>o</sup></h1></span>
        <div class="location-date">
            <h3><span class="material-icons-sharp map">location_on</span>${data.location.name}</h3>
            <h6>${data.location.localtime}</h6>
        </div>
        <div class="weather-icon-name">
            <span class="weather-icon"><img src="${data.current.condition.icon}" alt="" class="left-icon"></span>
            
        </div>
        `
        this.table.innerHTML = `
        <thead>
            <tr>
                <th></th>
                <th>Humidy</th>
                <th>Icon</th>
                <th>Expected</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Today in ${data.location.name}</td>
                <td>${data.current.humidity}</td>
                <td><img src="${data.current.condition.icon}" alt=""></td>
                <td>${data.current.condition.text}</td>
            </tr>
            <tr>
                <td>${day[0].date}</td>
                <td>${day[0].day.avghumidity}</td>
                <td><img src="${day[0].day.condition.icon}" alt="${day[0].day.condition.text}" ></td>
                <td>${day[0].day.condition.text}</td>
            </tr>
            <tr>
                <td>${day[1].date}</td>
                <td>${day[1].day.avghumidity}</td>
                <td><img src="${day[1].day.condition.icon}" alt="${day[1].day.condition.text}" ></td>
                <td>${day[1].day.condition.text}</td>
            </tr>
            <tr>
                <td>${day[2].date}</td>
                <td>${day[2].day.avghumidity}</td>
                <td><img src="${day[2].day.condition.icon}" alt="${day[2].day.condition.text}" ></td>
                <td>${day[2].day.condition.text}</td>
            </tr>
    
        </tbody>
        `
    }

    // SHOW STAR LOCATION LIST
    showStarLocationName(lastLocation) {
        this.otherLocationList.innerHTML = `
        <li class="quick-find">${lastLocation[0]}</li>
        <li class="quick-find">${lastLocation[1]}</li>
        <li class="quick-find">${lastLocation[2]}</li>
        <li class="quick-find">${lastLocation[3]}</li>
        `

    }


}