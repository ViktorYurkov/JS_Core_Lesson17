//GET
getMetod.onclick = function sendGetMetod() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;

    var url = '/user-data?firstName=' + firstName + '&lastName=' + lastName;

    promiseGET(url)
        .then(function (response) {
                alert(response);
            },
            function (error) {
                alert(error);
            });
}
//
function promiseGET(url) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url);

        xhr.onload = function () {
            if (this.status == 200) {
                resolve(this.response);
            } else {
                var error = new Error(this.statusText);
                error.code = this.status;
                reject(error);
            }
        }
        xhr.onerror = function () {
            reject(new Error('Nerwork error'));
        };
        xhr.send();
    });
}
// POST
postMetod.onclick = function sendPostMetod() {
    promisePostServer()
        .then(
            function (response) {
                alert(response);
            },
            function (error) {
                alert(error);
            });
}

function promisePostServer(url) {
    return new Promise(function (resolve, reject) {
        var userData = {
            firstName: document.getElementById("firstNamePost").value,
            lastName: document.getElementById("lastNamePost").value
        };
        var xhr = new XMLHttpRequest();
        xhr.open('POST', '/user-data');
        xhr.setRequestHeader('Content-Type', 'application/json');

        xhr.onload = function () {
            if (this.status == 200) {
                resolve(this.response);
            } else {
                var error = new Error(this.statusText);
                error.code = this.status;
                reject(error);
            }
        }
        xhr.onerror = function () {
            reject(new Error('Nerwork error'));
        };
        xhr.send(JSON.stringify(userData));
    });
}
