// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
    let eventPlanner = []
    let date = dayjs().format('dddd, MMMM, DD');
    console.log(date);
    let calender = $('#currentDay');
    calender.text(date);
    let currentHour = dayjs().hour();
    console.log(currentHour);

    $(function () {
      
      let nine = $('#hour-9');
      let ten = $('#hour-10');
      let eleven = $('#hour-11');
      let twelve = $('#hour-12');
      let thirteen = $('#hour-13');
      let fourteen = $('#hour-14');
      let fifteen = $('#hour-15');
      let sixteen = $('#hour-16');
      let seventeen = $('#hour-17');
      
      let hourCount = [9,10,11,12,13,14,15,16,17];
      
      let timeOfDay = [nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen];

      for (let i=0; i < timeOfDay.length; i ++)  {
        if (hourCount[i] == currentHour) {
          timeOfDay[i].attr('class', 'row time-block present');
        }else if (hourCount[i] < currentHour) {
          timeOfDay[i].attr('class', 'row time-block past');
        }else {
          timeOfDay[i].attr('class', 'row time-block future');
        }
      }
    }
    )

        let scedule = JSON.parse(localStorage.getItem('plannerData'));
        if (scedule) {
          eventPlanner = scedule
          for(i = 0; i < eventPlanner.length; i++) {
            const id = eventPlanner[i].id;
            $('#'+ id).children('textarea').val(eventPlanner[i].text)
          }
        }
        
        $('.saveBtn').click(function() {
          const parentDiv = $(this).parent()
          const id = parentDiv.attr('id')
          const text = parentDiv.children('textarea').val()
          eventPlanner.push({
            id:id,
            text:text
          })
          localStorage.setItem('plannerData',JSON.stringify(eventPlanner))
          console.log(id)
          console.log(text)
        });  

  });