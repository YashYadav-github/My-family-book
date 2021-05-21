var pics_array=[
    "familybook.jpeg",
    "IMG_20200126_192900.jpg",
    "rekhaBai.jpeg",
    "YashYadav.jpeg",
    ];

var text_array=[
    "Satish Kumar",
    "Rekha Bai",
    "Yash Yadav",
    "My Family Book",
    ];
    var o = 1;
    var y = 0;

function next() { 

 if(o == 4) {
 o=0;
 };

 document.getElementById("Family").src = pics_array[o];
 o++;

 if(y == 4){
    y=0; 
    }; 
 
 document.getElementById("family_text").innerHTML=text_array[y]; 
 y++;

};
