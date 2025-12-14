
      let isNight = false;

      function night() {
        const moon = document.getElementById("moon");

        if (isNight === false) {
          // day -> night
          document.body.style.background =
            "linear-gradient(135deg, #0d1b2a, #1b263b, #000000)";
            document.querySelector(".krishna").style.background =
              "linear-gradient(135deg, #FFE59D, #FFB347, #F98B20)";
              document.querySelector(".krishna").style.color = "white";
            document.querySelector(".krishna").innerText = "Light Mode";
          document.querySelector(".heading h1").style.color = "white";
          document.querySelector(".container").style.boxShadow = "0 0 40px #ff8c00, 0 0 80px #ffbb33";
          makeMoon();
          isNight = true;
        } else {
          // night -> day
          document.body.style.background =
            "linear-gradient(135deg, #FFE59D, #FFB347, #F98B20)";
          document.querySelector(".krishna").style.background =
              "linear-gradient(135deg, #0d1b2a, #1b263b, #000000)";
          document.querySelector(".krishna").innerText = "Night Mode";
          document.querySelector(".heading h1").style.color = "black";

          document.querySelector(".container").style.boxShadow = "0 0 20px #ffffcc, 0 0 40px rgba(255,255,200,0.5);";

          makeSun();
          isNight = false;
        }
      }

      document.querySelector(".krishna").onclick = night;

      // create moon
      function makeMoon() {
        const moon = document.getElementById("moon");
        moon.innerHTML = "";
        moon.style.background = "#f5f3ce";
        moon.style.boxShadow = "0 0 20px #ffffcc";

        const crescent = document.createElement("div");
        crescent.className = "crescent";
        crescent.style.width = "80px";
        crescent.style.height = "80px";
        crescent.style.borderRadius = "50%";
        crescent.style.position = "absolute";
        crescent.style.left = "30px";
        crescent.style.top = "0";
        crescent.style.background = "#0d1b2a";

        moon.appendChild(crescent);
      }

      // restore sun
      function makeSun() {
        const moon = document.getElementById("moon");
        moon.innerHTML = "";
        moon.style.background = "radial-gradient(circle, #ffdf70, #ff8c00)";
        moon.style.boxShadow = "0 0 40px #ff8c00, 0 0 80px #ffbb33";
      }