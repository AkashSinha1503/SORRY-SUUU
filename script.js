$(document).ready(function () {
    //adding the current date
    $('#bday-title').before(`<p id="todays-date">${weekday} ${day} ${months[month]} ${year}</p>`);

    // sets the title of the website
    // setTitle();

    // sets the wishlist
    setWishlist();
});

// hard-coded array literals of day and month name abrevations
const days = ['', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const months = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

let date = new Date();

// getting date and time information.
let weekday = days[date.getDay()];
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let time = date.getHours();

function setTitle() {
    /*
    displays date and time related messages as the websites title
    */
    let title = $('#bday-title');
    if (day == 21 && month == 9) {
        title.text("Heyy! I am SORRY. I love you so much ♥");
    }
    else if (6 < time && time < 11) {
        title.text("Heyy! I am SORRY. I love you so much ♥");
    }
    else if (21 <= time || 6 >= time) {
        title.text("Heyy! I am SORRY. I love you so much ♥");
    }
    else {
        title.text("Heyy! I am SORRY. I love you so much ♥");
    }
}

// list of the things we want to do
let wishlist = [
    {description:"Have a Tech-Free Date Day Together", done: false, doneOn: 'NaN',},
    {description:"Plan our Future", done: false, doneOn: 'NaN',}, 
    {description:"Get a Couples Massage", done: false, doneOn: 'NaN',}, 
    {description:"Stargaze on a Rooftop", done: false, doneOn: 'NaN',}, 
    {description:"Write Each Other a Love Letter", done: false, doneOn: 'NaN',}, 
    {description:"Play a Sexy Game of Twister", done: false, doneOn: 'NaN',}, 
    {description:"Visit Each Others Home together", done: false, doneOn: 'NaN',}, 
    {description:"Binge Watch a New Web Series", done: false, doneOn: 'NaN',}, 
    {description:"Create a Couple Scrapbook", done: false, doneOn: 'NaN',}, 
    {description:"Get Naughty in Every Room in Your House", done: false, doneOn: 'NaN',}, 
    {description:"Stay Up All Night", done: false, doneOn: 'NaN',},
    {description:"Cook Dinner Together", done: false, doneOn: 'NaN',}, 
    {description:"Sing a Karaoke Duet", done: false, doneOn: 'NaN',}, 
    {description:"Take a Trip Somewhere New (Maldives)", done: false, doneOn: 'NaN',}, 
    {description:"Do a Spaghetti Kiss", done: false, doneOn: 'NaN',}, 
    {description:" Dress Up in a Couples Costume", done: false, doneOn: 'NaN',}, 
    {description:"Kiss on Top of a Giant Wheel", done: false, doneOn: 'NaN',}, 
    {description:" Sleep Under the Stars", done: false, doneOn: 'NaN',}, 
    {description:"Watch the Sunset and Sunrise in One Day", done: false, doneOn: 'NaN',}, 
    {description:" Stay in Bed All Day (& Night)", done: false, doneOn: 'NaN',}, 
    {description:"Cover the Bed in Rose Petals", done: false, doneOn: 'NaN',}, 
    {description:"Make Love in an Exciting Location (beaches & Mountains)", done: false, doneOn: 'NaN',}, 
    {description:"Make Out at the Drive-in", done: false, doneOn: 'NaN',}
    
];

/**
 * sets the input and label elements for the wishlist in HTML.
 */
function setWishlist() {
    for (let i = 0; i < wishlist.length; i++) {
        // to see if the wish is met
        let checked = wishlist[i].done === true ? 'checked': '';
        $('#wishlist-inner').append(`<p class="wish-labels">${wishlist[i].description}</p>`);
    }
}
