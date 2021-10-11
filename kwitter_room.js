const firebaseConfig = {
      apiKey: "AIzaSyANTj-lvC1O3M3a1aIbPB970sdPqidtMeY",
      authDomain: "kwitter-2e560.firebaseapp.com",
      databaseURL: "https://kwitter-2e560-default-rtdb.firebaseio.com",
      projectId: "kwitter-2e560",
      storageBucket: "kwitter-2e560.appspot.com",
      messagingSenderId: "385809595778",
      appId: "1:385809595778:web:59cfc5e79a8fd3caaaa39b",
      measurementId: "G-JVJ1LM1T2J"
};


firebase.initializeApp(firebaseConfig);

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code

                  //End code
            });
      });
}
getData();