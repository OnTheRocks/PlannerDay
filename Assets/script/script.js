

// Puts day and current time in header
var today = moment().format('dddd, MMMM Do', true);
$('#currentDay').html(today);

var time = moment().format('h:mm A');
var hour = moment().format("HH");
$('#currentTime').html("The current time is: " + time);


 var blocks = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
 var tArray = [9, 10, 11, 12, 13, 14, 15, 16, 17];
 var events = ["", "", "", "", "", "", "", "", ""];
 var planner = $("#schedule")

//  check local storage


//Render the schedule
function renderSchedule() {

  //Making a schedule row for every element of blocks
  for (var i = 0; i< 9; i++) {
      var addRow = $("<div>").addClass("input-group row").attr("id", blocks[i])


      //Adding column for the time, the event, and a save button (three divs)
      var addHour = $("<div>").addClass(" input-group-prepend input-group-text hour")
      addHour.text(blocks[i])
      addRow.append(addHour)

      var addTask = $("<textarea>").addClass("form-control").attr("id", blocks[i])
      addTask.text(events[i])
      addRow.append(addTask)

           //Color the different event divs
      if (tArray[i] == hour) {
          addTask.addClass("present")
      }
      
        else if (tArray[i] < hour) {
        addTask.addClass("past")


      }else {
        addTask.addClass("future")
      }

      var saveBtns = $("<button>").addClass("saveBtn save").attr("id", blocks[i] + "save")
      saveBtns.addClass("fa fa-save icon")
      addRow.append(saveBtns)
      
      planner.append(addRow)
  }
}

//Initial page render
renderSchedule()

//save to local storage 


