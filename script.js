var ramadaLimit = 40;
var clarkinLimit = 23;
var royalResidencyLimit = 54;

var ramadaBooked = 0;
var clarkinBooked = 0;
var royalResidencyBooked = 0;

function calculateTotal() {
    console.log("calculateTotal() called");
    var registrationType = document.getElementById("registrationType").value;
    var companion = document.querySelector('input[name="companion"]:checked').value;
    var accommodation = document.getElementById("accommodation").checked;
    var hotelCost = 0;
    var companionCost = (companion === 'yes') ? 1000 : 0;

    if (accommodation) {
        var hotel = document.getElementById("hotel").value;
        var occupancy = document.getElementById("occupancy").value;
        var nights = document.querySelector('input[name="nights"]:checked');

        if (nights) {
            nights = parseInt(nights.value);
        } else {
            nights = 1; // Default to 1 night if not selected
        }

        if (hotel === "Ramada") {
            if (occupancy === "single") {
                if (ramadaBooked < ramadaLimit) {
                    hotelCost = 4500 * nights;
                    ramadaBooked++;
                } else {
                    alert("No more single occupancy beds available at Ramada.");
                }
            } else if (occupancy === "double") {
                if (ramadaBooked + 2 <= ramadaLimit) {
                    hotelCost = 2000 * nights;
                    ramadaBooked += 2;
                } else {
                    alert("No more double occupancy beds available at Ramada.");
                }
            }
        } else if (hotel === "Clarkinn") {
            if (occupancy === "single") {
                if (clarkinBooked < clarkinLimit) {
                    hotelCost = 4500 * nights;
                    clarkinBooked++;
                } else {
                    alert("No more single occupancy beds available at Clarkinn.");
                }
            } else if (occupancy === "double") {
                if (clarkinBooked + 2 <= clarkinLimit) {
                    hotelCost = 2000 * nights;
                    clarkinBooked += 2;
                } else {
                    alert("No more double occupancy beds available at Clarkinn.");
                }
            }
        } else if (hotel === "RoyalResidency") {
            if (occupancy === "single") {
                if (royalResidencyBooked < royalResidencyLimit) {
                    hotelCost = 4500 * nights;
                    royalResidencyBooked++;
                } else {
                    alert("No more single occupancy beds available at Royal Residency.");
                }
            } else if (occupancy === "double") {
                if (royalResidencyBooked + 2 <= royalResidencyLimit) {
                    hotelCost = 2000 * nights;
                    royalResidencyBooked += 2;
                } else {
                    alert("No more double occupancy beds available at Royal Residency.");
                }
            }
        }
    }

    var registrationCost = (registrationType === 'delegate') ? 2500 : 2000;
    var totalCost = registrationCost + companionCost + hotelCost;

    document.getElementById("companionCost").textContent = companionCost;
    document.getElementById("displayTotal").textContent = totalCost;
    document.getElementById("totalCostInput").value = totalCost;
  
}

function showHotelDropdown() {
    var accommodation = document.getElementById("accommodation").checked;
    var hotelDropdown = document.getElementById("hotelDropdown");
    var nightOptions = document.getElementById("nightOptions");

    hotelDropdown.style.display = accommodation ? "block" : "none";
    nightOptions.style.display = "none";

    if (accommodation) {
        var hotel = document.getElementById("hotel").value;
        if (hotel !== "") {
            nightOptions.style.display = "block";
        }
    }

    if (!accommodation) {
        ramadaBooked = 0;
        clarkinBooked = 0;
        royalResidencyBooked = 0;
    }

    calculateTotal();
}
