enum Sex {
    MALE,
    FEMALE,
    UNKNOWN,
}

let member_sex: Sex = Sex.FEMALE;
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

function checkSex(sex: Sex) {
    let result: string = "";
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
