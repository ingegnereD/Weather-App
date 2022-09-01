const weather = new Weather;
const ui = new UI;
const storage = new Databank;

const dashBtn = document.querySelector('.dash-btn')
const closeSlider = document.querySelector('.close-slider')
const clearField = document.querySelector('.close-btn')
const findLocationBtn = document.querySelector('.find-btn')
const locationName = document.querySelector('#location-name')
const otherLocationList = document.querySelector('.other-location-list')


// Event listeners
dashBtn.addEventListener('click', slideIn)
closeSlider.addEventListener('click', slideOut)
clearField.addEventListener('click', clearInputValue)
findLocationBtn.addEventListener('click', findLocationData)
otherLocationList.addEventListener('click', findOtherLocation)

function slideIn(e) {
    ui.slideFieldIn()
    e.preventDefault();
}

function slideOut(e) {
    ui.slideFieldOut()
    e.preventDefault()
}

function clearInputValue(e) {
    ui.clearInputField()
    e.preventDefault()
}

// array of last locations

function showStarLocation() {

}

// This function is called after clicking on the search icon
function findLocationData(e) {
    let enteredText = locationName.value;
    if (enteredText !== '') {
        const starLocation = ['Akure', 'Ilesha', 'Oshogbo', 'Lagos'];
        if (starLocation.includes(enteredText) == true) {
            ui.showStarLocationName(starLocation);
            console.log('True', starLocation)

        } else {
            starLocation.pop()
            starLocation.unshift(enteredText);
            console.log('false', starLocation)
            ui.showStarLocationName(starLocation)

        }
        // ui.showStarLocationName(starLocation)
        weather.getUser(enteredText)
            .then(res => {
                // console.log(res.resultData)
                ui.displayLocationData(res.resultData)
                ui.clearInputField()
            })
    } else {
        console.log('No entered text')
            // ui.showEmptyFieldAlert()

    }
    e.preventDefault()
}

function showFirstData() {
    weather.getUser('Akure')
        .then(res => { ui.displayLocationData(res.resultData) })
}
showFirstData()

function findOtherLocation(e) {
    if (e.target.classList.contains('quick-find')) {
        weather.getUser(e.target.innerText)
            .then(res => { ui.displayLocationData(res.resultData) })
    }
    e.preventDefault()
}