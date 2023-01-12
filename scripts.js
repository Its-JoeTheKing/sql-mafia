let config = {
    locateFile: () => "./sql-wasm.wasm",
};
initSqlJs(config).then(function (SQL) {
    console.log("sql.js initialized 🎉");
    const db = new SQL.Database();
    // persons database
    db.run("CREATE TABLE persons (name varchar,origine varchar,address varchar,height int,hair varchar,color varchar,work varchar,money int)")
    db.run("INSERT INTO persons VALUES('Joe McMan','USA','876 New York',67,'black','white','market',80800)")
    db.run("INSERT INTO persons VALUES('Jonathan Smith','Africa','212 California',70,'black','black','business man',10000000)")
    db.run("INSERT INTO persons VALUES('Freeman Joseph','USA','983 New York',66,'yellow','white','candy shop',70000)")
    db.run("INSERT INTO persons VALUES('Smith Mckney','USA','198 California',72,'black','black','police man',80800)")
    db.run("INSERT INTO persons VALUES('Bully Stones','USA','272 Detroit',72,'black','white','police man',80800)")
    db.run("INSERT INTO persons VALUES('Bob Show','USA','456 Detroit',70,'black','black','police man',80800)")
    db.run("INSERT INTO persons VALUES('Shaw Hadson','USA','142 Detroit',71,'black','black','police man',80800)")
    db.run("INSERT INTO persons VALUES('Mark McMahon','USA','272 California',72,'black','white','police man',80800)")
    db.run("INSERT INTO persons VALUES('Johan Santos','Greece','745 New York',68,'black','white','unknown',80800)")
    db.run("INSERT INTO persons VALUES('Steven Jobs','USA','224 Las Vegas',64,'black','white','drugs seller',1000000)")
    db.run("INSERT INTO persons VALUES('Bob Hanson','USA','534 California',67,'black','white','drugs seller',1000000)")
    db.run("INSERT INTO persons VALUES('Johny Madison','USA','978 Los Stantos',69,'black','white','drugs seller',1000000)")
    db.run("INSERT INTO persons VALUES('Joan Koun','Spanish','224 Las Vegas',64,'black','white','drugs seller',1000000)")
    db.run("INSERT INTO persons VALUES('Girard Goodman','USA','272 Los Santos',70,'black','white','artist',80800)")
    db.run("INSERT INTO persons VALUES('Sellena Jones','Brazil','132 New York',66,'black','white','artist',1000000)")
    db.run("INSERT INTO persons VALUES('Jack Jones','USA','987 New York',66,'black','white','artist',1000000)")
    db.run("INSERT INTO persons VALUES('Michael Buble','USA','541 California',66,'black','white','artist',2000000)")
    db.run("INSERT INTO persons VALUES('Yamano Fujirawa','Japan','458 Las Vegas',67,'black','white','market',80800)")
    db.run("INSERT INTO persons VALUES('Williams Jones','USA','234 Detroit',67,'black','white','professor',1000000)")
    db.run("INSERT INTO persons VALUES('John Wet','USA','198 New York',65,'yellow','white','gang member',1000000)")
    db.run("INSERT INTO persons VALUES('Johnson Mac','USA','232 California',68,'black','white','journalist',1000000)")
    db.run("INSERT INTO persons VALUES('TheRaBioT','Mexico','656 Los Santos',59,'red','white','hacker',800000)")
    db.run("INSERT INTO persons VALUES('ThePuNiSher','USA','126 Los Santos',68,'black','black','hacker',800000)")
    db.run("INSERT INTO persons VALUES('Slim0x','USA','154 New York',68,'white','golden','hacker',800000)")
    db.run("INSERT INTO persons VALUES('DestroyX2','USA','298 Califoria',65,'black','black','hacker',800000)")
    db.run("INSERT INTO persons VALUES('SQLKing','USA','126 Los Santos',68,'black','black','hacker',800000)")
    db.run("INSERT INTO persons VALUES('LogicX','USA','126 Los Santos',68,'black','black','hacker',800000)")
    db.run("INSERT INTO persons VALUES('John Slim','UK','634 Las Vegas',67,'yellow','white','criminal',800000)")
    db.run("INSERT INTO persons VALUES('Jack Justin','USA','614 Las Vegas',67,'black','white','criminal',800000)")
    db.run("INSERT INTO persons VALUES('James Jones','USA','512 Florida',70,'black','black','criminal',800000)")
    db.run("INSERT INTO persons VALUES('Joseph John','UK','634 Florida',67,'yellow','white','criminal',800000)")
    db.run("INSERT INTO persons VALUES('John Simps','USA','634 Las Vegas',70,'black','black','criminal',800000)")
    db.run("INSERT INTO persons VALUES('John Slims','USA','621 Las Vegas',70,'black','black','criminal',800000)")
    db.run("INSERT INTO persons VALUES('Limo Snuza','Argantina','453 Las Vegas',68,'black','white','barber',800000)")
    db.run("INSERT INTO persons VALUES('Lonez Polos','Brazil','453 New York',69,'black','black','barber',800000)")
    db.run("INSERT INTO persons VALUES('Lopez Carlos','Brazil','134 Las Vegas',68,'black','white','barber',800000)")
    db.run("INSERT INTO persons VALUES('Vito Simone','Italy','215 California',67,'black','white','barber',800000)")
    db.run("INSERT INTO persons VALUES('Carl Bobs','USA','287 California',68,'black','white','Lawyer',500000)")
    db.run("INSERT INTO persons VALUES('John Bobs','USA','231 Florida',69,'black','white','Lawyer',500000)")
    db.run("INSERT INTO persons VALUES('Jimmy Bobs','USA','144 Texas',68,'black','white','Lawyer',500000)")
    db.run("INSERT INTO persons VALUES('Tom Hadson','USA','980 New York',68,'black','white','Lawyer',500000)")
    db.run("INSERT INTO persons VALUES('Bob Everton','USA','253 Detroit',67,'black','black','Lawyer',500000)")
    db.run("INSERT INTO persons VALUES('Bunny Everton','USA','229 Florida',66,'black','white','Lawyer',500000)")
    db.run("INSERT INTO persons VALUES('John Kingstone','USA','279 Las Vegas',69,'yellow','white','Lawyer',500000)")

    // doors system database
    db.run("CREATE TABLE sys (name varchar,codes int,isOpen bool)");
    db.run("INSERT INTO sys VALUES('door-14',204214,false)");
    db.run("INSERT INTO sys VALUES('door-12',234214,false)");
    db.run("INSERT INTO sys VALUES('door-15',22311,false)");
    db.run("INSERT INTO sys VALUES('door-13',382,false)");
    db.run("INSERT INTO sys VALUES('door-10',332,false)");
    db.run("INSERT INTO sys VALUES('door-11',392,false)");
    db.run("INSERT INTO sys VALUES('door-99',1412,false)");
    
    // prisoners database
    db.run("CREATE TABLE prisoners (prisoner varchar,join_date,out_date)");
    db.run("INSERT INTO prisoners VALUES('Joe SQL','10-10-1998','10-10-2023')");
    db.run("INSERT INTO prisoners VALUES('Harry SQL','12-10-1998','12-10-2024')");
    db.run("INSERT INTO prisoners VALUES('Z-Hero SQL','11-10-1998','13-10-2022')");

    // fetching data from database table
    var input = document.getElementById("command");
    input.addEventListener('keypress', (e) => {
        if (e.key == "Enter") {
            document.getElementById("col").innerHTML = ""
            document.getElementsByTagName("tbody")[0].innerHTML = "";
            var res = db.exec(input.value)
            if (res[0]) {
                cols = res[0]["columns"]
                vals = res[0]["values"]
                input.value = "";
                cols.forEach(col => {
                    document.getElementById("col").innerHTML += "<th>" + col + "</ht>";
                });
                for (var i = 0; i < vals.length; i++) {
                    document.getElementsByTagName("tbody")[0].innerHTML += "<tr id='col-" + i + "'></tr>";
                    for (j = 0; j < vals[i].length; j++) {
                        document.getElementById("col-" + i.toString()).innerHTML += "<td>" + vals[i][j] + "</td>";
                    }
                    if (i==2) {
                        break;
                    }
                }
            }
        }
    })


    // missions


    document.getElementById("start").onclick = () => {
        document.getElementById("start").style.display = "none";
        first_mission();
    
    }
    var first_mission = () => {
            document.getElementById("pilot").innerHTML = "<p>Congratulations, Your First Mission Is To Find The Name Of An African Business man</p>"
            document.getElementById("submit").onclick = () => {
                if(document.getElementById("answer").value == "Jonathan Smith") {
                    setTimeout(() => {
                        second_mission()
                    }, 3000);
                    document.getElementById("pilot").innerHTML = "<p>The Godfather toke a good loan to start the drugs selling business</p>";
                } else {
                    alert("You Made A Mistake Retry Again")
                }
            }
    }
    var second_mission = () => {
        document.getElementById("pilot").innerHTML = "<p>Next Mission Is To Find The Address Of Our drug seller His name start with 'Steven'</p>"
            document.getElementById("submit").onclick = () => {
                if(document.getElementById("answer").value == "224 Las Vegas") {
                    setTimeout(() => {
                        third_mission()
                    }, 3000);
                    document.getElementById("pilot").innerHTML = "<p>Great We Bought A Good Quantity To Start Our Business</p>";
                } else {
                    alert("You Made A Mistake Retry Again")
                }
            }
    }
    var third_mission = () => {
        document.getElementById("pilot").innerHTML = "<p>Your Mission Today Is To Find The Address Of a black police man his name start with 'Smith' To Make Sure That Our Business Is Safe </p>"
            document.getElementById("submit").onclick = () => {
                if(document.getElementById("answer").value == "198 California") {
                    setTimeout(() => {
                        fourth_mission()
                    }, 3000);
                    document.getElementById("pilot").innerHTML = "<p>Great News Our Business Is Totally Safe We Bought Smith As Spy In Police Departement</p>";
                } else {
                    alert("You Made A Mistake Retry Again")
                }
            }
    }
    var fourth_mission = () => {
        document.getElementById("pilot").innerHTML = "<p>It's Time To Celebrate Our Success, Find Address Of Our Artist He is The Richest Artist in USA</p>"
        document.getElementById("submit").onclick = () => {
            if(document.getElementById("answer").value == "541 California") {
                setTimeout(() => {
                    mission5()
                }, 3000);
                document.getElementById("pilot").innerHTML = "<p>'Rainbow Rainbow Rainbow dance with me' - Michael Buble</p>";
            } else {
                alert("You Made A Mistake Retry Again")
            }
        }
    }
    var mission5 = () => {
        document.getElementById("pilot").innerHTML = "<p>I Have A Bad News For You Some of Our Family Members Arrested By Polices Of California, And We Need To Get Them Back Please Find The address Our Lawyer His Last Name Is Bobs And He Lives Somewhere in California</p>"
        document.getElementById("submit").onclick = () => {
            if(document.getElementById("answer").value == "287 California") {
                setTimeout(() => {
                    mission6()
                }, 3000);
                document.getElementById("pilot").innerHTML = "<p>Done, I Will Call You After The Court </p>";
            } else {
                alert("You Made A Mistake Retry Again")
            }
        }
    }
    var mission6 = () => {
        document.getElementById("pilot").innerHTML = "<p>Ohh Noo, Bobs Failed To Save Our Members, Time To Do Some Hard Work, I Just Remembered A Criminal Who Has A Big Experience In Prison Break He Is black Guy And His Height About 70 He Live Somewhere In Florida Find His Address</p>"
        document.getElementById("submit").onclick = () => {
            if(document.getElementById("answer").value == "512 Florida") {
                setTimeout(() => {
                    mission7()
                }, 3000);
                document.getElementById("pilot").innerHTML = "<p>'Ya All My Respect For The SQL Familly, I Will Fight Till The End With My Familly' - James Jones</p>";
            } else {
                alert("You Made A Mistake Retry Again")
            }
        }
    }
    var mission7 = () => {
        document.getElementById("pilot").innerHTML = "<p>Time For Some Action, Find The Address Of SQLKing We Need To Hack The Database Of This Prison </p>"
        document.getElementById("submit").onclick = () => {
            if(document.getElementById("answer").value == "298 Califoria") {
                setTimeout(() => {
                    mission8()
                }, 3000);
                document.getElementById("pilot").innerHTML = "<p>'1..2..3 Bang Database Exploited Successfully' - SQLKing</p>";
            } else {
                alert("You Made A Mistake Retry Again")
            }
        }
    }
    var mission8 = () => {
        document.getElementById("pilot").innerHTML = "<p>SQLKing : YoW, I SuCCeSSfuLLy HacKeD ThE prison DaTaBaSe It's CoNtAiNiNg ThEsE Tables : <code>sys</code> sys TaBlE CoNtAInIng The CoD3s Of All Dors And CaMeRas <code>name</code><code>code</code><code>isOpen</code>(0=door closed and 1=door opened),<code>prisoners</code> TaBlE CoNtAiNiNg <code>prisoner</code><code>join_date</code><code>out_date</code></p>; If YoU UnDerStOOd My WoRDes TyPe 'YES'</p>"
        document.getElementById("submit").onclick = () => {
            if(document.getElementById("answer").value == "YES") {
                setTimeout(() => {
                    mission9()
                }, 3000);
                document.getElementById("pilot").innerHTML = "<p>'gOOd LuCk BoY HAA333 @#' - SQLKing</p>";
            } else {
                alert("You Made A Mistake Retry Again")
            }
        }
    }
    var mission9 = () => {
        document.getElementById("pilot").innerHTML = "<p>Hey Bro Please Find The Password Of The Door (4-digits)</p>"
        document.getElementById("submit").onclick = () => {
            if(document.getElementById("answer").value == "1412") {
                setTimeout(() => {
                    mission10()
                }, 3000);
                document.getElementById("pilot").innerHTML = "<p>'One Four One Three' - James Jones</p>";
            } else {
                alert("You Made A Mistake Retry Again")
            }
        }
    }
    var mission10 = () => {
        document.getElementById("pilot").innerHTML = "<p>Oww Shiit We Have A Big Problem James Jones Made A Mistake And The Door Is Closed Now, Try To Open The Door By Changing His State, Type <code>done</code> If You Finish</p>"
        document.getElementById("submit").onclick = () => {
            if(document.getElementById("answer").value == "done") {
                var res = db.exec("SELECT * FROM sys")
                if (res[0]["values"][6][2]) {
                    setTimeout(() => {
                        last_mission()
                    }, 3000);
                    document.getElementById("pilot").innerHTML = "<p>'Finally I Saw The Light Again !!!' - Z-Hero SQL</p>";
                } else {
                    alert("You Made A Mistake Retry Again")
                }
            }
        }
    }
    var last_mission = () => {
        document.getElementById("pilot").innerHTML = "<p>I Don't Know If It's Good Or Bad News, Your Last Mission Is To DELETE Our Members From prisoners Table Who's they name ends with SQL, Type <code>done</code> If You Finish</p>"
        document.getElementById("submit").onclick = () => {
            var res = db.exec("SELECT * FROM prisoners")
            if (res[0] === undefined) {
                document.getElementById("pilot").innerHTML = "<p>Congratulations, You Just Finished The Game ,Wait For Next Part It Will Be More Better Incha Allah. Thank You For Playing Our Game And I Hope You Have A Great Day ;)</p>";
                document.getElementsByClassName("terminal")[0].innerHTML = "<h1>Congratulations</h1>";
                document.getElementsByClassName("sending")[0].style.display = "none";

            } else {
                alert("You Made A Mistake Retry Again")
            }
        }
    }
});
