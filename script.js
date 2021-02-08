
var myCallbacks = {
    ensureMinAndMax: function () {
        if (document.getElementById("lengthOfPassword").value < 8) {
            document.getElementById("lengthOfPassword").value = 8;
        } else if (document.getElementById("lengthOfPassword").value > 128) {
            document.getElementById("lengthOfPassword").value = 128;
        }
    },

}

// event listener to generate button
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);


function writePassword() {

    var characterTypes = getCheckedCheckboxesForCharacterTypes();

    if (!characterTypes.length) {
        alert("You must check at least one checkbox.");
        return;
    }


    // number of password length
    var passwordLength = document.getElementById("lengthOfPassword").value;
    var password = "";

    for (var x = 0; x < passwordLength; x++) {
        var characterType = getRandomItem(characterTypes);
        var randomCharacter = getRandomCharacter(characterType);
        console.log(characterType, randomCharacter)
        password += randomCharacter;
    }

    var passwordText = document.querySelector("#password");
    passwordText.value = password;
};

// criteria check boxes
function getCheckedCheckboxesForCharacterTypes() {
    var checkboxes = document.querySelectorAll('input[name="characterType"]:checked');
    var checkBoxesEnabled = [];
    for (var x = 0; x < checkboxes.length; x++) {
        checkBoxesEnabled.push(checkboxes[x].value);
    }
    return checkBoxesEnabled;
}
// randomize 
function getRandomItem(arrayOfItems) {
    // takes in an array and returns a random item
    return arrayOfItems[Math.floor(Math.random() * arrayOfItems.length)];
}
// map of allowe characters
function getRandomCharacter(characterType) {
    var choices = {
        num: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
        lowChar: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
        upperChar: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
        specialChar: ["!", "@", "#", "$", "%", "^", "&", "*"],
    }
    var characters = choices[characterType];
    return getRandomItem(characters);
}
