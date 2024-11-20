// test object
var test = {    
    fname: "justin",
    lname:"glover",
    age: 20,
    display: function(){
        console.log("in function")
        return this.fname + " " + this.lname;
    }
};
console.log(test.display());

// hotel reservation
var guestgroup = new Array();
$('#submit').click(reservation);
function reservation(){
    var guest={
        name: $('#guestname').val,
        checkin: $('#checkinday').val,
        checkout: $('#checkoutday').val,
        guests: $('#numofguests').val,
        room: $("#roomtype").val
    }
    alert(guest.name + " Reserve a Room");
    guestgroup.push(guest);
    console.log(guestgroup);
}