flatpickr("#datepicker", {
    minDate: "today",
    dateFormat: "d-m-Y",
    disableMobile: false, // Enable mobile-friendly mode
});


$(".tourist-group").on('click', function (event) {
    $(".tourist-dropdown").addClass("active");
    event.stopPropagation();
});


$("#pax-detail2").on('click', function (event) {
    $(".tourist-dropdown2").addClass("active");
    event.stopPropagation();
});

$("#closeDropdown").on('click', function (event) {
    $(".tourist-dropdown").removeClass("active");
    event.stopPropagation();
});




const adults_val = $('#adults_val');
const adults = $('#adults');
const maxAdults = 50;

$('#adults_inc').on('click', function () {
    const currentValue = JSON.parse(adults_val.val());
    if (currentValue < maxAdults) {
        adults_val.attr('value', currentValue + 1);
        updateAdults();
    }
});

$('#adults_dec').on('click', function () {
    if (adults_val.val() > 0) {
        adults_val.attr('value', JSON.parse(adults_val.val()) - 1);
        updateAdults();
    }
});

function updateAdults() {
    const total_p = JSON.parse(adults_val.val());
    adults.attr('value', total_p);

    // Update cursor style based on the current value
    if (total_p === maxAdults) {
        $('#adults_inc').css('cursor', 'not-allowed');
    } else {
        $('#adults_inc').css('cursor', 'pointer');
    }
}

// Disable increment button when current value equals maximum value
if (parseInt(adults_val.val()) === maxAdults) {
    $('#adults_inc').prop('disabled', true);
}




const children_val = $('#children_val');
const children = $('#children');
const maxchildren = 50;

$('#children_inc').on('click', function () {
    const currentValue = JSON.parse(children_val.val());
    if (currentValue < maxchildren) {
        children_val.attr('value', currentValue + 1);
        updatechildren();
    }
});

$('#children_dec').on('click', function () {
    if (children_val.val() > 0) {
        children_val.attr('value', JSON.parse(children_val.val()) - 1);
        updatechildren();
    }
});

function updatechildren() {
    const total_p = JSON.parse(children_val.val());
    children.attr('value', total_p);

    // Update cursor style based on the current value
    if (total_p === maxchildren) {
        $('#children_inc').css('cursor', 'not-allowed');
    } else {
        $('#children_inc').css('cursor', 'pointer');
    }
}

// Disable increment button when current value equals maximum value
if (parseInt(children_val.val()) === maxchildren) {
    $('#children_inc').prop('disabled', true);
}
















const infants_val = $('#infants_val');
       const infants = $('#infants');
       const maxinfants = 50;

       $('#infants_inc').on('click', function () {
           const currentValue = JSON.parse(infants_val.val());
           if (currentValue < maxinfants) {
               infants_val.attr('value', currentValue + 1);
               updateinfants();
           }
       });

       $('#infants_dec').on('click', function () {
           if (infants_val.val() > 0) {
               infants_val.attr('value', JSON.parse(infants_val.val()) - 1);
               updateinfants();
           }
       });

       function updateinfants() {
           const total_p = JSON.parse(infants_val.val());
           infants.attr('value', total_p);

           // Update cursor style based on the current value
           if (total_p === maxinfants) {
               $('#infants_inc').css('cursor', 'not-allowed');
           } else {
               $('#infants_inc').css('cursor', 'pointer');
           }
       }

       // Disable increment button when current value equals maximum value
       if (parseInt(infants_val.val()) === maxinfants) {
           $('#infants_inc').prop('disabled', true);
       }



    flatpickr("#datepicker", {
    minDate: "today",
    dateFormat: "d-m-Y",
    disableMobile: false,
    onChange: function(selectedDates, dateStr, instance) {
        $('#selected-date').text(dateStr);
    }
});
















