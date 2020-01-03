var Sex;
(function (Sex) {
    Sex[Sex["MALE"] = 0] = "MALE";
    Sex[Sex["FEMALE"] = 1] = "FEMALE";
    Sex[Sex["UNKNOWN"] = 2] = "UNKNOWN";
})(Sex || (Sex = {}));
var member_sex = Sex.FEMALE;
console.log(member_sex);
console.log(Sex[member_sex]);
// switch (+member_sex) {
//     case Sex.MALE:
//         console.log("男");
//         break;
//     case Sex.FEMALE:
//         console.log("女");
//         break;
//     case Sex.UNKNOWN:
//         console.log("不明");
//         break;
// }
console.log(checkSex(member_sex));
function checkSex(sex) {
    var result = "";
    switch (sex) {
        case Sex.MALE:
            result = "男";
            break;
        case Sex.FEMALE:
            result = "女";
            break;
        case Sex.UNKNOWN:
            result = "不明";
            break;
    }
    return result;
}
