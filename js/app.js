(function() {
    'use strict';
    //------------------------------------
    createForm();
    //------------------------------------
    function createForm() {
        var form = document.createElement('form');
        var container = document.getElementsByTagName('body')[0];
        form.name = 'userForm';
        form.action = 'http://google.com/';
        container.appendChild(form);
        for (var i = 0; i < 4; i++) {
            var input = document.createElement('input');
            var label = document.createElement('label');
            var br = document.createElement('br');
            input.type = 'text';
            form.appendChild(label);
            form.appendChild(input);
            form.appendChild(br);
        }
        document.getElementsByTagName('input')[0].name = 'age';
        document.getElementsByTagName('label')[0].textContent = 'Your age:';
        document.getElementsByTagName('input')[1].name = 'username';
        document.getElementsByTagName('label')[1].textContent = 'Username:';
        document.getElementsByTagName('input')[2].name = 'date';
        document.getElementsByTagName('label')[2].textContent = 'Date:';
        document.getElementsByTagName('input')[3].type = 'submit';
        document.getElementsByTagName('label')[3].textContent = 'Validate form:';
        document.getElementsByTagName('input')[3].value = 'Validate Me!';
        //--------------------------------
        form.onsubmit = function(e) {
            var age = document.getElementsByName('age')[0].value;
            //--------------------------------------
            var validateNumbers = new RegExp('\\d');
            if (!validateNumbers.test(age) || age <= 0 || age > 150) {
                alert('Age value is invalid');
            }
            var username = document.getElementsByName('username')[0].value;
            //--------------------------------------
            var validateUsername = new RegExp('user_');
            if (!validateUsername.test(username)) {
                alert('Your username is invalid');
            }
            return false;
        };
        //-------------------------------------
        function setDefaultDate() {
            var dateObject = new Date();
            var date = dateObject.getDate() + '/' + (dateObject.getMonth() + 1) + '/' + dateObject.getFullYear();
            document.getElementsByName('date')[0].value = date;
        }
        setDefaultDate();
    }
    //-------------------------------------
})();