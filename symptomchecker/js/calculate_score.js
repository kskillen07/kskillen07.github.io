var test_name = ["TSH", "IL6", "CRP", "TNF"];

var tsh_score = 0;
var il_score = 0;
var crp_score = 0;
var tnf_score = 0;

var symptoms = ["fever", "joint_pain", "cough", 
"lightheadedness", "fatigue"];

function calculateTestScore(symptoms){
    var i;
    for (i = 0; i < symptoms.length; i++) {
        if(symptoms[i] == "joint_pain"){
            tsh_score++;
            il_score++;
            crp_score++;
            tnf_score++;
        } else if (symptoms[i] == "fever"){
            il_score++;
            crp_score++;
            tnf_score++;
        }
        else if (symptoms[i] == "chronic_inflammation"){
            il_score++;
            crp_score++;
            tnf_score++;
        }
        else if (symptoms[i] == "cough"){
            crp_score++;
            tnf_score++;
        }
        else if (symptoms[i] == "chronic_cough"){
            crp_score++;
            tnf_score++;
        }
        else if (symptoms[i] == "sputum_production"){
            crp_score++;
            tnf_score++;
        }
        else if (symptoms[i] == "palpitations"){
            tsh_score++;
        }
        else if (symptoms[i] == "lightheadedness" || symptoms[i] == "fatigue" || symptoms[i] == "daytime_sleepiness"){
            tsh_score++;
            tsh_score++;
        }
        else if (symptoms[i] == "diarrhoea"){
            tsh_score++;
        }
        else if (symptoms[i] == "increase_in_thirst"){
            il_score++;
        } else {
            tsh_score++;
        }
    }

    var final_score = [tsh_score,il_score,crp_score,tnf_score];
    
    // alert(final_score + "//" + test_name[indexOfMax(final_score)] + " TEST");
    window.location.replace("result.html?result=" + test_name[indexOfMax(final_score)]);
}

function indexOfMax(arr) {
    if (arr.length === 0) {
        return -1;
    }

    var max = arr[0];
    var maxIndex = 0;

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            maxIndex = i;
            max = arr[i];
        }
    }

    return maxIndex;
}

// calculateTestScore(symptoms);